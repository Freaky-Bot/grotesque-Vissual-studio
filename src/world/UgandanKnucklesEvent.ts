import * as THREE from 'three';
import { UgandanKnucklesNPC } from './UgandanKnucklesNPC';

// THE UGANDAN KNUCKLES HERD EVENT
// one leader spawns first, decides da wey. the rest follow like a zombie horde.
// left 4 dead but its ugandan knuckles. nobody asked. we deliver anyway.

export class UgandanKnucklesEvent {
    private scene: THREE.Scene;
    private activeKnuckles: UgandanKnucklesNPC[] = [];
    private eventTimer: number = 0;
    private eventCooldown: number = 25 + Math.random() * 35;
    private isEventActive: boolean = false;
    private spawnBurst: number = 0;
    private burstTimer: number = 0;
    private burstInterval: number = 0.22;
    private onAnnounce: ((msg: string) => void) | null = null;

    // the one true leader -- first knuckles of each rain event
    // when leader dies, next oldest follower gets promoted (democracy but worse)
    private currentLeader: UgandanKnucklesNPC | null = null;

    private playerPosition: THREE.Vector3 = new THREE.Vector3();

    private readonly MAX_KNUCKLES = 20;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
    }

    public setAnnounceCallback(fn: (msg: string) => void): void {
        this.onAnnounce = fn;
    }

    public update(deltaTime: number, playerPos: THREE.Vector3): void {
        this.playerPosition.copy(playerPos);
        this.eventTimer += deltaTime;

        if (!this.isEventActive && this.eventTimer >= this.eventCooldown) {
            // king singleton check -- da sovereign still lives? NO NEW RAIN. da herd is already assembled.
            // this is not a coincidence. only one king. ALWAYS.
            if (this.currentLeader && this.currentLeader.isAlive()) {
                // king lives. reset timer and try again later. da wey never ends.
                this.eventTimer = 0;
                this.eventCooldown = 20 + Math.random() * 20;
                this.onAnnounce?.('DA KING STILL RULES!! NO NEW RAIN WHILE DA SOVEREIGN LIVES!! DO U KNO DA WEY??');
                console.log('%c👑 KING STILL LIVES. NEW RAIN DENIED. DA HERD REMAINS.', 'color:gold;font-size:13px;font-weight:bold;');
            } else {
                this.startRainEvent(playerPos);
            }
        }

        // drip em in one by one
        if (this.isEventActive && this.spawnBurst > 0) {
            this.burstTimer += deltaTime;
            if (this.burstTimer >= this.burstInterval) {
                this.burstTimer = 0;
                this.spawnOneKnuckles(playerPos);
                this.spawnBurst--;
                if (this.spawnBurst <= 0) {
                    this.isEventActive = false;
                    this.eventTimer = 0;
                    this.eventCooldown = 25 + Math.random() * 35;
                    console.log('%c🦔 RAIN COMPLETE. DA HERD IS ASSEMBLED.', 'color:red;font-size:14px;');
                    this.onAnnounce?.('UGANDAN KNUCKLES HERD ASSEMBLED. DA LEADER KNOWS DA WEY. RUN.');
                }
            }
        }

        // pass player pos to ALL knuckles every frame so leader can react
        for (const k of this.activeKnuckles) {
            k.playerPosRef = this.playerPosition;
            k.update(deltaTime);
        }

        // clean dead ones
        this.activeKnuckles = this.activeKnuckles.filter(k => {
            if (!k.isAlive()) {
                this.scene.remove(k.getMesh());
                return false;
            }
            return true;
        });

        // if leader died, promote the next brudda in line
        if (this.currentLeader && !this.currentLeader.isAlive()) {
            this.currentLeader = null;
            this.promoteNewLeader();
        }

        // cap at max
        while (this.activeKnuckles.length > this.MAX_KNUCKLES) {
            const oldest = this.activeKnuckles.shift()!;
            oldest.die();
            this.scene.remove(oldest.getMesh());
        }
    }

    private promoteNewLeader(): void {
        // find first follower still alive -- they get the crown now
        const candidate = this.activeKnuckles.find(k => !k.isLeader && k.isAlive());
        if (!candidate) return;
        candidate.makeLeader();
        this.currentLeader = candidate;
        // update all followers to point to the new leader
        for (const k of this.activeKnuckles) {
            if (k !== candidate) k.leaderRef = candidate;
        }
        this.onAnnounce?.('DA LEADER HAS FALLEN. A NEW BRUDDA STEPS UP. THE HERD FOLLOWS.');
        console.log('%c👑 NEW LEADER PROMOTED. DA WEY CONTINUES.', 'color:gold;font-weight:bold;');
    }

    private startRainEvent(_playerPosition: THREE.Vector3): void {
        this.isEventActive = true;
        const count = 8 + Math.floor(Math.random() * 10);
        this.spawnBurst = count;
        this.burstTimer = 0;
        // reset leader ref for this new wave
        this.currentLeader = null;
        console.log('%c🦔 DE UGANDAN KNUCKLES ARE COMING!! DO U KNO DA WEY??', 'color:red;font-weight:bold;font-size:16px;');
        console.log(`%c🦔 ${count} BRUDDAS + 1 LEADER DESCEND FROM DA SKY`, 'color:darkred;font-size:13px;');
        this.onAnnounce?.(`DE UGANDAN KNUCKLES RAIN HAS BEGUN!! ${count} BRUDDAS + DA LEADER ARE DESCENDING!!`);
    }

    private spawnOneKnuckles(playerPosition: THREE.Vector3): void {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 40;
        const x = playerPosition.x + Math.cos(angle) * radius;
        const z = playerPosition.z + Math.sin(angle) * radius;
        const y = 60 + Math.random() * 30;

        const knuckles = new UgandanKnucklesNPC(new THREE.Vector3(x, y, z));

        // first knuckles of each wave = da leader. all subsequent = followers.
        if (this.currentLeader === null) {
            knuckles.makeLeader();
            this.currentLeader = knuckles;
        } else {
            knuckles.leaderRef = this.currentLeader;
        }

        this.activeKnuckles.push(knuckles);
        this.scene.add(knuckles.getMesh());
    }

    public getActiveCount(): number {
        return this.activeKnuckles.length;
    }

    public getTimeUntilNext(): number {
        return Math.max(0, this.eventCooldown - this.eventTimer);
    }
}
