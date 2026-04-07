// DONALD TRUMP -- 45th and 47th president, now haunting a cat god world
// orange. very orange. big hair. long red tie. tremendous.
// fires golden dollar signs as projectiles. nobody asked. nobody stopped it.
// this is fine. we're fine. everything is fine.

import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
import { BaseNPC } from './BaseNPC';

export class TrumpNPC extends BaseNPC {
    private talkTimer: number = Math.random() * 6;
    private talkInterval: number = 6 + Math.random() * 9;
    private walkTimer: number = 0;

    // tremendous projectile cooldown
    private orbCooldown: number = 0;
    private projectiles: Array<{ mesh: THREE.Mesh; vel: THREE.Vector3; life: number }> = [];
    private playerPosRef: THREE.Vector3 | null = null;

    // iconic quotes. tremendous quotes. the best quotes. believe me.
    private readonly quotes: string[] = [
        'TREMENDOUS.',
        'Make this world great again!',
        'Fake news!',
        'Nobody knows more about cats than me.',
        'We\'re gonna build a wall. A BEAUTIFUL wall.',
        'Believe me.',
        'That I can tell you.',
        'The likes of which nobody has ever seen.',
        'It\'s gonna be YUGE.',
        'I have the best NPCs. The greatest NPCs.',
        'Nobody knew NPC worlds could be so complicated.',
        'I alone can fix the cat economy.',
        'Look at those poll numbers. Just look at them.',
        'You\'re fired!',
    ];

    constructor(position: THREE.Vector3) {
        super(position);
        this.bubbleHeadOffset = 4.3;
        this.dialogues = this.quotes;
        this.mesh = this.buildMesh();
        this.mesh.position.copy(this.position);
        console.log('%cðŸŠ TRUMP HAS ENTERED THE GAME. IT\'S GOING TO BE TREMENDOUS.', 'color: #FF7733; font-weight: bold; font-size: 13px');

        // tremendous model. best model. everyone says so. loading GLB now.
        this.tryLoadGLBModel(3.2);
    }

    public setPlayerRef(pos: THREE.Vector3): void {
        this.playerPosRef = pos;
    }

    public getType(): string { return 'trump'; }

