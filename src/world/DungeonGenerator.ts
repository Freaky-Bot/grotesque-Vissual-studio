import * as THREE from 'three';

// THE SECRET DUNGEON -- underground pit at (-80, 0, -80)
// has a ramp, creepy torches, floor sigils, and vibes
// npcs will be spawned here separately by NPCManager
// don't expect it to make architectural sense. it doesn't.

export class DungeonGenerator {
    private scene: THREE.Scene;
    private dungeonGroup: THREE.Group;
    public readonly entrance: THREE.Vector3 = new THREE.Vector3(-80, 2, -80);

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.dungeonGroup = new THREE.Group();
        this.scene.add(this.dungeonGroup);
        this.buildDungeon();
    }

    private buildDungeon(): void {
        const darkMat = new THREE.MeshPhongMaterial({ color: 0x111122 });
        const stoneMat = new THREE.MeshPhongMaterial({ color: 0x2a2a3d });
        const glowMat = new THREE.MeshPhongMaterial({ color: 0x440066, emissive: 0x220033, emissiveIntensity: 1.0 });

        const cx = this.entrance.x;
        const cz = this.entrance.z;

        // dungeon floor -- way underground, very mysterious
        const floor = new THREE.Mesh(new THREE.PlaneGeometry(42, 42), darkMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.set(cx, -10, cz);
        this.dungeonGroup.add(floor);

        // 4 walls forming the dungeon box
        const wallMat = stoneMat;
        const wallH = 14;

        const n = new THREE.Mesh(new THREE.BoxGeometry(0.9, wallH, 44), wallMat);
        n.position.set(cx - 21, -10 + wallH / 2, cz);
        this.dungeonGroup.add(n);

        const s = new THREE.Mesh(new THREE.BoxGeometry(0.9, wallH, 44), wallMat);
        s.position.set(cx + 21, -10 + wallH / 2, cz);
        this.dungeonGroup.add(s);

        const e = new THREE.Mesh(new THREE.BoxGeometry(44, wallH, 0.9), wallMat);
        e.position.set(cx, -10 + wallH / 2, cz - 21);
        this.dungeonGroup.add(e);

        // south wall has the entrance gap in it -- the gap is just implied lol
        const w1 = new THREE.Mesh(new THREE.BoxGeometry(16, wallH, 0.9), wallMat);
        w1.position.set(cx - 14, -10 + wallH / 2, cz + 21);
        this.dungeonGroup.add(w1);
        const w2 = new THREE.Mesh(new THREE.BoxGeometry(16, wallH, 0.9), wallMat);
        w2.position.set(cx + 14, -10 + wallH / 2, cz + 21);
        this.dungeonGroup.add(w2);

        // ceiling (with hole at entrance)
        const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(44, 44), stoneMat);
        ceiling.rotation.x = Math.PI / 2;
        ceiling.position.set(cx, 0.5, cz);
        this.dungeonGroup.add(ceiling);

        // ramp going down -- stone ramp, moderate slope
        const ramp = new THREE.Mesh(new THREE.BoxGeometry(7, 0.6, 24), stoneMat);
        ramp.rotation.x = 0.42;
        ramp.position.set(cx, -4.5, cz + 18);
        this.dungeonGroup.add(ramp);

        // entrance portal ring -- glowing purple torus
        const portalRing = new THREE.Mesh(new THREE.TorusGeometry(4, 0.45, 8, 22), glowMat);
        portalRing.position.set(cx, 3, cz + 21);
        this.dungeonGroup.add(portalRing);

        // entrance sign (just a glowing slab lol)
        const sign = new THREE.Mesh(new THREE.BoxGeometry(8, 2.5, 0.4), glowMat);
        sign.position.set(cx, 6.5, cz + 21.2);
        this.dungeonGroup.add(sign);

        // creepy purple torch lights in 4 corners
        const torchPositions: [number, number, number][] = [
            [cx - 18, -7, cz - 17],
            [cx + 18, -7, cz - 17],
            [cx - 18, -7, cz + 17],
            [cx + 18, -7, cz + 17],
        ];

        for (const tp of torchPositions) {
            const torch = new THREE.PointLight(0x6600aa, 4, 18);
            torch.position.set(...tp);
            this.dungeonGroup.add(torch);

            // torch stick (tiny)
            const stick = new THREE.Mesh(
                new THREE.CylinderGeometry(0.15, 0.1, 2.2, 6),
                new THREE.MeshPhongMaterial({ color: 0x4a3200 }),
            );
            stick.position.set(tp[0], tp[1] + 0.5, tp[2]);
            this.dungeonGroup.add(stick);

            // flame blob on top
            const flame = new THREE.Mesh(
                new THREE.SphereGeometry(0.35, 6, 4),
                new THREE.MeshPhongMaterial({ color: 0xaa22ff, emissive: 0x6600aa, emissiveIntensity: 2 }),
            );
            flame.position.set(tp[0], tp[1] + 1.8, tp[2]);
            this.dungeonGroup.add(flame);
        }

        // floor sigils / ritual circles -- spook factor 9000
        const sigilCount = 8;
        for (let i = 0; i < sigilCount; i++) {
            const sigilMat = new THREE.MeshPhongMaterial({
                color: 0x9900cc,
                emissive: 0x440066,
                emissiveIntensity: 0.8,
                side: THREE.DoubleSide,
            });
            const sides = 3 + (i % 5);
            const sigil = new THREE.Mesh(new THREE.RingGeometry(0.4 + i * 0.15, 0.6 + i * 0.15, sides), sigilMat);
            sigil.rotation.x = -Math.PI / 2;
            sigil.position.set(
                cx + (Math.random() - 0.5) * 32,
                -9.85,
                cz + (Math.random() - 0.5) * 32,
            );
            this.dungeonGroup.add(sigil);
        }

        // creepy central altar -- a raised platform with an orb on it
        const altar = new THREE.Mesh(new THREE.BoxGeometry(5, 2, 5), stoneMat);
        altar.position.set(cx, -9, cz);
        this.dungeonGroup.add(altar);

        const altarOrb = new THREE.Mesh(
            new THREE.SphereGeometry(1, 12, 8),
            new THREE.MeshPhongMaterial({ color: 0x55000f, emissive: 0x330009, emissiveIntensity: 1.5 }),
        );
        altarOrb.position.set(cx, -6.5, cz);
        this.dungeonGroup.add(altarOrb);

        console.log('%c🏚️ DUNGEON GENERATED at (-80, _, -80) -- enter if u dare lol', 'color: purple; font-weight: bold');
    }

    public isPlayerInDungeon(playerPos: THREE.Vector3): boolean {
        const xzDist = Math.sqrt(
            Math.pow(playerPos.x - this.entrance.x, 2) +
            Math.pow(playerPos.z - this.entrance.z, 2),
        );
        return xzDist < 28 && playerPos.y < 1;
    }
}
