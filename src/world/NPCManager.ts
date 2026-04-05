import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';
import { CatNPC, CatType } from './CatNPC';
import { BarneyNPC } from './BarneyNPC';
import { EmoNPC } from './EmoNPC';
import { ShrekNPC } from './ShrekNPC';
import { BuffCatNPC } from './BuffCatNPC';
import { VoidCatNPC } from './VoidCatNPC';

export class NPCManager {
    private npcs: BaseNPC[] = [];
    private scene: THREE.Scene;
    private spawnTimer: number = 0;
    private spawnInterval: number = 5; // Spawn new NPCs every 5 seconds (or whenever they feel like it lol)
    private bubbleCb: ((pos: THREE.Vector3, text: string, headOffset: number) => void) | null = null;
    private playerPos: THREE.Vector3 | null = null; // updated each frame for stand targeting
    private onMudHit: ((slowDuration: number) => void) | null = null; // set from main for shrek mud
    private worldGenerator: { damageBuildingNear: (pos: THREE.Vector3, r: number) => void } | null = null;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        // spawn barney right away, he's always here, he was always here
        this.spawnBarney();
        // spawn an emo too, every world needs one sad boi
        this.spawnEmo();
        // and shrek. he owns this swamp.
        this.spawnShrek();
        // buff cat has to get those gains in
        this.spawnBuffCat();
        // void cat -- one at all times in the world, watching
        this.spawnVoidCat();
    }

    public setBubbleCallback(fn: (pos: THREE.Vector3, text: string, headOffset: number) => void): void {
        this.bubbleCb = fn;
        // also wire up any npcs already existing (hybrid offspring etc get added via addNPC)
        for (const npc of this.npcs) npc.setSpeakCallback(fn);
    }

    public addNPC(npc: BaseNPC): void {
        if (this.bubbleCb) npc.setSpeakCallback(this.bubbleCb); // wire bubble on the fly
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
            // pass player pos to emos so their stand knows where to aim
            if (npc instanceof EmoNPC && this.playerPos) {
                npc.setPlayerRef(this.playerPos);
            }
            // shrek gets player pos for mud attacks
            if (npc instanceof ShrekNPC && this.playerPos) {
                npc.setPlayerRef(this.playerPos);
            }
            // buff cat doing zoomies can damage buildings
            if (npc instanceof BuffCatNPC && this.worldGenerator) {
                this.worldGenerator.damageBuildingNear(npc.getPosition(), 10);
            }
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

    // call this every frame from main.ts with the player's position
    public setPlayerPos(pos: THREE.Vector3): void {
        this.playerPos = pos;
    }

    // wire in mud slowness from main
    public setMudHitCallback(fn: (slowDuration: number) => void): void {
        this.onMudHit = fn;
    }

    // wire in world generator so buff cat zoomies can damage buildings
    public setWorldGenerator(wg: { damageBuildingNear: (pos: THREE.Vector3, r: number) => void }): void {
        this.worldGenerator = wg;
    }

    private spawnNewNPC(): void {
        // updated spawn weights: emo 7%, barney 8%, shrek 5%, buffcat 6%, voidcat 5%, rest = cats
        const roll = Math.random();
        if (roll < 0.07) { this.spawnEmo(); return; }
        if (roll < 0.15) { this.spawnBarney(); return; }
        if (roll < 0.20) { this.spawnShrek(); return; }
        if (roll < 0.26) { this.spawnBuffCat(); return; }
        if (roll < 0.31) { this.spawnVoidCat(); return; }
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
        if (this.bubbleCb) npc.setSpeakCallback(this.bubbleCb); // dont forget this one
        this.addNPC(npc);
        this.scene.add(npc.getMesh());
    }

    private spawnEmo(): void {
        const angle = Math.random() * Math.PI * 2;
        const dist = 25 + Math.random() * 70;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const emo = new EmoNPC(pos);
        if (this.bubbleCb) emo.setSpeakCallback(this.bubbleCb);
        if (this.playerPos) emo.setPlayerRef(this.playerPos);
        this.addNPC(emo);
        this.scene.add(emo.getMesh());
    }

    private spawnBarney(): void {
        // only ONE barney allowed. he is unique. he is the only one. THE ONLY ONE.
        if (this.npcs.some(n => n.getType() === 'barney')) return;
        const angle = Math.random() * Math.PI * 2;
        const dist = 30 + Math.random() * 80;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const barney = new BarneyNPC(pos);
        if (this.bubbleCb) barney.setSpeakCallback(this.bubbleCb);
        this.addNPC(barney);
        this.scene.add(barney.getMesh());
        console.log('%c🦕 BARNEY HAS ARRIVED. I LOVE YOU, YOU LOVE ME', 'color: #6B2FA0; font-weight: bold; font-size: 14px');
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

    private spawnShrek(): void {
        const angle = Math.random() * Math.PI * 2;
        const dist = 35 + Math.random() * 80;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const shrek = new ShrekNPC(pos);
        if (this.bubbleCb) shrek.setSpeakCallback(this.bubbleCb);
        if (this.playerPos) shrek.setPlayerRef(this.playerPos);
        if (this.onMudHit) shrek.setMudHitCallback(this.onMudHit);
        this.addNPC(shrek);
        this.scene.add(shrek.getMesh());
        console.log('%c🧅 SHREK HAS ARRIVED. THIS IS HIS SWAMP NOW.', 'color: olive; font-weight: bold; font-size: 14px');
    }

    private spawnBuffCat(): void {
        const angle = Math.random() * Math.PI * 2;
        const dist = 30 + Math.random() * 90;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const buff = new BuffCatNPC(pos);
        if (this.bubbleCb) buff.setSpeakCallback(this.bubbleCb);
        this.addNPC(buff);
        this.scene.add(buff.getMesh());
        console.log('%c💪 BUFF CAT SPAWNED. BICEPS ACTIVATED.', 'color: orange; font-weight: bold; font-size: 14px');
    }

    private spawnVoidCat(): void {
        const angle = Math.random() * Math.PI * 2;
        const dist = 25 + Math.random() * 100;
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const voidCat = new VoidCatNPC(pos);
        if (this.bubbleCb) voidCat.setSpeakCallback(this.bubbleCb);
        this.addNPC(voidCat);
        this.scene.add(voidCat.getMesh());
        console.log('%c🌑 VOID CAT MATERIALIZED FROM THE DARKNESS', 'color: #330044; font-weight: bold; font-size: 14px');
    }
}
