import * as THREE from 'three';
import { RenderEngine } from './renderEngine';
import { CatGodNPC } from './world/CatGodNPC';
import { NPCManager } from './world/NPCManager';
import { WorldGenerator } from './world/WorldGenerator';
import { PlayerTracker } from './world/PlayerTracker';
import { SageCharacter } from './world/SageCharacter';
import { PhysicsWorld } from './world/PhysicsWorld';
import { ProcreationSystem } from './world/ProcreationSystem';
import { CameraController } from './world/CameraController';
import { JojoSystem } from './world/JojoSystem';
import { AudioManager } from './world/AudioManager';
import { UgandanKnucklesEvent } from './world/UgandanKnucklesEvent';
import { ChatSystem } from './world/ChatSystem';
import { ChatBubbleManager } from './world/ChatBubbleManager';
import { MobileControls } from './world/MobileControls';
import { MultiplayerClient } from './world/MultiplayerClient';
import { RemotePlayer } from './world/RemotePlayer';
import { WeatherSystem } from './world/WeatherSystem';
import { DayNightCycle } from './world/DayNightCycle';
import { FactionSystem } from './world/FactionSystem';
import { DungeonGenerator } from './world/DungeonGenerator';
import { VoidPortal } from './world/VoidPortal';
import { ItemPickupSystem } from './world/ItemPickupSystem';
import { ComboSystem } from './world/ComboSystem';
import { BaseNPC } from './world/BaseNPC';
import { InventorySystem, ITEM_INFO, ALL_ITEM_TYPES } from './world/InventorySystem';
import { DOMAIN_DEFS } from './world/DomainExpansionSystem';

class CatGodWorld {
    private renderEngine: RenderEngine;
    private catGod: CatGodNPC;
    private npcManager: NPCManager;
    private worldGenerator: WorldGenerator;
    private playerTracker: PlayerTracker;
    private sageCharacter: SageCharacter;
    private physicsWorld: PhysicsWorld;
    private procreationSystem: ProcreationSystem;
    private cameraController: CameraController;
    private jojoSystem: JojoSystem;
    private ugandanKnucklesEvent: UgandanKnucklesEvent;
    private chat: ChatSystem;
    private bubbles: ChatBubbleManager;
    private mobileControls: MobileControls | null = null; // null on desktop, its fine
    private audioManager: AudioManager;
    private multiplayer: MultiplayerClient;
    private remotePlayers: Map<string, RemotePlayer> = new Map();
    private scene: THREE.Scene;
    private keyPressed: Record<string, boolean> = {};
    private jojoMessageCounter: number = 0;

    // the new chaos systems -- added all at once because yolo
    private weatherSystem!: WeatherSystem;
    private dayNight!: DayNightCycle;
    private factionSystem!: FactionSystem;
    private dungeon!: DungeonGenerator;
    private voidPortal!: VoidPortal;
    private itemPickups!: ItemPickupSystem;
    private comboSystem!: ComboSystem;
    private sunLight!: THREE.DirectionalLight; // ref kept for day/night
    private ambientLightRef!: THREE.AmbientLight; // ref kept for day/night + weather
    private mudSlowTimer: number = 0; // seconds of slowness remaining from shrek mud

    // inventory + combat state -- about time the player can fight back
    private inventory: InventorySystem = new InventorySystem();
    private playerRespawnTimer: number = 0; // counts down to respawn after death

    // active buff/debuff timers -- every wild item effect gets a timer lol
    private invincibleTimer: number = 0;     // star_piece
    private bandageTimer: number = 0;        // bandage heal over time
    private bandageRate: number = 0;         // HP per second from bandage
    private slowMoTimer: number = 0;         // time_crystal slow motion
    private confuseTimer: number = 0;        // donut confusion
    private hotSauceTimer: number = 0;       // hot_sauce chaos speed
    private onionLayerActive: boolean = false; // absorb 1 hit
    private shieldHitsRemaining: number = 0;   // shield absorb charges
    private soulGemActive: boolean = false;    // auto-revive on death

