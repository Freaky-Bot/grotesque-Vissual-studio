import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

// DO U KNO DA WEY
// this is the ugandan knuckles npc, very important for the game lore
// they click their tongues and look for their queen, totally normal stuff

export class UgandanKnucklesNPC extends BaseNPC {
    private clickTimer: number = Math.random() * 2; // random offset so they dont all click at once lol
    private clickInterval: number = 0.8 + Math.random() * 1.2; // between 0.8-2 seconds
    private fallSpeed: number = 8 + Math.random() * 6; // raining down from sky yolo
    private hasLanded: boolean = false;
    private wanderTimer: number = 0;
    private audioCtx: AudioContext | null = null;

    constructor(position: THREE.Vector3) {
        super(position);
        this.bubbleHeadOffset = 2.5; // short lil guy, dont need much offset
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
            'SHOW ME DA WEY'
        ];
        // try to get audio context, might fail if browser is being weird
        try {
            this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        } catch (e) {
            // no audio i guess, whatever
        }
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
        if (!this.audioCtx) return;
        try {
            // make a clicky noise using a buffer of noise, classic ugandan click
            const bufferSize = this.audioCtx.sampleRate * 0.04; // 40ms click
            const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                // exponential decay white noise = tongue click sound roughly
                data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 8);
            }
            const source = this.audioCtx.createBufferSource();
            source.buffer = buffer;

            const gain = this.audioCtx.createGain();
            gain.gain.value = 0.3;
            source.connect(gain);
            gain.connect(this.audioCtx.destination);
            source.start();
        } catch (e) {
            // audio context probably suspended or something, whatever
        }
    }

    public update(deltaTime: number): void {
        if (!this.hasLanded) {
            // still falling from sky, rain em down
            this.position.y -= this.fallSpeed * deltaTime;
            this.mesh.rotation.x += deltaTime * 3; // spinning as they fall lol
            if (this.position.y <= 2) {
                this.position.y = 2;
                this.hasLanded = true;
                this.mesh.rotation.x = 0; // stop spinning once landed
                console.log('🦔 *THUD* DO U KNO DA WEY');
            }
            this.mesh.position.copy(this.position);
            return;
        }

        // landed - now wander around looking for queen
        this.randomWalk(deltaTime, 4 + Math.random() * 0.5);

        // clicking tongue timer
        this.clickTimer += deltaTime;
        if (this.clickTimer >= this.clickInterval) {
            this.clickTimer = 0;
            this.clickInterval = 0.6 + Math.random() * 1.4; // vary it up
            this.doClickSound();
            if (Math.random() < 0.3) {
                this.speak(); // occasionally yell about the queen
            }
        }

        // lil bob animation while walking
        this.wanderTimer += deltaTime * 8;
        this.mesh.position.y = this.position.y + Math.abs(Math.sin(this.wanderTimer)) * 0.3;
    }

    public getType(): string {
        return 'ugandan_knuckles'; // spit on him if he doesnt know da wey
    }
}
