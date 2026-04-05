import * as THREE from 'three';

export class CatGodNPC {
    public position: THREE.Vector3 = new THREE.Vector3(0, 5, 0);
    private mesh: THREE.Group;
    private targetAngle: number = 0;
    private playerPosition: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
    private aiState: 'idle' | 'curious' | 'dominant' = 'idle';
    private aiTimer: number = 0;
    private leftArm: THREE.Group = new THREE.Group(); // the slapping arms lol
    private rightArm: THREE.Group = new THREE.Group();
    private slapTimer: number = 0;
    private slapCooldown: number = 1.2; // slap every 1.2 seconds when close, yolo
    private slapProgress: number = 0;
    private slapActive: boolean = false;
    private slapSide: 'left' | 'right' = 'left';
    private speakCallback: ((pos: THREE.Vector3, text: string, headOffset: number) => void) | null = null;

    constructor(scene: THREE.Scene) {
        this.mesh = this.createCatGodMesh();
        this.mesh.position.copy(this.position);
        scene.add(this.mesh);
    }

    // da cat god cannot die. da cat god is ETERNAL. this is a no-op on purpose uwu~
    public takeDamage(_dmg: number): void {
        // lmao nice try. the cat god laughs at ur damage numbers.
    }

    public isAlive(): boolean {
        return true; // always. forever. the void cannot claim what was never mortal.
    }

