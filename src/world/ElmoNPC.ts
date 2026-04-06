// ELMO NPC -- the arch nemesis of every emo in existence
// he is joy incarnate and it INFURIATES the emo cats to their VERY SOUL
// elmo finds an emo? he charges. full sprint. no mercy. pure sunshine vs pure darkness.
// this is their eternal conflict and it will never end

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

    constructor(position: THREE.Vector3) {
        super(position);
        this.bubbleHeadOffset = 3.5;
        this.dialogues = this.normalLines;

        // elmo is jacked. hes been doing this for years.
        // verily, this creature hath seen the fall of many emos upon the battlefield ⚔️
        (this as any).hp = 120;
        (this as any).maxHp = 120;
        (this as any).attackInterval_ = 1.2; // attacks faster than normal bc elmo is MOTIVATED

        this.mesh = this.buildMesh();
        this.mesh.position.copy(this.position);
    }

    public setPlayerRef(pos: THREE.Vector3): void {
        this.playerPosRef = pos;
    }

    // called by npcanager every frame to tell elmo where the emos are
    public setEmoTarget(pos: THREE.Vector3 | null): void {
        this.emoTarget = pos;
        if (pos) {
            // emo spotted -- update dialogues to hunting lines ggrrr
            this.dialogues = this.emoHuntLines;
            // make elmo hostile to the player too while hunting -- full chaos mode
            (this as any).markHostileToPlayer();
        } else {
            this.dialogues = this.normalLines;
        }
    }

    private buildMesh(): THREE.Group {
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

        return group;
    }

    public update(deltaTime: number): void {
        this.sceneTimer += deltaTime;

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
            this.randomWalk(deltaTime, 6); // elmo runs at the emo. 6 speed. absolute menace.
        } else {
            // no emo nearby -- wander around being suspiciously cheerful
            this.randomWalk(deltaTime, 3.5);
        }

        // bobbing animation -- even while hunting elmo bobs. he cannot stop.
        const t = Date.now() * 0.001;
        this.mesh.position.y = 0 + Math.sin(t * 3) * 0.08;

        // speak on interval
        if (this.sceneTimer >= this.dialogueInterval) {
            this.sceneTimer = 0;
            this.dialogueInterval = 5 + Math.random() * 8;
            this.speak();
        }
    }

    public getType(): string { return 'elmo'; }
}
