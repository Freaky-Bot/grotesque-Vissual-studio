import * as THREE from 'three';
import { ItemType, ITEM_INFO } from './InventorySystem';
import { loadModel, applyModel, playAnimation, MODEL_NAMES } from './ModelLoader';

export abstract class BaseNPC {
    protected position: THREE.Vector3;
    protected velocity: THREE.Vector3;
    protected mesh: THREE.Group | THREE.Mesh;
    protected isAlive_: boolean = true;
    protected targetAngle: number = 0;
    protected dialogues: string[] = [];
    protected dialogueTimer: number = 0;
    protected bubbleHeadOffset: number = 3.5; // how high above position to show bubble, override per npc type
    private speakCallback: ((pos: THREE.Vector3, text: string, headOffset: number) => void) | null = null;

    // health -- everyone has hp now. welcome to combat zone.
    protected hp: number = 40;
    protected maxHp: number = 40;
    private attackTimer_: number = 0;
    protected attackInterval_: number = 2.0;
    protected stunTimer: number = 0; // lol they cant move or attack when stunned

    // npc item system -- they loot stuff off corpses and actually USE it. terrifying.
    public equippedItem: ItemType | null = null;
    private itemUseCooldown: number = 0;        // seconds until they can use the item again
    private readonly ITEM_USE_INTERVAL: number = 8; // use item every ~8s if they have one
    public npcShieldHits: number = 0;           // from shield item
    public npcInvincible: boolean = false;       // from star_piece
    private npcInvincibleTimer: number = 0;

    // domain expansion fields -- the secret power within the soul. ugh this is so cool.
    // combat tracker -- how long since this npc was actually fighting somebody
    // reset on hit received AND on successful hit landed, so both sides count
    private timeSinceCombat: number = Infinity;  // starts infinite so fresh-spawned npcs dont pop domain
    private readonly COMBAT_WINDOW: number = 8;  // seconds of "recently in combat" after last hit/attack

    // -- hostility tracking -- who hates who and for how long --
    // henceforth this system doth record every grudge upon the battlefield ⚔️
    private hostileToPlayerTimer: number = 0;  // countdown til de-aggro from player
    private hostileToNpcTimer: number = 0;     // countdown til de-aggro from other npcs
    private readonly HOSTILE_DURATION: number = 15; // seconds until they chill out and forget

    public domainActive: boolean = false;
    protected domainTimer: number = 0;      // counts down while domain is open
    private domainCooldown: number = 0;     // 60s lockout after each use
    private readonly DOMAIN_CHANCE_BASE: number = 0.003;    // 0.3% per second normally
    private readonly DOMAIN_CHANCE_LOW_HP: number = 0.025;  // 2.5% per second when below 25% HP
    private readonly DOMAIN_COOLDOWN_SECS: number = 60;

    // domain buff -- special abilities that activate while domain is open. each npc type gets its own
    // these are NOT permanent -- they get wiped with clearDomainBuff() when domain collapses
    public domainSpeedMult: number = 1;         // speed multiplier, >1 = faster
    public domainDamageMult: number = 1;        // attack damage multiplier
    public domainDmgReduction: number = 0;      // % damage reduction (0 to 1, 0.5 = half damage)
    public domainAttackIntervalMult: number = 1;// <1 = attack faster, >1 = attack slower
    public domainInvulnerable: boolean = false; // yep. some npcs just have it.

