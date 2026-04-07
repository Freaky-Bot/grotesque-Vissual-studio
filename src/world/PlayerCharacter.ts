import * as THREE from 'three';

export class PlayerCharacter {
    private position: THREE.Vector3;
    private velocity: THREE.Vector3;
    private mesh: THREE.Group;
    private speed: number = 30;
    private keys: Record<string, boolean> = {};

    constructor(scene: THREE.Scene) {
        this.position = new THREE.Vector3(0, 2, -20);
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.mesh = this.createPlayerMesh();
        this.mesh.position.copy(this.position);
        scene.add(this.mesh);

        this.setupControls();
    }

    private createPlayerMesh(): THREE.Group {
        const group = new THREE.Group();

        // body
        const bodyGeo = new THREE.BoxGeometry(1, 2, 0.8);
        const bodyMat = new THREE.MeshStandardMaterial({ color: 0x4488ff });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.castShadow = true;
        body.receiveShadow = true;
        group.add(body);

        // head
        const headGeo = new THREE.SphereGeometry(0.5, 16, 16);
        const headMat = new THREE.MeshStandardMaterial({ color: 0xffcc99 });
        const head = new THREE.Mesh(headGeo, headMat);
        head.position.y = 1.3;
        head.castShadow = true;
        head.receiveShadow = true;
        group.add(head);

        // eyes
        const eyeGeo = new THREE.SphereGeometry(0.1, 8, 8);
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
        leftEye.position.set(-0.15, 1.5, 0.45);
        group.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
        rightEye.position.set(0.15, 1.5, 0.45);
        group.add(rightEye);

        return group;
    }

    private setupControls(): void {
        document.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
        });

        document.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
    }

    public update(deltaTime: number): void {
        // Reset velocity
        this.velocity.set(0, 0, 0);

        // Handle movement
        if (this.keys['w'] || this.keys['arrowup']) {
            this.velocity.z -= this.speed;
        }
        if (this.keys['s'] || this.keys['arrowdown']) {
            this.velocity.z += this.speed;
        }
        if (this.keys['a'] || this.keys['arrowleft']) {
            this.velocity.x -= this.speed;
        }
        if (this.keys['d'] || this.keys['arrowright']) {
            this.velocity.x += this.speed;
        }

        // Apply movement
        this.position.add(this.velocity.clone().multiplyScalar(deltaTime));

        // Keep in bounds -- now we explore da whole world yaaaas~ UwU
        this.position.x = Math.max(-800, Math.min(800, this.position.x));
        this.position.z = Math.max(-800, Math.min(800, this.position.z));

        // Update mesh
        this.mesh.position.copy(this.position);

        // Rotate to face direction of movement
        if (this.velocity.length() > 0) {
            const angle = Math.atan2(this.velocity.x, this.velocity.z);
            this.mesh.rotation.y = angle;
        }
    }

    public getPosition(): THREE.Vector3 {
        return this.position;
    }

    public getMesh(): THREE.Group {
        return this.mesh;
    }
}