    constructor() {
        this.renderEngine = new RenderEngine();
        this.scene = this.renderEngine.getScene();

        // Initialize physics
        this.physicsWorld = new PhysicsWorld();
        this.physicsWorld.addGround(500, 500);

        // Initialize systems
        this.playerTracker = new PlayerTracker();
        this.npcManager = new NPCManager(this.scene);
        this.worldGenerator = new WorldGenerator(this.scene);

        // Create the cat god NPC
        this.catGod = new CatGodNPC(this.scene);

        // Create the Sage character
        this.sageCharacter = new SageCharacter(this.scene);

        // Initialize procreation system
        this.procreationSystem = new ProcreationSystem();

        // Initialize camera controller
        this.cameraController = new CameraController(this.renderEngine.getCamera());

        // Initialize JOJO SYSTEM!!! ゴゴゴゴゴ (MENACING)
        this.jojoSystem = new JojoSystem();

        // nyan cat goes nyanyanyanya, press M to mute
        this.audioManager = new AudioManager('./nyan-cat.mp3', 0.4);

        // DO U KNO DA WEY - the most important system in this entire game
        this.ugandanKnucklesEvent = new UgandanKnucklesEvent(this.scene);

        // chat system -- press enter to yap
        this.chat = new ChatSystem();
        this.ugandanKnucklesEvent.setAnnounceCallback((msg) => this.chat.announceKnuckles(msg));

        // chat bubbles above heads -- the roblox experience
        this.bubbles = new ChatBubbleManager(this.renderEngine.getCamera());
        const bubbleFn = (pos: THREE.Vector3, text: string, h: number) => this.bubbles.showBubbleLive(pos, text, h);
        this.npcManager.setBubbleCallback(bubbleFn);
        this.catGod.setSpeakCallback(bubbleFn);
        this.sageCharacter.setBubbleCallback(bubbleFn);
        // chat send also registers a combo interaction -- yap fast = combo
        this.chat.setOnPlayerSend((text) => {
            this.sageCharacter.showBubble(text);
            this.comboSystem?.registerInteraction();
        });

        // setup multiplayer -- auto-connect to local server, silently no-ops if server not running
        this.multiplayer = this.initMultiplayer();

        // mobile joystick -- only init on touch devices, no point on desktop
        if (MobileControls.isMobile()) {
            this.mobileControls = new MobileControls();
            this.mobileControls.onProcreate = () => {
                const offspring = this.procreationSystem.procreate(
                    this.sageCharacter.getPosition(), this.catGod.position, this.scene
                );
                if (offspring) this.npcManager.addNPC(offspring);
            };
            this.mobileControls.onMute = () => { this.audioManager.toggleMute(); };
            this.mobileControls.onChat = () => { this.chat.open(); };
            this.mobileControls.onJump = () => { this.sageCharacter.tryJump(); };
        }

        // Setup keyboard controls
        this.setupKeyboardControls();

        // Add initial world
        this.worldGenerator.generateInitialWorld();

        // Setup lighting
        this.setupLighting();

        // the new chaos systems -- all at once because were chaotic
        this.factionSystem = new FactionSystem();
        this.factionSystem.onFactionChange = (f) => {
            const el = document.getElementById('faction-hud');
            if (el) {
                el.textContent = `Faction: ${f.toUpperCase()}`;
                el.style.color = this.factionSystem.getFactionColor(f);
            }
        };

        // wire mud slowness from shrek into player
        this.npcManager.setMudHitCallback((slowDur) => {
            if (this.inventory.isMudImmune()) { this.chat.addMessage('event', '👂 Shrek Ears blocked the mud!'); return; }
            this.mudSlowTimer = slowDur;
            this.chat.addMessage('event', '💩 Hit by Shrek\'s mud!! Moving slow for a bit...');
        });
        this.npcManager.setWorldGenerator(this.worldGenerator);

        // npc hits player: check shields/invincibility first, then apply passives
        this.npcManager.onPlayerHit = (dmg) => {
            if (this.sageCharacter.isDead()) return;
            if (this.invincibleTimer > 0) { this.chat.addMessage('event', '⭐ Star Piece blocked the hit!'); return; }
            if (this.onionLayerActive) { this.onionLayerActive = false; this.chat.addMessage('event', '🧅 Onion Layer absorbed the hit!'); return; }
            if (this.shieldHitsRemaining > 0) {
                this.shieldHitsRemaining--;
                this.chat.addMessage('event', `🛡 Shield blocked! (${this.shieldHitsRemaining} charges left)`);
                return;
            }
            if (this.inventory.isCatCrownActive()) return; // crown = npcs dont attack you
            if (this.inventory.isLaserPointerActive() && Math.random() < 0.5) return; // 50% miss
            const actual = Math.ceil(dmg * this.inventory.getDamageTakenMult());
            this.sageCharacter.takeDamage(actual);
            this.chat.addMessage('event', `💢 Ouch! -${actual} HP`);
            const bar = document.getElementById('hp-bar-fill');
            if (bar) { bar.style.background = '#ff2222'; setTimeout(() => { if (bar) bar.style.background = ''; }, 200); }
        };

        // npc dies: roll loot, double it if lucky charm equipped
        this.npcManager.onNpcKilled = (npcType, _pos) => {
            const attempts = this.inventory.isLuckyCharmActive() ? 2 : 1;
            for (let i = 0; i < attempts; i++) {
                const loot = InventorySystem.rollLoot(npcType);
                if (loot) {
                    const added = this.inventory.addItem(loot);
                    if (added) {
                        const info = ITEM_INFO[loot];
                        this.chat.addMessage('event', `🎁 Dropped: ${info.icon} ${info.name}`);
                    }
                }
            }
        };

        // domain expansion announcement -- splash the domain name big on screen
        this.npcManager.onDomainActivated = (name, flavor) => {
            this.chat.addMessage('event', `⚡ DOMAIN EXPANSION: ${name.toUpperCase()}`);
            this.chat.addMessage('event', `💀 "${flavor}"`);
            this.showDomainBanner(name, flavor);
        };

        // inventory hotbar update callback
        this.inventory.onInventoryChange = () => this.renderHotbar();

        // assign factions to all npcs as they spawn (wire via bubbleCb timing hack)
        // just assign on each NPC after it gets added -- would be cleaner but this is sloppy code land
        const origBubbleFn = (pos: THREE.Vector3, text: string, h: number) => this.bubbles.showBubbleLive(pos, text, h);
        this.npcManager.setBubbleCallback((pos, text, h) => {
            origBubbleFn(pos, text, h);
        });

        this.dungeon = new DungeonGenerator(this.scene);
        this.voidPortal = new VoidPortal(this.scene);
        this.voidPortal.onEnterVoid = () => this.chat.addMessage('event', '🌀 YOU ENTERED THE VOID. 15 seconds...');
        this.voidPortal.onExitVoid = () => this.chat.addMessage('event', '🌀 You escaped the void. Barely.');

        this.itemPickups = new ItemPickupSystem(this.scene);
        this.itemPickups.onPickup = (type, _pos) => {
            this.chat.addMessage('event', type === 'fish' ? '🐟 Fish! Speed boost x2.2 for 10s!' : '🌿 Catnip!! Reality destabilizing...');
            this.comboSystem.registerInteraction();
        };

        this.comboSystem = new ComboSystem();

        // Start the world
        this.start();
    }

