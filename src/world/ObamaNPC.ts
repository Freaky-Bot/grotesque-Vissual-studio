// BARACK OBAMA -- 44th president of the united states, now wandering around a cat world
// says inspirational things. wears a suit. has big ears. very presidential.
// his stand ability: THE AUDACITY -- launches orbs of hope that stun enemies
// ugh this is the most unexpected npc in game history ngl

import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
import { BaseNPC } from './BaseNPC';

export class ObamaNPC extends BaseNPC {
    private talkTimer: number = Math.random() * 8;
    private talkInterval: number = 8 + Math.random() * 10;
    private walkTimer: number = 0;

    // the audacity orb -- fired when player is close
    private orbCooldown: number = 0;
    private projectiles: Array<{ mesh: THREE.Mesh; vel: THREE.Vector3; life: number }> = [];
    private playerPosRef: THREE.Vector3 | null = null;

    // presidential quotes bc why not
    private readonly quotes: string[] = [
        'Yes we can.',
        'Change will not come if we wait for some other person.',
        'The audacity of hope!',
        'Let me be clear...',
        'We are the ones we have been waiting for.',
        'There is not a liberal Obama and a conservative Obama.',
        'HOPE.',
        'We did not come to fear the future. We came here to shape it.',
        'Pretty much everything I say is historic at this point.',
        'That\'s not how any of this works.',
        'Fired up, ready to go!',
        'Why are there cats everywhere.',
    ];

    constructor(position: THREE.Vector3) {
        super(position);
        this.bubbleHeadOffset = 4.2;
        this.dialogues = this.quotes;
        this.mesh = this.buildMesh();
        this.mesh.position.copy(this.position);
        console.log('%c🇺🇸 OBAMA HAS ENTERED THE CAT WORLD. hope levels rising.', 'color: #1A53FF; font-weight: bold; font-size: 13px');

        // yes we can (load a GLB model)
        this.tryLoadGLBModel(2.8);
    }

    public setPlayerRef(pos: THREE.Vector3): void {
        this.playerPosRef = pos;
    }

    public getType(): string { return 'obama'; }

