import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
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

    // THE WORLD stand -- shows up beside DIO when ZA WARUDO fires. grey humanoid. scary.
    private standGroup: THREE.Group | null = null;
    private standVisible: boolean = false;
    private standTimer: number = 0;
    private readonly STAND_DURATION: number = 5.5;
    private standPulse: number = 0;

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
        // DIO arrives hostile. he was hostile before he got here. he was hostile in utero.
        this.markHostileToPlayer();
        this.markHostileToNpc();

        // KONO GLB DA!!! loading the model. ZA WARUDO of 3D assets.
        this.tryLoadGLBModel(6.5);
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
        // DIO has HUGE shoulder ornaments -- ExtrudeGeometry gives them actual form
        // cylinder discs before = flat as a pancake. now they're 3D geometric shields.
        const shoulderShape = new THREE.Shape();
        shoulderShape.absellipse(0, 0, 0.58, 0.42, 0, Math.PI * 2, false, 0);
        const shoulderExt = { depth: 0.32, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 3 };
        const shoulderGeo = new THREE.ExtrudeGeometry(shoulderShape, shoulderExt);
        const lShoulderPad = new THREE.Mesh(shoulderGeo, goldMat);
        lShoulderPad.position.set(-1.3, 4.45, -0.16);
        lShoulderPad.rotation.z = 0.15;
        g.add(lShoulderPad);
        const rShoulderPad = new THREE.Mesh(shoulderGeo, goldMat);
        rShoulderPad.position.set(1.0, 4.45, -0.16);
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

        // cape collar -- LatheGeometry standing collar, way more dramatic than cylinder
        // a half-open funnel silhouette -- exactly how DIO's collar looks in the manga
        const collarPoints = [
            new THREE.Vector2(1.1, 0.0),
            new THREE.Vector2(1.35, 0.2),
            new THREE.Vector2(1.5, 0.45),
            new THREE.Vector2(1.42, 0.6),
        ];
        const collar = new THREE.Mesh(new THREE.LatheGeometry(collarPoints, 14, -Math.PI * 0.6, Math.PI * 1.2), capeMat);
        collar.position.set(0, 4.4, -0.1);
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
        this.tickGLBMixer(deltaTime);
        if (!this.isAlive_) return;

        // DIO hates EVERYONE. always. no exceptions. refresh every frame so timers never expire.
        this.markHostileToPlayer();
        this.markHostileToNpc();

        this.dialogueTimer -= deltaTime;
        if (this.dialogueTimer <= 0) {
            this.speak();
            this.dialogueTimer = 7 + Math.random() * 10;
        }

        if (!this.playerRef) return;

        const dist = this.playerRef ? this.position.distanceTo(this.playerRef) : Infinity;

        // DIO chases the player -- he's fixated. relentlessly.
        if (dist < this.AGGRO_RANGE && dist > 3.5) {
            this.markHostileToPlayer(); // DIO is ALWAYS hostile. no knife required. he just hates you.
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

        // THE WORLD stand -- hover beside DIO while time is stopped then disappear
        if (this.standVisible && this.standGroup) {
            this.standTimer -= deltaTime;
            this.standPulse += deltaTime;
            // float to DIO's right and slightly forward -- imposing presence beside him
            this.standGroup.position.set(
                this.position.x + Math.cos(this.mesh.rotation.y + 1.4) * 2.8,
                this.position.y + Math.sin(this.standPulse * 3.5) * 0.2,
                this.position.z + Math.sin(this.mesh.rotation.y + 1.4) * 2.8
            );
            this.standGroup.rotation.y = this.mesh.rotation.y + 0.2;
            // pulse the stand light -- it breathes with menace
            const standLight = this.standGroup.getObjectByName('stand-light') as THREE.PointLight;
            if (standLight) standLight.intensity = 2.5 + Math.sin(this.standPulse * 8) * 1.5;
            // spin the ZA WARUDO knot -- time stops for everyone except this knot
            const zaKnot = this.standGroup.getObjectByName('zawarudo-knot');
            if (zaKnot) { zaKnot.rotation.y += deltaTime * 2.2; zaKnot.rotation.x += deltaTime * 1.1; }
            if (this.standTimer <= 0) {
                this.standGroup.visible = false;
                this.standVisible = false;
            }
        }

        // KNIFE THROW -- MUDA MUDA range attack
        this.knifeCooldown -= deltaTime;
        if (this.knifeCooldown <= 0 && dist < 45) {
            this.throwKnife();
            this.knifeCooldown = 3 + Math.random() * 3;
        }

        // ZA WARUDO -- time stop. fires on cooldown when player is in range. DIO needs no excuse.
        this.zaWarudoCooldown -= deltaTime;
        if (this.zaWarudoCooldown <= 0 && dist < this.AGGRO_RANGE) {
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

    // HEAR YE -- THE WORLD doth manifest from the aether to smite all who stand before DIO
    private buildTheWorldStand(): THREE.Group {
        const g = new THREE.Group();
        g.name = 'the-world-stand';

        const silverMat = new THREE.MeshPhongMaterial({ color: 0xc8c8d0, specular: 0xffffff, shininess: 160, emissive: 0x1a1a22 });
        const goldMat = new THREE.MeshPhongMaterial({ color: 0xffd700, emissive: 0xcc7700, emissiveIntensity: 1.4 });
        const eyeMat = new THREE.MeshPhongMaterial({ color: 0xffee00, emissive: 0xffcc00, emissiveIntensity: 4.5 });
        const darkMat = new THREE.MeshPhongMaterial({ color: 0x1c1c24 });
        const fistMat = new THREE.MeshPhongMaterial({ color: 0x9a9aaa, specular: 0xffffff, shininess: 200 });

        // TORSO -- big. muscular. slightly intimidating on purpose.
        const torso = new THREE.Mesh(new THREE.BoxGeometry(1.7, 2.1, 1.05), silverMat);
        torso.position.y = 2.55;
        g.add(torso);

        // HEART ON CHEST -- canonical THE WORLD heart symbol (two spheres + downward cone)
        const heartMatL = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 10), goldMat);
        heartMatL.position.set(-0.24, 2.9, 0.56);
        g.add(heartMatL);
        const heartMatR = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 10), goldMat);
        heartMatR.position.set(0.24, 2.9, 0.56);
        g.add(heartMatR);
        const heartTip = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.44, 8), goldMat);
        heartTip.rotation.z = Math.PI;
        heartTip.position.set(0, 2.52, 0.56);
        g.add(heartTip);

        // HEAD -- slightly squarish. menacing blank face.
        const head = new THREE.Mesh(new THREE.BoxGeometry(1.15, 1.15, 1.05), silverMat);
        head.position.y = 4.15;
        g.add(head);

        // EYES -- bright glowing yellow slits. stand eyes are always unsettling.
        const eyeGeo = new THREE.SphereGeometry(0.14, 9, 9);
        const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
        eyeL.position.set(-0.3, 4.2, 0.55);
        eyeL.scale.set(1, 0.55, 0.6); // squash into a slit
        g.add(eyeL);
        const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
        eyeR.position.set(0.3, 4.2, 0.55);
        eyeR.scale.set(1, 0.55, 0.6);
        g.add(eyeR);

        // HEADBAND -- gold, wraps the forehead. THE WORLD signature look.
        const band = new THREE.Mesh(new THREE.CylinderGeometry(0.61, 0.61, 0.2, 14), goldMat);
        band.position.y = 4.72;
        g.add(band);
        // small gem center of headband
        const gem = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), eyeMat);
        gem.position.set(0, 4.72, 0.61);
        g.add(gem);

        // SHOULDERS -- meaty. overhang the body slightly.
        const shoulderGeo = new THREE.BoxGeometry(0.75, 0.7, 0.8);
        const shoulderL = new THREE.Mesh(shoulderGeo, silverMat);
        shoulderL.position.set(-1.27, 3.45, 0);
        g.add(shoulderL);
        const shoulderR = new THREE.Mesh(shoulderGeo, silverMat);
        shoulderR.position.set(1.27, 3.45, 0);
        g.add(shoulderR);

        // heart symbol on each shoulder -- THE WORLD is thorough with its branding
        const shL = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 8), goldMat);
        shL.position.set(-1.27, 3.62, 0.43);
        g.add(shL);
        const shR = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 8), goldMat);
        shR.position.set(1.27, 3.62, 0.43);
        g.add(shR);

        // UPPER ARMS -- rotated forward for the iconic punching pose
        const armGeo = new THREE.BoxGeometry(0.58, 1.05, 0.6);
        const upperArmL = new THREE.Mesh(armGeo, silverMat);
        upperArmL.position.set(-1.68, 3.0, 0.55);
        upperArmL.rotation.x = -0.65;
        g.add(upperArmL);
        const upperArmR = new THREE.Mesh(armGeo, silverMat);
        upperArmR.position.set(1.68, 3.0, 0.55);
        upperArmR.rotation.x = -0.65;
        g.add(upperArmR);

        // FOREARMS
        const foreGeo = new THREE.BoxGeometry(0.52, 0.95, 0.55);
        const foreL = new THREE.Mesh(foreGeo, silverMat);
        foreL.position.set(-1.68, 2.35, 1.1);
        foreL.rotation.x = -0.3;
        g.add(foreL);
        const foreR = new THREE.Mesh(foreGeo, silverMat);
        foreR.position.set(1.68, 2.35, 1.1);
        foreR.rotation.x = -0.3;
        g.add(foreR);

        // FISTS -- clenched. aimed at your face.
        const fistGeo = new THREE.BoxGeometry(0.54, 0.54, 0.58);
        const fistL = new THREE.Mesh(fistGeo, fistMat);
        fistL.position.set(-1.68, 1.88, 1.5);
        g.add(fistL);
        const fistR = new THREE.Mesh(fistGeo, fistMat);
        fistR.position.set(1.68, 1.88, 1.5);
        g.add(fistR);

        // gold knuckle trim on fists -- bc THE WORLD has standards
        const knuckGeo = new THREE.BoxGeometry(0.56, 0.14, 0.12);
        const knuckL = new THREE.Mesh(knuckGeo, goldMat);
        knuckL.position.set(-1.68, 2.08, 1.56);
        g.add(knuckL);
        const knuckR = new THREE.Mesh(knuckGeo, goldMat);
        knuckR.position.set(1.68, 2.08, 1.56);
        g.add(knuckR);

        // LEGS -- solid stance. it's not going anywhere.
        const legGeo = new THREE.BoxGeometry(0.68, 1.85, 0.68);
        const legL = new THREE.Mesh(legGeo, silverMat);
        legL.position.set(-0.56, 0.88, 0);
        g.add(legL);
        const legR = new THREE.Mesh(legGeo, silverMat);
        legR.position.set(0.56, 0.88, 0);
        g.add(legR);

        // BOOTS -- dark with gold toe cap. very fashionable for a stand.
        const bootGeo = new THREE.BoxGeometry(0.72, 0.72, 0.88);
        const bootL = new THREE.Mesh(bootGeo, darkMat);
        bootL.position.set(-0.56, -0.06, 0.1);
        g.add(bootL);
        const bootR = new THREE.Mesh(bootGeo, darkMat);
        bootR.position.set(0.56, -0.06, 0.1);
        g.add(bootR);

        // gold toe caps
        const toeGeo = new THREE.BoxGeometry(0.74, 0.28, 0.32);
        const toeL = new THREE.Mesh(toeGeo, goldMat);
        toeL.position.set(-0.56, -0.06, 0.49);
        g.add(toeL);
        const toeR = new THREE.Mesh(toeGeo, goldMat);
        toeR.position.set(0.56, -0.06, 0.49);
        g.add(toeR);

        // GOLDEN AURA LIGHT -- pulses when stand is active
        const standLight = new THREE.PointLight(0xffdd44, 3.5, 14);
        standLight.name = 'stand-light';
        standLight.position.y = 3;
        g.add(standLight);

        // ZA WARUDO -- TorusKnotGeometry time-stop aura around THE WORLD
        // it rotates when the stand is active. time itself bends around it. menacing.
        // WRYYYYYY this looks incredible. nobody will appreciate it. whatever.
        const zaWarudoKnot = new THREE.Mesh(
            new THREE.TorusKnotGeometry(1.2, 0.1, 96, 8, 2, 3),
            new THREE.MeshPhongMaterial({ color: 0xffdd00, emissive: 0xcc8800, emissiveIntensity: 2.0, transparent: true, opacity: 0.65 })
        );
        zaWarudoKnot.name = 'zawarudo-knot';
        zaWarudoKnot.position.y = 2.5;
        g.add(zaWarudoKnot);

        g.visible = false; // dormant until ZA WARUDO
        return g;
    }

    private triggerZaWarudo(): void {
        // ゴゴゴゴゴ time stops ゴゴゴゴゴ
        console.log('%cZA WARUDO!!! TOKI WO TOMARE!!!', 'color: gold; font-size: 22px; font-weight: bold; text-shadow: 0 0 10px yellow;');
        console.log('%cゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ', 'color: purple; font-size: 14px;');
        // THE WORLD manifests!! build lazily on first use so we don't waste memory until needed
        if (!this.standGroup) {
            this.standGroup = this.buildTheWorldStand();
            this.mesh.parent?.add(this.standGroup);
        }
        this.standGroup.visible = true;
        this.standVisible = true;
        this.standTimer = this.STAND_DURATION;
        this.standPulse = 0;
        this.onZaWarudo?.();
    }

    public die(): void {
        // knives fall to the ground with their wielder. poetic.
        for (const k of this.knives) k.mesh.parent?.remove(k.mesh);
        this.knives = [];
        // THE WORLD fades with DIO. even the stand cannot defy death... probably.
        if (this.standGroup?.parent) this.standGroup.parent.remove(this.standGroup);
        this.standGroup = null;
        super.die();
    }

    public getType(): string { return 'dio'; }
}
