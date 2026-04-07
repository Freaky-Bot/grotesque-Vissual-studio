// MOB MANAGER -- separate from NPCManager because mobs are different vibes entirely
// mobs: passive, ambient, environmental creatures. they dont fight. they dont have stands.
// they just EXIST in the world and make it feel alive. birds. maybe more someday. idk. whatever.
// they get their own cap, their own spawn loop, their own update loop. total independence.
// the npcs dont know the mobs exist. the mobs dont know the npcs exist. bliss.

import * as THREE from 'three';
import { BaseNPC } from '../BaseNPC';
import { BirdNPC } from './BirdNPC';

export class MobManager {
    private mobs: BaseNPC[] = [];
    private scene: THREE.Scene;

    private spawnTimer: number = 0;
    private spawnInterval: number = 8 + Math.random() * 6; // 8-14s between mob spawns -- slower than npcs

    private bubbleCb: ((pos: THREE.Vector3, text: string, headOffset: number, npcType?: string) => void) | null = null;
    private playerPos: THREE.Vector3 | null = null;

    // the cap for mobs -- completely separate from the npc cap. mobs dont count toward npc budget.
    // 8 birds max. the sky has limits. not many, but some.
    private readonly MAX_MOBS = 10;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        // fill the sky immediately with a starter flock. 5 birds. right away. no waiting.
        for (let i = 0; i < 5; i++) this.spawnBird();
        console.log('%c🦅 MobManager online. the sky lives now.', 'color: #8B6914; font-style: italic');
    }

    public setBubbleCallback(fn: (pos: THREE.Vector3, text: string, headOffset: number, npcType?: string) => void): void {
        this.bubbleCb = fn;
        for (const mob of this.mobs) mob.setSpeakCallback(fn);
    }

    // called every frame from main.ts with the player's current position
    public setPlayerPos(pos: THREE.Vector3): void {
        this.playerPos = pos;
    }

    public getMobs(): BaseNPC[] { return this.mobs; }
    public getMobCount(): number { return this.mobs.length; }

    public update(deltaTime: number, npcPositions: THREE.Vector3[] = []): void {
        // update all alive mobs
        for (const mob of this.mobs) {
            mob.update(deltaTime);

            // BIRDS: scare from player + scare from any nearby NPC
            // birds dont care what the npc is -- they fear ALL of them equally. wise.
            if (mob instanceof BirdNPC) {
                if (this.playerPos && mob.getPosition().distanceTo(this.playerPos) < 18) {
                    mob.scare(this.playerPos);
                }
                for (const npcPos of npcPositions) {
                    if (mob.getPosition().distanceTo(npcPos) < 12) {
                        mob.scare(npcPos);
                        break; // one scare per frame is enough. birds cant handle more.
                    }
                }
            }
        }

        // cull dead mobs -- birds have 15hp and theoretically can be killed. tragic.
        this.mobs = this.mobs.filter(mob => {
            if (!mob.isAlive()) {
                this.scene.remove(mob.getMesh());
                console.log('%c🪶 a bird has fallen...mrrrow...', 'color: #8B6914; font-style: italic');
                return false;
            }
            return true;
        });

        // spawn new mobs over time -- keep the sky populated without blowing up the budget
        this.spawnTimer += deltaTime;
        if (this.spawnTimer >= this.spawnInterval && this.mobs.length < this.MAX_MOBS) {
            this.spawnBird();
            this.spawnTimer = 0;
            this.spawnInterval = 8 + Math.random() * 6;
        }
    }

    private spawnBird(): void {
        // count only birds for the bird-specific sub-cap -- 8 birds max in sky at once
        const birdCount = this.mobs.filter(m => m instanceof BirdNPC).length;
        if (birdCount >= 8) return;

        const angle = Math.random() * Math.PI * 2;
        const dist = 20 + Math.random() * 120; // birds scatter wide
        const pos = new THREE.Vector3(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
        const bird = new BirdNPC(pos);
        if (this.bubbleCb) bird.setSpeakCallback(this.bubbleCb);
        // disable shadow casting -- they are tiny birds at high altitude, nobody sees their shadow
        bird.getMesh().traverse((child) => { child.castShadow = false; child.receiveShadow = false; });
        this.mobs.push(bird);
        this.scene.add(bird.getMesh());
    }
}
