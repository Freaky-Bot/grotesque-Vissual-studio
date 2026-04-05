import * as THREE from 'three';

export class RenderEngine {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;

    constructor() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87ceeb); // Sky blue

        // Create camera
        const width = window.innerWidth;
        const height = window.innerHeight;
        // far plane 5000 was killing frustum culling performance. 600 is plenty for a cat world.
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 600);
        this.camera.position.set(0, 30, 50);
        this.camera.lookAt(0, 0, 0);

        // Create renderer
        // antialias costs a LOT on low-end machines -- using pixel ratio 1 as a compromise
        this.renderer = new THREE.WebGLRenderer({ antialias: false }); // antialias off = huge perf gain
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // cap pixel ratio
        this.renderer.setSize(width, height);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.BasicShadowMap; // fast shadows. not pretty. still shadows.
        document.body.appendChild(this.renderer.domElement);

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());
    }

    private onWindowResize(): void {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    public getScene(): THREE.Scene {
        return this.scene;
    }

    public getCamera(): THREE.PerspectiveCamera {
        return this.camera;
    }

    public getRenderer(): THREE.WebGLRenderer {
        return this.renderer;
    }

    public render(): void {
        this.renderer.render(this.scene, this.camera);
    }
}
