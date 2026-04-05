import * as THREE from 'three';

export class CatGodNPC {
    public position: THREE.Vector3 = new THREE.Vector3(0, 5, 0);
    private mesh: THREE.Group;
    private targetAngle: number = 0;
    private playerPosition: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
    private aiState: 'idle' | 'curious' | 'dominant' = 'idle';
    private aiTimer: number = 0;

    constructor(scene: THREE.Scene) {
        this.mesh = this.createCatGodMesh();
        this.mesh.position.copy(this.position);
        scene.add(this.mesh);
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

        // BLESSED HANDS - prayer position
        const handGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.4);
        const handMaterial = new THREE.MeshStandardMaterial({ color: 0xffcc99 });
        const leftHand = new THREE.Mesh(handGeometry, handMaterial);
        leftHand.position.set(-1.2, 2, 0);
        leftHand.rotation.z = 0.3;
        leftHand.castShadow = true;
        group.add(leftHand);

        const rightHand = new THREE.Mesh(handGeometry, handMaterial);
        rightHand.position.set(1.2, 2, 0);
        rightHand.rotation.z = -0.3;
        rightHand.castShadow = true;
        group.add(rightHand);

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
