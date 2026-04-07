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

        // CONSTANT generation nyow~ fill da empty space baby! UwU 💕
        this.spawnTimer += deltaTime;
        if (this.spawnTimer >= 8) {  // faster spawn cycle, every 8s instead of 25
            // cull structures that wandered or spawned too far from origin (keep map tidy)
            this.cullFarStructures();

            // spawn rate gated by total count -- no random gating, just spawn if below cap~ meow~
            const totalStructures = this.buildings.length + this.trees.length;
            if (totalStructures < 150) {  // INCREASED from 60 to 150 -- FILL THAT SPACE
                this.generateStructureNearPlayer();
            }

            if (this.cars.length < 30) {  // INCREASED from 12 to 30 -- MORE CARS EVERYWHERE
                const angle = Math.random() * Math.PI * 2;
                const distance = 150 + Math.random() * 300;  // wider spawn radius
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

    // if da map gets too cluttered remove stuff far from origin -- medieval cleanup crew
    private cullFarStructures(): void {
        const CULL_DIST = 900;  // EXPANDED from 700 to 900 -- let things stay longer, more world density~ meow~
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