    // per-type domain buff map -- called in forceActivateDomain and cleared in tickDomain
    // each npc type has its THING while domain is open. its flavor. its soul.
    private applyDomainBuff(): void {
        const type = this.getType();
        // reset first so stacking doesnt happen if somehow called twice ugh
        this.domainSpeedMult = 1;
        this.domainDamageMult = 1;
        this.domainDmgReduction = 0;
        this.domainAttackIntervalMult = 1;
        this.domainInvulnerable = false;

        switch (type) {
            case 'normal':   this.domainSpeedMult = 4.0; this.domainDamageMult = 1.5; break;   // just goes absolutely feral lol
            case 'jesus':    this.domainInvulnerable = true; this.domainDamageMult = 0.5; break; // jesus literally cannot die in his own domain
            case 'robot':    this.domainAttackIntervalMult = 0.25; this.domainDamageMult = 2.0; break; // RAPID FIRE calculator mode
            case 'orb':      this.domainDamageMult = 3.5; this.domainDmgReduction = 0.4; break; // the orb sees all and HURTS
            case 'angel':    this.domainSpeedMult = 2.5; this.domainDamageMult = 2.0; break;   // angelic speed + holy smackdown
            case 'pirate':   this.domainDamageMult = 2.5; this.domainDmgReduction = 0.3; break; // davy jones dont get hit easily
            case 'wizard':   this.domainSpeedMult = 3.0; this.domainDamageMult = 2.5; break;   // teleporting mage mode
            case 'vampire':  this.domainDamageMult = 2.0; this.domainDmgReduction = 0.5; break; // half damage in + he drains you
            case 'disco':    this.domainSpeedMult = 5.0; this.domainDamageMult = 1.2; break;   // TURBO DISCO. 5x speed. suffers.
            case 'shadow':   this.domainDamageMult = 4.0; this.domainDmgReduction = 0.6; break; // shadow mode kills in 2 hits. terrifying.
            case 'barney':   this.domainInvulnerable = true; this.domainSpeedMult = 0.5; break; // barney is just UNKILLABLE (slow tho)
            case 'emo':      this.domainDamageMult = 5.0; this.domainDmgReduction = -0.5; break;// emo is a glass cannon. takes 150% dmg. deals 5x.
            case 'shrek':    this.domainDmgReduction = 0.7; this.domainSpeedMult = 0.4; break;  // SWAMP TANK. barely moves. cant be hurt.
            case 'buffcat':  this.domainDamageMult = 6.0; this.domainDmgReduction = 0.5; break; // the most jacked thing in this codebase
            case 'voidcat':  this.domainInvulnerable = true; this.domainDamageMult = 3.0; break; // voidcat just phases out. untouchable.
            case 'hybrid':   // chaotic random buff. nobody knows.
                this.domainSpeedMult = 1 + Math.random() * 4;
                this.domainDamageMult = 1 + Math.random() * 5;
                this.domainDmgReduction = Math.random() * 0.7;
                break;
            case 'obama':   this.domainSpeedMult = 2.0; this.domainDamageMult = 2.0; this.domainDmgReduction = 0.3; break; // hope-fueled sprint + 30% armor
            case 'trump':   this.domainDamageMult = 2.5; this.domainDmgReduction = 0.6; this.domainSpeedMult = 0.8; break; // TREMENDOUS wall = tanky but slow
            // 20 new ones. the realm expands. verily.
            case 'chef':        this.domainSpeedMult = 1.5; this.domainDamageMult = 2.0; this.domainDmgReduction = 0.3; break;
            case 'astronaut':   this.domainDmgReduction = 0.5; this.domainAttackIntervalMult = 1.5; break; // floaty, tanky, slow
            case 'cowboy':      this.domainDamageMult = 3.0; this.domainAttackIntervalMult = 0.5; break; // quick draw yee haw
            case 'ninja':       this.domainSpeedMult = 6.0; this.domainDamageMult = 2.5; this.domainAttackIntervalMult = 0.3; break;
            case 'samurai':     this.domainDamageMult = 4.0; this.domainDmgReduction = 0.4; break;
            case 'clown':       this.domainSpeedMult = 1 + Math.random() * 5; this.domainDamageMult = 1 + Math.random() * 4; break; // pure chaos
            case 'zombie':      this.domainInvulnerable = true; this.domainSpeedMult = 0.4; this.domainDamageMult = 1.5; break;
            case 'pharaoh':     this.domainDamageMult = 3.5; this.domainDmgReduction = 0.5; this.domainSpeedMult = 0.8; break;
            case 'knight':      this.domainDmgReduction = 0.7; this.domainDamageMult = 1.5; this.domainSpeedMult = 0.6; break;
            case 'scientist':   this.domainAttackIntervalMult = 0.2; this.domainDamageMult = 2.5; break;
            case 'mummy':       this.domainSpeedMult = 0.5; this.domainDamageMult = 2.0; this.domainDmgReduction = 0.4; break;
            case 'detective':   this.domainDamageMult = 2.5; this.domainAttackIntervalMult = 0.6; break;
            case 'firefighter': this.domainDamageMult = 3.0; this.domainSpeedMult = 1.8; break;
            case 'biker':       this.domainSpeedMult = 4.5; this.domainDamageMult = 2.0; break;
            case 'princess':    this.domainDamageMult = 3.5; this.domainDmgReduction = 0.3; this.domainSpeedMult = 1.5; break;
            case 'ghost':       this.domainInvulnerable = true; this.domainDamageMult = 1.8; break;
            case 'luchador':    this.domainDamageMult = 4.5; this.domainAttackIntervalMult = 0.4; this.domainDmgReduction = 0.2; break;
            case 'fairy':       this.domainInvulnerable = true; this.domainSpeedMult = 2.0; break;
            case 'caveman':     this.domainDamageMult = 5.5; this.domainSpeedMult = 0.7; break; // glass cannon. biggest damage.
            case 'alien':       this.domainDamageMult = 2.0; this.domainDmgReduction = 0.4; this.domainSpeedMult = 2.5; break;
            // the chaos 7 domain buffs -- each one built different
            case 'viking':     this.domainSpeedMult = 5.0; this.domainDamageMult = 3.5; break; // BERSERKER CHARGE. unstoppable.
            case 'dj':         this.domainSpeedMult = 2.0; this.domainDamageMult = 1.5; this.domainAttackIntervalMult = 0.4; break; // rapid beat drops
            case 'cop':        this.domainDamageMult = 2.5; this.domainDmgReduction = 0.4; this.domainSpeedMult = 1.8; break; // authorized to use full force
            case 'demon':      this.domainDamageMult = 4.0; this.domainDmgReduction = 0.3; this.domainInvulnerable = false; break; // corruption made manifest
            case 'baby':       this.domainSpeedMult = 8.0; this.domainDamageMult = 1.2; break; // BABY TURBO. just goes so fast. scary.
            case 'elder':      this.domainSpeedMult = 0.3; this.domainDamageMult = 6.0; this.domainDmgReduction = 0.8; break; // slow but literally unkillable and one-shots
            case 'glitch':     this.domainDamageMult = 3.0; this.domainInvulnerable = true; break; // cant kill what u cant track
            case 'elmo':       this.domainSpeedMult = 5.0; this.domainDamageMult = 3.0; break; // ELMO IS RUNNING AT YOU. FULL SPEED. LAUGHING.
        }
    }
    // wipe all buff fields back to neutral -- call this when the domain collapses
    public clearDomainBuff(): void {
        this.domainSpeedMult = 1;
        this.domainDamageMult = 1;
        this.domainDmgReduction = 0;
        this.domainAttackIntervalMult = 1;
        this.domainInvulnerable = false;
    }

