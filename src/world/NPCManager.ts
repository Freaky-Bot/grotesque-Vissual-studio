import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';
import { CatNPC, CatType } from './CatNPC';
import { BarneyNPC } from './BarneyNPC';
import { EmoNPC } from './EmoNPC';
import { ShrekNPC } from './ShrekNPC';
import { BuffCatNPC } from './BuffCatNPC';
import { VoidCatNPC } from './VoidCatNPC';
import { ObamaNPC } from './ObamaNPC';
import { TrumpNPC } from './TrumpNPC';
import { DomainExpansionSystem, DOMAIN_DEFS } from './DomainExpansionSystem';
import { InventorySystem, ITEM_INFO } from './InventorySystem';

export class NPCManager {
    private npcs: BaseNPC[] = [];
    private scene: THREE.Scene;
    private spawnTimer: number = 0;
    private spawnInterval: number = 5; // Spawn new NPCs every 5 seconds (or whenever they feel like it lol)
    private bubbleCb: ((pos: THREE.Vector3, text: string, headOffset: number) => void) | null = null;
    private playerPos: THREE.Vector3 | null = null; // updated each frame for stand targeting
    private onMudHit: ((slowDuration: number) => void) | null = null; // set from main for shrek mud
    private worldGenerator: { damageBuildingNear: (pos: THREE.Vector3, r: number) => void } | null = null;

    // combat callbacks -- main.ts wires these upp
    public onPlayerHit: ((dmg: number) => void) | null = null;
    public onNpcKilled: ((npcType: string, pos: THREE.Vector3) => void) | null = null;
    // called when a mob equips a looted item -- main.ts can show a chat msg
    public onNpcEquipItem: ((npcType: string, itemName: string) => void) | null = null;
    // called when a domain opens and npc gets its special ability -- so main.ts can scream about it
    public onDomainBuff: ((npcType: string, buffDesc: string) => void) | null = null;

    // npc-vs-npc combat timer -- they fight each other every few seconds
    private npcFightTimer: number = 0;
    private readonly NPC_FIGHT_INTERVAL: number = 1.2; // seconds between inter-npc attacks
    private readonly NPC_FIGHT_RANGE: number = 5.0;
    private readonly NPC_FIGHT_DMG: number = 8;

    // domain expansion -- the show accurate jjk system. whoever wired this: ur insane (me. i did this.)
    private domainSystem: DomainExpansionSystem | null = null;
    public onDomainActivated: ((name: string, flavor: string) => void) | null = null;

    // what each npc type gets when its domain opens -- shown in the chat so the player knows what hit them
    private static readonly DOMAIN_BUFF_DESCS: Record<string, string> = {
        normal:  '4x SPEED + double damage -- ITS GOING FERAL',
        jesus:   'INVULNERABLE -- you literally cannot kill jesus in his own domain',
        robot:   '4x ATTACK SPEED + 2x damage -- RAPID FIRE CALCULATOR',
        orb:     '3.5x damage + 40% damage resist -- THE ORB IS ANGRY',
        angel:   '2.5x speed + 2x damage -- ANGELIC RAMPAGE',
        pirate:  '2.5x damage + 30% armor -- DAVY JONES MODE',
        wizard:  '3x speed + 2.5x damage -- TELEPORTING MAGE',
        vampire: '2x damage + 50% damage resist -- UNTOUCHABLE BLOODSUCKER',
        disco:   '5x SPEED -- TURBO DISCO CANNOT STOP WILL NOT STOP',
        shadow:  '4x damage + 60% damage resist -- ONE SHOT SHADOW',
        barney:  'INVULNERABLE (but slow) -- BARNEY CANNOT BE DEFEATED BY MORTALS',
        emo:     '5x damage BUT takes 150% dmg -- GLASS CANNON EMO RAGE',
        shrek:   '70% damage resist -- SWAMP TANK CANNOT BE MOVED',
        buffcat: '6x damage + 50% armor -- THE MOST JACKED THING ON THIS MAP',
        voidcat: 'INVULNERABLE + 3x damage -- VOID CAT PHASES OUT OF REALITY',
        hybrid:  'RANDOM BUFFS -- nobody knows. not even the hybrid. chaos.',
        obama:   '2x speed + 2x damage + 30% armor -- YES WE CAN. AND YES HE WILL.',
        trump:   '2.5x damage + 60% armor -- THE TREMENDOUS WALL PROTECTS HIM. BELIEVE ME.',
    };

