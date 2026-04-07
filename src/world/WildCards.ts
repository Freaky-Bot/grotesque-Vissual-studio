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

    // callbacks wired from main.ts -- keep it loosely coupled bc we're civilized
    public onChat: ((msg: string) => void) | null = null;
    public onShake: ((heavy: boolean) => void) | null = null;
    public onFlash: ((filter: string, ms: number) => void) | null = null;
    public getNPCs: (() => BaseNPC[]) | null = null;
    public getPlayerPos: (() => THREE.Vector3) | null = null;
    public onDeathParticles: ((pos: THREE.Vector3) => void) | null = null;

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
    }

    // small helper so we dont have to write the full document.body dance every time
    private doFlash(filter: string, ms: number): void {
        if (this.onFlash) {
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