    private createCatGodMesh(): THREE.Group {
        const group = new THREE.Group();

        // DIVINE AURA - multiple layers of glowing rings
        const auraGeometry = new THREE.SphereGeometry(10, 32, 32);
        const auraMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xffaa00, 
            transparent: true, 
            opacity: 0.15
        });
        const aura = new THREE.Mesh(auraGeometry, auraMaterial);
        group.add(aura);

        const aura2Geometry = new THREE.SphereGeometry(12, 32, 32);
        const aura2Material = new THREE.MeshBasicMaterial({ 
            color: 0xffff00, 
            transparent: true, 
            opacity: 0.1
        });
        const aura2 = new THREE.Mesh(aura2Geometry, aura2Material);
        group.add(aura2);

        // DIVINE ROBES - flowing garment
        const robeGeometry = new THREE.BoxGeometry(3.5, 5, 3.5);
        const robeMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xffd700, // golden
            metalness: 0.4,
            roughness: 0.3
        });
        const robe = new THREE.Mesh(robeGeometry, robeMaterial);
        robe.position.y = -0.5;
        robe.castShadow = true;
        robe.receiveShadow = true;
        group.add(robe);

        // CAT HEAD - blessed feline features
        const headGeometry = new THREE.SphereGeometry(1.5, 32, 32);
        const headMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xffcc99,
            metalness: 0.1,
            roughness: 0.5
        });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.y = 4;
        head.castShadow = true;
        head.receiveShadow = true;
        group.add(head);

        // CAT EARS - pointy blessed ears
        const earGeometry = new THREE.ConeGeometry(0.5, 1.5, 16);
        const earMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xffcc99,
            metalness: 0.1,
            roughness: 0.5
        });
        const leftEar = new THREE.Mesh(earGeometry, earMaterial);
        leftEar.position.set(-1, 5.5, 0);
        leftEar.rotation.z = 0.3;
        leftEar.castShadow = true;
        group.add(leftEar);

        const rightEar = new THREE.Mesh(earGeometry, earMaterial);
        rightEar.position.set(1, 5.5, 0);
        rightEar.rotation.z = -0.3;
        rightEar.castShadow = true;
        group.add(rightEar);

        // INNER EAR PINK
        const innerEarGeometry = new THREE.ConeGeometry(0.25, 0.8, 8);
        const innerEarMaterial = new THREE.MeshStandardMaterial({ color: 0xff99cc });
        const leftInnerEar = new THREE.Mesh(innerEarGeometry, innerEarMaterial);
        leftInnerEar.position.set(-1, 5.2, 0);
        leftInnerEar.rotation.z = 0.3;
        group.add(leftInnerEar);

        const rightInnerEar = new THREE.Mesh(innerEarGeometry, innerEarMaterial);
        rightInnerEar.position.set(1, 5.2, 0);
        rightInnerEar.rotation.z = -0.3;
        group.add(rightInnerEar);

        // GLOWING EYES - divine emerald gaze
        const eyeGeometry = new THREE.SphereGeometry(0.6, 16, 16);
        const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.6, 4.5, 1.3);
        group.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.6, 4.5, 1.3);
        group.add(rightEye);

        // PUPILS - black cat pupils
        const pupilGeometry = new THREE.SphereGeometry(0.25, 8, 8);
        const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        leftPupil.position.set(-0.6, 4.5, 1.5);
        group.add(leftPupil);

        const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        rightPupil.position.set(0.6, 4.5, 1.5);
        group.add(rightPupil);

        // WHISKERS - delicate blessed whiskers
        const whiskerMat = new THREE.LineBasicMaterial({ color: 0xffffff });
        const whiskerPoints = [
            new THREE.Vector3(-1.2, 4, 1),
            new THREE.Vector3(-2, 4, 0.8),
            new THREE.Vector3(-1.2, 4, -1),
            new THREE.Vector3(-2, 4, -1.2)
        ];
        for (const point of whiskerPoints) {
            const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-1, 4, 0), point]);
            const line = new THREE.Line(geo, whiskerMat);
            group.add(line);
        }
        const rightWhiskerPoints = [
            new THREE.Vector3(1.2, 4, 1),
            new THREE.Vector3(2, 4, 0.8),
            new THREE.Vector3(1.2, 4, -1),
            new THREE.Vector3(2, 4, -1.2)
        ];
        for (const point of rightWhiskerPoints) {
            const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(1, 4, 0), point]);
            const line = new THREE.Line(geo, whiskerMat);
            group.add(line);
        }

        // CAT NOSE - blessed pink button nose
        const noseGeometry = new THREE.SphereGeometry(0.2, 8, 8);
        const noseMaterial = new THREE.MeshStandardMaterial({ color: 0xff99cc });
        const nose = new THREE.Mesh(noseGeometry, noseMaterial);
        nose.position.set(0, 3.8, 1.5);
        group.add(nose);

        // DIVINE HALO - multi-layer blessed ring
        const haloGeometry = new THREE.TorusGeometry(5, 0.4, 16, 100);
        const haloMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const halo = new THREE.Mesh(haloGeometry, haloMaterial);
        halo.rotation.x = Math.PI / 3;
        halo.position.y = 6;
        group.add(halo);

        const halo2Geometry = new THREE.TorusGeometry(5.5, 0.2, 16, 100);
        const halo2Material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const halo2 = new THREE.Mesh(halo2Geometry, halo2Material);
        halo2.rotation.x = Math.PI / 3.5;
        halo2.position.y = 6.2;
        group.add(halo2);

        // BLESSED TAIL - divine flowing tail
        const tailGeometry = new THREE.ConeGeometry(0.3, 3, 8);
        const tailMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xffd700,
            metalness: 0.3
        });
        const tail = new THREE.Mesh(tailGeometry, tailMaterial);
        tail.position.set(0, 2, -2);
        tail.rotation.x = 0.8;
        tail.castShadow = true;
        group.add(tail);

        // CAT ARMS - for slapping mortals, very important feature
        this.buildArms(group);

        // BABY FEATURES - crown of light
        const crownGeometry = new THREE.SphereGeometry(1.8, 16, 16);
        const crownMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xffff99, 
            transparent: true, 
            opacity: 0.3
        });
        const crown = new THREE.Mesh(crownGeometry, crownMaterial);
        crown.position.y = 4.5;
        group.add(crown);

        // Extra sparkles around the cat god baby
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 50;
        const posArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i += 3) {
            posArray[i] = (Math.random() - 0.5) * 8;
            posArray[i + 1] = (Math.random() - 0.5) * 8 + 4;
            posArray[i + 2] = (Math.random() - 0.5) * 8;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.3,
            color: 0xffff00,
            transparent: true,
            opacity: 0.8
        });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        group.add(particles);

        return group;
    }

    private buildArms(group: THREE.Group): void {
        const armMat = new THREE.MeshStandardMaterial({ color: 0xffcc99 });
        const clawMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.5 });
        const upperArmGeo = new THREE.CylinderGeometry(0.3, 0.25, 1.6, 8);
        const forearmGeo = new THREE.CylinderGeometry(0.25, 0.2, 1.3, 8);
        const pawGeo = new THREE.BoxGeometry(0.8, 0.35, 0.9);
        const clawGeo = new THREE.ConeGeometry(0.09, 0.45, 6);

        // left arm group, pivots at shoulder
        this.leftArm = new THREE.Group();
        this.leftArm.position.set(-2, 1.2, 0);

        const leftUpper = new THREE.Mesh(upperArmGeo, armMat);
        leftUpper.rotation.z = Math.PI / 4;
        leftUpper.position.set(-0.55, 0, 0);
        leftUpper.castShadow = true;
        this.leftArm.add(leftUpper);

        const leftFore = new THREE.Mesh(forearmGeo, armMat);
        leftFore.rotation.z = Math.PI / 5;
        leftFore.position.set(-1.25, -0.4, 0);
        leftFore.castShadow = true;
        this.leftArm.add(leftFore);

        const leftPaw = new THREE.Mesh(pawGeo, armMat);
        leftPaw.position.set(-1.9, -0.75, 0);
        this.leftArm.add(leftPaw);

        // 3 lil claws on left paw
        for (let c = 0; c < 3; c++) {
            const claw = new THREE.Mesh(clawGeo, clawMat);
            claw.position.set(-1.9 + (c - 1) * 0.22, -0.95, 0.42);
            claw.rotation.x = -0.6;
            this.leftArm.add(claw);
        }

        group.add(this.leftArm);

        // right arm group, mirrored
        this.rightArm = new THREE.Group();
        this.rightArm.position.set(2, 1.2, 0);

        const rightUpper = new THREE.Mesh(upperArmGeo, armMat);
        rightUpper.rotation.z = -Math.PI / 4;
        rightUpper.position.set(0.55, 0, 0);
        rightUpper.castShadow = true;
        this.rightArm.add(rightUpper);

        const rightFore = new THREE.Mesh(forearmGeo, armMat);
        rightFore.rotation.z = -Math.PI / 5;
        rightFore.position.set(1.25, -0.4, 0);
        rightFore.castShadow = true;
        this.rightArm.add(rightFore);

        const rightPaw = new THREE.Mesh(pawGeo, armMat);
        rightPaw.position.set(1.9, -0.75, 0);
        this.rightArm.add(rightPaw);

        for (let c = 0; c < 3; c++) {
            const claw = new THREE.Mesh(clawGeo, clawMat);
            claw.position.set(1.9 + (c - 1) * 0.22, -0.95, 0.42);
            claw.rotation.x = -0.6;
            this.rightArm.add(claw);
        }

        group.add(this.rightArm);
    }

    public update(deltaTime: number, playerPosition: THREE.Vector3): void {
        this.playerPosition.copy(playerPosition);
        const distance = this.playerPosition.distanceTo(this.position);
        this.updateAI(deltaTime, distance);

        // Gentle bobbing motion for mystical effect
        const time = Date.now() * 0.001;
        const bobHeight = Math.sin(time * 2) * 0.5;
        this.position.y = 5 + bobHeight;

        // Update mesh position and rotation
        this.mesh.position.copy(this.position);
        this.mesh.rotation.y += (this.targetAngle - this.mesh.rotation.y) * 0.1;

        // AI-driven voice lines
        this.aiTimer += deltaTime;
        if (this.aiTimer > 4) {
            this.aiTimer = 0;
            this.speakAI(distance);
        }

        // SLAP THE PLAYER if theyre too close, this is what arms are for
        this.slapTimer += deltaTime;
        if (distance < 8 && this.slapTimer >= this.slapCooldown && !this.slapActive) {
            this.slapActive = true;
            this.slapProgress = 0;
            this.slapSide = Math.random() < 0.5 ? 'left' : 'right';
            this.slapTimer = 0;
            console.log('🐱 Cat God: *SLAP* get away from me mortal!!');
        }

        if (this.slapActive) {
            this.slapProgress += deltaTime * 4.5; // how fast the slap swings
            const arm = this.slapSide === 'left' ? this.leftArm : this.rightArm;
            const sign = this.slapSide === 'left' ? -1 : 1;
            if (this.slapProgress < 0.5) {
                // wind up - pull arm back
                const t = this.slapProgress * 2;
                arm.rotation.z = sign * t * (Math.PI / 2.5);
                arm.rotation.x = -t * 0.4;
            } else if (this.slapProgress < 1.0) {
                // SLAP - swing forward hard
                const t = (this.slapProgress - 0.5) * 2;
                arm.rotation.z = sign * (1 - t) * (Math.PI / 2.5);
                arm.rotation.x = -((1 - t) * 0.4) + t * (Math.PI / 1.8);
            } else {
                // done, arm goes back to chill position
                arm.rotation.z = 0;
                arm.rotation.x = 0;
                this.slapActive = false;
            }
        } else {
            // arms just hang there looking menacing, gentle sway
            const t2 = Date.now() * 0.001;
            this.leftArm.rotation.z = Math.sin(t2 * 1.2) * 0.06;
            this.rightArm.rotation.z = -Math.sin(t2 * 1.2) * 0.06;
        }

        // Rotate all halos and mystical elements
        for (let i = 0; i < this.mesh.children.length; i++) {
            const child = this.mesh.children[i];
            if (child instanceof THREE.Mesh && child.geometry instanceof THREE.TorusGeometry) {
                child.rotation.z += 0.012;
                child.rotation.x += 0.005;
            }
            // Rotate the crown glow
            if (child instanceof THREE.Mesh && child.geometry instanceof THREE.SphereGeometry && i > 10) {
                child.rotation.x += 0.008;
                child.rotation.y += 0.01;
            }
            // Animate particles
            if (child instanceof THREE.Points) {
                child.rotation.x += 0.003;
                child.rotation.y += 0.004;
            }
        }
        // Slight ear twitch
        if (this.mesh.children[3]) this.mesh.children[3].rotation.z += Math.sin(time * 3) * 0.01;
        if (this.mesh.children[4]) this.mesh.children[4].rotation.z -= Math.sin(time * 3) * 0.01;
    }

    private updateAI(deltaTime: number, distance: number): void {
        if (distance < 12) {
            this.aiState = 'dominant';
            this.moveAwayFromPlayer(deltaTime, 2.5);
        } else if (distance < 30) {
            this.aiState = 'curious';
            this.moveTowardPlayer(deltaTime, 1.2);
        } else {
            this.aiState = 'idle';
            this.randomWalk(deltaTime, 1.5);
        }
    }

    private moveTowardPlayer(deltaTime: number, speed: number): void {
        const direction = this.playerPosition.clone().sub(this.position);
        direction.y = 0;
        if (direction.lengthSq() > 0.01) {
            direction.normalize();
            this.targetAngle = Math.atan2(direction.z, direction.x);
            this.position.add(direction.multiplyScalar(speed * deltaTime));
        }
    }

    private moveAwayFromPlayer(deltaTime: number, speed: number): void {
        const direction = this.position.clone().sub(this.playerPosition);
        direction.y = 0;
        if (direction.lengthSq() > 0.01) {
            direction.normalize();
            this.targetAngle = Math.atan2(direction.z, direction.x);
            this.position.add(direction.multiplyScalar(speed * deltaTime));
        }
    }

    private speakAI(distance: number): void {
        const lines = [
            'I sense a mortal presence... approach with respect.',
            'The baby god knows your footsteps.',
            'Bow to me and I may grant you a yarn.',
            'I will protect this realm with holy fur.',
            'The whiskers of fate are twitching.'
        ];

        let line = lines[Math.floor(Math.random() * lines.length)];
        if (distance < 12) {
            line = 'You are too close to the divine kitty. Back away, human.';
        } else if (distance < 30) {
            line = 'Curiosity is a dangerous toy.';
        }

        const prefix = this.aiState === 'dominant'
            ? '[DOMINANT] '
            : this.aiState === 'curious'
                ? '[CURIOUS] '
                : '[IDLE] ';

        console.log(`🐱 Cat God AI: "${prefix}${line}"`);
        this.speakCallback?.(this.position, line, 9); // head is way up high, offset accordingly
    }

    private randomWalk(deltaTime: number, speed: number = 1.5): void {
        if (Math.random() < 0.02) {
            this.targetAngle = Math.random() * Math.PI * 2;
        }

        const velocityX = Math.cos(this.targetAngle) * speed;
        const velocityZ = Math.sin(this.targetAngle) * speed;
        this.position.x += velocityX * deltaTime;
        this.position.z += velocityZ * deltaTime;

        this.position.x = Math.max(-200, Math.min(200, this.position.x));
        this.position.z = Math.max(-200, Math.min(200, this.position.z));
    }

    public setSpeakCallback(fn: (pos: THREE.Vector3, text: string, headOffset: number) => void): void {
        this.speakCallback = fn;
    }

    public getMesh(): THREE.Mesh | THREE.Group {
        return this.mesh;
    }

    public isIndestructible(): boolean {
        return true;
    }

    public respawn(): void {
        this.position.set(0, 5, 0);
        this.mesh.position.copy(this.position);
        console.log("🐱 Cat God respawns! You cannot destroy the divine!");
    }
}
