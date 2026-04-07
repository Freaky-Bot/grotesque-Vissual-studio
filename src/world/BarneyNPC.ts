// BARNEY THE DINOSAUR -- i love you, you love me, we're a happy familieeee
// big purple T-rex looking homie who wanders around singing and hugging
// the most dangerous entity in the cat god world frankly

import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
import { BaseNPC } from './BaseNPC';

export class BarneyNPC extends BaseNPC {
    private singSongTimer: number = Math.random() * 5;
    private singSongInterval: number = 6 + Math.random() * 8; // sings every 6-14 seconds
    private walkTimer: number = 0;
    private leftArm: THREE.Group;
    private rightArm: THREE.Group;
    private armWaveTimer: number = 0;
    private isWaving: boolean = false;
    private audioCtx: AudioContext | null = null;

    // the iconic barney songs lol
    private readonly songs: string[] = [
        'I LOVE YOU, YOU LOVE ME',
        "WE'RE A HAPPY FAMILY",
        'WITH A GREAT BIG HUG AND A KISS FROM ME TO YOU',
        "WON'T YOU SAY YOU LOVE ME TOO",
        'I LOVE YOU, YOU LOVE ME',
        "WE'RE BEST FRIENDS AS FRIENDS CAN BE",
        'SUPER DEE DUPER!!',
        'BIG PURPLE HUGS FOR EVERYONE!!',
        'TODAY IS A BEAUTIFUL DAY!!',
        "LET'S IMAGINE TOGETHER!!",
        'SHARING AND CARING!! ðŸ’œ',
        'BARNEY IS YOUR DINOSAUR~ ðŸ¦•'
    ];

    constructor(position: THREE.Vector3) {
        super(position);
        this.bubbleHeadOffset = 4.5; // barney is a big boi
        this.dialogues = this.songs;

        // build the big purple lad
        const { group, leftArm, rightArm } = this.buildMesh();
        this.mesh = group;
        this.leftArm = leftArm;
        this.rightArm = rightArm;
        this.mesh.position.copy(this.position);

        // try audio context for singing sounds
        try {
            this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        } catch (e) {
            // no audio, barney sings silently into the void
        }

        // TIME TO LOAD DA GLB. barney deserves better than a box. he is a LEGEND.
        this.tryLoadGLBModel(6.0);
    }

