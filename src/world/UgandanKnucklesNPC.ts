import * as THREE from 'three';
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

// rate limiter so the clicking doesnt make u want to close the tab
// max 1 click sound per 0.18s globally across the ENTIRE herd. one. single. click. ugh
let _lastClickTime: number = 0;
const CLICK_RATE_LIMIT_MS = 180;

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

function playClick(vol: number = 0.1): void { // volume axed 75% bc it was literally destroying everyone's ears ugh
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
    }

    // called by UgandanKnucklesEvent to crown one as leader
    public makeLeader(): void {
        this.isLeader = true;
        // build the crown and attach it to the mesh
        this.crownMesh = this.buildCrown();
        this.mesh.add(this.crownMesh);
        console.log('%c👑 DA LEADER HAS BEEN CHOSEN. FOLLOW DA WEY.', 'color:gold;font-weight:bold;font-size:14px');
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
        return g;
    }

    private buildMesh(): THREE.Group {
        const group = new THREE.Group();

        // main head - big round reddish purple knuckles head
        const headGeo = new THREE.SphereGeometry(1.1, 20, 20);
        const headMat = new THREE.MeshStandardMaterial({ color: 0x8B2020, roughness: 0.7 });
        const head = new THREE.Mesh(headGeo, headMat);
        head.castShadow = true;
        group.add(head);

        // face plate - the lighter front face area
        const faceGeo = new THREE.SphereGeometry(0.85, 16, 16);
        const faceMat = new THREE.MeshStandardMaterial({ color: 0xc4603e, roughness: 0.8 });
        const face = new THREE.Mesh(faceGeo, faceMat);
        face.position.set(0, -0.05, 0.35);
        face.scale.set(1, 0.9, 0.6);
        group.add(face);

        // big googly white eyes
        const eyeWhiteGeo = new THREE.SphereGeometry(0.28, 12, 12);
        const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const leftEyeWhite = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
        leftEyeWhite.position.set(-0.32, 0.2, 0.9);
        group.add(leftEyeWhite);

        const rightEyeWhite = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
        rightEyeWhite.position.set(0.32, 0.2, 0.9);
        group.add(rightEyeWhite);

        // pupils - massive black dots (ugandan knuckles has HUGE pupils lol)
        const pupilGeo = new THREE.SphereGeometry(0.18, 8, 8);
        const pupilMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
        const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
        leftPupil.position.set(-0.3, 0.2, 1.1);
        group.add(leftPupil);

        const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
        rightPupil.position.set(0.3, 0.2, 1.1);
        group.add(rightPupil);

        // big flat red nose - the signature ugandan knuckles shnoz
        const noseGeo = new THREE.BoxGeometry(0.9, 0.3, 0.25);
        const noseMat = new THREE.MeshStandardMaterial({ color: 0xcc2222, roughness: 0.5 });
        const nose = new THREE.Mesh(noseGeo, noseMat);
        nose.position.set(0, -0.1, 1.05);
        nose.scale.set(1, 0.7, 1);
        group.add(nose);

        // nose nostrils (two lil dots)
        const nostrilGeo = new THREE.SphereGeometry(0.1, 6, 6);
        const nostrilMat = new THREE.MeshBasicMaterial({ color: 0x661111 });
        const leftNostril = new THREE.Mesh(nostrilGeo, nostrilMat);
        leftNostril.position.set(-0.22, -0.12, 1.15);
        group.add(leftNostril);
        const rightNostril = new THREE.Mesh(nostrilGeo, nostrilMat);
        rightNostril.position.set(0.22, -0.12, 1.15);
        group.add(rightNostril);

        // dreadlocks / spiky head things on top - classic knuckles look
        const dreadMat = new THREE.MeshStandardMaterial({ color: 0x701515, roughness: 0.9 });
        const dreadPositions = [
            { x: -0.5, z: 0.0, ry: -0.4 },
            { x: -0.2, z: 0.15, ry: -0.1 },
            { x: 0.2, z: 0.15, ry: 0.1 },
            { x: 0.5, z: 0.0, ry: 0.4 },
            { x: 0.0, z: -0.1, ry: 0.0 },
        ];
        for (const d of dreadPositions) {
            const dreadGeo = new THREE.ConeGeometry(0.18, 0.8, 6);
            const dread = new THREE.Mesh(dreadGeo, dreadMat);
            dread.position.set(d.x, 1.1, d.z);
            dread.rotation.z = d.ry;
            dread.castShadow = true;
            group.add(dread);
        }

        // tiny stubby body
        const bodyGeo = new THREE.CylinderGeometry(0.6, 0.5, 0.9, 8);
        const bodyMat = new THREE.MeshStandardMaterial({ color: 0x8B2020, roughness: 0.7 });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.position.set(0, -1.4, 0);
        body.castShadow = true;
        group.add(body);

        // lil arms - stubby knuckles arms
        const armGeo = new THREE.CylinderGeometry(0.18, 0.15, 0.75, 6);
        const armMat = new THREE.MeshStandardMaterial({ color: 0x8B2020, roughness: 0.7 });

        const leftArm = new THREE.Mesh(armGeo, armMat);
        leftArm.position.set(-0.85, -1.3, 0);
        leftArm.rotation.z = Math.PI / 3;
        leftArm.castShadow = true;
        group.add(leftArm);

        const rightArm = new THREE.Mesh(armGeo, armMat);
        rightArm.position.set(0.85, -1.3, 0);
        rightArm.rotation.z = -Math.PI / 3;
        rightArm.castShadow = true;
        group.add(rightArm);

        // knuckle spikes on fists (its his whole thing)
        const spikeGeo = new THREE.ConeGeometry(0.08, 0.35, 5);
        const spikeMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.6 });
        const fistPositions = [
            { x: -1.3, y: -1.05, z: 0.12 }, { x: -1.3, y: -1.05, z: -0.12 },
            { x: 1.3, y: -1.05, z: 0.12 }, { x: 1.3, y: -1.05, z: -0.12 }
        ];
        for (const f of fistPositions) {
            const spike = new THREE.Mesh(spikeGeo, spikeMat);
            spike.position.set(f.x, f.y, f.z);
            spike.rotation.z = f.x < 0 ? -Math.PI / 2.2 : Math.PI / 2.2;
            group.add(spike);
        }

        // stubby legs
        const legGeo = new THREE.CylinderGeometry(0.2, 0.22, 0.6, 6);
        const legMat = new THREE.MeshStandardMaterial({ color: 0x701515, roughness: 0.8 });
        const leftLeg = new THREE.Mesh(legGeo, legMat);
        leftLeg.position.set(-0.3, -2.05, 0);
        group.add(leftLeg);
        const rightLeg = new THREE.Mesh(legGeo, legMat);
        rightLeg.position.set(0.3, -2.05, 0);
        group.add(rightLeg);

        // boots (red)
        const bootGeo = new THREE.BoxGeometry(0.45, 0.3, 0.6);
        const bootMat = new THREE.MeshStandardMaterial({ color: 0xdd1111 });
        const leftBoot = new THREE.Mesh(bootGeo, bootMat);
        leftBoot.position.set(-0.3, -2.5, 0.1);
        group.add(leftBoot);
        const rightBoot = new THREE.Mesh(bootGeo, bootMat);
        rightBoot.position.set(0.3, -2.5, 0.1);
        group.add(rightBoot);

        return group;
    }

    private doClickSound(): void {
        // leaders click louder -- they are the leader. they earned it.
        playClick(this.isLeader ? 0.15 : 0.0625); // reduced by 75% nyaa~
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
        if (!this.hasLanded) {
            // raining from sky, spinning down
            this.position.y -= this.fallSpeed * deltaTime;
            this.mesh.rotation.x += deltaTime * 3;
            if (this.position.y <= 2) {
                this.position.y = 2;
                this.hasLanded = true;
                this.mesh.rotation.x = 0;
                if (this.isLeader) {
                    console.log('👑 *THUD* DA LEADER HAS LANDED. FIND DA WEY BRUDDAS.');
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
        }
    }

    public getType(): string {
        return 'ugandan_knuckles'; // spit on him if he doesnt know da wey
    }
}
