// ELMO NPC -- the arch nemesis of every emo in existence
// he is joy incarnate and it INFURIATES the emo cats to their VERY SOUL
// elmo finds an emo? he charges. full sprint. no mercy. pure sunshine vs pure darkness.
// this is their eternal conflict and it will never end
//
// STAND ABILITY: ETERNAL SUNSHINE 🌟
// a radiant golden angelic construct that manifests behind elmo when emo is detected
// IT FIRES GOLDEN LIGHT BLASTS directly at the emo to counter THE VOID's shadow orbs
// if the emo dares to use their stand, ETERNAL SUNSHINE goes into overdrive mode
// HEAR YE -- the darkness hath met its match upon this cursed battlefield ⚔️☀️

import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

export class ElmoNPC extends BaseNPC {
    private sceneTimer: number = Math.random() * 15;
    private dialogueInterval: number = 5 + Math.random() * 8;

    // arch nemesis hunt -- finds emos and charges at them
    private emoTarget: THREE.Vector3 | null = null;
    private huntTimer: number = 0;

    // player ref for aggro
    private playerPosRef: THREE.Vector3 | null = null;

    // ============================================
    // STAND: ETERNAL SUNSHINE -- golden angelic stand
    // activates when emo is in range, blasts them with light
    // ============================================
    private lightStand: THREE.Group | null = null;
    private standActive: boolean = false;
    private standTimer: number = 0;
    private standCooldown: number = 0;
    private standPulseTimer: number = 0;
    private lightOrbs: THREE.Mesh[] = [];
    private orbAngles: number[] = [];
    private lightProjectiles: Array<{ mesh: THREE.Mesh; vel: THREE.Vector3; life: number }> = [];
    private emoStandActive: boolean = false; // set true by npcmanager when nearby emo has their stand up

    // day intensity -- 0 at night, 1 at noon. elmo feeds on sunlight like a chaos photovoltaic panel.
    // higher value = more speed, more damage, faster stand, bigger attitude. nobody asked.
    private dayIntensity: number = 0;
    public setDayIntensity(v: number): void { this.dayIntensity = v; }

    // the things elmo says while vibing / while hunting emos
    private readonly normalLines: string[] = [
        "HA HA HA!! ELMO IS SO HAPPY!!",
        "ELMO LOVES EVERYBODY!! (ESPECIALLY NOT EMOS)",
        "LA LA LA LA, ELMO'S WORLD!!",
        "HAVE YOU HUGGED AN ELMO TODAY??",
        "ELMO WANTS TO PLAY!! (forcefully)",
        "ELMO'S FAVORITE COLOR IS RED!! LIKE BLOOD!! JUST KIDDING!! ...maybe",
        "ELMO SAYS... NO!!",
        "TICKLE ELMO!! GO AHEAD!! ELMO DARES YOU!!",
        "ELMO IS THREE AND A HALF YEARS OLD AND HAS SEEN THINGS",
        "ELMO WILL FIND THE EMO!! ELMO ALWAYS FINDS THE EMO!!",
    ];

    private readonly emoHuntLines: string[] = [
        "THERE YOU ARE!! ELMO SEES THE EMO!!",
        "YOUR SADNESS ENDS HERE!! BY ELMO'S HAND!!",
        "HA HA HA!! ELMO FOUND THE GLOOMY ONE!!",
        "NOBODY ASKED YOU TO BE SAD!! ESPECIALLY NOT ELMO!!",
        "ELMO SAYS SMILE!! NOW!! OR ELSE!!",
        "THE EMO CANNOT ESCAPE ELMO'S LOVE!! IT IS INESCAPABLE!!",
        "LAUGH AND THE WORLD LAUGHS WITH ELMO!! CRY AND ELMO CHARGES AT YOU!!",
        "MY CHEMICAL ROMANCE?? ELMO PREFERRED SESAME STREET!! FIGHT HIM!!",
    ];

    // ETERNAL SUNSHINE lines -- yelled when the stand is active
    private readonly standLines: string[] = [
        "ETERNAL SUNSHINE!! ELMO'S STAND IS HERE!!",
        "THE LIGHT WILL PURGE YOUR SADNESS!! FORCEFULLY!!",
        "ELMO'S STAND SAYS... HA HA HA!!",
        "YOUR VOID CANNOT BEAT ELMO'S SUNSHINE STAND!!",
        "FEEL THE WARM LIGHT!! WHETHER YOU LIKE IT OR NOT!!",
        "ETERNAL SUNSHINE -- OVERDRIVE MODE ACTIVATED!!",
        "ELMO FIRES HAPPINESS BULLETS!! DODGE THIS!!",
    ];

