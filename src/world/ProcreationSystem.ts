import * as THREE from 'three';
import { HybridOffspring } from './HybridOffspring';

export class ProcreationSystem {
    private lastSpawnTime: number = 0;
    private minSpawnInterval: number = 3; // 3 second cooldown
    private spawnDistance: number = 8; // Must be within 8 units to procreate
    private offspringCount: number = 0;

    public canProcreate(playerPos: THREE.Vector3, catGodPos: THREE.Vector3): boolean {
        const distance = playerPos.distanceTo(catGodPos);
        const timeSinceLastSpawn = Date.now() / 1000 - this.lastSpawnTime;

        return distance < this.spawnDistance && timeSinceLastSpawn > this.minSpawnInterval;
    }

    public procreate(
        playerPos: THREE.Vector3,
        catGodPos: THREE.Vector3,
        scene: THREE.Scene
    ): HybridOffspring | null {
        if (!this.canProcreate(playerPos, catGodPos)) {
            return null;
        }

        // Spawn offspring at midpoint between player and cat god
        const spawnPos = new THREE.Vector3(
            (playerPos.x + catGodPos.x) / 2 + (Math.random() - 0.5) * 3,
            3,
            (playerPos.z + catGodPos.z) / 2 + (Math.random() - 0.5) * 3
        );

        const offspring = new HybridOffspring(spawnPos);
        scene.add(offspring.getMesh());

        this.lastSpawnTime = Date.now() / 1000;
        this.offspringCount++;

        console.log(`✨ HYBRID OFFSPRING #${this.offspringCount} BORN! ✨`);
        console.log(`💜 A being of Sage and Cat God blessed existence`);

        return offspring;
    }

    public getOffspringCount(): number {
        return this.offspringCount;
    }

    public getDistance(pos1: THREE.Vector3, pos2: THREE.Vector3): number {
        return pos1.distanceTo(pos2);
    }

    public getCanProcreateMessage(distance: number): string {
        if (distance < this.spawnDistance) {
            return `❤️ PROCREATION AVAILABLE (distance: ${distance.toFixed(1)}) - Press P!`;
        } else {
            return `💔 Get closer to Cat God (${distance.toFixed(1)}/${this.spawnDistance})`;
        }
    }
}
