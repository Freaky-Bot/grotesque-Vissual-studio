import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

// BUFF CAT -- absolutely jacked tabby, does not skip arm day
// will zoom across the map at ungodly speeds if you let it, also does pushups somehow

export class BuffCatNPC extends BaseNPC {
    private leftArmGroup!: THREE.Group;
    private rightArmGroup!: THREE.Group;
    private armSwing: number = 0;
    private isDoingZoomies: boolean = false;
    private zoomieTimer: number = 0;
    private zoomiesCooldown: number = 5 + Math.random() * 8;
    private zoomiesDir: THREE.Vector3 = new THREE.Vector3(1, 0, 0);

    constructor(position: THREE.Vector3) {
        super(position);
        this.mesh = this.buildBuffCat();
        this.mesh.position.copy(this.position);
        this.dialogues = [
            "DO YOU EVEN LIFT",
            "ZOOMIES ACTIVATED AAAAAA",
            "MY GAINS ARE LEGENDARY",
            "300 REPS BEFORE BREAKFAST",
            "THE PUMP... IS REAL",
            "*does pushups while meowing*",
            "i am built from pure chaos and protein",
            "FEAR MY MUSCLES MEOW",
        ];
        this.bubbleHeadOffset = 4.5;
        this.dialogueTimer = Math.random() * 5;

        // THE PUMP IS REAL...AND SO IS THIS GLB MODEL. loading now.
        this.tryLoadGLBModel(5.5);
    }

    private buildBuffCat(): THREE.Group {
        const g = new THREE.Group();

        const orangeMat = new THREE.MeshPhongMaterial({ color: 0xe87428 });
        const darkOrangeMat = new THREE.MeshPhongMaterial({ color: 0x9a4a10 });
        const whiteMat = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const pinkMat = new THREE.MeshPhongMaterial({ color: 0xff88aa });

        // ABSOLUTE UNIT of a torso -- huge beefy box
        const body = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.1, 1.7), orangeMat);
        body.position.y = 2.1;
        g.add(body);

        // white belly patch -- even buff cats have tummies
        const belly = new THREE.Mesh(new THREE.SphereGeometry(0.72, 8, 6), whiteMat);
        belly.scale.set(1, 0.65, 0.55);
        belly.position.set(0, 1.9, 0.75);
        g.add(belly);

        // MASSIVE arms with huge bicep cylinders
        this.leftArmGroup = new THREE.Group();
        this.leftArmGroup.position.set(-1.85, 2.6, 0);
        const lUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.42, 1.4, 8), orangeMat);
        lUpperArm.position.y = -0.7;
        this.leftArmGroup.add(lUpperArm);
        const lFist = new THREE.Mesh(new THREE.SphereGeometry(0.48, 8, 6), orangeMat);
        lFist.position.y = -1.55;
        this.leftArmGroup.add(lFist);
        g.add(this.leftArmGroup);

        this.rightArmGroup = new THREE.Group();
        this.rightArmGroup.position.set(1.85, 2.6, 0);
        const rUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.42, 1.4, 8), orangeMat);
        rUpperArm.position.y = -0.7;
        this.rightArmGroup.add(rUpperArm);
        const rFist = new THREE.Mesh(new THREE.SphereGeometry(0.48, 8, 6), orangeMat);
        rFist.position.y = -1.55;
        this.rightArmGroup.add(rFist);
        g.add(this.rightArmGroup);

        // stubby legs -- comically small vs the body
        const lLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.34, 1.5, 8), orangeMat);
        lLeg.position.set(-0.62, 0.75, 0);
        g.add(lLeg);
        const rLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.34, 1.5, 8), orangeMat);
        rLeg.position.set(0.62, 0.75, 0);
        g.add(rLeg);

        // head (slightly too small for the body, which is correct)
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.9, 10, 8), orangeMat);
        head.position.y = 4.0;
        g.add(head);

        // tabby stripes on head -- because details matter even for jacked cats
        for (let i = 0; i < 3; i++) {
            const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.15, 0.9), darkOrangeMat);
            stripe.position.set(-0.33 + i * 0.33, 4.35, 0.28);
            g.add(stripe);
        }

        // cat ears -- pointy
        const earGeo = new THREE.ConeGeometry(0.3, 0.52, 4);
        const lEar = new THREE.Mesh(earGeo, orangeMat);
        lEar.position.set(-0.55, 4.78, 0);
        g.add(lEar);
        const rEar = new THREE.Mesh(earGeo, orangeMat);
        rEar.position.set(0.55, 4.78, 0);
        g.add(rEar);

        // inner ear pink bits
        const liEar = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.3, 4), pinkMat);
        liEar.position.set(-0.55, 4.74, 0.04);
        g.add(liEar);
        const riEar = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.3, 4), pinkMat);
        riEar.position.set(0.55, 4.74, 0.04);
        g.add(riEar);

        return g;
    }

    public update(deltaTime: number): void {
        this.tickGLBMixer(deltaTime);
        this.armSwing += deltaTime * 3;

        if (this.isDoingZoomies) {
            this.zoomieTimer -= deltaTime;

            // ZOOM at ludicrous speed
            this.applyGravity(deltaTime);
            this.position.addScaledVector(this.zoomiesDir, 24 * deltaTime);
            this.position.x = Math.max(-200, Math.min(200, this.position.x));
            this.position.z = Math.max(-200, Math.min(200, this.position.z));
            this.mesh.position.copy(this.position);

            // spin wildly because zoomies
            this.mesh.rotation.y += deltaTime * 7;

            // arms flapping like crazy during zoomies -- only if procedural mesh is still active
            if (!this.glbLoaded) {
                this.leftArmGroup.rotation.x = Math.sin(this.armSwing * 6) * 1.5;
                this.rightArmGroup.rotation.x = -Math.sin(this.armSwing * 6) * 1.5;
            }

            if (this.zoomieTimer <= 0) {
                this.isDoingZoomies = false;
                this.zoomiesCooldown = 8 + Math.random() * 12;
                this.speak(); // announce the end of zoomies
                console.log('%c🐱💨 BUFF CAT ZOOMIES CONCLUDED. WORLD SHOOK.', 'color: orange; font-weight: bold');
            }

        } else {
            this.randomWalk(deltaTime, 2.5);

            // normal arm sway while walking -- only if procedural mesh is still active
            if (!this.glbLoaded) {
                this.leftArmGroup.rotation.x = Math.sin(this.armSwing) * 0.45;
                this.rightArmGroup.rotation.x = -Math.sin(this.armSwing) * 0.45;
            }

            this.zoomiesCooldown -= deltaTime;
            if (this.zoomiesCooldown <= 0) {
                this.activateZoomies();
            }
        }

        this.dialogueTimer -= deltaTime;
        if (this.dialogueTimer <= 0) {
            this.speak();
            this.dialogueTimer = 4 + Math.random() * 7;
        }
    }

    private activateZoomies(): void {
        this.isDoingZoomies = true;
        this.zoomieTimer = 2.2 + Math.random() * 1.8;
        this.zoomiesDir = new THREE.Vector3(
            Math.random() * 2 - 1,
            0,
            Math.random() * 2 - 1,
        ).normalize();
        this.speak();
        console.log('%c🐱💪💨 BUFF CAT ZOOMIES ACTIVATED!!! EVERYONE MOVE', 'color: orange; font-size: 14px; font-weight: bold');
    }

    public getType(): string {
        return 'buffcat';
    }
}
