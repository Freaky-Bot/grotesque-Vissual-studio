import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
import { BaseNPC } from './BaseNPC';

// VOID CAT -- all black cat, leaves trails of darkness, extremely nihilistic vibes
// the darkness follows it, the void calls to it, it has seen things
// TODO: make it even more void-like somehow

interface TrailOrb {
    mesh: THREE.Mesh;
    life: number;
    maxLife: number;
}

export class VoidCatNPC extends BaseNPC {
    private trails: TrailOrb[] = [];
    private trailTimer: number = 0;
    private auraMesh!: THREE.Mesh;
    private eyeGlowTimer: number = 0;

    constructor(position: THREE.Vector3) {
        super(position);
        this.mesh = this.buildVoidCat();
        this.mesh.position.copy(this.position);
        this.dialogues = [
            "the void stares back",
            "existence is meaningless",
            "i am the darkness between stars",
            "light has no dominion here",
            "nothing matters... and thats ok i guess",
            "*becomes one with the abyss*",
            "the void inside me is bigger than the void outside",
            "darkness? comfortable. light? rude.",
            "we are all temporary smudges on an infinite canvas",
        ];
        this.bubbleHeadOffset = 4;
        this.dialogueTimer = Math.random() * 8;

        // the void model. dark. fitting. nobody asked but here it is.
        this.tryLoadGLBModel(4.5);
    }

    private buildVoidCat(): THREE.Group {
        // REBUILT FROM SCRATCH -- phantom void kitten, dissolving into darkness
        // new: LatheGeometry body, TorusGeometry ring eyes, TubeGeometry tendril legs, CSG void head
        // the void demanded a redesign. the void always wins. meow.
        const g = new THREE.Group();

        const voidMat = new THREE.MeshPhongMaterial({ color: 0x020206, emissive: 0x040010, emissiveIntensity: 0.5 });
        const voidGlowMat = new THREE.MeshPhongMaterial({ color: 0x180030, emissive: 0x220044, emissiveIntensity: 1.2, transparent: true, opacity: 0.8 });
        const eyeRingMat = new THREE.MeshBasicMaterial({ color: 0x7700cc });
        const eyeDiscMat = new THREE.MeshBasicMaterial({ color: 0xaa00ff });
        const tailTipMat = new THREE.MeshBasicMaterial({ color: 0x8800ff });

        // BODY: LatheGeometry phantom cat silhouette -- slim waist, hunched chest
        // not a sphere. not a box. a VOID-SHAPED VOID.
        const bodyPoints = [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0.42, 0.1),
            new THREE.Vector2(0.78, 0.5),
            new THREE.Vector2(0.88, 1.05),
            new THREE.Vector2(0.82, 1.65),
            new THREE.Vector2(0.62, 2.15),
            new THREE.Vector2(0.38, 2.5),
            new THREE.Vector2(0.08, 2.6),
        ];
        const body = new THREE.Mesh(new THREE.LatheGeometry(bodyPoints, 12), voidMat);
        body.position.y = 0.85;
        body.castShadow = true;
        g.add(body);

