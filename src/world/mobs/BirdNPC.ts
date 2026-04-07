// BIRD NPC -- just vibing in the sky. passive. innocent. completely unbothered by the chaos below.
// nobody asked for birds. the sky was Empty and that was Wrong and now its fixed.
// passive mob: flies at ~10-18 units high, 0 damage, 15 hp, flees from everything that breathes wrong
// if you kill a bird you are the villain. we said what we said.

import * as THREE from 'three';
import { BaseNPC } from '../BaseNPC';

// bird color palette -- nature's variety pack. different birds every time. incredible value!! -- infomercial dev
const BIRD_COLORS = [
    0x8B4513, // sparrow brown. humble. relatable.
    0x2f4f4f, // dark pigeon grey. city bird. seen things.
    0xffd700, // canary yellow. aggressively cheerful.
    0x1a1a1a, // crow black. it knows. it always knew.
    0x4169e1, // blue jay blue. snobby. gorgeous.
    0xff6347, // robin red-orange. the classic.
    0xffffff, // white dove. peace. doesnt last long here.
    0x556b2f, // olive finch green. the camouflaged one.
    0x9370DB, // purple martin. rare. majestic. probably evil.
    0xE8722A, // oriole orange. a tiny sun with wings.
];

export class BirdNPC extends BaseNPC {
    // wing pivot groups -- rotating these makes the wings flap from the body attachment point
    // if i just rotated the meshes directly theyd pivot from their centers and look like spinning logs
    // henceforth these pivots are SACRED. touch them not without armor ⚔️
    private wingPivotLeft: THREE.Group;
    private wingPivotRight: THREE.Group;

    // flap animation state
    private wingFlapTimer: number = 0;
    private wingFlapSpeed: number = 8 + Math.random() * 5; // 8-13 hz flap -- faster = smaller bird energy lol

    // flight behavior
    private flyHeight: number = 10 + Math.random() * 8;  // each bird has its own altitude. birds are individuals.
    private flyDirX: number = Math.random() - 0.5;
    private flyDirZ: number = Math.random() - 0.5;
    private flySpeed: number = 3.5 + Math.random() * 2;  // 3.5-5.5 u/sec. gentle cruise.

    // how long to stay in panic flee mode when spooked
    private scaredTimer: number = 0;

    private sceneTimer: number = Math.random() * 20;
    private chirpTimer: number = 0;
    private chirpInterval: number = 18 + Math.random() * 25; // birds dont talk much. unlike the cats.

    constructor(position: THREE.Vector3) {
        super(position);
        this.bubbleHeadOffset = 1.0;

        // what birds say. not much. they are birds. -- disappointed parent energy
        this.dialogues = [
            'tweet tweet',
            '*birb noises*',
            'chirp chirp chirp',
            'CAWWW',
            '...tweet?',
            '*rustling feathers*',
            'pip pip cheerio',
            'coo coo coo',
            '*suspicious bird stare*',
            'chirp chirp (this is fine)',
            'SQUAWK',
            '*flaps aggressively*',
            'tweet... meow? no. tweet.',
        ];

        // birds are FRAGILE. they are leaves with wings. 15hp. no armor. no excuses.
        (this as any).hp = 15;
        (this as any).maxHp = 15;
        (this as any).attackInterval_ = 999; // birds never attack. they are innocent beings. NEVER.

        // start at fly height -- dont spawn on the ground. they are birds not cats.
        position.y = this.flyHeight;

        const { group, wingPivotLeft, wingPivotRight } = this.buildMesh();
        this.mesh = group;
        this.wingPivotLeft = wingPivotLeft;
        this.wingPivotRight = wingPivotRight;
        this.mesh.position.copy(this.position);

        // normalize the initial flight direction so first frame isnt a lurch
        const len = Math.sqrt(this.flyDirX ** 2 + this.flyDirZ ** 2) || 1;
        this.flyDirX /= len;
        this.flyDirZ /= len;

        // load bird GLB -- if it exists, replaces the procedural mesh. if not, stays boxy bird.
        this.tryLoadGLBModel(1.4);

        console.log(`%c🐦 a bird arrived. altitude: ${this.flyHeight.toFixed(1)}. minding its business.`, 'color: #8B6914; font-style: italic');
    }