    // gravity + jumping -- grounded npcs get this for free
    protected verticalVelocity: number = 0;
    protected isGrounded: boolean = true;
    protected readonly GROUND_Y: number = 2;
    private readonly GRAVITY: number = -28;
    private readonly NPC_JUMP_FORCE: number = 10;

    // flee at low HP -- when we're at death's door, haul ass away from the player.
    // i'm not angry. i'm just disappointed that we didn't add this earlier. -- disappointed parent
    protected fleeTarget: THREE.Vector3 | null = null;  // flee away from this position
    protected fleeTimer_: number = 0;                   // how long to keep fleeing (reset each hit)
    private readonly FLEE_THRESHOLD: number = 0.20;     // flee below 20% HP
    private readonly FLEE_SPEED_MULT: number = 2.2;     // flee faster than normal move

    // CHASE TARGET -- set by NPCManager when this npc is hostile to the player
    // without this they just wander randomly and never actually fight back. pathetic.
    public chaseTarget: THREE.Vector3 | null = null;

    // GLB model animation mixer -- null means using procedural mesh (no animations)
    protected glbMixer: THREE.AnimationMixer | null = null;
    protected glbLoaded: boolean = false; // true once GLB replaces the procedural mesh

    constructor(position: THREE.Vector3) {
        this.position = position.clone();
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.mesh = new THREE.Group();
    }

