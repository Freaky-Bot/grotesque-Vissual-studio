import * as THREE from 'three';
import { RenderEngine } from './renderEngine';
import { WorldGenerator } from './world/WorldGenerator';
import { PlayerCharacter } from './world/PlayerCharacter';
import { CameraController } from './world/CameraController';
import { PhysicsWorld } from './world/PhysicsWorld';

// ugh. clean slate. starting over. not like anyone cares but here we go. mrrrow.
declare global {
    interface Window {
        __gameInit: () => void;
    }
}

// the one class that runs this whole thing now. way smaller. honestly kinda nice.
class TheIncrementalGame {
    private renderEngine: RenderEngine;
    private world: WorldGenerator;
    private player: PlayerCharacter;
    private camera: CameraController;
    private physics: PhysicsWorld;
    private scene: THREE.Scene;
    private clock: THREE.Clock = new THREE.Clock();
    private running: boolean = false;

    constructor() {
        // da render engine -- the only thing keeping us from the void. classic.
        this.renderEngine = new RenderEngine();
        this.scene = this.renderEngine.getScene();

        // physics -- gravity exists. not like it matters. but it exists.
        this.physics = new PhysicsWorld();
        this.physics.addGround(500, 500);

        // da world -- the mountains and trees and grass. the good stuff.
        this.world = new WorldGenerator(this.scene);

        // da player -- u. a lil blue cube. iconic.
        this.player = new PlayerCharacter(this.scene);

        // HEAR YE: the camera doth follow the player with roblox-style orbit.
        this.camera = new CameraController(this.renderEngine.getCamera());

        // setup lights so the world isnt pitch black. common courtesy.
        this.setupLights();
    }

    private setupLights(): void {
        // ambient so nothing is completely in shadow -- cozy lil glow
        const ambient = new THREE.AmbientLight(0xffeedd, 0.5);
        this.scene.add(ambient);

        // sun -- directional, classic, forever
        const sun = new THREE.DirectionalLight(0xffffff, 1.2);
        sun.position.set(80, 120, 60);
        sun.castShadow = true;
        sun.shadow.mapSize.width = 2048;
        sun.shadow.mapSize.height = 2048;
        sun.shadow.camera.near = 0.5;
        sun.shadow.camera.far = 500;
        sun.shadow.camera.left = -200;
        sun.shadow.camera.right = 200;
        sun.shadow.camera.top = 200;
        sun.shadow.camera.bottom = -200;
        this.scene.add(sun);
    }

    public start(): void {
        // generate da world first. then loop.
        this.world.generateInitialWorld();
        this.running = true;

        // register the player canvas click to enable pointer lock
        this.renderEngine.getRenderer().domElement.addEventListener('click', () => {
            this.renderEngine.getRenderer().domElement.requestPointerLock?.();
        });

        this.gameLoop();
    }

    private gameLoop(): void {
        if (!this.running) return;
        requestAnimationFrame(() => this.gameLoop());

        const dt = Math.min(this.clock.getDelta(), 0.05); // cap dt to 50ms so big lags dont break physics

        // update player first -- movement input
        this.player.update(dt);

        // get where the player actually is now
        const pos = this.player.getPosition();

        // world generates more chunks around the player as they explore nyaa~
        this.world.update(dt, pos);

        // camera orbits around the player. smooth. roblox-like. we love it.
        this.camera.setFollowTarget(pos, pos);
        this.camera.update();

        // render da scene!!
        this.renderEngine.render();

        // update the basic HUD stats -- position etc.
        this.updateHUD(pos);
    }

    private updateHUD(pos: THREE.Vector3): void {
        // show coordinates in the top-left panel
        const coordsEl = document.getElementById('player-coords');
        if (coordsEl) {
            coordsEl.textContent = `X: ${pos.x.toFixed(0)}  Z: ${pos.z.toFixed(0)}`;
        }
    }
}

let game: TheIncrementalGame | null = null;

// window.__gameInit is called by the pregame menu button when u click START
window.__gameInit = () => {
    game = new TheIncrementalGame();
    game.start();
};