    constructor(position: THREE.Vector3) {
        super(position);
        this.bubbleHeadOffset = 3.5;
        this.dialogues = this.normalLines;

        // elmo is jacked. hes been doing this for years.
        // verily, this creature hath seen the fall of many emos upon the battlefield ⚔️
        (this as any).hp = 120;
        (this as any).maxHp = 120;
        (this as any).attackInterval_ = 1.2; // attacks faster than normal bc elmo is MOTIVATED

        const { group, lightStand } = this.buildMesh();
        this.mesh = group;
        this.lightStand = lightStand;
        this.mesh.position.copy(this.position);
        this.lightStand.visible = false; // stand starts hidden -- dormant. waiting. patient. like elmo.

        console.log('%c☀️ ELMO SPAWNED. ETERNAL SUNSHINE STAND: READY. THE EMO SHOULD BE AFRAID.', 'color: #ffaa00; font-weight: bold');

        // la la la la la! elmo's world now has a GLB model!!
        this.tryLoadGLBModel(2.5);
    }

    public setPlayerRef(pos: THREE.Vector3): void {
        this.playerPosRef = pos;
    }

    // called by npcmanager every frame to tell elmo where the emos are
    public setEmoTarget(pos: THREE.Vector3 | null): void {
        this.emoTarget = pos;
        if (pos) {
            // emo spotted -- update dialogues to hunting lines ggrrr
            this.dialogues = this.emoHuntLines;
            // make elmo hostile to the player too while hunting -- full chaos mode
            (this as any).markHostileToPlayer();
            // stand activates when emo is targeted -- charge the stand up!
            if (!this.standActive && this.standCooldown <= 0) {
                this.activateStand();
            }
        } else {
            this.dialogues = this.normalLines;
            if (this.standActive) this.deactivateStand();
        }
    }

    // npcmanager calls this to let elmo know if the emo just popped their stand
    // when emo uses THE VOID, elmo goes into OVERDRIVE and fires faster
    public setEmoStandActive(active: boolean): void {
        this.emoStandActive = active;
    }

    private activateStand(): void {
        if (!this.lightStand) return;
        this.standActive = true;
        this.standTimer = 0;
        this.standPulseTimer = 0;
        this.lightStand.visible = true;
        // yell something about the stand -- random from stand lines
        const line = this.standLines[Math.floor(Math.random() * this.standLines.length)];
        (this as any).forceSay?.(line); // use forceSay if available, else speak
        this.speak();
        console.log('%c☀️ゴゴゴゴゴ ETERNAL SUNSHINE ERUPTS ゴゴゴゴゴ☀️', 'color: #ffcc00; font-weight: bold; font-size: 14px');
    }

    private deactivateStand(): void {
        if (!this.lightStand) return;
        this.standActive = false;
        this.standCooldown = 7 + Math.random() * 5; // wait before stand can come back again, whatever
        this.lightStand.visible = false;
    }

    // fire a golden light blast toward the emo. TASTE THE SUNSHINE.
    private fireLightBlast(targetPos: THREE.Vector3): void {
        if (!this.standActive || !this.lightStand) return;

        // tired of writing verbose geometry code. sphere go brr. -- edgy teen energy
        const orbGeo = new THREE.SphereGeometry(0.18, 8, 8);
        const orbMat = new THREE.MeshBasicMaterial({ color: 0xffee44, transparent: true, opacity: 0.95 });
        const proj = new THREE.Mesh(orbGeo, orbMat);

        // spawn at stand world position
        const worldPos = new THREE.Vector3();
        this.lightStand.getWorldPosition(worldPos);
        worldPos.y += 1.5;
        proj.position.copy(worldPos);

        // velocity toward the emo target, with a slight upward arc
        const vel = targetPos.clone().sub(worldPos).normalize().multiplyScalar(16);
        vel.y += 2.5;

        this.mesh.parent?.add(proj);
        this.lightProjectiles.push({ mesh: proj, vel, life: 2.8 });
    }

