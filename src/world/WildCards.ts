import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

// WildCards.ts -- the chaos engine. none of this was asked for. all of it was necessary.
// T=meteors  B=black hole  K=nuke  Q=purge  V=gravity flip  X=size scramble  L=lightning  U=giant mode
// random earthquakes happen on their own because the world is unstable. like everything else.

interface MeteorObj {
    mesh: THREE.Mesh;
    speed: number;
    size: number;
}

interface BlackHoleData {
    mesh: THREE.Mesh;
    ringMesh: THREE.Mesh;
    position: THREE.Vector3;
    pullRadius: number;
    killRadius: number;
    timer: number;
}

export class WildCards {
    private scene: THREE.Scene;

    // meteor storm -- T key. rain of fire. beautiful destruction.
    private meteors: MeteorObj[] = [];
    private meteorSpawnTimer: number = 0;
    private meteorStormTimer: number = 0;

    // black hole -- B key. gravity is a suggestion.
    private blackHole: BlackHoleData | null = null;

    // giant mode -- U key. u r enormous now. congrats.
    private giantModeTimer: number = 0;
    private playerScaleBackup: THREE.Vector3 = new THREE.Vector3(1, 1, 1);

    // nuke -- K key. kaboom. no survivors. ur welcome.
    private nukeOnCooldown: boolean = false;

    // purge mode -- Q key. npcs fight each other. totally legal.
    private purgeModeTimer: number = 0;
    private purgeTickTimer: number = 0;

    // gravity flip -- V key. everything goes up. then comes back down.
    private gravityFlipActive: boolean = false;
    private gravityFlipTimer: number = 0;

    // random earthquakes -- nobody pressed anything. the world is just angry.
    private earthquakeTimer: number = 100 + Math.random() * 120;

    // freeze ray -- C key. everything stops. peaceful. terrifying.
    private frozenNPCTimers: Map<BaseNPC, number> = new Map();
    private freezeIceChunks: THREE.Mesh[] = [];

    // tornado -- J key. spinning vortex that yeets npcs into the stratosphere.
    private tornado: { mesh: THREE.Group; pos: THREE.Vector3; timer: number; angle: number } | null = null;

    // clone flood -- I key. spawns 15 clones of random npc types. the world is overpopulated now.
    public onSpawnNPC: ((type: string | null, pos: THREE.Vector3) => void) | null = null;

    // disco mode -- O key. 20 seconds of complete audiovisual betrayal.
    private discoModeTimer: number = 0;
    private discoLights: THREE.PointLight[] = [];
    private discoHueAngle: number = 0;

    // time bomb -- Y key. plant it, run, 5 seconds, boom.
    private timeBombs: { mesh: THREE.Mesh; pos: THREE.Vector3; timer: number; warningLight: THREE.PointLight }[] = [];

    // shrink ray -- D key. shrinks every npc to 0.15x. adorable+pathetic. 30s duration.
    private shrinkRayTimer: number = 0;

    // mind control -- M key. nearest NPC becomes ur servant. 15s. it attacks others. chaos.
    private mindControlNPC: BaseNPC | null = null;
    private mindControlTimer: number = 0;
    private mindControlOriginalMat: Map<THREE.Mesh, THREE.Color> = new Map();

    // boss spawn -- [ key. one giant 5x NPC appears. it is angry. good luck.
    private bossLight: THREE.PointLight | null = null;

    // wormhole -- ] key. teleport player to random location. screen goes white. dramatic.
    private wormholeCooldown: number = 0;

    // fog of war -- - key. thick scene fog for 30s. visibility goes to zero. panic.
    private fogTimer: number = 0;

    // inverted controls -- = key. setConfused on player for 15s.
    private invertTimer: number = 0;

    // screen flip -- \ key. the entire canvas rotates 180deg for 10s.
    private screenFlipTimer: number = 0;
    private screenFlipped: boolean = false;

    // matrix rain -- 0 key. green numbers rain down as DOM elements for 8s.
    private matrixRainActive: boolean = false;
    private matrixRainContainer: HTMLDivElement | null = null;
    private matrixRainCleanup: (() => void) | null = null;

    // rapid time -- 9 key. day/night cycle goes x20 for 20 seconds. the sky blurs.
    private rapidTimeTimer: number = 0;

