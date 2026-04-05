import * as THREE from 'three';

export abstract class BaseNPC {
    protected position: THREE.Vector3;
    protected velocity: THREE.Vector3;
    protected mesh: THREE.Group | THREE.Mesh;
    protected isAlive_: boolean = true;
    protected targetAngle: number = 0;
    protected dialogues: string[] = [];
    protected dialogueTimer: number = 0;
    protected bubbleHeadOffset: number = 3.5; // how high above position to show bubble, override per npc type
    private speakCallback: ((pos: THREE.Vector3, text: string, headOffset: number) => void) | null = null;

    // gravity + jumping -- grounded npcs get this for free
    protected verticalVelocity: number = 0;
    protected isGrounded: boolean = true;
    protected readonly GROUND_Y: number = 2;
    private readonly GRAVITY: number = -28;
    private readonly NPC_JUMP_FORCE: number = 10;

    constructor(position: THREE.Vector3) {
        this.position = position.clone();
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.mesh = new THREE.Group();
    }

    public abstract update(deltaTime: number): void;

    protected randomWalk(deltaTime: number, speed: number = 2): void {
        // just vibing randomly lol
        if (Math.random() < 0.03) {
            this.targetAngle = Math.random() * Math.PI * 2;
        }

        // occasional random jump -- about once every 4-8 seconds statistically
        if (this.isGrounded && Math.random() < 0.004) {
            this.verticalVelocity = this.NPC_JUMP_FORCE;
            this.isGrounded = false;
        }

        // apply gravity
        this.applyGravity(deltaTime);

        // zoooom
        this.velocity.x = Math.cos(this.targetAngle) * speed;
        this.velocity.z = Math.sin(this.targetAngle) * speed;

        this.position.add(this.velocity.clone().multiplyScalar(deltaTime));

        // keep em from escaping :)
        this.position.x = Math.max(-200, Math.min(200, this.position.x));
        this.position.z = Math.max(-200, Math.min(200, this.position.z));

        // update the mesh cuz three.js demands it
        this.mesh.position.copy(this.position);
        if (this.mesh instanceof THREE.Group || this.mesh.rotation) {
            this.mesh.rotation.y += (this.targetAngle - this.mesh.rotation.y) * 0.1; // smooth turning uwu
        }
    }

    // gravity tick -- call this every frame for any grounded npc, sets position.y
    protected applyGravity(deltaTime: number): void {
        this.verticalVelocity += this.GRAVITY * deltaTime;
        this.position.y += this.verticalVelocity * deltaTime;
        if (this.position.y <= this.GROUND_Y) {
            this.position.y = this.GROUND_Y;
            this.verticalVelocity = 0;
            this.isGrounded = true;
        }
    }

    protected speak(): void {
        if (this.dialogues.length > 0) {
            const dialogue = this.dialogues[Math.floor(Math.random() * this.dialogues.length)];
            console.log(`🐱 ${dialogue}`); // MEOW broadcast
            this.speakCallback?.(this.position, dialogue, this.bubbleHeadOffset);
        }
    }

    public setSpeakCallback(fn: (pos: THREE.Vector3, text: string, headOffset: number) => void): void {
        this.speakCallback = fn; // hook in the bubble manager
    }

    public getMesh(): THREE.Group | THREE.Mesh {
        return this.mesh;
    }

    public getPosition(): THREE.Vector3 {
        return this.position;
    }

    public isAlive(): boolean {
        return this.isAlive_;
    }

    public die(): void {
        this.isAlive_ = false;
    }

    public abstract getType(): string;
}
