import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

export enum CatType {
    NORMAL = 'normal',
    JESUS = 'jesus',
    ROBOT = 'robot',
    ORB = 'orb',
    ANGEL = 'angel',
    PIRATE = 'pirate',
    WIZARD = 'wizard',
    VAMPIRE = 'vampire',
    DISCO = 'disco',
    SHADOW = 'shadow'
}

export class CatNPC extends BaseNPC {
    private catType: CatType;
    private speed: number = 3;
    private floatOffset: number = Math.random() * Math.PI * 2;

    constructor(catType: CatType, position: THREE.Vector3) {
        super(position);
        this.catType = catType;
        
        this.mesh = this.createCatMesh();
        this.mesh.position.copy(this.position);

        // Set dialogues based on cat type
        this.setDialogues();
    }

    private createCatMesh(): THREE.Group {
        const group = new THREE.Group();

        switch (this.catType) {
            case CatType.NORMAL:
                return this.createNormalCat(group);
            case CatType.JESUS:
                return this.createJesusCat(group);
            case CatType.ROBOT:
                return this.createRobotCat(group);
            case CatType.ORB:
                return this.createOrbCat(group);
            case CatType.ANGEL:
                return this.createAngelCat(group);
            case CatType.PIRATE:
                return this.createPirateCat(group);
            case CatType.WIZARD:
                return this.createWizardCat(group);
            case CatType.VAMPIRE:
                return this.createVampireCat(group);
            case CatType.DISCO:
                return this.createDiscoCat(group);
            case CatType.SHADOW:
                return this.createShadowCat(group);
        }

        return group;
    }