    private buildMesh(): THREE.Group {
        const g = new THREE.Group();

        // ugh naming these materials is annoying but whatever it looks good
        const skinMat  = new THREE.MeshStandardMaterial({ color: 0x8B5E3C, roughness: 0.7 });
        const suitMat  = new THREE.MeshStandardMaterial({ color: 0x1a1a2a, roughness: 0.8 });
        const shirtMat = new THREE.MeshStandardMaterial({ color: 0xf2f0ea, roughness: 0.85 });
        const tieMat   = new THREE.MeshStandardMaterial({ color: 0x111fa8, roughness: 0.7 }); // blue tie
        const hairMat  = new THREE.MeshBasicMaterial({ color: 0x111111 });
        const eyeMat   = new THREE.MeshBasicMaterial({ color: 0x111111 });
        const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const toothMat = new THREE.MeshBasicMaterial({ color: 0xfdf8f0 });

        // ---- LEGS ----
        const thighGeo = new THREE.CylinderGeometry(0.2, 0.18, 0.9, 8);
        const shinGeo  = new THREE.CylinderGeometry(0.17, 0.13, 0.8, 8);
        const shoeGeo  = new THREE.BoxGeometry(0.28, 0.15, 0.5);
        for (const s of [-1, 1]) {
            const thigh = new THREE.Mesh(thighGeo, suitMat);
            thigh.position.set(s * 0.23, 0.5, 0); thigh.castShadow = true; g.add(thigh);
            const shin = new THREE.Mesh(shinGeo, suitMat);
            shin.position.set(s * 0.23, -0.35, 0); shin.castShadow = true; g.add(shin);
            const shoe = new THREE.Mesh(shoeGeo, new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.95 }));
            shoe.position.set(s * 0.23, -0.83, 0.08); shoe.castShadow = true; g.add(shoe);
        }

        // ---- TORSO (suit jacket) -- LatheGeometry suit jacket profile ----
        // box torso was fine but a presidential suit deserves a presidential profile
        const torsoPoints = [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0.26, 0.05),
            new THREE.Vector2(0.45, 0.35),
            new THREE.Vector2(0.47, 0.75),
            new THREE.Vector2(0.43, 1.05),
            new THREE.Vector2(0.32, 1.1),
        ];
        const torso = new THREE.Mesh(new THREE.LatheGeometry(torsoPoints, 12), suitMat);
        torso.position.set(0, 0.85, 0); torso.castShadow = true; g.add(torso);

        // white shirt collar peeking out
        const shirtGeo = new THREE.BoxGeometry(0.35, 0.5, 0.52);
        const shirt = new THREE.Mesh(shirtGeo, shirtMat);
        shirt.position.set(0, 1.6, 0); g.add(shirt);

        // tie -- ExtrudeGeometry proper tie silhouette shape
        // a box tie is a war crime. the president deserves better. here's a real tie shape.
        const tieShape = new THREE.Shape();
        tieShape.moveTo(0, 0.75); // top narrow
        tieShape.lineTo(-0.07, 0.55);
        tieShape.lineTo(-0.05, 0.0); // widen to middle
        tieShape.lineTo(-0.1, -0.5); // bottom wide
        tieShape.lineTo(0, -0.62); // bottom tip
        tieShape.lineTo(0.1, -0.5);
        tieShape.lineTo(0.05, 0.0);
        tieShape.lineTo(0.07, 0.55);
        tieShape.closePath();
        const tieExt = { depth: 0.06, bevelEnabled: false };
        const tie = new THREE.Mesh(new THREE.ExtrudeGeometry(tieShape, tieExt), tieMat);
        tie.position.set(-0.05, 1.28, 0.25); g.add(tie);

        // suit lapels (just dark angled boxes, nobody cares about accuracy)
        const lapelGeo = new THREE.BoxGeometry(0.22, 0.5, 0.53);
        for (const s of [-1, 1]) {
            const lapel = new THREE.Mesh(lapelGeo, suitMat);
            lapel.position.set(s * 0.22, 1.6, 0);
            lapel.rotation.z = s * 0.25;
            g.add(lapel);
        }

        // ---- ARMS ----
        const upperArmGeo = new THREE.CylinderGeometry(0.14, 0.13, 0.7, 8);
        const foreArmGeo  = new THREE.CylinderGeometry(0.12, 0.10, 0.65, 8);
        const handGeo     = new THREE.SphereGeometry(0.12, 8, 8);
        for (const s of [-1, 1]) {
            const ua = new THREE.Mesh(upperArmGeo, suitMat);
            ua.position.set(s * 0.62, 1.3, 0); ua.rotation.z = s * 0.2; ua.castShadow = true; g.add(ua);
            const fa = new THREE.Mesh(foreArmGeo, suitMat);
            fa.position.set(s * 0.7, 0.7, 0); fa.rotation.z = s * 0.3; fa.castShadow = true; g.add(fa);
            const hand = new THREE.Mesh(handGeo, skinMat);
            hand.position.set(s * 0.76, 0.3, 0); g.add(hand);
        }

        // ---- HEAD ----
        const headGeo = new THREE.SphereGeometry(0.55, 16, 14);
        const head = new THREE.Mesh(headGeo, skinMat);
        head.scale.set(1, 1.1, 0.95);
        head.position.set(0, 2.25, 0); head.castShadow = true; g.add(head);

        // big iconic ears -- cant skip these, very important
        const earGeo = new THREE.SphereGeometry(0.18, 8, 8);
        for (const s of [-1, 1]) {
            const ear = new THREE.Mesh(earGeo, skinMat);
            ear.scale.set(0.6, 1.0, 0.4);
            ear.position.set(s * 0.6, 2.25, 0); g.add(ear);
        }

        // short close-cropped black hair
        const hairGeo = new THREE.SphereGeometry(0.54, 12, 10);
        const hair = new THREE.Mesh(hairGeo, hairMat);
        hair.scale.set(1.05, 0.45, 1.0);
        hair.position.set(0, 2.6, -0.05); g.add(hair);

        // eyes
        const eyeGeo = new THREE.SphereGeometry(0.09, 8, 8);
        const irisGeo = new THREE.SphereGeometry(0.05, 6, 6);
        const irisMat = new THREE.MeshBasicMaterial({ color: 0x3a1e0a }); // dark brown
        for (const s of [-1, 1]) {
            const white = new THREE.Mesh(eyeGeo, whiteMat);
            white.position.set(s * 0.2, 2.3, 0.48); g.add(white);
            const iris = new THREE.Mesh(irisGeo, irisMat);
            iris.position.set(s * 0.2, 2.3, 0.52); g.add(iris);
            const pupil = new THREE.Mesh(irisGeo, eyeMat);
            pupil.scale.setScalar(0.6);
            pupil.position.set(s * 0.2, 2.3, 0.55); g.add(pupil);
        }

        // eyebrows -- raised slightly, very presidential
        const browGeo = new THREE.BoxGeometry(0.2, 0.04, 0.04);
        const browMat = new THREE.MeshBasicMaterial({ color: 0x1a0d00 });
        for (const s of [-1, 1]) {
            const brow = new THREE.Mesh(browGeo, browMat);
            brow.position.set(s * 0.2, 2.42, 0.5);
            brow.rotation.z = s * 0.1;
            g.add(brow);
        }

        // nose
        const noseGeo = new THREE.SphereGeometry(0.07, 6, 6);
        const nose = new THREE.Mesh(noseGeo, skinMat);
        nose.scale.set(1.2, 0.7, 1.0);
        nose.position.set(0, 2.18, 0.52); g.add(nose);

        // iconic slight smile
        const smileGeo = new THREE.TorusGeometry(0.1, 0.02, 6, 12, Math.PI * 0.6);
        const smileMat = new THREE.MeshBasicMaterial({ color: 0x5a2a0a });
        const smile = new THREE.Mesh(smileGeo, smileMat);
        smile.rotation.set(0, 0, Math.PI * 1.3);
        smile.position.set(0, 2.1, 0.53); g.add(smile);

        // teeth
        for (const s of [-1, 0, 1]) {
            const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.06, 0.04), toothMat);
            tooth.position.set(s * 0.07, 2.08, 0.54); g.add(tooth);
        }

        // pin on lapel -- ShapeGeometry presidential seal / star badge
        // sphere blob before. now its a proper 5-pointed star shape. yes we can.
        const starShape = new THREE.Shape();
        const outerR = 0.07; const innerR = 0.033; const pts = 5;
        for (let i = 0; i < pts * 2; i++) {
            const angle = (i * Math.PI) / pts - Math.PI / 2;
            const r = i % 2 === 0 ? outerR : innerR;
            const method = i === 0 ? 'moveTo' : 'lineTo';
            starShape[method](Math.cos(angle) * r, Math.sin(angle) * r);
        }
        starShape.closePath();
        const starGeo = new THREE.ShapeGeometry(starShape, 4);
        const pinMat = new THREE.MeshBasicMaterial({ color: 0xff3333, side: THREE.DoubleSide });
        const pin = new THREE.Mesh(starGeo, pinMat);
        pin.position.set(-0.28, 1.7, 0.28);
        g.add(pin);

        return g;
    }

    // fire a hope orb toward a position -- the audacity of throwing orbs
    private fireHopeOrb(targetPos: THREE.Vector3): void {
        const orbGeo = new THREE.SphereGeometry(0.15, 8, 8);
        const orbMat = new THREE.MeshBasicMaterial({ color: 0x3399ff, transparent: true, opacity: 0.9 });
        const proj = new THREE.Mesh(orbGeo, orbMat);

        const startPos = this.position.clone();
        startPos.y += 2.0;
        proj.position.copy(startPos);

        const vel = targetPos.clone().sub(startPos).normalize().multiplyScalar(12);
        vel.y += 1.5;

        this.mesh.parent?.add(proj);
        this.projectiles.push({ mesh: proj, vel, life: 2.8 });
        console.log('%c🇺🇸 YES WE CAN (fire an orb)', 'color:#1A53FF;');
    }

    public update(deltaTime: number): void {
        this.tickGLBMixer(deltaTime);
        // presidential slow walk
        this.randomWalk(deltaTime, 2.2);

        this.walkTimer += deltaTime * 3.5;
        this.mesh.position.y = this.position.y + Math.abs(Math.sin(this.walkTimer)) * 0.05;

        // talks wisdom at you periodically
        this.talkTimer += deltaTime;
        if (this.talkTimer >= this.talkInterval) {
            this.talkTimer = 0;
            this.talkInterval = 7 + Math.random() * 11;
            this.speak();
        }

        // fire hope orbs at player when close enough -- THE AUDACITY
        if (this.orbCooldown > 0) this.orbCooldown -= deltaTime;
        if (this.orbCooldown <= 0 && this.playerPosRef) {
            const dist = this.playerPosRef.distanceTo(this.position);
            if (dist < 18) {
                this.fireHopeOrb(this.playerPosRef.clone());
                this.orbCooldown = 5 + Math.random() * 3;
            }
        }

        // move and expire projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];
            p.life -= deltaTime;
            p.vel.y -= 10 * deltaTime; // gravity
            p.mesh.position.addScaledVector(p.vel, deltaTime);
            if (p.life <= 0) {
                p.mesh.parent?.remove(p.mesh);
                this.projectiles.splice(i, 1);
            }
        }
    }
}