        // inner void core: BackSide sphere creating that "hollow inside" look
        const innerCore = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 8, 8),
            new THREE.MeshPhongMaterial({ color: 0x440066, emissive: 0x330055, emissiveIntensity: 2.0, transparent: true, opacity: 0.45, side: THREE.BackSide })
        );
        innerCore.position.y = 1.8;
        g.add(innerCore);

        // NECK: short connector keeping head attached to body
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.3, 0.35, 7), voidMat);
        neck.position.y = 3.22;
        g.add(neck);

        // HEAD: CSG sphere with void-hole eye sockets carved in
        // sphere eyes are TOO ALIVE. void eyes should be EMPTY RINGS. fix this.
        const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.64, 14, 12), voidMat);
        headMesh.position.set(0, 3.72, 0);
        headMesh.scale.set(1.04, 0.96, 1.06);
        headMesh.updateMatrix();
        let head: THREE.Mesh;
        try {
            const lHole = new THREE.Mesh(new THREE.SphereGeometry(0.14, 7, 6), voidMat);
            lHole.position.set(-0.24, 3.78, 0.58);
            lHole.updateMatrix();
            const rHole = new THREE.Mesh(new THREE.SphereGeometry(0.14, 7, 6), voidMat);
            rHole.position.set(0.24, 3.78, 0.58);
            rHole.updateMatrix();
            const csgHead = CSG.fromMesh(headMesh);
            head = CSG.toMesh(
                csgHead.subtract(CSG.fromMesh(lHole)).subtract(CSG.fromMesh(rHole)),
                headMesh.matrix, voidMat
            );
            head.castShadow = true;
        } catch (_e) { head = headMesh; }
        g.add(head);

        // EYES: TorusGeometry rings -- hollow void circles
        // rings feel more void-like than filled spheres. this is correct lore.
        for (const [ex, ey, ez] of [[-0.24, 3.8, 0.58], [0.24, 3.8, 0.58]] as [number,number,number][]) {
            const eyeRing = new THREE.Mesh(new THREE.TorusGeometry(0.088, 0.026, 6, 16), eyeRingMat);
            eyeRing.position.set(ex, ey, ez);
            eyeRing.rotation.x = 0.2;
            g.add(eyeRing);
            const eyeDisc = new THREE.Mesh(new THREE.CircleGeometry(0.064, 10), eyeDiscMat);
            eyeDisc.position.set(ex, ey, ez + 0.01);
            eyeDisc.rotation.x = 0.2;
            g.add(eyeDisc);
        }

        // MUZZLE: small forward protrusion
        const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), voidMat);
        muzzle.scale.set(1, 0.65, 0.72);
        muzzle.position.set(0, 3.6, 0.55);
        g.add(muzzle);

        // EARS: ExtrudeGeometry jagged angular void-shard shapes
        const earShape = new THREE.Shape();
        earShape.moveTo(-0.18, 0);
        earShape.lineTo(-0.26, 0.1);
        earShape.lineTo(-0.05, 0.72);
        earShape.lineTo(0.06, 0.74);
        earShape.lineTo(0.28, 0.1);
        earShape.lineTo(0.18, 0);
        earShape.closePath();
        const earGeo = new THREE.ExtrudeGeometry(earShape, { depth: 0.08, bevelEnabled: true, bevelSize: 0.02, bevelSegments: 1 });
        const lEar = new THREE.Mesh(earGeo, voidMat);
        lEar.position.set(-0.58, 4.06, -0.04);
        lEar.rotation.z = 0.14;
        g.add(lEar);
        const rEar = new THREE.Mesh(earGeo, voidMat);
        rEar.position.set(0.22, 4.06, -0.04);
        rEar.rotation.z = -0.14;
        g.add(rEar);

        // inner ear glow -- sinister purple highlights
        for (const [x, y] of [[-0.42, 4.3], [0.42, 4.3]] as [number, number][]) {
            const ie = new THREE.Mesh(new THREE.ConeGeometry(0.058, 0.28, 4), new THREE.MeshBasicMaterial({ color: 0x550088 }));
            ie.position.set(x, y, 0.03);
            g.add(ie);
        }

        // TENDRIL LIMBS: TubeGeometry CatmullRomCurve3 -- shadow tendrils replace cylinder legs
        // no boring cylinder legs. void cats dont have normal legs. they dissolve into shadow.
        const tendrilMat = new THREE.MeshPhongMaterial({ color: 0x030308, emissive: 0x060612, emissiveIntensity: 0.4 });
        const tendrilData: THREE.Vector3[][] = [
            [new THREE.Vector3(-0.42, 0.82, 0.52), new THREE.Vector3(-0.55, 0.45, 0.72), new THREE.Vector3(-0.48, 0.1, 0.62)],
            [new THREE.Vector3(0.42, 0.82, 0.52), new THREE.Vector3(0.55, 0.45, 0.72), new THREE.Vector3(0.48, 0.1, 0.62)],
            [new THREE.Vector3(-0.4, 0.88, -0.42), new THREE.Vector3(-0.52, 0.52, -0.65), new THREE.Vector3(-0.36, 0.08, -0.78)],
            [new THREE.Vector3(0.4, 0.88, -0.42), new THREE.Vector3(0.52, 0.52, -0.65), new THREE.Vector3(0.36, 0.08, -0.78)],
        ];
        for (const pts of tendrilData) {
            const curve = new THREE.CatmullRomCurve3(pts);
            g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 7, 0.08, 5, false), tendrilMat));
        }

        // TAIL: long S-curve TubeGeometry dissolving upward
        const tailCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0.05, 1.55, -0.85),
            new THREE.Vector3(-0.25, 1.8, -1.32),
            new THREE.Vector3(-0.68, 2.22, -1.5),
            new THREE.Vector3(-1.08, 2.65, -1.18),
            new THREE.Vector3(-1.22, 3.1, -0.62),
            new THREE.Vector3(-0.92, 3.52, -0.2),
        ]);
        g.add(new THREE.Mesh(new THREE.TubeGeometry(tailCurve, 16, 0.072, 6, false), voidMat));
        // glowing tail tip
        const tailTip = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 6), tailTipMat);
        tailTip.position.set(-0.92, 3.52, -0.2);
        g.add(tailTip);

        // AURA: pulsing outer shell (this.auraMesh referenced in update loop for opacity pulse)
        this.auraMesh = new THREE.Mesh(
            new THREE.SphereGeometry(2.0, 10, 8),
            new THREE.MeshPhongMaterial({ color: 0x1a0033, emissive: 0x110022, emissiveIntensity: 0.7, transparent: true, opacity: 0.13 })
        );
        this.auraMesh.position.y = 2.0;
        g.add(this.auraMesh);

        // orbital shadow rings -- tilted TorusGeometry rings of darkness
        for (const [r, tiltX, tiltZ] of [[1.62, Math.PI/2.8, 0.3], [2.08, Math.PI/3.5, -0.5]] as [number,number,number][]) {
            const ring = new THREE.Mesh(
                new THREE.TorusGeometry(r, 0.022, 6, 36),
                new THREE.MeshBasicMaterial({ color: 0x110022, transparent: true, opacity: 0.12, side: THREE.DoubleSide })
            );
            ring.rotation.x = tiltX; ring.rotation.z = tiltZ; ring.position.y = 2.0;
            g.add(ring);
        }

        // VOID EMBLEM: TorusKnotGeometry orbiting above -- keep named 'void-emblem' for update spin
        const voidEmblem = new THREE.Mesh(
            new THREE.TorusKnotGeometry(0.3, 0.07, 56, 7, 2, 3),
            new THREE.MeshPhongMaterial({ color: 0x6600bb, emissive: 0x330055, emissiveIntensity: 1.8 })
        );
        voidEmblem.position.set(0, 5.15, 0);
        voidEmblem.name = 'void-emblem';
        g.add(voidEmblem);

        return g;
    }

    public update(deltaTime: number): void {
        this.tickGLBMixer(deltaTime);
        this.randomWalk(deltaTime, 1.8);

        this.dialogueTimer -= deltaTime;
        if (this.dialogueTimer <= 0) {
            this.speak();
            this.dialogueTimer = 6 + Math.random() * 10;
        }

        // pulse the aura -- spooky
        this.eyeGlowTimer += deltaTime;
        if (this.auraMesh) {
            const mat = this.auraMesh.material as THREE.MeshPhongMaterial;
            mat.opacity = 0.1 + Math.sin(this.eyeGlowTimer * 1.5) * 0.08;
        }

        // spin the void emblem like the enigmatic chaos it is
        const emblem = this.mesh.getObjectByName('void-emblem');
        if (emblem) { emblem.rotation.y += deltaTime * 1.8; emblem.rotation.x += deltaTime * 0.7; }

        // spawn trail orbs every little bit
        this.trailTimer -= deltaTime;
        if (this.trailTimer <= 0) {
            this.spawnTrail();
            this.trailTimer = 0.25 + Math.random() * 0.2;
        }

        // fade and delete trail orbs
        for (let i = this.trails.length - 1; i >= 0; i--) {
            const t = this.trails[i];
            t.life -= deltaTime;
            const progress = t.life / t.maxLife;
            const mat = t.mesh.material as THREE.MeshPhongMaterial;
            mat.opacity = progress * 0.55;
            // also drift upward slightly for spooky float effect
            t.mesh.position.y += deltaTime * 0.3;
            if (t.life <= 0) {
                t.mesh.parent?.remove(t.mesh);
                this.trails.splice(i, 1);
            }
        }
    }

    private spawnTrail(): void {
        const trailMat = new THREE.MeshPhongMaterial({
            color: 0x220033,
            emissive: 0x0a0018,
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.5,
        });
        const size = 0.25 + Math.random() * 0.35;
        const trail = new THREE.Mesh(new THREE.SphereGeometry(size, 6, 4), trailMat);
        trail.position.set(
            this.position.x + (Math.random() - 0.5) * 1.6,
            this.position.y + Math.random() * 2.2,
            this.position.z + (Math.random() - 0.5) * 1.6,
        );
        const maxLife = 2.2 + Math.random() * 0.8;
        this.trails.push({ mesh: trail, life: maxLife, maxLife });
        this.mesh.parent?.add(trail);
    }

    public die(): void {
        // clean up trails on death -- don't leave floating void orbs lol
        for (const t of this.trails) {
            t.mesh.parent?.remove(t.mesh);
        }
        this.trails = [];
        super.die();
    }

    public getType(): string {
        return 'voidcat';
    }
}