    private buildMesh(): { group: THREE.Group; leftArm: THREE.Group; rightArm: THREE.Group } {
        // REBUILT BARNEY -- tall, dopey, friendly dinosaur. T-rex proportions but rounder.
        // tiny arms are a feature. big round tummy. wide face with dopey smile.
        const g = new THREE.Group();

        const purpleMat = new THREE.MeshPhongMaterial({ color: 0x7b2d8b, emissive: 0x1a0518 });
        const bellyMat  = new THREE.MeshPhongMaterial({ color: 0xd4b04a, emissive: 0x1a0c00 });
        const whiteMat  = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const darkMat   = new THREE.MeshBasicMaterial({ color: 0x111111 });
        const pinkMat   = new THREE.MeshPhongMaterial({ color: 0xff88bb });
        const toeMat    = new THREE.MeshPhongMaterial({ color: 0x5a1f66 });
        const loveMat   = new THREE.MeshBasicMaterial({ color: 0xff44aa, wireframe: false });

        // TAIL: thick dinosaur tail, TubeGeometry
        const tailCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 1.65, -1.2),
            new THREE.Vector3(-0.45, 1.35, -1.85),
            new THREE.Vector3(-1.15, 0.85, -2.15),
            new THREE.Vector3(-2.05, 0.42, -1.95),
            new THREE.Vector3(-2.55, 0.18, -1.35),
        ]);
        g.add(new THREE.Mesh(new THREE.TubeGeometry(tailCurve, 14, 0.38, 10), purpleMat));

        // LEGS: thick stubby dino legs with 3 toes
        for (const side of [-1, 1]) {
            const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.48, 1.4, 9), purpleMat);
            thigh.position.set(side * 0.62, 0.72, 0); thigh.castShadow = true; g.add(thigh);
            const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.35, 1.15, 9), purpleMat);
            shin.position.set(side * 0.62, -0.65, 0.12); shin.castShadow = true; g.add(shin);
            const foot = new THREE.Mesh(new THREE.SphereGeometry(0.42, 9, 7), purpleMat);
            foot.scale.set(0.88, 0.52, 1.3); foot.position.set(side * 0.62, -1.42, 0.35); g.add(foot);
            // 3 toes
            for (let t = -1; t <= 1; t++) {
                const toe = new THREE.Mesh(new THREE.SphereGeometry(0.14, 7, 6), toeMat);
                toe.position.set(side * 0.62 + t * 0.22, -1.62, 0.65); g.add(toe);
            }
        }

        // BODY: LatheGeometry big round pear-shaped dino body
        const bodyPoints = [
            new THREE.Vector2(0,    0),
            new THREE.Vector2(0.72, 0.1),
            new THREE.Vector2(1.05, 0.55),
            new THREE.Vector2(1.22, 1.08),  // hips/butt
            new THREE.Vector2(1.35, 1.62),  // round tummy
            new THREE.Vector2(1.28, 2.12),
            new THREE.Vector2(1.15, 2.52),
            new THREE.Vector2(0.98, 2.82),  // shoulders
            new THREE.Vector2(0.88, 3.0),
        ];
        const body = new THREE.Mesh(new THREE.LatheGeometry(bodyPoints, 12), purpleMat);
        body.position.y = 1.42; body.castShadow = true; g.add(body);

        // round belly patch (yellow)
        const belly = new THREE.Mesh(new THREE.SphereGeometry(1.0, 10, 8), bellyMat);
        belly.scale.set(0.82, 0.78, 0.55); belly.position.set(0, 2.85, 1.1); g.add(belly);

        // TINY ARMS: T-rex arms, comically small for this huge round body
        const leftArm = new THREE.Group();
        leftArm.position.set(-1.0, 4.28, 0.45);
        const lUA = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.62, 8), purpleMat);
        lUA.rotation.z = 0.9; lUA.position.set(-0.28, 0, 0); leftArm.add(lUA);
        const lHand = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), purpleMat);
        lHand.position.set(-0.56, -0.14, 0); leftArm.add(lHand);
        // 2 finger nubs
        for (let f of [-1, 1]) {
            const fng = new THREE.Mesh(new THREE.SphereGeometry(0.08, 5, 4), toeMat);
            fng.position.set(-0.58 + f * 0.11, -0.29, 0.12); leftArm.add(fng);
        }
        g.add(leftArm);

        const rightArm = new THREE.Group();
        rightArm.position.set(1.0, 4.28, 0.45);
        const rUA = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.62, 8), purpleMat);
        rUA.rotation.z = -0.9; rUA.position.set(0.28, 0, 0); rightArm.add(rUA);
        const rHand = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), purpleMat);
        rHand.position.set(0.56, -0.14, 0); rightArm.add(rHand);
        for (let f of [-1, 1]) {
            const fng = new THREE.Mesh(new THREE.SphereGeometry(0.08, 5, 4), toeMat);
            fng.position.set(0.58 + f * 0.11, -0.29, 0.12); rightArm.add(fng);
        }
        g.add(rightArm);

        // NECK: thick barrel neck
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.72, 0.85, 9), purpleMat);
        neck.position.y = 4.62; g.add(neck);

        // HEAD: big round dinosaur noggin, slightly too big
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.88, 12, 10), purpleMat);
        head.scale.set(1.1, 0.92, 1.05); head.position.y = 5.52; head.castShadow = true; g.add(head);

        // SNOUT: big flat dino snout
        const snout = new THREE.Mesh(new THREE.SphereGeometry(0.52, 10, 8), purpleMat);
        snout.scale.set(0.95, 0.68, 1.25); snout.position.set(0, 5.38, 0.82); g.add(snout);

        // nostrils
        for (const nx of [-0.2, 0.2]) {
            const nostril = new THREE.Mesh(new THREE.CircleGeometry(0.07, 7), darkMat);
            nostril.position.set(nx, 5.52, 1.32); g.add(nostril);
        }

        // eyes: big dopey friendly eyes
        for (const ex of [-0.42, 0.42]) {
            const white = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 9), whiteMat);
            white.position.set(ex, 5.72, 0.72); g.add(white);
            const iris = new THREE.Mesh(new THREE.SphereGeometry(0.14, 9, 8), new THREE.MeshBasicMaterial({color:0x1a3a88}));
            iris.position.set(ex, 5.72, 0.82); g.add(iris);
            const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 7), darkMat);
            pupil.position.set(ex, 5.72, 0.89); g.add(pupil);
        }

        // the big dopey smile
        const smile = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.055, 6, 16, Math.PI), pinkMat);
        smile.rotation.z = Math.PI; smile.position.set(0, 5.22, 0.98); g.add(smile);
        const teethBar = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.08, 0.12), whiteMat);
        teethBar.position.set(0, 5.2, 1.0); g.add(teethBar);

        // dino ridge spikes down the back
        for (let i = 0; i < 5; i++) {
            const spike = new THREE.Mesh(new THREE.ConeGeometry(0.1 - i*0.012, 0.38 - i*0.04, 5), toeMat);
            spike.position.set(0, 4.6 - i * 0.35, -0.85 + i * 0.12);
            spike.rotation.x = -0.4; g.add(spike);
        }

        // THE BARNEY LOVE KNOT: sacred geometry, do NOT remove this or it breaks
        const knotMat = new THREE.MeshBasicMaterial({ color: 0xff44aa, wireframe: false });
        const knotGeo = new THREE.TorusKnotGeometry(0.45, 0.1, 80, 10, 2, 3);
        const loveKnot = new THREE.Mesh(knotGeo, knotMat);
        loveKnot.name = 'barney-love-knot';
        loveKnot.position.set(0, 5.6, 0); g.add(loveKnot);

        return { group: g, leftArm, rightArm };
    }

    // play a little jingle on barney's song trigger
    private playSingSound(): void {
        if (!this.audioCtx) return;
        try {
            // play a lil happy major chord -- I. LOVE. YOU.
            const notes = [261.63, 329.63, 392.00, 523.25]; // C4 E4 G4 C5
            notes.forEach((freq, i) => {
                const osc = this.audioCtx!.createOscillator();
                const gain = this.audioCtx!.createGain();
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.12, this.audioCtx!.currentTime + i * 0.18);
                gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx!.currentTime + i * 0.18 + 0.5);
                osc.connect(gain);
                gain.connect(this.audioCtx!.destination);
                osc.start(this.audioCtx!.currentTime + i * 0.18);
                osc.stop(this.audioCtx!.currentTime + i * 0.18 + 0.5);
            });
        } catch (e) {
            // audio context was rude and refused, it happens
        }
    }

    public update(deltaTime: number): void {
        this.tickGLBMixer(deltaTime);
        // barney WALKS, not runs -- he's a friendly gentle giant
        this.randomWalk(deltaTime, 3.5);

        // leg bob while walking -- waddle waddle
        this.walkTimer += deltaTime * 5;
        this.mesh.position.y = this.position.y + Math.abs(Math.sin(this.walkTimer)) * 0.15;

        // singing timer
        this.singSongTimer += deltaTime;
        if (this.singSongTimer >= this.singSongInterval) {
            this.singSongTimer = 0;
            this.singSongInterval = 5 + Math.random() * 10;
            this.speak(); // burst into song lmao
            this.playSingSound();
            this.isWaving = true; // wave arms when singing
            this.armWaveTimer = 0;
        }

        // wave arms when singing -- skip if GLB took over the mesh, those pivots are gone
        if (!this.glbLoaded && this.isWaving) {
            this.armWaveTimer += deltaTime * 4;
            const wave = Math.sin(this.armWaveTimer) * 0.6;
            this.leftArm.rotation.z = Math.PI / 12 + wave;
            this.rightArm.rotation.z = -(Math.PI / 12 + wave);
            if (this.armWaveTimer >= Math.PI * 3) { // wave for about 2.5 seconds
                this.isWaving = false;
                this.leftArm.rotation.z = Math.PI / 12;
                this.rightArm.rotation.z = -Math.PI / 12;
            }
        }

        // spin the love knot -- barney loves you and the knot proves it
        const loveKnot = this.mesh.getObjectByName('barney-love-knot');
        if (loveKnot) { loveKnot.rotation.y += deltaTime * 1.2; loveKnot.rotation.z += deltaTime * 0.8; }
    }

    public getType(): string {
        return 'barney'; // SUPER DEE DUPER
    }
}
