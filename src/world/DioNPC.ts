import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

// KONO DIO DA!!!!!
// the villain himself. DIO BRANDO. vampire. time stopper. cat world's greatest threat.
// does NOT get a domain -- instead he stops time. ZA WARUDO. TOKI WO TOMARE.
// way scarier than a glowing sphere tbh

interface KnifeProj {
    mesh: THREE.Mesh;
    vel: THREE.Vector3;
    pos: THREE.Vector3;
    life: number;
}

export class DioNPC extends BaseNPC {
    private playerRef: THREE.Vector3 | null = null;
    private knives: KnifeProj[] = [];
    private knifeCooldown: number = 2; // first knife comes quick
    private zaWarudoCooldown: number = 30; // first ZA WARUDO after 30s -- give player a chance to know who they're dealing with

    private readonly AGGRO_RANGE: number = 70; // DIO sees you from VERY far away. he always does.
    private readonly CHASE_SPEED: number = 5.5; // menacingly quick for a tall vampire

    // main.ts wires this -- when DIO stops time, the world obeys
    public onZaWarudo: (() => void) | null = null;

    constructor(position: THREE.Vector3) {
        super(position);
        this.mesh = this.buildDio();
        this.mesh.position.copy(this.position);
        this.dialogues = [
            'KONO DIO DA!!!',
            'WRYYYYYYYYYYY!!!',
            'IT WAS ME, DIO!!',
            'MUDA MUDA MUDA MUDA MUDA MUDA!!!',
            'ZA WARUDO!!! TOKI WO TOMARE!!!',
            'you thought it was Barney... but it was me, DIO!!',
            'your next line is: "that\'s impossible!!"',
            'ROAD ROLLER DA!!!!',
            'I! DIO! WILL BE THE ONE TO ELIMINATE YOU!!',
            'even if heaven and earth were reversed, I would still be victorious.',
            'time has stopped. this is MY eternity.',
            'I have discarded my humanity, JOJO!!',
            'the power of THE WORLD... is absolute!',
            'you are nothing but a puzzle piece. and I decide where it goes.',
            'ゴゴゴゴゴゴゴゴ',
            'gimme your best shot. if you\'re gonna pull the trigger, pull it.',
            'five seconds. did you feel it pass?',
            'how could you possibly hope to touch DIO?',
            'CHECKMATE.',
            'what a useless ability.',
            'now... ZA WARUDO!!',
        ];
        this.bubbleHeadOffset = 7.5; // tall
        this.dialogueTimer = 3;
    }

    public setPlayerRef(pos: THREE.Vector3): void {
        this.playerRef = pos;
    }

