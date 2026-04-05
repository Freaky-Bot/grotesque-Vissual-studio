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
        this.chat.setOnPlayerSend((text) => this.sageCharacter.showBubble(text));

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

        // Start the world
        this.start();
    }

    private setupKeyboardControls(): void {
        document.addEventListener('keydown', (e) => {
            this.keyPressed[e.key.toLowerCase()] = true;

            if (e.key.toLowerCase() === 'p') {
                // Attempt procreation
                const offspring = this.procreationSystem.procreate(
                    this.sageCharacter.getPosition(),
                    this.catGod.position,
                    this.scene
                );

                if (offspring) {
                    this.npcManager.addNPC(offspring);
                }
            }
        });

        document.addEventListener('keyup', (e) => {
            this.keyPressed[e.key.toLowerCase()] = false;
        });
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
            const deltaTime = 1 / 60; // Assuming 60 FPS

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

            this.physicsWorld.update(deltaTime);
            this.sageCharacter.update(deltaTime, this.cameraController.getOrbitAngleY(), this.chat.isInputOpen(), joyDx, joyDy);

            // give npc manager the player pos each frame (needed for emo stand targeting)
            this.npcManager.setPlayerPos(this.sageCharacter.getPosition());

            // broadcast our position to the server at ~20hz (throttled internally)
            const p = this.sageCharacter.getPosition();
            this.multiplayer.sendPosition(p.x, p.y, p.z, this.sageCharacter.getRotationY());

            // update all remote player lerps
            for (const rp of this.remotePlayers.values()) {
                rp.update(deltaTime);
            }
            this.catGod.update(deltaTime, this.sageCharacter.getPosition());
            this.npcManager.update(deltaTime);
            this.worldGenerator.update(deltaTime, this.sageCharacter.getPosition());

            // spit on him brudda (ugandan knuckles rain event)
            this.ugandanKnucklesEvent.update(deltaTime, this.sageCharacter.getPosition());

            // reproject all chat bubbles to screen every frame
            this.bubbles.update();

            // Update camera controller
            const sagePos = this.sageCharacter.getPosition();
            this.cameraController.setFollowTarget(sagePos, sagePos);
            this.cameraController.update();

            // Handle player interactions
            this.playerTracker.update();

            // JOJO REFRENCE EVERY 180 FRAMES (3 seconds) ゴゴゴゴゴゴゴゴゴ
            this.jojoMessageCounter++;
            if (this.jojoMessageCounter % 180 === 0) {
                console.log(`%c${this.jojoSystem.getRandomJojoReference()}`, 'color: gold; font-size: 16px; font-weight: bold;');
                console.log(`%cゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ`, 'color: purple; font-size: 14px;');
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

    private updateUI(): void {
        const playerKillsEl = document.getElementById('playerKills');
        const npcStatsEl = document.getElementById('npcStats');
        const procreationEl = document.getElementById('procreation');

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
