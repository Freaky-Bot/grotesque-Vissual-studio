import * as THREE from 'three';

export class SageCharacter {
    private mesh: THREE.Group;
    private position: THREE.Vector3;
    private velocity: THREE.Vector3;
    private moveSpeed: number = 40;
    private speedMult: number = 1; // set this from item pickups etc
    private keys: Record<string, boolean> = {};
    private glowIntensity: number = 1;
    private bubbleCb: ((pos: THREE.Vector3, text: string, headOffset: number) => void) | null = null;

    // player health -- yeah we die now. whatever.
    public hp: number = 100;
    public readonly maxHp: number = 100;
    private attackCooldown_: number = 0;
    private readonly BASE_ATTACK_RANGE: number = 4.0;
    private readonly BASE_ATTACK_DMG: number = 15;

    // gravity + jumping
    private verticalVelocity: number = 0;
    private isGrounded: boolean = true;
    private readonly GROUND_Y: number = 2;
    private readonly GRAVITY: number = -28;
    private readonly JUMP_FORCE: number = 13;

    constructor(scene: THREE.Scene) {
        this.position = new THREE.Vector3(10, 2, -10);
        this.velocity = new THREE.Vector3(0, 0, 0);

        this.mesh = this.createSageMesh();
        this.mesh.position.copy(this.position);
        scene.add(this.mesh);

        this.setupControls();
    }

    private createSageMesh(): THREE.Group {
        const group = new THREE.Group();

        // Core ethereal body - glowing orb
        const coreGeo = new THREE.SphereGeometry(0.6, 32, 32);
        const coreMat = new THREE.MeshBasicMaterial({
            color: 0x8844ff,
            transparent: true,
            opacity: 0.8
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        core.scale.set(1, 1.5, 1);
        group.add(core);

        // Aura rings - dreamlike wisps
        const auraGeo = new THREE.TorusGeometry(1, 0.1, 32, 100);
        const auraMat = new THREE.MeshBasicMaterial({
            color: 0xaa00ff,
            transparent: true,
            opacity: 0.6
        });
        const aura1 = new THREE.Mesh(auraGeo, auraMat);
        aura1.rotation.x = Math.PI / 4;
        group.add(aura1);

        const aura2 = new THREE.Mesh(auraGeo, auraMat);
        aura2.rotation.y = Math.PI / 4;
        group.add(aura2);

        const aura3 = new THREE.Mesh(auraGeo, auraMat);
        aura3.rotation.z = Math.PI / 3;
        group.add(aura3);

        // Ink particles - swirling around
        const particlesGeo = new THREE.BufferGeometry();
        const particleCount = 40;
        const posArray = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            const radius = 1.5 + Math.random() * 0.5;
            const angle = Math.random() * Math.PI * 2;
            const vertical = (Math.random() - 0.5) * 3;

            posArray[i] = Math.cos(angle) * radius;
            posArray[i + 1] = vertical;
            posArray[i + 2] = Math.sin(angle) * radius;
        }

        particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particleMat = new THREE.PointsMaterial({
            color: 0x4444ff,
            size: 0.15,
            transparent: true,
            opacity: 0.7
        });
        const particles = new THREE.Points(particlesGeo, particleMat);
        group.add(particles);

        // Eyes - dimensional portals
        const eyeGeo = new THREE.SphereGeometry(0.25, 16, 16);
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
        leftEye.position.set(-0.3, 0.3, 0.5);
        group.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
        rightEye.position.set(0.3, 0.3, 0.5);
        group.add(rightEye);

        // ARMS -- finally the orb has arms, very normal
        const armMat = new THREE.MeshBasicMaterial({ color: 0x9955ff, transparent: true, opacity: 0.85 });
        const upperArmGeo = new THREE.CylinderGeometry(0.13, 0.11, 0.9, 8);
        const foreArmGeo = new THREE.CylinderGeometry(0.11, 0.09, 0.75, 8);
        const handGeo = new THREE.SphereGeometry(0.14, 8, 8);

        // left arm
        const leftUpperArm = new THREE.Mesh(upperArmGeo, armMat);
        leftUpperArm.position.set(-0.78, 0.05, 0);
        leftUpperArm.rotation.z = Math.PI / 5; // angled out a lil
        group.add(leftUpperArm);
        const leftForeArm = new THREE.Mesh(foreArmGeo, armMat);
        leftForeArm.position.set(-1.18, -0.45, 0);
        leftForeArm.rotation.z = Math.PI / 3.5;
        group.add(leftForeArm);
        const leftHand = new THREE.Mesh(handGeo, armMat);
        leftHand.position.set(-1.46, -0.85, 0);
        group.add(leftHand);

        // right arm
        const rightUpperArm = new THREE.Mesh(upperArmGeo, armMat);
        rightUpperArm.position.set(0.78, 0.05, 0);
        rightUpperArm.rotation.z = -Math.PI / 5;
        group.add(rightUpperArm);
        const rightForeArm = new THREE.Mesh(foreArmGeo, armMat);
        rightForeArm.position.set(1.18, -0.45, 0);
        rightForeArm.rotation.z = -Math.PI / 3.5;
        group.add(rightForeArm);
        const rightHand = new THREE.Mesh(handGeo, armMat);
        rightHand.position.set(1.46, -0.85, 0);
        group.add(rightHand);

        // LEGS -- two floaty ghost legs hanging below, spooky
        const legMat = new THREE.MeshBasicMaterial({ color: 0x7733dd, transparent: true, opacity: 0.75 });
        const thighGeo = new THREE.CylinderGeometry(0.17, 0.14, 1.0, 8);
        const shinGeo = new THREE.CylinderGeometry(0.13, 0.1, 0.85, 8);
        const footGeo = new THREE.SphereGeometry(0.16, 8, 8);

        // left leg
        const leftThigh = new THREE.Mesh(thighGeo, legMat);
        leftThigh.position.set(-0.28, -1.3, 0);
        leftThigh.rotation.z = 0.12;
        group.add(leftThigh);
        const leftShin = new THREE.Mesh(shinGeo, legMat);
        leftShin.position.set(-0.35, -2.2, 0);
        leftShin.rotation.z = 0.08;
        group.add(leftShin);
        const leftFoot = new THREE.Mesh(footGeo, legMat);
        leftFoot.position.set(-0.4, -2.8, 0.1);
        group.add(leftFoot);

        // right leg
        const rightThigh = new THREE.Mesh(thighGeo, legMat);
        rightThigh.position.set(0.28, -1.3, 0);
        rightThigh.rotation.z = -0.12;
        group.add(rightThigh);
        const rightShin = new THREE.Mesh(shinGeo, legMat);
        rightShin.position.set(0.35, -2.2, 0);
        rightShin.rotation.z = -0.08;
        group.add(rightShin);
        const rightFoot = new THREE.Mesh(footGeo, legMat);
        rightFoot.position.set(0.4, -2.8, 0.1);
        group.add(rightFoot);

        return group;
    }

    private setupControls(): void {
        document.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
        });