    public abstract update(deltaTime: number): void;

    protected randomWalk(deltaTime: number, speed: number = 2): void {
        // frozen -- cant go anywhere ugh whatever
        if (this.isStunned()) {
            this.applyGravity(deltaTime);
            this.mesh.position.copy(this.position);
            return;
        }

        // FLEE MODE -- activated at low HP. the npc runs away like a coward. smart coward.
        if (this.fleeTimer_ > 0) this.fleeTimer_ -= deltaTime;
        const hpPct = this.hp / Math.max(1, this.maxHp);
        const shouldFlee = hpPct < this.FLEE_THRESHOLD && this.fleeTarget !== null;
        if (shouldFlee) {
            // flee timer: keep fleeing a bit even after fleeTarget cleared
            if (this.fleeTimer_ <= 0) this.fleeTimer_ = 2.5;
            // point away from the threat
            const awayDir = this.position.clone().sub(this.fleeTarget!).normalize();
            const fleeSpeed = speed * this.FLEE_SPEED_MULT * this.domainSpeedMult;
            this.velocity.x = awayDir.x * fleeSpeed;
            this.velocity.z = awayDir.z * fleeSpeed;
            this.targetAngle = Math.atan2(this.velocity.x, this.velocity.z);
            this.applyGravity(deltaTime);
            this.position.add(this.velocity.clone().multiplyScalar(deltaTime));
            this.position.x = Math.max(-200, Math.min(200, this.position.x));
            this.position.z = Math.max(-200, Math.min(200, this.position.z));
            this.mesh.position.copy(this.position);
            if (this.mesh.rotation) this.mesh.rotation.y += (this.targetAngle - this.mesh.rotation.y) * 0.15;
            return;
        }
        // just vibing randomly lol
        if (Math.random() < 0.03) {
            this.targetAngle = Math.random() * Math.PI * 2;
        }

        // CHASE MODE: if hostile to player and we have a chase target, override random walk and GO GET EM
        // this is why npcs now actually fight back. revolutionary. they were literally just wandering before. ugh.
        if (this.chaseTarget && this.hostileToPlayerTimer > 0) {
            const dx = this.chaseTarget.x - this.position.x;
            const dz = this.chaseTarget.z - this.position.z;
            const distToPlayer = Math.sqrt(dx * dx + dz * dz);
            // only chase if not already in attack range -- no point running INTO the player
            if (distToPlayer > 2.5) {
                this.targetAngle = Math.atan2(dx, dz);
            }
        }

        // occasional random jump -- about once every 4-8 seconds statistically
        if (this.isGrounded && Math.random() < 0.004) {
            this.verticalVelocity = this.NPC_JUMP_FORCE;
            this.isGrounded = false;
        }

        // apply gravity
        this.applyGravity(deltaTime);

        // zoooom -- domain buff can make this VERY fast or extremely slow
        const effectiveSpeed = speed * this.domainSpeedMult;
        this.velocity.x = Math.cos(this.targetAngle) * effectiveSpeed;
        this.velocity.z = Math.sin(this.targetAngle) * effectiveSpeed;

        this.position.add(this.velocity.clone().multiplyScalar(deltaTime));

        // keep em from escaping :)
        this.position.x = Math.max(-200, Math.min(200, this.position.x));
        this.position.z = Math.max(-200, Math.min(200, this.position.z));

        // update the mesh cuz three.js demands it
        this.mesh.position.copy(this.position);
        if (this.mesh instanceof THREE.Group || this.mesh.rotation) {
            this.mesh.rotation.y += (this.targetAngle - this.mesh.rotation.y) * 0.1; // smooth turning uwu
        }
    }

    // gravity tick -- call this every frame for any grounded npc, sets position.y
    protected applyGravity(deltaTime: number): void {
        this.verticalVelocity += this.GRAVITY * deltaTime;
        this.position.y += this.verticalVelocity * deltaTime;
        if (this.position.y <= this.GROUND_Y) {
            this.position.y = this.GROUND_Y;
            this.verticalVelocity = 0;
            this.isGrounded = true;
        }
    }

