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
        'SHARING AND CARING!! 💜',
        'BARNEY IS YOUR DINOSAUR~ 🦕'
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
        const group = new THREE.Group();

        const purpleMat = new THREE.MeshStandardMaterial({ color: 0x6B2FA0, roughness: 0.75 });
        const greenBellyMat = new THREE.MeshStandardMaterial({ color: 0x7AB648, roughness: 0.8 });
        const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const blackMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
        const yellowMat = new THREE.MeshStandardMaterial({ color: 0xFFD700, roughness: 0.6 });
        const pinkMat = new THREE.MeshBasicMaterial({ color: 0xff88aa });

        // ---- BODY ---- big round barrel chest
        const bodyGeo = new THREE.SphereGeometry(1.3, 20, 16);
        const body = new THREE.Mesh(bodyGeo, purpleMat);
        body.scale.set(1, 1.2, 0.95);
        body.position.set(0, 1.8, 0);
        body.castShadow = true;
        group.add(body);

        // green belly patch -- the signature lighter belly
        const bellyGeo = new THREE.SphereGeometry(0.9, 16, 14);
        const belly = new THREE.Mesh(bellyGeo, greenBellyMat);
        belly.scale.set(0.9, 1.0, 0.35);
        belly.position.set(0, 1.85, 1.05);
        group.add(belly);

        // ---- HEAD ---- big round dinosaur noggin
        const headGeo = new THREE.SphereGeometry(1.0, 20, 16);
        const head = new THREE.Mesh(headGeo, purpleMat);
        head.scale.set(1, 0.9, 1);
        head.position.set(0, 3.55, 0);
        head.castShadow = true;
        group.add(head);

        // SNOUT -- forward jutting jaw like a real dino
        const snoutGeo = new THREE.SphereGeometry(0.65, 16, 12);
        const snout = new THREE.Mesh(snoutGeo, purpleMat);
        snout.scale.set(1, 0.6, 0.9);
        snout.position.set(0, 3.2, 0.85);
        group.add(snout);

        // big smile opening (using a flat disc, dark pink inside)
        const mouthGeo = new THREE.CylinderGeometry(0.55, 0.5, 0.08, 20, 1, false, 0, Math.PI);
        const mouth = new THREE.Mesh(mouthGeo, pinkMat);
        mouth.rotation.x = -Math.PI / 2;
        mouth.rotation.z = Math.PI;
        mouth.position.set(0, 3.05, 1.15);
        group.add(mouth);

        // big TEETH -- barney has that big smile
        const toothGeo = new THREE.BoxGeometry(0.18, 0.2, 0.1);
        const toothMat = new THREE.MeshBasicMaterial({ color: 0xfff8f0 });
        for (let i = -1; i <= 1; i++) {
            const tooth = new THREE.Mesh(toothGeo, toothMat);
            tooth.position.set(i * 0.25, 3.12, 1.42);
            group.add(tooth);
        }

        // big white eyes
        const eyeGeo = new THREE.SphereGeometry(0.28, 12, 12);
        const leftEye = new THREE.Mesh(eyeGeo, whiteMat);
        leftEye.position.set(-0.42, 3.7, 0.82);
        group.add(leftEye);
        const rightEye = new THREE.Mesh(eyeGeo, whiteMat);
        rightEye.position.set(0.42, 3.7, 0.82);
        group.add(rightEye);

        // pupils -- round and friendly
        const pupilGeo = new THREE.SphereGeometry(0.16, 8, 8);
        const leftPupil = new THREE.Mesh(pupilGeo, blackMat);
        leftPupil.position.set(-0.42, 3.7, 1.05);
        group.add(leftPupil);
        const rightPupil = new THREE.Mesh(pupilGeo, blackMat);
        rightPupil.position.set(0.42, 3.7, 1.05);
        group.add(rightPupil);

        // lil heart-shape pupils because barney = love
        const heartGeo = new THREE.SphereGeometry(0.07, 6, 6);
        const heartMat = new THREE.MeshBasicMaterial({ color: 0xff4488 });
        for (const x of [-0.42, 0.42]) {
            const h = new THREE.Mesh(heartGeo, heartMat);
            h.position.set(x, 3.72, 1.08);
            group.add(h);
        }

        // nostrils
        const nostrilGeo = new THREE.SphereGeometry(0.07, 6, 6);
        const nl = new THREE.Mesh(nostrilGeo, blackMat);
        nl.position.set(-0.2, 3.35, 1.38);
        group.add(nl);
        const nr = new THREE.Mesh(nostrilGeo, blackMat);
        nr.position.set(0.2, 3.35, 1.38);
        group.add(nr);

        // ---- DINO SPIKES along the back ---- ExtrudeGeometry fins look legit
        // cones before = triangle ice cream cones. now they're actual fin shapes.
        const spikeMat = new THREE.MeshStandardMaterial({ color: 0x4a7c2b, roughness: 0.9 });
        const spikeShape = new THREE.Shape();
        spikeShape.moveTo(0, 0);
        spikeShape.lineTo(-0.2, 0);
        spikeShape.quadraticCurveTo(-0.15, 0.3, 0, 0.5);
        spikeShape.quadraticCurveTo(0.15, 0.3, 0.2, 0);
        spikeShape.closePath();
        const spikeExtSettings = { depth: 0.1, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2 };
        const spikeExtGeo = new THREE.ExtrudeGeometry(spikeShape, spikeExtSettings);
        const spikePositions = [
            { pos: [0, 4.4, -0.3] as [number,number,number], rx: 0.1 },
            { pos: [0, 3.35, -0.95] as [number,number,number], rx: 0.2 },
            { pos: [0, 2.9, -1.25] as [number,number,number], rx: 0.15 },
            { pos: [0, 2.45, -1.3] as [number,number,number], rx: 0.1 },
            { pos: [0, 1.9, -1.2] as [number,number,number], rx: 0.05 },
        ];
        for (const { pos, rx } of spikePositions) {
            const spike = new THREE.Mesh(spikeExtGeo, spikeMat);
            spike.position.set(...pos);
            spike.rotation.x = rx;
            group.add(spike);
        }

        // ---- ARMS ---- stubby T-rex style arms in pivot groups for waving
        const leftArmGroup = new THREE.Group();
        leftArmGroup.position.set(-1.45, 2.5, 0);

        const upperArmGeo = new THREE.CylinderGeometry(0.3, 0.25, 0.9, 10);
        const luArm = new THREE.Mesh(upperArmGeo, purpleMat);
        luArm.position.set(0, -0.45, 0);
        luArm.castShadow = true;
        leftArmGroup.add(luArm);

        // forearm
        const foreArmGeo = new THREE.CylinderGeometry(0.22, 0.18, 0.7, 10);
        const lfArm = new THREE.Mesh(foreArmGeo, purpleMat);
        lfArm.position.set(0, -1.1, 0.18);
        lfArm.rotation.x = -0.4;
        leftArmGroup.add(lfArm);

        // lil clawed hand
        const handGeo = new THREE.SphereGeometry(0.25, 8, 8);
        const lHand = new THREE.Mesh(handGeo, purpleMat);
        lHand.position.set(0, -1.55, 0.42);
        leftArmGroup.add(lHand);

        // fingers (3 lil stubs for T-rex authenticity)
        const fingerGeo = new THREE.CylinderGeometry(0.07, 0.04, 0.28, 6);
        for (let i = -1; i <= 1; i++) {
            const f = new THREE.Mesh(fingerGeo, purpleMat);
            f.position.set(i * 0.12, -1.8, 0.5);
            f.rotation.x = -0.6;
            leftArmGroup.add(f);
        }
        leftArmGroup.rotation.z = Math.PI / 12; // hang naturally
        group.add(leftArmGroup);

        // mirror for right arm
        const rightArmGroup = leftArmGroup.clone();
        rightArmGroup.position.set(1.45, 2.5, 0);
        rightArmGroup.rotation.z = -Math.PI / 12;
        rightArmGroup.scale.x = -1; // flip it
        group.add(rightArmGroup);

        // ---- LEGS ---- thick dino legs
        const thighGeo = new THREE.CylinderGeometry(0.45, 0.4, 1.1, 12);
        const shinGeo = new THREE.CylinderGeometry(0.38, 0.28, 0.9, 12);
        const footGeo = new THREE.BoxGeometry(0.55, 0.35, 0.85);

        for (const side of [-1, 1]) {
            const thigh = new THREE.Mesh(thighGeo, purpleMat);
            thigh.position.set(side * 0.6, 0.5, 0);
            thigh.castShadow = true;
            group.add(thigh);

            const shin = new THREE.Mesh(shinGeo, purpleMat);
            shin.position.set(side * 0.6, -0.4, 0.12);
            shin.rotation.x = 0.15;
            shin.castShadow = true;
            group.add(shin);

            const foot = new THREE.Mesh(footGeo, purpleMat);
            foot.position.set(side * 0.62, -1.05, 0.28);
            foot.castShadow = true;
            group.add(foot);
        }

        // ---- TAIL ---- TubeGeometry CatmullRomCurve3 -- the signature barney tail
        // straight tapering cylinder before = log. now it curves back naturally. nice.
        const barneyTailCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 1.4, -1.2),
            new THREE.Vector3(0.1, 1.0, -1.8),
            new THREE.Vector3(0.2, 0.55, -2.2),
            new THREE.Vector3(0.1, 0.3, -2.5),
        ]);
        const tailTube = new THREE.Mesh(new THREE.TubeGeometry(barneyTailCurve, 10, 0.32, 8, false), purpleMat);
        tailTube.castShadow = true;
        group.add(tailTube);

        // also add a LatheGeometry tail base section for extra volume
        const tailBasePoints = [
            new THREE.Vector2(0, 0), new THREE.Vector2(0.45, 0.08),
            new THREE.Vector2(0.42, 0.5), new THREE.Vector2(0.28, 0.8), new THREE.Vector2(0, 0.88),
        ];
        const tailBase = new THREE.Mesh(new THREE.LatheGeometry(tailBasePoints, 10), purpleMat);
        tailBase.position.set(0, 1.0, -1.1);
        tailBase.rotation.x = Math.PI / 2.5;
        group.add(tailBase);

        // lil yellow star shapes on barney's body cuz the show had em
        const starGeo = new THREE.SphereGeometry(0.12, 6, 6);
        for (let i = 0; i < 6; i++) {
            const star = new THREE.Mesh(starGeo, yellowMat);
            star.position.set(
                (Math.random() - 0.5) * 1.6,
                1.2 + Math.random() * 1.8,
                0.9 + Math.random() * 0.3
            );
            star.scale.set(1, 0.5, 0.5); // flat lil star blobs
            group.add(star);
        }

        // TorusKnotGeometry love token floating above Barney -- because love is complicated
        // nobody asked. barney woulda wanted it. rest in peace icon.
        const loveKnot = new THREE.Mesh(
            new THREE.TorusKnotGeometry(0.32, 0.08, 64, 8, 2, 3),
            new THREE.MeshStandardMaterial({ color: 0xff55cc, emissive: 0x551122, emissiveIntensity: 0.8, roughness: 0.3 })
        );
        loveKnot.position.set(0, 5.6, 0);
        loveKnot.name = 'barney-love-knot';
        group.add(loveKnot);

        return { group, leftArm: leftArmGroup, rightArm: rightArmGroup };
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