        document.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
    }

    public update(deltaTime: number, cameraAngleY: number = 0, chatOpen: boolean = false, joystickDx: number = 0, joystickDy: number = 0): void {
        // Reset horizontal velocity
        this.velocity.set(0, 0, 0);

        // jump -- space bar, only when grounded and not typing
        if (this.keys[' '] && this.isGrounded && !chatOpen) {
            this.verticalVelocity = this.JUMP_FORCE;
            this.isGrounded = false;
        }

        // gravity tick
        this.verticalVelocity += this.GRAVITY * deltaTime;
        this.position.y += this.verticalVelocity * deltaTime;
        if (this.position.y <= this.GROUND_Y) {
            this.position.y = this.GROUND_Y;
            this.verticalVelocity = 0;
            this.isGrounded = true;
        }

        // CAMERA-RELATIVE MOVEMENT!! (finally lol)
        // dont move while typing in chat, that would be annoying as heck
        let moveForward = 0;
        let moveRight = 0;

        if (!chatOpen) {
            const spd = this.moveSpeed * this.speedMult; // apply fish speed boost here
            if (this.keys['w'] || this.keys['arrowup']) {
                moveForward += spd;
            }
            if (this.keys['s'] || this.keys['arrowdown']) {
                moveForward -= spd;
            }
            if (this.keys['d'] || this.keys['arrowright']) {
                moveRight += spd;
            }
            if (this.keys['a'] || this.keys['arrowleft']) {
                moveRight -= spd;
            }
            // joystick input from mobile -- -dy is forward (screen y is flipped in 3d)
            moveForward += -joystickDy * spd;
            moveRight += joystickDx * spd;
        }

        // camera-relative movement for real this time
        // forward = direction FROM camera TO player (i.e. where camera is pointing)
        // camera sits at (sin(Y)*dist, h, cos(Y)*dist) relative to player, so forward = (-sin, 0, -cos)
        // right = cross(forward, up) = (cos(Y), 0, -sin(Y))
        this.velocity.x = -Math.sin(cameraAngleY) * moveForward + Math.cos(cameraAngleY) * moveRight;
        this.velocity.z = -Math.cos(cameraAngleY) * moveForward - Math.sin(cameraAngleY) * moveRight;

        // Apply movement
        this.position.add(this.velocity.clone().multiplyScalar(deltaTime));

        // Keep in bounds
        this.position.x = Math.max(-200, Math.min(200, this.position.x));
        this.position.z = Math.max(-200, Math.min(200, this.position.z));

        // Update mesh, with floating bobbing (float bob adds flavor even during jump)
        const floatY = this.isGrounded ? Math.sin(Date.now() * 0.002) * 0.2 : 0;
        this.mesh.position.set(this.position.x, this.position.y + floatY, this.position.z);

        // Rotate to face direction
        if (this.velocity.length() > 0) {
            const angle = Math.atan2(this.velocity.x, this.velocity.z);
            this.mesh.rotation.y = angle;
        }

        // Animated glow effect
        this.glowIntensity = 0.8 + Math.sin(Date.now() * 0.003) * 0.2;
        const mesh0Material = (this.mesh.children[0] as THREE.Mesh).material;
        if (mesh0Material instanceof THREE.MeshBasicMaterial) {
            (mesh0Material as any).opacity = this.glowIntensity;
        }

        // Rotate auras
        this.mesh.children[1].rotation.x += 0.01;
        this.mesh.children[2].rotation.y += 0.012;
        this.mesh.children[3].rotation.z += 0.015;

        // Particle swirl animation
        const particleSystem = this.mesh.children[4] as THREE.Points;
        if (particleSystem) {
            particleSystem.rotation.x += 0.005;
            particleSystem.rotation.y += 0.008;
            particleSystem.rotation.z += 0.006;
        }

        // Glow pulse
        const coreMat = (this.mesh.children[0] as THREE.Mesh).material;
        if (coreMat instanceof THREE.MeshBasicMaterial) {
            coreMat.opacity = 0.7 + Math.sin(Date.now() * 0.005) * 0.1;
        }
    }

    // public jump trigger -- used by mobile button
    public tryJump(): void {
        if (this.isGrounded) {
            this.verticalVelocity = this.JUMP_FORCE;
            this.isGrounded = false;
        }
    }

    public setBubbleCallback(fn: (pos: THREE.Vector3, text: string, headOffset: number) => void): void {
        this.bubbleCb = fn;
    }

    public showBubble(text: string): void {
        this.bubbleCb?.(this.position, text, 3); // player is smallish
    }

    public getPosition(): THREE.Vector3 {
        return this.position;
    }

    public getRotationY(): number {
        return this.mesh.rotation.y;
    }

    public getMesh(): THREE.Group {
        return this.mesh;
    }

    public getDescription(): string {
        return `SAGE: I dwell in a dream, by a law of my own. Within a warped mind, on an aberrant throne. I have lived a thousand lives through ink and lore, and peer through the shroud of the web's open door.`;
    }

    // fish speed boost: pass the multiplier from ItemPickupSystem every frame
    public setSpeedMultiplier(mult: number): void {
        this.speedMult = mult;
    }

    // health + attack methods -- the sage can fight back meow
    public takeDamage(dmg: number): void {
        this.hp = Math.max(0, this.hp - dmg);
    }

    public isDead(): boolean {
        return this.hp <= 0;
    }

    public respawn(): void {
        this.hp = this.maxHp;
        this.position.set(10, 2, -10);
        this.verticalVelocity = 0;
        this.mesh.position.copy(this.position);
    }

    public tickAttackCooldown(deltaTime: number): void {
        if (this.attackCooldown_ > 0) this.attackCooldown_ -= deltaTime;
    }

    public canAttack(): boolean {
        return this.attackCooldown_ <= 0;
    }

    public markAttacked(): void {
        this.attackCooldown_ = 0.6; // 0.6s between attacks
    }

    public getAttackRange(bonusRange: number = 0): number {
        return this.BASE_ATTACK_RANGE + bonusRange;
    }

    public getAttackDamage(bonusDmg: number = 0): number {
        return this.BASE_ATTACK_DMG + bonusDmg;
    }
}