    protected speak(): void {
        if (this.dialogues.length > 0) {
            const dialogue = this.dialogues[Math.floor(Math.random() * this.dialogues.length)];
            console.log(`🐱 ${dialogue}`); // MEOW broadcast
            this.speakCallback?.(this.position, dialogue, this.bubbleHeadOffset);
        }
    }

    public setSpeakCallback(fn: (pos: THREE.Vector3, text: string, headOffset: number) => void): void {
        this.speakCallback = fn; // hook in the bubble manager
    }

    public getMesh(): THREE.Group | THREE.Mesh {
        return this.mesh;
    }

    // tryLoadGLBModel -- async, loads the GLB for this NPC type and swaps the mesh.
    // falls back gracefully to procedural if file doesn't exist. no crash, no drama.
    protected async tryLoadGLBModel(targetScale: number = 2.2): Promise<void> {
        const type = this.getType();
        const glbName = MODEL_NAMES[type];
        if (!glbName) return;

        const loaded = await loadModel(glbName);
        if (!loaded) return;

        if (this.mesh instanceof THREE.Group) {
            while (this.mesh.children.length > 0) {
                this.mesh.remove(this.mesh.children[0]);
            }
            const mixer = applyModel(this.mesh as THREE.Group, loaded, targetScale);
            if (mixer) {
                this.glbMixer = mixer;
                playAnimation(mixer, loaded.animations, 'idle', false)
                    ?? playAnimation(mixer, loaded.animations, 'Idle', false);
            }
            this.glbLoaded = true;
        }
    }

    // tick the animation mixer in the update loop when using GLB models
    protected tickGLBMixer(deltaTime: number): void {
        if (this.glbMixer) this.glbMixer.update(deltaTime);
    }

    public getPosition(): THREE.Vector3 {
        return this.position;
    }

    // teleport the npc to a new position -- used by domain wall enforcement so they dont phase through walls
    // verily this method doth move the entity to its appointed coordinates. honor demands it.
    public setPosition(p: THREE.Vector3): void {
        this.position.copy(p);
        this.mesh.position.set(p.x, this.mesh.position.y, p.z); // preserve y (head bob offset)
    }

    public isAlive(): boolean {
        return this.isAlive_;
    }

    public die(): void {
        this.isAlive_ = false;
    }

    public getHp(): number { return this.hp; }
    public getMaxHp(): number { return this.maxHp; }

    // stun -- freezes movement + blocks attacks. disco ball does this, glue trap too, etc.
    public stun(duration: number): void {
        this.stunTimer = Math.max(this.stunTimer, duration);
    }
    public tickStun(dt: number): void { this.stunTimer = Math.max(0, this.stunTimer - dt); }
    public isStunned(): boolean { return this.stunTimer > 0; }

    // force an npc to say something -- for party hat etc
    public triggerSpeak(): void { this.speak(); }

    // setFleeTarget -- NPCManager calls this every frame with the player position
    // when HP < 20%, the npc will bolt away from this position. cowardly. sensible.
    public setFleeTarget(pos: THREE.Vector3 | null): void {
        this.fleeTarget = pos;
    }

    // set hp ceiling + refill -- call this right after constructing the npc
    public setMaxHp(newMax: number): void {
        this.maxHp = newMax;
        this.hp = newMax;
    }

    // returns damage dealt this tick (0 if not attacking or out of range)
    public tickAttack(playerPos: THREE.Vector3, deltaTime: number, range: number, damage: number): number {
        if (damage <= 0) return 0;
        if (this.stunTimer > 0) return 0; // stunned = cant attack, obviously
        this.attackTimer_ -= deltaTime;
        this.timeSinceCombat += deltaTime; // tick up every frame
        // domain buff: attack interval mult (<1 = faster -- robot mode, robot goes brrrr)
        const cooldown = this.attackInterval_ * this.domainAttackIntervalMult;
        if (this.attackTimer_ <= 0) {
            const dist = this.position.distanceTo(playerPos);
            if (dist <= range) {
                this.attackTimer_ = Math.max(0.1, cooldown); // never go below 0.1s so it doesnt nuke instantly
                this.timeSinceCombat = 0; // landed a hit -- we are definitely in combat now
                return damage * this.domainDamageMult; // domain buff multiplies damage. scary.
            }
            this.attackTimer_ = 0.2;
        }
        return 0;
    }

