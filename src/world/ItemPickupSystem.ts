import * as THREE from 'three';

export enum ItemType {
    FISH = 'fish',
    CATNIP = 'catnip',
}

interface PickupItem {
    mesh: THREE.Group;
    type: ItemType;
    worldPos: THREE.Vector3; // separate from mesh.position since mesh bobs
    bobPhase: number;
}

// ITEM PICKUPS -- fish give speed boost, catnip makes things wobbly
// walk near them to pick them up, no button, effort is overrated
// max 10 items in world at a time so it doesnt get ridiculous

export class ItemPickupSystem {
    private scene: THREE.Scene;
    private items: PickupItem[] = [];
    private readonly MAX_ITEMS = 10;
    private spawnTimer: number = 0;
    private spawnInterval: number = 7;

    // active buffs -- check these from main.ts
    public speedMultiplier: number = 1;
    private speedTimer: number = 0;

    public isWobbly: boolean = false;
    private wobblyTimer: number = 0;

    // wobble amount for camera FOV -- sine wave based on time
    public get wobbleAmount(): number {
        if (!this.isWobbly) return 0;
        return Math.sin(Date.now() * 0.005) * 15 * (this.wobblyTimer / 8);
    }

    public onPickup: ((type: ItemType, pos: THREE.Vector3) => void) | null = null;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        // scatter some starter items around the world
        for (let i = 0; i < 6; i++) this.spawnItem();
    }

    public update(deltaTime: number, playerPos: THREE.Vector3): void {
        // spawn more items over time
        this.spawnTimer += deltaTime;
        if (this.spawnTimer >= this.spawnInterval && this.items.length < this.MAX_ITEMS) {
            this.spawnItem();
            this.spawnTimer = 0;
            this.spawnInterval = 6 + Math.random() * 10;
        }

        // tick down active buff timers
        if (this.speedTimer > 0) {
            this.speedTimer -= deltaTime;
            if (this.speedTimer <= 0) {
                this.speedMultiplier = 1;
                console.log('%c🐟 fish speed boost wore off.... back to normal speed', 'color: orange');
            }
        }

        if (this.wobblyTimer > 0) {
            this.wobblyTimer -= deltaTime;
            if (this.wobblyTimer <= 0) {
                this.isWobbly = false;
                console.log('%c🌿 catnip wore off!! reality restored (sort of)', 'color: green');
            }
        }

        // animate items (bob up+down and spin)
        for (const item of this.items) {
            item.bobPhase += deltaTime * 2;
            item.mesh.position.y = item.worldPos.y + Math.sin(item.bobPhase) * 0.3;
            item.mesh.rotation.y += deltaTime * 1.5;
        }

        // check player proximity for pickup -- just walk near it
        for (let i = this.items.length - 1; i >= 0; i--) {
            const item = this.items[i];
            const dx = item.worldPos.x - playerPos.x;
            const dz = item.worldPos.z - playerPos.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            if (dist < 2.8) {
                this.collectItem(item);
                this.scene.remove(item.mesh);
                this.items.splice(i, 1);
            }
        }
    }

    // call these from inventory use -- same effect as walking over the item
    public applyFish(): void {
        this.speedMultiplier = 2.2;
        this.speedTimer = 10;
    }

    public applyCatnip(): void {
        this.isWobbly = true;
        this.wobblyTimer = 8;
    }

    private collectItem(item: PickupItem): void {
        if (item.type === ItemType.FISH) {
            this.speedMultiplier = 2.2;
            this.speedTimer = 10;
            console.log('%c🐟 FISH!! SPEED BOOST x2.2 for 10 seconds ZOOOOM', 'color: orange; font-size: 14px; font-weight: bold');
        } else {
            this.isWobbly = true;
            this.wobblyTimer = 8;
            console.log('%c🌿 CATNIP!! reality is a suggestion now. 8 seconds.', 'color: lime; font-size: 14px; font-weight: bold');
        }
        this.onPickup?.(item.type, item.worldPos.clone());
    }

    private spawnItem(): void {
        const type = Math.random() < 0.62 ? ItemType.FISH : ItemType.CATNIP;
        const angle = Math.random() * Math.PI * 2;
        const dist = 15 + Math.random() * 120;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2.5, Math.sin(angle) * dist);

        const mesh = type === ItemType.FISH ? this.makeFish() : this.makeCatnip();
        mesh.position.copy(pos);
        this.scene.add(mesh);

        this.items.push({
            mesh,
            type,
            worldPos: pos.clone(),
            bobPhase: Math.random() * Math.PI * 2,
        });
    }

    private makeFish(): THREE.Group {
        const g = new THREE.Group();
        const bodyMat = new THREE.MeshPhongMaterial({ color: 0xf5943a, emissive: 0x331100, emissiveIntensity: 0.3 });
        const tailMat = new THREE.MeshPhongMaterial({ color: 0xcc5500 });

        // fish body (elongated sphere)
        const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), bodyMat);
        body.scale.set(1.6, 1, 0.75);
        g.add(body);

        // tail fin (cone pointing back)
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.65, 4), tailMat);
        tail.rotation.z = Math.PI / 2;
        tail.position.x = -0.9;
        g.add(tail);

        // eye
        const eye = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 6, 4),
            new THREE.MeshPhongMaterial({ color: 0x111111 }),
        );
        eye.position.set(0.56, 0.1, 0.36);
        g.add(eye);

        // little shine highlight on eye (very fancy fish)
        const shine = new THREE.Mesh(
            new THREE.SphereGeometry(0.04, 4, 3),
            new THREE.MeshPhongMaterial({ color: 0xffffff }),
        );
        shine.position.set(0.62, 0.14, 0.4);
        g.add(shine);

        return g;
    }

    private makeCatnip(): THREE.Group {
        const g = new THREE.Group();
        const leafMat = new THREE.MeshPhongMaterial({ color: 0x44cc44, emissive: 0x114411, emissiveIntensity: 0.4 });
        const stemMat = new THREE.MeshPhongMaterial({ color: 0x228822 });
        const sparkleMat = new THREE.MeshPhongMaterial({ color: 0xaaffaa, emissive: 0x55ff55, emissiveIntensity: 1.2 });

        // main leaf (flat-ish sphere)
        const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.42, 8, 6), leafMat);
        leaf.scale.set(1.1, 0.42, 1.6);
        g.add(leaf);

        // stem below
        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.65, 5), stemMat);
        stem.position.y = -0.38;
        g.add(stem);

        // sparkle orb above it
        const sparkle = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 4), sparkleMat);
        sparkle.position.y = 0.52;
        g.add(sparkle);

        // a couple small leaf bits around it
        for (let i = 0; i < 3; i++) {
            const smLeaf = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 4), leafMat);
            smLeaf.scale.set(0.8, 0.35, 1.2);
            const angle = (i / 3) * Math.PI * 2;
            smLeaf.position.set(Math.cos(angle) * 0.45, 0.1, Math.sin(angle) * 0.45);
            g.add(smLeaf);
        }

        return g;
    }
}