    private buildDio(): THREE.Group {
        const g = new THREE.Group();

        // DIO's palette -- gold coat, purple pants, pale dead-man skin, glowing blonde hair
        const goldMat     = new THREE.MeshPhongMaterial({ color: 0xc8940a, emissive: 0x332200, emissiveIntensity: 0.5 });
        const darkGoldMat = new THREE.MeshPhongMaterial({ color: 0x9a6f00, emissive: 0x221100, emissiveIntensity: 0.3 });
        const purpleMat   = new THREE.MeshPhongMaterial({ color: 0x3d0070 });
        const skinMat     = new THREE.MeshPhongMaterial({ color: 0xe8daba }); // vampire pale -- not dead but not alive
        const hairMat     = new THREE.MeshPhongMaterial({ color: 0xf0d800, emissive: 0x554400, emissiveIntensity: 0.8 });
        const eyeMat      = new THREE.MeshPhongMaterial({ color: 0xff2200, emissive: 0xdd0000, emissiveIntensity: 3.0 });
        const capeMat     = new THREE.MeshPhongMaterial({ color: 0x180028, side: THREE.DoubleSide, transparent: true, opacity: 0.93 });
        const bootMat     = new THREE.MeshPhongMaterial({ color: 0xb8860b, emissive: 0x221100, emissiveIntensity: 0.2 });
        const heartMat    = new THREE.MeshPhongMaterial({ color: 0xff2255, emissive: 0xcc0033, emissiveIntensity: 2.5 });
        const whiteMat    = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0x444444, emissiveIntensity: 0.3 });
        const boneMat     = new THREE.MeshPhongMaterial({ color: 0xddccaa }); // bone necklace

        // ========== LEGS ==========
        const lLeg = new THREE.Mesh(new THREE.BoxGeometry(0.78, 2.3, 0.78), purpleMat);
        lLeg.position.set(-0.52, 1.15, 0);
        g.add(lLeg);
        const rLeg = new THREE.Mesh(new THREE.BoxGeometry(0.78, 2.3, 0.78), purpleMat);
        rLeg.position.set(0.52, 1.15, 0);
        g.add(rLeg);

        // gold boots with defined soles -- DIO has ICONIC boots
        const lBoot = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.7, 1.0), bootMat);
        lBoot.position.set(-0.52, 0.35, 0.06);
        g.add(lBoot);
        const rBoot = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.7, 1.0), bootMat);
        rBoot.position.set(0.52, 0.35, 0.06);
        g.add(rBoot);
        // boot toe caps -- little gold tips pointing forward. menacing.
        const lToe = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.35, 0.4), darkGoldMat);
        lToe.position.set(-0.52, 0.18, 0.54);
        g.add(lToe);
        const rToe = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.35, 0.4), darkGoldMat);
        rToe.position.set(0.52, 0.18, 0.54);
        g.add(rToe);

        // ========== TORSO ==========
        const torso = new THREE.Mesh(new THREE.BoxGeometry(2.1, 2.6, 1.1), goldMat);
        torso.position.y = 3.55;
        g.add(torso);

        // belt -- dark gold, wide, separates the jacket properly
        const belt = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.32, 1.15), darkGoldMat);
        belt.position.y = 2.25;
        g.add(belt);
        // belt buckle -- heart
        const buckle = new THREE.Mesh(new THREE.SphereGeometry(0.18, 6, 6), heartMat);
        buckle.position.set(0, 2.25, 0.58);
        g.add(buckle);

        // HEART on chest -- DIO's iconic chest heart medallion. THE signature detail.
        // two overlapping spheres make a heart shape lol
        const heartL = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 8), heartMat);
        heartL.position.set(-0.17, 4.0, 0.57);
        g.add(heartL);
        const heartR = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 8), heartMat);
        heartR.position.set(0.17, 4.0, 0.57);
        g.add(heartR);
        // bottom point of heart
        const heartPoint = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.35, 5), heartMat);
        heartPoint.position.set(0, 3.65, 0.57);
        heartPoint.rotation.z = Math.PI;
        g.add(heartPoint);

        // v-cut neckline -- dark plunge collar
        const vMat = new THREE.MeshPhongMaterial({ color: 0x1a0028 });
        const vNeck = new THREE.Mesh(new THREE.ConeGeometry(0.38, 0.8, 3), vMat);
        vNeck.position.set(0, 4.6, 0.52);
        vNeck.rotation.z = Math.PI;
        g.add(vNeck);

        // ========== SHOULDER PADS ==========
        // DIO has HUGE shoulder ornaments. very important. round golden discs.
        const lShoulderPad = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.45, 0.28, 10), goldMat);
        lShoulderPad.position.set(-1.3, 4.65, 0);
        lShoulderPad.rotation.z = 0.15;
        g.add(lShoulderPad);
        const rShoulderPad = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.45, 0.28, 10), goldMat);
        rShoulderPad.position.set(1.3, 4.65, 0);
        rShoulderPad.rotation.z = -0.15;
        g.add(rShoulderPad);
        // heart jewels on shoulder pads
        const lShoulderGem = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), heartMat);
        lShoulderGem.position.set(-1.3, 4.82, 0);
        g.add(lShoulderGem);
        const rShoulderGem = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), heartMat);
        rShoulderGem.position.set(1.3, 4.82, 0);
        g.add(rShoulderGem);

        // ========== ARMS ==========
        const lArm = new THREE.Mesh(new THREE.BoxGeometry(0.64, 2.0, 0.64), goldMat);
        lArm.position.set(-1.38, 3.35, 0);
        g.add(lArm);
        const rArm = new THREE.Mesh(new THREE.BoxGeometry(0.64, 2.0, 0.64), goldMat);
        rArm.position.set(1.38, 3.35, 0);
        g.add(rArm);
        // fingerless gloves -- pale skin showing through gold wristbands
        const lGlove = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.4, 0.7), darkGoldMat);
        lGlove.position.set(-1.38, 2.35, 0);
        g.add(lGlove);
        const rGlove = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.4, 0.7), darkGoldMat);
        rGlove.position.set(1.38, 2.35, 0);
        g.add(rGlove);
        const lHand = new THREE.Mesh(new THREE.SphereGeometry(0.32, 7, 5), skinMat);
        lHand.position.set(-1.38, 2.08, 0);
        g.add(lHand);
        const rHand = new THREE.Mesh(new THREE.SphereGeometry(0.32, 7, 5), skinMat);
        rHand.position.set(1.38, 2.08, 0);
        g.add(rHand);

        // ========== BONE NECKLACE ==========
        // DIO wears a necklace made of human vertebrae bc hes insane lol
        for (let i = 0; i < 7; i++) {
            const bone = new THREE.Mesh(new THREE.SphereGeometry(0.1, 5, 4), boneMat);
            const angle = (i / 7) * Math.PI - Math.PI * 0.5;
            bone.position.set(Math.cos(angle) * 0.55, 4.78 + Math.sin(angle) * 0.12, 0.48);
            g.add(bone);
        }

        // ========== HEAD ==========
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.88, 12, 10), skinMat);
        head.position.y = 5.65;
        head.scale.set(1, 1.05, 0.95);
        g.add(head);

        // strong jawline -- DIO has an angular chad face
        const jaw = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.35, 0.82), skinMat);
        jaw.position.set(0, 5.1, 0);
        g.add(jaw);

        // DIO's HAIR -- iconic swept-back blonde spikes. important.
        // hair base -- big poofy back volume
        const hairBase = new THREE.Mesh(new THREE.SphereGeometry(0.7, 9, 7), hairMat);
        hairBase.position.set(0, 6.2, -0.25);
        hairBase.scale.set(1.25, 0.7, 1.1);
        g.add(hairBase);

        // front swoop -- the hair that sweeps up from forehead
        const hairFront = new THREE.Mesh(new THREE.SphereGeometry(0.45, 8, 6), hairMat);
        hairFront.position.set(0, 6.35, 0.4);
        hairFront.scale.set(1.15, 0.55, 0.6);
        g.add(hairFront);

        // individual spikes -- swept back dramatically
        const spikeDefs = [
            { x: -0.55, y: 6.7, z: -0.1, rx: -0.3, rz: -0.5, sy: 0.75 },
            { x: -0.28, y: 6.85, z: 0.1,  rx: -0.4, rz: -0.25, sy: 0.85 },
            { x:  0,    y: 6.9,  z: 0.15, rx: -0.5, rz: 0,    sy: 0.9  },
            { x:  0.28, y: 6.85, z: 0.1,  rx: -0.4, rz: 0.25, sy: 0.85 },
            { x:  0.55, y: 6.7,  z: -0.1, rx: -0.3, rz: 0.5,  sy: 0.75 },
            { x: -0.3,  y: 6.6,  z: -0.35, rx: -0.15, rz: -0.6, sy: 0.65 },
            { x:  0.3,  y: 6.6,  z: -0.35, rx: -0.15, rz: 0.6,  sy: 0.65 },
        ];
        for (const sd of spikeDefs) {
            const spike = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.65, 4), hairMat);
            spike.position.set(sd.x, sd.y, sd.z);
            spike.rotation.x = sd.rx;
            spike.rotation.z = sd.rz;
            spike.scale.y = sd.sy;
            g.add(spike);
        }

        // TIARA -- the iconic DIO headband across the forehead
        const tiara = new THREE.Mesh(new THREE.CylinderGeometry(0.92, 0.88, 0.2, 16, 1, true,
            -Math.PI * 0.5, Math.PI), darkGoldMat);
        tiara.position.set(0, 5.88, 0);
        tiara.rotation.x = Math.PI * 0.5;
        g.add(tiara);

        // heart gem on tiara center -- THE signature
        const tiaraGem = new THREE.Mesh(new THREE.SphereGeometry(0.15, 7, 6), heartMat);
        tiaraGem.position.set(0, 5.92, 0.85);
        g.add(tiaraGem);
        // two side gems
        const tiaraGemL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5), goldMat);
        tiaraGemL.position.set(-0.6, 5.9, 0.68);
        g.add(tiaraGemL);
        const tiaraGemR = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5), goldMat);
        tiaraGemR.position.set(0.6, 5.9, 0.68);
        g.add(tiaraGemR);

        // RED GLOWING EYES -- DIO's stare burns through your soul
        const lEye = new THREE.Mesh(new THREE.SphereGeometry(0.15, 7, 5), eyeMat);
        lEye.position.set(-0.3, 5.62, 0.76);
        g.add(lEye);
        const rEye = new THREE.Mesh(new THREE.SphereGeometry(0.15, 7, 5), eyeMat);
        rEye.position.set(0.3, 5.62, 0.76);
        g.add(rEye);
        // eye glow pupils -- white inner dot so they look less flat
        const lPupil = new THREE.Mesh(new THREE.SphereGeometry(0.06, 5, 4), whiteMat);
        lPupil.position.set(-0.28, 5.62, 0.88);
        g.add(lPupil);
        const rPupil = new THREE.Mesh(new THREE.SphereGeometry(0.06, 5, 4), whiteMat);
        rPupil.position.set(0.28, 5.62, 0.88);
        g.add(rPupil);

        // SMUG SMIRK -- half smile only. DIO doesn't fully smile for anyone.
        const smirkMat = new THREE.MeshPhongMaterial({ color: 0x330000 });
        const smirk = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.09, 0.1), smirkMat);
        smirk.position.set(0.12, 5.28, 0.78);
        smirk.rotation.z = 0.22;
        g.add(smirk);

        // brow ridge -- strong serious eyebrows angled inward. always judging.
        const browMat = new THREE.MeshPhongMaterial({ color: 0xd4b800 }); // blonde brow
        const lBrow = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.12), browMat);
        lBrow.position.set(-0.28, 5.82, 0.74);
        lBrow.rotation.z = 0.35;
        g.add(lBrow);
        const rBrow = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.12), browMat);
        rBrow.position.set(0.28, 5.82, 0.74);
        rBrow.rotation.z = -0.35;
        g.add(rBrow);

        // ========== CAPE ==========
        // the signature massive purple-black cape. MANDATORY. DIO without a cape is just a guy.
        const capeMainGeo = new THREE.PlaneGeometry(3.0, 4.0, 1, 4);
        const capeMain = new THREE.Mesh(capeMainGeo, capeMat);
        capeMain.position.set(0, 2.8, -0.7);
        capeMain.rotation.x = 0.1;
        capeMain.name = 'dio-cape';
        g.add(capeMain);

        // cape collar -- stands up around shoulders, very dramatic
        const collarGeo = new THREE.CylinderGeometry(1.35, 1.15, 0.55, 12, 1, true, -Math.PI * 0.6, Math.PI * 1.2);
        const collar = new THREE.Mesh(collarGeo, capeMat);
        collar.position.set(0, 4.55, -0.1);
        g.add(collar);

        // cape sides wrap forward slightly -- makes it feel 3D
        const capeSideGeo = new THREE.PlaneGeometry(1.0, 3.5);
        const capeL = new THREE.Mesh(capeSideGeo, capeMat);
        capeL.position.set(-1.3, 2.7, -0.15);
        capeL.rotation.y = 0.55;
        g.add(capeL);
        const capeR = new THREE.Mesh(capeSideGeo, capeMat);
        capeR.position.set(1.3, 2.7, -0.15);
        capeR.rotation.y = -0.55;
        g.add(capeR);

        // ========== AURA ==========
        // THE WORLD radiates evil. it has a physical presence. it is red-orange and terrifying.
        const aura = new THREE.PointLight(0xff3300, 1.8, 22);
        aura.position.set(0, 4.5, 0);
        g.add(aura);

        // secondary gold glow -- the golden gleam of ambition and ego
        const goldGlow = new THREE.PointLight(0xffaa00, 0.6, 12);
        goldGlow.position.set(0, 5.5, 1.5);
        g.add(goldGlow);

        return g;
    }

    public update(deltaTime: number): void {
        if (!this.isAlive_) return;

        this.dialogueTimer -= deltaTime;
        if (this.dialogueTimer <= 0) {
            this.speak();
            this.dialogueTimer = 7 + Math.random() * 10;
        }

        if (!this.playerRef) return;

        const dist = this.playerRef ? this.position.distanceTo(this.playerRef) : Infinity;

        // DIO chases the player -- he's fixated. relentlessly.
        if (dist < this.AGGRO_RANGE && dist > 3.5) {
            const dir = this.playerRef.clone().sub(this.position).normalize();
            this.targetAngle = Math.atan2(dir.x, dir.z);
            const speed = this.CHASE_SPEED * this.domainSpeedMult;
            this.velocity.x = dir.x * speed;
            this.velocity.z = dir.z * speed;
            this.applyGravity(deltaTime);
            this.position.addScaledVector(this.velocity, deltaTime);
            this.position.x = Math.max(-200, Math.min(200, this.position.x));
            this.position.z = Math.max(-200, Math.min(200, this.position.z));
        } else {
            this.applyGravity(deltaTime);
        }

        this.mesh.position.copy(this.position);
        if (this.mesh.rotation) {
            this.mesh.rotation.y += (this.targetAngle - this.mesh.rotation.y) * 0.12;
        }

        // cape flap -- rotate slightly toward movement direction for drama
        const cape = this.mesh.getObjectByName('dio-cape');
        if (cape) {
            cape.rotation.x = 0.12 + Math.sin(Date.now() * 0.003) * 0.06;
        }

        // KNIFE THROW -- MUDA MUDA range attack
        this.knifeCooldown -= deltaTime;
        if (this.knifeCooldown <= 0 && dist < 45) {
            this.throwKnife();
            this.knifeCooldown = 3 + Math.random() * 3;
        }

        // ZA WARUDO -- time stop. fires on cooldown when hostile to player
        this.zaWarudoCooldown -= deltaTime;
        if (this.zaWarudoCooldown <= 0 && dist < this.AGGRO_RANGE && this.isHostileToPlayer()) {
            this.triggerZaWarudo();
            this.zaWarudoCooldown = 50 + Math.random() * 30; // once per 50-80s
        }

        // update knife projectiles
        for (const k of this.knives) {
            k.life -= deltaTime;
            k.pos.addScaledVector(k.vel, deltaTime);
            k.mesh.position.copy(k.pos);
            k.mesh.rotation.x += deltaTime * 14; // spinning knife of doom
        }

        // clean up dead knives
        this.knives = this.knives.filter(k => {
            if (k.life <= 0 || k.pos.y < -5) {
                k.mesh.parent?.remove(k.mesh);
                return false;
            }
            return true;
        });
    }

    private throwKnife(): void {
        if (!this.playerRef) return;
        const mat = new THREE.MeshPhongMaterial({ color: 0xbbbbbb, emissive: 0x333333 });
        const knifeMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.9, 5), mat);

        const start = this.position.clone();
        start.y += 4.5; // throw from hand height

        const dir = this.playerRef.clone();
        dir.y += 1.2; // aim at chest height
        dir.sub(start).normalize().multiplyScalar(24); // fast. DIO is precise.

        this.knives.push({ mesh: knifeMesh, vel: dir, pos: start.clone(), life: 2.8 });
        this.mesh.parent?.add(knifeMesh);
    }

    // NPCManager calls this every frame to check knife collision with player
    public tickKnifeHits(playerPos: THREE.Vector3, onHit: (dmg: number) => void): void {
        for (const k of this.knives) {
            if (k.pos.distanceTo(playerPos) < 1.6) {
                onHit(18); // knife hit. ow.
                k.life = -1; // knife is spent
                this.markHostileToPlayer(); // obviously hostile. he THREW a knife.
            }
        }
    }

    private triggerZaWarudo(): void {
        // ゴゴゴゴゴ time stops ゴゴゴゴゴ
        console.log('%cZA WARUDO!!! TOKI WO TOMARE!!!', 'color: gold; font-size: 22px; font-weight: bold; text-shadow: 0 0 10px yellow;');
        console.log('%cゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ', 'color: purple; font-size: 14px;');
        this.onZaWarudo?.();
    }

    public die(): void {
        // knives fall to the ground with their wielder. poetic.
        for (const k of this.knives) k.mesh.parent?.remove(k.mesh);
        this.knives = [];
        super.die();
    }

    public getType(): string { return 'dio'; }
}