    // true when this npc has been hit or hit someone within the last COMBAT_WINDOW seconds
    public isInCombat(): boolean {
        return this.timeSinceCombat < this.COMBAT_WINDOW;
    }

    // called externally (e.g. player attack, npc vs npc) to register that combat is happening
    public markCombat(): void {
        this.timeSinceCombat = 0;
    }

    // -- hostility management -- mark, query, and tick the grudge system --
    // henceforth these methods doth flag enemies as hostile and track the timer ⚔️
    public markHostileToPlayer(): void {
        this.hostileToPlayerTimer = this.HOSTILE_DURATION;
        this.timeSinceCombat = 0; // hostile = definitely in combat. no dispute.
    }

    public markHostileToNpc(): void {
        this.hostileToNpcTimer = this.HOSTILE_DURATION;
        this.timeSinceCombat = 0; // mutual beef activated
    }

    public isHostileToPlayer(): boolean { return this.hostileToPlayerTimer > 0; }
    public isHostileToNpc(): boolean    { return this.hostileToNpcTimer > 0; }
    // true if actively hostile to anything -- player OR other npcs
    public isHostile(): boolean         { return this.hostileToPlayerTimer > 0 || this.hostileToNpcTimer > 0; }

    // call every frame to decay hostility timers -- they DO eventually calm down (15s)
    public tickHostility(dt: number): void {
        if (this.hostileToPlayerTimer > 0) this.hostileToPlayerTimer = Math.max(0, this.hostileToPlayerTimer - dt);
        if (this.hostileToNpcTimer > 0) this.hostileToNpcTimer = Math.max(0, this.hostileToNpcTimer - dt);
    }

    // domain expansion tick -- call from NPCManager every frame
    // returns true if domain just activated this tick (so NPCManager can open it)
    // targetInRange = true means something this npc is HOSTILE TO is within pull radius
    // both conditions required: in range + flagged hostile. desperate hp overrides.
    public tickDomain(dt: number, targetInRange: boolean = false): boolean {
        // cool down after previous domain
        if (this.domainCooldown > 0) {
            this.domainCooldown -= dt;
        }

        // count down the active domain
        if (this.domainActive) {
            this.domainTimer -= dt;
            if (this.domainTimer <= 0) {
                this.domainActive = false;
                this.domainCooldown = this.DOMAIN_COOLDOWN_SECS;
                this.clearDomainBuff(); // power goes away when domain collapses. back to cringe normal mode.
            }
            return false; // already open, not "just activated"
        }

        // two conditions to roll:
        // 1. target in range AND this npc is flagged hostile to that target (15s grudge timer, proper system)
        // 2. OR desperate: below 25% hp -- fires regardless, its a last stand, they dont care anymore
        if (this.domainCooldown <= 0 && this.isAlive_) {
            const hpPct = this.hp / Math.max(1, this.maxHp);
            const desperate = hpPct < 0.25;
            const readyToFight = targetInRange && this.isHostile(); // uses da proper hostility system now uwu
            if (readyToFight || desperate) {
                const chance = desperate ? this.DOMAIN_CHANCE_LOW_HP : this.DOMAIN_CHANCE_BASE;
                if (Math.random() < chance * dt) {
                    return this.forceActivateDomain(12);
                }
            }
        }
        return false;
    }

    // force-activate (used at spawn for the 10% chance spawn-with-it)
    public forceActivateDomain(duration: number = 12): boolean {
        if (this.domainActive) return false;
        this.domainActive = true;
        this.domainTimer = duration;
        this.applyDomainBuff(); // THIS IS THE MOMENT. the power awakens. npc gets its thing now.
        return true;
    }

    public isDomainActive(): boolean { return this.domainActive; }