    private buildMesh(): { group: THREE.Group; lightStand: THREE.Group } {
        const group = new THREE.Group();

        // ELMO IS RED. VERY RED. AGGRESSIVELY RED. THE REDDEST.
        const redFurMat = new THREE.MeshStandardMaterial({ color: 0xdd1111, roughness: 0.85 });
        const orangeMat = new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.7 });
        const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const blackMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
        const pinkMat = new THREE.MeshBasicMaterial({ color: 0xff9999 });

        // ---- BODY ---- round lil red monster body
        const body = new THREE.Mesh(
            new THREE.SphereGeometry(0.85, 14, 12),
            redFurMat
        );
        body.scale.set(1, 1.1, 0.9);
        body.position.set(0, 1.4, 0);
        body.castShadow = true;
        group.add(body);

        // ---- HEAD ---- big ol' round elmo head
        const head = new THREE.Mesh(
            new THREE.SphereGeometry(0.75, 16, 14),
            redFurMat
        );
        head.position.set(0, 2.6, 0);
        head.castShadow = true;
        group.add(head);

        // ---- EYES ---- big googly eyes (white base)
        const eyeGeo = new THREE.SphereGeometry(0.22, 10, 10);
        for (const side of [-0.25, 0.25]) {
            const eyeWhite = new THREE.Mesh(eyeGeo, whiteMat);
            eyeWhite.position.set(side, 2.75, 0.62);
            eyeWhite.scale.set(1, 1.2, 0.7);
            group.add(eyeWhite);

            // pupil -- tiny black dot
            const pupil = new THREE.Mesh(
                new THREE.SphereGeometry(0.1, 8, 8),
                blackMat
            );
            pupil.position.set(side, 2.75, 0.84);
            group.add(pupil);
        }

        // ---- NOSE ---- the iconic orange spherical nose
        const nose = new THREE.Mesh(
            new THREE.SphereGeometry(0.18, 10, 10),
            orangeMat
        );
        nose.position.set(0, 2.5, 0.74);
        group.add(nose);

        // ---- MOUTH ---- big happy/menacing smile (just a dark arc shape -- fake it with a cylinder)
        const mouth = new THREE.Mesh(
            new THREE.TorusGeometry(0.28, 0.06, 6, 12, Math.PI),
            blackMat
        );
        mouth.position.set(0, 2.28, 0.7);
        mouth.rotation.z = Math.PI; // flip so it curves upward (smiling... or is it a grimace...)
        group.add(mouth);

        // ---- ARMS ---- lil stubby elmo arms
        const armGeo = new THREE.CapsuleGeometry(0.15, 0.5, 4, 8);
        for (const side of [-1, 1]) {
            const arm = new THREE.Mesh(armGeo, redFurMat);
            arm.position.set(side * 1.0, 1.5, 0);
            arm.rotation.z = side * 0.7; // arms slightly out
            arm.castShadow = true;
            group.add(arm);

            // little hands
            const hand = new THREE.Mesh(
                new THREE.SphereGeometry(0.18, 8, 8),
                redFurMat
            );
            hand.position.set(side * 1.4, 1.15, 0);
            group.add(hand);
        }

        // ---- LEGS ---- short lil legs
        const legGeo = new THREE.CapsuleGeometry(0.18, 0.4, 4, 8);
        for (const side of [-0.35, 0.35]) {
            const leg = new THREE.Mesh(legGeo, redFurMat);
            leg.position.set(side, 0.65, 0);
            leg.castShadow = true;
            group.add(leg);
        }

        // fur bump details on head -- just a cone sticking up. elmo got fluff.
        const fluffGeo = new THREE.ConeGeometry(0.1, 0.4, 5);
        for (let i = 0; i < 5; i++) {
            const fluff = new THREE.Mesh(fluffGeo, redFurMat);
            const angle = (i / 5) * Math.PI * 2;
            const r = 0.5;
            fluff.position.set(
                Math.cos(angle) * r * 0.6,
                3.25,
                Math.sin(angle) * r * 0.4
            );
            fluff.rotation.z = Math.cos(angle) * 0.3;
            fluff.rotation.x = Math.sin(angle) * 0.3;
            group.add(fluff);
        }

        // angry EYEBROWS -- two dark slabs above the eyes, rotated inward for constant scowl
        const browGeo = new THREE.BoxGeometry(0.3, 0.07, 0.12);
        for (const side of [-1, 1]) {
            const brow = new THREE.Mesh(browGeo, blackMat);
            brow.position.set(side * 0.24, 2.98, 0.64);
            brow.rotation.z = side * 0.45; // angled inward -- PERMANENTLY ANGRY
            group.add(brow);
        }

        // ============================================
        // ETERNAL SUNSHINE -- elmo's stand
        // golden angelic figure that manifests behind elmo and BLASTS the emo
        // INTRODUCING: the most aggressively cheerful stand in existence!! WOW!! act now!!
        // ============================================
        const standGroup = new THREE.Group();
        standGroup.position.set(0, 0.5, -0.9); // hovers just behind elmo, menacingly

        const sunMat = new THREE.MeshBasicMaterial({ color: 0xffdd00, transparent: true, opacity: 0.82 });
        const sunGlowMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 });
        const sunCoreMat = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.92 });

        // stand body -- radiant golden humanoid silhouette
        const sBodyGeo = new THREE.SphereGeometry(0.52, 10, 10);
        const sBody = new THREE.Mesh(sBodyGeo, sunMat);
        sBody.scale.set(0.82, 1.55, 0.62);
        sBody.position.set(0, 1.2, 0);
        standGroup.add(sBody);

        // stand head -- radiant and bright
        const sHeadGeo = new THREE.SphereGeometry(0.4, 10, 10);
        const sHead = new THREE.Mesh(sHeadGeo, sunMat);
        sHead.scale.set(1.05, 1.15, 0.9);
        sHead.position.set(0, 2.2, 0);
        standGroup.add(sHead);

        // stand eyes -- two white star-shaped blobs (just squished spheres, whatever)
        const sEyeGeo = new THREE.SphereGeometry(0.1, 6, 6);
        const sEyeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        for (const x of [-0.16, 0.16]) {
            const se = new THREE.Mesh(sEyeGeo, sEyeMat);
            se.scale.set(1.5, 0.5, 1); // wide bright eye -- it never stops staring
            se.position.set(x, 2.28, 0.34);
            standGroup.add(se);
        }

        // stand arms -- wings basically, radiating outward
        const sArmGeo = new THREE.CylinderGeometry(0.09, 0.03, 1.5, 6);
        for (const side of [-1, 1]) {
            const sArm = new THREE.Mesh(sArmGeo, sunCoreMat);
            sArm.position.set(side * 0.72, 1.05, 0);
            sArm.rotation.z = side * (Math.PI / 3.5); // wing-like spread
            standGroup.add(sArm);
        }

        // orbiting light orbs -- these are the ammo, they glow gold
        const orbGeo = new THREE.SphereGeometry(0.13, 8, 8);
        const orbMat = new THREE.MeshBasicMaterial({ color: 0xffee22, transparent: true, opacity: 0.9 });
        const numOrbs = 4;
        for (let i = 0; i < numOrbs; i++) {
            const orb = new THREE.Mesh(orbGeo, orbMat.clone());
            standGroup.add(orb);
            this.lightOrbs.push(orb);
            this.orbAngles.push((i / numOrbs) * Math.PI * 2);
        }

        // outer glow aura -- bright warm light radiating from stand
        const auraGeo = new THREE.SphereGeometry(1.15, 12, 12);
        const auraMat = new THREE.MeshBasicMaterial({
            color: 0xffcc00,
            transparent: true,
            opacity: 0.12,
            side: THREE.BackSide,
        });
        const aura = new THREE.Mesh(auraGeo, auraMat);
        aura.position.set(0, 1.3, 0);
        aura.scale.set(1, 1.75, 1);
        standGroup.add(aura);

        // sunbeam ring -- horizontal ring of light like a halo but bigger and angrier
        const ringGeo = new THREE.TorusGeometry(1.05, 0.07, 8, 32);
        const ring = new THREE.Mesh(ringGeo, sunGlowMat);
        ring.position.set(0, 2.4, 0); // crown halo position
        ring.rotation.x = Math.PI / 2;
        standGroup.add(ring);

        // cross beams -- two intersecting planes of light for dramatic effect
        // honestly idk why this works but it always works. on every machine. think about that.
        const beamGeo = new THREE.BoxGeometry(2.4, 0.06, 0.06);
        const beamMat = new THREE.MeshBasicMaterial({ color: 0xffff88, transparent: true, opacity: 0.5 });
        for (const angle of [0, Math.PI / 2]) {
            const beam = new THREE.Mesh(beamGeo, beamMat);
            beam.position.set(0, 1.2, 0);
            beam.rotation.y = angle;
            standGroup.add(beam);
        }

        group.add(standGroup);
        return { group, lightStand: standGroup };
    }

    public update(deltaTime: number): void {
        this.tickGLBMixer(deltaTime);
        this.sceneTimer += deltaTime;

        // stand cooldown ticks
        if (this.standCooldown > 0) this.standCooldown -= deltaTime;

        // dayMultiplier: 1.0 at night, up to 2.2 at high noon. elmo is solar powered. purely.
        // this runs on every frame. every. single. frame. i know what im doing. probably.
        const dayMult = 1.0 + this.dayIntensity * 1.2;

        // if we have an emo target, run at them at FULL SPEED with murderous intent
        // tired of watching these gloomy cats ruin the vibes. -- disappointed parent mode engaged
        if (this.emoTarget) {
            const dx = this.emoTarget.x - this.position.x;
            const dz = this.emoTarget.z - this.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            if (dist > 2.5) {
                // lock on and CHARGE
                (this as any).targetAngle = Math.atan2(dx, dz);
            }
            // when stand is active elmo speeds up -- OVERDRIVE DASH MODE, then scale by sun
            const baseSpeed = this.standActive ? 7.5 : 6.0;
            this.randomWalk(deltaTime, baseSpeed * dayMult);
        } else {
            // no emo nearby -- wander around being suspiciously cheerful
            this.randomWalk(deltaTime, 3.5 * dayMult);
        }

        // ---- ETERNAL SUNSHINE stand logic ----
        if (this.standActive && this.lightStand) {
            this.standTimer += deltaTime;
            // pulse speed also scales with sun -- at noon the stand is VIBRATING with energy
            this.standPulseTimer += deltaTime * (2.8 + this.dayIntensity * 1.5);

            // stand hovers and radiates with divine menace
            this.lightStand.position.y = 0.5 + Math.sin(this.standPulseTimer) * 0.22;
            this.lightStand.rotation.y += deltaTime * (1.1 + this.dayIntensity * 0.8); // spins faster in daylight

            // orbit the light orbs around the stand
            for (let i = 0; i < this.lightOrbs.length; i++) {
                // emo stand active = overdrive. daytime = extra fast. both = absolutely unhinged.
                const orbitSpeed = (this.emoStandActive ? 6.5 : 4.0) + this.dayIntensity * 3.0;
                this.orbAngles[i] += deltaTime * orbitSpeed;
                const radius = 0.9 + Math.sin(this.standPulseTimer + i * 1.4) * 0.18;
                this.lightOrbs[i].position.set(
                    Math.cos(this.orbAngles[i]) * radius,
                    1.2 + Math.sin(this.orbAngles[i] * 0.6) * 0.35,
                    Math.sin(this.orbAngles[i]) * radius,
                );
                // pulse opacity -- brighter in daylight, this is not a coincidence
                const brightness = 0.65 + Math.sin(this.standPulseTimer + i) * 0.3 + this.dayIntensity * 0.2;
                (this.lightOrbs[i].material as THREE.MeshBasicMaterial).opacity = Math.min(1, brightness);
            }

            // fire light blast toward emo target
            // daytime = 50% faster fire rate on top of emo-stand overdrive. sun-powered gun.
            const baseFireRate = this.emoStandActive ? 1.0 : 2.0;
            const fireRate = baseFireRate / Math.max(0.5, dayMult * 0.85); // shorter interval = faster
            if (this.emoTarget && Math.floor(this.standTimer / fireRate) > Math.floor((this.standTimer - deltaTime) / fireRate)) {
                this.fireLightBlast(this.emoTarget);
            }

            // stand lasts longer in daylight -- at noon duration goes from 7s to 12s
            const duration = (this.emoStandActive ? 5 : 7) + this.dayIntensity * 5;
            if (this.standTimer >= duration) {
                this.deactivateStand();
            }
        }

        // update light projectile positions
        for (let i = this.lightProjectiles.length - 1; i >= 0; i--) {
            const p = this.lightProjectiles[i];
            p.life -= deltaTime;
            p.vel.y -= 18 * deltaTime; // gravity
            p.mesh.position.addScaledVector(p.vel, deltaTime);
            // fade out as they expire -- the light fades... but unlike the emo... it comes back
            (p.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, (p.life / 2.8) * 0.95);

            if (p.life <= 0) {
                p.mesh.parent?.remove(p.mesh);
                this.lightProjectiles.splice(i, 1);
            }
        }

        // bobbing animation -- even while hunting elmo bobs. he cannot stop.
        // bobs slightly faster in daylight because elmo has too much energy at noon
        const t = Date.now() * 0.001;
        this.mesh.position.y = 0 + Math.sin(t * (3 + this.dayIntensity * 2)) * 0.08;

        // speak on interval
        if (this.sceneTimer >= this.dialogueInterval) {
            this.sceneTimer = 0;
            this.dialogueInterval = 5 + Math.random() * 8;
            this.speak();
        }
    }

    public getType(): string { return 'elmo'; }
}