    // how hard each npc type hits + at what range. barney = 0 bc he loves u
    private static readonly NPC_ATTACK_STATS: Record<string, { dmg: number; range: number }> = {
        cat:     { dmg: 5,  range: 3.0 },
        barney:  { dmg: 0,  range: 0   },
        emo:     { dmg: 12, range: 7.0 },
        shrek:   { dmg: 20, range: 4.5 },
        buffcat: { dmg: 15, range: 3.5 },
        voidcat: { dmg: 8,  range: 5.0 },
        hybrid:  { dmg: 10, range: 3.0 },
        obama:   { dmg: 12, range: 4.5 }, // hope hurts apparently
        trump:   { dmg: 15, range: 3.5 }, // tremendous damage. bigly.
    };

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        // domain system needs the scene for the big glowing sphere visuals
        this.domainSystem = new DomainExpansionSystem(scene);
        this.domainSystem.onDomainOpen = (name, flavor) => this.onDomainActivated?.(name, flavor);
        this.domainSystem.onDomainClose = (name) => console.log(`%c💨 Domain "${name}" collapsed`, 'color:#888;');
        // spawn barney right away, he's always here, he was always here
        this.spawnBarney();
        // spawn an emo too, every world needs one sad boi
        this.spawnEmo();
        // and shrek. he owns this swamp.
        this.spawnShrek();
        // buff cat has to get those gains in
        this.spawnBuffCat();
        // void cat -- one at all times in the world, watching
        this.spawnVoidCat();
        // the political duo. unexpected. unasked for. here anyway.
        this.spawnObama();
        this.spawnTrump();
    }

    public setBubbleCallback(fn: (pos: THREE.Vector3, text: string, headOffset: number) => void): void {
        this.bubbleCb = fn;
        // also wire up any npcs already existing (hybrid offspring etc get added via addNPC)
        for (const npc of this.npcs) npc.setSpeakCallback(fn);
    }

    public addNPC(npc: BaseNPC): void {
        if (this.bubbleCb) npc.setSpeakCallback(this.bubbleCb); // wire bubble on the fly
        this.npcs.push(npc); // just yeet it in there
    }

    public removeNPC(npc: BaseNPC): void {
        const index = this.npcs.indexOf(npc);
        if (index > -1) {
            this.npcs.splice(index, 1); // bye felicia
            if (npc.getMesh().parent) {
                npc.getMesh().parent?.remove(npc.getMesh());
            }
        }
    }

    public update(deltaTime: number): void {
        // make all the kitties go brrrr
        for (const npc of this.npcs) {
            // pass player pos to emos so their stand knows where to aim
            if (npc instanceof EmoNPC && this.playerPos) {
                npc.setPlayerRef(this.playerPos);
            }
            // shrek gets player pos for mud attacks
            if (npc instanceof ShrekNPC && this.playerPos) {
                npc.setPlayerRef(this.playerPos);
            }
            // obama + trump need player pos for their projectiles ugh
            if (npc instanceof ObamaNPC && this.playerPos) {
                npc.setPlayerRef(this.playerPos);
            }
            if (npc instanceof TrumpNPC && this.playerPos) {
                npc.setPlayerRef(this.playerPos);
            }
            // buff cat doing zoomies can damage buildings
            if (npc instanceof BuffCatNPC && this.worldGenerator) {
                this.worldGenerator.damageBuildingNear(npc.getPosition(), 10);
            }
            // tick stun timer before updating -- stunned npcs cant move or attack
            npc.tickStun(deltaTime);
            npc.update(deltaTime);

            // domain expansion tick -- might return true if it just awakened right now
            if (this.domainSystem) {
                const justOpened = npc.tickDomain(deltaTime);
                if (justOpened) {
                    // open the domain using the npc's type as the key
                    const defKey = npc.getType();
                    this.domainSystem.openDomain(
                        { getPosition: () => npc.getPosition(), takeDamage: (d) => npc.takeDamage(d), getType: () => npc.getType(), hp: npc.getHp(), maxHp: npc.getMaxHp() },
                        DOMAIN_DEFS[defKey] ? defKey : 'normal',
                        this.playerPos ?? undefined,  // pass playerPos so domain knows if player is trapped inside
                    );
                    // announce the domain buff so main.ts can show it in chat
                    const buffDesc = NPCManager.DOMAIN_BUFF_DESCS[defKey] ?? 'power unknown';
                    this.onDomainBuff?.(defKey, buffDesc);
                }
            }

            // npc attacks player if close enough -- every npc has its own cooldown via tickAttack
            if (this.playerPos && this.onPlayerHit) {
                const stats = NPCManager.NPC_ATTACK_STATS[npc.getType()] ?? { dmg: 5, range: 3.5 };
                const dmg = npc.tickAttack(this.playerPos, deltaTime, stats.range, stats.dmg);
                if (dmg > 0) this.onPlayerHit(dmg);
            }
        }

        // spawn new cats cuz chaos
        this.spawnTimer += deltaTime;

        // npc vs npc combat + item use -- the true chaos. mobs fight each other AND loot the corpses.
        this.npcFightTimer += deltaTime;
        if (this.npcFightTimer >= this.NPC_FIGHT_INTERVAL) {
            this.npcFightTimer = 0;
            this.tickNpcVsNpc();
        }
        // tick item usage for every npc that has something equipped
        for (const npc of this.npcs) {
            const effect = npc.tickNpcItem(deltaTime, this.npcs, this.playerPos ?? null);
            if (effect === 'bomb') {
                // deal aoe damage to nearby other npcs (friendly fire! chaos!)
                for (const other of this.npcs) {
                    if (other === npc) continue;
                    if (other.getPosition().distanceTo(npc.getPosition()) < 10) {
                        other.takeDamage(30);
                    }
                }
                // also hit player if close
                if (this.playerPos && this.onPlayerHit &&
                    npc.getPosition().distanceTo(this.playerPos) < 10) {
                    this.onPlayerHit(25);
                }
            } else if (effect === 'stun_all') {
                for (const other of this.npcs) {
                    if (other !== npc && other.getPosition().distanceTo(npc.getPosition()) < 10) {
                        other.stun(4);
                    }
                }
            }
        }
        if (this.spawnTimer >= this.spawnInterval) {
            this.spawnNewNPC();
            this.spawnTimer = 0;
            // randomize spawn interval so its not boring
            this.spawnInterval = 3 + Math.random() * 4;
        }

        // yeet dead cats (except the god one lol) and fire the death callback for loot
        this.npcs = this.npcs.filter(npc => {
            if (!npc.isAlive()) {
                this.scene.remove(npc.getMesh());
                this.onNpcKilled?.(npc.getType(), npc.getPosition().clone()); // drop dat loot
                return false; // removed from life :( rip
            }
            return true;
        });

        // update domain spheres + deal domain damage to player each frame
        if (this.domainSystem && this.playerPos && this.onPlayerHit) {
            this.domainSystem.update(
                deltaTime,
                this.playerPos,
                (dmg) => this.onPlayerHit?.(dmg),
                () => { /* player stun -- handled in main.ts for now */ },
            );
        }
    }

    // expose domain system so main.ts can add guaranteed-hit checks
    public getDomainSystem(): DomainExpansionSystem | null { return this.domainSystem; }

    // npc vs npc brawl -- every NPC_FIGHT_INTERVAL seconds, every npc swings at its nearest neighbour
    // winner loots the loser. this is where the real economy lives.
    private tickNpcVsNpc(): void {
        for (let i = 0; i < this.npcs.length; i++) {
            const attacker = this.npcs[i];
            if (!attacker.isAlive() || attacker.isStunned()) continue;

            // find nearest living neighbour (not itself)
            let nearest: BaseNPC | null = null;
            let nearestDist = this.NPC_FIGHT_RANGE;
            for (let j = 0; j < this.npcs.length; j++) {
                if (i === j || !this.npcs[j].isAlive()) continue;
                const d = attacker.getPosition().distanceTo(this.npcs[j].getPosition());
                if (d < nearestDist) { nearestDist = d; nearest = this.npcs[j]; }
            }
            if (!nearest) continue;

            // HIT IT. small random variance so fights aren't totally deterministic
            const dmg = this.NPC_FIGHT_DMG + Math.floor(Math.random() * 5);
            const wasAlive = nearest.isAlive();
            nearest.takeDamage(dmg);

            // if the target just died, attacker loots it -- roll from its loot table
            if (wasAlive && !nearest.isAlive()) {
                const loot = InventorySystem.rollLoot(nearest.getType());
                if (loot && !attacker.equippedItem) {
                    attacker.equipItem(loot);
                    const name = ITEM_INFO[loot]?.name ?? loot;
                    console.log(`%c🗡️ ${attacker.getType()} killed ${nearest.getType()} and looted: ${name}`,
                        'color: #ff8800; font-weight: bold');
                    this.onNpcEquipItem?.(attacker.getType(), name);
                }
            }
        }
    }

    // call this every frame from main.ts with the player's position
    public setPlayerPos(pos: THREE.Vector3): void {
        this.playerPos = pos;
    }

    // wire in mud slowness from main
    public setMudHitCallback(fn: (slowDuration: number) => void): void {
        this.onMudHit = fn;
    }

    // wire in world generator so buff cat zoomies can damage buildings
    public setWorldGenerator(wg: { damageBuildingNear: (pos: THREE.Vector3, r: number) => void }): void {
        this.worldGenerator = wg;
    }

    private spawnNewNPC(): void {
        // updated spawn weights: emo 7%, barney 8%, shrek 5%, buffcat 6%, voidcat 5%, rest = cats
        const roll = Math.random();
        if (roll < 0.07) { this.spawnEmo(); return; }
        if (roll < 0.15) { this.spawnBarney(); return; }
        if (roll < 0.20) { this.spawnShrek(); return; }
        if (roll < 0.26) { this.spawnBuffCat(); return; }
        if (roll < 0.31) { this.spawnVoidCat(); return; }
        if (roll < 0.35) { this.spawnObama(); return; }
        if (roll < 0.39) { this.spawnTrump(); return; }
        // Random cat type - JOJO EDITION!! ゴゴゴゴゴ
        const catTypes = [
            CatType.NORMAL,
            CatType.NORMAL,
            CatType.NORMAL,
            CatType.NORMAL,
            CatType.JESUS,      // YARE YARE DAZE
            CatType.ROBOT,      // MEOW PLATINUM!
            CatType.ORB,        // THE ORB KNOWS ALL JoJo PARTS
            CatType.ANGEL,      // GOLDEN EXPERIENCE PERFECTION
            CatType.PIRATE,     // NIGERUNDAYO FROM ENEMIES
            CatType.WIZARD,     // HAMON BREATHING TECHNIQUES
            CatType.VAMPIRE,    // DIO'S MINION MEOW
            CatType.DISCO,      // GOLDEN WIND TORTURE DANCE
            CatType.SHADOW      // KING CRIMSON DELETES YOUR MEOW
        ];

        const randomType = catTypes[Math.floor(Math.random() * catTypes.length)];
        
        // Random spawn position - SCATTERED ACROSS THE JOJO UNIVERSE
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;
        const x = Math.cos(angle) * distance;
        const z = Math.sin(angle) * distance;

        const npc = new CatNPC(randomType, new THREE.Vector3(x, 2, z));
        if (this.bubbleCb) npc.setSpeakCallback(this.bubbleCb); // dont forget this one
        // 10% chance to spawn with domain already active -- terrifying. rude. horrible.
        if (Math.random() < 0.10) npc.forceActivateDomain(12);
        this.addNPC(npc);
        this.scene.add(npc.getMesh());
    }

    private spawnEmo(): void {
        const angle = Math.random() * Math.PI * 2;
        const dist = 25 + Math.random() * 70;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const emo = new EmoNPC(pos);
        emo.setMaxHp(75); // edgy boi isnt THAT tanky
        if (this.bubbleCb) emo.setSpeakCallback(this.bubbleCb);
        if (this.playerPos) emo.setPlayerRef(this.playerPos);
        if (Math.random() < 0.10) emo.forceActivateDomain(13);
        this.addNPC(emo);
        this.scene.add(emo.getMesh());
    }

    private spawnBarney(): void {
        // only ONE barney allowed. he is unique. he is the only one. THE ONLY ONE.
        if (this.npcs.some(n => n.getType() === 'barney')) return;
        const angle = Math.random() * Math.PI * 2;
        const dist = 30 + Math.random() * 80;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const barney = new BarneyNPC(pos);
        barney.setMaxHp(150); // he is a big purple dinosaur. he is tank.
        if (this.bubbleCb) barney.setSpeakCallback(this.bubbleCb);
        this.addNPC(barney);
        this.scene.add(barney.getMesh());
        console.log('%c🦕 BARNEY HAS ARRIVED. I LOVE YOU, YOU LOVE ME', 'color: #6B2FA0; font-weight: bold; font-size: 14px');
    }

    public getNPCCount(): number {
        // how many chaos kitties rn... too many let's be honest
        return this.npcs.length;
    }

    // force spawn random NPC(s) -- rainbow item uses this
    public forceSpawnRandom(count: number = 1): void {
        for (let i = 0; i < count; i++) this.spawnNewNPC();
    }

    // force barney into the world -- barney_ticket item
    public forceSpawnBarney(): void {
        this.spawnBarney();
    }

    public getNPCs(): BaseNPC[] {
        // here's all the kitties uwu
        return this.npcs;
    }

    public getRandomNPC(): BaseNPC | null {
        // pick a random cat victim... i mean friend!
        if (this.npcs.length === 0) return null;
        return this.npcs[Math.floor(Math.random() * this.npcs.length)];
    }

    private spawnShrek(): void {
        const angle = Math.random() * Math.PI * 2;
        const dist = 35 + Math.random() * 80;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const shrek = new ShrekNPC(pos);
        shrek.setMaxHp(200); // ITS HIS SWAMP. YOU CANNOT KILL HIM EASILY.
        if (this.bubbleCb) shrek.setSpeakCallback(this.bubbleCb);
        if (this.playerPos) shrek.setPlayerRef(this.playerPos);
        if (this.onMudHit) shrek.setMudHitCallback(this.onMudHit);
        if (Math.random() < 0.10) shrek.forceActivateDomain(16);
        this.addNPC(shrek);
        this.scene.add(shrek.getMesh());
        console.log('%c🧅 SHREK HAS ARRIVED. THIS IS HIS SWAMP NOW.', 'color: olive; font-weight: bold; font-size: 14px');
    }

    private spawnBuffCat(): void {
        const angle = Math.random() * Math.PI * 2;
        const dist = 30 + Math.random() * 90;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const buff = new BuffCatNPC(pos);
        buff.setMaxHp(80); // jacked but not immortal
        if (this.bubbleCb) buff.setSpeakCallback(this.bubbleCb);
        if (Math.random() < 0.10) buff.forceActivateDomain(10);
        this.addNPC(buff);
        this.scene.add(buff.getMesh());
        console.log('%c💪 BUFF CAT SPAWNED. BICEPS ACTIVATED.', 'color: orange; font-weight: bold; font-size: 14px');
    }

    private spawnVoidCat(): void {
        const angle = Math.random() * Math.PI * 2;
        const dist = 25 + Math.random() * 100;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const voidCat = new VoidCatNPC(pos);
        voidCat.setMaxHp(70); // void is spooky but fragile
        if (this.bubbleCb) voidCat.setSpeakCallback(this.bubbleCb);
        if (Math.random() < 0.10) voidCat.forceActivateDomain(14);
        this.addNPC(voidCat);
        this.scene.add(voidCat.getMesh());
        console.log('%c🌑 VOID CAT MATERIALIZED FROM THE DARKNESS', 'color: #330044; font-weight: bold; font-size: 14px');
    }

    private spawnObama(): void {
        // only one obama at a time. he is a singular presence.
        if (this.npcs.some(n => n.getType() === 'obama')) return;
        const angle = Math.random() * Math.PI * 2;
        const dist = 30 + Math.random() * 80;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const obama = new ObamaNPC(pos);
        obama.setMaxHp(90); // presidential hp
        if (this.bubbleCb) obama.setSpeakCallback(this.bubbleCb);
        if (this.playerPos) obama.setPlayerRef(this.playerPos);
        if (Math.random() < 0.10) obama.forceActivateDomain(13);
        this.addNPC(obama);
        this.scene.add(obama.getMesh());
    }

    private spawnTrump(): void {
        // only one trump. the world cannot handle more than one.
        if (this.npcs.some(n => n.getType() === 'trump')) return;
        const angle = Math.random() * Math.PI * 2;
        const dist = 30 + Math.random() * 80;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const trump = new TrumpNPC(pos);
        trump.setMaxHp(100); // tremendous hp. the most hp. believe me.
        if (this.bubbleCb) trump.setSpeakCallback(this.bubbleCb);
        if (this.playerPos) trump.setPlayerRef(this.playerPos);
        if (Math.random() < 0.10) trump.forceActivateDomain(14);
        this.addNPC(trump);
        this.scene.add(trump.getMesh());
    }
}