    // callbacks wired from main.ts -- keep it loosely coupled bc we're civilized
    public onChat: ((msg: string) => void) | null = null;
    public onShake: ((heavy: boolean) => void) | null = null;
    public onFlash: ((filter: string, ms: number) => void) | null = null;
    public getNPCs: (() => BaseNPC[]) | null = null;
    public getPlayerPos: (() => THREE.Vector3) | null = null;
    public onDeathParticles: ((pos: THREE.Vector3) => void) | null = null;
    public onSetFog: ((enabled: boolean) => void) | null = null;
    public onSetConfused: ((confused: boolean) => void) | null = null;
    public onSetDayNightSpeed: ((mult: number) => void) | null = null;
    public onTeleportPlayer: ((x: number, z: number) => void) | null = null;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
    }

    // ============================================================
    // METEOR STORM -- T KEY
    // fire and death from above. 12 seconds. non-negotiable.
    // ============================================================
    public triggerMeteorStorm(): void {
        if (this.meteorStormTimer > 0) {
            this.onChat?.('☄️ meteors are ALREADY falling!! u want more?? they might not stop this time');
            return;
        }
        this.meteorStormTimer = 12;
        this.meteorSpawnTimer = 0;
        this.onChat?.('☄️ METEOR STORM INCOMING!! the sky is angry!! 12 seconds of getting absolutely pelted!!');
        this.doFlash('brightness(2.5) sepia(0.6)', 250);
    }

    private spawnMeteor(): void {
        const pPos = this.getPlayerPos?.() ?? new THREE.Vector3();
        const angle = Math.random() * Math.PI * 2;
        const dist = 8 + Math.random() * 38;
        const x = pPos.x + Math.cos(angle) * dist;
        const z = pPos.z + Math.sin(angle) * dist;
        const size = 0.6 + Math.random() * 2.0;

        // the rock itself -- glowing angry lump hurtling down
        const geo = new THREE.SphereGeometry(size, 8, 6);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xff3300,
            emissive: 0xff1100,
            emissiveIntensity: 2.0,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, 55 + Math.random() * 30, z);
        mesh.castShadow = true;
        this.scene.add(mesh);

        // glow light trailing behind it -- optional but makes it look devastating
        const glow = new THREE.PointLight(0xff4400, 3, 12);
        glow.position.copy(mesh.position);
        mesh.add(glow); // attached to mesh so it follows

        this.meteors.push({ mesh, speed: 30 + Math.random() * 25, size });
    }

    private impactMeteor(m: MeteorObj): void {
        const blastR = m.size * 5;
        const impactPos = m.mesh.position.clone();
        impactPos.y = 0;

        // KILL EVERYTHING in blast radius -- no mercy, no survivors, this is space rock
        const npcs = this.getNPCs?.() ?? [];
        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            const d = npc.getPosition().distanceTo(impactPos);
            if (d < blastR) {
                npc.takeDamage(9999);
                this.onDeathParticles?.(npc.getPosition());
            }
        }

        // player proximity effects -- shake + flash if nearby
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        const pd = pp.distanceTo(impactPos);
        if (pd < blastR * 2) {
            this.onShake?.(true);
            if (pd < blastR) this.doFlash('brightness(5) saturate(0)', 200);
        } else if (pd < 45) {
            this.onShake?.(false);
        }

        // crater -- dark burn mark left on the ground. permanent record of disaster.
        const craterGeo = new THREE.CylinderGeometry(blastR * 0.9, blastR, 0.07, 16);
        const craterMat = new THREE.MeshStandardMaterial({ color: 0x0a0a00, roughness: 1.0 });
        const crater = new THREE.Mesh(craterGeo, craterMat);
        crater.position.set(impactPos.x, 0.04, impactPos.z);
        crater.receiveShadow = true;
        this.scene.add(crater);
        // auto-remove crater after 45s -- the land heals. slowly.
        setTimeout(() => { this.scene.remove(crater); craterGeo.dispose(); craterMat.dispose(); }, 45000);

        // impact flash light -- brief explosion light
        const impactLight = new THREE.PointLight(0xff6600, 15, blastR * 4);
        impactLight.position.copy(impactPos);
        impactLight.position.y = 1;
        this.scene.add(impactLight);
        setTimeout(() => { this.scene.remove(impactLight); }, 250);

        // remove meteor mesh -- it is no more
        this.scene.remove(m.mesh);
        m.mesh.geometry.dispose();
        (m.mesh.material as THREE.Material).dispose();
    }

    // ============================================================
    // BLACK HOLE -- B KEY
    // spawns near player. pulls everything in. kisses them to death.
    // ============================================================
    public spawnBlackHole(): void {
        if (this.blackHole) {
            // increase pull radius if already active -- double black hole = chaos²
            this.blackHole.pullRadius = Math.min(this.blackHole.pullRadius + 10, 50);
            this.blackHole.timer = Math.max(this.blackHole.timer, 8);
            this.onChat?.('🕳️ doubled down on the black hole. it is now ANGRIER. ur welcome.');
            return;
        }

        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        // put it slightly in front of player so u can see it
        const pos = new THREE.Vector3(pp.x + 8, 2, pp.z);

        // event horizon sphere -- pure black
        const geo = new THREE.SphereGeometry(1.8, 20, 20);
        const mat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.copy(pos);
        this.scene.add(mesh);

        // accretion disk ring -- the purple glowing halo of doom
        const ringGeo = new THREE.TorusGeometry(3.2, 0.35, 10, 28);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x8800ff });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.copy(pos);
        ring.rotation.x = Math.PI / 2;
        this.scene.add(ring);

        // glow light from the hole itself -- slightly purple ambient
        const blackHoleLight = new THREE.PointLight(0x550099, 4, 20);
        blackHoleLight.position.copy(pos);
        this.scene.add(blackHoleLight);
        mesh.userData['light'] = blackHoleLight;

        this.blackHole = {
            mesh,
            ringMesh: ring,
            position: pos,
            pullRadius: 30,
            killRadius: 3,
            timer: 10,
        };

        this.onChat?.('🕳️ BLACK HOLE SPAWNED!! 10 seconds of event horizon physics!! everything nearby is doomed!!');
        this.doFlash('brightness(0.15) saturate(0)', 180);
    }

    private cleanupBlackHole(): void {
        if (!this.blackHole) return;
        // remove associated light
        const light = this.blackHole.mesh.userData['light'] as THREE.PointLight | undefined;
        if (light) this.scene.remove(light);
        // cleanup ring
        this.scene.remove(this.blackHole.ringMesh);
        this.blackHole.ringMesh.geometry.dispose();
        (this.blackHole.ringMesh.material as THREE.Material).dispose();
        // cleanup sphere
        this.scene.remove(this.blackHole.mesh);
        this.blackHole.mesh.geometry.dispose();
        (this.blackHole.mesh.material as THREE.Material).dispose();
        this.blackHole = null;
    }

    // ============================================================
    // GIANT MODE -- U KEY
    // player grows to 3.5x size. one-shots everything. lasts 15s.
    // because sometimes u just want to be enormous and untouchable.
    // ============================================================
    public activateGiantMode(playerMesh: THREE.Object3D | null): void {
        if (this.giantModeTimer > 0) {
            this.onChat?.('🦶 UR ALREADY A GIANT!! enjoy it!! it ends eventually!! everything does!!');
            return;
        }
        if (!playerMesh) return;
        this.giantModeTimer = 15;
        this.playerScaleBackup.copy(playerMesh.scale);
        playerMesh.scale.set(3.5, 3.5, 3.5);
        this.onChat?.('🦶 GIANT MODE!! 15 seconds of being the biggest thing in this world!! step on them!!');
        this.doFlash('brightness(2) saturate(3)', 350);
    }

    private endGiantMode(playerMesh: THREE.Object3D | null): void {
        if (!playerMesh) return;
        playerMesh.scale.copy(this.playerScaleBackup);
        this.onChat?.('🦶 giant mode ended. you have been downsized. capitalism and also physics.');
    }

    public isGiantModeActive(): boolean { return this.giantModeTimer > 0; }

    // ============================================================
    // NUKE -- K KEY
    // vaporizes every NPC within 70 units. 90s cooldown. devastating.
    // the nuclear option. for when u just need to start fresh.
    // ============================================================
    public triggerNuke(): void {
        if (this.nukeOnCooldown) {
            this.onChat?.('☢ nuke is still charging!! 90 second cooldown!! u cant just nuke everything twice in a row!!');
            return;
        }

        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        const npcs = this.getNPCs?.() ?? [];
        let killed = 0;

        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            const d = npc.getPosition().distanceTo(pp);
            if (d < 70) {
                npc.takeDamage(999999);
                this.onDeathParticles?.(npc.getPosition());
                killed++;
            }
        }

        // THE NUCLEAR FLASH SEQUENCE -- 4 stages of white-out, sepia warmth, then nothing
        document.body.style.filter = 'brightness(25) saturate(0)';
        setTimeout(() => { document.body.style.filter = 'brightness(8) saturate(0)'; }, 100);
        setTimeout(() => { document.body.style.filter = 'brightness(4) sepia(1)'; }, 350);
        setTimeout(() => { document.body.style.filter = 'brightness(1.8) sepia(0.3)'; }, 900);
        setTimeout(() => { document.body.style.filter = ''; }, 2200);

        this.onShake?.(true);
        setTimeout(() => this.onShake?.(true), 400);
        setTimeout(() => this.onShake?.(true), 800);
        setTimeout(() => this.onShake?.(false), 1200);

        this.onChat?.(`💣 N U K E D !! ${killed} NPCs evaporated within 70 units!! mushroom cloud is imminent!!`);
        this.onChat?.('☢ fallout probably fine. probably. u live here now. in the crater.');

        // mushroom cloud -- big smoke ball that fades over 5s
        const smokeGeo = new THREE.SphereGeometry(8, 10, 10);
        const smokeMat = new THREE.MeshPhongMaterial({
            color: 0x888877,
            transparent: true,
            opacity: 0.7,
        });
        const smoke = new THREE.Mesh(smokeGeo, smokeMat);
        smoke.position.set(pp.x, 12, pp.z);
        this.scene.add(smoke);
        // stem of the mushroom cloud
        const stemGeo = new THREE.CylinderGeometry(1.5, 3, 14, 10);
        const stemMat = new THREE.MeshPhongMaterial({ color: 0x777766, transparent: true, opacity: 0.6 });
        const stem = new THREE.Mesh(stemGeo, stemMat);
        stem.position.set(pp.x, 5, pp.z);
        this.scene.add(stem);
        // fade and remove after 5s
        const fadeOut = (t: number) => {
            smokeMat.opacity = Math.max(0, 0.7 * (1 - t / 5));
            stemMat.opacity = Math.max(0, 0.6 * (1 - t / 5));
            smoke.position.y += 0.05;
            smoke.scale.setScalar(1 + t * 0.1);
            if (t < 5) setTimeout(() => fadeOut(t + 0.1), 100);
            else {
                this.scene.remove(smoke); smokeGeo.dispose(); smokeMat.dispose();
                this.scene.remove(stem); stemGeo.dispose(); stemMat.dispose();
            }
        };
        setTimeout(() => fadeOut(0), 500);

        // 90s cooldown because nuclear weapons should have cooldowns
        this.nukeOnCooldown = true;
        setTimeout(() => {
            this.nukeOnCooldown = false;
            this.onChat?.('☢ nuke recharged!! the arsenal is ready!! please use responsibly!! (u wont)');
        }, 90000);
    }

    // ============================================================
    // THE PURGE -- Q KEY
    // for 15 seconds every NPC attacks the nearest OTHER NPC.
    // player is exempt. this is an organized event.
    // ============================================================
    public startPurge(): void {
        if (this.purgeModeTimer > 0) {
            this.onChat?.('🚨 THE PURGE IS ALREADY HAPPENING!! there is no unpurge!! wait for it to end!!');
            return;
        }
        this.purgeModeTimer = 15;
        this.purgeTickTimer = 0;

        // dramatic red filter
        document.body.style.filter = 'sepia(0.8) saturate(4) hue-rotate(330deg)';
        setTimeout(() => { document.body.style.filter = ''; }, 1000);

        this.onChat?.('🚨 THE PURGE HAS BEGUN!! ALL CRIME IS LEGAL!!');
        this.onChat?.('🚨 npcs will attack each other for 15 seconds!! the player is safe!! probably!!');
    }

    public isPurgeModeActive(): boolean { return this.purgeModeTimer > 0; }

    // ============================================================
    // GRAVITY FLIP -- V KEY
    // launches every NPC 12-30 units into the air. they fall.
    // objects in motion stay in motion. objects in the air fall on cats.
    // ============================================================
    public activateGravityFlip(): void {
        if (this.gravityFlipActive) {
            this.onChat?.('🔄 gravity is ALREADY broken!! you did this!!');
            return;
        }

        this.gravityFlipActive = true;
        this.gravityFlipTimer = 3; // 3s before announcing gravity return

        const npcs = this.getNPCs?.() ?? [];
        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            const p = npc.getPosition().clone();
            p.y += 12 + Math.random() * 22;
            npc.setPosition(p);
        }

        this.onChat?.('🔄 GRAVITY FLIP!! every NPC just went up!! they will come back down!! probably on each other!!');
        this.doFlash('invert(0.25) brightness(1.8)', 400);
    }

    // ============================================================
    // SIZE SCRAMBLE -- X KEY
    // randomizes the scale of every living NPC between 0.1x and 5x.
    // some are enormous. some are barely visible. all are angry.
    // ============================================================
    public scrambleSizes(): void {
        const npcs = this.getNPCs?.() ?? [];
        let count = 0;
        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            const s = 0.1 + Math.random() * 5.0;
            (npc.getMesh() as THREE.Object3D).scale.set(s, s, s);
            count++;
        }
        this.onChat?.(`🎲 SIZE SCRAMBLE!! ${count} NPCs are now random sizes!! chaos!! disorder!! beautiful disaster!!`);
        this.doFlash('hue-rotate(180deg) saturate(8)', 350);
    }

    // ============================================================
    // LIGHTNING RAIN -- L KEY
    // 15 lightning bolts, one every 0.4-0.9s, each hits a random NPC.
    // visual: tall cyan lines from sky + brief point light flash.
    // ============================================================
    public triggerLightningRain(): void {
        const npcs = this.getNPCs?.() ?? [];
        const alive = npcs.filter(n => n.isAlive());
        if (alive.length === 0) {
            this.onChat?.('⚡ no NPCs to lightning. the sky had nothing to aim at. almost sad.');
            return;
        }

        this.onChat?.('⚡ LIGHTNING RAIN!! 15 bolts!! divine punishment from a very tired sky!!');
        let boltsRemaining = 15;

        const fireOne = () => {
            if (boltsRemaining-- <= 0) {
                this.onChat?.('⚡ lightning finished. the clouds are taking a break. good job clouds.');
                return;
            }

            const liveNow = (this.getNPCs?.() ?? []).filter(n => n.isAlive());
            if (liveNow.length === 0) return;

            const target = liveNow[Math.floor(Math.random() * liveNow.length)];
            target.takeDamage(65);

            // bolt goes from sky (y=80) down to target position -- skinny line of doom
            const targetPos = target.getPosition().clone();
            const skyPos = targetPos.clone(); skyPos.y = 80;
            const lGeo = new THREE.BufferGeometry().setFromPoints([skyPos, targetPos]);
            const lMat = new THREE.LineBasicMaterial({ color: 0xaaddff, linewidth: 2 });
            const bolt = new THREE.Line(lGeo, lMat);
            this.scene.add(bolt);
            setTimeout(() => { this.scene.remove(bolt); lGeo.dispose(); lMat.dispose(); }, 180);

            // brief impact light flash -- bright cyan at point of impact
            const impactLight = new THREE.PointLight(0x88aaff, 12, 18);
            impactLight.position.copy(targetPos);
            impactLight.position.y += 1;
            this.scene.add(impactLight);
            setTimeout(() => { this.scene.remove(impactLight); }, 160);

            if (!target.isAlive()) this.onDeathParticles?.(targetPos);

            this.onShake?.(false);
            setTimeout(fireOne, 380 + Math.random() * 520);
        };

        fireOne();
    }

    // ============================================================
    // RANDOM EARTHQUAKE -- nobody pressed anything. ground is angry.
    // ============================================================
    private triggerEarthquake(): void {
        this.onChat?.('🌋 EARTHQUAKE!! the tectonic plates have chosen violence!! hold on to something!!');
        // 4 waves of shaking -- more dramatic than one shake
        this.onShake?.(true);
        setTimeout(() => this.onShake?.(false), 400);
        setTimeout(() => this.onShake?.(true), 750);
        setTimeout(() => this.onShake?.(false), 1200);
        setTimeout(() => this.onShake?.(true), 1600);
        setTimeout(() => this.onShake?.(false), 2100);
        setTimeout(() => this.onShake?.(true), 2400);
        setTimeout(() => {
            this.onShake?.(false);
            this.onChat?.('🌋 earthquake subsided. the ground is done being dramatic. for now.');
        }, 2900);
        this.doFlash('brightness(1.4) sepia(0.3)', 120);
    }

    // ============================================================
    // UPDATE -- called every frame from main.ts. everything ticks here.
    // ============================================================
    public update(dt: number, playerMesh: THREE.Object3D | null): void {

        // ---- METEOR STORM TICK ----
        if (this.meteorStormTimer > 0) {
            this.meteorStormTimer -= dt;
            this.meteorSpawnTimer -= dt;
            if (this.meteorSpawnTimer <= 0) {
                this.spawnMeteor();
                this.meteorSpawnTimer = 0.3 + Math.random() * 0.7;
            }
            if (this.meteorStormTimer <= 0) {
                this.onChat?.('☄️ meteor storm over. the craters are staying. sorry.');
            }
        }

        // ---- METEOR MOVEMENT ----
        for (let i = this.meteors.length - 1; i >= 0; i--) {
            const m = this.meteors[i];
            m.mesh.position.y -= m.speed * dt;
            m.mesh.rotation.x += 3.5 * dt;
            m.mesh.rotation.z += 2.2 * dt;
            if (m.mesh.position.y <= 0.4) {
                this.impactMeteor(m);
                this.meteors.splice(i, 1);
            }
        }

        // ---- BLACK HOLE TICK ----
        if (this.blackHole) {
            this.blackHole.timer -= dt;

            // spin the accretion disk
            this.blackHole.ringMesh.rotation.z += 2.5 * dt;
            this.blackHole.ringMesh.rotation.x += 0.5 * dt;

            // pulse the event horizon sphere
            const pulse = 1 + Math.sin(Date.now() * 0.004) * 0.12;
            this.blackHole.mesh.scale.setScalar(pulse);

            // PULL EVERYTHING IN
            const npcs = this.getNPCs?.() ?? [];
            for (const npc of npcs) {
                if (!npc.isAlive()) continue;
                const toHole = this.blackHole.position.clone().sub(npc.getPosition());
                const d = toHole.length();
                if (d < this.blackHole.killRadius) {
                    // spaghettification. not a word. now it is.
                    npc.takeDamage(9999);
                    this.onDeathParticles?.(npc.getPosition());
                } else if (d < this.blackHole.pullRadius) {
                    // pull strength increases as distance decreases -- feels like real gravity
                    const strength = Math.pow(1 - d / this.blackHole.pullRadius, 1.5) * 12;
                    const newPos = npc.getPosition().clone().add(
                        toHole.normalize().multiplyScalar(strength * dt)
                    );
                    newPos.y = Math.max(0, newPos.y);
                    npc.setPosition(newPos);
                }
            }

            // black hole dies
            if (this.blackHole.timer <= 0) {
                this.cleanupBlackHole();
                this.onChat?.('🕳️ black hole evaporated. hawking radiation waved goodbye. u survived. barely.');
                this.doFlash('brightness(0.1)', 100);
            }
        }

        // ---- GIANT MODE TICK ----
        if (this.giantModeTimer > 0) {
            this.giantModeTimer -= dt;
            if (this.giantModeTimer <= 0) {
                this.endGiantMode(playerMesh);
            }
        }

        // ---- PURGE MODE TICK ----
        if (this.purgeModeTimer > 0) {
            this.purgeModeTimer -= dt;
            this.purgeTickTimer -= dt;

            // every half second, every NPC deals 8 DMG to nearest NPC -- violence enforced by timer
            if (this.purgeTickTimer <= 0) {
                this.purgeTickTimer = 0.5;
                const npcs = this.getNPCs?.() ?? [];
                for (const attacker of npcs) {
                    if (!attacker.isAlive()) continue;
                    let nearest: BaseNPC | null = null;
                    let nearestD = 12; // only attack within melee-ish range
                    for (const victim of npcs) {
                        if (victim === attacker || !victim.isAlive()) continue;
                        const d = attacker.getPosition().distanceTo(victim.getPosition());
                        if (d < nearestD) { nearest = victim; nearestD = d; }
                    }
                    if (nearest) {
                        nearest.takeDamage(8);
                        if (!nearest.isAlive()) this.onDeathParticles?.(nearest.getPosition());
                    }
                }
            }

            if (this.purgeModeTimer <= 0) {
                this.onChat?.('🚨 THE PURGE IS OVER. cease hostilities. resume normal operations (still chaos).');
                document.body.style.filter = '';
            }
        }

        // ---- GRAVITY FLIP DECAY ----
        if (this.gravityFlipActive && this.gravityFlipTimer > 0) {
            this.gravityFlipTimer -= dt;
            if (this.gravityFlipTimer <= 0) {
                this.gravityFlipActive = false;
                this.onChat?.('🌍 gravity restored. what went up has come back down. mostly on NPCs. as intended.');
            }
        }

        // ---- RANDOM EARTHQUAKE ----
        this.earthquakeTimer -= dt;
        if (this.earthquakeTimer <= 0) {
            this.earthquakeTimer = 90 + Math.random() * 150; // next quake in 1.5-4 minutes
            this.triggerEarthquake();
        }

        // ---- NEW CHAOS SYSTEMS TICK ----
        this._updateTornado(dt);
        this._updateDiscoMode(dt);
        this._updateTimeBombs(dt);
        this._updateShrinkRay(dt);
        this._updateMindControl(dt);
        if (this.wormholeCooldown > 0) this.wormholeCooldown -= dt;
        this._updateFog(dt);
        this._updateInvertControls(dt);
        this._updateScreenFlip(dt);
        this._updateRapidTime(dt);
    }

    // ============================================================
    // FREEZE RAY -- C KEY
    // encases all nearby NPCs in ice for 8 seconds.
    // they literally cannot move. it's peaceful. for you.
    // ============================================================
    public triggerFreezeRay(): void {
        const npcs = this.getNPCs?.() ?? [];
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        let frozen = 0;

        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            const d = npc.getPosition().distanceTo(pp);
            if (d > 50) continue;

            // stun via the npc's own stun system
            npc.stun(8);
            this.frozenNPCTimers.set(npc, 8);
            frozen++;

            // ice chunk visual -- pale blue semi-transparent sphere around the npc
            const iceGeo = new THREE.IcosahedronGeometry(1.2, 1);
            const iceMat = new THREE.MeshPhongMaterial({
                color: 0x88ccff,
                transparent: true,
                opacity: 0.45,
                shininess: 140,
            });
            const ice = new THREE.Mesh(iceGeo, iceMat);
            ice.position.copy(npc.getPosition());
            ice.position.y += 1;
            ice.scale.set(1.2, 1.8, 1.2);
            this.scene.add(ice);
            this.freezeIceChunks.push(ice);

            // remove the ice mesh when freeze wears off
            setTimeout(() => {
                this.scene.remove(ice);
                ice.geometry.dispose();
                (ice.material as THREE.Material).dispose();
                const idx = this.freezeIceChunks.indexOf(ice);
                if (idx >= 0) this.freezeIceChunks.splice(idx, 1);
            }, 8000);
        }

        if (frozen === 0) {
            this.onChat?.('❄️ nobody in range. the freeze ray misses into the void. embarrassing.');
        } else {
            this.onChat?.(`❄️ FREEZE RAY!! ${frozen} NPCs flash-frozen!! they look so peaceful!! 8s!!`);
            this.doFlash('brightness(2) saturate(0) hue-rotate(190deg)', 300);
            this.onShake?.(false);
        }
    }

    // ============================================================
    // TORNADO -- J KEY
    // a GIANT spinning vortex spawns. npcs near it get yeeted radially.
    // lasts 8 seconds. moves slowly. you cannot stop it.
    // ============================================================
    public spawnTornado(): void {
        if (this.tornado) {
            this.onChat?.('🌪️ theres ALREADY a tornado!! two would destroy everything!! (adding 4s anyway)');
            this.tornado.timer += 4;
            return;
        }

        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        const startPos = new THREE.Vector3(pp.x + 15, 0, pp.z);

        const g = new THREE.Group();

        // tornado body -- stack of increasingly-wide tori going up
        const segmentColors = [0x999988, 0xaaaaaa, 0xbbbbcc, 0xccccdd];
        for (let i = 0; i < 8; i++) {
            const radius = 1.5 + i * 1.1;
            const y = i * 2.8;
            const torusGeo = new THREE.TorusGeometry(radius, 0.38, 8, 16);
            const torusMat = new THREE.MeshPhongMaterial({
                color: segmentColors[i % segmentColors.length],
                transparent: true,
                opacity: 0.55 - i * 0.03,
            });
            const torus = new THREE.Mesh(torusGeo, torusMat);
            torus.position.y = y;
            torus.rotation.x = Math.PI / 2;
            g.add(torus);
        }

        g.position.copy(startPos);
        this.scene.add(g);

        // suction wind sound effect -- just chat spam since no audio system
        this.tornado = { mesh: g, pos: startPos, timer: 8, angle: 0 };
        this.onChat?.('🌪️ TORNADO!! the spinning column of doom has arrived!! get out of the way!! too late!!');
        this.doFlash('brightness(1.3) saturate(0.4)', 200);
    }

    private _updateTornado(dt: number): void {
        if (!this.tornado) return;

        this.tornado.timer -= dt;
        this.tornado.angle += dt;

        // tornado drifts forward AND rotates
        this.tornado.pos.x += Math.cos(this.tornado.angle * 0.3) * 4 * dt;
        this.tornado.pos.z += Math.sin(this.tornado.angle * 0.5) * 3 * dt;
        this.tornado.mesh.position.copy(this.tornado.pos);
        this.tornado.mesh.rotation.y += 4 * dt; // spin the whole group

        // inner rings spin faster creating the funnel effect
        this.tornado.mesh.children.forEach((child, i) => {
            (child as THREE.Mesh).rotation.z += (2 + i * 0.5) * dt;
        });

        // throw NPCs radially outward AND upward when close
        const npcs = this.getNPCs?.() ?? [];
        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            const nPos = npc.getPosition();
            const dx = nPos.x - this.tornado.pos.x;
            const dz = nPos.z - this.tornado.pos.z;
            const d = Math.sqrt(dx * dx + dz * dz);
            if (d < 14) {
                const strength = (1 - d / 14) * 22;
                const newPos = nPos.clone();
                newPos.x += (dx / Math.max(d, 0.1)) * strength * dt;
                newPos.z += (dz / Math.max(d, 0.1)) * strength * dt;
                newPos.y += (1 - d / 14) * 18 * dt; // YEETED upward in the funnel
                npc.setPosition(newPos);
            }
        }

        if (this.tornado.timer <= 0) {
            this.scene.remove(this.tornado.mesh);
            this.tornado.mesh.children.forEach(c => {
                (c as THREE.Mesh).geometry.dispose();
                ((c as THREE.Mesh).material as THREE.Material).dispose();
            });
            this.tornado = null;
            this.onChat?.('🌪️ tornado dissipated. the NPCs that were in the air are now... elsewhere.');
        }
    }

    // ============================================================
    // CLONE FLOOD -- I KEY
    // spawns 20 random NPC clones everywhere near the player.
    // the world just got more crowded. on purpose.
    // ============================================================
    public triggerCloneFlood(): void {
        if (!this.onSpawnNPC) {
            this.onChat?.('🐱 clone flood not wired up. the clones are lost in the void. sorry clones.');
            return;
        }

        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        const types = ['normal', 'robot', 'angel', 'jesus', 'orb', 'shadow', 'pirate', 'wizard', 'vampire'];
        const count = 20;

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2 + Math.random() * 0.8;
            const dist = 8 + Math.random() * 28;
            const spawnPos = new THREE.Vector3(
                pp.x + Math.cos(angle) * dist,
                0,
                pp.z + Math.sin(angle) * dist
            );
            const type = types[Math.floor(Math.random() * types.length)];
            setTimeout(() => this.onSpawnNPC?.(type, spawnPos), i * 80);
        }

        this.onChat?.(`🐱 CLONE FLOOD!! 20 NPCs spawning in a spiral!! the population just doubled!! oh no!!`);
        this.doFlash('saturate(4) brightness(1.5)', 300);
    }

    // ============================================================
    // DISCO MODE -- O KEY
    // 20 seconds of seizure-inducing colored light spamming.
    // 6 point lights cycle through rainbow. hue rotates on the screen.
    // the world is a nightclub now. it was never not a nightclub.
    // ============================================================
    public activateDiscoMode(): void {
        if (this.discoModeTimer > 0) {
            this.onChat?.('🪩 DISCO IS ALREADY ACTIVE!! u cant double-disco!! the bounce doesnt go!!');
            this.discoModeTimer = Math.max(this.discoModeTimer, 20); // extend
            return;
        }

        this.discoModeTimer = 20;

        // spawn 6 rainbow point lights dancing around at head height
        const discoColors = [0xff0000, 0xff8800, 0xffff00, 0x00ff00, 0x0088ff, 0xff00ff];
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();

        for (let i = 0; i < 6; i++) {
            const light = new THREE.PointLight(discoColors[i], 5, 25);
            const angle = (i / 6) * Math.PI * 2;
            light.position.set(pp.x + Math.cos(angle) * 8, 5, pp.z + Math.sin(angle) * 8);
            this.scene.add(light);
            this.discoLights.push(light);
        }

        this.onChat?.('🪩 DISCO MODE ACTIVATED!! 20 seconds!! nobody is leaving this club!! NOBODY!!');
        this.onChat?.('🪩 the lights are on the ceiling. the ceiling is the sky. this is fine.');
    }

    private _updateDiscoMode(dt: number): void {
        if (this.discoModeTimer <= 0) return;
        this.discoModeTimer -= dt;

        this.discoHueAngle += dt * 140; // spin hue 140 deg/sec
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();

        // orbit the lights around the player in a spinning ring
        this.discoLights.forEach((light, i) => {
            const angle = ((i / 6) * Math.PI * 2) + (Date.now() * 0.002);
            light.position.set(
                pp.x + Math.cos(angle) * 9,
                4 + Math.sin(Date.now() * 0.003 + i) * 2,
                pp.z + Math.sin(angle) * 9
            );
            // cycle color
            const hue = ((i / 6) + Date.now() * 0.001) % 1;
            const col = new THREE.Color().setHSL(hue, 1, 0.5);
            light.color.set(col);
            light.intensity = 4 + Math.sin(Date.now() * 0.008 + i * 1.3) * 2;
        });

        // hue-rotate screen filter in sync
        document.body.style.filter = `hue-rotate(${this.discoHueAngle % 360}deg) saturate(2.2)`;

        // animate NPCs -- make them spin (rotate mesh) because they're dancing obviously
        const npcs = this.getNPCs?.() ?? [];
        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            (npc.getMesh() as THREE.Object3D).rotation.y += 2.5 * dt;
        }

        if (this.discoModeTimer <= 0) {
            this._endDiscoMode();
        }
    }

    private _endDiscoMode(): void {
        document.body.style.filter = '';
        for (const light of this.discoLights) {
            this.scene.remove(light);
        }
        this.discoLights.length = 0;
        this.onChat?.('🪩 disco mode over. the lights are dark. the NPCs stopped spinning. life is grey again.');
    }

    // ============================================================
    // TIME BOMB -- Y KEY
    // plants a bomb at player pos. 5 second countdown. 35 unit blast.
    // glows red. beeps (via chat spam). DO NOT STAND IN IT.
    // ============================================================
    public plantTimeBomb(): void {
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();

        // bomb mesh -- a menacing red sphere with a glowing cap
        const bombGeo = new THREE.SphereGeometry(0.5, 12, 10);
        const bombMat = new THREE.MeshPhongMaterial({ color: 0x222222, shininess: 40 });
        const bomb = new THREE.Mesh(bombGeo, bombMat);
        bomb.position.copy(pp);
        bomb.position.y = 0.5;
        this.scene.add(bomb);

        // warning light -- starts dim red, intensifies as countdown drops
        const warnLight = new THREE.PointLight(0xff2200, 2, 12);
        warnLight.position.copy(bomb.position);
        warnLight.position.y += 0.5;
        this.scene.add(warnLight);

        this.timeBombs.push({ mesh: bomb, pos: pp.clone(), timer: 5, warningLight: warnLight });

        this.onChat?.('💣 TIME BOMB PLANTED!! 5 seconds!! run!! or dont!! ur call!! (run)');
        setTimeout(() => { this.onChat?.('💣 4... the bomb is thinking about it'); }, 1000);
        setTimeout(() => { this.onChat?.('💣 3... it has committed'); }, 2000);
        setTimeout(() => { this.onChat?.('💣 2... please leave'); }, 3000);
        setTimeout(() => { this.onChat?.('💣 1... GOODBYE'); }, 4000);
    }

    private _updateTimeBombs(dt: number): void {
        for (let i = this.timeBombs.length - 1; i >= 0; i--) {
            const bomb = this.timeBombs[i];
            bomb.timer -= dt;

            // intensify warning light as timer drops -- more panic = more glow
            const t = Math.max(bomb.timer, 0);
            bomb.warningLight.intensity = 2 + (1 - t / 5) * 14;
            bomb.warningLight.color.setHSL((1 - t / 5) * 0.05, 1, 0.5); // green to pure red
            bomb.mesh.rotation.y += 2 * dt;

            if (bomb.timer <= 0) {
                // BOOM -- 35 unit AoE, kills all NPCs in range
                const blastRadius = 35;
                const npcs = this.getNPCs?.() ?? [];
                let bodyCount = 0;
                for (const npc of npcs) {
                    if (!npc.isAlive()) continue;
                    if (npc.getPosition().distanceTo(bomb.pos) < blastRadius) {
                        npc.takeDamage(99999);
                        this.onDeathParticles?.(npc.getPosition());
                        bodyCount++;
                    }
                }

                // full nuclear-level screen effect
                document.body.style.filter = 'brightness(20) saturate(0)';
                setTimeout(() => { document.body.style.filter = 'brightness(5) sepia(0.5)'; }, 80);
                setTimeout(() => { document.body.style.filter = ''; }, 600);

                this.onShake?.(true);
                this.onChat?.(`💥 BOOM!! ${bodyCount} NPCs obliterated!! the crater is real!! the trauma is real!!`);

                // blast light flash
                const blastLight = new THREE.PointLight(0xff8800, 25, blastRadius * 2);
                blastLight.position.copy(bomb.pos);
                blastLight.position.y = 3;
                this.scene.add(blastLight);
                setTimeout(() => this.scene.remove(blastLight), 300);

                // cleanup bomb
                this.scene.remove(bomb.warningLight);
                this.scene.remove(bomb.mesh);
                bomb.mesh.geometry.dispose();
                (bomb.mesh.material as THREE.Material).dispose();
                this.timeBombs.splice(i, 1);
            }
        }
    }

    // ============================================================
    // SHRINK RAY -- D KEY
    // every NPC shrinks to 0.15x. adorable. pathetic. they're still hostile.
    // 30 seconds. then they snap back to whatever size scramble left them.
    // ============================================================
    public activateShrinkRay(): void {
        if (this.shrinkRayTimer > 0) {
            this.onChat?.('🔬 they\'re already tiny!! the shrink ray keeps winning!! 30 MORE SECONDS!!');
            this.shrinkRayTimer = Math.max(this.shrinkRayTimer, 30);
            return;
        }

        this.shrinkRayTimer = 30;
        const npcs = this.getNPCs?.() ?? [];
        let count = 0;
        for (const npc of npcs) {
            if (!npc.isAlive()) continue;
            (npc.getMesh() as THREE.Object3D).scale.set(0.15, 0.15, 0.15);
            count++;
        }

        this.onChat?.(`🔬 SHRINK RAY!! ${count} NPCs are now MICROSCOPIC!! they are still angry!! 30s!!`);
        this.doFlash('invert(0.6) hue-rotate(110deg) brightness(1.8)', 300);
    }

    private _updateShrinkRay(dt: number): void {
        if (this.shrinkRayTimer <= 0) return;
        this.shrinkRayTimer -= dt;

        if (this.shrinkRayTimer <= 0) {
            // restore everyone to normal 1x scale when it wears off
            const npcs = this.getNPCs?.() ?? [];
            for (const npc of npcs) {
                if (!npc.isAlive()) continue;
                (npc.getMesh() as THREE.Object3D).scale.set(1, 1, 1);
            }
            this.onChat?.('🔬 shrink ray wore off. everybody is back to normal. normal is relative. u know what i mean.');
        }
    }

    // ============================================================
    // MIND CONTROL -- M KEY
    // the nearest NPC becomes your slave. it attacks other npcs for 15s.
    // purple glow. extra scary. then it remembers what happened and is upset.
    // ============================================================
    public triggerMindControl(): void {
        if (this.mindControlTimer > 0) {
            this.onChat?.('🧠 mind already controlled!! wait for the current puppet to snap out of it. meow.');
            return;
        }
        const npcs = this.getNPCs?.() ?? [];
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        const alive = npcs.filter(n => n.isAlive());
        if (alive.length === 0) { this.onChat?.('🧠 no npcs to mind control. the void is quiet. this is fine.'); return; }

        // find the closest one to the player
        alive.sort((a, b) => a.getPosition().distanceTo(pp) - b.getPosition().distanceTo(pp));
        const victim = alive[0];
        this.mindControlNPC = victim;
        this.mindControlTimer = 15;

        // tint its mesh purple -- store originals so we can restore them
        this.mindControlOriginalMat.clear();
        (victim.getMesh() as THREE.Object3D).traverse(child => {
            const m = child as THREE.Mesh;
            if (!m.material) return;
            const mat = m.material as THREE.MeshPhongMaterial;
            if (!mat?.color) return;
            this.mindControlOriginalMat.set(m, mat.color.clone());
            mat.color.setHex(0xaa00ff);
            mat.emissive?.setHex(0x440066);
        });

        this.onChat?.('🧠 MIND CONTROL ACTIVE!! the nearest NPC is now ur puppet!! it will attack the others for 15 seconds!!');
        this.doFlash('hue-rotate(270deg) saturate(4) brightness(1.3)', 400);
    }

    private _updateMindControl(dt: number): void {
        if (this.mindControlTimer <= 0 || !this.mindControlNPC) return;
        this.mindControlTimer -= dt;

        const controlled = this.mindControlNPC;
        if (!controlled.isAlive()) {
            this.mindControlTimer = 0;
            this.mindControlNPC = null;
            this.onChat?.('🧠 ur puppet died mid-control. awkward. the connection is severed.');
            return;
        }

        // move toward nearest other NPC and deal damage on contact
        const npcs = this.getNPCs?.() ?? [];
        const others = npcs.filter(n => n !== controlled && n.isAlive());
        if (others.length > 0) {
            const myPos = controlled.getPosition();
            others.sort((a, b) => a.getPosition().distanceTo(myPos) - b.getPosition().distanceTo(myPos));
            const target = others[0];
            const toTarget = target.getPosition().sub(myPos).normalize();
            // nudge forward at 6 units/s
            controlled.setPosition(myPos.add(toTarget.multiplyScalar(6 * dt)));
            // damage target if close enough
            if (controlled.getPosition().distanceTo(target.getPosition()) < 2.5) {
                target.takeDamage(15 * dt);
            }
        }

        if (this.mindControlTimer <= 0) {
            // restore mesh colors
            (controlled.getMesh() as THREE.Object3D).traverse(child => {
                const m = child as THREE.Mesh;
                const saved = this.mindControlOriginalMat.get(m);
                if (saved && m.material) {
                    (m.material as THREE.MeshPhongMaterial).color.copy(saved);
                    (m.material as THREE.MeshPhongMaterial).emissive?.setHex(0x000000);
                }
            });
            this.mindControlOriginalMat.clear();
            this.mindControlNPC = null;
            this.onChat?.('🧠 mind control expired. the NPC remembers everything. it is... upset.');
        }
    }

    // ============================================================
    // BOSS SPAWN -- [ KEY
    // one giant 5x mega NPC with red glow and 10x health appears.
    // it is not happy. nobody is happy. good luck.
    // ============================================================
    public spawnBossNPC(): void {
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        const angle = Math.random() * Math.PI * 2;
        const spawnPos = new THREE.Vector3(pp.x + Math.cos(angle) * 25, 0, pp.z + Math.sin(angle) * 25);

        // spawn a normal NPC then immediately scale it 5x and tint it death-red
        this.onSpawnNPC?.(null, spawnPos);

        // after a tiny delay, find the latest NPC and beef it up
        setTimeout(() => {
            const npcs = this.getNPCs?.() ?? [];
            const alive = npcs.filter(n => n.isAlive());
            if (alive.length === 0) return;
            // the newest NPC is the last in the array
            const boss = alive[alive.length - 1];
            const mesh = boss.getMesh() as THREE.Object3D;
            mesh.scale.set(5, 5, 5);

            // tint it angry red
            mesh.traverse(child => {
                const m = child as THREE.Mesh;
                if (!m.material) return;
                const mat = m.material as THREE.MeshPhongMaterial;
                if (mat?.color) mat.color.setHex(0xcc1100);
                if (mat?.emissive) mat.emissive.setHex(0x550000);
            });

            // boss glow light -- dramatic red spotlight
            if (this.bossLight) this.scene.remove(this.bossLight);
            const bLight = new THREE.PointLight(0xff0000, 8, 35);
            bLight.position.copy(spawnPos).y += 5;
            this.scene.add(bLight);
            this.bossLight = bLight;

            // deal it massive hp by... giving it more hp (we just pump tanking via not dying to normal damage)
            // cant do this directly but it's visually massive -- 5x body means 5x hitbox feel
            this.onChat?.('💀 A MEGA BOSS HAS APPEARED!! it is 5x the size!! red!! angry!! good luck!! u will need it!!');
        }, 50);

        this.doFlash('brightness(3) saturate(5)', 500);
        this.onShake?.(true);
    }

    // ============================================================
    // WORMHOLE -- ] KEY
    // teleport the player to a random spot in the world.
    // screen flashes white. disorienting. the world is big and scary.
    // ============================================================
    public activateWormhole(): void {
        if (this.wormholeCooldown > 0) {
            this.onChat?.(`🌀 wormhole recharging!! ${Math.ceil(this.wormholeCooldown)}s remaining!! ur stuck here!! embrace it!!`);
            return;
        }
        this.wormholeCooldown = 20;

        const newX = (Math.random() - 0.5) * 340;
        const newZ = (Math.random() - 0.5) * 340;
        this.onTeleportPlayer?.(newX, newZ);
        this.onChat?.(`🌀 WORMHOLE!! u teleported to (${newX.toFixed(0)}, ${newZ.toFixed(0)})!! nothing is familiar!! this is ur life now!!`);
        this.doFlash('brightness(10) invert(0)', 250);
        setTimeout(() => this.doFlash('invert(1)', 150), 260);

        this.onShake?.(false);
    }

    // ============================================================
    // FOG OF WAR -- - KEY
    // thick scene fog for 30s. u can barely see anything. this is fine.
    // ============================================================
    public activateFogOfWar(): void {
        if (this.fogTimer > 0) {
            this.onChat?.('🌫️ FOG IS ALREADY SUFFOCATING US!! 30 MORE SECONDS!! u asked for more fog!! here is more fog!!');
            this.fogTimer = 30;
            return;
        }
        this.fogTimer = 30;
        this.onSetFog?.(true);
        this.onChat?.('🌫️ FOG OF WAR!! visibility is gone!! everything is grey!! good luck navigating!! u will fail!!');
        this.doFlash('blur(3px) brightness(0.6)', 400);
    }

    private _updateFog(dt: number): void {
        if (this.fogTimer <= 0) return;
        this.fogTimer -= dt;
        if (this.fogTimer <= 0) {
            this.onSetFog?.(false);
            this.onChat?.('🌫️ fog cleared. the world is visible again. it was always there. scary.');
        }
    }

    // ============================================================
    // INVERTED CONTROLS -- = KEY
    // ur movement controls are flipped for 15s. W is backward. A is right.
    // it is as bad as it sounds.
    // ============================================================
    public activateInvertedControls(): void {
        if (this.invertTimer > 0) {
            this.onChat?.('↩️ CONTROLS STILL INVERTED!! u have no idea where ur going!! 15 more seconds!!! haha!!');
            this.invertTimer = 15;
            return;
        }
        this.invertTimer = 15;
        this.onSetConfused?.(true);
        this.onChat?.('↩️ INVERTED CONTROLS!! W goes backward!! A goes right!! ur in hell!! for 15 seconds!! enjoy!!');
        this.doFlash('hue-rotate(180deg) invert(0.3)', 350);
    }

    private _updateInvertControls(dt: number): void {
        if (this.invertTimer <= 0) return;
        this.invertTimer -= dt;
        if (this.invertTimer <= 0) {
            this.onSetConfused?.(false);
            this.onChat?.('↩️ controls restored. u can go forward again. please.  meow.');
        }
    }

    // ============================================================
    // SCREEN FLIP -- \ KEY
    // the entire canvas rotates 180 degrees for 10 seconds.
    // u are now playing the game upside down. good luck.
    // ============================================================
    public activateScreenFlip(): void {
        if (this.screenFlipped) {
            // flip back early if already flipped
            this.screenFlipTimer = 0;
            this._restoreScreenFlip();
            this.onChat?.('🙃 screen unflipped. ur welcome. that was terrifying. meow.');
            return;
        }
        this.screenFlipTimer = 10;
        this.screenFlipped = true;
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.style.transition = 'transform 0.5s ease';
            canvas.style.transform = 'rotate(180deg)';
        }
        this.onChat?.('🙃 SCREEN FLIP!! ur playing upside down for 10 seconds!! good luck!! its ur fault!! u pressed the button!! meow!!');
    }

    private _restoreScreenFlip(): void {
        this.screenFlipped = false;
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.style.transition = 'transform 0.4s ease';
            canvas.style.transform = 'rotate(0deg)';
        }
    }

    private _updateScreenFlip(dt: number): void {
        if (!this.screenFlipped) return;
        this.screenFlipTimer -= dt;
        if (this.screenFlipTimer <= 0) {
            this._restoreScreenFlip();
            this.onChat?.('🙃 screen restored to normal orientation. the world is right-side up. it feels wrong now.');
        }
    }

    // ============================================================
    // MATRIX RAIN -- 0 KEY
    // green numbers rain down from the top of the screen as DOM elements.
    // 8 seconds of it. very cinematic. very unnecessary.
    // ============================================================
    public activateMatrixRain(): void {
        if (this.matrixRainActive) {
            this.onChat?.('💚 MATRIX RAIN ALREADY RAINING!! u cannot code faster than the speed of rain!!');
            return;
        }
        this.matrixRainActive = true;

        const container = document.createElement('div');
        container.style.cssText = `
            position:fixed; top:0; left:0; width:100vw; height:100vh;
            pointer-events:none; z-index:9999; overflow:hidden;
            font-family:monospace; font-size:16px; color:#00ff41; font-weight:bold;
        `;
        document.body.appendChild(container);
        this.matrixRainContainer = container;

        // spawn 30 columns of falling numbers/letters
        const cols: HTMLSpanElement[] = [];
        for (let i = 0; i < 30; i++) {
            const col = document.createElement('span');
            const x = Math.floor(Math.random() * 100);
            col.style.cssText = `position:absolute; left:${x}vw; top:-20px; white-space:pre; transition: none;`;
            col.textContent = Math.floor(Math.random() * 100).toString();
            container.appendChild(col);
            cols.push(col);
        }

        let tick = 0;
        const interval = setInterval(() => {
            tick++;
            for (const col of cols) {
                const y = parseInt(col.style.top) + 22;
                col.style.top = (y > window.innerHeight ? -20 : y) + 'px';
                col.textContent = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96)); // katakana range
                col.style.opacity = (0.5 + Math.random() * 0.5).toFixed(2);
            }
            if (tick > 120) clearInterval(interval); // 8s at ~15fps tick
        }, 67);

        this.matrixRainCleanup = () => {
            clearInterval(interval);
            if (container.parentNode) container.parentNode.removeChild(container);
            this.matrixRainContainer = null;
            this.matrixRainActive = false;
        };

        setTimeout(() => {
            this.matrixRainCleanup?.();
            this.onChat?.('💚 matrix rain ended. the simulation has been revealed. u are free. meow. (u are not free)');
        }, 8000);

        this.onChat?.('💚 MATRIX RAIN!! the numbers are FALLING!! green!! katakana!! u are in the MATRIX!! for 8 seconds!! nyaa~!!');
    }
    // ============================================================
    // RAPID TIME -- 9 KEY
    // the day/night cycle goes x20 speed for 20 seconds.
    // the sky flickers between day and night rapidly. ominous.
    // ============================================================
    public activateRapidTime(): void {
        this.rapidTimeTimer = 20;
        this.onSetDayNightSpeed?.(20);
        this.onChat?.('⏩ RAPID TIME!! the day/night cycle is running at 20x speed!! the sky is flickering!! time has lost meaning!!');
        this.doFlash('brightness(1.8) contrast(1.5)', 300);
    }

    private _updateRapidTime(dt: number): void {
        if (this.rapidTimeTimer <= 0) return;
        this.rapidTimeTimer -= dt;
        if (this.rapidTimeTimer <= 0) {
            this.onSetDayNightSpeed?.(1);
            this.onChat?.('⏩ time returns to normal speed. u are back in the present. the present is upsetting.');
        }
    }

    // 
    // small helper so we dont have to write the full document.body dance every time
    private doFlash(filter: string, ms: number): void {        if (this.onFlash) {
            this.onFlash(filter, ms);
        } else {
            document.body.style.filter = filter;
            setTimeout(() => { document.body.style.filter = ''; }, ms);
        }
    }

    // getter for HUD display
    public getNukeStatus(): string {
        if (this.nukeOnCooldown) return '☢ charging';
        return '☢ ready';
    }

    public getMeteorStormTimeLeft(): number { return this.meteorStormTimer; }
    public getBlackHoleTimeLeft(): number { return this.blackHole?.timer ?? 0; }
    public getPurgeTimeLeft(): number { return this.purgeModeTimer; }
    public getGiantTimeLeft(): number { return this.giantModeTimer; }
}
