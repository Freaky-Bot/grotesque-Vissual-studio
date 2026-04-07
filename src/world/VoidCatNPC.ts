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
        const g = new THREE.Group();

        const voidMat = new THREE.MeshPhongMaterial({ color: 0x050508 });
        const glowMat = new THREE.MeshPhongMaterial({
            color: 0x220033,
            emissive: 0x110022,
            emissiveIntensity: 0.7,
            transparent: true,
            opacity: 0.18,
        });
        const eyeMat = new THREE.MeshPhongMaterial({
            color: 0x9900ff,
            emissive: 0x550088,
            emissiveIntensity: 1.5,
        });

        // body -- LatheGeometry gives dat void cat silhouette, nice and organic
        // revolve a profile around Y axis -- way better than sphere lol
        const bodyPoints = [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0.55, 0.2),
            new THREE.Vector2(1.0, 0.7),
            new THREE.Vector2(1.1, 1.2),
            new THREE.Vector2(1.05, 1.8),
            new THREE.Vector2(0.85, 2.3),
            new THREE.Vector2(0.55, 2.6),
            new THREE.Vector2(0.2, 2.75),
        ];
        const body = new THREE.Mesh(new THREE.LatheGeometry(bodyPoints, 14), voidMat);
        body.position.y = 1.2;
        body.castShadow = true;
        g.add(body);

        // 4 standard void legs -- lil stubby cylinders, fine
        const legPositions: [number, number, number][] = [
            [-0.55, 1.0, 0.45],
            [0.55, 1.0, 0.45],
            [-0.55, 1.0, -0.45],
            [0.55, 1.0, -0.45],
        ];
        for (const lp of legPositions) {
            const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.13, 0.9, 6), voidMat);
            leg.position.set(...lp);
            g.add(leg);
        }

        // head
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.76, 10, 8), voidMat);
        head.position.y = 3.5;
        g.add(head);

        // ExtrudeGeometry ears -- sharp void triangles, way better than cone
        const earShape = new THREE.Shape();
        earShape.moveTo(0, 0);
        earShape.lineTo(-0.26, 0);
        earShape.lineTo(-0.08, 0.58);
        earShape.lineTo(0.08, 0.58);
        earShape.lineTo(0.26, 0);
        earShape.closePath();
        const earExtrude = { depth: 0.12, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2 };
        const earGeo = new THREE.ExtrudeGeometry(earShape, earExtrude);
        const lEar = new THREE.Mesh(earGeo, voidMat);
        lEar.position.set(-0.55, 3.85, -0.06);
        lEar.rotation.z = -0.15;
        g.add(lEar);
        const rEar = new THREE.Mesh(earGeo, voidMat);
        rEar.position.set(0.29, 3.85, -0.06);
        rEar.rotation.z = 0.15;
        g.add(rEar);

        // GLOWING purple void eyes -- the best feature honestly
        const eyeGeo = new THREE.SphereGeometry(0.19, 8, 6);
        const lEye = new THREE.Mesh(eyeGeo, eyeMat);
        lEye.position.set(-0.28, 3.56, 0.67);
        g.add(lEye);
        const rEye = new THREE.Mesh(eyeGeo, eyeMat);
        rEye.position.set(0.28, 3.56, 0.67);
        g.add(rEye);

        // TubeGeometry tail -- S-curve tail with CatmullRomCurve3, looks so much better
        // just a straight cylinder before. embarrassing. fixed it. whatever.
        const tailCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 2.2, -0.8),
            new THREE.Vector3(-0.4, 2.5, -1.3),
            new THREE.Vector3(-0.8, 2.9, -1.1),
            new THREE.Vector3(-1.0, 3.3, -0.7),
            new THREE.Vector3(-0.65, 3.6, -0.4),
        ]);
        const tailGeo = new THREE.TubeGeometry(tailCurve, 12, 0.08, 6, false);
        const tail = new THREE.Mesh(tailGeo, voidMat);
        g.add(tail);

        // TorusKnotGeometry void emblem floating above head -- pure chaos energy
        // just because we can. the void demands it. ngl looks sick.
        const voidEmblem = new THREE.Mesh(
            new THREE.TorusKnotGeometry(0.28, 0.06, 48, 6, 2, 3),
            new THREE.MeshPhongMaterial({ color: 0x6600aa, emissive: 0x220044, emissiveIntensity: 1.2 })
        );
        voidEmblem.position.set(0, 4.8, 0);
        voidEmblem.name = 'void-emblem';
        g.add(voidEmblem);

        // big faint void aura -- makes it look spooky from a distance
        this.auraMesh = new THREE.Mesh(new THREE.SphereGeometry(1.9, 8, 6), glowMat);
        this.auraMesh.position.y = 2.5;
        g.add(this.auraMesh);

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
