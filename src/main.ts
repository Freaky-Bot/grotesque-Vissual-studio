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
    private scene: THREE.Scene;
    private keyPressed: Record<string, boolean> = {};
    private jojoMessageCounter: number = 0;

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

        // Point light for ambiance
        const pointLight = new THREE.PointLight(0x87ceeb, 0.3);
        pointLight.position.set(-50, 50, 50);
        this.scene.add(pointLight);
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
