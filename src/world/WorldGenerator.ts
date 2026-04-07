import * as THREE from 'three';

interface BuildingState {
    obj: THREE.Object3D;
    health: number;
    maxHealth: number;
    rebuildTimer: number; // countdown til rebuild, 0 = alive
    originalColor: THREE.Color;
}

export class WorldGenerator {
    private scene: THREE.Scene;
    private buildings: THREE.Object3D[] = [];
    private buildingStates: BuildingState[] = []; // destructible building tracking
    private trees: THREE.Object3D[] = [];
    private cars: THREE.Object3D[] = [];
    private streetLights: THREE.Object3D[] = [];
    private spawnTimer: number = 0;
    private worldTime: number = 0;
    private lastPlayerPosition: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
    private ground?: THREE.Mesh;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
    }

    public generateInitialWorld(): void {
        // Create ground plane - natural world without the awful city grid
        this.createGround();

        // fewer structures, spread WAY out -- breathing room nyaa~
        for (let i = 0; i < 7; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 300;
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;

            if (Math.random() < 0.2) {
                this.createPark(x, z);
            } else if (Math.random() < 0.35) {
                this.createTower(x, z);
            } else if (Math.random() < 0.5) {
                this.createMonument(x, z);
            } else if (Math.random() < 0.7) {
                this.createBridge(x, z);
            } else {
                this.createBuilding(x, z);
            }
        }

        // sparse trees scattered wide
        for (let i = 0; i < 6; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = 80 + Math.random() * 350;
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            this.createTree(x, z);
        }

        // only 4 starter cars, not a traffic jam
        for (let i = 0; i < 4; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 200;
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            this.createCar(x, z);
        }

        // 4 street lights spread out for ambiance
        for (let i = 0; i < 4; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = 60 + Math.random() * 250;
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            this.createStreetLight(x, z);
        }
    }

    public update(deltaTime: number, playerPosition: THREE.Vector3): void {
        this.lastPlayerPosition.copy(playerPosition);
        this.worldTime += deltaTime;

        // sparse structure spawning -- every 25s, only if below cap
        this.spawnTimer += deltaTime;
        if (this.spawnTimer >= 25) {
            // cull structures that wandered or spawned too far from origin (keep map tidy)
            this.cullFarStructures();

            // spawn rate gated by total count -- don't let it get crowded again
            const totalStructures = this.buildings.length + this.trees.length;
            if (totalStructures < 60 && Math.random() > 0.5) {
                this.generateStructureNearPlayer();
            }

            if (this.cars.length < 12 && Math.random() > 0.6) {
                const angle = Math.random() * Math.PI * 2;
                const distance = 150 + Math.random() * 200;
                const x = this.lastPlayerPosition.x + Math.cos(angle) * distance;
                const z = this.lastPlayerPosition.z + Math.sin(angle) * distance;

                if (Math.abs(x) < 800 && Math.abs(z) < 800) {
                    this.createCar(x, z);
                }
            }

            this.spawnTimer = 0;
        }

        // Animate cars
        for (const car of this.cars) {
            car.position.x += Math.sin(this.worldTime + car.position.z) * 0.05;
            car.position.z += Math.cos(this.worldTime + car.position.x) * 0.05;

            // Keep cars in bounds of the big world nyaa~
            car.position.x = Math.max(-800, Math.min(800, car.position.x));
            car.position.z = Math.max(-800, Math.min(800, car.position.z));

            for (const child of car.children) {
                if (child instanceof THREE.Mesh && child.geometry instanceof THREE.CylinderGeometry) {
                    child.rotation.x += 0.15;
                }
            }
        }

        // Animate world buildings and objects
        for (const building of this.buildings) {
            if (building instanceof THREE.Mesh) {
                building.rotation.y += Math.sin(this.worldTime * 0.2) * 0.001;
                if (building.material instanceof THREE.MeshStandardMaterial) {
                    building.material.emissive = new THREE.Color(0x222222);
                    building.material.emissiveIntensity = 0.2 + Math.abs(Math.sin(this.worldTime + building.position.x * 0.1)) * 0.2;
                }
            } else if (building instanceof THREE.Group) {
                building.rotation.y += Math.sin(this.worldTime * 0.15) * 0.001;
                building.traverse((child) => {
                    if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                        child.material.emissive = new THREE.Color(0x111111);
                        child.material.emissiveIntensity = 0.1 + Math.abs(Math.sin(this.worldTime + building.position.z * 0.1)) * 0.15;
                    }
                });
            }
        }

        // Animate trees and parks
        for (const tree of this.trees) {
            if (tree instanceof THREE.Mesh && tree.geometry instanceof THREE.SphereGeometry) {
                tree.rotation.y += 0.002;
                const intensity = 0.9 + Math.sin(this.worldTime + tree.position.x * 0.2) * 0.1;
                if (tree.material instanceof THREE.MeshStandardMaterial) {
                    tree.material.color = new THREE.Color(0x228b22).multiplyScalar(intensity);
                }
            }
        }

        // Animate street lights pulsing softly
        for (const light of this.streetLights) {
            light.rotation.y += 0.002;
            light.traverse((child) => {
                if (child instanceof THREE.PointLight) {
                    child.intensity = 0.6 + Math.sin(this.worldTime * 3 + light.position.x) * 0.2;
                }
            });
        }

        if (this.ground && this.ground.material instanceof THREE.MeshStandardMaterial) {
            const hueShift = (Math.sin(this.worldTime * 0.2) * 0.05) + 0.41;
            this.ground.material.color = new THREE.Color().setHSL(hueShift, 0.6, 0.4);
        }
    }

    // if da map gets too cluttered remove stuff far from origin -- medieval cleanup crew
    private cullFarStructures(): void {
        const CULL_DIST = 700;
        this.buildings = this.buildings.filter(b => {
            if (b.position.length() > CULL_DIST) { this.scene.remove(b); return false; }
            return true;
        });
        this.trees = this.trees.filter(t => {
            if (t.position.length() > CULL_DIST) { this.scene.remove(t); return false; }
            return true;
        });
        this.cars = this.cars.filter(c => {
            if (c.position.length() > CULL_DIST) { this.scene.remove(c); return false; }
            return true;
        });
        this.streetLights = this.streetLights.filter(l => {
            if (l.position.length() > CULL_DIST) { this.scene.remove(l); return false; }
            return true;
        });
        // sync buildingStates -- remove entries for culled buildings
        this.buildingStates = this.buildingStates.filter(bs => this.buildings.includes(bs.obj as any) || this.scene.children.includes(bs.obj));
    }

    private generateStructureNearPlayer(): void {
        const types = ['building', 'tree', 'tower', 'monument', 'park', 'bridge'];
        const randomType = types[Math.floor(Math.random() * types.length)];

        const angle = Math.random() * Math.PI * 2;
        // spawn further away so theres room to breathe nyaa~
        const distance = 150 + Math.random() * 250;
        const x = this.lastPlayerPosition.x + Math.cos(angle) * distance;
        const z = this.lastPlayerPosition.z + Math.sin(angle) * distance;

        const constrainedX = Math.max(-800, Math.min(800, x));
        const constrainedZ = Math.max(-800, Math.min(800, z));

        switch (randomType) {
            case 'building':
                this.createBuilding(constrainedX, constrainedZ);
                break;
            case 'tree':
                this.createTree(constrainedX, constrainedZ);
                break;
            case 'city':
                this.createCity(constrainedX, constrainedZ);
                break;
            case 'car':
                this.createCar(constrainedX, constrainedZ);
                break;
            case 'tower':
                this.createTower(constrainedX, constrainedZ);
                break;
            case 'monument':
                this.createMonument(constrainedX, constrainedZ);
                break;
            case 'park':
                this.createPark(constrainedX, constrainedZ);
                break;
            case 'bridge':
                this.createBridge(constrainedX, constrainedZ);
                break;
        }
    }

    private createGround(): void {
        // MASSIVE ground plane -- the realm has expanded nyaa~
        const groundGeometry = new THREE.PlaneGeometry(2000, 2000);
        const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x3bd040 });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);
        this.ground = ground;
    }

    private createBuilding(x: number, z: number): void {
        const width = 10 + Math.random() * 15;
        const height = 15 + Math.random() * 20;
        const depth = 10 + Math.random() * 15;

        const geometry = new THREE.BoxGeometry(width, height, depth);
        const color = new THREE.Color().setHSL(Math.random(), 0.7, 0.6);
        const material = new THREE.MeshStandardMaterial({ color });

        const building = new THREE.Mesh(geometry, material);
        building.position.set(x, height / 2, z);
        building.castShadow = true;
        building.receiveShadow = true;

        // ExtrudeGeometry architectural trim strip around the building -- classy. finally.
        // was i ASHAMED of those flat windowsill boxes? yes. this fixes it. somewhat.
        const trimShape = new THREE.Shape();
        trimShape.moveTo(0, 0);
        trimShape.lineTo(width + 0.4, 0);
        trimShape.lineTo(width + 0.4, 0.6);
        trimShape.bezierCurveTo(width + 0.4, 1.0, width + 0.1, 1.0, width * 0.5 + 0.2, 0.9);
        trimShape.bezierCurveTo(width * 0.1, 0.8, 0, 0.8, 0, 0.6);
        trimShape.lineTo(0, 0);
        const trimGeo = new THREE.ExtrudeGeometry(trimShape, { depth: depth + 0.4, bevelEnabled: false });
        const trimMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
        const trim = new THREE.Mesh(trimGeo, trimMat);
        // slap it at the top like a crown molding ugh architecture is hard
        trim.position.set(x - width * 0.5 - 0.2, height - 0.5, z - depth * 0.5 - 0.2);
        this.scene.add(trim);

        // Add windows
        for (let i = 0; i < 3; i++) {
            const windowGeometry = new THREE.BoxGeometry(1, 1, 0.1);
            const windowMaterial = new THREE.MeshBasicMaterial({ color: 0xffff99 });
            const window = new THREE.Mesh(windowGeometry, windowMaterial);
            window.position.set(-width / 2 + 2, height / 2 + i * 4, depth / 2);
            building.add(window);
        }

        this.scene.add(building);
        this.buildings.push(building);
        // register this bld as destructible -- it has 3 hits before it crumbles
        this.buildingStates.push({
            obj: building,
            health: 3,
            maxHealth: 3,
            rebuildTimer: 0,
            originalColor: color.clone(),
        });
    }

    private createTree(x: number, z: number): void {
        // LatheGeometry trunk -- organic tapering profile, looks like an actual tree not a can lol
        // i cannot believe we used a cylinder for so long. tragedy.
        const trunkPoints = [
            new THREE.Vector2(1.25, 0),
            new THREE.Vector2(1.15, 1),
            new THREE.Vector2(1.0, 2),
            new THREE.Vector2(0.85, 3),
            new THREE.Vector2(0.65, 4.5),
            new THREE.Vector2(0.45, 5.5),
            new THREE.Vector2(0.28, 6),
        ];
        const trunkGeometry = new THREE.LatheGeometry(trunkPoints, 9);
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(x, 0, z);
        trunk.castShadow = true;
        trunk.receiveShadow = true;
        this.scene.add(trunk);

        // Foliage -- still a sphere bc it works. no notes. but with a TorusKnotGeometry sparkle hidden inside lol
        const foliageGeometry = new THREE.SphereGeometry(5, 8, 8);
        const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
        const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
        foliage.position.set(x, 8, z);
        foliage.castShadow = true;
        foliage.receiveShadow = true;
        this.scene.add(foliage);

        // secret TorusKnotGeometry sparkle gem buried in the crown of every tree uwu
        // literally nobody will see this but it's there and that matters
        const treeGemGeo = new THREE.TorusKnotGeometry(0.55, 0.12, 32, 5, 2, 3);
        const treeGemMat = new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true });
        const treeGem = new THREE.Mesh(treeGemGeo, treeGemMat);
        treeGem.position.set(x, 9, z);
        treeGem.name = 'tree-sparkle';
        this.scene.add(treeGem);

        this.trees.push(trunk);
        this.trees.push(foliage);
        this.trees.push(treeGem);
    }

    private createCity(x: number, z: number): void {
        // Create a cluster of buildings
        for (let i = 0; i < 4; i++) {
            const offsetX = (Math.random() - 0.5) * 40;
            const offsetZ = (Math.random() - 0.5) * 40;
            this.createBuilding(x + offsetX, z + offsetZ);
        }

        // Add roads (simple planes)
        const roadGeometry = new THREE.PlaneGeometry(30, 5);
        const roadMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        
        const road1 = new THREE.Mesh(roadGeometry, roadMaterial);
        road1.rotation.x = -Math.PI / 2;
        road1.position.set(x, 0.01, z);
        this.scene.add(road1);

        const road2 = new THREE.Mesh(roadGeometry, roadMaterial);
        road2.rotation.x = -Math.PI / 2;
        road2.rotation.z = Math.PI / 2;
        road2.position.set(x, 0.01, z);
        this.scene.add(road2);
    }

    private createCar(x: number, z: number): void {
        const carGroup = new THREE.Group();

        // Car body
        const bodyGeometry = new THREE.BoxGeometry(2, 1, 4);
        const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 0.5;
        body.castShadow = true;
        body.receiveShadow = true;
        carGroup.add(body);

        // Car roof
        const roofGeometry = new THREE.BoxGeometry(1.6, 0.8, 2);
        const roof = new THREE.Mesh(roofGeometry, bodyMaterial);
        roof.position.y = 1.4;
        roof.castShadow = true;
        carGroup.add(roof);

        // Wheels
        const wheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.3, 16);
        const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });

        const wheels = [
            [-0.8, 0.5, 1],
            [0.8, 0.5, 1],
            [-0.8, 0.5, -1],
            [0.8, 0.5, -1]
        ];

        for (const wheelPos of wheels) {
            const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
            wheel.rotation.z = Math.PI / 2;
            wheel.position.set(wheelPos[0], wheelPos[1], wheelPos[2]);
            wheel.castShadow = true;
            carGroup.add(wheel);
        }

        carGroup.position.set(x, 0, z);
        this.scene.add(carGroup);
        this.cars.push(carGroup);
    }

    private createTower(x: number, z: number): void {
        // just make a biggo tall boi -- but NOW WITH LATHE GEOMETRY and TorusKnot at the top!!
        // the old cone was extremely boring. this is architecture now.
        const height = 30 + Math.random() * 40;
        const towerColor = new THREE.Color().setHSL(Math.random(), 0.8, 0.5);
        const towerMaterial = new THREE.MeshStandardMaterial({ color: towerColor });

        // LatheGeometry tiered tower profile -- slight taper with a pinch at 60% height
        const towerPoints = [
            new THREE.Vector2(4.0, 0),
            new THREE.Vector2(3.7, height * 0.15),
            new THREE.Vector2(3.4, height * 0.3),
            new THREE.Vector2(2.8, height * 0.5),
            new THREE.Vector2(2.2, height * 0.65),
            new THREE.Vector2(1.5, height * 0.8),
            new THREE.Vector2(0.8, height * 0.92),
            new THREE.Vector2(0.3, height),
        ];
        const towerGeometry = new THREE.LatheGeometry(towerPoints, 7);
        const tower = new THREE.Mesh(towerGeometry, towerMaterial);
        tower.position.set(x, 0, z);
        tower.castShadow = true;
        this.scene.add(tower);
        this.buildings.push(tower);

        // TorusKnotGeometry crown at the top of every tower -- its a ritual. its tradition.
        // i have no regrets and neither does this tower.
        const crownGeo = new THREE.TorusKnotGeometry(1.4, 0.25, 48, 7, 2, 3);
        const crownMat = new THREE.MeshBasicMaterial({ color: 0xffdd00, wireframe: false });
        const crown = new THREE.Mesh(crownGeo, crownMat);
        crown.position.set(x, height + 1.8, z);
        crown.name = 'tower-crown';
        this.scene.add(crown);
        this.buildings.push(crown);
    }

    private createMonument(x: number, z: number): void {
        // MONUMEWWNT TO THE CAT GODS!! now with REAL geometry not some boring sphere
        // ngl the old sphere orb was embarrassing. this is a monument. it needs chaos.
        const group = new THREE.Group();
        
        // base... just a cube. i'm lazy lol. some traditions must be preserved.
        const baseGeo = new THREE.BoxGeometry(8, 2, 8);
        const baseMat = new THREE.MeshStandardMaterial({ color: 0xcccccc });
        const base = new THREE.Mesh(baseGeo, baseMat);
        base.position.y = 1;
        group.add(base);

        // ExtrudeGeometry pedestal arch on top of the base -- for GRANDEUR
        const archShape = new THREE.Shape();
        archShape.moveTo(-4, 0);
        archShape.lineTo(-4, 2.5);
        archShape.absarc(0, 2.5, 4, Math.PI, 0, true);
        archShape.lineTo(4, 0);
        archShape.lineTo(-4, 0);
        const pedestal = new THREE.Mesh(
            new THREE.ExtrudeGeometry(archShape, { depth: 0.8, bevelEnabled: false }),
            new THREE.MeshStandardMaterial({ color: 0xaaaacc })
        );
        pedestal.position.set(-0.4, 2, -0.4);
        group.add(pedestal);

        // TorusKnotGeometry chaos orb -- replaces the boring spherical orb. no notes.
        // the cat gods demand TorusKnot. who am i to argue.
        const orbGeo = new THREE.TorusKnotGeometry(2.2, 0.45, 64, 8, 2, 3);
        const orbMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
        const orb = new THREE.Mesh(orbGeo, orbMat);
        orb.name = 'monument-orb';
        orb.position.y = 7.5;
        group.add(orb);

        group.position.set(x, 0, z);
        this.scene.add(group);
        this.buildings.push(group as any);
    }

    private createPark(x: number, z: number): void {
        // trees but make it an area... genius
        const parkSize = 20;
        const grass = new THREE.PlaneGeometry(parkSize * 2, parkSize * 2);
        const grassMat = new THREE.MeshStandardMaterial({ color: 0x22ff22 });
        const grassMesh = new THREE.Mesh(grass, grassMat);
        grassMesh.rotation.x = -Math.PI / 2;
        grassMesh.position.set(x, 0.02, z);
        this.scene.add(grassMesh);

        // random trees scattered cuz YOLO
        for (let i = 0; i < 5 + Math.random() * 5; i++) {
            const treeX = x + (Math.random() - 0.5) * parkSize;
            const treeZ = z + (Math.random() - 0.5) * parkSize;
            this.createTree(treeX, treeZ);
        }
    }

    private createBridge(x: number, z: number): void {
        // bridges but make 'em quirky
        const bridgeGroup = new THREE.Group();

        // deck lol
        const deckGeo = new THREE.BoxGeometry(15, 1, 8);
        const deckMat = new THREE.MeshStandardMaterial({ color: 0x8b6914 });
        const deck = new THREE.Mesh(deckGeo, deckMat);
        deck.position.y = 5;
        bridgeGroup.add(deck);

        // supports??? i guess???
        for (let i = -1; i <= 1; i++) {
            const supportGeo = new THREE.CylinderGeometry(0.8, 1.2, 5, 8);
            const supportMat = new THREE.MeshStandardMaterial({ color: 0xaa6600 });
            const support = new THREE.Mesh(supportGeo, supportMat);
            support.position.set(i * 6, 2.5, 0);
            bridgeGroup.add(support);
        }

        // cables just vibing
        const cableGeo = new THREE.BufferGeometry();
        const points = [];
        for (let i = 0; i <= 10; i++) {
            points.push(new THREE.Vector3((i - 5) * 1.5, 3 + Math.sin(i) * 1, 0));
        }
        cableGeo.setFromPoints(points);
        const cableMat = new THREE.LineBasicMaterial({ color: 0x333333 });
        const cables = new THREE.Line(cableGeo, cableMat);
        bridgeGroup.add(cables);

        bridgeGroup.position.set(x, 0, z);
        this.scene.add(bridgeGroup);
        this.buildings.push(bridgeGroup as any);
    }

    private createStreetLight(x: number, z: number): void {
        // STREET LIGHTS FOR DA CITY AMBIANCE!!! srsly tho they look cool
        const lightGroup = new THREE.Group();

        // Pole
        const poleGeo = new THREE.CylinderGeometry(0.3, 0.4, 8, 8);
        const poleMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
        const pole = new THREE.Mesh(poleGeo, poleMat);
        pole.position.y = 4;
        lightGroup.add(pole);

        // Light fixture
        const fixtureGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.4, 16);
        const fixtureMat = new THREE.MeshStandardMaterial({ color: 0x444444 });
        const fixture = new THREE.Mesh(fixtureGeo, fixtureMat);
        fixture.position.y = 8.2;
        lightGroup.add(fixture);

        // Glowing bulb
        const bulbGeo = new THREE.SphereGeometry(0.3, 8, 8);
        const bulbMat = new THREE.MeshBasicMaterial({ 
            color: 0xffff88
        });
        const bulb = new THREE.Mesh(bulbGeo, bulbMat);
        bulb.position.y = 8.5;
        lightGroup.add(bulb);

        // Add actual light source for ambiance!!! WORTH IT
        const pointLight = new THREE.PointLight(0xffff88, 0.8, 30);
        pointLight.position.set(0, 8.5, 0);
        lightGroup.add(pointLight);

        lightGroup.position.set(x, 0, z);
        this.scene.add(lightGroup);
        this.streetLights.push(lightGroup);
    }

    public getBuildingCount(): number {
        // who even counts anymore lmao
        return this.buildings.length + this.trees.length + this.cars.length;
    }

    // called by NPCManager when a zoomie buff cat etc slams near a building
    // nearest building within radius takes a hit -- flashes red, loses health, collapses at 0
    public damageBuildingNear(pos: THREE.Vector3, radius: number = 12): void {
        let closest: BuildingState | null = null;
        let closestDist = radius;

        for (const bs of this.buildingStates) {
            if (bs.rebuildTimer > 0) continue; // already collapsed, skip
            const dist = bs.obj.position.distanceTo(pos);
            if (dist < closestDist) {
                closestDist = dist;
                closest = bs;
            }
        }

        if (!closest) return;

        closest.health--;
        console.log(`%c🏚️ BUILDING HIT! health: ${closest.health}/${closest.maxHealth}`, 'color: orange');

        // flash red to show damage
        const flashColor = new THREE.Color(0xff2200);
        if (closest.obj instanceof THREE.Mesh && closest.obj.material instanceof THREE.MeshStandardMaterial) {
            closest.obj.material.color.set(flashColor);
        } else {
            (closest.obj as THREE.Group).traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.color.set(flashColor);
                }
            });
        }

        if (closest.health <= 0) {
            // COLLAPSE -- hide the building, start rebuild timer
            closest.obj.visible = false;
            closest.rebuildTimer = 60; // 60 seconds to rebuild
            console.log('%c🏚️💥 BUILDING DESTROYED!! rebuilding in 60 seconds', 'color: red; font-weight: bold');
        } else {
            // damaged color -- orange-ish as it takes hits
            const damagedColor = new THREE.Color().lerpColors(
                closest.originalColor,
                new THREE.Color(0xff4400),
                1 - (closest.health / closest.maxHealth),
            );
            setTimeout(() => {
                if (!closest) return;
                if (closest.obj instanceof THREE.Mesh && closest.obj.material instanceof THREE.MeshStandardMaterial) {
                    closest.obj.material.color.copy(damagedColor);
                }
            }, 200);
        }
    }

    // tick building rebuild timers -- call from update loop via updateDestructibles
    public updateDestructibles(deltaTime: number): void {
        for (const bs of this.buildingStates) {
            if (bs.rebuildTimer <= 0) continue;
            bs.rebuildTimer -= deltaTime;
            if (bs.rebuildTimer <= 0) {
                // REBUILT!! show it again and restore health
                bs.obj.visible = true;
                bs.health = bs.maxHealth;
                bs.rebuildTimer = 0;
                // restore original color
                if (bs.obj instanceof THREE.Mesh && bs.obj.material instanceof THREE.MeshStandardMaterial) {
                    bs.obj.material.color.copy(bs.originalColor);
                }
                console.log('%c🏗️ BUILDING REBUILT!!', 'color: cyan');
            }
        }
    }
}
