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
            'WRYYYYYYYYYYY',
            'you thought it was Barney... but it was me, DIO!',
            'IT WAS ME, DIO!',
            'MUDA MUDA MUDA MUDA MUDA MUDA!!!',
            'ZA WARUDO... TOKI WO TOMARE',
            'you are already in checkmate',
            'THE WORLD OBEYS MY WILL',
            'DIO does not lose. to anyone.',
            'how pathetic. how utterly pathetic.',
            'i reject my humanity, JOJO!!',
            'this is... THE WORLD',
            'your next line is: "that\'s impossible!"',
            'ROAD ROLLER DA!!!!',
            'i did not come this far to lose to a cat sage',
            'five seconds have passed. did you feel it?',
        ];
        this.bubbleHeadOffset = 7.0; // tall boi
        this.dialogueTimer = 3; // speaks almost immediately on spawn. he makes an entrance.
    }

    public setPlayerRef(pos: THREE.Vector3): void {
        this.playerRef = pos;
    }

    private buildDio(): THREE.Group {
        const g = new THREE.Group();

        // DIO's palette: gold/yellow torso, purple legs, pale vampire skin, blonde glowy hair
        const goldMat = new THREE.MeshPhongMaterial({ color: 0xd4a017, emissive: 0x332200, emissiveIntensity: 0.4 });
        const purpleMat = new THREE.MeshPhongMaterial({ color: 0x4a0080 });
        const skinMat = new THREE.MeshPhongMaterial({ color: 0xeeddaa }); // pale vampire
        const hairMat = new THREE.MeshPhongMaterial({ color: 0xddcc00, emissive: 0x443300, emissiveIntensity: 0.6 });
        const eyeMat = new THREE.MeshPhongMaterial({ color: 0xff0000, emissive: 0xcc0000, emissiveIntensity: 2.5 });
        const capeMat = new THREE.MeshPhongMaterial({ color: 0x1a0033, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
        const bootMat = new THREE.MeshPhongMaterial({ color: 0xb8860b });

        // -- TORSO -- the golden fit
        const torso = new THREE.Mesh(new THREE.BoxGeometry(1.9, 2.5, 1.1), goldMat);
        torso.position.y = 3.3;
        g.add(torso);

        // v-cut neckline (dark triangle)
        const vMat = new THREE.MeshPhongMaterial({ color: 0x220033 });
        const vNeck = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.7, 3), vMat);
        vNeck.position.set(0, 4.4, 0.55);
        vNeck.rotation.z = Math.PI;
        g.add(vNeck);

        // belt
        const belt = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.28, 1.15), purpleMat);
        belt.position.y = 2.1;
        g.add(belt);

        // -- LEGS --
        const lLeg = new THREE.Mesh(new THREE.BoxGeometry(0.75, 2.1, 0.75), purpleMat);
        lLeg.position.set(-0.52, 1.05, 0);
        g.add(lLeg);
        const rLeg = new THREE.Mesh(new THREE.BoxGeometry(0.75, 2.1, 0.75), purpleMat);
        rLeg.position.set(0.52, 1.05, 0);
        g.add(rLeg);

        // gold boots
        const lBoot = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.55, 0.9), bootMat);
        lBoot.position.set(-0.52, 0.27, 0.07);
        g.add(lBoot);
        const rBoot = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.55, 0.9), bootMat);
        rBoot.position.set(0.52, 0.27, 0.07);
        g.add(rBoot);

        // -- ARMS -- dramatic pose
        const lArm = new THREE.Mesh(new THREE.BoxGeometry(0.62, 2.0, 0.62), goldMat);
        lArm.position.set(-1.3, 3.15, 0);
        g.add(lArm);
        const rArm = new THREE.Mesh(new THREE.BoxGeometry(0.62, 2.0, 0.62), goldMat);
        rArm.position.set(1.3, 3.15, 0);
        g.add(rArm);

        // hands
        const lHand = new THREE.Mesh(new THREE.SphereGeometry(0.3, 6, 4), skinMat);
        lHand.position.set(-1.3, 2.1, 0);
        g.add(lHand);
        const rHand = new THREE.Mesh(new THREE.SphereGeometry(0.3, 6, 4), skinMat);
        rHand.position.set(1.3, 2.1, 0);
        g.add(rHand);

        // -- HEAD --
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.82, 10, 8), skinMat);
        head.position.y = 5.5;
        g.add(head);

        // DIO's iconic blonde spiky hair -- multiple spikes going up and back
        const hairBase = new THREE.Mesh(new THREE.SphereGeometry(0.65, 8, 6), hairMat);
        hairBase.position.y = 6.1;
        hairBase.scale.set(1.1, 0.65, 0.95);
        g.add(hairBase);

        // 6 spikes -- swept back with a few going up
        const spikeAngles = [-0.7, -0.35, 0, 0.35, 0.7, 0.2];
        for (let i = 0; i < spikeAngles.length; i++) {
            const spike = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.6, 4), hairMat);
            spike.position.set(spikeAngles[i] * 0.7, 6.55 + Math.abs(spikeAngles[i]) * 0.1, -0.1);
            spike.rotation.z = -spikeAngles[i] * 0.5;
            spike.rotation.x = -0.2;
            g.add(spike);
        }

        // RED GLOWING EYES -- he's looking at you specifically
        const lEye = new THREE.Mesh(new THREE.SphereGeometry(0.14, 6, 4), eyeMat);
        lEye.position.set(-0.3, 5.48, 0.7);
        g.add(lEye);
        const rEye = new THREE.Mesh(new THREE.SphereGeometry(0.14, 6, 4), eyeMat);
        rEye.position.set(0.3, 5.48, 0.7);
        g.add(rEye);

        // smug smirk -- slightly raised one side
        const smirkMat = new THREE.MeshPhongMaterial({ color: 0x220000 });
        const smirk = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.09, 0.12), smirkMat);
        smirk.position.set(0.1, 5.15, 0.73);
        smirk.rotation.z = 0.18;
        g.add(smirk);

        // DIO tiara/headband -- iconic gold band
        const tiara = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.2, 0.16), goldMat);
        tiara.position.set(0, 5.75, 0.65);
        g.add(tiara);

        // heart gem on tiara -- the KONO DIO DA signature
        const gemMat = new THREE.MeshPhongMaterial({ color: 0xff2255, emissive: 0xaa0033, emissiveIntensity: 2.0 });
        const gem = new THREE.Mesh(new THREE.SphereGeometry(0.14, 6, 4), gemMat);
        gem.position.set(0, 5.78, 0.78);
        g.add(gem);

        // AWESOME CAPE -- billowing behind him. he always has a cape. it is mandatory.
        const capeGeo = new THREE.PlaneGeometry(2.6, 3.5);
        const cape = new THREE.Mesh(capeGeo, capeMat);
        cape.position.set(0, 2.7, -0.65);
        cape.rotation.x = 0.12;
        cape.name = 'dio-cape';
        g.add(cape);

        // cape sides -- make it feel more 3D
        const capeSideGeo = new THREE.PlaneGeometry(0.9, 3.2);
        const capeL = new THREE.Mesh(capeSideGeo, capeMat);
        capeL.position.set(-1.1, 2.6, -0.2);
        capeL.rotation.y = 0.5;
        g.add(capeL);
        const capeR = new THREE.Mesh(capeSideGeo, capeMat);
        capeR.position.set(1.1, 2.6, -0.2);
        capeR.rotation.y = -0.5;
        g.add(capeR);

        // ominous red glow -- DIO radiates pure evil and somehow that has a color (red)
        const glow = new THREE.PointLight(0xff2200, 1.2, 18);
        glow.position.set(0, 4.5, 0);
        g.add(glow);

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
