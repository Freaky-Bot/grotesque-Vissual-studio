import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

// social behavior system -- all the soft chaos. gossip. love. gangs. funerals.
// nobody asked if the cats had feelings. they do. it's a problem for everyone.
// THIS IS THE MOST AMBITIOUS SOCIAL SIMULATION IN THIS ENTIRE CODEBASE!! -- infomercial dev

interface Gang {
    name: string;
    members: BaseNPC[];
    territory: THREE.Vector3;
    color: number;
    signMesh: THREE.Group | null;
}

interface LovePair {
    a: BaseNPC;
    b: BaseNPC;
    timer: number;
}

interface SleepingNPC {
    npc: BaseNPC;
    zzzMesh: THREE.Mesh | null;
    wakeTimer: number;
}

interface CatBand {
    members: BaseNPC[];
    active: boolean;
    timer: number;
    noteMeshes: THREE.Mesh[];
}

interface Election {
    candidates: BaseNPC[];
    voteCounts: Map<BaseNPC, number>;
    timer: number;
    active: boolean;
}

interface Funeral {
    position: THREE.Vector3;
    mesh: THREE.Group;
    attendees: BaseNPC[];
    timer: number;
}

export class SocialBehaviorSystem {
    private scene: THREE.Scene;

    // gangs
    private gangs: Gang[] = [];
    private gangFormTimer = 0;

    // love
    private lovePairs: LovePair[] = [];
    private loveCheckTimer = 0;

    // sleeping
    private sleepingNPCs: SleepingNPC[] = [];
    private boredCheckTimer = 0;

    // bands
    private catBands: CatBand[] = [];
    private bandCheckTimer = 0;

    // elections
    private election: Election | null = null;
    private electionTimer = 0;

    // funerals
    private funerals: Funeral[] = [];

    // weather reactions
    private currentWeather: string = 'clear';

    // callbacks to main.ts so it can show stuff in chat
    public onGangFormed: ((name: string) => void) | null = null;
    public onLovePair: ((typeA: string, typeB: string) => void) | null = null;
    public onCatBandFormed: (() => void) | null = null;
    public onElectionResult: ((winner: string) => void) | null = null;
    public onFuneral: ((npcType: string) => void) | null = null;
    public onNPCJudge: ((judgment: string) => void) | null = null;
    public onGossip: ((gossip: string) => void) | null = null;
    public onElectionSpeech: ((candidate: string, speech: string) => void) | null = null;
    public onWeatherReaction: ((reaction: string) => void) | null = null;
    public onComplaint: ((complaint: string) => void) | null = null;

    // npc list -- updated each frame from main
    public npcs: BaseNPC[] = [];
    public playerPos: THREE.Vector3 | null = null;

    // gossip/judgment text pools
    private readonly GOSSIP_LINES = [
        "I heard the jellyfish cat didnt pay rent",
        "Between us? The ninja cat is faking it",
        "The elder cat said something ominous earlier. again.",
        "Someone left paw prints on the crime scene. suspicious.",
        "The demon cat was nice once. nobody believes them.",
        "The baby cat keeps knocking things off shelves on PURPOSE",
        "DJ cat has been playing the same song for 3 days",
        "The cop ate the evidence. the evidence was a donut.",
        "I'm not saying the glitch cat is behind this... but",
        "The viking told me Valhalla has great snacks. seems biased.",
    ];

    private readonly JUDGMENT_LINES = [
        "We have been watching you.",
        "Your paws are suspicious.",
        "The cat council has deliberated. You are: fine. Barely.",
        "That outfit? Noted. Judged. Filed.",
        "You move weird. We are watching.",
        "Strong energy today. We don't mean that as a compliment.",
        "Our report on you goes to the Cat God tonight.",
        "You have exactly two moves before we get involved.",
        "Unprecedented. And not in a good way.",
        "The tribunal has reviewed your vibes. 4/10.",
    ];

    private readonly COMPLAINT_LINES = [
        "This building is DIRECTLY in the path of my patrol route",
        "The trees are growing wrong. I filed a complaint. Nobody responded.",
        "There are too many meteors. I can't work like this.",
        "The black hole moved my lunch. I am furious.",
        "The DJ is too loud. Or not loud enough. Hard to say.",
        "Nobody told me there would be a volcano here.",
        "The roller coaster is structurally questionable at best.",
        "I walked into the wrong cat band again. This is harassment.",
        "The cemetery is in a very inconvenient location.",
        "These portals keep relocating me. I will not stand for it.",
    ];