    // override takeDamage to check npc shield/invincible before reducing hp
    // fromPlayer = true marks this npc as hostile to the player -- set when player initiates the attack
    public takeDamage(dmg: number, fromPlayer: boolean = false): void {
        if (this.npcInvincible) return;
        if (this.domainInvulnerable) return; // domain buff: some npcs literally cannot die inside their domain. suck it.
        if (this.npcShieldHits > 0) { this.npcShieldHits--; return; }
        this.timeSinceCombat = 0; // got hit = in combat. obviously.
        if (fromPlayer) this.markHostileToPlayer(); // player bonked us -- we remember this (15s grudge)
        // domain dmgReduction: positive = reduced dmg (tanky), negative = extra dmg (emo mode)
        const reducedDmg = dmg * (1 - this.domainDmgReduction);
        this.hp = Math.max(0, this.hp - reducedDmg);
        if (this.hp <= 0) this.die();
    }

    // equip a looted item -- passives kept forever, consumables stored for periodical use
    public equipItem(item: ItemType): void {
        this.equippedItem = item;
        this.itemUseCooldown = 1.5; // small delay before first use so they dont instantly nuke you
        this.speak(); // announce it like a little gremlin
    }

    // tick item -- returns a descriptor of what effect happened this frame (if any), for NPCManager to act on
    // 'heal' | 'bomb' | 'speed' | 'shield' | 'invincible' | null
    public tickNpcItem(dt: number, _nearbyNpcs: BaseNPC[], _playerPos: THREE.Vector3 | null): 'heal' | 'bomb' | 'speed' | 'shield' | 'invincible' | 'stun_all' | null {
        if (this.npcInvincibleTimer > 0) {
            this.npcInvincibleTimer -= dt;
            if (this.npcInvincibleTimer <= 0) this.npcInvincible = false;
        }

        if (!this.equippedItem) return null;
        this.itemUseCooldown -= dt;
        if (this.itemUseCooldown > 0) return null;

        const item = this.equippedItem;
        const info = ITEM_INFO[item];

        // passives: apply continuously, never consume
        if (['sword', 'cat_charm', 'flaming_sword', 'giant_hammer', 'void_armor',
             'cursed_ring', 'shrek_ears', 'cat_crown', 'cheese_armor', 'moon_shard',
             'spring_shoes', 'void_blade', 'lucky_charm', 'laser_pointer'].includes(item)) {
            this.itemUseCooldown = 99999; // passive -- never "use" again, stat bonus is implicit
            return null;
        }

        // consumables -- use it and set cooldown (some are one-time, reroll after use)
        this.itemUseCooldown = this.ITEM_USE_INTERVAL + Math.random() * 4;
        this.equippedItem = null; // item consumed -- will loot next kill

        if (['potion', 'mega_potion', 'cheese', 'bandage', 'holy_water'].includes(item)) {
            // healing: restore hp
            this.hp = Math.min(this.maxHp, this.hp + (item === 'mega_potion' ? this.maxHp : 40));
            this.triggerSpeak();
            return 'heal';
        }
        if (['bomb', 'nuke', 'void_shard', 'plasma_cannon', 'boomerang', 'lightning',
             'cheese_wheel', 'onion', 'turbo_fish'].includes(item)) {
            // offensive: signal NPCManager to deal AoE damage near this npc
            return 'bomb';
        }
        if (['fish', 'turbo_fish', 'coffee', 'hot_sauce'].includes(item)) {
            return 'speed';
        }
        if (item === 'shield') {
            this.npcShieldHits = 3;
            return 'shield';
        }
        if (item === 'star_piece') {
            this.npcInvincible = true;
            this.npcInvincibleTimer = 3;
            return 'invincible';
        }
        if (['disco_ball', 'glue_trap', 'megaphone', 'party_hat'].includes(item)) {
            return 'stun_all'; // stun nearby NPCs (and maybe player)
        }
        // everything else -- chaos. just heal a lil as fallback.
        this.hp = Math.min(this.maxHp, this.hp + 15);
        return 'heal';

        void info; // suppress unused warning. whatever.
    }

    public abstract getType(): string;
}