    private buildMesh(): THREE.Group {
        // REBUILT TRUMP -- wider, more imposing, bigger hair, the tie goes down to the knees
        // classic LatheGeometry wide body, ExtrudeGeometry hair volume. the tie is a crime.
        const g = new THREE.Group();

        const skinMat  = new THREE.MeshPhongMaterial({ color: 0xe8803a, emissive: 0x281206 });  // the tan
        const suitMat  = new THREE.MeshPhongMaterial({ color: 0x1c2238, emissive: 0x040508 });
        const shirtMat = new THREE.MeshPhongMaterial({ color: 0xfdfcfc });
        const tieMat   = new THREE.MeshPhongMaterial({ color: 0xee2222 });   // the tie
        const shoeMat  = new THREE.MeshPhongMaterial({ color: 0x111111 });
        const hairMat  = new THREE.MeshPhongMaterial({ color: 0xffe490, emissive: 0x221808 });  // golden/orange hair
        const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const darkMat  = new THREE.MeshBasicMaterial({ color: 0x333322 });
        const teethMat = new THREE.MeshBasicMaterial({ color: 0xeeeeee });

        // LEGS: thick stubby legs
        for (const side of [-1, 1]) {
            const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.30, 1.15, 8), suitMat);
            thigh.position.set(side * 0.38, 0.6, 0); thigh.castShadow = true; g.add(thigh);
            const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.22, 1.0, 8), suitMat);
            shin.position.set(side * 0.38, -0.5, 0); shin.castShadow = true; g.add(shin);
            const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.16, 0.88), shoeMat);
            shoe.position.set(side * 0.38, -1.18, 0.12); g.add(shoe);
        }

        // TORSO: very wide LatheGeometry -- round, powerful, presidential
        const torsoPoints = [
            new THREE.Vector2(0,    0),
            new THREE.Vector2(0.48, 0.05),
            new THREE.Vector2(0.72, 0.42),
            new THREE.Vector2(0.85, 0.85),  // wide waist
            new THREE.Vector2(0.98, 1.35),  // gut peak
            new THREE.Vector2(1.05, 1.75),
            new THREE.Vector2(1.08, 2.12),  // shoulder width
            new THREE.Vector2(0.92, 2.38),
        ];
        const torso = new THREE.Mesh(new THREE.LatheGeometry(torsoPoints, 12), suitMat);
        torso.position.y = 1.2; torso.castShadow = true; g.add(torso);

        // white shirt front
        const shirtFront = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 1.25), shirtMat);
        shirtFront.position.set(0, 2.62, 0.88); g.add(shirtFront);

        // THE TIE: ExtrudeGeometry absurdly long tie -- goes way past the waist
        const tieShape = new THREE.Shape();
        tieShape.moveTo(-0.12, 0);
        tieShape.lineTo(-0.08, -0.45);
        tieShape.lineTo(-0.18, -0.95);
        tieShape.lineTo(-0.15, -1.45);
        tieShape.lineTo(-0.18, -1.95); // still going
        tieShape.lineTo(-0.12, -2.48); // still going...
        tieShape.lineTo(0, -2.72);     // tip finally
        tieShape.lineTo(0.12, -2.48);
        tieShape.lineTo(0.18, -1.95);
        tieShape.lineTo(0.15, -1.45);
        tieShape.lineTo(0.18, -0.95);
        tieShape.lineTo(0.08, -0.45);
        tieShape.lineTo(0.12, 0);
        tieShape.closePath();
        const tieGeo = new THREE.ExtrudeGeometry(tieShape, { depth: 0.065, bevelEnabled: false });
        const tieMesh = new THREE.Mesh(tieGeo, tieMat);
        tieMesh.position.set(-0.04, 3.12, 0.89); g.add(tieMesh);

        // suit lapels
        for (const side of [-1, 1]) {
            const lapelShape = new THREE.Shape();
            lapelShape.moveTo(0, 0); lapelShape.lineTo(side * 0.42, 0.52);
            lapelShape.lineTo(side * 0.32, 0.88); lapelShape.lineTo(0.0, 0.62); lapelShape.closePath();
            const lapelGeo = new THREE.ExtrudeGeometry(lapelShape, { depth: 0.07, bevelEnabled: false });
            const lapel = new THREE.Mesh(lapelGeo, suitMat);
            lapel.position.set(side * 0.22, 2.72, 0.86); g.add(lapel);
        }

        // ARMS: thick arms
        for (const side of [-1, 1]) {
            const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.27, 1.12, 8), suitMat);
            upper.rotation.z = side * 0.2;
            upper.position.set(side * 1.32, 3.22, 0); upper.castShadow = true; g.add(upper);
            const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.2, 0.98, 8), suitMat);
            fore.rotation.z = side * 0.15;
            fore.position.set(side * 1.52, 2.2, 0); g.add(fore);
            const hand = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 7), skinMat);
            hand.position.set(side * 1.64, 1.72, 0); g.add(hand);
        }

        // neck: thick
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 0.42, 8), skinMat);
        neck.position.y = 3.58; g.add(neck);

        // HEAD: wide face, jowls
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.72, 12, 10), skinMat);
        head.scale.set(1.05, 0.92, 1.0); head.position.y = 4.22; head.castShadow = true; g.add(head);

        // jowls: extra spheres hanging off the sides
        for (const jx of [-0.52, 0.52]) {
            const jowl = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), skinMat);
            jowl.scale.set(1.0, 0.68, 0.78); jowl.position.set(jx, 3.88, 0.25); g.add(jowl);
        }

        // EYES: small, alert
        for (const ex of [-0.26, 0.26]) {
            const white = new THREE.Mesh(new THREE.SphereGeometry(0.13, 9, 8), whiteMat);
            white.position.set(ex, 4.28, 0.65); g.add(white);
            const iris = new THREE.Mesh(new THREE.SphereGeometry(0.085, 8, 7), new THREE.MeshBasicMaterial({color:0x336655}));
            iris.position.set(ex, 4.28, 0.7); g.add(iris);
            const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.055, 7, 6), darkMat);
            pupil.position.set(ex, 4.28, 0.74); g.add(pupil);
        }

        // nose
        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.11, 9, 7), skinMat);
        nose.scale.set(1.3, 1.1, 1.0); nose.position.set(0, 4.1, 0.68); g.add(nose);

        // the mouth: puckered expression
        const lips = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.045, 6, 12, Math.PI * 0.9), skinMat);
        lips.position.set(0, 3.9, 0.65); lips.rotation.z = Math.PI * 0.1; g.add(lips);

        // THE HAIR: ExtrudeGeometry iconic swept comb-over masterpiece
        const hairShape = new THREE.Shape();
        hairShape.moveTo(-0.8, -0.08);
        hairShape.quadraticCurveTo(-0.52, 0.55, 0, 0.72);
        hairShape.quadraticCurveTo(0.62, 0.85, 1.05, 0.65);
        hairShape.quadraticCurveTo(1.38, 0.42, 1.42, 0.15);
        hairShape.quadraticCurveTo(1.25, -0.18, 0.8, -0.28);
        hairShape.quadraticCurveTo(0.28, -0.38, -0.18, -0.18);
        hairShape.quadraticCurveTo(-0.55, -0.08, -0.8, -0.08);
        const hairGeo = new THREE.ExtrudeGeometry(hairShape, { depth: 0.88, bevelEnabled: true, bevelSize: 0.08, bevelSegments: 3 });
        const hairMesh = new THREE.Mesh(hairGeo, hairMat);
        hairMesh.position.set(-0.62, 4.42, -0.45); g.add(hairMesh);

        // extra front flap of the comb-over
        const flap = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.15, 0.42), hairMat);
        flap.position.set(0.12, 4.88, 0.2); flap.rotation.x = -0.3; g.add(flap);

        // USA flag pin
        const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.12, 6), new THREE.MeshBasicMaterial({color:0xff0000}));
        pin.rotation.z = Math.PI / 2; pin.position.set(-0.28, 3.42, 0.9); g.add(pin);

        return g;
    }

    // fire a golden dollar projectile -- TREMENDOUS DAMAGE
    private fireGoldOrb(targetPos: THREE.Vector3): void {
        // ShapeGeometry dollar sign -- not just a boring sphere. this is TREMENDOUS.
        const dollarShape = new THREE.Shape();
        // approximate S-curve dollar sign shape
        dollarShape.moveTo(0, 0.2);
        dollarShape.bezierCurveTo(-0.18, 0.2, -0.18, 0.0, 0, 0.0);
        dollarShape.bezierCurveTo(0.18, 0.0, 0.18, -0.2, 0, -0.2);
        const dollarGeo = new THREE.ShapeGeometry(dollarShape, 8);
        const mat = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.95, side: THREE.DoubleSide });
        const proj = new THREE.Mesh(dollarGeo, mat);

        const startPos = this.position.clone();
        startPos.y += 2.0;
        proj.position.copy(startPos);

        const vel = targetPos.clone().sub(startPos).normalize().multiplyScalar(11);
        vel.y += 1.8;

        this.mesh.parent?.add(proj);
        this.projectiles.push({ mesh: proj, vel, life: 3.0 });
        console.log('%cðŸ’° TREMENDOUS PROJECTILE LAUNCHED. BELIEVE ME.', 'color:#FFD700;');
    }

    public update(deltaTime: number): void {
        this.tickGLBMixer(deltaTime);
        // waddles around with purpose
        this.randomWalk(deltaTime, 1.9);

        this.walkTimer += deltaTime * 3;
        this.mesh.position.y = this.position.y + Math.abs(Math.sin(this.walkTimer)) * 0.06;

        // says tremendous things
        this.talkTimer += deltaTime;
        if (this.talkTimer >= this.talkInterval) {
            this.talkTimer = 0;
            this.talkInterval = 6 + Math.random() * 10;
            this.speak();
        }

        // launches gold orbs at nearby player
        if (this.orbCooldown > 0) this.orbCooldown -= deltaTime;
        if (this.orbCooldown <= 0 && this.playerPosRef) {
            const dist = this.playerPosRef.distanceTo(this.position);
            if (dist < 20) {
                this.fireGoldOrb(this.playerPosRef.clone());
                this.orbCooldown = 4 + Math.random() * 4;
            }
        }

        // tick projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];
            p.life -= deltaTime;
            p.vel.y -= 10 * deltaTime;
            p.mesh.position.addScaledVector(p.vel, deltaTime);
            if (p.life <= 0) {
                p.mesh.parent?.remove(p.mesh);
                this.projectiles.splice(i, 1);
            }
        }
    }
}
