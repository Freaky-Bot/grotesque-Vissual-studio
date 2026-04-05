// remote player -- renders another player in the scene
// uses a cyan orb (vs local player purple) so you can tell them apart
// positions are lerped so movement looks smooth even at 20hz network rate

import * as THREE from 'three';

export class RemotePlayer {
    public readonly id: string;
    public readonly username: string;

    private mesh: THREE.Group;
    private scene: THREE.Scene;

    // lerp targets -- the last received pos from the network
    private targetPos: THREE.Vector3;
    private currentPos: THREE.Vector3;
    private targetRotY: number = 0;
    private currentRotY: number = 0;

    // bubble callback -- same as local player, so chat messages show above head
    private bubbleCb: ((pos: THREE.Vector3, text: string, headOffset: number) => void) | null = null;

    constructor(scene: THREE.Scene, id: string, username: string, x: number, y: number, z: number) {
        this.id = id;
        this.username = username;
        this.scene = scene;
        this.targetPos = new THREE.Vector3(x, y, z);
        this.currentPos = new THREE.Vector3(x, y, z);

        this.mesh = this.buildMesh();
        this.mesh.position.copy(this.currentPos);
        scene.add(this.mesh);

        console.log(`%cremote player spawned: ${username} (${id.slice(0, 6)}...)`, 'color: cyan');
    }

    private buildMesh(): THREE.Group {
        const g = new THREE.Group();

        // Cyan orb body -- different from local player's purple so you know whos who
        const orbGeo = new THREE.SphereGeometry(0.6, 16, 16);
        const orbMat = new THREE.MeshBasicMaterial({ color: 0x00ccff, transparent: true, opacity: 0.8 });
        const orb = new THREE.Mesh(orbGeo, orbMat);
        orb.scale.set(1, 1.5, 1);
        g.add(orb); // [0]

        // aura ring
        const auraMat = new THREE.MeshBasicMaterial({ color: 0x00aaff, transparent: true, opacity: 0.45 });
        const auraRing = new THREE.Mesh(new THREE.TorusGeometry(1, 0.09, 16, 60), auraMat);
        g.add(auraRing); // [1]

        // eyes
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const eyeGeo = new THREE.SphereGeometry(0.2, 8, 8);
        const le = new THREE.Mesh(eyeGeo, eyeMat);
        le.position.set(-0.3, 0.3, 0.5);
        g.add(le);
        const re = new THREE.Mesh(eyeGeo, eyeMat);
        re.position.set(0.3, 0.3, 0.5);
        g.add(re);

        // stub arms -- just lil cylinders, simpler than local player but gets the point across
        const armMat = new THREE.MeshBasicMaterial({ color: 0x00aadd, transparent: true, opacity: 0.8 });
        const armGeo = new THREE.CylinderGeometry(0.1, 0.09, 0.9, 8);
        const la = new THREE.Mesh(armGeo, armMat);
        la.position.set(-0.8, 0.0, 0);
        la.rotation.z = Math.PI / 4;
        g.add(la);
        const ra = new THREE.Mesh(armGeo, armMat);
        ra.position.set(0.8, 0.0, 0);
        ra.rotation.z = -Math.PI / 4;
        g.add(ra);

        // floating name tag sprite above the head
        g.add(this.makeNameSprite(this.username)); // [6]

        return g;
    }

    private makeNameSprite(name: string): THREE.Sprite {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 56;
        const ctx = canvas.getContext('2d')!;

        // background pill
        ctx.fillStyle = 'rgba(0, 20, 40, 0.75)';
        ctx.beginPath();
        ctx.roundRect(4, 4, 248, 48, 12);
        ctx.fill();

        // username text
        ctx.fillStyle = '#00eeff';
        ctx.font = 'bold 26px Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(name.substring(0, 18), 128, 28);

        const tex = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(2.8, 0.65, 1);
        sprite.position.set(0, 2.6, 0);
        return sprite;
    }

    // called when we receive a position update from the server
    public setTarget(x: number, y: number, z: number, ry: number): void {
        this.targetPos.set(x, y, z);
        this.targetRotY = ry;
    }

    // attach bubble system so remote player chat shows above their head
    public setBubbleCallback(fn: (pos: THREE.Vector3, text: string, headOffset: number) => void): void {
        this.bubbleCb = fn;
    }

    // show chat bubble above this remote player
    public showBubble(text: string): void {
        this.bubbleCb?.(this.currentPos, text, 3.5);
    }

    public update(deltaTime: number): void {
        // lerp toward network target -- 10x speed catches up smooth without rubber banding too hard
        const lerpFactor = Math.min(1, deltaTime * 10);
        this.currentPos.lerp(this.targetPos, lerpFactor);
        this.currentRotY += (this.targetRotY - this.currentRotY) * lerpFactor;

        // floating bob same as local player
        const floatY = Math.sin(Date.now() * 0.002) * 0.18;
        this.mesh.position.set(this.currentPos.x, this.currentPos.y + floatY, this.currentPos.z);
        this.mesh.rotation.y = this.currentRotY;

        // spin the aura
        if (this.mesh.children[1]) {
            this.mesh.children[1].rotation.x += 0.012;
        }
    }

    public getPosition(): THREE.Vector3 {
        return this.currentPos;
    }

    // clean up everything when player disconnects
    public destroy(): void {
        this.scene.remove(this.mesh);
        // dispose all the gpu stuff -- be a good citizen
        this.mesh.traverse((child) => {
            if (child instanceof THREE.Mesh || child instanceof THREE.Points) {
                child.geometry?.dispose();
                if (child instanceof THREE.Mesh) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach(m => m.dispose());
                    } else {
                        child.material?.dispose();
                    }
                }
            }
            if (child instanceof THREE.Sprite) {
                (child.material as THREE.SpriteMaterial).map?.dispose();
                child.material.dispose();
            }
        });
        console.log(`%cremote player removed: ${this.username}`, 'color: orange');
    }
}
