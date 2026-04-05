// EMO NPC with a stand ability
// "my chemical romance was right about everything"
// stand name: THE VOID -- a shadowy wraith that manifests when player gets close
// stand ability: shadow orbs that orbit aggressively, then YEET at nearest target
// very depressed, very powerful, ゴゴゴゴゴゴ

import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

export class EmoNPC extends BaseNPC {
    private sceneTimer: number = Math.random() * 10;
    private dialogueInterval: number = 8 + Math.random() * 12;
    private walkTimer: number = 0;

    // THE VOID stand stuff
    private stand: THREE.Group;
    private standActive: boolean = false;
    private standTimer: number = 0;
    private standCooldown: number = 0;
    private standSummonDist: number = 12; // activates when player within 12 units
    private shadowOrbs: THREE.Mesh[] = [];
    private orbAngles: number[] = [];
    private standPulseTimer: number = 0;

    // stand projectiles -- shadow orbs that get launched
    private projectiles: Array<{ mesh: THREE.Mesh; vel: THREE.Vector3; life: number }> = [];

    private playerPosRef: THREE.Vector3 | null = null;

    constructor(position: THREE.Vector3) {
        super(position);
        this.bubbleHeadOffset = 3.8;
        this.dialogues = [
            'nobody understands me',
            'my chemical romance was right about everything',
            'i welcome the darkness...',
            'THE VOID -- is this emo enough for you',
            'gerard way is my therapist',
            'life is pain and so are you',
            'im not like other NPCs',
            '*stares into middle distance*',
            'i listened to welcome to the black parade and ascended',
            'the stand emerges when i feel feelings',
            'darkness is just light with a bad attitude',
            'we are never ever getting back together... UwU',
        ];

        const { group, stand } = this.buildMesh();
        this.mesh = group;
        this.stand = stand;
        this.mesh.position.copy(this.position);
        // stand starts hidden
        this.stand.visible = false;

        console.log('%c🖤 emo npc spawned... nobody cares... *sigh*', 'color: #9933cc; font-style: italic');
    }

    // give emo a reference to player pos so stand can hunt them lol
    public setPlayerRef(pos: THREE.Vector3): void {
        this.playerPosRef = pos;
    }

