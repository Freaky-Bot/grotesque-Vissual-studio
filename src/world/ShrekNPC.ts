import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

// SHREK NPC -- this was NOT supposed to happen but here we are
// swamp man, layer man, onion man, all stars man
// has a mud attack, will slow u down, GET OUT OF HIS SWAMP

interface MudProj {
    mesh: THREE.Mesh;
    vel: THREE.Vector3;
    pos: THREE.Vector3;
    life: number;
}

export class ShrekNPC extends BaseNPC {
    private mudCooldown: number = 0;
    private playerRef: THREE.Vector3 | null = null;
    private mudProjectiles: MudProj[] = [];
    private onMudHit: ((slowDuration: number) => void) | null = null;

    constructor(position: THREE.Vector3) {
        super(position);
        this.mesh = this.buildShrek();
        this.mesh.position.copy(this.position);
        this.dialogues = [
            "get out of my SWAMP",
            "what are you doing in my swamp!!",
            "SHREK IS LOVE SHREK IS LIFE",
            "better out than in i always say",
            "I AM AN OGRE",
            "ogres are like onions",
            "SOMEBODY ONCE TOLD ME",
            "this is MY swamp and YOU are trespassing",
        ];
        this.bubbleHeadOffset = 5.5;
        this.dialogueTimer = Math.random() * 6;

        // get out of my swamp...and into this GLB model. whatever.
        this.tryLoadGLBModel(7.5);
    }