    private buildMesh(): { group: THREE.Group; wingPivotLeft: THREE.Group; wingPivotRight: THREE.Group } {
        const g = new THREE.Group();
        const bodyColor = BIRD_COLORS[Math.floor(Math.random() * BIRD_COLORS.length)];

        // materials -- simple and cheerful. birds dont need pbr. they have vibes.
        const bodyMat = new THREE.MeshStandardMaterial({ color: bodyColor, roughness: 0.8 });
        const bellyMat = new THREE.MeshStandardMaterial({ color: 0xf5deb3, roughness: 0.8 }); // wheat belly
        const beakMat = new THREE.MeshStandardMaterial({ color: 0xff9900, roughness: 0.6 });   // orange beak, classic
        const eyeMat  = new THREE.MeshBasicMaterial({ color: 0x111111 });                      // beady black eyes

        // BODY -- the main birb. slightly elongated box facing +Z (forward)
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.32, 0.65), bodyMat);
        body.position.set(0, 0, 0);
        g.add(body);

        // BELLY -- lighter underside patch. nature added this detail. so do we.
        const belly = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.1, 0.42), bellyMat);
        belly.position.set(0, -0.15, 0.06);
        g.add(belly);

        // HEAD -- small boxy head at the front-top of body
        const head = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.28, 0.26), bodyMat);
        head.position.set(0, 0.22, 0.36);
        g.add(head);

        // BEAK -- tiny pointy orange box. very important. very bird.
        const beak = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.05, 0.16), beakMat);
        beak.position.set(0, 0.2, 0.52);
        g.add(beak);

        // EYES -- two tiny beady spheres. judging you.
        const eyeGeo = new THREE.SphereGeometry(0.045, 5, 5);
        const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
        eyeL.position.set(0.13, 0.28, 0.44);
        g.add(eyeL);
        const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
        eyeR.position.set(-0.13, 0.28, 0.44);
        g.add(eyeR);

        // TAIL -- flat-ish feather fan at the back, slightly angled downward
        const tail = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.07, 0.3), bodyMat);
        tail.position.set(0, -0.12, -0.45);
        tail.rotation.x = 0.35; // angle tail down like a real bird tailfan
        g.add(tail);

        // LEFT WING PIVOT -- pivot placed at left body edge, wing extends outward from here
        // rotating this group makes the wing flap properly from the attachment point, not from wing center
        // tired of manually tracking player pos? THIS PIVOT does it FOR YOU!! wow!! -- infomercial dev
        const wingPivotLeft = new THREE.Group();
        wingPivotLeft.position.set(0.25, 0.05, -0.05); // body left edge
        const wingGeoLeft = new THREE.BoxGeometry(0.55, 0.06, 0.44);
        const wingMeshLeft = new THREE.Mesh(wingGeoLeft, bodyMat);
        wingMeshLeft.position.set(0.28, 0, 0); // offset from pivot -- wing extends left from attachment
        wingPivotLeft.add(wingMeshLeft);
        g.add(wingPivotLeft);

        // RIGHT WING PIVOT -- mirror of left
        const wingPivotRight = new THREE.Group();
        wingPivotRight.position.set(-0.25, 0.05, -0.05);
        const wingGeoRight = new THREE.BoxGeometry(0.55, 0.06, 0.44);
        const wingMeshRight = new THREE.Mesh(wingGeoRight, bodyMat);
        wingMeshRight.position.set(-0.28, 0, 0); // extends right from attachment
        wingPivotRight.add(wingMeshRight);
        g.add(wingPivotRight);

        // scale the whole bird down -- its a bird not a pterodactyl
        g.scale.set(0.9, 0.9, 0.9);

        return { group: g, wingPivotLeft, wingPivotRight };
    }

    public update(deltaTime: number): void {
        this.sceneTimer += deltaTime;
        this.wingFlapTimer += deltaTime;
        this.chirpTimer += deltaTime;

        this.tickGLBMixer(deltaTime);

        // WING FLAP ANIMATION -- skip if GLB took over (those pivots are orphaned now anyway)
        if (!this.glbLoaded) {
            const flapAngle = Math.sin(this.wingFlapTimer * this.wingFlapSpeed) * 0.7;
            this.wingPivotLeft.rotation.z = flapAngle;
            this.wingPivotRight.rotation.z = -flapAngle; // mirror
        }

        // SCARED TIMER countdown
        if (this.scaredTimer > 0) this.scaredTimer -= deltaTime;

        // CHIRP -- occasionally tweet at the void
        if (this.chirpTimer >= this.chirpInterval) {
            this.chirpTimer = 0;
            this.chirpInterval = 18 + Math.random() * 25;
            this.speak();
        }

        // RANDOM DIRECTION CHANGE -- wander in lazy arcs. birds dont go in straight lines.
        // if scared: dont randomly redirect -- keep fleeing the threat direction
        if (this.scaredTimer <= 0 && Math.random() < 0.006) {
            const newAngle = Math.random() * Math.PI * 2;
            this.flyDirX = Math.cos(newAngle);
            this.flyDirZ = Math.sin(newAngle);
        }

        // SPEED: 2.5x while scared. birds are NOT slow when motivated.
        const speed = this.scaredTimer > 0 ? this.flySpeed * 2.5 : this.flySpeed;

        // HORIZONTAL MOVEMENT
        this.position.x += this.flyDirX * speed * deltaTime;
        this.position.z += this.flyDirZ * speed * deltaTime;

        // WORLD BOUNDS -- bounce off edges. looks funnier than teleporting.
        if (Math.abs(this.position.x) > 190) {
            this.flyDirX *= -1;
            this.position.x = Math.sign(this.position.x) * 189;
        }
        if (Math.abs(this.position.z) > 190) {
            this.flyDirZ *= -1;
            this.position.z = Math.sign(this.position.z) * 189;
        }

        // HEIGHT -- smoothly bob toward target altitude. scared birds fly higher.
        const targetY = this.scaredTimer > 0
            ? this.flyHeight + 6 + Math.sin(this.sceneTimer * 0.5) * 0.8   // panic altitude: way up high
            : this.flyHeight + Math.sin(this.sceneTimer * 0.7) * 1.5;       // normal: gentle bob
        this.position.y += (targetY - this.position.y) * deltaTime * 2.5;

        // FACE DIRECTION OF TRAVEL -- smooth rotation toward movement direction
        const angle = Math.atan2(this.flyDirX, this.flyDirZ);
        this.targetAngle = angle;
        this.mesh.rotation.y += (this.targetAngle - this.mesh.rotation.y) * 0.1;

        // subtle body tilt -- bank slightly into turns like a real bird does
        // nobody will notice this detail. i notice it. it stays.
        this.mesh.rotation.z = -Math.sin(this.wingFlapTimer * 0.3) * 0.04;

        this.mesh.position.copy(this.position);
    }

    // called by MobManager when a threat gets close -- bird FREAKS OUT and flees
    // verily, this creature is not built for combat. it is built for sky. ⚔️
    public scare(threatPos: THREE.Vector3): void {
        if (this.scaredTimer > 1.0) return; // already panicking, dont reset every frame
        this.scaredTimer = 4.0;
        // fly directly AWAY from threat
        const dx = this.position.x - threatPos.x;
        const dz = this.position.z - threatPos.z;
        const len = Math.sqrt(dx * dx + dz * dz) || 1;
        this.flyDirX = dx / len;
        this.flyDirZ = dz / len;
    }

    public getType(): string { return 'bird'; }
}
