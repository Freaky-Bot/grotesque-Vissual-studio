// DONALD TRUMP -- 45th and 47th president, now haunting a cat god world
// orange. very orange. big hair. long red tie. tremendous.
// fires golden dollar signs as projectiles. nobody asked. nobody stopped it.
// this is fine. we're fine. everything is fine.

import * as THREE from 'three';
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
        console.log('%c🍊 TRUMP HAS ENTERED THE GAME. IT\'S GOING TO BE TREMENDOUS.', 'color: #FF7733; font-weight: bold; font-size: 13px');

        // tremendous model. best model. everyone says so. loading GLB now.
        this.tryLoadGLBModel(3.2);
    }

    public setPlayerRef(pos: THREE.Vector3): void {
        this.playerPosRef = pos;
    }

    public getType(): string { return 'trump'; }

    private buildMesh(): THREE.Group {
        const g = new THREE.Group();

        // orange. famously orange. this is the most important material.
        const skinMat  = new THREE.MeshStandardMaterial({ color: 0xFF7733, roughness: 0.65 });
        const suitMat  = new THREE.MeshStandardMaterial({ color: 0x1e1e2e, roughness: 0.8 });
        const tieMat   = new THREE.MeshStandardMaterial({ color: 0xcc1111, roughness: 0.6 }); // the long red tie
        const hairMat  = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); // golden yellow hair
        const eyeMat   = new THREE.MeshBasicMaterial({ color: 0x222222 });
        const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const toothMat = new THREE.MeshBasicMaterial({ color: 0xfdf8f0 });

        // ---- LEGS (chunky, suit trousers) ----
        const thighGeo = new THREE.CylinderGeometry(0.25, 0.22, 0.9, 8);
        const shinGeo  = new THREE.CylinderGeometry(0.22, 0.17, 0.8, 8);
        const shoeGeo  = new THREE.BoxGeometry(0.32, 0.18, 0.55);
        for (const s of [-1, 1]) {
            const thigh = new THREE.Mesh(thighGeo, suitMat);
            thigh.position.set(s * 0.26, 0.5, 0); thigh.castShadow = true; g.add(thigh);
            const shin = new THREE.Mesh(shinGeo, suitMat);
            shin.position.set(s * 0.26, -0.35, 0); shin.castShadow = true; g.add(shin);
            const shoe = new THREE.Mesh(shoeGeo, new THREE.MeshStandardMaterial({ color: 0x1a1000, roughness: 0.95 }));
            shoe.position.set(s * 0.26, -0.83, 0.1); shoe.castShadow = true; g.add(shoe);
        }

        // ---- TORSO (chunky suit jacket + belly of tremendous proportions) ----
        const torsoGeo = new THREE.BoxGeometry(1.1, 1.15, 0.65);
        const torso = new THREE.Mesh(torsoGeo, suitMat);
        torso.position.set(0, 1.28, 0); torso.castShadow = true; g.add(torso);

        // belly bump -- important detail, no cap
        const bellyGeo = new THREE.SphereGeometry(0.42, 12, 10);
        const belly = new THREE.Mesh(bellyGeo, suitMat);
        belly.scale.set(1, 0.8, 0.7);
        belly.position.set(0, 1.2, 0.28); g.add(belly);

        // white shirt front
        const shirtGeo = new THREE.BoxGeometry(0.3, 0.55, 0.66);
        const shirt = new THREE.Mesh(shirtGeo, whiteMat);
        shirt.position.set(0, 1.55, 0); g.add(shirt);

        // THE TIE -- iconic long red tie, extends almost to the waist
        const tieTopGeo = new THREE.BoxGeometry(0.13, 1.15, 0.67);
        const tie = new THREE.Mesh(tieTopGeo, tieMat);
        tie.position.set(0, 1.2, 0); g.add(tie);

        // little tie knot at top -- fancy
        const knotGeo = new THREE.BoxGeometry(0.17, 0.15, 0.68);
        const knot = new THREE.Mesh(knotGeo, tieMat);
        knot.position.set(0, 1.74, 0); g.add(knot);

        // ---- ARMS (suit sleeves) ----
        const upperArmGeo = new THREE.CylinderGeometry(0.17, 0.16, 0.72, 8);
        const foreArmGeo  = new THREE.CylinderGeometry(0.15, 0.12, 0.68, 8);
        const handGeo     = new THREE.SphereGeometry(0.14, 8, 8);
        for (const s of [-1, 1]) {
            const ua = new THREE.Mesh(upperArmGeo, suitMat);
            ua.position.set(s * 0.7, 1.28, 0); ua.rotation.z = s * 0.18; ua.castShadow = true; g.add(ua);
            const fa = new THREE.Mesh(foreArmGeo, suitMat);
            fa.position.set(s * 0.8, 0.68, 0); fa.rotation.z = s * 0.25; fa.castShadow = true; g.add(fa);
            const hand = new THREE.Mesh(handGeo, skinMat);
            hand.position.set(s * 0.88, 0.25, 0); g.add(hand);
        }

        // ---- HEAD (slightly oval, orange) ----
        const headGeo = new THREE.SphereGeometry(0.62, 16, 14);
        const head = new THREE.Mesh(headGeo, skinMat);
        head.scale.set(1, 1.05, 0.92);
        head.position.set(0, 2.32, 0); head.castShadow = true; g.add(head);

        // eyes -- squinty
        const eyeGeo  = new THREE.SphereGeometry(0.09, 8, 8);
        const irisGeo = new THREE.SphereGeometry(0.055, 6, 6);
        const irisMat = new THREE.MeshBasicMaterial({ color: 0x446688 }); // light blue eyes
        for (const s of [-1, 1]) {
            const white = new THREE.Mesh(eyeGeo, whiteMat);
            white.position.set(s * 0.22, 2.38, 0.53); g.add(white);
            const iris = new THREE.Mesh(irisGeo, irisMat);
            iris.position.set(s * 0.22, 2.38, 0.57); g.add(iris);
            const pupil = new THREE.Mesh(irisGeo, eyeMat);
            pupil.scale.setScalar(0.55);
            pupil.position.set(s * 0.22, 2.38, 0.6); g.add(pupil);

            // squint lines above eyes -- very iconic look
            const squintGeo = new THREE.BoxGeometry(0.22, 0.03, 0.03);
            const squintMat = new THREE.MeshBasicMaterial({ color: skinMat.color });
            const squint = new THREE.Mesh(squintGeo, squintMat);
            squint.position.set(s * 0.22, 2.45, 0.55); g.add(squint);
        }

        // eyebrows -- furrowed, intense
        const browGeo = new THREE.BoxGeometry(0.22, 0.05, 0.04);
        const browMat = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); // blonde brows
        for (const s of [-1, 1]) {
            const brow = new THREE.Mesh(browGeo, browMat);
            brow.position.set(s * 0.22, 2.52, 0.51);
            brow.rotation.z = s * -0.25; // angled inward = the look
            g.add(brow);
        }

        // nose -- prominent
        const noseGeo = new THREE.SphereGeometry(0.1, 8, 8);
        const nose = new THREE.Mesh(noseGeo, skinMat);
        nose.scale.set(1.4, 0.8, 1.1);
        nose.position.set(0, 2.22, 0.56); g.add(nose);

        // mouth -- slightly open, ready to say tremendous things
        const mouthGeo = new THREE.BoxGeometry(0.28, 0.08, 0.04);
        const mouthMat = new THREE.MeshBasicMaterial({ color: 0x993322 });
        const mouth = new THREE.Mesh(mouthGeo, mouthMat);
        mouth.position.set(0, 2.07, 0.58); g.add(mouth);

        // teeth showing
        for (const s of [-1, 0, 1]) {
            const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.04), toothMat);
            tooth.position.set(s * 0.07, 2.07, 0.59); g.add(tooth);
        }

        // ---- THE HAIR ---- this is literally the whole reason for this npc
        // base layer -- the underflap that sweeps forward
        const hairBaseGeo = new THREE.SphereGeometry(0.64, 14, 12);
        const hairBase = new THREE.Mesh(hairBaseGeo, hairMat);
        hairBase.scale.set(1.05, 0.55, 1.1);
        hairBase.position.set(0, 2.73, 0.1); g.add(hairBase);

        // the iconic forward sweep comb-over
        const combGeo = new THREE.SphereGeometry(0.5, 12, 10);
        const comb = new THREE.Mesh(combGeo, hairMat);
        comb.scale.set(1.2, 0.4, 0.9);
        comb.position.set(0, 2.82, 0.28); g.add(comb);

        // side poof
        for (const s of [-1, 1]) {
            const sideGeo = new THREE.SphereGeometry(0.3, 10, 8);
            const side = new THREE.Mesh(sideGeo, hairMat);
            side.scale.set(0.6, 0.7, 0.9);
            side.position.set(s * 0.55, 2.55, 0); g.add(side);
        }

        // top tuft -- the crown jewel
        const tuftGeo = new THREE.SphereGeometry(0.35, 10, 8);
        const tuft = new THREE.Mesh(tuftGeo, hairMat);
        tuft.scale.set(0.9, 0.7, 0.8);
        tuft.position.set(0.1, 2.92, -0.1); g.add(tuft);

        return g;
    }

    // fire a golden dollar projectile -- TREMENDOUS DAMAGE
    private fireGoldOrb(targetPos: THREE.Vector3): void {
        const geo = new THREE.SphereGeometry(0.18, 8, 8);
        const mat = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.95 });
        const proj = new THREE.Mesh(geo, mat);

        const startPos = this.position.clone();
        startPos.y += 2.0;
        proj.position.copy(startPos);

        const vel = targetPos.clone().sub(startPos).normalize().multiplyScalar(11);
        vel.y += 1.8;

        this.mesh.parent?.add(proj);
        this.projectiles.push({ mesh: proj, vel, life: 3.0 });
        console.log('%c💰 TREMENDOUS PROJECTILE LAUNCHED. BELIEVE ME.', 'color:#FFD700;');
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
