import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
import { BaseNPC } from './BaseNPC';

// DO U KNO DA WEY -- HERD MENTALITY EDITION
// one leader decides da wey. all followers converge on the leader like a proper zombie horde.
// the leader chases the player. followers chase the leader. chaos. beautiful chaos.
// idk what zombie game the user meant but this is my Left 4 Dead tribute ig. whatever.

// static audio buffer shared across ALL knuckles -- load da mp3 once, play many
// nobody wants 20 audio fetch calls. be smart about it.
let _sharedAudioCtx: AudioContext | null = null;
let _clickBuffer: AudioBuffer | null = null;
let _bufferLoading: boolean = false;

// rate limiter -- 1 click per SECOND globally. the herd collectively shares one click slot.
// ...I'm not angry. I just expected better from all of us.
let _lastClickTime: number = 0;
const CLICK_RATE_LIMIT_MS = 1000;

function getAudioCtx(): AudioContext | null {
    if (_sharedAudioCtx) return _sharedAudioCtx;
    try {
        _sharedAudioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        return _sharedAudioCtx;
    } catch { return null; }
}

function loadClickBuffer(): void {
    if (_bufferLoading || _clickBuffer) return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    _bufferLoading = true;
    fetch('./knuckles-click.mp3')
        .then(r => r.arrayBuffer())
        .then(ab => ctx.decodeAudioData(ab))
        .then(buf => { _clickBuffer = buf; _bufferLoading = false; })
        .catch(() => { _bufferLoading = false; /* no audio for u */ });
}

function playClick(vol: number = 0.025): void { // volume axed another 75% on top of the last axing. logarithmic suffering.
    const now = performance.now();
    if (now - _lastClickTime < CLICK_RATE_LIMIT_MS) return; // rate limited. 1 click per 180ms globally. u r welcome.
    _lastClickTime = now;
    const ctx = getAudioCtx();
    if (!ctx || !_clickBuffer) return;
    try {
        const src = ctx.createBufferSource();
        src.buffer = _clickBuffer;
        // trim: only play the first 0.9s so it stays punchy, not a full song
        const gain = ctx.createGain();
        gain.gain.value = vol;
        src.connect(gain);
        gain.connect(ctx.destination);
        src.start(0, 0, 0.9); // start at 0s, play 0.9s only
    } catch { /* audio ctx suspended or smth */ }
}

export class UgandanKnucklesNPC extends BaseNPC {
    private clickTimer: number = Math.random() * 2;
    private clickInterval: number = 0.6 + Math.random() * 1.2;
    private fallSpeed: number = 8 + Math.random() * 6;
    private hasLanded: boolean = false;
    private wanderTimer: number = 0;

    // ---- HERD SYSTEM ----
    // the one true leader thinks. everybody else is a zombie following it.
    public isLeader: boolean = false;
    public leaderRef: UgandanKnucklesNPC | null = null; // set by Event manager for followers
    public playerPosRef: THREE.Vector3 | null = null;   // set by Event manager every frame

    // leader-only: state machine
    private leaderState: 'searching' | 'chasing' | 'alert' = 'searching';
    private leaderDecideTimer: number = 2 + Math.random() * 3; // seconds until leader picks new direction
    private leaderTarget: THREE.Vector3 | null = null;

