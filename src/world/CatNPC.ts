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
    SHADOW = 'shadow',
    // 20 new ones. nobody asked. we deliver anyway. -- infomercial energy
    CHEF = 'chef',
    ASTRONAUT = 'astronaut',
    COWBOY = 'cowboy',
    NINJA = 'ninja',
    SAMURAI = 'samurai',
    CLOWN = 'clown',
    ZOMBIE = 'zombie',
    PHARAOH = 'pharaoh',
    KNIGHT = 'knight',
    SCIENTIST = 'scientist',
    MUMMY = 'mummy',
    DETECTIVE = 'detective',
    FIREFIGHTER = 'firefighter',
    BIKER = 'biker',
    PRINCESS = 'princess',
    GHOST = 'ghost',
    LUCHADOR = 'luchador',
    FAIRY = 'fairy',
    CAVEMAN = 'caveman',
    ALIEN = 'alien',
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
            case CatType.CHEF:
                return this.createChefCat(group);
            case CatType.ASTRONAUT:
                return this.createAstronautCat(group);
            case CatType.COWBOY:
                return this.createCowboyCat(group);
            case CatType.NINJA:
                return this.createNinjaCat(group);
            case CatType.SAMURAI:
                return this.createSamuraiCat(group);
            case CatType.CLOWN:
                return this.createClownCat(group);
            case CatType.ZOMBIE:
                return this.createZombieCat(group);
            case CatType.PHARAOH:
                return this.createPharaohCat(group);
            case CatType.KNIGHT:
                return this.createKnightCat(group);
            case CatType.SCIENTIST:
                return this.createScientistCat(group);
            case CatType.MUMMY:
                return this.createMummyCat(group);
            case CatType.DETECTIVE:
                return this.createDetectiveCat(group);
            case CatType.FIREFIGHTER:
                return this.createFirefighterCat(group);
            case CatType.BIKER:
                return this.createBikerCat(group);
            case CatType.PRINCESS:
                return this.createPrincessCat(group);
            case CatType.GHOST:
                return this.createGhostCat(group);
            case CatType.LUCHADOR:
                return this.createLuchadorCat(group);
            case CatType.FAIRY:
                return this.createFairyCat(group);
            case CatType.CAVEMAN:
                return this.createCavemanCat(group);
            case CatType.ALIEN:
                return this.createAlienCat(group);
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

    private createChefCat(group: THREE.Group): THREE.Group {
        // INTRODUCING: THE CHEF CAT!! Gordon Ramsay wishes he was this cool!!
        this.createNormalCat(group);
        const hatGeo = new THREE.CylinderGeometry(0.45, 0.5, 1.1, 10);
        const hat = new THREE.Mesh(hatGeo, new THREE.MeshStandardMaterial({ color: 0xffffff }));
        hat.position.y = 2.1;
        group.add(hat);
        const brimGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.12, 10);
        const brim = new THREE.Mesh(brimGeo, new THREE.MeshStandardMaterial({ color: 0xeeeeee }));
        brim.position.y = 1.55;
        group.add(brim);
        const ladle = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.2, 6), new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.7 }));
        ladle.position.set(0.9, 0.8, 0);
        ladle.rotation.z = 0.5;
        group.add(ladle);
        return group;
    }

    private createAstronautCat(group: THREE.Group): THREE.Group {
        // ONE SMALL MEOW FOR CAT, ONE GIANT MEOW FOR CATKIND!!
        this.createNormalCat(group);
        const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.85, 14, 14), new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.3, roughness: 0.2, transparent: true, opacity: 0.85 }));
        helmet.position.y = 1.05;
        group.add(helmet);
        const visor = new THREE.Mesh(new THREE.SphereGeometry(0.7, 12, 12), new THREE.MeshBasicMaterial({ color: 0xffdd44, transparent: true, opacity: 0.4 }));
        visor.position.set(0, 1.2, 0.3);
        visor.scale.set(0.7, 0.6, 0.5);
        group.add(visor);
        return group;
    }

    private createCowboyCat(group: THREE.Group): THREE.Group {
        // this is da wey... wait wrong meme. YEEHAW
        this.createNormalCat(group);
        const brim = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.1, 12), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
        brim.position.y = 1.55;
        group.add(brim);
        const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.5, 0.7, 10), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
        crown.position.y = 2.0;
        group.add(crown);
        const star = new THREE.Mesh(new THREE.SphereGeometry(0.12, 5, 5), new THREE.MeshBasicMaterial({ color: 0xFFD700 }));
        star.position.set(0, 0.4, 0.42);
        group.add(star);
        return group;
    }

    private createNinjaCat(group: THREE.Group): THREE.Group {
        // they dont want you to know this cat exists. (they can see you tho)
        const mat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
        const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1.5, 0.8), mat);
        body.castShadow = true;
        group.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.6, 14, 14), mat);
        head.position.y = 1;
        group.add(head);
        const band = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.22, 12), new THREE.MeshStandardMaterial({ color: 0x1a1a2e }));
        band.position.y = 1.1;
        group.add(band);
        const eyeSlitGeo = new THREE.BoxGeometry(0.55, 0.1, 0.05);
        const eyeSlit = new THREE.Mesh(eyeSlitGeo, new THREE.MeshBasicMaterial({ color: 0xff3300 }));
        eyeSlit.position.set(0, 1.15, 0.62);
        group.add(eyeSlit);
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.5, 8), mat);
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        group.add(tail);
        return group;
    }

    private createSamuraiCat(group: THREE.Group): THREE.Group {
        // HEAR YE: bushido cat hath arrived. touch the katana and face consequences.
        this.createNormalCat(group);
        const helmetGeo = new THREE.SphereGeometry(0.7, 12, 12);
        const helmet = new THREE.Mesh(helmetGeo, new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8 }));
        helmet.position.y = 1.25;
        helmet.scale.set(1, 0.8, 1);
        group.add(helmet);
        const crest = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.5, 5), new THREE.MeshBasicMaterial({ color: 0xcc0000 }));
        crest.position.y = 2.0;
        group.add(crest);
        const blade = new THREE.Mesh(new THREE.BoxGeometry(0.07, 1.6, 0.07), new THREE.MeshStandardMaterial({ color: 0xeeeeff, metalness: 1.0, roughness: 0.1 }));
        blade.position.set(0.85, 1.0, 0);
        blade.rotation.z = 0.3;
        group.add(blade);
        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.6, 8), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
        handle.position.set(0.62, 0.25, 0);
        handle.rotation.z = 0.3;
        group.add(handle);
        return group;
    }

    private createClownCat(group: THREE.Group): THREE.Group {
        // TIRED OF BORING CAT COLORS??? NOT ANYMORE!! THIS CHANGES EVERYTHING!!
        const col = [0xff0000, 0x00ff00, 0x0000ff, 0xff00ff, 0xffff00][Math.floor(Math.random() * 5)];
        const body = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.6, 0.9), new THREE.MeshStandardMaterial({ color: col }));
        body.castShadow = true;
        group.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.65, 14, 14), new THREE.MeshStandardMaterial({ color: 0xffe4c4 }));
        head.position.y = 1.1;
        group.add(head);
        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        nose.position.set(0, 1.05, 0.65);
        group.add(nose);
        const hairColors = [0xff6600, 0x00ff00, 0xff00ff];
        for (let i = 0; i < 3; i++) {
            const tuft = new THREE.Mesh(new THREE.SphereGeometry(0.25, 6, 6), new THREE.MeshBasicMaterial({ color: hairColors[i] }));
            tuft.position.set((i - 1) * 0.55, 1.7, 0);
            group.add(tuft);
        }
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.5, 8), new THREE.MeshStandardMaterial({ color: col }));
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        group.add(tail);
        return group;
    }

    private createZombieCat(group: THREE.Group): THREE.Group {
        // this ran on every frame. every. single. frame. and now its undead too. great.
        const mat = new THREE.MeshStandardMaterial({ color: 0x7a9e7e, roughness: 0.95 });
        const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1.5, 0.8), mat);
        body.castShadow = true;
        group.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), mat);
        head.position.y = 1.0;
        group.add(head);
        // droopy arm sticking out
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.12, 1.0, 6), mat);
        arm.position.set(0.6, 0.9, 0.5);
        arm.rotation.x = -1.1;
        arm.rotation.z = 0.3;
        group.add(arm);
        const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
        eyeL.position.set(-0.2, 1.2, 0.53);
        group.add(eyeL);
        const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
        eyeR.position.set(0.2, 1.2, 0.53);
        group.add(eyeR);
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.5, 8), mat);
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        group.add(tail);
        return group;
    }

    private createPharaohCat(group: THREE.Group): THREE.Group {
        // I HEREBY DECLARE: this cat is eternal. bow. now.
        const mat = new THREE.MeshStandardMaterial({ color: 0xC8A84B, metalness: 0.5 });
        const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1.5, 0.8), mat);
        body.castShadow = true;
        group.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.6, 14, 14), mat);
        head.position.y = 1.0;
        group.add(head);
        // nemes headdress -- tall striped crown thing
        const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.65, 1.2, 8), new THREE.MeshStandardMaterial({ color: 0x002244, metalness: 0.3 }));
        crown.position.y = 2.1;
        group.add(crown);
        const stripe1 = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.66, 0.1, 8), new THREE.MeshBasicMaterial({ color: 0xFFD700 }));
        stripe1.position.y = 1.65;
        group.add(stripe1);
        const stripe2 = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.66, 0.1, 8), new THREE.MeshBasicMaterial({ color: 0xFFD700 }));
        stripe2.position.y = 1.85;
        group.add(stripe2);
        const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), new THREE.MeshBasicMaterial({ color: 0x00ccee }));
        eyeL.position.set(-0.2, 1.2, 0.53);
        group.add(eyeL);
        const eyeR = eyeL.clone();
        eyeR.position.set(0.2, 1.2, 0.53);
        group.add(eyeR);
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.5, 8), mat);
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        group.add(tail);
        return group;
    }

    private createKnightCat(group: THREE.Group): THREE.Group {
        // verily this cat is clad in iron. thou shalt not pass.
        const mat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.9, roughness: 0.2 });
        const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.6, 0.9), mat);
        body.castShadow = true;
        group.add(body);
        const helm = new THREE.Mesh(new THREE.SphereGeometry(0.7, 12, 12), mat);
        helm.position.y = 1.15;
        group.add(helm);
        const visor = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.2, 0.08), new THREE.MeshBasicMaterial({ color: 0x333333 }));
        visor.position.set(0, 1.22, 0.68);
        group.add(visor);
        const shieldGeo = new THREE.BoxGeometry(0.08, 1.0, 0.7);
        const shield = new THREE.Mesh(shieldGeo, new THREE.MeshStandardMaterial({ color: 0x4444aa, metalness: 0.6 }));
        shield.position.set(-0.75, 0.5, 0.2);
        group.add(shield);
        const cross = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.06), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        cross.position.set(-0.75, 0.5, 0.54);
        group.add(cross);
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.5, 8), mat);
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        group.add(tail);
        return group;
    }

    private createScientistCat(group: THREE.Group): THREE.Group {
        // INTRODUCING!! the lab coat cat!! 97% of scientists agree this is the best cat!!
        this.createNormalCat(group);
        const coat = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.7, 0.3), new THREE.MeshStandardMaterial({ color: 0xfafafa }));
        coat.position.set(0, 0.1, 0.55);
        group.add(coat);
        const goggleBar = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 6), new THREE.MeshStandardMaterial({ color: 0x444444, metalness: 0.8 }));
        goggleBar.rotation.z = Math.PI / 2;
        goggleBar.position.set(0, 1.35, 0.58);
        group.add(goggleBar);
        for (const xPos of [-0.22, 0.22]) {
            const goggle = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.04, 6, 12), new THREE.MeshStandardMaterial({ color: 0x333333 }));
            goggle.rotation.y = Math.PI / 2;
            goggle.position.set(xPos, 1.35, 0.6);
            group.add(goggle);
        }
        const flask = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.5, 8), new THREE.MeshStandardMaterial({ color: 0x00ff99, transparent: true, opacity: 0.7 }));
        flask.position.set(-0.85, 0.9, 0);
        flask.rotation.z = -0.3;
        group.add(flask);
        return group;
    }

    private createMummyCat(group: THREE.Group): THREE.Group {
        // ancient. cursed. still somehow a cat. wrapping not included (yes it is)
        const mat = new THREE.MeshStandardMaterial({ color: 0xe8d8b0, roughness: 0.9 });
        const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1.5, 0.8), mat);
        body.castShadow = true;
        group.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), mat);
        head.position.y = 1.0;
        group.add(head);
        // bandage strips
        const wrapMat = new THREE.MeshBasicMaterial({ color: 0xf5f0e0 });
        for (let i = 0; i < 5; i++) {
            const wrap = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.14, 0.85), wrapMat);
            wrap.position.y = -0.5 + i * 0.35;
            wrap.rotation.y = (i * 0.3);
            group.add(wrap);
        }
        const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff4400 }));
        eyeL.position.set(-0.2, 1.2, 0.55);
        group.add(eyeL);
        const eyeR = eyeL.clone();
        eyeR.position.set(0.2, 1.2, 0.55);
        group.add(eyeR);
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.5, 8), mat);
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        group.add(tail);
        return group;
    }

    private createDetectiveCat(group: THREE.Group): THREE.Group {
        // follow the paper trail. it's all connected. THEY don't want u to see it.
        this.createNormalCat(group);
        const coatMat = new THREE.MeshStandardMaterial({ color: 0x5c4033 });
        const coat = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.8, 0.35), coatMat);
        coat.position.set(0, 0.0, 0.5);
        group.add(coat);
        const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.1, 10), coatMat);
        brim.position.y = 1.55;
        group.add(brim);
        const hatTop = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.55, 0.5, 10), coatMat);
        hatTop.position.y = 1.85;
        group.add(hatTop);
        const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.6, 6), new THREE.MeshStandardMaterial({ color: 0x8B4513 }));
        glass.rotation.z = Math.PI / 2;
        glass.position.set(0.0, 0.65, 0.52);
        group.add(glass);
        return group;
    }

    private createFirefighterCat(group: THREE.Group): THREE.Group {
        // FIREFIGHTER CAT!! Now with 100% more heroism!! Act NOW!!
        this.createNormalCat(group);
        const coatMat = new THREE.MeshStandardMaterial({ color: 0xcc2200 });
        const coat = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.7, 0.3), coatMat);
        coat.position.set(0, 0.05, 0.55);
        group.add(coat);
        const helm = new THREE.Mesh(new THREE.SphereGeometry(0.7, 12, 12), new THREE.MeshStandardMaterial({ color: 0xff6600, metalness: 0.5 }));
        helm.position.y = 1.2;
        helm.scale.y = 0.75;
        group.add(helm);
        const helmBrim = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.1, 12), new THREE.MeshStandardMaterial({ color: 0xff6600 }));
        helmBrim.position.y = 0.95;
        group.add(helmBrim);
        // hose
        const hose = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.1, 6), new THREE.MeshStandardMaterial({ color: 0x444444 }));
        hose.position.set(-0.85, 0.6, 0.3);
        hose.rotation.z = -0.5;
        hose.rotation.x = 0.4;
        group.add(hose);
        return group;
    }

    private createBikerCat(group: THREE.Group): THREE.Group {
        // this cat doesn't care what you think. ngl kinda scared to say otherwise.
        const mat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.6 });
        const body = new THREE.Mesh(new THREE.BoxGeometry(1.15, 1.6, 0.9), mat);
        body.castShadow = true;
        group.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.62, 14, 14), mat);
        head.position.y = 1.1;
        group.add(head);
        const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.72, 12, 12), new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.7 }));
        helmet.position.y = 1.18;
        helmet.scale.y = 0.75;
        group.add(helmet);
        const visor = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.16, 0.06), new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0.6 }));
        visor.position.set(0, 1.22, 0.72);
        group.add(visor);
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.4, 6), new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9 }));
        spike.position.set(0.7, 0.3, -0.2);
        spike.rotation.z = Math.PI / 2;
        group.add(spike);
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.5, 8), mat);
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        group.add(tail);
        return group;
    }

    private createPrincessCat(group: THREE.Group): THREE.Group {
        // do NOT let the pink fool you. she has killed more than you think. much more.
        const mat = new THREE.MeshStandardMaterial({ color: 0xff99cc });
        const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1.5, 0.8), mat);
        body.castShadow = true;
        group.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.62, 14, 14), mat);
        head.position.y = 1.05;
        group.add(head);
        const skirt = new THREE.Mesh(new THREE.ConeGeometry(1.0, 1.0, 10), new THREE.MeshStandardMaterial({ color: 0xff44aa }));
        skirt.position.y = -0.9;
        skirt.rotation.x = Math.PI;
        group.add(skirt);
        const tieraGeo = new THREE.TorusGeometry(0.4, 0.08, 6, 12);
        const tiera = new THREE.Mesh(tieraGeo, new THREE.MeshStandardMaterial({ color: 0xFFD700, metalness: 0.8 }));
        tiera.position.y = 1.72;
        tiera.rotation.x = Math.PI / 2;
        group.add(tiera);
        for (let i = 0; i < 5; i++) {
            const gem = new THREE.Mesh(new THREE.SphereGeometry(0.07, 5, 5), new THREE.MeshBasicMaterial({ color: [0xff0000, 0x00ffff, 0x0000ff, 0xff00ff, 0xffffff][i] }));
            gem.position.set(Math.cos(i / 5 * Math.PI * 2) * 0.4, 1.8, Math.sin(i / 5 * Math.PI * 2) * 0.4);
            group.add(gem);
        }
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.5, 8), mat);
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        group.add(tail);
        return group;
    }

    private createGhostCat(group: THREE.Group): THREE.Group {
        // ...it exists. I don't know why. I'm choosing not to ask.
        const mat = new THREE.MeshStandardMaterial({ color: 0xeeeeff, transparent: true, opacity: 0.55, roughness: 0.2 });
        const body = new THREE.Mesh(new THREE.SphereGeometry(0.7, 14, 14), mat);
        body.castShadow = false;
        group.add(body);
        const sheet = new THREE.Mesh(new THREE.ConeGeometry(0.85, 1.2, 8), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.4 }));
        sheet.position.y = -0.8;
        sheet.rotation.x = Math.PI;
        group.add(sheet);
        const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), new THREE.MeshBasicMaterial({ color: 0x111133 }));
        eyeL.position.set(-0.22, 0.1, 0.62);
        group.add(eyeL);
        const eyeR = eyeL.clone();
        eyeR.position.set(0.22, 0.1, 0.62);
        group.add(eyeR);
        const glow = new THREE.Mesh(new THREE.SphereGeometry(1.1, 12, 12), new THREE.MeshBasicMaterial({ color: 0x8888ff, transparent: true, opacity: 0.08, wireframe: false }));
        group.add(glow);
        return group;
    }

    private createLuchadorCat(group: THREE.Group): THREE.Group {
        // LUCHADOR CAT!! ENTERING THE RING!! THE CROWD GOES WILD!!
        this.createNormalCat(group);
        const maskMat = new THREE.MeshStandardMaterial({ color: 0x00cc44 });
        const mask = new THREE.Mesh(new THREE.SphereGeometry(0.65, 12, 12), maskMat);
        mask.position.y = 1.05;
        group.add(mask);
        // mask eye holes
        const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        eyeL.position.set(-0.22, 1.3, 0.58);
        group.add(eyeL);
        const eyeR = eyeL.clone();
        eyeR.position.set(0.22, 1.3, 0.58);
        group.add(eyeR);
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.8, 0.08), new THREE.MeshBasicMaterial({ color: 0xffcc00 }));
        stripe.position.set(0, 1.05, 0.64);
        group.add(stripe);
        const cape = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.5, 0.15), new THREE.MeshStandardMaterial({ color: 0xff6600 }));
        cape.position.set(0, 0.2, -0.52);
        group.add(cape);
        return group;
    }

    private createFairyCat(group: THREE.Group): THREE.Group {
        // small. glowing. deceptively dangerous. like a bug zapper but cute. ugh.
        const mat = new THREE.MeshStandardMaterial({ color: 0xff88ff });
        const body = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 12), mat);
        body.castShadow = true;
        group.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 12), mat);
        head.position.y = 0.8;
        group.add(head);
        for (const [xSign, rotZ] of [[-1, 0.7], [1, -0.7]] as [number, number][]) {
            const wingGeo = new THREE.ConeGeometry(0.5, 0.7, 4);
            const wing = new THREE.Mesh(wingGeo, new THREE.MeshStandardMaterial({ color: 0xddaaff, transparent: true, opacity: 0.65 }));
            wing.rotation.z = rotZ;
            wing.position.set(xSign * 0.65, 0.5, -0.1);
            group.add(wing);
        }
        const glow = new THREE.Mesh(new THREE.SphereGeometry(0.9, 10, 10), new THREE.MeshBasicMaterial({ color: 0xffaaff, transparent: true, opacity: 0.12 }));
        group.add(glow);
        const wand = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.8, 6), new THREE.MeshStandardMaterial({ color: 0xffdd44 }));
        wand.position.set(0.55, 0.5, 0.2);
        wand.rotation.z = 0.5;
        group.add(wand);
        const star = new THREE.Mesh(new THREE.SphereGeometry(0.14, 5, 5), new THREE.MeshBasicMaterial({ color: 0xffffaa }));
        star.position.set(0.9, 0.95, 0.2);
        group.add(star);
        return group;
    }

    private createCavemanCat(group: THREE.Group): THREE.Group {
        // primal. brutal. simple. three attributes of truly great engineering.
        const mat = new THREE.MeshStandardMaterial({ color: 0xa0785f, roughness: 0.95 });
        const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.6, 0.9), mat);
        body.castShadow = true;
        group.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.65, 12, 12), mat);
        head.position.y = 1.15;
        group.add(head);
        // unibrow
        const brow = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.12, 0.08), new THREE.MeshBasicMaterial({ color: 0x5c3a1e }));
        brow.position.set(0, 1.4, 0.6);
        group.add(brow);
        const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), new THREE.MeshBasicMaterial({ color: 0x111111 }));
        eyeL.position.set(-0.22, 1.25, 0.6);
        group.add(eyeL);
        const eyeR = eyeL.clone();
        eyeR.position.set(0.22, 1.25, 0.6);
        group.add(eyeR);
        const clubStick = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 1.3, 7), new THREE.MeshStandardMaterial({ color: 0x5c3a1e }));
        clubStick.position.set(0.9, 0.8, 0);
        clubStick.rotation.z = 0.5;
        group.add(clubStick);
        const clubHead = new THREE.Mesh(new THREE.SphereGeometry(0.32, 8, 8), new THREE.MeshStandardMaterial({ color: 0x5c3a1e }));
        clubHead.position.set(1.4, 1.3, 0);
        group.add(clubHead);
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.5, 8), mat);
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        group.add(tail);
        return group;
    }

    private createAlienCat(group: THREE.Group): THREE.Group {
        // this variable exists. its always worked. on every machine. think about THAT.
        const mat = new THREE.MeshStandardMaterial({ color: 0x44ff88, roughness: 0.4 });
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.95, 1.4, 0.75), mat);
        body.castShadow = true;
        group.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.75, 14, 14), mat);
        head.position.y = 1.15;
        head.scale.set(1, 1.2, 0.85); // elongated alien head
        group.add(head);
        const bigEyeL = new THREE.Mesh(new THREE.EllipseCurve ? new THREE.SphereGeometry(0.22, 10, 10) : new THREE.SphereGeometry(0.22, 10, 10), new THREE.MeshBasicMaterial({ color: 0x111111 }));
        bigEyeL.scale.set(0.7, 1.4, 0.5);
        bigEyeL.position.set(-0.28, 1.25, 0.62);
        group.add(bigEyeL);
        const bigEyeR = bigEyeL.clone();
        bigEyeR.position.set(0.28, 1.25, 0.62);
        group.add(bigEyeR);
        for (const xSign of [-1, 1]) {
            const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.65, 5), new THREE.MeshStandardMaterial({ color: 0x22cc66 }));
            antenna.position.set(xSign * 0.4, 2.0, 0);
            antenna.rotation.z = xSign * 0.3;
            group.add(antenna);
            const antennaBall = new THREE.Mesh(new THREE.SphereGeometry(0.1, 7, 7), new THREE.MeshBasicMaterial({ color: 0x00ffaa }));
            antennaBall.position.set(xSign * 0.58, 2.4, 0);
            group.add(antennaBall);
        }
        const tail = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.5, 8), mat);
        tail.position.set(0, 0.3, -0.6);
        tail.rotation.z = 0.5;
        group.add(tail);
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
            case CatType.CHEF:
                this.dialogues = [
                    "This meow needs more seasoning.",
                    "WHAT IS THIS?? It's a raw purr!",
                    "Oui oui, the bisque is done.",
                    "MY treats are PERFECT. unlike u.",
                    "Michelin star cat. obviously.",
                    "STOP. Taste that. NOW.",
                    "You donkey. Wrong meow.",
                    "The sauce. It speaks to me."
                ];
                break;
            case CatType.ASTRONAUT:
                this.dialogues = [
                    "Meow. Over.",
                    "Houston we have a purr.",
                    "Floating... still meowing...",
                    "Zero gravity treats taste better.",
                    "The void... I've been there.",
                    "One small meow for cat...",
                    "Orbital nap commencing.",
                    "Cat detected. Proceeding normally."
                ];
                break;
            case CatType.COWBOY:
                this.dialogues = [
                    "Yeehaw, pardner.",
                    "Draw.",
                    "This town ain't big enough for two cats.",
                    "Ride into the sunset, meow.",
                    "Git along lil doggy. I said DOGGY.",
                    "These spurs were made fer walkin'.",
                    "Wanted: dead or purring.",
                    "High noon. I'm ready."
                ];
                break;
            case CatType.NINJA:
                this.dialogues = [
                    "...",
                    "You never saw me.",
                    "The shadow does not speak.",
                    "I was never here.",
                    "...",
                    "Death is quiet. So am I.",
                    "You won't hear me coming.",
                    "You already missed."
                ];
                break;
            case CatType.SAMURAI:
                this.dialogues = [
                    "Bushido is the way of the cat.",
                    "My blade has no dishonor.",
                    "A cat dies twice. Once in life. Once in memory.",
                    "I do not fear death. I fear a bad meow.",
                    "Seven virtues. I have eight.",
                    "The sword is already drawn.",
                    "My honor is my armor.",
                    "Fall seven times. Meow eight."
                ];
                break;
            case CatType.CLOWN:
                this.dialogues = [
                    "HONK HONK",
                    "Why so purr-ious??",
                    "I live in your walls.",
                    "The balloon says: MEOW",
                    "HONK",
                    "We all float meow.",
                    "This is FINE. Everything is fine.",
                    "HA HA HA HA HA HA -"
                ];
                break;
            case CatType.ZOMBIE:
                this.dialogues = [
                    "Braaaains... and treeeats...",
                    "Uuughhhhh",
                    "Hmmmgh... meowww...",
                    "I was alive once. briefly.",
                    "Hunger... endless hunger...",
                    "Mrrrnghhh.",
                    "Send... help... or don't...",
                    "Still technically a cat."
                ];
                break;
            case CatType.PHARAOH:
                this.dialogues = [
                    "I am eternal. You are not.",
                    "Bring me my scepter and my tuna.",
                    "The gods bow to me. You should too.",
                    "All of this was mine. Still is.",
                    "My curse is already active.",
                    "The pyramid holds my meow.",
                    "Ra blesses our hunting.",
                    "I ruled for 3000 years. I am not done."
                ];
                break;
            case CatType.KNIGHT:
                this.dialogues = [
                    "HENCEFORTH. I shall nap here.",
                    "Forsooth, this is mine territory.",
                    "Verily this treat is subpar.",
                    "FOR CAMELOT.",
                    "I have sworn an oath to this cardboard box.",
                    "None shall pass. (the food bowl)",
                    "Thou art not worthy of my purr.",
                    "My quest continues. The treat is missing."
                ];
                break;
            case CatType.SCIENTIST:
                this.dialogues = [
                    "EUREKA. It is a cat. It was always a cat.",
                    "The formula checks out. I am perfect.",
                    "This experiment requires MORE tuna.",
                    "Control group: also hungry.",
                    "The hypothesis: snacks. The data: yes.",
                    "I have discovered a new meow frequency.",
                    "Peer-reviewed purring.",
                    "Results were significant. p < 0.0001."
                ];
                break;
            case CatType.MUMMY:
                this.dialogues = [
                    "I have slept 3000 years. I am still tired.",
                    "My curse: eternal packaging.",
                    "The wrappings are... fine.",
                    "Do not unwrap me.",
                    "Ancient meow detected.",
                    "My tomb is this hallway.",
                    "I have seen empires fall. And also naps.",
                    "Cursed. But cozy."
                ];
                break;
            case CatType.DETECTIVE:
                this.dialogues = [
                    "I've been watching you. Don't ask when.",
                    "The evidence points to: you.",
                    "Everyone is a suspect. Including me.",
                    "Follow the tuna trail.",
                    "This crime scene smells like fish.",
                    "The answer was obvious. You missed it.",
                    "I have a file on every cat here.",
                    "Case closed. You did it."
                ];
                break;
            case CatType.FIREFIGHTER:
                this.dialogues = [
                    "CODE RED. TREAT SHORTAGE.",
                    "The fire is under control. I am not.",
                    "Leave the building. Take the snacks.",
                    "I've been to every fire. All my fault.",
                    "Hose at 100%. Confidence at 40%.",
                    "Ladder cats deployed.",
                    "Structure lost. Cat saved. Worth it.",
                    "The alarm was not a drill."
                ];
                break;
            case CatType.BIKER:
                this.dialogues = [
                    "...",
                    "Don't talk to me.",
                    "The road is mine.",
                    "I don't explain myself.",
                    "...",
                    "Rev.",
                    "I've seen things. On the road.",
                    "No."
                ];
                break;
            case CatType.PRINCESS:
                this.dialogues = [
                    "Bow.",
                    "I said BOW.",
                    "The tiara is not optional.",
                    "My last knight lasted 0.4 seconds.",
                    "Cute and devastating. Both.",
                    "I have ended kingdoms for less.",
                    "Off with their treats.",
                    "I am in a good mood. Fear that."
                ];
                break;
            case CatType.GHOST:
                this.dialogues = [
                    "...",
                    "I am still here.",
                    "I never left.",
                    "Can you see me? ...",
                    "I used to have a body.",
                    "The cold isn't from the AC.",
                    "...",
                    "Boo."
                ];
                break;
            case CatType.LUCHADOR:
                this.dialogues = [
                    "EL GATO HAS ARRIVED.",
                    "YOUR DEFEAT IS MY WARMUP.",
                    "THE MASK NEVER COMES OFF.",
                    "LUCHA LIBRE. LUCHA FOREVER.",
                    "I WILL SLAM YOU INTO THE MAT OF LIFE.",
                    "MY FINISHING MOVE: THE MEOW DRIVER.",
                    "THE ARENA IS EVERYWHERE.",
                    "NOBODY ESCAPES EL GATO."
                ];
                break;
            case CatType.FAIRY:
                this.dialogues = [
                    "I grant one wish. It is: more cats.",
                    "Sparkle sparkle meow.",
                    "I am small. I am powerful. I am both.",
                    "Your wildest dreams have arrived.",
                    "The enchanted forest is my litter box.",
                    "Wings are just extra cat ears.",
                    "Magic is real. I am proof.",
                    "I cast: max cuteness. It crits."
                ];
                break;
            case CatType.CAVEMAN:
                this.dialogues = [
                    "먹다.",
                    "Club good.",
                    "Fire: yes.",
                    "You: not me.",
                    "Meow. Hunt. Sleep. Repeat.",
                    "Mammoth: defeated by cat.",
                    "Cave warm. Cat warm. Good.",
                    "NAME: CAT. JOB: HUNTING."
                ];
                break;
            case CatType.ALIEN:
                this.dialogues = [
                    "Your concept of 'meow' is... primitive.",
                    "Abduction? We call it sightseeing.",
                    "Your planet has suspicious amounts of cats.",
                    "I have studied your species. You... struggle.",
                    "The probe was just curiosity.",
                    "We have 9 suns. Each is named Meow.",
                    "You are not alone. You were never alone.",
                    "Take me to your feeder."
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
