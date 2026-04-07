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

        // SPRAWLING INITIAL FORESTS -- 8 forest biomes placed around spawn~ the world starts LUSH
        const biomeTypes = ['dense_pine', 'ancient_oak', 'birch_grove', 'autumn_maple', 'weeping_willow', 'mixed_enchanted'];
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2 + Math.random() * 0.5;
            const distance = 120 + Math.random() * 300;
            const fx = Math.cos(angle) * distance;
            const fz = Math.sin(angle) * distance;
            const biome = biomeTypes[Math.floor(Math.random() * biomeTypes.length)];
            switch (biome) {
                case 'dense_pine': this.createDensePineForest(fx, fz); break;
                case 'ancient_oak': this.createAncientOakForest(fx, fz); break;
                case 'birch_grove': this.createBirchGrove(fx, fz); break;
                case 'autumn_maple': this.createAutumnMapleForest(fx, fz); break;
                case 'weeping_willow': this.createWeepingWillowSwamp(fx, fz); break;
                case 'mixed_enchanted': this.createEnchantedMixedForest(fx, fz); break;
            }
        }

        // sparse trees scattered wide (in addition to forests)
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

        // CONSTANT generation nyow~ fill da empty space baby! UwU 💕
        this.spawnTimer += deltaTime;
        if (this.spawnTimer >= 5) {  // every 5s for THICK world gen
            // cull structures that wandered too far from THE PLAYER (player-relative now, no more origin cage)
            this.cullFarStructures();

            // spawn rate gated by total count -- forests EVERYWHERE meow~
            const totalStructures = this.buildings.length + this.trees.length;
            if (totalStructures < 400) {  // 400 cap -- FILL THE WORLD WITH TREES AND FORESTS
                // 60% chance of forest biome, 15% trees, 25% other structures
                const roll = Math.random();
                if (roll < 0.60) {
                    this.generateForestBiomeNearPlayer();
                } else if (roll < 0.75) {
                    this.generateStructureNearPlayer();
                } else {
                    this.generateStructureNearPlayer();
                }
            }

            if (this.cars.length < 30) {  // MORE CARS EVERYWHERE -- no walls no rules no limits
                const angle = Math.random() * Math.PI * 2;
                const distance = 150 + Math.random() * 300;
                const x = this.lastPlayerPosition.x + Math.cos(angle) * distance;
                const z = this.lastPlayerPosition.z + Math.sin(angle) * distance;
                // no bounds check. the cars roam FREE now. like us. meow.
                this.createCar(x, z);
            }

            this.spawnTimer = 0;
        }

        // Animate cars
        for (const car of this.cars) {
            car.position.x += Math.sin(this.worldTime + car.position.z) * 0.05;
            car.position.z += Math.cos(this.worldTime + car.position.x) * 0.05;

            // cars go wherever they want now. no walls. no rules. purrr.

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

        // Animate trees and parks -- they sway in da wind~ meow meow~ 🌲✨
        for (const tree of this.trees) {
            // CONE TREES (pine) sway on x and z axis
            if (tree instanceof THREE.Mesh && tree.geometry instanceof THREE.ConeGeometry) {
                const sway = Math.sin(this.worldTime + tree.position.x * 0.1) * 0.02;
                const sway2 = Math.cos(this.worldTime * 0.8 + tree.position.z * 0.1) * 0.02;
                tree.rotation.z = sway;
                tree.rotation.x = sway2 * 0.5;
                // gentle color pulse~ uwu~
                if (tree.material instanceof THREE.MeshStandardMaterial) {
                    const pulse = 0.9 + Math.sin(this.worldTime * 0.5 + tree.position.x * 0.1) * 0.1;
                    tree.material.emissiveIntensity = 0.12 * pulse;
                }
            }
            // SPHERE FOLIAGE sway more subtly
            else if (tree instanceof THREE.Mesh && tree.geometry instanceof THREE.SphereGeometry) {
                const sway = Math.sin(this.worldTime * 0.7 + tree.position.x * 0.15) * 0.015;
                const sway2 = Math.cos(this.worldTime * 0.6 + tree.position.z * 0.15) * 0.015;
                tree.rotation.z = sway;
                tree.rotation.x = sway2 * 0.3;
                // pulse color intensity for depth~ meow~
                if (tree.material instanceof THREE.MeshStandardMaterial) {
                    const pulse = 0.85 + Math.sin(this.worldTime * 0.4 + tree.position.y * 0.2) * 0.15;
                    tree.material.emissiveIntensity = tree.material.emissiveIntensity * 0 + (tree.material.emissive.getHex() > 0 ? 0.15 * pulse : 0.1);
                }
            }
            // GRASS PLANES (forest floors) subtle shimmer
            else if (tree instanceof THREE.Mesh && tree.geometry instanceof THREE.PlaneGeometry) {
                if (tree.material instanceof THREE.MeshStandardMaterial) {
                    const shimmer = 0.95 + Math.sin(this.worldTime + tree.position.x * 0.1) * 0.05;
                    tree.material.color = new THREE.Color(0x3a6b3a).multiplyScalar(shimmer);
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

    // if da map gets too cluttered remove stuff far from THE PLAYER -- not origin. player-relative now. meow.
    private cullFarStructures(): void {
        const CULL_DIST = 600;  // cull stuff 600 units from player -- keeps performance tight while world sprawls~
        const px = this.lastPlayerPosition.x;
        const pz = this.lastPlayerPosition.z;
        const distFromPlayer = (obj: THREE.Object3D) => {
            const dx = obj.position.x - px;
            const dz = obj.position.z - pz;
            return Math.sqrt(dx * dx + dz * dz);
        };
        this.buildings = this.buildings.filter(b => {
            if (distFromPlayer(b) > CULL_DIST) { this.scene.remove(b); return false; }
            return true;
        });
        this.trees = this.trees.filter(t => {
            if (distFromPlayer(t) > CULL_DIST) { this.scene.remove(t); return false; }
            return true;
        });
        this.cars = this.cars.filter(c => {
            if (distFromPlayer(c) > CULL_DIST) { this.scene.remove(c); return false; }
            return true;
        });
        this.streetLights = this.streetLights.filter(l => {
            if (distFromPlayer(l) > CULL_DIST) { this.scene.remove(l); return false; }
            return true;
        });
        // sync buildingStates -- remove entries for culled buildings
        this.buildingStates = this.buildingStates.filter(bs => this.buildings.includes(bs.obj as any) || this.scene.children.includes(bs.obj));
    }

    private generateStructureNearPlayer(): void {
        // weighted toward trees and forests -- 40% tree, 15% forest, rest is structures
        const roll = Math.random();
        let randomType: string;
        if (roll < 0.40) randomType = 'tree';
        else if (roll < 0.55) randomType = 'forest';
        else if (roll < 0.65) randomType = 'building';
        else if (roll < 0.75) randomType = 'tower';
        else if (roll < 0.85) randomType = 'monument';
        else if (roll < 0.92) randomType = 'park';
        else randomType = 'bridge';

        const angle = Math.random() * Math.PI * 2;
        // spawn further away so theres room to breathe nyaa~
        const distance = 150 + Math.random() * 350;
        const x = this.lastPlayerPosition.x + Math.cos(angle) * distance;
        const z = this.lastPlayerPosition.z + Math.sin(angle) * distance;

        // NO MORE CONSTRAINING!! the world expands infinitely wherever u go~ meow~
        switch (randomType) {
            case 'building':
                this.createBuilding(x, z);
                break;
            case 'tree':
                this.createTree(x, z);
                break;
            case 'forest':
                this.createForest(x, z);
                break;
            case 'city':
                this.createCity(x, z);
                break;
            case 'car':
                this.createCar(x, z);
                break;
            case 'tower':
                this.createTower(x, z);
                break;
            case 'monument':
                this.createMonument(x, z);
                break;
            case 'park':
                this.createPark(x, z);
                break;
            case 'bridge':
                this.createBridge(x, z);
                break;
        }
    }

    // FOREST BIOME SPAWNER -- da big one~~ spawns a whole themed forest biome near the player 🌲🌳🍂
    private generateForestBiomeNearPlayer(): void {
        const angle = Math.random() * Math.PI * 2;
        const distance = 200 + Math.random() * 400;
        const x = this.lastPlayerPosition.x + Math.cos(angle) * distance;
        const z = this.lastPlayerPosition.z + Math.sin(angle) * distance;

        // pick a biome type for this entire forest cluster -- each biome has its own vibe
        const biomes = ['dense_pine', 'ancient_oak', 'birch_grove', 'autumn_maple', 'weeping_willow', 'mixed_enchanted'];
        const biome = biomes[Math.floor(Math.random() * biomes.length)];

        switch (biome) {
            case 'dense_pine': this.createDensePineForest(x, z); break;
            case 'ancient_oak': this.createAncientOakForest(x, z); break;
            case 'birch_grove': this.createBirchGrove(x, z); break;
            case 'autumn_maple': this.createAutumnMapleForest(x, z); break;
            case 'weeping_willow': this.createWeepingWillowSwamp(x, z); break;
            case 'mixed_enchanted': this.createEnchantedMixedForest(x, z); break;
        }
    }

    private createGround(): void {
        // INFINITE FEELING ground plane -- 20000 units each side. the realm NEVER ENDS nyaa~
        const groundGeometry = new THREE.PlaneGeometry(20000, 20000);
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

    private createTree(x: number, z: number, treeType?: string): void {
        // pick a random type if not specified~ UwU~
        const type = treeType || ['oak', 'pine', 'willow', 'birch', 'maple'][Math.floor(Math.random() * 5)];
        
        // dispatch to specialized tree creator
        switch (type) {
            case 'oak': this.createOakTree(x, z); break;
            case 'pine': this.createPineTree(x, z); break;
            case 'willow': this.createWillowTree(x, z); break;
            case 'birch': this.createBirchTree(x, z); break;
            case 'maple': this.createMapleTree(x, z); break;
        }
    }

    private createOakTree(x: number, z: number): void {
        // THICC OAK -- short, wide, powerful. like a bear. meow.
        // thick lathe trunk with many taper points
        const trunkPoints = [
            new THREE.Vector2(1.8, 0),
            new THREE.Vector2(1.7, 0.5),
            new THREE.Vector2(1.6, 1.2),
            new THREE.Vector2(1.5, 2),
            new THREE.Vector2(1.3, 3),
            new THREE.Vector2(1.0, 4),
            new THREE.Vector2(0.7, 5),
            new THREE.Vector2(0.4, 6),
            new THREE.Vector2(0.1, 6.5),
        ];
        const trunkGeometry = new THREE.LatheGeometry(trunkPoints, 16);  // 16 segments = more detail~
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x654321, roughness: 0.8 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(x, 0, z);
        trunk.castShadow = true;
        trunk.receiveShadow = true;
        this.scene.add(trunk);

        // multiple foliage spheres for dat full oak crown~ UwU~ 💕
        const foliageColor = 0x2d5016;  // dark forest green
        for (let i = 0; i < 3; i++) {
            const foliageGeometry = new THREE.SphereGeometry(5 - i * 0.8, 12, 12);  // more segments = smoother
            const foliageMaterial = new THREE.MeshStandardMaterial({ 
                color: foliageColor, 
                roughness: 0.7,
                emissive: 0x1a3d0a,
                emissiveIntensity: 0.2
            });
            const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
            foliage.position.set(x, 7 + i * 1.5, z);
            foliage.castShadow = true;
            foliage.receiveShadow = true;
            this.scene.add(foliage);
            this.trees.push(foliage);
        }
        this.trees.push(trunk);
    }

    private createPineTree(x: number, z: number): void {
        // TALL PINE -- skinny, pointy, reaches for da sky~ nyaa~
        const trunkPoints = [
            new THREE.Vector2(1.0, 0),
            new THREE.Vector2(0.95, 1),
            new THREE.Vector2(0.9, 2),
            new THREE.Vector2(0.85, 3),
            new THREE.Vector2(0.75, 4),
            new THREE.Vector2(0.6, 5),
            new THREE.Vector2(0.4, 6),
            new THREE.Vector2(0.2, 7),
            new THREE.Vector2(0.05, 8),
        ];
        const trunkGeometry = new THREE.LatheGeometry(trunkPoints, 12);
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x5c4d3d, roughness: 0.85 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(x, 0, z);
        trunk.castShadow = true;
        trunk.receiveShadow = true;
        this.scene.add(trunk);

        // stacked cone-like foliage for pine shape~ meow meow~ 🌲
        const foliageColor = 0x1a3d2a;  // deep dark green
        const coneHeights = [3, 4.5, 5.5, 6, 6.2];
        const coneRadii = [4, 3.5, 2.8, 1.8, 0.8];
        
        for (let i = 0; i < coneHeights.length; i++) {
            const coneGeo = new THREE.ConeGeometry(coneRadii[i], coneHeights[i], 16);
            const coneMat = new THREE.MeshStandardMaterial({ 
                color: foliageColor,
                roughness: 0.75,
                emissive: 0x0d2615,
                emissiveIntensity: 0.15
            });
            const cone = new THREE.Mesh(coneGeo, coneMat);
            cone.position.set(x, 8 + i * 2.2, z);
            cone.castShadow = true;
            cone.receiveShadow = true;
            this.scene.add(cone);
            this.trees.push(cone);
        }
        this.trees.push(trunk);
    }

    private createWillowTree(x: number, z: number): void {
        // DROOPY WILLOW -- sad boi energy. drapes down~ ❤️
        const trunkPoints = [
            new THREE.Vector2(1.2, 0),
            new THREE.Vector2(1.15, 1),
            new THREE.Vector2(1.0, 2.5),
            new THREE.Vector2(0.8, 4),
            new THREE.Vector2(0.5, 5.5),
            new THREE.Vector2(0.2, 7),
        ];
        const trunkGeometry = new THREE.LatheGeometry(trunkPoints, 14);
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x6b5d4f, roughness: 0.8 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(x, 0, z);
        trunk.castShadow = true;
        trunk.receiveShadow = true;
        this.scene.add(trunk);

        // big droopy foliage ball~ meow~
        const foliageColor = 0x556b2f;  // olive green
        const foliageGeo = new THREE.SphereGeometry(7, 14, 14);
        const foliageMat = new THREE.MeshStandardMaterial({ 
            color: foliageColor,
            roughness: 0.65,
            emissive: 0x2d3d1a,
            emissiveIntensity: 0.1
        });
        const foliage = new THREE.Mesh(foliageGeo, foliageMat);
        foliage.position.set(x, 6, z);
        foliage.scale.set(1, 1.3, 1);  // taller ball
        foliage.castShadow = true;
        foliage.receiveShadow = true;
        this.scene.add(foliage);
        this.trees.push(foliage);
        this.trees.push(trunk);
    }

    private createBirchTree(x: number, z: number): void {
        // GRACEFUL BIRCH -- white bark, elegant. fancy boi~ UwU~
        const trunkPoints = [
            new THREE.Vector2(0.9, 0),
            new THREE.Vector2(0.88, 1),
            new THREE.Vector2(0.85, 2),
            new THREE.Vector2(0.82, 3),
            new THREE.Vector2(0.75, 4),
            new THREE.Vector2(0.65, 5),
            new THREE.Vector2(0.5, 6),
            new THREE.Vector2(0.3, 7),
            new THREE.Vector2(0.1, 8),
        ];
        const trunkGeometry = new THREE.LatheGeometry(trunkPoints, 16);
        const trunkMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xf5f5f0,  // pale white bark
            roughness: 0.9,
            metalness: 0.0
        });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(x, 0, z);
        trunk.castShadow = true;
        trunk.receiveShadow = true;
        this.scene.add(trunk);

        // fine delicate foliage spheres~ meow meow~ 💕
        const foliageColor = 0x8fbc8f;  // light green
        for (let i = 0; i < 2; i++) {
            const foliageGeo = new THREE.SphereGeometry(4.5 - i * 1, 14, 14);
            const foliageMat = new THREE.MeshStandardMaterial({ 
                color: foliageColor,
                roughness: 0.65,
                emissive: 0x4a7c4a,
                emissiveIntensity: 0.12
            });
            const foliage = new THREE.Mesh(foliageGeo, foliageMat);
            foliage.position.set(x, 7.5 + i * 2, z);
            foliage.castShadow = true;
            foliage.receiveShadow = true;
            this.scene.add(foliage);
            this.trees.push(foliage);
        }
        this.trees.push(trunk);
    }

    private createMapleTree(x: number, z: number): void {
        // VIBRANT MAPLE -- autumn colors, round, gorgeous~ 🍂
        const trunkPoints = [
            new THREE.Vector2(1.1, 0),
            new THREE.Vector2(1.05, 1),
            new THREE.Vector2(0.95, 2),
            new THREE.Vector2(0.85, 3),
            new THREE.Vector2(0.7, 4),
            new THREE.Vector2(0.5, 5),
            new THREE.Vector2(0.25, 6),
        ];
        const trunkGeometry = new THREE.LatheGeometry(trunkPoints, 16);
        const trunkMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x704d26,
            roughness: 0.8,
            emissive: 0x3d2915,
            emissiveIntensity: 0.1
        });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(x, 0, z);
        trunk.castShadow = true;
        trunk.receiveShadow = true;
        this.scene.add(trunk);

        // round vibrant foliage~ autumn reds and oranges~ UwU~ 💕
        const colors = [0xcc4400, 0xff6600, 0xdd5500];  // autumn orange-reds
        for (let i = 0; i < 3; i++) {
            const foliageGeo = new THREE.SphereGeometry(4.5 - i * 0.6, 13, 13);
            const foliageMat = new THREE.MeshStandardMaterial({ 
                color: colors[i],
                roughness: 0.7,
                emissive: colors[i],
                emissiveIntensity: 0.15
            });
            const foliage = new THREE.Mesh(foliageGeo, foliageMat);
            foliage.position.set(x, 7 + i * 1.3, z);
            foliage.castShadow = true;
            foliage.receiveShadow = true;
            this.scene.add(foliage);
            this.trees.push(foliage);
        }
        this.trees.push(trunk);
    }

    // SPRAWLING FOREST CREATOR -- plants a whole forest cluster~ meow meow~ 🌲🌲🌲
    private createForest(x: number, z: number): void {
        const forestSize = 40;  // 40x40 unit forest area
        const treeCount = 12 + Math.random() * 15;  // 12-27 trees per forest~ DENSE~
        
        // Create grass clearing
        const grassGeo = new THREE.PlaneGeometry(forestSize * 2.2, forestSize * 2.2);
        const grassMat = new THREE.MeshStandardMaterial({ color: 0x3a6b3a });  // darker forest floor
        const grassMesh = new THREE.Mesh(grassGeo, grassMat);
        grassMesh.rotation.x = -Math.PI / 2;
        grassMesh.position.set(x, 0.01, z);
        grassMesh.castShadow = true;
        grassMesh.receiveShadow = true;
        this.scene.add(grassMesh);

        // PLANT THOSE TREES EVERYWHERE~ sprawling forest vibes~ UwU~
        const treeTypes = ['oak', 'pine', 'willow', 'birch', 'maple'];
        for (let i = 0; i < treeCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * forestSize;
            const treeX = x + Math.cos(angle) * distance;
            const treeZ = z + Math.sin(angle) * distance;
            
            // 50% chance of each tree type -- varies da forest~ meow~
            const treeType = treeTypes[Math.floor(Math.random() * treeTypes.length)];
            this.createTree(treeX, treeZ, treeType);
        }
        this.trees.push(grassMesh);
    }

    // ========================================================================
    // FOREST BIOME SYSTEM -- 6 distinct forest types with unique vibes~ 🌲🌳🍂
    // each one is its own whole vibe. different trees. different colors. different energy.
    // the conspiracy theorist in me says these forests appeared overnight. suspicious.
    // ========================================================================

    // DENSE PINE FOREST -- tall dark pines packed together. mysterious. kinda spooky. love it.
    private createDensePineForest(cx: number, cz: number): void {
        const forestRadius = 50 + Math.random() * 40;
        const treeCount = 25 + Math.floor(Math.random() * 20);

        // dark mossy forest floor
        const floorGeo = new THREE.CircleGeometry(forestRadius * 1.2, 24);
        const floorMat = new THREE.MeshStandardMaterial({ color: 0x1a3a1a, roughness: 0.95 });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.set(cx, 0.02, cz);
        floor.receiveShadow = true;
        this.scene.add(floor);
        this.trees.push(floor);

        for (let i = 0; i < treeCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius;
            const tx = cx + Math.cos(angle) * dist;
            const tz = cz + Math.sin(angle) * dist;

            // tall skinny pine trunks with lots of detail
            const heightVar = 0.7 + Math.random() * 0.6; // height variation so they dont all look the same ugh
            const trunkPoints = [
                new THREE.Vector2(1.2 * heightVar, 0),
                new THREE.Vector2(1.1 * heightVar, 1),
                new THREE.Vector2(1.0 * heightVar, 2),
                new THREE.Vector2(0.9 * heightVar, 3.5),
                new THREE.Vector2(0.7 * heightVar, 5),
                new THREE.Vector2(0.5 * heightVar, 7),
                new THREE.Vector2(0.3 * heightVar, 9),
                new THREE.Vector2(0.15 * heightVar, 10),
                new THREE.Vector2(0.05 * heightVar, 11),
            ];
            const trunkGeo = new THREE.LatheGeometry(trunkPoints, 10);
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3d2b1f, roughness: 0.9 });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(tx, 0, tz);
            trunk.castShadow = true;
            trunk.receiveShadow = true;
            this.scene.add(trunk);
            this.trees.push(trunk);

            // stacked dark cones -- DENSE pine foliage
            const baseH = 6 * heightVar;
            const layers = 4 + Math.floor(Math.random() * 3);
            for (let j = 0; j < layers; j++) {
                const coneR = (4.5 - j * 0.7) * heightVar;
                const coneH = (3.5 - j * 0.3) * heightVar;
                if (coneR < 0.3) continue;
                const coneGeo = new THREE.ConeGeometry(coneR, coneH, 12);
                // vary the green slightly per layer -- depth baby
                const greenShift = 0.08 + Math.random() * 0.04;
                const coneMat = new THREE.MeshStandardMaterial({
                    color: new THREE.Color().setHSL(0.35 + Math.random() * 0.03, 0.6, greenShift + 0.05),
                    roughness: 0.8,
                    emissive: new THREE.Color(0x0a1a0a),
                    emissiveIntensity: 0.1
                });
                const cone = new THREE.Mesh(coneGeo, coneMat);
                cone.position.set(tx, baseH + j * 2.5 * heightVar, tz);
                cone.castShadow = true;
                cone.receiveShadow = true;
                this.scene.add(cone);
                this.trees.push(cone);
            }
        }

        // scatter some undergrowth bushes -- tiny green spheres on the floor
        for (let i = 0; i < 15; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius * 0.8;
            const bx = cx + Math.cos(angle) * dist;
            const bz = cz + Math.sin(angle) * dist;
            const bushSize = 0.5 + Math.random() * 1.2;
            const bushGeo = new THREE.SphereGeometry(bushSize, 8, 6);
            const bushMat = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(0.3 + Math.random() * 0.05, 0.5, 0.15),
                roughness: 0.9
            });
            const bush = new THREE.Mesh(bushGeo, bushMat);
            bush.position.set(bx, bushSize * 0.5, bz);
            bush.castShadow = true;
            this.scene.add(bush);
            this.trees.push(bush);
        }
    }

    // ANCIENT OAK FOREST -- massive old oaks with thick trunks and huge canopies. grandpa energy.
    private createAncientOakForest(cx: number, cz: number): void {
        const forestRadius = 60 + Math.random() * 50;
        const treeCount = 15 + Math.floor(Math.random() * 12); // fewer but BIGGER

        // rich earthy forest floor
        const floorGeo = new THREE.CircleGeometry(forestRadius * 1.3, 24);
        const floorMat = new THREE.MeshStandardMaterial({ color: 0x2a4a1a, roughness: 0.95 });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.set(cx, 0.02, cz);
        floor.receiveShadow = true;
        this.scene.add(floor);
        this.trees.push(floor);

        for (let i = 0; i < treeCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius;
            const tx = cx + Math.cos(angle) * dist;
            const tz = cz + Math.sin(angle) * dist;

            // MASSIVE thick trunks -- these are ANCIENT boys
            const scale = 1.0 + Math.random() * 0.8;
            const trunkPoints = [
                new THREE.Vector2(2.8 * scale, 0),
                new THREE.Vector2(2.6 * scale, 0.5),
                new THREE.Vector2(2.3 * scale, 1.5),
                new THREE.Vector2(2.0 * scale, 3),
                new THREE.Vector2(1.6 * scale, 4.5),
                new THREE.Vector2(1.2 * scale, 6),
                new THREE.Vector2(0.8 * scale, 7.5),
                new THREE.Vector2(0.4 * scale, 8.5),
                new THREE.Vector2(0.15 * scale, 9),
            ];
            const trunkGeo = new THREE.LatheGeometry(trunkPoints, 16);
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3520, roughness: 0.85 });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(tx, 0, tz);
            trunk.castShadow = true;
            trunk.receiveShadow = true;
            this.scene.add(trunk);
            this.trees.push(trunk);

            // BIG CANOPY -- 3-5 overlapping spheres for that thicc oak crown
            const canopyLayers = 3 + Math.floor(Math.random() * 3);
            for (let j = 0; j < canopyLayers; j++) {
                const foliageR = (6 + Math.random() * 3) * scale;
                const offsetX = (Math.random() - 0.5) * 3 * scale;
                const offsetZ = (Math.random() - 0.5) * 3 * scale;
                const foliageGeo = new THREE.SphereGeometry(foliageR, 14, 12);
                const darkGreen = new THREE.Color().setHSL(0.28 + Math.random() * 0.06, 0.55, 0.12 + Math.random() * 0.06);
                const foliageMat = new THREE.MeshStandardMaterial({
                    color: darkGreen,
                    roughness: 0.75,
                    emissive: new THREE.Color(0x0d1f0a),
                    emissiveIntensity: 0.15 + Math.random() * 0.1
                });
                const foliage = new THREE.Mesh(foliageGeo, foliageMat);
                foliage.position.set(tx + offsetX, 8 * scale + j * 1.8, tz + offsetZ);
                foliage.castShadow = true;
                foliage.receiveShadow = true;
                this.scene.add(foliage);
                this.trees.push(foliage);
            }

            // exposed roots at the base -- gnarled ancient roots that stick out
            const rootCount = 2 + Math.floor(Math.random() * 4);
            for (let r = 0; r < rootCount; r++) {
                const rootAngle = (r / rootCount) * Math.PI * 2 + Math.random() * 0.5;
                const rootLen = 2 + Math.random() * 3;
                const rootGeo = new THREE.CylinderGeometry(0.15 * scale, 0.4 * scale, rootLen, 6);
                const rootMat = new THREE.MeshStandardMaterial({ color: 0x3d2a15, roughness: 0.9 });
                const root = new THREE.Mesh(rootGeo, rootMat);
                root.position.set(
                    tx + Math.cos(rootAngle) * 1.5 * scale,
                    0.3,
                    tz + Math.sin(rootAngle) * 1.5 * scale
                );
                root.rotation.z = Math.cos(rootAngle) * 0.6;
                root.rotation.x = Math.sin(rootAngle) * 0.6;
                this.scene.add(root);
                this.trees.push(root);
            }
        }

        // moss rocks scattered around -- spheres with rock texture colors
        for (let i = 0; i < 10; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius;
            const rx = cx + Math.cos(angle) * dist;
            const rz = cz + Math.sin(angle) * dist;
            const rockSize = 0.8 + Math.random() * 1.5;
            const rockGeo = new THREE.DodecahedronGeometry(rockSize, 1);
            const rockMat = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(0.25, 0.2, 0.25 + Math.random() * 0.1),
                roughness: 0.95
            });
            const rock = new THREE.Mesh(rockGeo, rockMat);
            rock.position.set(rx, rockSize * 0.3, rz);
            rock.rotation.set(Math.random(), Math.random(), Math.random());
            this.scene.add(rock);
            this.trees.push(rock);
        }
    }

    // BIRCH GROVE -- elegant white birches in a light airy forest. fairy vibes. uwu.
    private createBirchGrove(cx: number, cz: number): void {
        const forestRadius = 45 + Math.random() * 35;
        const treeCount = 20 + Math.floor(Math.random() * 15);

        // light grassy floor with flowers maybe
        const floorGeo = new THREE.CircleGeometry(forestRadius * 1.2, 24);
        const floorMat = new THREE.MeshStandardMaterial({ color: 0x4a7a3a, roughness: 0.9 });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.set(cx, 0.02, cz);
        floor.receiveShadow = true;
        this.scene.add(floor);
        this.trees.push(floor);

        for (let i = 0; i < treeCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius;
            const tx = cx + Math.cos(angle) * dist;
            const tz = cz + Math.sin(angle) * dist;

            // slender white trunks -- the signature birch look
            const heightScale = 0.8 + Math.random() * 0.5;
            const trunkPoints = [
                new THREE.Vector2(0.7 * heightScale, 0),
                new THREE.Vector2(0.65 * heightScale, 1),
                new THREE.Vector2(0.6 * heightScale, 2.5),
                new THREE.Vector2(0.55 * heightScale, 4),
                new THREE.Vector2(0.45 * heightScale, 6),
                new THREE.Vector2(0.35 * heightScale, 7.5),
                new THREE.Vector2(0.2 * heightScale, 9),
                new THREE.Vector2(0.08 * heightScale, 10.5),
            ];
            const trunkGeo = new THREE.LatheGeometry(trunkPoints, 12);
            // white-ish bark with slight warm tint
            const barkWhite = 0.85 + Math.random() * 0.1;
            const trunkMat = new THREE.MeshStandardMaterial({
                color: new THREE.Color(barkWhite, barkWhite - 0.05, barkWhite - 0.1),
                roughness: 0.85,
                metalness: 0.0
            });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(tx, 0, tz);
            trunk.castShadow = true;
            trunk.receiveShadow = true;
            this.scene.add(trunk);
            this.trees.push(trunk);

            // dark horizontal bark marks on birch -- represented by small flat rings on trunk
            for (let m = 0; m < 4; m++) {
                const markH = 1 + Math.random() * 7;
                const markGeo = new THREE.TorusGeometry(0.55 * heightScale, 0.04, 4, 12);
                const markMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a });
                const mark = new THREE.Mesh(markGeo, markMat);
                mark.position.set(tx, markH, tz);
                mark.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.1;
                this.scene.add(mark);
                this.trees.push(mark);
            }

            // light airy foliage -- multiple small spheres for that delicate birch canopy
            const foliageClusters = 2 + Math.floor(Math.random() * 3);
            for (let j = 0; j < foliageClusters; j++) {
                const fr = (3.5 + Math.random() * 2) * heightScale;
                const ox = (Math.random() - 0.5) * 2.5;
                const oz = (Math.random() - 0.5) * 2.5;
                const foliageGeo = new THREE.SphereGeometry(fr, 12, 10);
                const lightGreen = new THREE.Color().setHSL(0.32 + Math.random() * 0.05, 0.5, 0.35 + Math.random() * 0.15);
                const foliageMat = new THREE.MeshStandardMaterial({
                    color: lightGreen,
                    roughness: 0.6,
                    emissive: new THREE.Color(0x2a4a2a),
                    emissiveIntensity: 0.08
                });
                const foliage = new THREE.Mesh(foliageGeo, foliageMat);
                foliage.position.set(tx + ox, 9 * heightScale + j * 1.5, tz + oz);
                foliage.castShadow = true;
                foliage.receiveShadow = true;
                this.scene.add(foliage);
                this.trees.push(foliage);
            }
        }

        // wildflower patches -- tiny colored spheres on the ground
        for (let i = 0; i < 20; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius;
            const fx = cx + Math.cos(angle) * dist;
            const fz = cz + Math.sin(angle) * dist;
            const flowerColors = [0xff69b4, 0xffb6c1, 0xe6e6fa, 0xffd700, 0xffffff, 0x87ceeb];
            const flowerGeo = new THREE.SphereGeometry(0.2 + Math.random() * 0.3, 6, 6);
            const flowerMat = new THREE.MeshStandardMaterial({
                color: flowerColors[Math.floor(Math.random() * flowerColors.length)],
                emissive: 0xffffff,
                emissiveIntensity: 0.1
            });
            const flower = new THREE.Mesh(flowerGeo, flowerMat);
            flower.position.set(fx, 0.2, fz);
            this.scene.add(flower);
            this.trees.push(flower);
        }
    }

    // AUTUMN MAPLE FOREST -- FIRE colors. reds oranges golds. fall vibes. nobody asked. we delivered.
    private createAutumnMapleForest(cx: number, cz: number): void {
        const forestRadius = 50 + Math.random() * 40;
        const treeCount = 18 + Math.floor(Math.random() * 14);

        // warm autumn leaf-covered floor
        const floorGeo = new THREE.CircleGeometry(forestRadius * 1.2, 24);
        const floorMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color().setHSL(0.08, 0.5, 0.3),
            roughness: 0.95
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.set(cx, 0.02, cz);
        floor.receiveShadow = true;
        this.scene.add(floor);
        this.trees.push(floor);

        for (let i = 0; i < treeCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius;
            const tx = cx + Math.cos(angle) * dist;
            const tz = cz + Math.sin(angle) * dist;

            const scale = 0.8 + Math.random() * 0.5;
            const trunkPoints = [
                new THREE.Vector2(1.4 * scale, 0),
                new THREE.Vector2(1.3 * scale, 0.8),
                new THREE.Vector2(1.15 * scale, 2),
                new THREE.Vector2(1.0 * scale, 3.5),
                new THREE.Vector2(0.8 * scale, 5),
                new THREE.Vector2(0.55 * scale, 6.5),
                new THREE.Vector2(0.25 * scale, 7.5),
                new THREE.Vector2(0.08 * scale, 8),
            ];
            const trunkGeo = new THREE.LatheGeometry(trunkPoints, 14);
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5a3a1a, roughness: 0.85 });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(tx, 0, tz);
            trunk.castShadow = true;
            trunk.receiveShadow = true;
            this.scene.add(trunk);
            this.trees.push(trunk);

            // FIRE COLORED canopy -- 3-4 overlapping spheres in reds/oranges/golds
            const autumnColors = [
                new THREE.Color(0xcc2200), // deep red
                new THREE.Color(0xff5500), // orange
                new THREE.Color(0xff8800), // amber
                new THREE.Color(0xffaa00), // gold
                new THREE.Color(0xdd3300), // crimson
                new THREE.Color(0xee6600), // warm orange
            ];
            const canopyLayers = 3 + Math.floor(Math.random() * 2);
            for (let j = 0; j < canopyLayers; j++) {
                const foliageR = (4 + Math.random() * 2.5) * scale;
                const ox = (Math.random() - 0.5) * 2 * scale;
                const oz = (Math.random() - 0.5) * 2 * scale;
                const chosenColor = autumnColors[Math.floor(Math.random() * autumnColors.length)];
                const foliageGeo = new THREE.SphereGeometry(foliageR, 13, 11);
                const foliageMat = new THREE.MeshStandardMaterial({
                    color: chosenColor,
                    roughness: 0.7,
                    emissive: chosenColor,
                    emissiveIntensity: 0.12 + Math.random() * 0.08
                });
                const foliage = new THREE.Mesh(foliageGeo, foliageMat);
                foliage.position.set(tx + ox, 7 * scale + j * 1.5, tz + oz);
                foliage.castShadow = true;
                foliage.receiveShadow = true;
                this.scene.add(foliage);
                this.trees.push(foliage);
            }
        }

        // fallen leaves on the ground -- little flat circles in autumn colors
        for (let i = 0; i < 30; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius;
            const lx = cx + Math.cos(angle) * dist;
            const lz = cz + Math.sin(angle) * dist;
            const leafGeo = new THREE.CircleGeometry(0.15 + Math.random() * 0.2, 6);
            const leafColors = [0xcc3300, 0xff6600, 0xffaa00, 0xdd4400, 0xbb2200];
            const leafMat = new THREE.MeshStandardMaterial({
                color: leafColors[Math.floor(Math.random() * leafColors.length)],
                side: THREE.DoubleSide
            });
            const leaf = new THREE.Mesh(leafGeo, leafMat);
            leaf.position.set(lx, 0.05 + Math.random() * 0.1, lz);
            leaf.rotation.x = -Math.PI / 2 + (Math.random() - 0.5) * 0.3;
            leaf.rotation.z = Math.random() * Math.PI;
            this.scene.add(leaf);
            this.trees.push(leaf);
        }
    }

    // WEEPING WILLOW SWAMP -- droopy willows over dark water. melancholic. emo vibes. i wuv it.
    private createWeepingWillowSwamp(cx: number, cz: number): void {
        const forestRadius = 55 + Math.random() * 35;
        const treeCount = 10 + Math.floor(Math.random() * 8); // fewer trees but they're BIG

        // dark swampy water floor
        const floorGeo = new THREE.CircleGeometry(forestRadius * 1.3, 28);
        const floorMat = new THREE.MeshStandardMaterial({
            color: 0x1a2a20,
            roughness: 0.3,
            metalness: 0.4  // slightly reflective like water
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.set(cx, 0.01, cz);
        floor.receiveShadow = true;
        this.scene.add(floor);
        this.trees.push(floor);

        for (let i = 0; i < treeCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius;
            const tx = cx + Math.cos(angle) * dist;
            const tz = cz + Math.sin(angle) * dist;

            const scale = 1.0 + Math.random() * 0.6;
            // thick gnarly willow trunk
            const trunkPoints = [
                new THREE.Vector2(1.8 * scale, 0),
                new THREE.Vector2(1.7 * scale, 0.5),
                new THREE.Vector2(1.5 * scale, 1.5),
                new THREE.Vector2(1.2 * scale, 3),
                new THREE.Vector2(0.9 * scale, 5),
                new THREE.Vector2(0.6 * scale, 7),
                new THREE.Vector2(0.3 * scale, 8.5),
                new THREE.Vector2(0.1 * scale, 9.5),
            ];
            const trunkGeo = new THREE.LatheGeometry(trunkPoints, 14);
            const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a4035, roughness: 0.9 });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(tx, 0, tz);
            trunk.castShadow = true;
            trunk.receiveShadow = true;
            this.scene.add(trunk);
            this.trees.push(trunk);

            // MASSIVE droopy foliage -- stretched vertically for that weeping look
            const foliageGeo = new THREE.SphereGeometry(8 * scale, 16, 14);
            const foliageMat = new THREE.MeshStandardMaterial({
                color: new THREE.Color().setHSL(0.25 + Math.random() * 0.05, 0.45, 0.2),
                roughness: 0.7,
                emissive: new THREE.Color(0x1a2a10),
                emissiveIntensity: 0.08
            });
            const foliage = new THREE.Mesh(foliageGeo, foliageMat);
            foliage.position.set(tx, 7 * scale, tz);
            foliage.scale.set(1, 1.6, 1); // stretched tall for droopy curtain effect
            foliage.castShadow = true;
            foliage.receiveShadow = true;
            this.scene.add(foliage);
            this.trees.push(foliage);

            // hanging vine strands -- cylinder tendrils draping down from canopy
            const vineCount = 4 + Math.floor(Math.random() * 5);
            for (let v = 0; v < vineCount; v++) {
                const vineAngle = (v / vineCount) * Math.PI * 2 + Math.random() * 0.5;
                const vineLen = 4 + Math.random() * 6;
                const vineGeo = new THREE.CylinderGeometry(0.05, 0.08, vineLen, 4);
                const vineMat = new THREE.MeshStandardMaterial({
                    color: new THREE.Color().setHSL(0.28, 0.4, 0.15 + Math.random() * 0.05)
                });
                const vine = new THREE.Mesh(vineGeo, vineMat);
                vine.position.set(
                    tx + Math.cos(vineAngle) * 3 * scale,
                    7 * scale - vineLen * 0.3,
                    tz + Math.sin(vineAngle) * 3 * scale
                );
                vine.rotation.z = Math.cos(vineAngle) * 0.15;
                vine.rotation.x = Math.sin(vineAngle) * 0.15;
                this.scene.add(vine);
                this.trees.push(vine);
            }
        }

        // lily pads -- flat green circles on the swamp floor
        for (let i = 0; i < 12; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius * 0.9;
            const lx = cx + Math.cos(angle) * dist;
            const lz = cz + Math.sin(angle) * dist;
            const padGeo = new THREE.CircleGeometry(0.5 + Math.random() * 0.8, 12);
            const padMat = new THREE.MeshStandardMaterial({
                color: 0x3a7a3a,
                side: THREE.DoubleSide
            });
            const pad = new THREE.Mesh(padGeo, padMat);
            pad.position.set(lx, 0.04, lz);
            pad.rotation.x = -Math.PI / 2;
            this.scene.add(pad);
            this.trees.push(pad);
        }
    }

    // ENCHANTED MIXED FOREST -- all tree types thrown together. magical. chaotic. PERFECT.
    private createEnchantedMixedForest(cx: number, cz: number): void {
        const forestRadius = 65 + Math.random() * 45;
        const treeCount = 22 + Math.floor(Math.random() * 18);

        // mystical purple-tinted floor -- enchanted vibes
        const floorGeo = new THREE.CircleGeometry(forestRadius * 1.2, 28);
        const floorMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color().setHSL(0.75, 0.15, 0.25),
            roughness: 0.85,
            emissive: new THREE.Color(0x1a0a2a),
            emissiveIntensity: 0.05
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.set(cx, 0.02, cz);
        floor.receiveShadow = true;
        this.scene.add(floor);
        this.trees.push(floor);

        // mix of ALL tree types -- chaos forest UwU
        const treeTypes = ['oak', 'pine', 'willow', 'birch', 'maple'];
        for (let i = 0; i < treeCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius;
            const tx = cx + Math.cos(angle) * dist;
            const tz = cz + Math.sin(angle) * dist;
            this.createTree(tx, tz, treeTypes[Math.floor(Math.random() * treeTypes.length)]);
        }

        // glowing mushrooms scattered around -- because ENCHANTED
        for (let i = 0; i < 15; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius;
            const mx = cx + Math.cos(angle) * dist;
            const mz = cz + Math.sin(angle) * dist;

            // mushroom stem
            const stemGeo = new THREE.CylinderGeometry(0.12, 0.18, 0.5 + Math.random() * 0.5, 6);
            const stemMat = new THREE.MeshStandardMaterial({ color: 0xf5f0e0 });
            const stem = new THREE.Mesh(stemGeo, stemMat);
            const mushH = 0.3;
            stem.position.set(mx, mushH, mz);
            this.scene.add(stem);
            this.trees.push(stem);

            // mushroom cap -- glowing
            const capGeo = new THREE.SphereGeometry(0.3 + Math.random() * 0.3, 8, 6);
            const glowColors = [0x00ffaa, 0xff44ff, 0x44aaff, 0xffff44, 0xff6644];
            const capColor = glowColors[Math.floor(Math.random() * glowColors.length)];
            const capMat = new THREE.MeshStandardMaterial({
                color: capColor,
                emissive: capColor,
                emissiveIntensity: 0.5 + Math.random() * 0.3
            });
            const cap = new THREE.Mesh(capGeo, capMat);
            cap.position.set(mx, mushH + 0.4, mz);
            cap.scale.set(1, 0.5, 1); // squished sphere = mushroom cap shape
            this.scene.add(cap);
            this.trees.push(cap);
        }

        // fairy light particles -- tiny glowing orbs floating in the forest
        for (let i = 0; i < 10; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * forestRadius * 0.8;
            const fx = cx + Math.cos(angle) * dist;
            const fz = cz + Math.sin(angle) * dist;
            const fy = 2 + Math.random() * 6;
            const orbGeo = new THREE.SphereGeometry(0.1 + Math.random() * 0.15, 6, 6);
            const orbColors = [0x88ffff, 0xffaaff, 0xaaffaa, 0xffffaa];
            const orbColor = orbColors[Math.floor(Math.random() * orbColors.length)];
            const orbMat = new THREE.MeshBasicMaterial({ color: orbColor });
            const orb = new THREE.Mesh(orbGeo, orbMat);
            orb.position.set(fx, fy, fz);
            this.scene.add(orb);
            this.trees.push(orb);
        }
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
        // Parks are now SPRAWLING FORESTS~~ UwU~ 💕 no more boring 5-tree situation
        this.createForest(x, z);
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