    // follower-only: slight random offset so they dont all stack on same pixel
    private herdOffset: THREE.Vector3 = new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        0,
        (Math.random() - 0.5) * 4,
    );

    // crown mesh ref -- leaders get a crown. respect da leader.
    private crownMesh: THREE.Group | null = null;

    constructor(position: THREE.Vector3) {
        super(position);
        this.bubbleHeadOffset = 2.5;
        this.mesh = this.buildMesh();
        this.mesh.position.copy(this.position);
        this.dialogues = [
            'DO U KNO DA WEY',
            'SPIT ON HIM BRUDDAS',
            'U DO NOT KNO DA WEY',
            'WE MUST FIND DA QUEEN',
            'DA WEY IS DAT WAY BRUDDA',
            '*CLICKING INTENSIFIES*',
            'BRUDDA BRUDDA BRUDDA',
            'SHOW ME DA WEY',
            'FOLLOW DA LEADER BRUDDAS',
            'DIS IS DA WEY',
        ];
        // kick off the buffer load -- no-ops if already loading/loaded
        loadClickBuffer();

        // u kno da wey to da GLB folder now brudda
        this.tryLoadGLBModel(3.5);
    }

    // called by UgandanKnucklesEvent to crown one as leader
    public makeLeader(): void {
        this.isLeader = true;
        // build the crown and attach it to the mesh
        this.crownMesh = this.buildCrown();
        this.mesh.add(this.crownMesh);
        console.log('%cðŸ‘‘ DA LEADER HAS BEEN CHOSEN. FOLLOW DA WEY.', 'color:gold;font-weight:bold;font-size:14px');
    }

    private buildCrown(): THREE.Group {
        // a lil golden crown floating above da leader's head. respect it.
        const g = new THREE.Group();
        g.position.set(0, 1.8, 0); // sits above the dreads

        const goldMat = new THREE.MeshStandardMaterial({ color: 0xFFD700, metalness: 0.8, roughness: 0.2 });
        const redGemMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });

        // crown ring base
        const ringGeo = new THREE.TorusGeometry(0.55, 0.1, 8, 20);
        const ring = new THREE.Mesh(ringGeo, goldMat);
        ring.rotation.x = Math.PI / 2;
        g.add(ring);

        // 5 crown points
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const spike = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.4, 6), goldMat);
            spike.position.set(Math.cos(angle) * 0.52, 0.3, Math.sin(angle) * 0.52);
            g.add(spike);
            // gem on every other spike
            if (i % 2 === 0) {
                const gem = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), redGemMat);
                gem.position.set(Math.cos(angle) * 0.52, 0.5, Math.sin(angle) * 0.52);
                g.add(gem);
            }
        }

        // TorusKnotGeometry "da wey" -- only the leader gets this orbiting chaos gem
        // do u kno da knot? now u do.
        const daWeyKnot = new THREE.Mesh(
            new THREE.TorusKnotGeometry(0.22, 0.05, 48, 6, 2, 3),
            new THREE.MeshStandardMaterial({ color: 0xFFD700, metalness: 0.9, roughness: 0.1 })
        );
        daWeyKnot.position.set(0, 0.9, 0);
        daWeyKnot.name = 'da-wey-knot';
        g.add(daWeyKnot);
        return g;
    }

    private buildMesh(): THREE.Group {
        // REBUILT UGANDAN KNUCKLES -- more faithful to the meme. huge flat red head.
        // very small body, tiny limbs, red everywhere. do you know de wey?
        const g = new THREE.Group();

        const redMat      = new THREE.MeshPhongMaterial({ color: 0xaa1a1a, emissive: 0x1a0000 });
        const darkRedMat  = new THREE.MeshPhongMaterial({ color: 0x7a0a0a, emissive: 0x0a0000 });
        const whiteMat    = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const darkMat     = new THREE.MeshBasicMaterial({ color: 0x111111 });
        const teethMat    = new THREE.MeshBasicMaterial({ color: 0xeeeeee });
        const skinMat     = new THREE.MeshPhongMaterial({ color: 0xcc3333 });

        // BODY: tiny stubby body compared to the giant head
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.32, 0.85, 8), redMat);
        body.position.y = 0.42; g.add(body);

        // LEGS: short stubby red legs
        for (const side of [-1, 1]) {
            const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.72, 8), redMat);
            leg.position.set(side * 0.22, -0.25, 0); leg.castShadow = true; g.add(leg);
            const foot = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), darkRedMat);
            foot.scale.set(1.8, 0.6, 1.1); foot.position.set(side * 0.22, -0.72, 0.12); g.add(foot);
        }

        // ARMS: tiny T-rex style arms (even tinier than the legs)
        for (const side of [-1, 1]) {
            const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.12, 0.45, 6), redMat);
            arm.rotation.z = side * 1.1; arm.position.set(side * 0.52, 0.62, 0); g.add(arm);
            const hand = new THREE.Mesh(new THREE.SphereGeometry(0.16, 7, 6), redMat);
            hand.position.set(side * 0.78, 0.28, 0); g.add(hand);
            // knuckle duster spikes
            for (let k = 0; k < 3; k++) {
                const knuck = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.12, 4), darkRedMat);
                knuck.position.set(side * (0.74 + k * 0.06), 0.14, 0.05 + k * 0.06);
                knuck.rotation.x = -0.4; g.add(knuck);
            }
        }

        // THE HEAD: disproportionately enormous. basically a cube with a face.
        // LatheGeometry gives it that blocky-sphere shape
        const headPoints = [
            new THREE.Vector2(0,    0),
            new THREE.Vector2(0.72, 0.02),
            new THREE.Vector2(0.92, 0.38),
            new THREE.Vector2(1.02, 0.82),
            new THREE.Vector2(1.05, 1.22),  // widest point (cheeks)
            new THREE.Vector2(0.98, 1.58),
            new THREE.Vector2(0.82, 1.88),
            new THREE.Vector2(0.48, 2.12),
            new THREE.Vector2(0, 2.18),
        ];
        const head = new THREE.Mesh(new THREE.LatheGeometry(headPoints, 10), redMat);
        head.position.y = 0.85; head.castShadow = true; g.add(head);

        // THE FAMOUS MOUTH: massive gaping mouth with spit flying
        const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.38, 0.25), darkMat);
        mouth.position.set(0, 1.18, 0.95); g.add(mouth);

        // huge blocky teeth
        for (let t = -1; t <= 1; t++) {
            const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.22, 0.14), teethMat);
            tooth.position.set(t * 0.22, 1.28, 0.98); g.add(tooth);
        }
        // bottom two teeth
        for (let t = -0.5; t <= 0.5; t += 1) {
            const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.2, 0.14), teethMat);
            tooth.position.set(t * 0.35, 1.1, 0.98); g.add(tooth);
        }

        // EYES: simple white circles with dark pupils
        for (const ex of [-0.38, 0.38]) {
            const eyeWhite = new THREE.Mesh(new THREE.CircleGeometry(0.22, 10), whiteMat);
            eyeWhite.position.set(ex, 1.82, 0.99); g.add(eyeWhite);
            const pupil = new THREE.Mesh(new THREE.CircleGeometry(0.13, 8), darkMat);
            pupil.position.set(ex, 1.82, 1.0); g.add(pupil);
            // tiny shine dot
            const shine = new THREE.Mesh(new THREE.CircleGeometry(0.04, 5), whiteMat);
            shine.position.set(ex + 0.06, 1.88, 1.01); g.add(shine);
        }

        // nose: barely there, two dark slits
        for (const nx of [-0.12, 0.12]) {
            const nostril = new THREE.Mesh(new THREE.CircleGeometry(0.06, 7), darkMat);
            nostril.position.set(nx, 1.55, 0.99); g.add(nostril);
        }

        // spit particles (static blobs coming from mouth)
        for (let s = 0; s < 4; s++) {
            const spit = new THREE.Mesh(new THREE.SphereGeometry(0.04 + s * 0.02, 5, 4), whiteMat);
            spit.position.set(
                (Math.random() - 0.5) * 0.5,
                1.22 - s * 0.12,
                1.05 + s * 0.22
            );
            g.add(spit);
        }

        // ears: small knobs on the side
        for (const ex of [-1.05, 1.05]) {
            const ear = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), darkRedMat);
            ear.scale.set(0.55, 0.8, 0.65); ear.position.set(ex, 1.75, 0.05); g.add(ear);
        }

        return g;
    }

    private doClickSound(): void {
        // leaders click louder -- they are the leader. they earned it.
        playClick(this.isLeader ? 0.0375 : 0.0156); // reduced another 75%. practically a whisper now.
    }

    // ---- LEADER BRAIN ----
    // leader decides the direction every few seconds, or just chases player if close
    private updateLeader(deltaTime: number): void {
        if (!this.hasLanded) return;

        this.leaderDecideTimer -= deltaTime;

        const playerPos = this.playerPosRef;
        const distToPlayer = playerPos ? playerPos.distanceTo(this.position) : 999;

        // if player is within 35 units, CHASE
        if (playerPos && distToPlayer < 35) {
            this.leaderState = 'chasing';
            this.leaderTarget = playerPos.clone();
        } else if (this.leaderDecideTimer <= 0) {
            // pick a new random wander target near current pos
            this.leaderDecideTimer = 3 + Math.random() * 4;
            const angle = Math.random() * Math.PI * 2;
            const dist = 15 + Math.random() * 25;
            this.leaderTarget = new THREE.Vector3(
                this.position.x + Math.cos(angle) * dist,
                2,
                this.position.z + Math.sin(angle) * dist,
            );
            this.leaderState = 'searching';
        }

        // move toward target if we have one
        if (this.leaderTarget) {
            const dir = this.leaderTarget.clone().sub(this.position);
            dir.y = 0;
            const dist = dir.length();
            if (dist > 1.5) {
                dir.normalize();
                const speed = this.leaderState === 'chasing' ? 6.5 : 3.5;
                this.position.addScaledVector(dir, speed * deltaTime);
                this.position.y = 2;
                this.mesh.position.copy(this.position);
                // face direction of travel
                this.mesh.rotation.y = Math.atan2(dir.x, dir.z);
            }
        }
    }

    // ---- FOLLOWER BRAIN ----
    // zombies. they follow the leader. that's it. that's their whole personality.
    private updateFollower(deltaTime: number): void {
        if (!this.hasLanded || !this.leaderRef || !this.leaderRef.isAlive()) {
            // leader died -- just wander aimlessly. lost without guidance. very sad.
            this.randomWalk(deltaTime, 2.5);
            return;
        }

        const leaderPos = this.leaderRef.getPosition();
        // target = leader pos + this follower's personal offset so they dont stack
        const target = leaderPos.clone().add(this.herdOffset);
        target.y = 2;

        const dir = target.clone().sub(this.position);
        dir.y = 0;
        const dist = dir.length();

        // only move if not already close enough (avoid jitter when stacked)
        if (dist > 1.0) {
            dir.normalize();
            // followers are slightly FASTER than leader when far, slows down when close
            // this gives the zombie surge effect -- they bunch up then slow down
            const speed = Math.min(7.0, 2.5 + dist * 0.3);
            this.position.addScaledVector(dir, speed * deltaTime);
            this.position.y = 2;
            this.mesh.position.copy(this.position);
            this.mesh.rotation.y = Math.atan2(dir.x, dir.z);
        }
    }

    public update(deltaTime: number): void {
        this.tickGLBMixer(deltaTime);
        if (!this.hasLanded) {
            // raining from sky, spinning down
            this.position.y -= this.fallSpeed * deltaTime;
            this.mesh.rotation.x += deltaTime * 3;
            if (this.position.y <= 2) {
                this.position.y = 2;
                this.hasLanded = true;
                this.mesh.rotation.x = 0;
                if (this.isLeader) {
                    console.log('ðŸ‘‘ *THUD* DA LEADER HAS LANDED. FIND DA WEY BRUDDAS.');
                    this.speak();
                }
            }
            this.mesh.position.copy(this.position);
            return;
        }

        // herd brain -- leader thinks, followers react
        if (this.isLeader) {
            this.updateLeader(deltaTime);
        } else {
            this.updateFollower(deltaTime);
        }

        // clicking -- everyone clicks but leader clicks more often
        this.clickTimer += deltaTime;
        if (this.clickTimer >= this.clickInterval) {
            this.clickTimer = 0;
            this.clickInterval = this.isLeader
                ? (0.4 + Math.random() * 0.8)   // leader clicks urgently
                : (0.8 + Math.random() * 1.6);   // followers click lazily
            this.doClickSound();
            if (Math.random() < (this.isLeader ? 0.5 : 0.2)) {
                this.speak();
            }
        }

        // head bob -- more frantic when chasing
        this.wanderTimer += deltaTime * (this.leaderState === 'chasing' ? 14 : 8);
        this.mesh.position.y = this.position.y + Math.abs(Math.sin(this.wanderTimer)) * 0.3;

        // crown bobs with a lil float -- look at da leader go
        if (this.crownMesh) {
            this.crownMesh.position.y = 1.8 + Math.sin(Date.now() * 0.003) * 0.12;
            this.crownMesh.rotation.y += deltaTime * 0.8;
            // spin da wey knot -- only da leader has da knot
            const daWeyKnot = this.crownMesh.getObjectByName('da-wey-knot');
            if (daWeyKnot) { daWeyKnot.rotation.y += deltaTime * 3.0; daWeyKnot.rotation.x += deltaTime * 1.5; }
        }
    }

    public getType(): string {
        return 'ugandan_knuckles'; // spit on him if he doesnt know da wey
    }
}
