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
            'ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´',
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
        // REBUILT DIO -- more imposing. vampiric proportions. tall, lean, deadly.
        // must keep 'dio-cape' name for the cape geometry -- update loop uses it
        const g = new THREE.Group();

        const skinMat    = new THREE.MeshPhongMaterial({ color: 0xd4d0c8, emissive: 0x080810 });  // pale vampire
        const goldMat    = new THREE.MeshPhongMaterial({ color: 0xd4a012, emissive: 0x3a2400, emissiveIntensity: 0.55 });
        const purpleMat  = new THREE.MeshPhongMaterial({ color: 0x4a0a6a, emissive: 0x0a0015 });
        const darkGoldMat= new THREE.MeshPhongMaterial({ color: 0x9a7208, emissive: 0x1a1000 });
        const hairMat    = new THREE.MeshPhongMaterial({ color: 0xffe868, emissive: 0x2a2000 });
        const heartMat   = new THREE.MeshBasicMaterial({ color: 0xdd0033 });
        const whiteMat   = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const darkMat    = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const capeMat    = new THREE.MeshPhongMaterial({ color: 0x1a0545, emissive: 0x060010, side: THREE.DoubleSide });

        // LEGS: tall lean vampire legs in purple
        for (const side of [-1, 1]) {
            const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.2, 1.45, 16), purpleMat);
            thigh.position.set(side * 0.3, 0.75, 0); thigh.castShadow = true; g.add(thigh);
            const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 1.25, 16), purpleMat);
            shin.position.set(side * 0.3, -0.62, 0); shin.castShadow = true; g.add(shin);
            const boot = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.6, 16), goldMat);
            boot.position.set(side * 0.3, -1.42, 0); g.add(boot);
            const sole = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.1, 0.78), darkGoldMat);
            sole.position.set(side * 0.3, -1.78, 0.1); g.add(sole);
        }

        // TORSO: LatheGeometry lean tall torso with impressive shoulder width
        const torsoPoints = [
            new THREE.Vector2(0,    0),
            new THREE.Vector2(0.32, 0.05),
            new THREE.Vector2(0.42, 0.52),
            new THREE.Vector2(0.45, 0.95),
            new THREE.Vector2(0.55, 1.45),
            new THREE.Vector2(0.68, 1.82),  // chest
            new THREE.Vector2(0.82, 2.18),  // shoulder
            new THREE.Vector2(0.85, 2.42),
            new THREE.Vector2(0.72, 2.55),
        ];
        const torso = new THREE.Mesh(new THREE.LatheGeometry(torsoPoints, 24), goldMat);
        torso.position.y = 1.55; torso.castShadow = true; g.add(torso);

        // heart motif buttons on chest
        for (let i = 0; i < 4; i++) {
            const btn = new THREE.Mesh(new THREE.SphereGeometry(0.072, 12, 10), heartMat);
            btn.position.set(0, 2.48 + i * 0.38, 0.7); g.add(btn);
        }

        // shoulder armor pieces (pauldrons)
        for (const side of [-1, 1]) {
            const paul = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 12), goldMat);
            paul.scale.set(0.78, 0.58, 0.72); paul.position.set(side * 1.08, 3.88, 0); g.add(paul);
            // pointed spike on top of pauldron
            const spike = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.52, 6), goldMat);
            spike.position.set(side * 1.08, 4.28, 0); g.add(spike);
        }

        // ARMS: imposing lean arms
        for (const side of [-1, 1]) {
            const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.21, 1.18, 16), goldMat);
            upper.rotation.z = side * 0.2;
            upper.position.set(side * 1.32, 3.3, 0); upper.castShadow = true; g.add(upper);
            const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 1.0, 16), purpleMat);
            fore.rotation.z = side * 0.12;
            fore.position.set(side * 1.52, 2.28, 0); g.add(fore);
            // wrist cuff gold
            const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.19, 0.28, 16), goldMat);
            cuff.position.set(side * 1.6, 1.78, 0); g.add(cuff);
            // hand: pale vampire hands
            const hand = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 11), skinMat);
            hand.position.set(side * 1.68, 1.52, 0); g.add(hand);
        }

        // neck
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.5, 16), skinMat);
        neck.position.y = 4.12; g.add(neck);

        // HEAD: angular vampire face -- slightly narrower at jaw, wider at cheekbones
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.68, 12, 10), skinMat);
        head.scale.set(0.9, 1.0, 0.9); head.position.y = 4.78; head.castShadow = true; g.add(head);

        // HAIR: ExtrudeGeometry iconic blonde swept up hair
        const hairShape = new THREE.Shape();
        hairShape.moveTo(-0.55, -0.08);
        hairShape.quadraticCurveTo(-0.28, 0.48, 0, 0.62);
        hairShape.quadraticCurveTo(0.28, 0.72, 0.55, 0.52);
        hairShape.quadraticCurveTo(0.72, 0.28, 0.62, 0.0);
        hairShape.quadraticCurveTo(0.35, -0.28, 0, -0.25);
        hairShape.quadraticCurveTo(-0.35, -0.22, -0.55, -0.08);
        const hairGeo = new THREE.ExtrudeGeometry(hairShape, { depth: 0.72, bevelEnabled: true, bevelSize: 0.05, bevelSegments: 2 });
        const hairMesh = new THREE.Mesh(hairGeo, hairMat);
        hairMesh.position.set(-0.28, 4.95, -0.32); g.add(hairMesh);

        // EYES: piercing and pale
        for (const ex of [-0.25, 0.25]) {
            const white = new THREE.Mesh(new THREE.SphereGeometry(0.14, 14, 12), whiteMat);
            white.position.set(ex, 4.82, 0.62); g.add(white);
            const iris = new THREE.Mesh(new THREE.SphereGeometry(0.09, 14, 11), new THREE.MeshBasicMaterial({color:0x6611aa}));
            iris.position.set(ex, 4.82, 0.68); g.add(iris);
            const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 10), darkMat);
            pupil.position.set(ex, 4.82, 0.72); g.add(pupil);
        }

        // nose: aristocratic
        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.08, 14, 11), skinMat);
        nose.scale.set(1.0, 0.85, 1.1); nose.position.set(0, 4.68, 0.65); g.add(nose);

        // lips: thin contemptuous
        const upperLip = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.055, 0.08), new THREE.MeshPhongMaterial({color:0xb08878}));
        upperLip.position.set(0, 4.55, 0.64); g.add(upperLip);
        const lowerLip = upperLip.clone(); lowerLip.position.y = 4.5; g.add(lowerLip);

        // THE CAPE: ExtrudeGeometry dramatic flowing cape -- MUST keep name 'dio-cape'
        // the update loop rotates/billows this using getObjectByName
        const capeShape = new THREE.Shape();
        capeShape.moveTo(-1.08, 0);
        capeShape.quadraticCurveTo(-1.35, -1.2, -1.55, -2.55);
        capeShape.quadraticCurveTo(-1.38, -3.55, -0.82, -4.05);
        capeShape.lineTo(0, -4.28);
        capeShape.lineTo(0.82, -4.05);
        capeShape.quadraticCurveTo(1.38, -3.55, 1.55, -2.55);
        capeShape.quadraticCurveTo(1.35, -1.2, 1.08, 0);
        capeShape.closePath();
        const capeGeo = new THREE.ExtrudeGeometry(capeShape, { depth: 0.08, bevelEnabled: true, bevelSize: 0.04 });
        const cape = new THREE.Mesh(capeGeo, capeMat);
        cape.name = 'dio-cape';
        cape.position.set(0, 3.88, -0.72); g.add(cape);

        // collar: stiff gold collar standing up
        const collarShape = new THREE.Shape();
        collarShape.moveTo(-0.82, 0); collarShape.lineTo(-0.92, 0.52);
        collarShape.lineTo(0, 0.62); collarShape.lineTo(0.92, 0.52);
        collarShape.lineTo(0.82, 0); collarShape.closePath();
        const collarGeo = new THREE.ExtrudeGeometry(collarShape, { depth: 0.14, bevelEnabled: true, bevelSize: 0.03 });
        const collar = new THREE.Mesh(collarGeo, goldMat);
        collar.position.set(0, 3.82, 0.18); collar.rotation.x = -0.55; g.add(collar);

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
            // DIO transcends all boundaries. you thought it was a wall but it was ME, DIO. gone now.
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
        const gem = new THREE.Mesh(new THREE.SphereGeometry(0.14, 14, 12), eyeMat);
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
        const shL = new THREE.Mesh(new THREE.SphereGeometry(0.17, 14, 12), goldMat);
        shL.position.set(-1.27, 3.62, 0.43);
        g.add(shL);
        const shR = new THREE.Mesh(new THREE.SphereGeometry(0.17, 14, 12), goldMat);
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
        // ã‚´ã‚´ã‚´ã‚´ã‚´ time stops ã‚´ã‚´ã‚´ã‚´ã‚´
        console.log('%cZA WARUDO!!! TOKI WO TOMARE!!!', 'color: gold; font-size: 22px; font-weight: bold; text-shadow: 0 0 10px yellow;');
        console.log('%cã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´', 'color: purple; font-size: 14px;');
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