    private setupKeyboardControls(): void {
        document.addEventListener('keydown', (e) => {
            this.keyPressed[e.key.toLowerCase()] = true;

            // number keys 1-6 select hotbar slot
            const slotKey = parseInt(e.key) - 1;
            if (slotKey >= 0 && slotKey <= 5) {
                this.inventory.selectSlot(slotKey);
                this.renderHotbar();
                return;
            }

            // E key = use equipped item
            if (e.key.toLowerCase() === 'e' && !this.chat.isInputOpen()) {
                this.useEquippedItem();
                return;
            }

            if (e.key.toLowerCase() === 'p') {
                // Attempt procreation
                const offspring = this.procreationSystem.procreate(
                    this.sageCharacter.getPosition(),
                    this.catGod.position,
                    this.scene
                );

                if (offspring) {
                    this.npcManager.addNPC(offspring);
                    this.comboSystem.registerInteraction(); // procreation counts as interaction
                }
            }

            // F key cycles factions -- FIGHT FOR YOUR SIDE
            if (e.key.toLowerCase() === 'f') {
                this.factionSystem.cyclePlayerFaction();
            }
        });

        document.addEventListener('keyup', (e) => {
            this.keyPressed[e.key.toLowerCase()] = false;
        });

        // left click = attack nearest npc in range
        document.addEventListener('mousedown', (e) => {
            if (e.button !== 0 || this.chat.isInputOpen()) return;
            this.tryAttackNearestNPC();
        });
    }

    private tryAttackNearestNPC(): void {
        if (!this.sageCharacter.canAttack() || this.sageCharacter.isDead()) return;
        const playerPos = this.sageCharacter.getPosition();
        const range = this.sageCharacter.getAttackRange(this.inventory.getRangeBonus());
        const baseDmg = this.sageCharacter.getAttackDamage(this.inventory.getAttackBonus());
        const dmg = Math.ceil(baseDmg * this.inventory.getDamageDealtMult());
        let closest: BaseNPC | null = null;
        let closestDist = range;
        for (const npc of this.npcManager.getNPCs()) {
            if (!npc.isAlive()) continue;
            const d = npc.getPosition().distanceTo(playerPos);
            if (d < closestDist) { closestDist = d; closest = npc; }
        }
        if (closest) {
            closest.takeDamage(dmg);
            this.sageCharacter.markAttacked();
            const died = !closest.isAlive();
            this.chat.addMessage('event', died
                ? `⚔ Killed a ${closest.getType()}! (+${dmg} dmg)`
                : `⚔ Hit ${closest.getType()} for ${dmg} dmg`
            );
        }
    }

