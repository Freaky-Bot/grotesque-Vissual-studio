import * as THREE from 'three';
import { UgandanKnucklesNPC } from './UgandanKnucklesNPC';

// THE UGANDAN KNUCKLES RAIN EVENT
// occasionally just... rains ugandan knuckles from the sky
// they look for their queen, they click, they vibe
// this is peak game design honestly

export class UgandanKnucklesEvent {
    private scene: THREE.Scene;
    private activeKnuckles: UgandanKnucklesNPC[] = [];
    private eventTimer: number = 0;
    private eventCooldown: number = 25 + Math.random() * 35; // every 25-60 seconds, keep em guessing
    private isEventActive: boolean = false;
    private spawnBurst: number = 0; // how many left to spawn in current burst
    private burstTimer: number = 0;
    private burstInterval: number = 0.18; // drop one every 0.18 seconds during the event
    private onAnnounce: ((msg: string) => void) | null = null; // hook for chat system

    private readonly MAX_KNUCKLES = 20; // dont melt the cpu

    constructor(scene: THREE.Scene) {
        this.scene = scene;
    }

    public setAnnounceCallback(fn: (msg: string) => void): void {
        this.onAnnounce = fn;
    }

    public update(deltaTime: number, playerPosition: THREE.Vector3): void {
        // countdown to next event
        this.eventTimer += deltaTime;

        if (!this.isEventActive && this.eventTimer >= this.eventCooldown) {
            this.startRainEvent(playerPosition);
        }

        // drip em in one by one during the event
        if (this.isEventActive && this.spawnBurst > 0) {
            this.burstTimer += deltaTime;
            if (this.burstTimer >= this.burstInterval) {
                this.burstTimer = 0;
                this.spawnOneKnuckles(playerPosition);
                this.spawnBurst--;
                if (this.spawnBurst <= 0) {
                    this.isEventActive = false;
                    // schedule next event
                    this.eventTimer = 0;
                    this.eventCooldown = 25 + Math.random() * 35;
                    console.log('%c🦔 UGANDAN KNUCKLES RAIN COMPLETE. THEY ARE SEARCHING.', 'color: red; font-size: 14px;');
                    this.onAnnounce?.('UGANDAN KNUCKLES RAIN COMPLETE. THEY ARE SEARCHING FOR DA QUEEN.');
                }
            }
        }

        // update all active knuckles
        for (const k of this.activeKnuckles) {
            k.update(deltaTime);
        }

        // clean up dead ones
        this.activeKnuckles = this.activeKnuckles.filter(k => {
            if (!k.isAlive()) {
                this.scene.remove(k.getMesh());
                return false; // bye brudda
            }
            return true;
        });

        // if there are too many just kill the oldest ones, tough love
        while (this.activeKnuckles.length > this.MAX_KNUCKLES) {
            const oldest = this.activeKnuckles.shift()!;
            oldest.die();
            this.scene.remove(oldest.getMesh());
        }
    }

    private startRainEvent(_playerPosition: THREE.Vector3): void {
        this.isEventActive = true;
        const count = 8 + Math.floor(Math.random() * 10); // 8-18 knuckles per event
        this.spawnBurst = count;
        this.burstTimer = 0;
        console.log('%c🦔 DE UGANDAN KNUCKLES ARE COMING!! DO U KNO DA WEY??', 'color: red; font-weight: bold; font-size: 16px;');
        console.log(`%c🦔 ${count} BRUDDAS DESCEND FROM DA SKY`, 'color: darkred; font-size: 13px;');
        this.onAnnounce?.(`DE UGANDAN KNUCKLES RAIN HAS BEGUN!! ${count} BRUDDAS ARE DESCENDING FROM DA SKY!!`);
    }

    private spawnOneKnuckles(playerPosition: THREE.Vector3): void {
        // spawn near player but randomized, rain over a radius
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 40; // spread em out around player
        const x = playerPosition.x + Math.cos(angle) * radius;
        const z = playerPosition.z + Math.sin(angle) * radius;
        const y = 60 + Math.random() * 30; // high in the sky, bye bye brudda

        const knuckles = new UgandanKnucklesNPC(new THREE.Vector3(x, y, z));
        this.activeKnuckles.push(knuckles);
        this.scene.add(knuckles.getMesh());
    }

    public getActiveCount(): number {
        return this.activeKnuckles.length; // how many bruddas are searching
    }

    public getTimeUntilNext(): number {
        return Math.max(0, this.eventCooldown - this.eventTimer); // seconds until next rain
    }
}
