import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
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
        // REBUILT FROM SCRATCH -- absolute unit remaster
        // new design: arms are BIGGER than the body. comically swole. tiny head, tiny legs.
        // the muscle definition is not anatomically correct. this cat does not care.
        const g = new THREE.Group();

        const orangeMat = new THREE.MeshPhongMaterial({ color: 0xe06820, emissive: 0x3a1808, emissiveIntensity: 0.2 });
        const darkMat   = new THREE.MeshPhongMaterial({ color: 0x9a3c08, emissive: 0x1a0800 });
        const whiteMat  = new THREE.MeshPhongMaterial({ color: 0xfefcf8 });
        const pinkMat   = new THREE.MeshPhongMaterial({ color: 0xff88aa });
        const eyeMat    = new THREE.MeshBasicMaterial({ color: 0x113366 });
        const pupilMat  = new THREE.MeshBasicMaterial({ color: 0x000000 });

        // LEGS: comically skinny relative to body (that's the bit)
        for (const side of [-1, 1]) {
            const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.32, 1.1, 16), orangeMat);
            thigh.position.set(side * 0.55, 0.55, 0); thigh.castShadow = true; g.add(thigh);
            const shin  = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.2, 0.9, 16), orangeMat);
            shin.position.set(side * 0.55, -0.38, 0); shin.castShadow = true; g.add(shin);
            const paw   = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.28, 0.68), orangeMat);
            paw.position.set(side * 0.55, -0.98, 0.08); g.add(paw);
        }

        // TORSO: LatheGeometry huge barrel chest -- V-taper profile
        // widest at shoulders, pinched waist, flared chest. the good stuff.
        const torsoPoints = [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0.58, 0.1),
            new THREE.Vector2(0.95, 0.5),
            new THREE.Vector2(1.12, 1.0),   // waist
            new THREE.Vector2(1.35, 1.65),  // chest
            new THREE.Vector2(1.58, 2.15),  // peak shoulder width
            new THREE.Vector2(1.55, 2.35),
            new THREE.Vector2(1.4, 2.42),
        ];
        const torso = new THREE.Mesh(new THREE.LatheGeometry(torsoPoints, 24), orangeMat);
        torso.position.y = 1.05; torso.castShadow = true; g.add(torso);

        // white belly patch -- abs are suggested via geometry separation
        const belly = new THREE.Mesh(new THREE.SphereGeometry(0.78, 12, 10), whiteMat);
        belly.scale.set(1, 0.7, 0.62); belly.position.set(0, 2.0, 0.82); g.add(belly);

        // CSG abs definition on the belly -- THREE boxes subtracted from a sphere face = abs
        // (just overlay dark stripes -- actual CSG on organic meshes is finicky)
        for (let i = 0; i < 3; i++) {
            const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.85), darkMat);
            stripe.position.set(-0.28 + i * 0.28, 1.65 + i * 0.28, 0.82); g.add(stripe);
        }

        // ARMS: MASSIVE TubeGeometry arms -- bigger than the body, as god intended
        // each arm is a multi-segment CatmullRomCurve3. bicep bulge achieved via wider middle.
        this.leftArmGroup = new THREE.Group();
        this.leftArmGroup.position.set(-2.0, 3.2, 0);
        const lUpperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.82, 0.62, 1.55, 16), orangeMat);
        lUpperArm.position.y = -0.78; lUpperArm.castShadow = true; this.leftArmGroup.add(lUpperArm);
        // bicep bump
        const lBicep = new THREE.Mesh(new THREE.SphereGeometry(0.88, 16, 12), orangeMat);
        lBicep.position.set(-0.08, -0.6, 0.25); lBicep.scale.set(1, 0.82, 0.88); this.leftArmGroup.add(lBicep);
        const lFore = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.42, 1.2, 16), orangeMat);
        lFore.position.y = -1.85; this.leftArmGroup.add(lFore);
        const lFist = new THREE.Mesh(new THREE.SphereGeometry(0.52, 16, 12), orangeMat);
        lFist.position.y = -2.62; this.leftArmGroup.add(lFist);
        g.add(this.leftArmGroup);

        this.rightArmGroup = new THREE.Group();
        this.rightArmGroup.position.set(2.0, 3.2, 0);
        const rUpperArm = lUpperArm.clone(); rUpperArm.position.y = -0.78; this.rightArmGroup.add(rUpperArm);
        const rBicep = lBicep.clone(); rBicep.position.set(0.08, -0.6, 0.25); this.rightArmGroup.add(rBicep);
        const rFore = lFore.clone(); rFore.position.y = -1.85; this.rightArmGroup.add(rFore);
        const rFist = lFist.clone(); rFist.position.y = -2.62; this.rightArmGroup.add(rFist);
        g.add(this.rightArmGroup);

        // HEAD: slightly too small for the body (this is intentional and correct)
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.92, 12, 10), orangeMat);
        head.position.y = 4.55; head.castShadow = true; g.add(head);

        // tabby stripes on head
        for (let i = 0; i < 3; i++) {
            const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.18, 0.95), darkMat);
            stripe.position.set(-0.32 + i * 0.32, 4.92, 0.3); g.add(stripe);
        }

        // EARS: ExtrudeGeometry pointy triangle ears
        const earShape = new THREE.Shape();
        earShape.moveTo(-0.32, 0); earShape.lineTo(-0.08, 0.62);
        earShape.lineTo(0.08, 0.62); earShape.lineTo(0.32, 0); earShape.closePath();
        const earGeo = new THREE.ExtrudeGeometry(earShape, { depth: 0.14, bevelEnabled: true, bevelSize: 0.04, bevelSegments: 2 });
        const lEar = new THREE.Mesh(earGeo, orangeMat);
        lEar.position.set(-0.72, 4.9, -0.07); lEar.rotation.z = -0.12; g.add(lEar);
        const rEar = new THREE.Mesh(earGeo, orangeMat);
        rEar.position.set(0.4, 4.9, -0.07); rEar.rotation.z = 0.12; g.add(rEar);

        // Inner ear
        for (const [x, y] of [[-0.56, 5.18], [0.56, 5.18]] as [number,number][]) {
            const ie = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.32, 4), pinkMat);
            ie.position.set(x, y, 0.04); g.add(ie);
        }

        // eyes -- determined forward stare
        for (const [ex, ez] of [[-0.32, 0.85], [0.32, 0.85]] as [number,number][]) {
            const w = new THREE.Mesh(new THREE.SphereGeometry(0.17, 14, 12), whiteMat);
            w.position.set(ex, 4.6, ez); g.add(w);
            const iris = new THREE.Mesh(new THREE.SphereGeometry(0.11, 7, 7), eyeMat);
            iris.position.set(ex, 4.6, ez + 0.06); g.add(iris);
            const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 6), pupilMat);
            pupil.position.set(ex, 4.6, ez + 0.12); g.add(pupil);
        }

        // nose -- wide flat button nose
        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), pinkMat);
        nose.scale.set(1.5, 0.7, 1.0); nose.position.set(0, 4.42, 0.89); g.add(nose);

        // TAIL: TubeGeometry CatmullRomCurve3 swooping tail
        const tailCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 1.85, -1.05),
            new THREE.Vector3(-0.55, 2.25, -1.55),
            new THREE.Vector3(-1.15, 2.85, -1.35),
            new THREE.Vector3(-1.45, 3.45, -0.82),
            new THREE.Vector3(-1.05, 3.85, -0.32),
        ]);
        g.add(new THREE.Mesh(new THREE.TubeGeometry(tailCurve, 12, 0.16, 8), orangeMat));
        const tailTip = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), whiteMat);
        tailTip.position.set(-1.05, 3.85, -0.32); g.add(tailTip);

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
            // no walls can stop the ZOOMIES. nothing can. its physics. its nature. purrr.
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
                console.log('%cðŸ±ðŸ’¨ BUFF CAT ZOOMIES CONCLUDED. WORLD SHOOK.', 'color: orange; font-weight: bold');
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
        console.log('%cðŸ±ðŸ’ªðŸ’¨ BUFF CAT ZOOMIES ACTIVATED!!! EVERYONE MOVE', 'color: orange; font-size: 14px; font-weight: bold');
    }

    public getType(): string {
        return 'buffcat';
    }
}