    private createNormalCat(group: THREE.Group): THREE.Group {
        const bodyGeometry = new THREE.BoxGeometry(1, 1.5, 0.8);
        const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xff8844 });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.castShadow = true;
        body.receiveShadow = true;
        group.add(body);

        // Head
        const headGeometry = new THREE.SphereGeometry(0.6, 16, 16);
        const head = new THREE.Mesh(headGeometry, bodyMaterial);
        head.position.y = 1;
        head.castShadow = true;
        head.receiveShadow = true;
        group.add(head);

        // Tail
        const tailGeometry = new THREE.ConeGeometry(0.2, 1.5, 8);
        const tail = new THREE.Mesh(tailGeometry, bodyMaterial);
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        tail.castShadow = true;
        group.add(tail);

        // Eyes
        const eyeGeometry = new THREE.SphereGeometry(0.15, 8, 8);
        const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.2, 1.3, 0.5);
        group.add(leftEye);
        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.2, 1.3, 0.5);
        group.add(rightEye);

        return group;
    }

    private createJesusCat(group: THREE.Group): THREE.Group {
        // Create normal cat first
        this.createNormalCat(group);

        // Add halo
        const haloGeometry = new THREE.TorusGeometry(1, 0.15, 16, 100);
        const haloMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const halo = new THREE.Mesh(haloGeometry, haloMaterial);
        halo.position.y = 2;
        halo.rotation.x = Math.PI / 3;
        group.add(halo);

        // Add glowing aura
        const auraGeometry = new THREE.SphereGeometry(1.5, 16, 16);
        const auraMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xffffff, 
            transparent: true, 
            opacity: 0.1,
            wireframe: false
        });
        const aura = new THREE.Mesh(auraGeometry, auraMaterial);
        group.add(aura);

        return group;
    }

    private createRobotCat(group: THREE.Group): THREE.Group {
        const bodyGeometry = new THREE.BoxGeometry(1, 1.5, 0.8);
        const bodyMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x888888,
            metalness: 0.8,
            roughness: 0.2
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.castShadow = true;
        body.receiveShadow = true;
        group.add(body);

        // Head with antenna
        const headGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const head = new THREE.Mesh(headGeometry, bodyMaterial);
        head.position.y = 1.2;
        head.castShadow = true;
        group.add(head);

        // Antenna
        const antennaGeometry = new THREE.ConeGeometry(0.1, 0.8, 8);
        const antenna = new THREE.Mesh(antennaGeometry, bodyMaterial);
        antenna.position.y = 2.2;
        group.add(antenna);

        // Eyes - LEDs
        const eyeGeometry = new THREE.SphereGeometry(0.15, 8, 8);
        const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.2, 1.3, 0.5);
        group.add(leftEye);
        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.2, 1.3, 0.5);
        group.add(rightEye);

        return group;
    }

    private createOrbCat(group: THREE.Group): THREE.Group {
        // Spherical cat body
        const orbGeometry = new THREE.SphereGeometry(0.8, 16, 16);
        const orbMaterial = new THREE.MeshBasicMaterial({ color: 0x00ccff });
        const orb = new THREE.Mesh(orbGeometry, orbMaterial);
        orb.castShadow = true;
        orb.receiveShadow = true;
        group.add(orb);

        // Eyes within the orb
        const eyeGeometry = new THREE.SphereGeometry(0.15, 8, 8);
        const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.2, 0.3, 0.6);
        group.add(leftEye);
        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.2, 0.3, 0.6);
        group.add(rightEye);

        // Glowing particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 20;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 4;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.2,
            color: 0x00ff00
        });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        group.add(particles);

        return group;
    }

    private createAngelCat(group: THREE.Group): THREE.Group {
        this.createNormalCat(group);

        // Add wings
        const wingGeometry = new THREE.ConeGeometry(1, 0.5, 4);
        const wingMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });

        const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
        leftWing.position.set(-0.8, 1, 0);
        leftWing.rotation.z = Math.PI / 4;
        group.add(leftWing);

        const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
        rightWing.position.set(0.8, 1, 0);
        rightWing.rotation.z = -Math.PI / 4;
        group.add(rightWing);

        // Halo
        const haloGeometry = new THREE.TorusGeometry(1, 0.15, 16, 100);
        const haloMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const halo = new THREE.Mesh(haloGeometry, haloMaterial);
        halo.position.y = 2;
        halo.rotation.x = Math.PI / 3;
        group.add(halo);

        return group;
    }

    private createPirateCat(group: THREE.Group): THREE.Group {
        this.createNormalCat(group);

        // he's a pirate now matey
        const hatGeometry = new THREE.ConeGeometry(1, 0.4, 8);
        const hatMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        const hat = new THREE.Mesh(hatGeometry, hatMaterial);
        hat.position.y = 1.8;
        group.add(hat);

        // the eye patch memes are real
        const patchGeometry = new THREE.CircleGeometry(0.3, 8);
        const patchMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const eyePatch = new THREE.Mesh(patchGeometry, patchMaterial);
        eyePatch.position.set(-0.2, 1.3, 0.5);
        eyePatch.position.z += 0.01; // floating slightly lol
        group.add(eyePatch);

        return group;
    }

    private createWizardCat(group: THREE.Group): THREE.Group {
        this.createNormalCat(group);

        // Wizard hat
        const hatGeometry = new THREE.ConeGeometry(0.8, 1.2, 8);
        const hatMaterial = new THREE.MeshStandardMaterial({ color: 0x4400ff });
        const hat = new THREE.Mesh(hatGeometry, hatMaterial);
        hat.position.y = 2;
        group.add(hat);

        // Magic staff
        const staffStickGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 8);
        const staffMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        const staffStick = new THREE.Mesh(staffStickGeometry, staffMaterial);
        staffStick.position.set(0.8, 1, 0);
        staffStick.rotation.z = Math.PI / 4;
        group.add(staffStick);

        // Staff orb
        const staffOrbGeometry = new THREE.SphereGeometry(0.3, 8, 8);
        const orbMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
        const staffOrb = new THREE.Mesh(staffOrbGeometry, orbMaterial);
        staffOrb.position.set(1.2, 2.2, 0);
        group.add(staffOrb);

        return group;
    }

    private createVampireCat(group: THREE.Group): THREE.Group {
        this.createNormalCat(group);

        // Red cape/body enhancement
        const capeGeometry = new THREE.BoxGeometry(1.5, 2, 0.2);
        const capeMaterial = new THREE.MeshStandardMaterial({ color: 0xcc0000 });
        const cape = new THREE.Mesh(capeGeometry, capeMaterial);
        cape.position.z = -0.5;
        cape.position.y = 0.5;
        group.add(cape);

        // Fangs (white spikes)
        const fangGeometry = new THREE.ConeGeometry(0.15, 0.4, 4);
        const fangMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const leftFang = new THREE.Mesh(fangGeometry, fangMaterial);
        leftFang.position.set(-0.15, 0.7, 0.6);
        leftFang.rotation.z = Math.PI / 6;
        group.add(leftFang);

        const rightFang = new THREE.Mesh(fangGeometry, fangMaterial);
        rightFang.position.set(0.15, 0.7, 0.6);
        rightFang.rotation.z = -Math.PI / 6;
        group.add(rightFang);

        return group;
    }

    private createDiscoCat(group: THREE.Group): THREE.Group {
        this.createNormalCat(group);

        // Rainbow colored body segments and disco ball parts
        const discoGeometry = new THREE.SphereGeometry(0.4, 8, 8);
        const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff];
        
        for (let i = 0; i < 6; i++) {
            const discoMaterial = new THREE.MeshBasicMaterial({ color: colors[i] });
            const discoBall = new THREE.Mesh(discoGeometry, discoMaterial);
            const angle = (i / 6) * Math.PI * 2;
            discoBall.position.x = Math.cos(angle) * 1;
            discoBall.position.y = 0.5 + Math.sin(angle) * 0.5;
            group.add(discoBall);
        }

        return group;
    }

    private createShadowCat(group: THREE.Group): THREE.Group {
        // Dark, shadowy version of normal cat
        const bodyGeometry = new THREE.BoxGeometry(1, 1.5, 0.8);
        const bodyMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x1a1a1a,
            metalness: 0.4,
            roughness: 0.8
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.castShadow = true;
        body.receiveShadow = true;
        group.add(body);

        // Head
        const headGeometry = new THREE.SphereGeometry(0.6, 16, 16);
        const head = new THREE.Mesh(headGeometry, bodyMaterial);
        head.position.y = 1;
        head.castShadow = true;
        head.receiveShadow = true;
        group.add(head);

        // Tail
        const tailGeometry = new THREE.ConeGeometry(0.2, 1.5, 8);
        const tail = new THREE.Mesh(tailGeometry, bodyMaterial);
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        tail.castShadow = true;
        group.add(tail);

        // Evil glowing eyes
        const eyeGeometry = new THREE.SphereGeometry(0.15, 8, 8);
        const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xff3333 });
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.2, 1.3, 0.5);
        group.add(leftEye);
        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.2, 1.3, 0.5);
        group.add(rightEye);

        return group;
    }

    private setDialogues(): void {
        switch (this.catType) {
            case CatType.NORMAL:
                this.dialogues = [
                    "Meow!",
                    "Meow meow",
                    "Purrr...",
                    "Hiss!",
                    "Mew?",
                    "ORA ORA ORA! (tiny punch sound)",
                    "MUDA MUDA MUDA!",
                    "Yare yare... just a regular cat"
                ];
                break;
            case CatType.JESUS:
                this.dialogues = [
                    "Blessed be the cat god",
                    "Forgive my human",
                    "Love all cats",
                    "Peace through purring",
                    "Meowmen",
                    "GURETO DAZE! This blessing!",
                    "Your next line is 'What a holy cat!'",
                    "WRYYYYYYY! Blessed meow!"
                ];
                break;
            case CatType.ROBOT:
                this.dialogues = [
                    "Beep boop meow",
                    "Calculating cuteness...",
                    "ERROR: Too much cuteness",
                    "Meow.exe running",
                    "Processing treats",
                    "ZA WARUDO! Time to recharge!",
                    "STAND POWER ACTIVATED",
                    "Robot cat... MEOW PLATINUM!"
                ];
                break;
            case CatType.ORB:
                this.dialogues = [
                    "The orb speaks...",
                    "Cosmic purring detected",
                    "MEOOOOOW from the void",
                    "All knowing feline",
                    "The sphere understands",
                    "I see all timelines... ゴゴゴゴゴ",
                    "STONE FREE! I'm liberated!",
                    "Floating between JoJo parts..."
                ];
                break;
            case CatType.ANGEL:
                this.dialogues = [
                    "Wings carry my love",
                    "Divine meowing",
                    "Heavenly purrs",
                    "Angelic wishes",
                    "Blessed journey",
                    "GOLDEN EXPERIENCE! It's alive!",
                    "Flying through golden wind...",
                    "Heaven is where all cats are blessed"
                ];
                break;
            case CatType.PIRATE:
                this.dialogues = [
                    "Arrr meow matey!",
                    "Shiver me whiskers!",
                    "Treasure purrs ahead!",
                    "Avast ye scallywag!",
                    "X marks the meow!",
                    "OI JOSUKE! This treasure is amazing!",
                    "NIGERUNDAYO! From da kraken!",
                    "Sailin' the GOLDEN WIND seas!"
                ];
                break;
            case CatType.WIZARD:
                this.dialogues = [
                    "Meow-gical mysteries unfold",
                    "Spellcasting feline here!",
                    "Your wish is my purr",
                    "Wingardium Meow-osa!",
                    "Mystic cat wisdom",
                    "HAMON BREATHING! Meow technique!",
                    "Ancient jojo martial arts...",
                    "My stand is MEOW REQUIEM!"
                ];
                break;
            case CatType.VAMPIRE:
                this.dialogues = [
                    "I vant to suck your treats!",
                    "The night is meoow",
                    "Darkness calls to me",
                    "Blood vuns deep...",
                    "Bite me gently human",
                    "DIO! I am your meow servant!",
                    "THE STONE MASK TRANSFORMS ME!",
                    "WRYYYYYYY! ETERNAL DARKNESS!"
                ];
                break;
            case CatType.DISCO:
                this.dialogues = [
                    "Stayin' alive meow!",
                    "Boogie boogie purr!",
                    "Disco fever!",
                    "Dance with me feline!",
                    "Night fever meow!",
                    "TORTURE DANCE! PURR EDITION!",
                    "GOLDEN WIND DISCO INFERNO!",
                    "Giorno's drip is IMMACULATE!"
                ];
                break;
            case CatType.SHADOW:
                this.dialogues = [
                    "From shadows we rise...",
                    "Darkness is my home",
                    "Silent paws, silent meow",
                    "The void calls...",
                    "In darkness, all cats are equal",
                    "SHADOW MEOW REQUIEM!",
                    "EPITAPH shows your destiny!",
                    "King Crimson deleted your meow!"
                ];
                break;
        }
    }

    public update(deltaTime: number): void {
        this.randomWalk(deltaTime, this.speed);

        // Occasionally speak
        if (Math.random() < 0.0005) {
            this.speak();
        }

        const time = Date.now() * 0.001 + this.floatOffset;

        // Basic bobbing for all cats so no one is static
        if (this.catType !== CatType.ORB && this.catType !== CatType.ANGEL) {
            this.mesh.position.y = 1.5 + Math.sin(time * 2) * 0.08;
        }
        this.mesh.scale.setScalar(1 + Math.sin(time * 3) * 0.02);

        // Floating for special cats
        if (this.catType === CatType.ORB || this.catType === CatType.ANGEL) {
            const floatHeight = Math.sin(time * 2 + this.position.x) * 0.3;
            this.position.y = 2 + floatHeight;
            this.mesh.position.y = this.position.y;
        }

        // Rotation for orbs
        if (this.catType === CatType.ORB) {
            this.mesh.rotation.z += 0.02;
        }

        // Disco cat rainbow animation
        if (this.catType === CatType.DISCO) {
            this.mesh.rotation.y += 0.05;
            this.mesh.position.y = 2 + Math.sin(time) * 0.3;
        }

        // Shadow cat flicker
        if (this.catType === CatType.SHADOW) {
            if (Math.random() < 0.01) {
                this.mesh.position.y += (Math.random() - 0.5) * 0.1;
            }
        }

        // Vampire cat moves faster at night (based on time)
        if (this.catType === CatType.VAMPIRE) {
            this.mesh.position.y += Math.sin(time * 6) * 0.02;
            const speedBoost = Math.sin(time * 0.5) * 2 + 5;
            this.velocity.multiplyScalar(speedBoost / this.speed);
        }

        // Wizard cat sparkles
        if (this.catType === CatType.WIZARD) {
            if (Math.random() < 0.02) {
                this.mesh.rotation.y += (Math.random() - 0.5) * 0.3;
            }
        }
    }

    public getType(): string {
        return this.catType;
    }
}