    private readonly WEATHER_REACTIONS: Record<string, string[]> = {
        rain: [
            "absolutely NOT going near that water",
            "my fur. my beautiful fur. ruined.",
            "huddling. refusing to move. this is my protest.",
            "the rain is personally targeting me specifically",
        ],
        clear: [
            "sunbathing. this is my job now.",
            "this is the best weather since the last good weather",
            "my fur is warm. i am content. for now.",
        ],
        storm: [
            "this thunder is extremely rude",
            "the lightning missed me. this time.",
            "sheltering in place under questionable structural cover",
        ],
    };

    private readonly ELECTION_SPEECHES: Record<string, string> = {
        viking:    "MEOW!! I will raid every treat bowl and SHARE the spoils!! VOTE VIKING!!",
        elder:     "I have lived through 900 councils. They were all wrong. I know better.",
        cop:       "I promise zero tolerance for not enough donuts. Vote cop.",
        dj:        "Under my leadership we will ALL dance. ALWAYS. The beat never stops.",
        demon:     "Vote for me or I corrupt your essence. Consider that a platform.",
        default:   "I am running because nobody else should win. Vote for me."
    };

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        console.log('%c💕 SocialBehaviorSystem online. the cats have opinions now.', 'color:#ff99cc');
    }

    // =================== GANGS ===================

    private formGang(): void {
        if (this.npcs.length < 4) return;
        const gangNames = ['The Claw Collective', 'Midnight Paws Inc', 'The Scratchpad Society',
            'Purr Cartel', 'Team Biscuit', 'The Hiss Mob', 'Nap Mafia', 'Treat Thieves Union'];
        const name = gangNames[Math.floor(Math.random() * gangNames.length)];
        const colors = [0xff0000, 0x0000ff, 0x00ff00, 0xff8800, 0xff00ff, 0x00ffff];
        const color = colors[Math.floor(Math.random() * colors.length)];
        // grab 3-5 nearby NPCs
        const leader = this.npcs[Math.floor(Math.random() * this.npcs.length)];
        const members: BaseNPC[] = [leader];
        for (const npc of this.npcs) {
            if (npc !== leader && npc.getPosition().distanceTo(leader.getPosition()) < 25 && members.length < 5) {
                members.push(npc);
            }
        }
        if (members.length < 2) return; // lame gang
        // build a sign
        const sign = this.buildGangSign(name, leader.getPosition(), color);
        this.gangs.push({ name, members, territory: leader.getPosition().clone(), color, signMesh: sign });
        this.onGangFormed?.(name);
        console.log(`%c👊 GANG FORMED: ${name} (${members.length} members)`, 'color:#ff8800');
    }

    private buildGangSign(name: string, pos: THREE.Vector3, color: number): THREE.Group {
        const g = new THREE.Group();
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4, 6), new THREE.MeshStandardMaterial({ color: 0x8b5a2b }));
        post.position.y = 2; g.add(post);
        const board = new THREE.Mesh(new THREE.BoxGeometry(3, 1, 0.2), new THREE.MeshStandardMaterial({ color }));
        board.position.y = 4; g.add(board);
        g.position.set(pos.x + (Math.random() - 0.5) * 5, 0, pos.z + (Math.random() - 0.5) * 5);
        this.scene.add(g);
        return g;
    }

    // =================== LOVE ===================

    private checkForLove(): void {
        const checked = new Set<BaseNPC>();
        for (const npc of this.npcs) {
            if (checked.has(npc)) continue;
            for (const other of this.npcs) {
                if (npc === other || checked.has(other)) continue;
                if (npc.getPosition().distanceTo(other.getPosition()) < 6) {
                    if (!this.lovePairs.some(p => p.a === npc || p.b === npc || p.a === other || p.b === other)) {
                        if (Math.random() < 0.08) {
                            this.lovePairs.push({ a: npc, b: other, timer: 30 + Math.random() * 60 });
                            this.onLovePair?.(npc.getType(), other.getType());
                            checked.add(npc); checked.add(other);
                            this.spawnHearts(npc.getPosition());
                            break;
                        }
                    }
                }
            }
        }
    }

    private spawnHearts(pos: THREE.Vector3): void {
        for (let i = 0; i < 3; i++) {
            const heart = new THREE.Mesh(
                new THREE.SphereGeometry(0.2, 6, 6),
                new THREE.MeshBasicMaterial({ color: 0xff69b4 })
            );
            heart.position.set(pos.x + (Math.random() - 0.5) * 3, pos.y + 2 + i * 0.8, pos.z + (Math.random() - 0.5) * 3);
            this.scene.add(heart);
            // float up and fade
            let life = 2;
            const floatHeart = () => {
                life -= 0.05;
                heart.position.y += 0.04;
                (heart.material as THREE.MeshBasicMaterial).opacity = life / 2;
                (heart.material as THREE.MeshBasicMaterial).transparent = true;
                if (life > 0) setTimeout(floatHeart, 50);
                else this.scene.remove(heart);
            };
            setTimeout(floatHeart, i * 300);
        }
    }

    private updateLovePairs(dt: number): void {
        for (let i = this.lovePairs.length - 1; i >= 0; i--) {
            const pair = this.lovePairs[i];
            pair.timer -= dt;
            // love: they follow each other
            if (pair.a.isAlive() && pair.b.isAlive()) {
                const dist = pair.a.getPosition().distanceTo(pair.b.getPosition());
                if (dist > 8) {
                    // b follows a -- crude but cute
                    const dir = pair.a.getPosition().clone().sub(pair.b.getPosition()).normalize();
                    pair.b.getPosition().add(dir.multiplyScalar(dt * 2));
                    pair.b.getMesh().position.copy(pair.b.getPosition());
                }
            }
            if (pair.timer <= 0 || !pair.a.isAlive() || !pair.b.isAlive()) {
                this.lovePairs.splice(i, 1);
            }
        }
    }

    // =================== SLEEPING ===================

    private checkBoredom(): void {
        for (const npc of this.npcs) {
            if (this.sleepingNPCs.some(s => s.npc === npc)) continue;
            if (Math.random() < 0.02) {
                // npc gets bored and naps
                const zzzGeo = new THREE.SphereGeometry(0.2, 6, 6);
                const zzzMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });
                const zzz = new THREE.Mesh(zzzGeo, zzzMat);
                zzz.position.copy(npc.getPosition());
                zzz.position.y += 2.5;
                this.scene.add(zzz);
                npc.stun(15 + Math.random() * 20); // knock them out
                this.sleepingNPCs.push({ npc, zzzMesh: zzz, wakeTimer: 15 + Math.random() * 20 });
            }
        }
    }

    private updateSleeping(dt: number): void {
        for (let i = this.sleepingNPCs.length - 1; i >= 0; i--) {
            const s = this.sleepingNPCs[i];
            s.wakeTimer -= dt;
            if (s.zzzMesh) {
                s.zzzMesh.position.copy(s.npc.getPosition());
                s.zzzMesh.position.y += 2.5;
                s.zzzMesh.position.y += Math.sin(Date.now() * 0.003) * 0.15;
            }
            if (s.wakeTimer <= 0 || !s.npc.isAlive()) {
                if (s.zzzMesh) this.scene.remove(s.zzzMesh);
                this.sleepingNPCs.splice(i, 1);
            }
        }
    }

    // =================== CAT BANDS ===================
    // 3+ NPCs near each other = band forms. they play music (metaphorically)

    private checkBandFormation(): void {
        for (const npc of this.npcs) {
            if (this.catBands.some(b => b.members.includes(npc))) continue;
            const nearby: BaseNPC[] = [npc];
            for (const other of this.npcs) {
                if (other !== npc && other.getPosition().distanceTo(npc.getPosition()) < 8) {
                    nearby.push(other);
                }
            }
            if (nearby.length >= 3 && Math.random() < 0.05) {
                const notes: THREE.Mesh[] = [];
                // spawn floating music notes
                for (let i = 0; i < 5; i++) {
                    const note = new THREE.Mesh(
                        new THREE.SphereGeometry(0.15, 6, 6),
                        new THREE.MeshBasicMaterial({ color: 0xffff00 })
                    );
                    note.position.set(
                        npc.getPosition().x + (Math.random() - 0.5) * 6,
                        npc.getPosition().y + 2 + Math.random() * 2,
                        npc.getPosition().z + (Math.random() - 0.5) * 6
                    );
                    this.scene.add(note);
                    notes.push(note);
                }
                this.catBands.push({ members: nearby.slice(0, 3), active: true, timer: 20, noteMeshes: notes });
                this.onCatBandFormed?.();
                console.log('%c🎵 CAT BAND FORMED!! meow meow meow meow', 'color:#ffff00');
            }
        }
    }

    private updateBands(dt: number): void {
        const t = Date.now() * 0.001;
        for (let i = this.catBands.length - 1; i >= 0; i--) {
            const band = this.catBands[i];
            band.timer -= dt;
            // float notes up and spin them
            for (const note of band.noteMeshes) {
                note.position.y += Math.sin(t * 4 + note.position.x) * 0.02;
                note.rotation.y += dt * 3;
            }
            if (band.timer <= 0) {
                for (const note of band.noteMeshes) this.scene.remove(note);
                this.catBands.splice(i, 1);
            }
        }
    }

    // =================== ELECTIONS ===================

    private startElection(): void {
        if (this.election?.active) return;
        if (this.npcs.length < 3) return;
        // pick 3 random NPCs as candidates
        const candidates: BaseNPC[] = [];
        const pool = [...this.npcs];
        for (let i = 0; i < 3 && pool.length > 0; i++) {
            const idx = Math.floor(Math.random() * pool.length);
            candidates.push(pool.splice(idx, 1)[0]);
        }
        const voteCounts = new Map<BaseNPC, number>();
        for (const c of candidates) voteCounts.set(c, 0);
        this.election = { candidates, voteCounts, timer: 30, active: true };
        // speeches
        for (const c of candidates) {
            const speech = this.ELECTION_SPEECHES[c.getType()] ?? this.ELECTION_SPEECHES.default;
            this.onElectionSpeech?.(c.getType(), speech);
        }
        console.log('%c🗳️ ELECTION STARTED!! candidates: ' + candidates.map(c => c.getType()).join(', '), 'color:#aaaaff');
    }

    private updateElection(dt: number): void {
        if (!this.election?.active) return;
        this.election.timer -= dt;
        // other NPCs vote randomly -- it's democracy ig
        if (Math.random() < 0.02) {
            const c = this.election.candidates[Math.floor(Math.random() * this.election.candidates.length)];
            this.election.voteCounts.set(c, (this.election.voteCounts.get(c) ?? 0) + 1);
        }
        if (this.election.timer <= 0) {
            // tally votes -- winner is the most voted
            let winner: BaseNPC | null = null;
            let maxVotes = -1;
            for (const [c, votes] of this.election.voteCounts) {
                if (votes > maxVotes) { maxVotes = votes; winner = c; }
            }
            if (winner) this.onElectionResult?.(winner.getType());
            this.election.active = false;
            console.log(`%c🗳️ ELECTION OVER. winner: ${winner?.getType() ?? 'nobody voted. classic.'}`, 'color:#aaaaff');
        }
    }

    // =================== FUNERALS ===================
    // a beloved cat died. the others gather. it's somber. mostly.

    public holdFuneral(npcType: string, pos: THREE.Vector3): void {
        const g = new THREE.Group();
        // coffin (tiny)
        const coffin = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.6, 0.8), new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 1.0 }));
        coffin.position.y = 0.3; g.add(coffin);
        // cross
        const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.5, 0.15), new THREE.MeshStandardMaterial({ color: 0x888888 }));
        crossV.position.y = 1.5; g.add(crossV);
        const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.15, 0.15), new THREE.MeshStandardMaterial({ color: 0x888888 }));
        crossH.position.set(0, 2.0, 0); g.add(crossH);
        // flowers
        const flowerMat = new THREE.MeshBasicMaterial({ color: 0xff69b4 });
        for (let i = 0; i < 4; i++) {
            const flower = new THREE.Mesh(new THREE.SphereGeometry(0.15, 6, 6), flowerMat);
            flower.position.set((i - 1.5) * 0.5, 0.1, 0.6); g.add(flower);
        }
        g.position.copy(pos);
        this.scene.add(g);
        // gather nearby NPCs as attendees
        const attendees: BaseNPC[] = [];
        for (const npc of this.npcs) {
            if (npc.getPosition().distanceTo(pos) < 30 && attendees.length < 5) {
                attendees.push(npc);
                // stun them briefly -- they're paying respects
                npc.stun(8);
            }
        }
        this.funerals.push({ position: pos, mesh: g, attendees, timer: 30 });
        this.onFuneral?.(npcType);
        console.log(`%c⚰️ FUNERAL for ${npcType} at ${pos.x.toFixed(0)},${pos.z.toFixed(0)}`, 'color:#aaaaaa');
    }

    private updateFunerals(dt: number): void {
        for (let i = this.funerals.length - 1; i >= 0; i--) {
            this.funerals[i].timer -= dt;
            if (this.funerals[i].timer <= 0) {
                this.scene.remove(this.funerals[i].mesh);
                this.funerals.splice(i, 1);
            }
        }
    }

    // =================== WEATHER REACTIONS ===================

    public setWeather(weather: string): void {
        if (this.currentWeather === weather) return;
        this.currentWeather = weather;
        const reactions = this.WEATHER_REACTIONS[weather] ?? ['...'];
        const reaction = reactions[Math.floor(Math.random() * reactions.length)];
        this.onWeatherReaction?.(`[${weather}] a cat: "${reaction}"`);
        // behavior changes
        if (weather === 'rain') {
            // cats huddle -- stun them briefly into clusters
            for (const npc of this.npcs) {
                if (Math.random() < 0.4) npc.stun(5 + Math.random() * 5);
            }
        }
    }

    // =================== JUDGING & GOSSIP ===================

    private doGossip(): void {
        const line = this.GOSSIP_LINES[Math.floor(Math.random() * this.GOSSIP_LINES.length)];
        this.onGossip?.(line);
    }

    private doJudge(): void {
        const line = this.JUDGMENT_LINES[Math.floor(Math.random() * this.JUDGMENT_LINES.length)];
        this.onNPCJudge?.(line);
    }

    private doComplaint(): void {
        const line = this.COMPLAINT_LINES[Math.floor(Math.random() * this.COMPLAINT_LINES.length)];
        this.onComplaint?.(line);
    }

    // =================== MAIN UPDATE ===================

    public update(dt: number, npcs: BaseNPC[], playerPos?: THREE.Vector3): void {
        this.npcs = npcs;
        if (playerPos) this.playerPos = playerPos;

        // gang formation
        this.gangFormTimer += dt;
        if (this.gangFormTimer >= 30) {
            this.gangFormTimer = 0;
            if (Math.random() < 0.35) this.formGang();
            // cap gangs at 6
            while (this.gangs.length > 6) {
                const old = this.gangs.shift()!;
                if (old.signMesh) this.scene.remove(old.signMesh);
            }
        }

        // love
        this.loveCheckTimer += dt;
        if (this.loveCheckTimer >= 10) {
            this.loveCheckTimer = 0;
            this.checkForLove();
        }
        this.updateLovePairs(dt);

        // sleeping
        this.boredCheckTimer += dt;
        if (this.boredCheckTimer >= 8) {
            this.boredCheckTimer = 0;
            this.checkBoredom();
        }
        this.updateSleeping(dt);

        // bands
        this.bandCheckTimer += dt;
        if (this.bandCheckTimer >= 15) {
            this.bandCheckTimer = 0;
            this.checkBandFormation();
        }
        this.updateBands(dt);

        // elections
        this.electionTimer += dt;
        if (this.electionTimer >= 90) {
            this.electionTimer = 0;
            if (Math.random() < 0.5) this.startElection();
        }
        this.updateElection(dt);

        // funerals
        this.updateFunerals(dt);

        // random social events -- gossip, judging, complaining
        if (Math.random() < dt * 0.04) this.doGossip();
        if (Math.random() < dt * 0.015) this.doJudge();
        if (Math.random() < dt * 0.025) this.doComplaint();
    }

    public getGangNames(): string[] { return this.gangs.map(g => g.name); }
    public getLovePairCount(): number { return this.lovePairs.length; }
    public getSleepingCount(): number { return this.sleepingNPCs.length; }
    public getBandCount(): number { return this.catBands.filter(b => b.active).length; }
}