    private buildMesh(): { group: THREE.Group; stand: THREE.Group } {
        const g = new THREE.Group();

        // -- MATERIALS --
        const blackMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
        const skinMat = new THREE.MeshStandardMaterial({ color: 0xd4a99a, roughness: 0.7 });
        const hairMat = new THREE.MeshBasicMaterial({ color: 0x111111 }); // jet black hair
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const whiteMat = new THREE.MeshBasicMaterial({ color: 0xfff0f5 }); // pale skin tone
        const redMat = new THREE.MeshStandardMaterial({ color: 0xaa0020, roughness: 0.6 }); // band tee accent
        const denimMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.95 }); // dark skinny jeans
        const bandageMat = new THREE.MeshBasicMaterial({ color: 0x333333 }); // wristbands

        // -- BODY (skinny, wearing black band tee) --
        const torsoGeo = new THREE.BoxGeometry(0.85, 1.1, 0.45);
        const torso = new THREE.Mesh(torsoGeo, blackMat);
        torso.position.set(0, 1.2, 0);
        torso.castShadow = true;
        g.add(torso);

        // MCR logo-ish red stripe on the band tee
        const stripeGeo = new THREE.BoxGeometry(0.5, 0.06, 0.47);
        const stripe = new THREE.Mesh(stripeGeo, redMat);
        stripe.position.set(0, 1.35, 0);
        g.add(stripe);

        // -- HEAD --
        const headGeo = new THREE.BoxGeometry(0.75, 0.8, 0.7);
        const head = new THREE.Mesh(headGeo, skinMat);
        head.position.set(0, 2.15, 0);
        head.castShadow = true;
        g.add(head);

        // -- HAIR -- big emo side-swept covering one eye
        // top of head
        const topHairGeo = new THREE.BoxGeometry(0.82, 0.35, 0.78);
        const topHair = new THREE.Mesh(topHairGeo, hairMat);
        topHair.position.set(0, 2.63, 0.02);
        g.add(topHair);

        // the iconic side sweep covering left eye entirely
        const sweepGeo = new THREE.BoxGeometry(0.45, 0.55, 0.74);
        const sweep = new THREE.Mesh(sweepGeo, hairMat);
        sweep.position.set(-0.24, 2.28, 0.2);
        sweep.rotation.z = -0.25;
        g.add(sweep);

        // back of hair, long and dramatic
        const backHairGeo = new THREE.BoxGeometry(0.75, 0.6, 0.2);
        const backHair = new THREE.Mesh(backHairGeo, hairMat);
        backHair.position.set(0, 2.05, -0.42);
        g.add(backHair);

        // -- EYES -- one visible (sad), one covered by hair
        const eyeGeo = new THREE.SphereGeometry(0.1, 8, 8);
        const visibleEye = new THREE.Mesh(eyeGeo, whiteMat);
        visibleEye.position.set(0.24, 2.22, 0.36);
        g.add(visibleEye);
        const pupilGeo = new THREE.SphereGeometry(0.07, 8, 8);
        const pupil = new THREE.Mesh(pupilGeo, eyeMat);
        pupil.position.set(0.24, 2.22, 0.43);
        g.add(pupil);

        // thick eyeliner under the visible eye
        const linerGeo = new THREE.BoxGeometry(0.22, 0.04, 0.05);
        const linerMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const liner = new THREE.Mesh(linerGeo, linerMat);
        liner.position.set(0.24, 2.14, 0.44);
        g.add(liner);

        // -- FROWN (perpetually sad) --
        const frownGeo = new THREE.TorusGeometry(0.1, 0.025, 6, 12, Math.PI);
        const frown = new THREE.Mesh(frownGeo, eyeMat);
        frown.position.set(0, 1.88, 0.37);
        frown.rotation.z = Math.PI; // flip to frown
        g.add(frown);

        // -- ARMS (skinny, black sleeves) --
        const upperArmGeo = new THREE.CylinderGeometry(0.13, 0.12, 0.75, 8);
        const foreArmGeo = new THREE.CylinderGeometry(0.11, 0.1, 0.65, 8);
        const handGeo = new THREE.SphereGeometry(0.12, 8, 8);

        for (const side of [-1, 1]) {
            const ua = new THREE.Mesh(upperArmGeo, blackMat);
            ua.position.set(side * 0.55, 1.2, 0);
            ua.rotation.z = side * 0.18;
            ua.castShadow = true;
            g.add(ua);

            const fa = new THREE.Mesh(foreArmGeo, blackMat);
            fa.position.set(side * 0.65, 0.62, 0);
            fa.rotation.z = side * 0.28;
            fa.castShadow = true;
            g.add(fa);

            const hand = new THREE.Mesh(handGeo, skinMat);
            hand.position.set(side * 0.73, 0.2, 0);
            g.add(hand);

            // wristbands -- emo essential
            const wb = new THREE.CylinderGeometry(0.115, 0.115, 0.18, 8);
            const wristband = new THREE.Mesh(wb, bandageMat);
            wristband.position.set(side * 0.7, 0.35, 0);
            wristband.rotation.z = side * 0.28;
            g.add(wristband);
        }

        // -- LEGS (skinny jeans, dark) --
        const thighGeo = new THREE.CylinderGeometry(0.19, 0.16, 0.85, 8);
        const shinGeo = new THREE.CylinderGeometry(0.15, 0.1, 0.75, 8);
        const shoeGeo = new THREE.BoxGeometry(0.28, 0.2, 0.55); // chunky emo shoes / vans

        for (const side of [-1, 1]) {
            const thigh = new THREE.Mesh(thighGeo, denimMat);
            thigh.position.set(side * 0.22, 0.5, 0);
            thigh.castShadow = true;
            g.add(thigh);

            const shin = new THREE.Mesh(shinGeo, denimMat);
            shin.position.set(side * 0.22, -0.28, 0);
            shin.castShadow = true;
            g.add(shin);

            const shoe = new THREE.Mesh(shoeGeo, blackMat);
            shoe.position.set(side * 0.22, -0.75, 0.08);
            shoe.castShadow = true;
            g.add(shoe);
        }

        // ============================================
        // THE VOID -- emo's stand, a ghostly shadow wraith
        // floats behind and above the emo, humanoid silhouette
        // ============================================
        const standGroup = new THREE.Group();
        standGroup.position.set(0, 0.5, -0.8); // hover just behind emo

        const voidMat = new THREE.MeshBasicMaterial({
            color: 0x440066,
            transparent: true,
            opacity: 0.72,
            wireframe: false,
        });
        const voidGlowMat = new THREE.MeshBasicMaterial({
            color: 0x8800ff,
            transparent: true,
            opacity: 0.45,
        });

        // stand body -- distorted humanoid shape
        const sBodyGeo = new THREE.SphereGeometry(0.55, 10, 10);
        const sBody = new THREE.Mesh(sBodyGeo, voidMat);
        sBody.scale.set(0.8, 1.5, 0.6);
        sBody.position.set(0, 1.2, 0);
        standGroup.add(sBody);

        // stand head -- distorted, slightly tilted
        const sHeadGeo = new THREE.SphereGeometry(0.42, 10, 10);
        const sHead = new THREE.Mesh(sHeadGeo, voidMat);
        sHead.scale.set(1, 1.1, 0.85);
        sHead.position.set(0.12, 2.25, 0);
        sHead.rotation.z = 0.25; // unsettling tilt
        standGroup.add(sHead);

        // stand eyes -- glowing purple slits
        const sEyeGeo = new THREE.SphereGeometry(0.1, 6, 6);
        const sEyeMat = new THREE.MeshBasicMaterial({ color: 0xee00ff });
        for (const x of [-0.16, 0.16]) {
            const se = new THREE.Mesh(sEyeGeo, sEyeMat);
            se.scale.set(0.5, 1.4, 1); // tall slit pupils
            se.position.set(x + 0.12, 2.32, 0.35);
            standGroup.add(se);
        }

        // stand arms -- long ghostly tendrils
        const sArmGeo = new THREE.CylinderGeometry(0.1, 0.04, 1.4, 6);
        for (const side of [-1, 1]) {
            const sArm = new THREE.Mesh(sArmGeo, voidMat);
            sArm.position.set(side * 0.7, 1.0, 0);
            sArm.rotation.z = side * (Math.PI / 4);
            standGroup.add(sArm);
        }

        // shadow orbs that orbit the stand (used for attacks)
        const orbGeo = new THREE.SphereGeometry(0.14, 8, 8);
        const orbMat = new THREE.MeshBasicMaterial({ color: 0xcc00ff, transparent: true, opacity: 0.85 });
        const numOrbs = 4;
        for (let i = 0; i < numOrbs; i++) {
            const orb = new THREE.Mesh(orbGeo, orbMat.clone());
            standGroup.add(orb);
            this.shadowOrbs.push(orb);
            this.orbAngles.push((i / numOrbs) * Math.PI * 2);
        }

        // aura glow around stand
        const auraGeo = new THREE.SphereGeometry(1.1, 12, 12);
        const auraMat = new THREE.MeshBasicMaterial({
            color: 0x330044,
            transparent: true,
            opacity: 0.18,
            side: THREE.BackSide,
        });
        const aura = new THREE.Mesh(auraGeo, auraMat);
        aura.position.set(0, 1.3, 0);
        aura.scale.set(1, 1.8, 1);
        standGroup.add(aura);

        // outer glow ring
        const ringGeo = new THREE.TorusGeometry(1.0, 0.08, 8, 32);
        const ring = new THREE.Mesh(ringGeo, voidGlowMat);
        ring.position.set(0, 0.3, 0);
        ring.rotation.x = Math.PI / 2;
        standGroup.add(ring);

        g.add(standGroup);
        return { group: g, stand: standGroup };
    }

    private activateStand(): void {
        this.standActive = true;
        this.standTimer = 0;
        this.stand.visible = true;
        this.speak(); // yells about the void lol
        console.log('%cゴゴゴゴゴ THE VOID EMERGES ゴゴゴゴゴ', 'color: #9900ff; font-weight: bold; font-size: 14px');
    }

    private deactivateStand(): void {
        this.standActive = false;
        this.standCooldown = 8 + Math.random() * 6; // cooldown before can use again
        this.stand.visible = false;
        // pull projectiles back (just let them expire naturally)
    }

    // fire a shadow orb toward a target position
    private fireOrb(targetPos: THREE.Vector3): void {
        if (!this.standActive) return;

        const orbGeo = new THREE.SphereGeometry(0.16, 8, 8);
        const orbMat = new THREE.MeshBasicMaterial({ color: 0xdd00ff, transparent: true, opacity: 0.9 });
        const proj = new THREE.Mesh(orbGeo, orbMat);

        // spawn orb at stand world position
        const worldPos = new THREE.Vector3();
        this.stand.getWorldPosition(worldPos);
        worldPos.y += 1.2;
        proj.position.copy(worldPos);

        // velocity toward target
        const vel = targetPos.clone().sub(worldPos).normalize().multiplyScalar(14);
        vel.y += 2; // arc a lil

        // add to scene via mesh parent (cheat: attach to emo mesh which is in scene)
        this.mesh.parent?.add(proj);
        this.projectiles.push({ mesh: proj, vel, life: 2.5 });
    }

    public update(deltaTime: number): void {
        // sadly wanders the world
        this.randomWalk(deltaTime, 2.8);

        // walking leg animation
        this.walkTimer += deltaTime * 4;
        this.mesh.position.y = this.position.y + Math.sin(this.walkTimer) * 0.06;

        // stand cooldown ticks down
        if (this.standCooldown > 0) {
            this.standCooldown -= deltaTime;
        }

        // check if player is close enough to trigger stand
        if (!this.standActive && this.standCooldown <= 0 && this.playerPosRef) {
            const dist = this.playerPosRef.distanceTo(this.position);
            if (dist < this.standSummonDist) {
                this.activateStand();
            }
        }

        // sad dialogue timer
        this.sceneTimer += deltaTime;
        if (this.sceneTimer >= this.dialogueInterval) {
            this.sceneTimer = 0;
            this.dialogueInterval = 7 + Math.random() * 12;
            if (!this.standActive) this.speak(); // only speaks normally when stand is down
        }

        // stand is active -- do the stand stuff
        if (this.standActive) {
            this.standTimer += deltaTime;
            this.standPulseTimer += deltaTime * 3;

            // stand hovers and bobs dramatically
            this.stand.position.y = 0.5 + Math.sin(this.standPulseTimer) * 0.25;
            this.stand.rotation.y += deltaTime * 0.8; // slow menacing rotation

            // orbit the shadow orbs around the stand
            for (let i = 0; i < this.shadowOrbs.length; i++) {
                this.orbAngles[i] += deltaTime * 3.5;
                const radius = 0.85 + Math.sin(this.standPulseTimer + i * 1.2) * 0.2;
                this.shadowOrbs[i].position.set(
                    Math.cos(this.orbAngles[i]) * radius,
                    1.2 + Math.sin(this.orbAngles[i] * 0.7) * 0.4,
                    Math.sin(this.orbAngles[i]) * radius,
                );
                // pulse orb opacity
                (this.shadowOrbs[i].material as THREE.MeshBasicMaterial).opacity =
                    0.6 + Math.sin(this.standPulseTimer + i) * 0.35;
            }

            // fire an orb at player every 2.5 seconds while active
            if (this.playerPosRef && Math.floor(this.standTimer * 0.4) > Math.floor((this.standTimer - deltaTime) * 0.4)) {
                this.fireOrb(this.playerPosRef);
            }

            // deactivate after 6 seconds
            if (this.standTimer >= 6) {
                this.deactivateStand();
            }
        }

        // update projectile positions
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];
            p.life -= deltaTime;
            p.vel.y -= 20 * deltaTime; // gravity on orbs
            p.mesh.position.addScaledVector(p.vel, deltaTime);
            // fade out as they die
            (p.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, p.life / 2.5);

            if (p.life <= 0) {
                p.mesh.parent?.remove(p.mesh);
                this.projectiles.splice(i, 1);
            }
        }
    }

    public getType(): string {
        return 'emo'; // *sigh*
    }

    // cleanup stand projectiles when emo dies (ya know, if that happens)
    public die(): void {
        super.die();
        for (const p of this.projectiles) {
            p.mesh.parent?.remove(p.mesh);
        }
        this.projectiles = [];
    }
}
