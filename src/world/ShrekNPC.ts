import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
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
        // REBUILT FROM SCRATCH. real ogre proportions. proper bulk. incredible.
        // massive pear-shaped body, thick tree-trunk legs, proper ogre ears, onion stack
        // shrek deserved better. now he has it. this is his swamp.
        const g = new THREE.Group();

        const swampMat = new THREE.MeshPhongMaterial({ color: 0x4a7835, emissive: 0x0a1505, emissiveIntensity: 0.2 });
        const skinMat  = new THREE.MeshPhongMaterial({ color: 0x5c9443, emissive: 0x0c1a06, emissiveIntensity: 0.15 });
        const tunicMat = new THREE.MeshPhongMaterial({ color: 0x7a5c2a, emissive: 0x1a1005, emissiveIntensity: 0.1 });
        const beltMat  = new THREE.MeshPhongMaterial({ color: 0x3a2010 });
        const eyeMat   = new THREE.MeshBasicMaterial({ color: 0x2a1800 });
        const whiteMat = new THREE.MeshBasicMaterial({ color: 0xded8c8 });
        const toothMat = new THREE.MeshBasicMaterial({ color: 0xddd0b0 });

        // LEGS: thick ogre trunk-legs, feet with stubby toes
        for (const side of [-1, 1]) {
            const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.5, 1.65, 16), swampMat);
            thigh.position.set(side * 0.72, 0.82, 0.05);
            thigh.castShadow = true; g.add(thigh);

            const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.38, 1.35, 16), swampMat);
            shin.position.set(side * 0.7, -0.72, 0.05);
            shin.castShadow = true; g.add(shin);

            const foot = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.44, 1.08), swampMat);
            foot.position.set(side * 0.7, -1.58, 0.24);
            foot.castShadow = true; g.add(foot);

            for (let t = -1; t <= 1; t++) {
                const toe = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 12), swampMat);
                toe.position.set(side * 0.7 + t * 0.22, -1.72, 0.68);
                g.add(toe);
            }
        }

        // BODY: LatheGeometry Shrek pear silhouette -- wide hips, massive gut, narrower at shoulders
        const bodyPoints = [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0.92, 0.1),
            new THREE.Vector2(1.38, 0.58),
            new THREE.Vector2(1.48, 1.12),
            new THREE.Vector2(1.38, 1.72),
            new THREE.Vector2(1.18, 2.35),
            new THREE.Vector2(0.98, 2.78),
            new THREE.Vector2(0.78, 2.82),
        ];
        const body = new THREE.Mesh(new THREE.LatheGeometry(bodyPoints, 24), tunicMat);
        body.position.y = 1.56;
        body.castShadow = true; g.add(body);

        // gut hemisphere for extra belly prominence
        const gut = new THREE.Mesh(new THREE.SphereGeometry(1.22, 12, 10), tunicMat);
        gut.scale.set(1.12, 0.88, 0.82);
        gut.position.set(0, 2.78, 0.58); g.add(gut);

        // belt at waist
        const beltRing = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.18, 12, 24), beltMat);
        beltRing.rotation.x = Math.PI / 2; beltRing.position.y = 2.22; g.add(beltRing);

        // ARMS: TubeGeometry thick green arms drooping from shoulders
        const lArmCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-1.15, 4.88, 0),
            new THREE.Vector3(-1.68, 3.9, 0.38),
            new THREE.Vector3(-2.05, 2.82, 0.58),
            new THREE.Vector3(-1.9, 1.82, 0.42),
        ]);
        const rArmCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(1.15, 4.88, 0),
            new THREE.Vector3(1.68, 3.9, 0.38),
            new THREE.Vector3(2.05, 2.82, 0.58),
            new THREE.Vector3(1.9, 1.82, 0.42),
        ]);
        g.add(new THREE.Mesh(new THREE.TubeGeometry(lArmCurve, 12, 0.44, 9), swampMat));
        g.add(new THREE.Mesh(new THREE.TubeGeometry(rArmCurve, 12, 0.44, 9), swampMat));
        for (const [x, y, z] of [[-1.9, 1.58, 0.38], [1.9, 1.58, 0.38]] as [number,number,number][]) {
            const fist = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 10), swampMat);
            fist.scale.set(1.12, 0.88, 1.0); fist.position.set(x, y, z); g.add(fist);
        }

        // HEAD: CSG carved sphere with eye socket depressions
        const headMesh = new THREE.Mesh(new THREE.SphereGeometry(1.28, 18, 14), skinMat);
        headMesh.position.set(0, 6.12, 0);
        headMesh.scale.set(1.06, 0.97, 1.0);
        headMesh.updateMatrix();
        let headResult: THREE.Mesh;
        try {
            const lSock = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), skinMat);
            lSock.position.set(-0.44, 6.2, 1.04); lSock.updateMatrix();
            const rSock = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), skinMat);
            rSock.position.set(0.44, 6.2, 1.04); rSock.updateMatrix();
            headResult = CSG.toMesh(
                CSG.fromMesh(headMesh).subtract(CSG.fromMesh(lSock)).subtract(CSG.fromMesh(rSock)),
                headMesh.matrix, skinMat
            );
            headResult.castShadow = true;
        } catch (_e) { headResult = headMesh; }
        g.add(headResult);

        // Forehead wrinkles
        const crease = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.062, 10, 18, Math.PI * 0.7), new THREE.MeshPhongMaterial({ color: 0x3d6428 }));
        crease.position.set(0, 6.78, 0.74); crease.rotation.x = Math.PI / 2.5; g.add(crease);

        // Eyebrows -- very angry V shape
        for (const [sx, rz] of [[-0.44, 0.48], [0.44, -0.48]] as [number, number][]) {
            const brow = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.15, 0.26), beltMat);
            brow.position.set(sx, 6.5, 1.07); brow.rotation.z = rz; g.add(brow);
        }

        // Eyes -- beady
        for (const [ex, ez] of [[-0.44, 1.07], [0.44, 1.07]] as [number,number][]) {
            const w = new THREE.Mesh(new THREE.SphereGeometry(0.19, 14, 12), whiteMat);
            w.position.set(ex, 6.22, ez); g.add(w);
            const iris = new THREE.Mesh(new THREE.SphereGeometry(0.13, 7, 7), eyeMat);
            iris.position.set(ex, 6.22, ez + 0.08); g.add(iris);
        }

        // NOSE: massive bulbous ogre nose with nostril holes
        const noseBulb = new THREE.Mesh(new THREE.SphereGeometry(0.54, 12, 10), skinMat);
        noseBulb.scale.set(1, 0.78, 0.92); noseBulb.position.set(0, 5.9, 1.2); g.add(noseBulb);
        for (const nx of [-0.24, 0.24]) {
            const nostril = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.1, 16), new THREE.MeshBasicMaterial({ color: 0x2a1a02 }));
            nostril.position.set(nx, 5.77, 1.4); nostril.rotation.x = Math.PI / 2; g.add(nostril);
        }

        // MOUTH: wide smirk with teeth
        const smirk = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.07, 10, 16, Math.PI * 0.8), beltMat);
        smirk.position.set(-0.06, 5.46, 1.1); smirk.rotation.x = Math.PI / 1.8; g.add(smirk);
        for (const [tx] of [[-0.24], [0.0], [0.24]] as [number[]][]) {
            const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.26, 0.12), toothMat);
            tooth.position.set(tx, 5.35, 1.16); g.add(tooth);
        }

        // EARS: ExtrudeGeometry ogre ear flaps
        const earShape = new THREE.Shape();
        earShape.moveTo(0, 0);
        earShape.quadraticCurveTo(-0.3, 0.12, -0.48, 0.5);
        earShape.quadraticCurveTo(-0.44, 0.98, -0.22, 1.15);
        earShape.quadraticCurveTo(0, 1.24, 0.22, 1.15);
        earShape.quadraticCurveTo(0.44, 0.98, 0.48, 0.5);
        earShape.quadraticCurveTo(0.3, 0.12, 0, 0);
        const earGeo = new THREE.ExtrudeGeometry(earShape, { depth: 0.3, bevelEnabled: true, bevelSize: 0.06, bevelSegments: 3 });
        const lEar = new THREE.Mesh(earGeo, skinMat);
        lEar.position.set(-1.6, 5.72, -0.16); lEar.rotation.set(0.1, 0.1, -0.22); g.add(lEar);
        const rEar = new THREE.Mesh(earGeo, skinMat);
        rEar.position.set(1.02, 5.72, -0.16); rEar.rotation.set(0.1, -0.1, 0.22); g.add(rEar);

        // ONIONS: LatheGeometry proper onion profiles stacked on top of head
        // spheres look like balls. lathe gives them the proper onion bulge profile.
        const onionMat = new THREE.MeshPhongMaterial({ color: 0xe8ddb2, emissive: 0x221600, emissiveIntensity: 0.1 });
        const onionSkinMat = new THREE.MeshPhongMaterial({ color: 0xc8b888, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
        const makeOnion = (rMax: number, h: number): THREE.LatheGeometry => {
            return new THREE.LatheGeometry([
                new THREE.Vector2(0, 0),          new THREE.Vector2(rMax * 0.3, h * 0.08),
                new THREE.Vector2(rMax * 0.72, h * 0.22), new THREE.Vector2(rMax, h * 0.48),
                new THREE.Vector2(rMax * 0.88, h * 0.72), new THREE.Vector2(rMax * 0.55, h * 0.92),
                new THREE.Vector2(rMax * 0.25, h * 0.98), new THREE.Vector2(0, h),
            ], 10);
        };
        const o1 = new THREE.Mesh(makeOnion(0.6, 1.18), onionMat);
        o1.position.set(0, 7.18, 0); g.add(o1);
        const o1skin = new THREE.Mesh(makeOnion(0.64, 1.22), onionSkinMat);
        o1skin.position.set(0, 7.15, 0); g.add(o1skin);
        const o2 = new THREE.Mesh(makeOnion(0.44, 0.9), onionMat);
        o2.position.set(0, 8.22, 0); g.add(o2);
        const o3 = new THREE.Mesh(makeOnion(0.28, 0.62), onionMat);
        o3.position.set(0, 8.98, 0); g.add(o3);
        // root stubs
        for (const oy of [7.15, 8.2, 8.96]) {
            for (let r = 0; r < 4; r++) {
                const ang = (r / 4) * Math.PI * 2;
                const root = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.008, 0.2, 4), beltMat);
                root.position.set(Math.cos(ang) * 0.1, oy, Math.sin(ang) * 0.1);
                root.rotation.set(Math.sin(ang) * 0.8, 0, Math.cos(ang) * 0.8);
                g.add(root);
            }
        }

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
                console.log('%cðŸ’© SHREK MUD SPLAT!! get out of his swamp!!', 'color: olive; font-weight: bold');
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
        console.log('%cðŸ’© SHREK YEETS MUD!! GETOUUUUT', 'color: olive');
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
