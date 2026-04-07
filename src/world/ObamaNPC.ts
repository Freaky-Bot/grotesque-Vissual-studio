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
        console.log('%cðŸ‡ºðŸ‡¸ OBAMA HAS ENTERED THE CAT WORLD. hope levels rising.', 'color: #1A53FF; font-weight: bold; font-size: 13px');

        // yes we can (load a GLB model)
        this.tryLoadGLBModel(2.8);
    }

    public setPlayerRef(pos: THREE.Vector3): void {
        this.playerPosRef = pos;
    }

    public getType(): string { return 'obama'; }

    private buildMesh(): THREE.Group {
        // REBUILT OBAMA -- more angular, more dignified, better suit. tall and presidential.
        // using LatheGeometry for suit body, ExtrudeGeometry for ears, CSG attempts for face detail
        const g = new THREE.Group();

        const skinMat  = new THREE.MeshPhongMaterial({ color: 0x8b6558, emissive: 0x180a06 });
        const suitMat  = new THREE.MeshPhongMaterial({ color: 0x1a1e2a, emissive: 0x050607 });
        const shirtMat = new THREE.MeshPhongMaterial({ color: 0xfcfcfc });
        const tieMat   = new THREE.MeshPhongMaterial({ color: 0x8b0000 });
        const shoeMat  = new THREE.MeshPhongMaterial({ color: 0x111111 });
        const hairMat  = new THREE.MeshPhongMaterial({ color: 0x111111 });
        const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const darkMat  = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const teethMat = new THREE.MeshBasicMaterial({ color: 0xf5f5f5 });

        // LEGS: well-pressed suit trousers
        for (const side of [-1, 1]) {
            const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.24, 1.25, 16), suitMat);
            thigh.position.set(side * 0.32, 0.65, 0); thigh.castShadow = true; g.add(thigh);
            const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 1.1, 16), suitMat);
            shin.position.set(side * 0.32, -0.55, 0); shin.castShadow = true; g.add(shin);
            // polished dress shoes
            const shoeSole = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.14, 0.82), shoeMat);
            shoeSole.position.set(side * 0.32, -1.25, 0.1); g.add(shoeSole);
            const shoeToe = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), shoeMat);
            shoeToe.scale.set(1.0, 0.6, 1.4); shoeToe.position.set(side * 0.32, -1.22, 0.3); g.add(shoeToe);
        }

        // TORSO: LatheGeometry suit jacket -- broad shoulders, tapered waist
        const torsoPoints = [
            new THREE.Vector2(0,    0),
            new THREE.Vector2(0.38, 0.05),
            new THREE.Vector2(0.55, 0.52),
            new THREE.Vector2(0.58, 0.95),
            new THREE.Vector2(0.72, 1.42),
            new THREE.Vector2(0.88, 1.88),
            new THREE.Vector2(0.92, 2.15),
            new THREE.Vector2(0.82, 2.32),
        ];
        const torso = new THREE.Mesh(new THREE.LatheGeometry(torsoPoints, 24), suitMat);
        torso.position.y = 1.3; torso.castShadow = true; g.add(torso);

        // white shirt front panel
        const shirtFront = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 1.15), shirtMat);
        shirtFront.position.set(0, 2.55, 0.75); g.add(shirtFront);

        // TIE: ExtrudeGeometry clean geometric tie shape
        const tieShape = new THREE.Shape();
        tieShape.moveTo(-0.1, 0);
        tieShape.lineTo(-0.14, -0.35);
        tieShape.lineTo(-0.2, -0.72);
        tieShape.lineTo(0, -0.95);
        tieShape.lineTo(0.2, -0.72);
        tieShape.lineTo(0.14, -0.35);
        tieShape.lineTo(0.1, 0);
        tieShape.closePath();
        const tieGeo = new THREE.ExtrudeGeometry(tieShape, { depth: 0.06, bevelEnabled: false });
        const tieMesh = new THREE.Mesh(tieGeo, tieMat);
        tieMesh.position.set(-0.04, 2.9, 0.78); g.add(tieMesh);

        // jacket lapels
        for (const side of [-1, 1]) {
            const lapelShape = new THREE.Shape();
            lapelShape.moveTo(0, 0); lapelShape.lineTo(side * 0.35, 0.45);
            lapelShape.lineTo(side * 0.28, 0.78); lapelShape.lineTo(0.0, 0.55); lapelShape.closePath();
            const lapelGeo = new THREE.ExtrudeGeometry(lapelShape, { depth: 0.07, bevelEnabled: false });
            const lapel = new THREE.Mesh(lapelGeo, suitMat);
            lapel.position.set(side * 0.18, 2.62, 0.72); g.add(lapel);
        }

        // ARMS: suit sleeves with cufflinks
        for (const side of [-1, 1]) {
            const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.24, 1.05, 16), suitMat);
            upper.rotation.z = side * 0.18;
            upper.position.set(side * 1.2, 3.12, 0); upper.castShadow = true; g.add(upper);
            const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.9, 16), suitMat);
            fore.rotation.z = side * 0.15;
            fore.position.set(side * 1.42, 2.18, 0); g.add(fore);
            // white cuff
            const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.19, 0.22, 16), shirtMat);
            cuff.position.set(side * 1.52, 1.72, 0); g.add(cuff);
            // hand
            const hand = new THREE.Mesh(new THREE.SphereGeometry(0.19, 14, 11), skinMat);
            hand.position.set(side * 1.6, 1.48, 0); g.add(hand);
        }

        // neck
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.45, 16), skinMat);
        neck.position.y = 3.48; g.add(neck);

        // HEAD: presidential dimensions. tall and slightly angular.
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.62, 12, 10), skinMat);
        head.scale.set(0.94, 1.05, 0.96); head.position.y = 4.08; head.castShadow = true; g.add(head);

        // EARS: ExtrudeGeometry prominent but dignified
        const earShape = new THREE.Shape();
        earShape.moveTo(0, -0.2); earShape.quadraticCurveTo(0.18, 0, 0.15, 0.22);
        earShape.lineTo(0, 0.28); earShape.quadraticCurveTo(-0.12, 0.12, 0, -0.2);
        const earGeo = new THREE.ExtrudeGeometry(earShape, { depth: 0.12, bevelEnabled: true, bevelSize: 0.025 });
        const lEar = new THREE.Mesh(earGeo, skinMat);
        lEar.position.set(-0.64, 4.1, -0.04); g.add(lEar);
        const rEar = lEar.clone(); rEar.position.set(0.54, 4.1, -0.04); rEar.scale.x = -1; g.add(rEar);

        // EYES: warm and alert
        for (const ex of [-0.24, 0.24]) {
            const white = new THREE.Mesh(new THREE.SphereGeometry(0.125, 14, 12), whiteMat);
            white.position.set(ex, 4.12, 0.58); g.add(white);
            const iris = new THREE.Mesh(new THREE.SphereGeometry(0.082, 14, 11), new THREE.MeshBasicMaterial({color:0x3a2810}));
            iris.position.set(ex, 4.12, 0.63); g.add(iris);
            const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), darkMat);
            pupil.position.set(ex, 4.12, 0.67); g.add(pupil);
        }

        // nose: broad and strong
        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 11), skinMat);
        nose.scale.set(1.3, 0.85, 1.1); nose.position.set(0, 3.95, 0.6); g.add(nose);

        // iconic smile -- TorusGeometry partial arc
        const smileCurve = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.032, 10, 14, Math.PI * 0.7), skinMat);
        smileCurve.rotation.z = Math.PI; smileCurve.position.set(0, 3.78, 0.58); g.add(smileCurve);
        // teeth (just a bit of white peeking through)
        const teeth = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.08), teethMat);
        teeth.position.set(0, 3.77, 0.6); g.add(teeth);

        // HAIR: close-cropped using dark sphere overlay
        const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.63, 12, 8), hairMat);
        hairCap.scale.set(0.94, 0.55, 0.96); hairCap.position.set(0, 4.45, -0.08); g.add(hairCap);
        // temple fade effect (subtle dark patches)
        for (const tx of [-0.56, 0.56]) {
            const temple = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10), hairMat);
            temple.scale.set(0.62, 1.0, 0.5); temple.position.set(tx, 4.08, 0); g.add(temple);
        }

        // Flag pin on lapel
        const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.1, 6), new THREE.MeshBasicMaterial({color:0xff0000}));
        pin.rotation.z = Math.PI / 2; pin.position.set(-0.28, 3.35, 0.78); g.add(pin);

        return g;
    }

    public update(deltaTime: number): void {
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