    private useEquippedItem(): void {
        const used = this.inventory.useEquipped();
        if (!used) return;
        const playerPos = this.sageCharacter.getPosition();

        if (used === 'fish') {
            this.itemPickups.applyFish();
            this.chat.addMessage('event', '🐟 Fish! Speed x2.2 for 10s');

        } else if (used === 'catnip') {
            this.itemPickups.applyCatnip();
            this.chat.addMessage('event', '🌿 Catnip! Vision wobbling...');

        } else if (used === 'potion') {
            const healed = Math.min(40, this.sageCharacter.maxHp - this.sageCharacter.hp);
            this.sageCharacter.hp = Math.min(this.sageCharacter.maxHp, this.sageCharacter.hp + 40);
            this.chat.addMessage('event', `🧪 Potion! +${healed} HP`);

        } else if (used === 'mega_potion') {
            this.sageCharacter.hp = this.sageCharacter.maxHp;
            this.chat.addMessage('event', '🧪✨ MEGA POTION! Full heal!');

        } else if (used === 'void_shard') {
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(playerPos) < 10) { npc.takeDamage(30); hits++; }
            }
            this.chat.addMessage('event', `💜 Void Shard! Blasted ${hits} mobs (30 dmg)`);

        } else if (used === 'onion') {
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(playerPos) < 12) { npc.takeDamage(20); hits++; }
            }
            this.chat.addMessage('event', `🧅 Onion! Shrek tribute! Hit ${hits} mobs (20 dmg)`);

        } else if (used === 'turbo_fish') {
            this.itemPickups.applyCustomSpeed(4, 5);
            this.chat.addMessage('event', '🐟⚡ TURBO FISH! Speed x4 for 5s... try not to fall off the world');

        } else if (used === 'bomb') {
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(playerPos) < 15) { npc.takeDamage(60); hits++; }
            }
            this.chat.addMessage('event', `💣 BOMB! 60 dmg to ${hits} mobs in radius 15`);

        } else if (used === 'lightning') {
            // chain 25 dmg to 5 closest NPCs
            const sorted = [...this.npcManager.getNPCs()]
                .filter(n => n.isAlive())
                .sort((a, b) => a.getPosition().distanceTo(playerPos) - b.getPosition().distanceTo(playerPos))
                .slice(0, 5);
            sorted.forEach(n => n.takeDamage(25));
            this.chat.addMessage('event', `⚡ Lightning! Chained 25 dmg to ${sorted.length} targets`);

        } else if (used === 'holy_water') {
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getType() === 'emo' && npc.getPosition().distanceTo(playerPos) < 12) {
                    npc.takeDamage(9999); // instant kill emos. they cannot handle holy water. its the irony.
                    hits++;
                }
            }
            this.chat.addMessage('event', `💧 Holy Water! Nuked ${hits} emos. They didn't survive the positivity.`);

        } else if (used === 'disco_ball') {
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(playerPos) < 10) { npc.stun(8); hits++; }
            }
            this.chat.addMessage('event', `🪩 DISCO BALL! Stunned ${hits} mobs for 8s. EVERYBODY DANCE NOW.`);

        } else if (used === 'time_crystal') {
            this.slowMoTimer = 10;
            this.chat.addMessage('event', '💎 TIME CRYSTAL! Reality slowing down for 10s...');

        } else if (used === 'star_piece') {
            this.invincibleTimer = 3;
            this.chat.addMessage('event', '⭐ STAR PIECE! Invincible for 3 seconds!');

        } else if (used === 'teleporter') {
            const rx = (Math.random() - 0.5) * 200;
            const rz = (Math.random() - 0.5) * 200;
            this.sageCharacter.teleportTo(new THREE.Vector3(rx, 3, rz));
            this.chat.addMessage('event', `🌀 TELEPORTER! Warped to (${rx.toFixed(0)}, ${rz.toFixed(0)})`);

        } else if (used === 'warp_stone') {
            this.sageCharacter.teleportTo(new THREE.Vector3(0, 5, 8));
            this.chat.addMessage('event', '🪨 Warp Stone! Teleported to the Cat God.');

        } else if (used === 'cheese') {
            const healed = Math.min(8, this.sageCharacter.maxHp - this.sageCharacter.hp);
            this.sageCharacter.hp = Math.min(this.sageCharacter.maxHp, this.sageCharacter.hp + 8);
            this.chat.addMessage('event', `🧀 Cheese! +${healed} HP. Mild healing for mild cheese.`);

        } else if (used === 'bandage') {
            this.bandageTimer = 10;
            this.bandageRate = 2.5;
            this.chat.addMessage('event', '🩹 Bandage! +2.5 HP/s for 10s');

        } else if (used === 'boomerang') {
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(playerPos) < 12) { npc.takeDamage(20); hits++; }
            }
            this.chat.addMessage('event', `🪃 Boomerang! 20 dmg to ${hits} mobs in range 12`);

        } else if (used === 'megaphone') {
            // push all NPCs away from player -- set their target angle to face away
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                const diff = npc.getPosition().clone().sub(playerPos).normalize();
                // we can't set targetAngle directly from here (protected) but stun + nudge in the future
                // for now, deal small dmg and stun briefly -- close enough to "pushing" lol
                npc.stun(1.5);
                hits++;
            }
            this.chat.addMessage('event', `📣 MEGAPHONE!! Screamed at ${hits} NPCs. They're briefly stunned from the noise.`);

        } else if (used === 'glue_trap') {
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(playerPos) < 10) { npc.stun(6); hits++; }
            }
            this.chat.addMessage('event', `🪤 Glue Trap! Stuck ${hits} mobs for 6s`);

        } else if (used === 'nuke') {
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(playerPos) < 25) { npc.takeDamage(100); hits++; }
            }
            this.chat.addMessage('event', `☢️ NUKE!! 100 dmg to ${hits} mobs. oops.`);

        } else if (used === 'plasma_cannon') {
            let closest: BaseNPC | null = null;
            let cDist = 20;
            for (const npc of this.npcManager.getNPCs()) {
                const d = npc.getPosition().distanceTo(playerPos);
                if (d < cDist) { cDist = d; closest = npc; }
            }
            if (closest) { closest.takeDamage(40); this.chat.addMessage('event', `🔫 Plasma Cannon! 40 dmg to ${closest.getType()}`); }
            else this.chat.addMessage('event', '🔫 Plasma Cannon: nobody in range 20. wasted.');

        } else if (used === 'mystery_box') {
            // add 3 random items from the full item pool
            for (let i = 0; i < 3; i++) {
                const r = ALL_ITEM_TYPES[Math.floor(Math.random() * ALL_ITEM_TYPES.length)];
                const added = this.inventory.addItem(r);
                if (added) this.chat.addMessage('event', `🎁 Mystery Box gave: ${ITEM_INFO[r].icon} ${ITEM_INFO[r].name}`);
            }

        } else if (used === 'cursed_egg') {
            // randomly chaotic effect -- spin the wheel of fate
            const roll = Math.floor(Math.random() * 5);
            if (roll === 0) { this.sageCharacter.hp = Math.min(this.sageCharacter.maxHp, this.sageCharacter.hp + 25); this.chat.addMessage('event', '🥚 CURSED EGG: Healed 25 somehow???'); }
            else if (roll === 1) { this.itemPickups.applyCustomSpeed(0.3, 4); this.chat.addMessage('event', '🥚 CURSED EGG: You are EXTREMELY slow for 4s. so sorry.'); }
            else if (roll === 2) { this.npcManager.forceSpawnRandom(8); this.chat.addMessage('event', '🥚 CURSED EGG: Spawned 8 new chaos entities. ur fault.'); }
            else if (roll === 3) { this.invincibleTimer = 5; this.chat.addMessage('event', '🥚 CURSED EGG: Lucky! 5s invincibility'); }
            else { this.sageCharacter.takeDamage(10); this.chat.addMessage('event', '🥚 CURSED EGG: It exploded in ur face. -10 HP'); }

        } else if (used === 'party_hat') {
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(playerPos) < 15) npc.triggerSpeak();
            }
            this.chat.addMessage('event', '🎉 PARTY HAT! All nearby NPCs are now MANDATORY partying.');

        } else if (used === 'rainbow') {
            this.npcManager.forceSpawnRandom(5);
            this.chat.addMessage('event', '🌈 RAINBOW! Spawned 5 new NPCs. chaos intensifies.');

        } else if (used === 'coffee') {
            this.mudSlowTimer = 0;
            this.slowMoTimer = 0;
            this.confuseTimer = 0;
            this.chat.addMessage('event', '☕ COFFEE! Cleared all debuffs. Back to normal (whatever that means).');

        } else if (used === 'void_key') {
            this.voidPortal.enterVoid();
            this.chat.addMessage('event', '🗝️ VOID KEY! Forced yourself into the void. ur brave I guess.');

        } else if (used === 'barney_ticket') {
            this.npcManager.forceSpawnBarney();
            this.chat.addMessage('event', '🦕 BARNEY TICKET! He will come. He always comes.');

        } else if (used === 'onion_layer') {
            this.onionLayerActive = true;
            this.chat.addMessage('event', '🧅 Onion Layer equipped! Next hit absorbed. Like an onion. Layers.');

        } else if (used === 'uwu_scroll') {
            // just announce it -- NPCs already speak uwu. this is a "more uwu" buff cosmetically
            this.chat.addMessage('event', '📜 UwU Scroll!! nyaa everything is extra uwu now for 20s~ meow meow 😸');

        } else if (used === 'donut') {
            this.confuseTimer = 5;
            this.chat.addMessage('event', '🍩 DONUT! Controls inverted for 5s. enjoy the chaos.');

        } else if (used === 'hot_sauce') {
            this.hotSauceTimer = 5;
            this.itemPickups.applyCustomSpeed(3, 5);
            this.chat.addMessage('event', '🌶️ HOT SAUCE! SPEED x3 for 5s. SCREAMING INTERNALLY.');

        } else if (used === 'cheese_wheel') {
            let closest: BaseNPC | null = null;
            let cDist = Infinity;
            for (const npc of this.npcManager.getNPCs()) {
                const d = npc.getPosition().distanceTo(playerPos);
                if (d < cDist) { cDist = d; closest = npc; }
            }
            if (closest && cDist < 20) {
                closest.takeDamage(35);
                this.chat.addMessage('event', `🧀 CHEESE WHEEL! Rolled it into ${closest.getType()} for 35 dmg`);
            } else {
                this.chat.addMessage('event', '🧀 CHEESE WHEEL: nobody close enough to obliterate. wasted.');
            }

        } else if (used === 'soul_gem') {
            this.soulGemActive = true;
            this.chat.addMessage('event', '💎 SOUL GEM activated! Auto-revive on next death.');

        } else if (used === 'shield') {
            this.shieldHitsRemaining = 3;
            this.chat.addMessage('event', '🛡 SHIELD! 3 hit absorption charges. better than nothing.');

        } else {
            // passive items -- equip silently, no consume. they're already providing passive benefits.
            this.chat.addMessage('event', `✨ ${ITEM_INFO[used]?.icon ?? '?'} ${ITEM_INFO[used]?.name ?? used} equipped passively.`);
        }

        this.renderHotbar();
    }

    // big flashy domain expansion banner -- screams the name on screen for 3s
    private showDomainBanner(name: string, flavor: string): void {
        // reuse existing element or make a new one bc yolo
        let banner = document.getElementById('domain-banner');
        if (!banner) {
            banner = document.createElement('div');
            banner.id = 'domain-banner';
            banner.style.cssText = `
                position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
                text-align:center; pointer-events:none; z-index:9999;
                font-family: serif; color: #ff00ff; text-shadow: 0 0 20px #ff00ff, 0 0 40px #aa00aa;
                transition: opacity 0.5s;
            `;
            document.body.appendChild(banner);
        }
        banner.innerHTML = `
            <div style="font-size:18px;letter-spacing:4px;color:#fff;opacity:0.8">DOMAIN EXPANSION</div>
            <div style="font-size:42px;font-weight:bold;letter-spacing:6px;margin:8px 0">${name.toUpperCase()}</div>
            <div style="font-size:14px;color:#ffaaff;max-width:500px;margin:0 auto;font-style:italic">"${flavor}"</div>
        `;
        banner.style.opacity = '1';
        clearTimeout((banner as HTMLElement & { _hideTimer?: ReturnType<typeof setTimeout> })._hideTimer);
        (banner as HTMLElement & { _hideTimer?: ReturnType<typeof setTimeout> })._hideTimer =
            setTimeout(() => { if (banner) banner.style.opacity = '0'; }, 3500);
    }

    private setupLighting(): void {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
        this.ambientLightRef = ambientLight; // store ref for day/night + weather

        // Directional light (sun)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(50, 100, 50);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.left = -100;
        directionalLight.shadow.camera.right = 100;
        directionalLight.shadow.camera.top = 100;
        directionalLight.shadow.camera.bottom = -100;
        this.scene.add(directionalLight);
        this.sunLight = directionalLight; // store ref for day/night cycle

        // Point light for ambiance
        const pointLight = new THREE.PointLight(0x87ceeb, 0.3);
        pointLight.position.set(-50, 50, 50);
        this.scene.add(pointLight);

        // now that we have lights, init day/night cycle + weather
        this.dayNight = new DayNightCycle(this.scene, this.sunLight, this.ambientLightRef);
        this.weatherSystem = new WeatherSystem(this.scene, this.ambientLightRef);
        this.weatherSystem.onWeatherChange = (w) => {
            this.chat.addMessage('event', `⛅ Weather: ${w.toUpperCase()}`);
        };
        this.dayNight.onNightFall = () => this.chat.addMessage('event', '🌙 Night has fallen. The emos grow stronger.');
        this.dayNight.onDayBreak = () => this.chat.addMessage('event', '☀️ A new day begins!');
    }

    private start(): void {
        const animate = () => {
            requestAnimationFrame(animate);

            // Update
            const deltaTime = 1 / 120; // ugh half speed now. whatever. someone asked for this.
            // time_crystal slow motion -- halves the effective delta when active
            const effectiveDt = this.slowMoTimer > 0 ? deltaTime * 0.4 : deltaTime;

            // feed mobile joystick + camera touch into the systems
            let joyDx = 0, joyDy = 0;
            if (this.mobileControls) {
                const joy = this.mobileControls.getJoystick();
                joyDx = joy.dx; joyDy = joy.dy;
                const camDelta = this.mobileControls.consumeCamDelta();
                if (camDelta.dx !== 0 || camDelta.dy !== 0) {
                    this.cameraController.applyTouchDelta(camDelta.dx, camDelta.dy);
                }
            }

            // confuse timer -- invert joystick/WASD when donut was eaten. chaos.
            const confuseMult = this.confuseTimer > 0 ? -1 : 1;

            this.physicsWorld.update(effectiveDt);
            this.sageCharacter.update(effectiveDt, this.cameraController.getOrbitAngleY(), this.chat.isInputOpen(), joyDx * confuseMult, joyDy * confuseMult);

            // apply fish speed buff (or mud slow) to sage character
            const fishMult = this.itemPickups.speedMultiplier;
            const mudMult = this.mudSlowTimer > 0 ? 0.35 : 1; // shrek mud slows to 35% speed lol
            this.sageCharacter.setSpeedMultiplier(fishMult * mudMult);
            if (this.mudSlowTimer > 0) this.mudSlowTimer -= deltaTime;

            // tick all active buff/debuff timers -- none of these worked before bc nobody decremented them. oops.
            if (this.invincibleTimer > 0) this.invincibleTimer -= deltaTime;
            if (this.hotSauceTimer > 0) this.hotSauceTimer -= deltaTime;
            if (this.confuseTimer > 0) this.confuseTimer -= deltaTime;
            if (this.slowMoTimer > 0) this.slowMoTimer -= deltaTime;
            if (this.bandageTimer > 0) {
                this.bandageTimer -= deltaTime;
                this.sageCharacter.hp = Math.min(this.sageCharacter.maxHp, this.sageCharacter.hp + this.bandageRate * deltaTime);
            }
            // wire jump multiplier from inventory passives every frame
            this.sageCharacter.setJumpMultiplier(this.inventory.getJumpMult());
            // confuse flag needs to reach SageCharacter so WASD gets inverted
            this.sageCharacter.setConfused(this.confuseTimer > 0);

            // apply catnip wobble to camera FOV
            const cam = this.renderEngine.getCamera();
            if (this.itemPickups.isWobbly) {
                cam.fov = 75 + this.itemPickups.wobbleAmount;
                cam.updateProjectionMatrix();
            } else if (cam.fov !== 75) {
                cam.fov = 75;
                cam.updateProjectionMatrix();
            }

            // give npc manager the player pos each frame (needed for emo stand targeting)
            this.npcManager.setPlayerPos(this.sageCharacter.getPosition());

            // broadcast our position to the server at ~20hz (throttled internally)
            const p = this.sageCharacter.getPosition();
            this.multiplayer.sendPosition(p.x, p.y, p.z, this.sageCharacter.getRotationY());

            // update all remote player lerps
            for (const rp of this.remotePlayers.values()) {
                rp.update(effectiveDt);
            }
            this.catGod.update(effectiveDt, this.sageCharacter.getPosition());
            this.npcManager.update(effectiveDt);
            this.worldGenerator.update(effectiveDt, this.sageCharacter.getPosition());
            this.worldGenerator.updateDestructibles(effectiveDt);

            // ALL THE NEW SYSTEMS -- yeet em in the update loop
            this.dayNight.update(effectiveDt);
            this.weatherSystem.update(effectiveDt);
            this.factionSystem.update(effectiveDt, this.npcManager.getNPCs());
            this.voidPortal.update(effectiveDt, this.sageCharacter.getPosition());
            this.itemPickups.update(effectiveDt, this.sageCharacter.getPosition());
            this.comboSystem.update(effectiveDt);

            // faction badge on HUD
            const factionEl = document.getElementById('faction-hud');
            if (factionEl && !factionEl.dataset['init']) {
                factionEl.dataset['init'] = '1';
                factionEl.addEventListener('click', () => this.factionSystem.cyclePlayerFaction());
            }

            // spit on him brudda (ugandan knuckles rain event)
            this.ugandanKnucklesEvent.update(deltaTime, this.sageCharacter.getPosition());

            // reproject all chat bubbles to screen every frame
            this.bubbles.update();

            // Update camera controller
            const sagePos = this.sageCharacter.getPosition();
            this.cameraController.setFollowTarget(sagePos, sagePos);
            this.cameraController.setPlayerMoving(this.sageCharacter.isMoving());
            this.cameraController.update();

            // Handle player interactions
            this.playerTracker.update();

            // JOJO REFRENCE EVERY 180 FRAMES (3 seconds) ゴゴゴゴゴゴゴゴゴ
            this.jojoMessageCounter++;
            if (this.jojoMessageCounter % 180 === 0) {
                console.log(`%c${this.jojoSystem.getRandomJojoReference()}`, 'color: gold; font-size: 16px; font-weight: bold;');
                console.log(`%cゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ`, 'color: purple; font-size: 14px;');
            }

            // tick attack cooldown for the player
            this.sageCharacter.tickAttackCooldown(deltaTime);

            // player death + respawn logic
            if (this.sageCharacter.isDead()) {
                if (this.playerRespawnTimer <= 0) {
                    this.playerRespawnTimer = 3.0; // respawn after 3 seconds
                    const overlay = document.getElementById('death-overlay');
                    if (overlay) overlay.style.display = 'flex';
                }
                this.playerRespawnTimer -= deltaTime;
                if (this.playerRespawnTimer <= 0) {
                    // soul gem auto-revive -- activate before normal respawn
                    if (this.soulGemActive) {
                        this.soulGemActive = false;
                        this.sageCharacter.hp = Math.floor(this.sageCharacter.maxHp * 0.5);
                        this.sageCharacter.respawn();
                        this.chat.addMessage('event', '💎 SOUL GEM: Auto-revived at 50% HP!');
                    } else {
                        this.sageCharacter.respawn();
                    }
                    const overlay = document.getElementById('death-overlay');
                    if (overlay) overlay.style.display = 'none';
                }
            }

            // Update UI
            this.updateUI();

            // Render
            this.renderEngine.render();
        };

        animate();
    }

    private initMultiplayer(): MultiplayerClient {
        // try the url param first, fall back to localhost for local dev
        const urlParams = new URLSearchParams(window.location.search);
        const serverUrl = urlParams.get('server') || 'ws://localhost:8080';

        // grab or generate a username -- persist it in localStorage so it stays between sessions
        let username = localStorage.getItem('catworld_username');
        if (!username) {
            // random cat-style name because why not
            const adjectives = ['Fuzzy', 'Cursed', 'Divine', 'Chaotic', 'Blessed', 'Dreamy', 'Silly', 'Spooky'];
            const nouns = ['Paw', 'Orb', 'Cat', 'Bean', 'Knuckle', 'Sage', 'Ghost', 'Specter'];
            username = adjectives[Math.floor(Math.random() * adjectives.length)] +
                nouns[Math.floor(Math.random() * nouns.length)] +
                Math.floor(Math.random() * 999);
            localStorage.setItem('catworld_username', username);
        }

        console.log('%cmultiplayer: connecting as ' + username + ' to ' + serverUrl, 'color: cyan');
        const client = new MultiplayerClient(serverUrl, username);

        // someone new joined -- add their orb to the scene
        client.onPlayerJoin = (player) => {
            const rp = new RemotePlayer(this.scene, player.id, player.username, player.x, player.y, player.z);
            rp.setBubbleCallback((pos, text, h) => this.bubbles.showBubbleLive(pos, text, h));
            this.remotePlayers.set(player.id, rp);
            this.chat.addMessage('system', `${player.username} joined the world`);
            this.updatePlayerCountUI();
        };

        // player disconnected -- remove their orb
        client.onPlayerLeave = (id) => {
            const rp = this.remotePlayers.get(id);
            if (rp) {
                this.chat.addMessage('system', `${rp.username} left the world`);
                rp.destroy();
                this.remotePlayers.delete(id);
            }
            this.updatePlayerCountUI();
        };

        // position update from another player -- set lerp target
        client.onPlayerMove = (id, x, y, z, ry) => {
            this.remotePlayers.get(id)?.setTarget(x, y, z, ry);
        };

        // another player sent a chat message
        client.onPlayerChat = (id, uname, text) => {
            this.chat.addMessage('player', `${uname}: ${text}`);
            this.remotePlayers.get(id)?.showBubble(text);
        };

        // server sent the welcome packet -- spawn all existing players
        client.onConnected = (_myId, players) => {
            for (const player of players) {
                const rp = new RemotePlayer(this.scene, player.id, player.username, player.x, player.y, player.z);
                rp.setBubbleCallback((pos, text, h) => this.bubbles.showBubbleLive(pos, text, h));
                this.remotePlayers.set(player.id, rp);
            }
            this.chat.addMessage('system', `Connected! ${players.length} other player(s) in world`);
            this.updatePlayerCountUI();
        };

        // update status badge when connectivity changes
        client.onStatusChange = (status) => {
            const el = document.getElementById('mp-status');
            if (el) el.textContent = `Multiplayer: ${status}`;
        };

        // when local player sends a chat message, also relay it to the server
        const originalOnSend = this.chat.getOnPlayerSend();
        this.chat.setOnPlayerSend((text) => {
            originalOnSend?.(text); // still show bubble locally
            client.sendChat(text);  // send to server
        });

        return client;
    }

    private updatePlayerCountUI(): void {
        const el = document.getElementById('mp-players');
        if (el) el.textContent = `Online: ${this.remotePlayers.size + 1}`; // +1 for yourself
    }

    private renderHotbar(): void {
        const slots = document.querySelectorAll('.hotbar-slot');
        slots.forEach((el, i) => {
            const item = this.inventory.slots[i];
            const iconEl = el.querySelector('.slot-icon') as HTMLElement | null;
            const countEl = el.querySelector('.slot-count') as HTMLElement | null;
            if (iconEl) iconEl.textContent = item ? item.icon : '';
            if (countEl) countEl.textContent = item && item.quantity > 1 ? `x${item.quantity}` : '';
            el.classList.toggle('selected', i === this.inventory.selectedSlot);
        });
        const label = document.getElementById('hotbar-label');
        if (label) {
            const eq = this.inventory.getEquipped();
            label.textContent = eq ? `${eq.icon} ${eq.name} — ${eq.description}` : '';
        }
    }

    private updateUI(): void {
        // hp bar update -- red if low, yellow if mid, green if healthy
        const hpCurrent = document.getElementById('hp-current');
        const hpMax = document.getElementById('hp-max');
        const hpFill = document.getElementById('hp-bar-fill');
        if (hpCurrent) hpCurrent.textContent = String(Math.max(0, Math.ceil(this.sageCharacter.hp)));
        if (hpMax) hpMax.textContent = String(this.sageCharacter.maxHp);
        if (hpFill) {
            const pct = Math.max(0, this.sageCharacter.hp / this.sageCharacter.maxHp) * 100;
            hpFill.style.width = `${pct}%`;
            hpFill.style.background = pct > 60 ? '#44ee66' : pct > 30 ? '#ffcc00' : '#ff3333';
        }
        const playerKillsEl = document.getElementById('playerKills');
        const npcStatsEl = document.getElementById('npcStats');
        const procreationEl = document.getElementById('procreation');
        const weatherEl = document.getElementById('weather-hud');
        const timeEl = document.getElementById('time-hud');

        if (playerKillsEl) {
            playerKillsEl.textContent = `Player Kills: ${this.playerTracker.getKillCount()}`;
        }

        if (npcStatsEl) {
            const knucklesCount = this.ugandanKnucklesEvent.getActiveCount();
            const knucklesStr = knucklesCount > 0 ? ` | Bruddas: ${knucklesCount}` : '';
            npcStatsEl.textContent = `NPCs: ${this.npcManager.getNPCCount()} | Buildings: ${this.worldGenerator.getBuildingCount()} | Offspring: ${this.procreationSystem.getOffspringCount()}${knucklesStr}`;
        }

        // Show procreation status
        if (procreationEl) {
            const distance = this.procreationSystem.getDistance(
                this.sageCharacter.getPosition(),
                this.catGod.position
            );
            procreationEl.textContent = this.procreationSystem.getCanProcreateMessage(distance);
        }

        if (weatherEl) {
            weatherEl.textContent = `Weather: ${this.weatherSystem.getCurrentWeather()}`;
        }

        if (timeEl) {
            const inVoid = this.voidPortal.isInVoid();
            const inDungeon = this.dungeon.isPlayerInDungeon(this.sageCharacter.getPosition());
            const loc = inVoid ? ' 🌀VOID' : (inDungeon ? ' 🔮DUNGEON' : '');
            timeEl.textContent = `${this.dayNight.getTimeString()}${loc}`;
        }
    }
}

// Initialize the world when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CatGodWorld();
    });
} else {
    new CatGodWorld();
}
