// EMO NPC with a stand ability
// "my chemical romance was right about everything"
// stand name: THE VOID -- a shadowy wraith that manifests when player gets close
// stand ability: shadow orbs that orbit aggressively, then YEET at nearest target
// very depressed, very powerful, ã‚´ã‚´ã‚´ã‚´ã‚´ã‚´

import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
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

        console.log('%cðŸ–¤ emo npc spawned... nobody cares... *sigh*', 'color: #9933cc; font-style: italic');

        // tryLoadGLBModel for emo. no GLB exists for emo yet. it wont find one. it will be alone.
        // just like the emo. fitting. whatever.
        this.tryLoadGLBModel(2.5);
    }

    // give emo a reference to player pos so stand can hunt them lol
    public setPlayerRef(pos: THREE.Vector3): void {
        this.playerPosRef = pos;
    }

    private buildMesh(): { group: THREE.Group; stand: THREE.Group } {
        // REBUILT FROM SCRATCH -- the emo kid cometh again, darker and more angular
        // more detail, better proportions, properly dramatic. still a JoJo reference (THE VOID)
        const g = new THREE.Group();

        const skinMat    = new THREE.MeshPhongMaterial({ color: 0xd4b8a8, emissive: 0x180c06 });
        const hairMat    = new THREE.MeshPhongMaterial({ color: 0x111118, emissive: 0x000005 });
        const shirtMat   = new THREE.MeshPhongMaterial({ color: 0x111111, emissive: 0x080808 });
        const pantsMat   = new THREE.MeshPhongMaterial({ color: 0x1a0822 });
        const stripeMat  = new THREE.MeshBasicMaterial({ color: 0x662266 });
        const eyeShadMat = new THREE.MeshBasicMaterial({ color: 0x330044 });
        const eyeWhite   = new THREE.MeshPhongMaterial({ color: 0xf0eef8 });
        const pupilMat   = new THREE.MeshBasicMaterial({ color: 0x08000a });
        const lipMat     = new THREE.MeshPhongMaterial({ color: 0x882255 });
        const studMat    = new THREE.MeshBasicMaterial({ color: 0x889988 });

        // LEGS: skinny jeans
        for (const side of [-1, 1]) {
            const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 1.15, 7), pantsMat);
            thigh.position.set(side * 0.28, 0.58, 0); thigh.castShadow = true; g.add(thigh);
            const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.13, 1.0, 7), pantsMat);
            shin.position.set(side * 0.28, -0.5, 0.0); shin.castShadow = true; g.add(shin);
            // chunky platform boots (gotta have the platform boots)
            const bootTop = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.55, 8), new THREE.MeshPhongMaterial({color:0x110011}));
            bootTop.position.set(side * 0.28, -1.1, 0.0); g.add(bootTop);
            const sole = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.14, 0.72), new THREE.MeshPhongMaterial({color:0x222222}));
            sole.position.set(side * 0.28, -1.47, 0.08); g.add(sole);
        }

        // TORSO: LatheGeometry slim torso with a slight hunch implied by rotation later
        const torsoPoints = [
            new THREE.Vector2(0,    0),
            new THREE.Vector2(0.38, 0.05),
            new THREE.Vector2(0.52, 0.45),  // waist
            new THREE.Vector2(0.55, 0.85),
            new THREE.Vector2(0.68, 1.25),  // chest
            new THREE.Vector2(0.72, 1.55),
            new THREE.Vector2(0.65, 1.75),
        ];
        const torso = new THREE.Mesh(new THREE.LatheGeometry(torsoPoints, 10), shirtMat);
        torso.position.y = 1.15; torso.castShadow = true; g.add(torso);

        // band tee stripes across the chest
        for (let i = 0; i < 4; i++) {
            const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.065, 10, 1, true), stripeMat);
            stripe.position.set(0, 2.38 + i * 0.145, 0); g.add(stripe);
        }

        // ARMS: thin TubeGeometry arms, slightly angled down in that sulky posture
        const makeArm = (side: number): THREE.Group => {
            const ag = new THREE.Group();
            const c = new THREE.CatmullRomCurve3([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(side * 0.12, -0.48, 0.05),
                new THREE.Vector3(side * 0.2, -0.92, 0.02),
                new THREE.Vector3(side * 0.08, -1.32, -0.04),
            ]);
            const arm = new THREE.Mesh(new THREE.TubeGeometry(c, 10, 0.14, 7), shirtMat);
            ag.add(arm);
            // hand
            const hand = new THREE.Mesh(new THREE.SphereGeometry(0.16, 7, 6), skinMat);
            hand.position.set(side * 0.08, -1.36, -0.04); ag.add(hand);
            // stud bracelets
            for (let j = 0; j < 5; j++) {
                const stud = new THREE.Mesh(new THREE.SphereGeometry(0.04, 5, 4), studMat);
                const angle = (j / 5) * Math.PI * 2;
                stud.position.set(Math.cos(angle) * 0.15, -1.08, Math.sin(angle) * 0.15 - 0.04);
                ag.add(stud);
            }
            return ag;
        };
        const lArm = makeArm(-1); lArm.position.set(-0.7, 2.88, 0); g.add(lArm);
        const rArm = makeArm(1);  rArm.position.set( 0.7, 2.88, 0); g.add(rArm);

        // HEAD
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.58, 12, 10), skinMat);
        head.position.y = 3.62; head.castShadow = true; g.add(head);

        // eye shadow / liner effect
        for (const ex of [-0.22, 0.22]) {
            const shadow = new THREE.Mesh(new THREE.EllipseCurve ? new THREE.SphereGeometry(0.155, 8, 4) : new THREE.SphereGeometry(0.155, 8, 4), eyeShadMat);
            shadow.scale.set(1.2, 0.7, 0.6); shadow.position.set(ex, 3.65, 0.56); g.add(shadow);
            const white = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 7), eyeWhite);
            white.position.set(ex, 3.66, 0.56); g.add(white);
            const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.085, 7, 6), pupilMat);
            pupil.position.set(ex, 3.66, 0.63); g.add(pupil);
        }

        // nose: small
        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.055, 7, 6), lipMat);
        nose.position.set(0, 3.55, 0.58); g.add(nose);

        // lips: slight frown obviously
        const lowerLip = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.025, 6, 12, Math.PI), lipMat);
        lowerLip.position.set(0, 3.43, 0.57); lowerLip.rotation.x = 0.4; g.add(lowerLip);

        // HAIR: ExtrudeGeometry massive side sweep -- one big dramatic swoop to the left
        const hairShape = new THREE.Shape();
        hairShape.moveTo(-0.62, -0.05);
        hairShape.quadraticCurveTo(-1.15, 0.55, -1.55, 1.12);
        hairShape.quadraticCurveTo(-1.68, 1.52, -1.38, 1.82);
        hairShape.quadraticCurveTo(-0.88, 2.12, -0.32, 1.65);
        hairShape.lineTo(0.12, 1.22);
        hairShape.lineTo(0.55, 0.68);
        hairShape.lineTo(0.62, -0.05);
        hairShape.closePath();
        const hairGeo = new THREE.ExtrudeGeometry(hairShape, { depth: 0.55, bevelEnabled: true, bevelSize: 0.06, bevelSegments: 3 });
        const hairMesh = new THREE.Mesh(hairGeo, hairMat);
        hairMesh.position.set(-0.05, 3.5, -0.18); g.add(hairMesh);

        // back of head hair coverage
        const hairBack = new THREE.Mesh(new THREE.SphereGeometry(0.6, 10, 8), hairMat);
        hairBack.scale.set(1.1, 0.9, 0.9); hairBack.position.set(-0.08, 3.7, -0.25); g.add(hairBack);

        // neck
        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.38, 7), skinMat);
        neck.position.y = 3.22; g.add(neck);

        // THE VOID STAND: spooky crystalline entity
        const standGroup = new THREE.Group();
        standGroup.position.set(0, 3.1, 0);

        const voidMat = new THREE.MeshPhongMaterial({
            color: 0x330033, emissive: 0x440044, emissiveIntensity: 0.8,
            transparent: true, opacity: 0.88,
        });
        const voidGlowMat = new THREE.MeshBasicMaterial({ color: 0xcc00ff, transparent: true, opacity: 0.45 });

        // Stand body: OctahedronGeometry hovering torso
        const standBody = new THREE.Mesh(new THREE.OctahedronGeometry(0.72, 1), voidMat);
        standBody.position.set(1.8, 0, 0); standBody.scale.set(1, 1.4, 0.75); standGroup.add(standBody);

        // stand head: IcosahedronGeometry cracked void sphere
        const standHead = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 0), voidMat);
        standHead.position.set(1.8, 1.25, 0); standGroup.add(standHead);

        // void chaos knot -- kept exactly. dont touch it. its sacred.
        const knotMat = new THREE.MeshBasicMaterial({ color: 0xbb00ff, wireframe: true });
        const knotGeo = new THREE.TorusKnotGeometry(0.38, 0.08, 64, 8, 2, 3);
        const voidKnot = new THREE.Mesh(knotGeo, knotMat);
        voidKnot.name = 'void-chaos-knot';
        voidKnot.position.set(1.8, 0, 0); standGroup.add(voidKnot);

        // crystalline spikes from stand
        for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const spike = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.62, 4), voidGlowMat);
            spike.position.set(1.8 + Math.cos(angle) * 0.72, Math.sin(angle) * 0.72, 0);
            spike.lookAt(spike.position.clone().add(new THREE.Vector3(Math.cos(angle), Math.sin(angle), 0)));
            standGroup.add(spike);
        }

        g.add(standGroup);
        return { group: g, stand: standGroup };
    }

    private activateStand(): void {
        this.standActive = true;
        this.standTimer = 0;
        this.stand.visible = true;
        this.speak(); // yells about the void lol
        console.log('%cã‚´ã‚´ã‚´ã‚´ã‚´ THE VOID EMERGES ã‚´ã‚´ã‚´ã‚´ã‚´', 'color: #9900ff; font-weight: bold; font-size: 14px');
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
        this.tickGLBMixer(deltaTime);
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

            // spin the chaos knot -- the void demands chaos. ngl this looks sick.
            const chaosKnot = this.stand.getObjectByName('void-chaos-knot');
            if (chaosKnot) { chaosKnot.rotation.y += deltaTime * 2.5; chaosKnot.rotation.x += deltaTime * 1.3; }

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

    // the void stand status -- elmo needs to know this to activate overdrive mode
    // when THE VOID is up, ETERNAL SUNSHINE goes berserk. thats the deal. forever.
    public isStandActive(): boolean {
        return this.standActive;
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
