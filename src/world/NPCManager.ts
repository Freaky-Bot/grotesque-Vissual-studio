import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';
import { CatNPC, CatType } from './CatNPC';

export class NPCManager {
    private npcs: BaseNPC[] = [];
    private scene: THREE.Scene;
    private spawnTimer: number = 0;
    private spawnInterval: number = 5; // Spawn new NPCs every 5 seconds (or whenever they feel like it lol)

    constructor(scene: THREE.Scene) {
        this.scene = scene;
    }

    public addNPC(npc: BaseNPC): void {
        this.npcs.push(npc); // just yeet it in there
    }

    public removeNPC(npc: BaseNPC): void {
        const index = this.npcs.indexOf(npc);
        if (index > -1) {
            this.npcs.splice(index, 1); // bye felicia
            if (npc.getMesh().parent) {
                npc.getMesh().parent?.remove(npc.getMesh());
            }
        }
    }

    public update(deltaTime: number): void {
        // make all the kitties go brrrr
        for (const npc of this.npcs) {
            npc.update(deltaTime);
        }

        // spawn new cats cuz chaos
        this.spawnTimer += deltaTime;
        if (this.spawnTimer >= this.spawnInterval) {
            this.spawnNewNPC();
            this.spawnTimer = 0;
            // randomize spawn interval so its not boring
            this.spawnInterval = 3 + Math.random() * 4;
        }

        // yeet dead cats (except the god one lol)
        this.npcs = this.npcs.filter(npc => {
            if (!npc.isAlive()) {
                this.scene.remove(npc.getMesh());
                return false; // removed from life :( rip
            }
            return true;
        });
    }

    private spawnNewNPC(): void {
        // Random cat type - JOJO EDITION!! ゴゴゴゴゴ
        const catTypes = [
            CatType.NORMAL,
            CatType.NORMAL,
            CatType.NORMAL,
            CatType.NORMAL,
            CatType.JESUS,      // YARE YARE DAZE
            CatType.ROBOT,      // MEOW PLATINUM!
            CatType.ORB,        // THE ORB KNOWS ALL JoJo PARTS
            CatType.ANGEL,      // GOLDEN EXPERIENCE PERFECTION
            CatType.PIRATE,     // NIGERUNDAYO FROM ENEMIES
            CatType.WIZARD,     // HAMON BREATHING TECHNIQUES
            CatType.VAMPIRE,    // DIO'S MINION MEOW
            CatType.DISCO,      // GOLDEN WIND TORTURE DANCE
            CatType.SHADOW      // KING CRIMSON DELETES YOUR MEOW
        ];

        const randomType = catTypes[Math.floor(Math.random() * catTypes.length)];
        
        // Random spawn position - SCATTERED ACROSS THE JOJO UNIVERSE
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;
        const x = Math.cos(angle) * distance;
        const z = Math.sin(angle) * distance;

        const npc = new CatNPC(randomType, new THREE.Vector3(x, 2, z));
        this.addNPC(npc);
        this.scene.add(npc.getMesh());
    }

    public getNPCCount(): number {
        // how many chaos kitties rn... too many let's be honest
        return this.npcs.length;
    }

    public getNPCs(): BaseNPC[] {
        // here's all the kitties uwu
        return this.npcs;
    }

    public getRandomNPC(): BaseNPC | null {
        // pick a random cat victim... i mean friend!
        if (this.npcs.length === 0) return null;
        return this.npcs[Math.floor(Math.random() * this.npcs.length)];
    }
}
