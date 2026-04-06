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
import { VoiceSystem } from './world/VoiceSystem';
import { BaseNPC } from './world/BaseNPC';
import { InventorySystem, ITEM_INFO, ALL_ITEM_TYPES } from './world/InventorySystem';
import { DOMAIN_DEFS } from './world/DomainExpansionSystem';
import { WorldEventsSystem } from './world/WorldEventsSystem';
import { BigWorldSystems } from './world/BigWorldSystems';
import { BigEventSystems } from './world/BigEventSystems';
import { SocialBehaviorSystem } from './world/SocialBehaviorSystem';
import { QuestSystem, LevelSystem, CraftingSystem, FishingSystem, CatRacingSystem, StealthSystem, NPCHungerSystem, ThrowableSystem } from './world/GameplayExtras';
import { TrailEffectSystem, HologramEffect, FrozenEffect, HeatEffect, BloomPulse, ChaoticExtras } from './world/VisualExtras';

// global UI helpers declared in index.html -- these scream at the player in dramatic ways
declare function spawnDmgNumber(sx: number, sy: number, dmg: number, isCrit: boolean, color?: string): void;
declare function flashVignette(intensity?: number): void;
declare function screenShake(heavy?: boolean): void;
declare function addKillFeed(text: string, isPlayerKill: boolean): void;
declare function drawMinimap(px: number, pz: number, npcs: {x:number,z:number,type:string,alive:boolean}[]): void;
declare function showDodgeIndicator(): void;
declare function updateStatusEffects(effects: {icon:string,label:string}[]): void;

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
    private worldEvents!: WorldEventsSystem;
    private voice: VoiceSystem = new VoiceSystem();
    private sunLight!: THREE.DirectionalLight; // ref kept for day/night
    private ambientLightRef!: THREE.AmbientLight; // ref kept for day/night + weather
    private mudSlowTimer: number = 0; // seconds of slowness remaining from shrek mud
    private dioSpawnTimer: number = 180; // DIO spawns after 3 minutes. the wait makes him scarier.

    // JOJO GAMEPLAY TIMERS -- the three holy techniques
    private hamonTimer: number = 0;         // active hamon regen duration
    private hamonCooldown: number = 0;      // seconds until hamon usable again
    private nigerundayoTimer: number = 0;   // active nigerundayo sprint duration
    private nigerundayoCooldown: number = 0; // cooldown before next sprint
    private yourNextLineTimer: number = 60; // fires every 45-90s -- DIO makes a prediction
    private yourNextLineWindow: number = 0; // 10s window where prediction can be "proven right"

    // inventory + combat state -- about time the player can fight back
    private inventory: InventorySystem = new InventorySystem();
    private playerRespawnTimer: number = 0; // counts down to respawn after death

    // --- ALL THE 100-FEATURE MEGA SYSTEMS -- just shoved in here, yolo --
    private bigWorld!: BigWorldSystems;
    private bigEvents!: BigEventSystems;
    private socialBehavior!: SocialBehaviorSystem;
    private questSystem!: QuestSystem;
    private levelSystem!: LevelSystem;
    private craftingSystem!: CraftingSystem;
    private fishingSystem!: FishingSystem;
    private racingSystem!: CatRacingSystem;
    private stealthSystem!: StealthSystem;
    private hungerSystem!: NPCHungerSystem;
    private throwables!: ThrowableSystem;
    private trailFx!: TrailEffectSystem;
    private hologramFx!: HologramEffect;
    private frozenFx!: FrozenEffect;
    private heatFx!: HeatEffect;
    private bloomPulse!: BloomPulse;
    private chaoticExtras!: ChaoticExtras;

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
    // domain debuffs -- applied by sure-hit abilities. real nasty stuff.
    private attackPenaltyTimer: number = 0;   // player deals 0 dmg while this is active
    private hudHideTimer: number = 0;          // player HUD hidden -- voidcat messes with ur perception

    // death particles -- tiny explosions when npcs die. satisfying.
    private deathParticles: { mesh: THREE.Points, vel: THREE.Vector3[], life: number, maxLife: number }[] = [];

    // campfire positions -- checked each frame for proximity regen. like a cozy little warmth zone.
    private campfirePositions: THREE.Vector3[] = [];

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

        // scatter some campfires around the world -- warm lil healing zones. cozy. desperate. alone.
        const campfireSpots = [
            new THREE.Vector3(20, 0, 20),   new THREE.Vector3(-30, 0, 40),
            new THREE.Vector3(50, 0, -20),  new THREE.Vector3(-60, 0, -30),
            new THREE.Vector3(0, 0, -50),   new THREE.Vector3(80, 0, 60),
        ];
        campfireSpots.forEach(p => {
            this.campfirePositions.push(p);
            this.spawnCampfire(p.x, p.z);
        });

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
            // your next line fulfilled -- DIO predicted you'd take damage
            if (this.yourNextLineWindow > 0) {
                this.yourNextLineWindow = 0;
                this.sageCharacter.hp = Math.min(this.sageCharacter.maxHp, this.sageCharacter.hp + 10);
                this.chat.addMessage('event', '🔮 ...just as DIO predicted. (+10 HP for the prophecy)');
            }
            // red vignette + screen shake on player hit -- now it FEELS like getting hit
            flashVignette(actual >= 30 ? 1 : 0.7);
            screenShake(actual >= 40);
            const bar = document.getElementById('hp-bar-fill');
            if (bar) { bar.style.background = '#ff2222'; setTimeout(() => { if (bar) bar.style.background = ''; }, 200); }
        };

        // npc dies: roll loot, double it if lucky charm equipped
        this.npcManager.onNpcKilled = (npcType, pos) => {
            // your next line fulfilled -- DIO said you'd cause chaos
            if (this.yourNextLineWindow > 0) {
                this.yourNextLineWindow = 0;
                this.sageCharacter.hp = Math.min(this.sageCharacter.maxHp, this.sageCharacter.hp + 8);
                this.chat.addMessage('event', `🔮 DIO\'s prediction came true!! +8 HP. he\'s unsettlingly pleased.`);
            }
            // death particles BOOM -- satisfying lil explosion on kill
            this.spawnDeathParticles(pos);
            // kill feed entry -- NPC killed by anything (domain, fall, etc)
            addKillFeed(`${npcType} eliminated`, false);
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

        // ZA WARUDO -- DIO stops time. everyone freezes. main.ts handles the consequences.
        this.npcManager.onDioZaWarudo = () => {
            // stun every NPC -- they are FROZEN in time. DIO wins.
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getType() !== 'dio') npc.stun(5);
            }
            // slow the player too -- partial time stop effect
            this.mudSlowTimer = Math.max(this.mudSlowTimer, 5);
            // white screen flash -- THE CLASSIC ZA WARUDO EFFECT
            document.body.style.filter = 'brightness(10) saturate(0)';
            setTimeout(() => {
                document.body.style.filter = 'brightness(3) saturate(0)';
                setTimeout(() => { document.body.style.filter = ''; }, 500);
            }, 200);
            // chat goes mental
            this.chat.addMessage('event', '⏱️ ZA WARUDO!!! TOKI WO TOMARE!!!');
            this.chat.addMessage('event', '⏱️ DIO has stopped time. 5 seconds of hell.');
            setTimeout(() => {
                this.chat.addMessage('event', '⏱️ ...5 seconds have passed. TIME MOVES AGAIN.');
            }, 5000);
            // shake camera -- DIO-level shockwave
            screenShake(true);
        };

        // domain expansion announcement -- splash the domain name big on screen
        this.npcManager.onDomainActivated = (name, flavor) => {
            this.chat.addMessage('event', `⚡ DOMAIN EXPANSION: ${name.toUpperCase()}`);
            this.chat.addMessage('event', `💀 "${flavor}"`);
            this.showDomainBanner(name, flavor);
            // npc speaks its flavor text out loud -- find the npc type from domain name
            const npcType = this._domainNameToNpcType(name);
            this.voice.speakDomainOpen(npcType, flavor);
        };

        // wire domain unique effects -- each npc type does something different
        const ds = this.npcManager.getDomainSystem();
        if (ds) {
            ds.onPlayerPushback = (newPos) => {
                // player tried to cross the domain wall -- nope
                this.sageCharacter.teleportTo(newPos);
            };
            ds.onPlayerDomainClose = () => {
                this.sageCharacter.forceCloseDomain();
                this.chat.addMessage('event', '💨 Aberrant Throne has collapsed. 90s cooldown.');
            };
            ds.onPlayerDomainCleared = () => {
                // throne collapses after wiping everything inside -- the hunt is done
                this.chat.addMessage('event', '☠️ ALL CLEARED. Aberrant Throne collapses. 90s cooldown.');
            };
            ds.onDomainEffect = (effect, center, _radius) => {
                if (effect === 'normal') {
                    this.npcManager.forceSpawnRandom(1);
                    this.chat.addMessage('event', '🐱 THE MEOWING BRINGS FORTH MORE CATS');
                } else if (effect === 'barney') {
                    this.npcManager.forceSpawnBarney();
                    this.chat.addMessage('event', '🦕 BARNEY EMERGES FROM THE LOVE DOMAIN');
                } else if (effect === 'shrek') {
                    this.mudSlowTimer = Math.max(this.mudSlowTimer, 4);
                    this.chat.addMessage('event', '🥞 SHREK\'S SWAMP: You are ankle-deep in mud.');
                } else if (effect === 'disco') {
                    this.sageCharacter.stun?.(1.5);
                    this.chat.addMessage('event', '🪩 DISCO DOMAIN: You cannot resist the groove.');
                } else if (effect === 'emo') {
                    document.body.style.filter = 'saturate(0.05) brightness(0.7)';
                } else if (effect === 'shadow') {
                    document.body.style.filter = 'brightness(0.05)';
                    setTimeout(() => { document.body.style.filter = ''; }, 120);
                } else if (effect === 'voidcat') {
                    document.body.style.filter = 'invert(1) brightness(0.3)';
                    setTimeout(() => { document.body.style.filter = ''; }, 80);
                } else if (effect === 'screen_clear') {
                    document.body.style.filter = '';
                // ----- SURE HIT ABILITY EFFECTS (thematic rewrites) -----
                } else if (effect === 'ability_normal') {
                    // INFINITE MEOW BARRAGE -- pure feral spam
                    this.chat.addMessage('event', '🐱 INFINITE MEOW BARRAGE — 5 hits. unstoppable. just a cat going feral.');
                } else if (effect === 'ability_jesus') {
                    // DIVINE FORGIVENESS -- blinds with holy light, heals jesus back to full
                    document.body.style.filter = 'brightness(8) saturate(0)';
                    setTimeout(() => { document.body.style.filter = ''; }, 300);
                    this.chat.addMessage('event', '✝️ DIVINE FORGIVENESS — jesus healed to full. you are forgiven. sort of.');
                } else if (effect === 'ability_robot') {
                    // SYSTEM OVERRIDE -- disables player attacks for 3s
                    this.attackPenaltyTimer = Math.max(this.attackPenaltyTimer, 3);
                    document.body.style.filter = 'hue-rotate(120deg) brightness(2)';
                    setTimeout(() => { document.body.style.filter = ''; }, 200);
                    this.chat.addMessage('event', '🤖 SYSTEM OVERRIDE — your attacks disabled for 3s. you have been logic-locked.');
                } else if (effect === 'ability_orb') {
                    // OMNISCIENT PULL -- yanks to center, no damage, just watching
                    document.body.style.filter = 'saturate(5) brightness(1.8)';
                    setTimeout(() => { document.body.style.filter = ''; }, 250);
                    this.chat.addMessage('event', '🔮 OMNISCIENT PULL — the orb sees you. it brought you closer. it always does.');
                } else if (effect === 'ability_angel') {
                    // GRACE DEBUFF -- angel heals, player gets slowed by the weight of divinity
                    this.mudSlowTimer = Math.max(this.mudSlowTimer, 3);
                    document.body.style.filter = 'brightness(3) saturate(0.2)';
                    setTimeout(() => { document.body.style.filter = ''; }, 250);
                    this.chat.addMessage('event', '😇 GRACE — the angel healed itself. you are heavy with divinity. movement halved.');
                } else if (effect === 'ability_pirate') {
                    // CANNONBALL -- just direct hit damage
                    document.body.style.filter = 'brightness(0.3) sepia(1)';
                    setTimeout(() => { document.body.style.filter = ''; }, 180);
                    this.chat.addMessage('event', '💣 CANNONBALL — direct hit. yarr. no tricks. just a cannon.');
                } else if (effect === 'ability_wizard') {
                    // ARCANE MAZE -- teleport + confuse movement
                    this.confuseTimer = Math.max(this.confuseTimer, 4);
                    document.body.style.filter = 'hue-rotate(270deg) brightness(2)';
                    setTimeout(() => { document.body.style.filter = ''; }, 250);
                    this.chat.addMessage('event', '🧙 ARCANE MAZE — teleported and confused. controls inverted for 4s.');
                } else if (effect === 'ability_vampire') {
                    // LIFEDRAIN -- drains HP to vampire
                    document.body.style.filter = 'saturate(0) brightness(0.4)';
                    setTimeout(() => { document.body.style.filter = ''; }, 400);
                    this.chat.addMessage('event', '🧛 LIFEDRAIN — 25hp stolen. the vampire feasts.');
                } else if (effect === 'ability_disco') {
                    // FORCED GROOVE -- stun + control confusion
                    this.confuseTimer = Math.max(this.confuseTimer, 2);
                    const dHue = Math.random();
                    document.body.style.filter = `hue-rotate(${dHue * 360}deg) brightness(2) saturate(3)`;
                    setTimeout(() => { document.body.style.filter = ''; }, 350);
                    this.chat.addMessage('event', '🪩 FORCED GROOVE — stunned + confused. you will dance whether you want to or not.');
                } else if (effect === 'ability_shadow') {
                    // BLACK FLASH -- screen goes black + 45 dmg
                    document.body.style.filter = 'brightness(0)';
                    setTimeout(() => { document.body.style.filter = ''; }, 250);
                    this.chat.addMessage('event', '🖤 BLACK FLASH — you did not see it coming. nobody does.');
                } else if (effect === 'ability_barney') {
                    // UNCONDITIONAL HUG -- teleport to center + stun, barney heals, no dmg
                    document.body.style.filter = 'hue-rotate(270deg) saturate(3) brightness(1.5)';
                    setTimeout(() => { document.body.style.filter = ''; }, 500);
                    this.chat.addMessage('event', '🟣 THE HUG IS MANDATORY — barney loves you. he healed. you are stunned. this is fine.');
                } else if (effect === 'ability_emo') {
                    // RESONANCE WAVE -- 40 dmg + bleak screen
                    document.body.style.filter = 'saturate(0) brightness(0.15)';
                    setTimeout(() => { document.body.style.filter = ''; }, 400);
                    this.chat.addMessage('event', '😢 RESONANCE WAVE — 40 dmg. nobody cares. especially not the emo.');
                } else if (effect === 'ability_shrek') {
                    // THIS IS MY SWAMP -- max mud, no dmg, shrek just owns the swamp
                    this.mudSlowTimer = Math.max(this.mudSlowTimer, 6);
                    document.body.style.filter = 'sepia(1) brightness(0.5)';
                    setTimeout(() => { document.body.style.filter = ''; }, 350);
                    this.chat.addMessage('event', '🟢 THIS IS MY SWAMP — 6s full mud. shrek does not fight. he just owns this.');
                } else if (effect === 'ability_buffcat') {
                    // IRON FIST -- 50 dmg, no philosophy needed
                    document.body.style.filter = 'saturate(0) contrast(4) brightness(0.5)';
                    setTimeout(() => { document.body.style.filter = ''; }, 200);
                    this.chat.addMessage('event', '💪 IRON FIST — 50 dmg. buffcat has no theme. buffcat has biceps.');
                } else if (effect === 'ability_voidcat') {
                    // VOID PERCEPTION -- hides entire HUD, teleports, no damage
                    this.hudHideTimer = Math.max(this.hudHideTimer, 5);
                    document.body.style.filter = 'invert(1) brightness(0.1)';
                    setTimeout(() => { document.body.style.filter = ''; }, 400);
                    this.chat.addMessage('event', '⬛ VOID PERCEPTION — HUD hidden 5s. voidcat fights with confusion. where is your hp?');
                } else if (effect === 'ability_hybrid_dmg') {
                    document.body.style.filter = `hue-rotate(${Math.random() * 360}deg) contrast(3)`;
                    setTimeout(() => { document.body.style.filter = ''; }, 200);
                    this.chat.addMessage('event', '😵 CHAOS BURST [damage] — hybrid rolled attack. random dmg. it was surprised too.');
                } else if (effect === 'ability_hybrid_heal') {
                    this.chat.addMessage('event', '😵 CHAOS BURST [heal] — hybrid healed itself. 50% hp. it looked as confused as you.');
                } else if (effect === 'ability_hybrid_chaos') {
                    this.confuseTimer = Math.max(this.confuseTimer, 3);
                    document.body.style.filter = `hue-rotate(${Math.random() * 360}deg) saturate(5)`;
                    setTimeout(() => { document.body.style.filter = ''; }, 300);
                    this.chat.addMessage('event', '😵 CHAOS BURST [confusion] — stunned + confused. hybrid doesnt know what it is either.');
                } else if (effect === 'execute_player') {
                    this.chat.addMessage('event', '💀 DOMAIN EXECUTE — you were too weak. the domain finished it.');
                } else if (effect === 'kill_burst') {
                    this.chat.addMessage('event', '💥 DOMAIN COLLAPSE DETONATION — standing inside was a mistake.');
                } else if (effect === 'domain_timeout') {
                    // ugh. domain ran out of time. nobody died. whatever. it collapses anyway.
                    this.chat.addMessage('event', '⏳ domain faded — 10s. no kill. it dissolved.');
                    this.voice.speakAbility('domain_timeout', this._domainNameToNpcType(''));
                }
                // npc speaks its ability line -- ability_ prefix = sure-hit fires
                if (effect.startsWith('ability_')) {
                    const npcType = this._domainNameToNpcType(effect.replace('ability_', '').replace(/_dmg|_heal|_chaos/, ''));
                    this.voice.speakAbility(effect, npcType);
                } else if (effect === 'execute_player') {
                    this.voice.speakAbility('execute_player', 'shadow');
                }
            };
        }

        // mob looted a mob -- show it in chat so the carnage is visible
        this.npcManager.onNpcEquipItem = (npcType, itemName) => {
            this.chat.addMessage('event', `🗡️ A ${npcType} looted: ${itemName}!`);
        };

        // domain opened -- npc got its special ability. announce it so the player panics appropriately.
        this.npcManager.onDomainBuff = (npcType, buffDesc) => {
            this.chat.addMessage('event', `💀 ${npcType.toUpperCase()} DOMAIN BUFF: ${buffDesc}`);
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

            // G key = throw item -- yeet that thing at a nearby cat
            if (e.key.toLowerCase() === 'g' && !this.chat.isInputOpen() && this.throwables?.heldItem) {
                const pos = this.sageCharacter.getPosition();
                const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.sageCharacter.getRotationY());
                this.throwables.throw(pos, forward);
                return;
            }

            // R key = time rewind if available from chaotic extras
            if (e.key.toLowerCase() === 'r' && !this.chat.isInputOpen() && this.chaoticExtras) {
                const rewoundPos = this.chaoticExtras.rewindTime();
                if (rewoundPos) this.sageCharacter.teleportTo(rewoundPos);
                return;
            }

            // H key = HAMON BREATHING!! sensei caesar would be proud
            // HAMON BREATHING!! heals you while you breathe. 8s of 3hp/sec. 30s cooldown.
            if (e.key.toLowerCase() === 'h' && !this.chat.isInputOpen()) {
                if (this.hamonCooldown > 0) {
                    this.chat.addMessage('event', `🌊 Hamon cooldown: ${Math.ceil(this.hamonCooldown)}s remaining... breathe deeper.`);
                } else {
                    this.hamonTimer = 8;
                    this.hamonCooldown = 30;
                    const line = this.jojoSystem.breatheHamon();
                    this.chat.addMessage('event', `🌊 ${line}`);
                    this.chat.addMessage('event', '🌊 HAMON active! +3 HP/sec for 8s');
                    console.log(`%c🌊 ${line}`, 'color: #88ddff; font-size: 14px; font-weight: bold; text-shadow: 0 0 8px cyan;');
                }
                return;
            }

            // N key = NIGERUNDAYO!! the holy run away technique. 2.5x speed for 4s. 20s cd.
            if (e.key.toLowerCase() === 'n' && !this.chat.isInputOpen()) {
                if (this.nigerundayoCooldown > 0) {
                    this.chat.addMessage('event', `🏃 NIGERUNDAYO cooldown: ${Math.ceil(this.nigerundayoCooldown)}s... what, you cant run THAT often`);
                } else {
                    this.nigerundayoTimer = 4;
                    this.nigerundayoCooldown = 20;
                    const msg = this.jojoSystem.nigerundayo('DANGER');
                    this.chat.addMessage('event', `🏃 ${msg}`);
                    this.chat.addMessage('event', '🏃 NIGERUNDAYO!! Speed x2.5 for 4s!!!');
                    console.log('%cNIGERUNDAYO!!!! RUN RUUUUUN', 'color: #ff9933; font-size: 18px; font-weight: bold;');
                }
                return;
            }

            // Z key = domain expansion. just like the anime. except the player is the cat
            if (e.key.toLowerCase() === 'z' && !this.chat.isInputOpen()) {
                if (this.sageCharacter.tryActivateDomain()) {
                    const ds = this.npcManager.getDomainSystem();
                    if (ds) ds.openPlayerDomain(this.sageCharacter.getPosition());
                    this.showDomainBanner('Aberrant Throne', 'I DWELL IN A DREAM, BY A LAW OF MY OWN. STEP INSIDE MY THRONE AND CEASE TO EXIST.');
                    this.chat.addMessage('event', '⚡ DOMAIN EXPANSION: ABERRANT THRONE');
                } else {
                    const cd = Math.ceil(this.sageCharacter.getDomainCooldown());
                    this.chat.addMessage('event', cd > 0 ? `⏳ Domain cooldown: ${cd}s remaining` : '⚡ Domain already active!');
                }
                return;
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
        // robot domain: system override -- attacks disabled
        if (this.attackPenaltyTimer > 0) {
            this.chat.addMessage('event', '🤖 ATTACK BLOCKED — system override active.');
            return;
        }
        const playerPos = this.sageCharacter.getPosition();
        const range = this.sageCharacter.getAttackRange(this.inventory.getRangeBonus());
        const baseDmg = this.sageCharacter.getAttackDamage(this.inventory.getAttackBonus());
        let dmg = Math.ceil(baseDmg * this.inventory.getDamageDealtMult());

        // critical hit -- 15% chance to double damage. gold flash. scream it.
        const isCrit = Math.random() < 0.15;
        if (isCrit) dmg = Math.ceil(dmg * 2);

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

            // spawn floating damage number -- project 3d npc pos to 2d screen coords
            try {
                const camera = this.renderEngine.getCamera();
                const npcPos3 = closest.getPosition().clone();
                npcPos3.y += 2; // pop up from head height
                const projected = npcPos3.project(camera);
                const sx = (projected.x + 1) / 2 * window.innerWidth;
                const sy = (-projected.y + 1) / 2 * window.innerHeight;
                if (projected.z < 1 && (window as any).getSetting?.('showDamageNumbers') !== false) { // only if visible and dmg numbers not disabled in settings
                    spawnDmgNumber(sx, sy, dmg, isCrit);
                }
            } catch (_) {}

            // screen shake on heavy hits (crits or high damage)
            if (isCrit || dmg >= 40) screenShake(isCrit && dmg >= 40);

            if (died) {
                this.chat.addMessage('event', isCrit
                    ? `💥 CRITICAL KILL ${closest.getType()}! (+${dmg} dmg)`
                    : `⚔ Killed a ${closest.getType()}! (+${dmg} dmg)`
                );
                addKillFeed(`You → ${closest.getType()} (${dmg})`, true);
                this.spawnDeathParticles(closest.getPosition());
            } else {
                this.chat.addMessage('event', isCrit
                    ? `💥 CRIT! Hit ${closest.getType()} for ${dmg} dmg`
                    : `⚔ Hit ${closest.getType()} for ${dmg} dmg`
                );
            }
        }
    }

    // spawnDeathParticles -- tiny colorful explosion of spheres when an npc dies. ur welcome.
    // "the realm doth shatter into glorious fragments" -- medieval knight energy
    private spawnDeathParticles(pos: THREE.Vector3): void {
        const count = 12 + Math.floor(Math.random() * 8);
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const velocities: THREE.Vector3[] = [];

        for (let i = 0; i < count; i++) {
            positions[i * 3]     = pos.x;
            positions[i * 3 + 1] = pos.y + 1;
            positions[i * 3 + 2] = pos.z;
            const angle = Math.random() * Math.PI * 2;
            const up = 4 + Math.random() * 8;
            const out = 3 + Math.random() * 7;
            velocities.push(new THREE.Vector3(
                Math.cos(angle) * out, up, Math.sin(angle) * out
            ));
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const colors = [0xff4444, 0xff8844, 0xffff44, 0xffffff, 0xaa44ff, 0x44ffaa];
        const mat = new THREE.PointsMaterial({
            color: colors[Math.floor(Math.random() * colors.length)],
            size: 0.4 + Math.random() * 0.3,
            transparent: true, opacity: 1.0,
        });
        const points = new THREE.Points(geo, mat);
        this.scene.add(points);
        this.deathParticles.push({ mesh: points, vel: velocities, life: 0.7, maxLife: 0.7 });
    }

    // updateDeathParticles -- moves particles outward + fades them to nothing. poetic. nobody asked. idc.
    private updateDeathParticles(dt: number): void {
        for (let i = this.deathParticles.length - 1; i >= 0; i--) {
            const p = this.deathParticles[i];
            p.life -= dt;
            if (p.life <= 0) {
                this.scene.remove(p.mesh);
                p.mesh.geometry.dispose();
                (p.mesh.material as THREE.PointsMaterial).dispose();
                this.deathParticles.splice(i, 1);
                continue;
            }
            const posAttr = p.mesh.geometry.attributes['position'] as THREE.BufferAttribute;
            for (let j = 0; j < p.vel.length; j++) {
                posAttr.array[j * 3]     += p.vel[j].x * dt;
                posAttr.array[j * 3 + 1] += p.vel[j].y * dt;
                posAttr.array[j * 3 + 2] += p.vel[j].z * dt;
                p.vel[j].y -= 15 * dt; // gravity
            }
            posAttr.needsUpdate = true;
            (p.mesh.material as THREE.PointsMaterial).opacity = p.life / p.maxLife;
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
                if (npc.getPosition().distanceTo(playerPos) < 10) { npc.takeDamage(30, true); hits++; }
            }
            this.chat.addMessage('event', `💜 Void Shard! Blasted ${hits} mobs (30 dmg)`);

        } else if (used === 'onion') {
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(playerPos) < 12) { npc.takeDamage(20, true); hits++; }
            }
            this.chat.addMessage('event', `🧅 Onion! Shrek tribute! Hit ${hits} mobs (20 dmg)`);

        } else if (used === 'turbo_fish') {
            this.itemPickups.applyCustomSpeed(4, 5);
            this.chat.addMessage('event', '🐟⚡ TURBO FISH! Speed x4 for 5s... try not to fall off the world');

        } else if (used === 'bomb') {
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(playerPos) < 15) { npc.takeDamage(60, true); hits++; }
            }
            this.chat.addMessage('event', `💣 BOMB! 60 dmg to ${hits} mobs in radius 15`);

        } else if (used === 'lightning') {
            // chain 25 dmg to 5 closest NPCs
            const sorted = [...this.npcManager.getNPCs()]
                .filter(n => n.isAlive())
                .sort((a, b) => a.getPosition().distanceTo(playerPos) - b.getPosition().distanceTo(playerPos))
                .slice(0, 5);
            sorted.forEach(n => n.takeDamage(25, true));
            this.chat.addMessage('event', `⚡ Lightning! Chained 25 dmg to ${sorted.length} targets`);

        } else if (used === 'holy_water') {
            let hits = 0;
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getType() === 'emo' && npc.getPosition().distanceTo(playerPos) < 12) {
                    npc.takeDamage(9999, true); // instant kill emos. they cannot handle holy water. its the irony.
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
                if (npc.getPosition().distanceTo(playerPos) < 12) { npc.takeDamage(20, true); hits++; }
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
                if (npc.getPosition().distanceTo(playerPos) < 25) { npc.takeDamage(100, true); hits++; }
            }
            this.chat.addMessage('event', `☢️ NUKE!! 100 dmg to ${hits} mobs. oops.`);

        } else if (used === 'plasma_cannon') {
            let closest: BaseNPC | null = null;
            let cDist = 20;
            for (const npc of this.npcManager.getNPCs()) {
                const d = npc.getPosition().distanceTo(playerPos);
                if (d < cDist) { cDist = d; closest = npc; }
            }
            if (closest) { closest.takeDamage(40, true); this.chat.addMessage('event', `🔫 Plasma Cannon! 40 dmg to ${closest.getType()}`); }
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

    // maps domain names or npc type strings back to a canonical npc type for the voice system
    // domain names are like "Infinite Meow", type strings are like "normal" -- handle both
    private _domainNameToNpcType(nameOrType: string): string {
        const lower = nameOrType.toLowerCase();
        // direct type match -- already the right string
        const direct = ['normal','jesus','robot','orb','angel','pirate','wizard','vampire',
                        'disco','shadow','barney','emo','shrek','buffcat','voidcat','hybrid','player',
                        'obama','trump'];
        if (direct.includes(lower)) return lower;
        // fuzzy match from domain display names
        if (lower.includes('meow'))      return 'normal';
        if (lower.includes('purif') || lower.includes('divine') || lower.includes('jesus')) return 'jesus';
        if (lower.includes('process') || lower.includes('robot') || lower.includes('loop')) return 'robot';
        if (lower.includes('orb') || lower.includes('spheri'))  return 'orb';
        if (lower.includes('feather') || lower.includes('angel') || lower.includes('paradise')) return 'angel';
        if (lower.includes('davy') || lower.includes('pirate') || lower.includes('locker'))     return 'pirate';
        if (lower.includes('magic') || lower.includes('wizard'))  return 'wizard';
        if (lower.includes('blood') || lower.includes('vampire')) return 'vampire';
        if (lower.includes('groove') || lower.includes('disco'))  return 'disco';
        if (lower.includes('coffin') || lower.includes('shadow') || lower.includes('iron mountain')) return 'shadow';
        if (lower.includes('love') || lower.includes('barney'))   return 'barney';
        if (lower.includes('despair') || lower.includes('hollow') || lower.includes('emo'))     return 'emo';
        if (lower.includes('swamp') || lower.includes('shrek'))   return 'shrek';
        if (lower.includes('buff') || lower.includes('circuit'))  return 'buffcat';
        if (lower.includes('void') || lower.includes('eternal') || lower.includes('darkness'))  return 'voidcat';
        if (lower.includes('chaos') || lower.includes('hybrid') || lower.includes('fusion'))    return 'hybrid';
        if (lower.includes('aberrant') || lower.includes('throne') || lower.includes('player')) return 'player';
        if (lower.includes('hope') || lower.includes('change') || lower.includes('obama'))      return 'obama';
        if (lower.includes('tremendous') || lower.includes('trump'))                            return 'trump';
        return 'normal'; // shrug fallback
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

    // spawnCampfire -- TIRED OF TAKING DAMAGE WITH NO RECOVERY?? walk near one!! HEALS YOU!! wow!!
    private spawnCampfire(x: number, z: number): void {
        const group = new THREE.Group();

        // logs -- two crossed cylinders
        const logMat = new THREE.MeshBasicMaterial({ color: 0x5c3a1e });
        const logGeo = new THREE.CylinderGeometry(0.12, 0.15, 1.8, 6);
        const log1 = new THREE.Mesh(logGeo, logMat);
        log1.rotation.z = 0.4;
        log1.position.set(0, 0.5, 0);
        group.add(log1);
        const log2 = new THREE.Mesh(logGeo, logMat);
        log2.rotation.z = -0.4;
        log2.rotation.y = Math.PI / 2;
        log2.position.set(0, 0.5, 0);
        group.add(log2);

        // rocks around the base
        const rockMat = new THREE.MeshBasicMaterial({ color: 0x666666 });
        const rockGeo = new THREE.SphereGeometry(0.3, 6, 4);
        for (let i = 0; i < 6; i++) {
            const r = new THREE.Mesh(rockGeo, rockMat);
            const a = (i / 6) * Math.PI * 2;
            r.position.set(Math.cos(a) * 0.9, 0.2, Math.sin(a) * 0.9);
            r.scale.set(0.8 + Math.random() * 0.4, 0.5, 0.8 + Math.random() * 0.4);
            group.add(r);
        }

        // flame cone
        const flameMat = new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0.85 });
        const flameGeo = new THREE.ConeGeometry(0.35, 1.2, 8);
        const flame = new THREE.Mesh(flameGeo, flameMat);
        flame.position.set(0, 1.4, 0);
        flame.name = 'campfire-flame';
        group.add(flame);

        // orange point light -- the warmth u never had
        const light = new THREE.PointLight(0xff6600, 1.5, 12);
        light.position.set(0, 1.0, 0);
        group.add(light);

        group.position.set(x, 2, z);
        this.scene.add(group);
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
        directionalLight.shadow.mapSize.width = 512;  // was 2048 -- 4x cheaper. looks identical from above.
        directionalLight.shadow.mapSize.height = 512;
        directionalLight.shadow.camera.left = -80;
        directionalLight.shadow.camera.right = 80;
        directionalLight.shadow.camera.top = 80;
        directionalLight.shadow.camera.bottom = -80;
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

        // world events -- random dramatic stuff every few minutes nyaa~
        this.worldEvents = new WorldEventsSystem(this.scene);
        this.worldEvents.onEventStart = (type, msg) => {
            this.chat.addMessage('event', msg);
            console.log(`%c🌎 WORLD EVENT: ${type}`, 'color: cyan; font-size: 14px');
        };
        this.worldEvents.onEventEnd = (type) => {
            this.chat.addMessage('event', `💨 World event "${type}" ended.`);
        };
        this.worldEvents.onDivineIntervention = () => {
            // full heal the player
            this.sageCharacter.heal(999);
            this.chat.addMessage('event', '✨ You have been fully healed by divine grace!');
        };
        this.worldEvents.onStampedeRequested = (count: number) => {
            this.npcManager.forceSpawnRandom(count);
        };
        this.worldEvents.onVoidEruption = (damage: number, radius: number) => {
            const pPos = this.sageCharacter.getPosition();
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(pPos) < radius) {
                    npc.takeDamage(damage);
                }
            }
            this.chat.addMessage('event', `🌀 Void eruption hit ${radius}u radius for ${damage} damage!`);
        };
        this.worldEvents.onMassDomainExpansion = () => {
            const npcs = this.npcManager.getNPCs();
            const targets = npcs.slice(0, Math.min(4, npcs.length));
            targets.forEach(n => n.forceActivateDomain(8));
        };
        this.worldEvents.onTreasureLanded = (lootType: string) => {
            const added = this.inventory.addItem(lootType as never);
            if (added) this.chat.addMessage('event', `🎁 Treasure caught: ${lootType}!`);
        };

        // ====== 100-FEATURE MEGA INIT -- all the big systems ======
        this.bigWorld = new BigWorldSystems(this.scene);
        this.bigWorld.onMeteorImpact = (pos) => {
            screenShake(true);
            this.chat.addMessage('event', `☄️ METEOR IMPACT at (${pos.x.toFixed(0)}, ${pos.z.toFixed(0)})!! Run!!`);
            // kill any NPCs in blast radius
            for (const npc of this.npcManager.getNPCs()) {
                if (npc.getPosition().distanceTo(pos) < 12) npc.takeDamage(80);
            }
        };
        this.bigWorld.onVolcanoErupt = () => { this.chat.addMessage('event', '🌋 VOLCANO ERUPTS!! Lava incoming!!'); };
        this.bigWorld.onBlackHolePull = (pos) => { this.chat.addMessage('event', `🕳️ BLACK HOLE at (${pos.x.toFixed(0)}, ${pos.z.toFixed(0)})`); };
        this.bigWorld.onPortalTeleport = () => { this.chat.addMessage('event', `🌀 Teleported via city portal!`); };
        this.bigWorld.onCatWorshipStatue = (type) => { this.chat.addMessage('event', `🗿 ${type} is worshipping the giant cat statue!`); };

        this.bigEvents = new BigEventSystems(this.scene);
        this.bigEvents.onCivilWarStart = () => { this.chat.addMessage('event', '⚔️ CAT CIVIL WAR BREAKS OUT!! Sides chosen!!'); };
        this.bigEvents.onGiantCatSpawn = () => { this.chat.addMessage('event', '😱 A GIANT CAT BOSS has appeared!! 800HP!!'); };
        this.bigEvents.onGiantCatDeath = () => { this.chat.addMessage('event', '💀 Giant Cat Boss defeated!! Chaos fades...'); this.levelSystem.addXP(500); };
        this.bigEvents.onVoidInvasionStart = () => { this.chat.addMessage('event', '🌑 VOID INVASION BEGINS!! 3 waves incoming!!'); };
        this.bigEvents.onFishRain = (count) => { this.chat.addMessage('event', `🐟 FISH RAIN!! ${count} fish falling from the sky!!`); };
        this.bigEvents.onArenaStart = () => { this.chat.addMessage('event', '🏟️ ARENA MODE!! 5 rounds for glory!!'); };
        this.bigEvents.onPlagueStart = () => { this.chat.addMessage('event', '🤢 A PLAGUE breaks out among the cats!!'); };
        this.bigEvents.onStampedeStart = () => { this.chat.addMessage('event', '🐎 STAMPEDE!! All cats running in one direction!!'); };
        this.bigEvents.onRebellionStart = () => { this.chat.addMessage('event', '😤 NPC REBELLION!! All cats are coming for you!!'); };
        this.bigEvents.onLightningStrike = (pos) => { this.bloomPulse?.pulse(pos, 0xffff00); };
        this.bigEvents.onFishCollect = () => { this.questSystem.progressQuest('collect_fish'); this.levelSystem.addXP(15); };

        this.socialBehavior = new SocialBehaviorSystem(this.scene);
        this.socialBehavior.onGangFormed = (name) => { this.chat.addMessage('event', `🐱 Gang formed: "${name}"!`); };
        this.socialBehavior.onLovePair = (a, b) => { this.chat.addMessage('event', `💕 ${a} and ${b} are in love~`); };
        this.socialBehavior.onCatBandFormed = () => { this.chat.addMessage('event', `🎸 A cat band formed!! They're playing!!`); };
        this.socialBehavior.onElectionResult = (winner) => { this.chat.addMessage('event', `🗳️ ELECTION RESULT: ${winner} wins the cat election!!`); };
        this.socialBehavior.onFuneral = (type) => { this.chat.addMessage('event', `⚰️ Funeral held for ${type}... RIP`); };
        this.socialBehavior.onGossip = (msg) => { this.chat.addMessage('event', `🗣️ ${msg}`); };
        this.socialBehavior.onComplaint = (msg) => { this.chat.addMessage('event', `😤 ${msg}`); };

        // sync weather into social behavior
        this.weatherSystem.onWeatherChange = (w) => {
            this.chat.addMessage('event', `⛅ Weather: ${w.toUpperCase()}`);
            this.socialBehavior.setWeather(w);
        };

        this.questSystem = new QuestSystem();
        this.questSystem.onQuestOffered = (q) => { this.chat.addMessage('event', `📋 QUEST: ${q.title} -- ${q.description}`); };
        this.questSystem.onQuestComplete = (q) => { this.chat.addMessage('event', `✅ QUEST COMPLETE: ${q.title}!! Reward: ${q.reward}!`); this.levelSystem.addXP(200); };
        this.questSystem.onQuestFailed = (q) => { this.chat.addMessage('event', `❌ Quest failed: ${q.title}. Time ran out.`); };

        this.levelSystem = new LevelSystem();
        this.levelSystem.onLevelUp = (lvl, bonus) => {
            this.chat.addMessage('event', `⬆️ LEVEL UP! Now Level ${lvl}! Bonus: ${bonus}`);
            this.bloomPulse?.pulse(this.sageCharacter.getPosition(), 0x00ffff);
            screenShake(false);
        };

        this.craftingSystem = new CraftingSystem();
        this.craftingSystem.onCraftSuccess = (result, name) => { this.chat.addMessage('event', `🔨 CRAFTED: ${name}!`); };
        this.craftingSystem.onPickupItem = (type) => { this.chat.addMessage('event', `🧪 Picked up: ${type}`); };

        this.fishingSystem = new FishingSystem(this.scene);
        this.fishingSystem.onFishCaught = (fish) => {
            this.chat.addMessage('event', `🎣 Caught: ${fish}!!`);
            this.craftingSystem.pickupItem('fish');
            this.questSystem.progressQuest('collect_fish');
            this.levelSystem.addXP(20);
        };
        this.fishingSystem.onFishEscaped = () => { this.chat.addMessage('event', `🎣 Fish escaped! ugh.`); };

        this.racingSystem = new CatRacingSystem();
        this.racingSystem.onRaceStart = (racers) => { this.chat.addMessage('event', `🏁 CAT RACE STARTS! Racers: ${racers.join(', ')}`); };
        this.racingSystem.onRaceFinish = (winner, playerWon, reward) => {
            this.chat.addMessage('event', playerWon ? `🏆 YOUR RACER WON!! Reward: ${reward} XP!` : `🏁 Race winner: ${winner}. Better luck next time.`);
            if (playerWon) this.levelSystem.addXP(reward);
        };

        this.stealthSystem = new StealthSystem();
        this.stealthSystem.onDetected = (type) => { this.chat.addMessage('event', `👁️ Detected by ${type}!`); };

        this.hungerSystem = new NPCHungerSystem(this.scene);
        this.hungerSystem.onNPCStarving = (type) => { this.chat.addMessage('event', `😿 A ${type} is starving and seeking food!`); };
        this.hungerSystem.onNPCEatFood = (type) => { this.chat.addMessage('event', `😺 ${type} found food and ate it!`); };

        this.throwables = new ThrowableSystem(this.scene);
        this.throwables.onHitNPC = (npc, dmg, type) => {
            this.chat.addMessage('event', `💥 Hit ${npc.getType()} with ${type} for ${dmg} dmg!`);
            this.levelSystem.addXP(10);
            this.questSystem.progressQuest('kill_npcs', npc.isAlive() ? 0 : 1);
        };
        this.throwables.onPickup = (type) => { this.chat.addMessage('event', `✋ Picked up ${type}! Press G to throw.`); };

        // wire npc death into social funeral system
        const origNpcKilled = this.npcManager.onNpcKilled;
        this.npcManager.onNpcKilled = (npcType, pos) => {
            origNpcKilled?.(npcType, pos);
            this.socialBehavior.holdFuneral(npcType, pos);
            this.levelSystem.addXP(30);
            this.questSystem.progressQuest('kill_npcs');
        };

        // visual extras init -- all the shiny stuff
        this.trailFx = new TrailEffectSystem(this.scene);
        this.hologramFx = new HologramEffect(this.scene);
        this.frozenFx = new FrozenEffect(this.scene);
        this.heatFx = new HeatEffect(this.scene);
        this.bloomPulse = new BloomPulse(this.scene);
        this.chaoticExtras = new ChaoticExtras(this.scene);
        this.chaoticExtras.onGrowingCatExplode = (pos) => {
            this.bloomPulse.pulse(pos, 0xff6600);
            screenShake(true);
            this.chat.addMessage('event', `💥 A growing cat EXPLODED at (${pos.x.toFixed(0)}, ${pos.z.toFixed(0)})!!`);
        };
        this.chaoticExtras.onTimeRewind = (_snapshots) => { this.chat.addMessage('event', `⏪ Time rewind! Returned 1 second.`); };
        this.chaoticExtras.onReverseGravityZone = (pos) => { this.chat.addMessage('event', `☁️ Reverse gravity zone spawned at (${pos.x.toFixed(0)}, ${pos.z.toFixed(0)})!`); };
        this.chaoticExtras.onNPCCloned = (npc) => { this.chat.addMessage('event', `🪞 ${npc.getType()} was CLONED!!`); };
        this.chaoticExtras.onStalkerDetected = (type) => { this.chat.addMessage('event', `👁️‍🗨️ The ${type} is getting very close...`); };
        // ====================================================
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
            const nigerMult = this.nigerundayoTimer > 0 ? 2.5 : 1; // NIGERUNDAYO legggoo
            this.sageCharacter.setSpeedMultiplier(fishMult * mudMult * nigerMult);
            if (this.mudSlowTimer > 0) this.mudSlowTimer -= deltaTime;
            // tick domain debuff timers
            if (this.attackPenaltyTimer > 0) this.attackPenaltyTimer -= deltaTime;
            if (this.hudHideTimer > 0) this.hudHideTimer -= deltaTime;

            // tick all active buff/debuff timers -- none of these worked before bc nobody decremented them. oops.
            if (this.invincibleTimer > 0) this.invincibleTimer -= deltaTime;
            if (this.hotSauceTimer > 0) this.hotSauceTimer -= deltaTime;
            if (this.confuseTimer > 0) this.confuseTimer -= deltaTime;
            if (this.slowMoTimer > 0) this.slowMoTimer -= deltaTime;
            if (this.bandageTimer > 0) {
                this.bandageTimer -= deltaTime;
                this.sageCharacter.hp = Math.min(this.sageCharacter.maxHp, this.sageCharacter.hp + this.bandageRate * deltaTime);
            }

            // HAMON TICK -- ripple breathing heals naturally. like caesar taught.
            if (this.hamonTimer > 0) {
                this.hamonTimer -= deltaTime;
                this.sageCharacter.hp = Math.min(this.sageCharacter.maxHp, this.sageCharacter.hp + 3 * deltaTime);
            }
            if (this.hamonCooldown > 0) this.hamonCooldown -= deltaTime;

            // NIGERUNDAYO TICK -- the sprint expires. glory ends.
            if (this.nigerundayoTimer > 0) this.nigerundayoTimer -= deltaTime;
            if (this.nigerundayoCooldown > 0) this.nigerundayoCooldown -= deltaTime;

            // YOUR NEXT LINE -- DIO predicts. DIO is always right. or is he?
            this.yourNextLineTimer -= deltaTime;
            if (this.yourNextLineTimer <= 0) {
                const prediction = this.jojoSystem.predictNextAction();
                this.chat.addMessage('event', `🔮 YOUR NEXT LINE IS... "${prediction}"`);
                this.yourNextLineWindow = 12; // 12s to prove DIO right
                this.yourNextLineTimer = 45 + Math.random() * 45; // fires every 45-90s
            }
            if (this.yourNextLineWindow > 0) this.yourNextLineWindow -= deltaTime;
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
            this.worldEvents.update(effectiveDt, this.sageCharacter.getPosition());

            // ====== 100-FEATURE MEGA UPDATE LOOP -- all new chaos systems ======
            const playerPos = this.sageCharacter.getPosition();
            const allNPCs = this.npcManager.getNPCs();
            this.bigWorld.npcPositions = allNPCs.map(n => n.getPosition()); // set separately bc update only takes (dt, playerPos)
            this.bigWorld.update(effectiveDt, playerPos);
            this.bigEvents.update(effectiveDt, allNPCs, playerPos);
            this.socialBehavior.update(effectiveDt, allNPCs);
            this.questSystem.update(effectiveDt);
            this.fishingSystem.update(effectiveDt);
            this.racingSystem.update(effectiveDt);
            this.stealthSystem.checkDetection(playerPos, allNPCs);
            this.hungerSystem.update(effectiveDt, allNPCs);
            this.throwables.update(effectiveDt, allNPCs, playerPos);
            this.trailFx.update(effectiveDt);
            this.hologramFx.update(effectiveDt);
            this.frozenFx.update(effectiveDt);
            this.heatFx.update(effectiveDt);
            this.bloomPulse.update(effectiveDt);
            this.chaoticExtras.update(effectiveDt, allNPCs, playerPos);
            this.chaoticExtras.recordPlayerPos(playerPos);
            // reverse gravity zone check -- flip Y velocity if inside zone
            if (this.chaoticExtras.isInReverseGravityZone(playerPos)) {
                this.sageCharacter.applyForce?.(new THREE.Vector3(0, 25 * effectiveDt, 0));
            }
            // =====================================================================

            // faction badge on HUD
            const factionEl = document.getElementById('faction-hud');
            if (factionEl && !factionEl.dataset['init']) {
                factionEl.dataset['init'] = '1';
                factionEl.addEventListener('click', () => this.factionSystem.cyclePlayerFaction());
            }

            // spit on him brudda (ugandan knuckles rain event)
            this.ugandanKnucklesEvent.update(deltaTime, this.sageCharacter.getPosition());

            // DIO SPAWN TIMER -- KONO DIO DA. every 5 minutes he shows up again.
            this.dioSpawnTimer -= deltaTime;
            if (this.dioSpawnTimer <= 0) {
                this.npcManager.forceSpawnDio();
                this.showDomainBanner('KONO DIO DA!!!', 'IT WAS ME, DIO!! THE VILLAIN OF THIS WORLD HAS ARRIVED!! ZA WARUDO AWAITS!!');
                this.chat.addMessage('event', '🧛 KONO DIO DA!!! The villain of this world has spawned!!');
                this.chat.addMessage('event', '🧛 DIO has 500 HP and no domain -- only ZA WARUDO. beware.');
                this.dioSpawnTimer = 300; // respawns every 5 minutes. he is persistent.
            }

            // reproject all chat bubbles to screen every frame
            this.bubbles.update();

            // Update camera controller
            const sagePos = this.sageCharacter.getPosition();
            this.cameraController.setFollowTarget(sagePos, sagePos);
            this.cameraController.setPlayerMoving(this.sageCharacter.isMoving());
            this.cameraController.update();
            // sync shift lock state to character every frame
            this.sageCharacter._shiftLocked = this.cameraController.isShiftLocked();

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

            // tick the player's domain expansion (auto-awaken at 20% HP, Z key manual, 15s duration 90s cd)
            const domainTick = this.sageCharacter.tickPlayerDomain(effectiveDt);
            if (domainTick === 'opened') {
                // low hp auto-awakened -- dramatic moment ngl
                const ds2 = this.npcManager.getDomainSystem();
                if (ds2 && !ds2.isPlayerDomainActive()) ds2.openPlayerDomain(this.sageCharacter.getPosition());
                this.showDomainBanner('Aberrant Throne', 'I DWELL IN A DREAM, BY A LAW OF MY OWN. STEP INSIDE MY THRONE AND CEASE TO EXIST.');
                this.chat.addMessage('event', '⚡ Domain Expansion ABERRANT THRONE awakened at low HP!!');
            } else if (domainTick === 'expired') {
                // 15s hard cap ran out -- close it forcefully
                this.npcManager.getDomainSystem()?.forceClosePlayerDomain();
                this.chat.addMessage('event', '💨 Aberrant Throne collapsed after 15 seconds. 90s cooldown.');
            }
            // update the player domain sphere + deal npc damage each frame
            this.npcManager.getDomainSystem()?.updatePlayerDomain(
                effectiveDt,
                this.sageCharacter.getPosition(),
                this.npcManager.getNPCs()
            );

            // player death + respawn logic
            if (this.sageCharacter.isDead()) {
                if (this.playerRespawnTimer <= 0) {
                    this.playerRespawnTimer = 3.0; // respawn after 3 seconds
                    // collapse ALL domains when player dies -- domain requires a living caster
                    this.npcManager.getDomainSystem()?.forceCloseAll();
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

            // death particle bursts -- they scatter and fade. poetic ending for every npc.
            this.updateDeathParticles(effectiveDt);

            // campfire proximity regen -- walk near fire = +2 HP/s. cozy little heal zone.
            let nearCampfire = false;
            const sagePos2 = this.sageCharacter.getPosition();
            for (const cf of this.campfirePositions) {
                if (sagePos2.distanceTo(cf) < 5) {
                    nearCampfire = true;
                    if (!this.sageCharacter.isDead()) {
                        this.sageCharacter.hp = Math.min(this.sageCharacter.maxHp, this.sageCharacter.hp + 2 * deltaTime);
                    }
                    break;
                }
            }
            const campfireHud = document.getElementById('campfire-hud');
            if (campfireHud) campfireHud.classList.toggle('show', nearCampfire);

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
        // voidcat domain: hide entire HUD while hudHideTimer is active. you cant see anything.
        const uiEl = document.getElementById('ui') as HTMLElement | null;

        // minimap update every frame -- project all npc positions for the little dots
        // the minimap sees them all. it always has. do your own research.
        try {
            const sageXZ = this.sageCharacter.getPosition();
            const npcDots = this.npcManager.getNPCs().map(n => ({
                x: n.getPosition().x,
                z: n.getPosition().z,
                type: n.getType(),
                alive: n.isAlive(),
            }));
            drawMinimap(sageXZ.x, sageXZ.z, npcDots);
        } catch (_) {}

        // status effects row -- show active debuffs/buffs as icons below HP panel
        try {
            const effects: {icon:string,label:string}[] = [];
            if (this.invincibleTimer > 0)      effects.push({ icon: '⭐', label: `Invincible ${Math.ceil(this.invincibleTimer)}s` });
            if (this.slowMoTimer > 0)          effects.push({ icon: '💎', label: `Slow-Mo ${Math.ceil(this.slowMoTimer)}s` });
            if (this.confuseTimer > 0)         effects.push({ icon: '🍩', label: `Confused ${Math.ceil(this.confuseTimer)}s` });
            if (this.bandageTimer > 0)         effects.push({ icon: '🩹', label: `Regen ${Math.ceil(this.bandageTimer)}s` });
            if (this.hotSauceTimer > 0)        effects.push({ icon: '🌶️', label: `Hot Sauce ${Math.ceil(this.hotSauceTimer)}s` });
            if (this.onionLayerActive)         effects.push({ icon: '🧅', label: 'Onion Layer' });
            if (this.shieldHitsRemaining > 0)  effects.push({ icon: '🛡', label: `Shield x${this.shieldHitsRemaining}` });
            if (this.soulGemActive)            effects.push({ icon: '💎', label: 'Soul Gem' });
            if (this.attackPenaltyTimer > 0)   effects.push({ icon: '🤖', label: `Locked ${Math.ceil(this.attackPenaltyTimer)}s` });
            if (this.mudSlowTimer > 0)         effects.push({ icon: '💩', label: `Mud ${Math.ceil(this.mudSlowTimer)}s` });
            if (this.hudHideTimer > 0)         effects.push({ icon: '⬛', label: `Void ${Math.ceil(this.hudHideTimer)}s` });
            if (this.hamonTimer > 0)           effects.push({ icon: '🌊', label: `Hamon ${Math.ceil(this.hamonTimer)}s` });
            if (this.nigerundayoTimer > 0)     effects.push({ icon: '🏃', label: `NIGERUNDAYO ${Math.ceil(this.nigerundayoTimer)}s` });
            if (this.yourNextLineWindow > 0)   effects.push({ icon: '🔮', label: `DIO watching ${Math.ceil(this.yourNextLineWindow)}s` });
            if (this.sageCharacter.isDodging?.()) effects.push({ icon: '💨', label: 'Dodging' });
            updateStatusEffects(effects);
        } catch (_) {}
        const hpEl = document.getElementById('hp-panel') as HTMLElement | null;
        const hidden = this.hudHideTimer > 0;
        if (uiEl) uiEl.style.visibility = hidden ? 'hidden' : '';
        if (hpEl) hpEl.style.visibility = hidden ? 'hidden' : '';
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

        // domain hud indicator -- tells the player the Z key exists
        const domainEl = document.getElementById('domain-hud');
        if (domainEl) {
            if (this.sageCharacter.isDomainActive()) {
                domainEl.textContent = `⚡ DOMAIN: ${Math.ceil(this.sageCharacter.getDomainTimeRemaining())}s`;
                domainEl.style.color = '#8844ff';
            } else {
                const cd = Math.ceil(this.sageCharacter.getDomainCooldown());
                domainEl.textContent = cd > 0 ? `⏳ Domain: ${cd}s` : '⚡ Domain (Z)';
                domainEl.style.color = cd > 0 ? '#888888' : '#8844ff';
            }
        }

        // chaos meter -- show the chaos level from bigEvents
        try {
            const chaosBar = document.getElementById('chaos-bar');
            if (chaosBar && this.bigEvents) chaosBar.style.width = `${this.bigEvents.getChaosLevel()}%`;
        } catch (_) {}

        // level + xp bar update
        try {
            const lvlLabel = document.getElementById('level-label');
            const xpBar = document.getElementById('xp-bar');
            if (lvlLabel && this.levelSystem) lvlLabel.textContent = `LVL ${this.levelSystem.getLevel()}`;
            if (xpBar && this.levelSystem) xpBar.style.width = `${this.levelSystem.getXPPercent() * 100}%`;
        } catch (_) {}

        // quest hud update
        try {
            const questHud = document.getElementById('quest-hud');
            const questTitle = document.getElementById('quest-title');
            const questProg = document.getElementById('quest-progress');
            const questTimer = document.getElementById('quest-timer');
            const q = this.questSystem?.getActiveQuest();
            if (questHud && q) {
                questHud.style.display = 'block';
                if (questTitle) questTitle.textContent = `📋 ${q.title}`;
                if (questProg) questProg.textContent = `${q.progress}/${q.goalAmount}`;
                if (questTimer) questTimer.textContent = `${Math.ceil(q.timeLimit)}s left`;
            } else if (questHud) {
                questHud.style.display = 'none';
            }
        } catch (_) {}

        // held item display
        try {
            const heldHud = document.getElementById('held-item-hud');
            const heldName = document.getElementById('held-item-name');
            const heldItem = this.throwables?.getHeldItem();
            if (heldHud && heldName) {
                if (heldItem) {
                    heldHud.style.display = 'block';
                    heldName.textContent = heldItem;
                } else {
                    heldHud.style.display = 'none';
                }
            }
        } catch (_) {}
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