    private buildShrek(): THREE.Group {
        const g = new THREE.Group();

        const greenMat = new THREE.MeshPhongMaterial({ color: 0x5a8a40 });
        const brownMat = new THREE.MeshPhongMaterial({ color: 0x7a5230 });
        const skinMat = new THREE.MeshPhongMaterial({ color: 0x6da84e }); // slightly lighter for face

        // big chunky tunic body
        const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.5, 1.5), brownMat);
        body.position.y = 2.5;
        g.add(body);

        // massive green arms -- he's built different
        const lArm = new THREE.Mesh(new THREE.BoxGeometry(0.75, 2.1, 0.75), greenMat);
        lArm.position.set(-1.6, 2.5, 0);
        g.add(lArm);
        const rArm = new THREE.Mesh(new THREE.BoxGeometry(0.75, 2.1, 0.75), greenMat);
        rArm.position.set(1.6, 2.5, 0);
        g.add(rArm);

        // stubby little legs
        const lLeg = new THREE.Mesh(new THREE.BoxGeometry(0.85, 1.6, 0.85), brownMat);
        lLeg.position.set(-0.6, 0.8, 0);
        g.add(lLeg);
        const rLeg = new THREE.Mesh(new THREE.BoxGeometry(0.85, 1.6, 0.85), brownMat);
        rLeg.position.set(0.6, 0.8, 0);
        g.add(rLeg);

        // big round head -- ogre sized
        const head = new THREE.Mesh(new THREE.SphereGeometry(1.1, 12, 8), skinMat);
        head.position.y = 5.0;
        g.add(head);

        // iconic ogre ears (big round stubs)
        const earGeo = new THREE.SphereGeometry(0.45, 8, 6);
        const lEar = new THREE.Mesh(earGeo, skinMat);
        lEar.position.set(-1.1, 5.2, 0);
        g.add(lEar);
        const rEar = new THREE.Mesh(earGeo, skinMat);
        rEar.position.set(1.1, 5.2, 0);
        g.add(rEar);

        // eyebrows -- he always looks angry idk
        const browMat = new THREE.MeshPhongMaterial({ color: 0x3a2a00 });
        const lBrow = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.12, 0.2), browMat);
        lBrow.position.set(-0.37, 5.3, 0.9);
        lBrow.rotation.z = 0.3;
        g.add(lBrow);
        const rBrow = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.12, 0.2), browMat);
        rBrow.position.set(0.37, 5.3, 0.9);
        rBrow.rotation.z = -0.3;
        g.add(rBrow);

        // beady eyes
        const eyeGeo = new THREE.SphereGeometry(0.16, 6, 4);
        const lEye = new THREE.Mesh(eyeGeo, browMat);
        lEye.position.set(-0.38, 5.05, 0.92);
        g.add(lEye);
        const rEye = new THREE.Mesh(eyeGeo, browMat);
        rEye.position.set(0.38, 5.05, 0.92);
        g.add(rEye);

        // ONION STACK on top of head -- iconic and essential
        const whiteMat = new THREE.MeshPhongMaterial({ color: 0xeeeecc });
        const onion1 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), whiteMat);
        onion1.position.set(0, 6.3, 0);
        g.add(onion1);
        const onion2 = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 6), whiteMat);
        onion2.position.set(0, 6.95, 0);
        g.add(onion2);
        const onion3 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), whiteMat);
        onion3.position.set(0, 7.45, 0);
        g.add(onion3);

        return g;
    }

    public setPlayerRef(pos: THREE.Vector3): void {
        this.playerRef = pos;
    }

    // wire this in from main so mud slows the player -- yolo
    public setMudHitCallback(fn: (slowDuration: number) => void): void {
        this.onMudHit = fn;
    }

    public update(deltaTime: number): void {
        this.tickGLBMixer(deltaTime);
        // slow walk. he's big. he's got layers
        this.randomWalk(deltaTime, 1.4);

        this.dialogueTimer -= deltaTime;
        if (this.dialogueTimer <= 0) {
            this.speak();
            this.dialogueTimer = 5 + Math.random() * 9;
        }

        // mud attack countdown
        this.mudCooldown -= deltaTime;

        // throw mud at player if close enough and not on cooldown
        if (this.playerRef && this.mudCooldown <= 0) {
            const dist = this.position.distanceTo(this.playerRef);
            if (dist < 20) {
                this.throwMud();
                this.mudCooldown = 7 + Math.random() * 7;
            }
        }

        // move mud blobs
        for (const proj of this.mudProjectiles) {
            proj.life -= deltaTime;
            // arc: gravity pulls it down
            proj.vel.y -= 15 * deltaTime;
            proj.pos.addScaledVector(proj.vel, deltaTime);
            proj.mesh.position.copy(proj.pos);
            proj.mesh.rotation.x += deltaTime * 4;
            proj.mesh.rotation.z += deltaTime * 2;

            // Check if we hit the player -- splat!
            if (this.playerRef && proj.pos.distanceTo(this.playerRef) < 2.8) {
                this.onMudHit?.(4); // 4 second slow :(
                proj.life = -1;
                console.log('%c💩 SHREK MUD SPLAT!! get out of his swamp!!', 'color: olive; font-weight: bold');
            }
        }

        // clean up splattered mud
        for (let i = this.mudProjectiles.length - 1; i >= 0; i--) {
            if (this.mudProjectiles[i].life <= 0 || this.mudProjectiles[i].pos.y < -5) {
                this.mudProjectiles[i].mesh.parent?.remove(this.mudProjectiles[i].mesh);
                this.mudProjectiles.splice(i, 1);
            }
        }
    }

    private throwMud(): void {
        if (!this.playerRef) return;
        const mudMat = new THREE.MeshPhongMaterial({ color: 0x5d3a1a });
        const mud = new THREE.Mesh(new THREE.SphereGeometry(0.42, 6, 4), mudMat);

        const startPos = this.position.clone();
        startPos.y += 4.5; // throw from hand height
        mud.position.copy(startPos);

        // lob it toward the player with a little arc
        const dir = this.playerRef.clone().sub(startPos).normalize();
        dir.y += 0.4;
        dir.normalize().multiplyScalar(13);

        this.mudProjectiles.push({
            mesh: mud,
            vel: dir,
            pos: startPos.clone(),
            life: 3.5,
        });

        this.mesh.parent?.add(mud);
        console.log('%c💩 SHREK YEETS MUD!! GETOUUUUT', 'color: olive');
    }

    public die(): void {
        // clean up mud on death, otherwise floating mud blobs forever
        for (const proj of this.mudProjectiles) {
            proj.mesh.parent?.remove(proj.mesh);
        }
        this.mudProjectiles = [];
        super.die();
    }

    public getType(): string {
        return 'shrek';
    }
}
