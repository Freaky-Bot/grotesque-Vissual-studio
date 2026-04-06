import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

// big event systems. civil wars. boss cats. invasions. fish rain. the whole chaos catalog.
// this file is longer than it should be and shorter than it needs to be -- disappointed parent
// henceforth ALL events reside here, organized by type if not by temperament ⚔️

interface FishProjectile {
    mesh: THREE.Mesh;
    vel: THREE.Vector3;
    life: number;
}

interface LightningBolt {
    mesh: THREE.Mesh;
    lifetime: number;
    maxLife: number;
}

export class BigEventSystems {
    private scene: THREE.Scene;

    // civil war
    private civilWarActive = false;
    private civilWarTimer = 0;
    private readonly CIVIL_WAR_INTERVAL = 120; // every 2 minutes potentially

    // giant cat boss
    private giantCat: THREE.Group | null = null;
    private giantCatHp = 800;
    private giantCatMaxHp = 800;
    private giantCatAlive = false;
    private giantCatMoveTimer = 0;
    private readonly GIANT_CAT_INTERVAL = 180; // spawn boss every 3 min
    private giantCatSpawnTimer = 180;

    // void invasion
    private invasionActive = false;
    private invasionTimer = 0;
    private invasionWave = 0;
    private readonly INVASION_INTERVAL = 150;

    // fish rain
    private fishRainActive = false;
    private fishRainTimer = 0;
    private readonly FISH_RAIN_INTERVAL = 90;
    private fish: FishProjectile[] = [];

    // arena
    private arenaActive = false;
    private arenaTimer = 0;
    private arenaRound = 0;
    private arenaArch: THREE.Group | null = null;

    // plague
    private plagueActive = false;
    private plagueTimer = 0;
    private infectedNPCs: Set<string> = new Set(); // track by NPC type (sloppy but whatever)

    // stampede
    private stampedeActive = false;
    private stampedeDir = new THREE.Vector3(1, 0, 0);
    private stampedeTimer = 0;
    private readonly STAMPEDE_INTERVAL = 100;

    // turf wars
    private turfWarActive = false;
    private turfWarTimer = 0;
    private turfZones: { center: THREE.Vector3; owner: string; mesh: THREE.Mesh }[] = [];

    // NPC rebellion
    private rebellionActive = false;
    private rebellionTimer = 0;
    private readonly REBELLION_INTERVAL = 200;

    // lightning
    private lightningBolts: LightningBolt[] = [];
    private lightningTimer = 0;
    private readonly LIGHTNING_INTERVAL = 20; // lightning every 20s always

    // callbacks -- wired from main.ts so events can talk back
    public onCivilWarStart: ((factionA: string, factionB: string) => void) | null = null;
    public onGiantCatSpawn: ((pos: THREE.Vector3) => void) | null = null;
    public onGiantCatDeath: (() => void) | null = null;
    public onVoidInvasionStart: ((wave: number) => void) | null = null;
    public onFishRain: ((count: number) => void) | null = null;
    public onArenaStart: ((round: number) => void) | null = null;
    public onPlagueStart: (() => void) | null = null;
    public onStampedeStart: ((dir: THREE.Vector3) => void) | null = null;
    public onRebellionStart: (() => void) | null = null;
    public onLightningStrike: ((pos: THREE.Vector3) => void) | null = null;
    public onFishCollect: ((playerPos: THREE.Vector3) => void) | null = null;

    // npc list + player pos for events to interact with
    public npcs: BaseNPC[] = [];
    public playerPos: THREE.Vector3 | null = null;

    // chaos meter -- feeds into the global chaos level
    public chaosLevel = 0; // 0-100

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.buildTurfZones();
        this.buildArena();
        console.log('%c⚔️ BigEventSystems armed and EXTREMELY ready', 'color:#ff4400;font-weight:bold');
    }

    // =================== CAT CIVIL WAR ===================
    // two factions. they disagree. violently. everybody suffers.

    private startCivilWar(): void {
        if (this.civilWarActive) return;
        this.civilWarActive = true;
        this.civilWarTimer = 60; // war lasts 60 seconds
        this.chaosLevel = Math.min(100, this.chaosLevel + 25);
        const factions = ['Team Meow', 'Team Hiss', 'Team Purr', 'Team Yowl'];
        const fA = factions[Math.floor(Math.random() * factions.length)];
        let fB = factions[Math.floor(Math.random() * factions.length)];
        while (fB === fA) fB = factions[Math.floor(Math.random() * factions.length)];
        this.onCivilWarStart?.(fA, fB);
        // make npcs hostile to each other -- cheat: stun half of them first so there are real sides
        let flip = false;
        for (const npc of this.npcs) {
            if (flip) npc.markHostileToNpc();
            flip = !flip;
        }
        console.log(`%c⚔️ CIVIL WAR: ${fA} vs ${fB}`, 'color:#ff4400;font-weight:bold');
    }

    // =================== GIANT CAT BOSS ===================
    // a very big cat. has normal stats except enormous. stomps things.

    private spawnGiantCat(): void {
        if (this.giantCatAlive) return;
        const gc = new THREE.Group();
        // body -- very large box
        const body = new THREE.Mesh(new THREE.BoxGeometry(8, 10, 5), new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.8 }));
        gc.add(body);
        const head = new THREE.Mesh(new THREE.SphereGeometry(4.5, 14, 14), new THREE.MeshStandardMaterial({ color: 0xff7722, roughness: 0.8 }));
        head.position.y = 9; gc.add(head);
        // big ears
        const earMat = new THREE.MeshStandardMaterial({ color: 0xff5500, roughness: 0.8 });
        const earL = new THREE.Mesh(new THREE.ConeGeometry(1.8, 3.5, 6), earMat);
        earL.position.set(-3, 12.5, 0); gc.add(earL);
        const earR = earL.clone(); earR.position.set(3, 12.5, 0); gc.add(earR);
        // glowing BOSS eyes
        const eyeM = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const eL = new THREE.Mesh(new THREE.SphereGeometry(0.9, 8, 8), eyeM); eL.position.set(-1.5, 9.5, 4.4); gc.add(eL);
        const eR = eL.clone(); eR.position.set(1.5, 9.5, 4.4); gc.add(eR);
        // stomp indicator aura
        const stomp = new THREE.Mesh(new THREE.CylinderGeometry(15, 15, 0.1, 16), new THREE.MeshBasicMaterial({ color: 0xff2200, transparent: true, opacity: 0.3 }));
        stomp.position.y = 0.1; stomp.name = 'stomp_aura'; gc.add(stomp);
        // health bar above
        const hpBg = new THREE.Mesh(new THREE.BoxGeometry(12, 0.8, 0.2), new THREE.MeshBasicMaterial({ color: 0x330000 }));
        hpBg.position.set(0, 18, 0); gc.add(hpBg);
        const hpFill = new THREE.Mesh(new THREE.BoxGeometry(12, 0.8, 0.2), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        hpFill.position.set(0, 18, 0.1); hpFill.name = 'boss_hp_fill'; gc.add(hpFill);
        // spawn at world edge and walk in
        gc.position.set(180, 0, 180);
        this.scene.add(gc);
        this.giantCat = gc;
        this.giantCatHp = this.giantCatMaxHp;
        this.giantCatAlive = true;
        this.chaosLevel = Math.min(100, this.chaosLevel + 40);
        this.onGiantCatSpawn?.(gc.position.clone());
        console.log('%c🐱 GIANT CAT BOSS SPAWNED', 'color:#ff0000;font-size:16px;font-weight:bold');
    }

    public damageGiantCat(dmg: number): void {
        if (!this.giantCatAlive) return;
        this.giantCatHp -= dmg;
        // update hp bar
        const fill = this.giantCat?.getObjectByName('boss_hp_fill');
        if (fill) {
            const pct = Math.max(0, this.giantCatHp / this.giantCatMaxHp);
            fill.scale.x = pct;
            (fill as THREE.Mesh).position.x = -6 * (1 - pct);
        }
        if (this.giantCatHp <= 0) {
            this.scene.remove(this.giantCat!);
            this.giantCat = null;
            this.giantCatAlive = false;
            this.onGiantCatDeath?.();
            this.chaosLevel = Math.max(0, this.chaosLevel - 20);
            console.log('%c💀 GIANT CAT BOSS DEFEATED', 'color:#00ff00;font-size:16px;font-weight:bold');
        }
    }

    public isNearGiantCat(pos: THREE.Vector3): boolean {
        if (!this.giantCatAlive || !this.giantCat) return false;
        return pos.distanceTo(this.giantCat.position) < 20;
    }

    private updateGiantCat(dt: number): void {
        if (!this.giantCatAlive || !this.giantCat) return;
        this.giantCatMoveTimer += dt;
        // stomp toward player
        if (this.playerPos) {
            const dir = this.playerPos.clone().sub(this.giantCat.position).normalize();
            this.giantCat.position.add(dir.multiplyScalar(dt * 5));
            this.giantCat.rotation.y = Math.atan2(dir.x, dir.z);
        }
        // stomp aura pulse
        const aura = this.giantCat.getObjectByName('stomp_aura');
        if (aura) {
            (aura as THREE.Mesh).material && ((aura as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity;
            const pulsed = 0.2 + Math.sin(Date.now() * 0.005) * 0.1;
            const mat = (aura as THREE.Mesh).material as THREE.MeshBasicMaterial;
            if (mat) mat.opacity = pulsed;
        }
    }

    // =================== VOID INVASION ===================
    // void cats pour from portals. multiple waves. escalating nightmare.

    private startVoidInvasion(): void {
        if (this.invasionActive) return;
        this.invasionActive = true;
        this.invasionTimer = 45;
        this.invasionWave = 1;
        this.chaosLevel = Math.min(100, this.chaosLevel + 30);
        this.onVoidInvasionStart?.(this.invasionWave);
        // spawn invasion portals
        for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2;
            const px = Math.cos(angle) * 80;
            const pz = Math.sin(angle) * 80;
            const portal = new THREE.Mesh(
                new THREE.TorusGeometry(6, 1, 10, 20),
                new THREE.MeshBasicMaterial({ color: 0x440088, transparent: true, opacity: 0.9 })
            );
            portal.position.set(px, 6, pz);
            portal.name = 'invasion_portal';
            this.scene.add(portal);
        }
        console.log('%c🔮 VOID INVASION WAVE 1 BEGINS', 'color:#440088;font-weight:bold;font-size:14px');
    }

    // =================== FISH RAIN ===================
    // fish fall from the sky. npcs collect them. player gets speed boost. excellent.
    // TIRED OF A DRY SKY?? NOT ANYMORE!! -- infomercial dev

    private startFishRain(): void {
        this.fishRainActive = true;
        this.fishRainTimer = 20;
        const count = 20 + Math.floor(Math.random() * 20);
        this.onFishRain?.(count);
        for (let i = 0; i < count; i++) {
            const fish = new THREE.Mesh(
                new THREE.SphereGeometry(0.4, 6, 4),
                new THREE.MeshStandardMaterial({ color: 0x88ccff, metalness: 0.4 })
            );
            fish.position.set(
                (Math.random() - 0.5) * 200,
                50 + Math.random() * 30,
                (Math.random() - 0.5) * 200
            );
            fish.name = 'falling_fish';
            this.scene.add(fish);
            this.fish.push({ mesh: fish, vel: new THREE.Vector3(0, -12 - Math.random() * 5, 0), life: 10 });
        }
        console.log(`%c🐟 FISH RAIN!! ${count} fish incoming`, 'color:#88ccff;font-weight:bold');
    }

    private updateFishRain(dt: number): void {
        for (let i = this.fish.length - 1; i >= 0; i--) {
            const f = this.fish[i];
            f.life -= dt;
            f.mesh.position.add(f.vel.clone().multiplyScalar(dt));
            f.mesh.rotation.x += dt * 3;
            if (f.mesh.position.y <= 0.5 || f.life <= 0) {
                // fish landed -- tiny splash effect by jiggling ya know
                this.scene.remove(f.mesh);
                this.fish.splice(i, 1);
                continue;
            }
            // player collect check
            if (this.playerPos && this.playerPos.distanceTo(f.mesh.position) < 4) {
                this.onFishCollect?.(this.playerPos.clone());
                this.scene.remove(f.mesh);
                this.fish.splice(i, 1);
            }
        }
    }

    // =================== ARENA MODE ===================
    // npcs fight in rounds. the crowd (nobody) goes wild.

    private buildArena(): void {
        const arena = new THREE.Group();
        // circular wall
        for (let i = 0; i < 24; i++) {
            const angle = (i / 24) * Math.PI * 2;
            const pillar = new THREE.Mesh(
                new THREE.BoxGeometry(1.2, 8, 1.2),
                new THREE.MeshStandardMaterial({ color: 0xccbbaa, roughness: 0.9 })
            );
            pillar.position.set(Math.cos(angle) * 30, 4, Math.sin(angle) * 30);
            arena.add(pillar);
        }
        // sand floor
        const floor = new THREE.Mesh(
            new THREE.CylinderGeometry(28, 28, 0.2, 20),
            new THREE.MeshStandardMaterial({ color: 0xf4a460, roughness: 1.0 })
        );
        arena.add(floor);
        arena.position.set(-60, 0, 80); // arena district
        arena.name = 'arena';
        arena.visible = false; // hidden until arena event triggers
        this.scene.add(arena);
        this.arenaArch = arena;
    }

    private startArena(): void {
        if (this.arenaActive) return;
        this.arenaActive = true;
        this.arenaRound = 1;
        this.arenaTimer = 30;
        if (this.arenaArch) this.arenaArch.visible = true;
        this.onArenaStart?.(this.arenaRound);
        this.chaosLevel = Math.min(100, this.chaosLevel + 15);
        console.log('%c⚔️ ARENA ROUND 1 BEGINS', 'color:#f4a460;font-weight:bold');
    }

    // =================== PLAGUE ===================
    // spreads NPC to NPC. slow, creeping, inevitable. like most problems.

    private startPlague(): void {
        if (this.plagueActive) return;
        this.plagueActive = true;
        this.plagueTimer = 60;
        this.onPlagueStart?.();
        this.chaosLevel = Math.min(100, this.chaosLevel + 20);
        // infect a random npc
        if (this.npcs.length > 0) {
            const victim = this.npcs[Math.floor(Math.random() * this.npcs.length)];
            this.infectNPC(victim);
        }
        console.log('%c🦠 PLAGUE STARTED. pray for the cats.', 'color:#88ff00;font-weight:bold');
    }

    private infectNPC(npc: BaseNPC): void {
        // visual -- make them slightly green
        npc.getMesh().traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                const mat = child.material as THREE.MeshStandardMaterial;
                if (mat?.color) mat.color.setHex(0x558855);
            }
        });
        this.infectedNPCs.add(npc.getType() + '_' + npc.getPosition().x.toFixed(0));
        // does mild damage over time -- just shave some HP
        setInterval(() => {
            if (!this.plagueActive) return;
            npc.takeDamage(2);
        }, 2000);
        // spread to nearby npcs
        setTimeout(() => {
            for (const other of this.npcs) {
                if (other !== npc && other.getPosition().distanceTo(npc.getPosition()) < 10) {
                    this.infectNPC(other);
                }
            }
        }, 5000);
    }

    // =================== STAMPEDE ===================
    // 50 cats. one direction. full speed. nobody in the way survives it.

    private startStampede(): void {
        if (this.stampedeActive) return;
        this.stampedeActive = true;
        this.stampedeTimer = 15;
        const angle = Math.random() * Math.PI * 2;
        this.stampedeDir = new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
        this.onStampedeStart?.(this.stampedeDir.clone());
        this.chaosLevel = Math.min(100, this.chaosLevel + 10);
        // override all NPC velocities temporarily -- they all go one direction
        for (const npc of this.npcs) {
            (npc as any).targetAngle = Math.atan2(this.stampedeDir.x, this.stampedeDir.z);
        }
        console.log('%c🐾 STAMPEDE!! EVERY CAT GOING ONE DIRECTION', 'color:#ff8800;font-weight:bold;font-size:14px');
    }

    // =================== TURF WARS ===================
    // colored zones. factions claim them. fights happen at borders.

    private buildTurfZones(): void {
        const zones = [
            { x: 50, z: 50, color: 0xff4444, owner: 'meow' },
            { x: -50, z: 50, color: 0x4444ff, owner: 'hiss' },
            { x: 50, z: -50, color: 0x44ff44, owner: 'purr' },
            { x: -50, z: -50, color: 0xffff44, owner: 'yowl' },
        ];
        for (const z of zones) {
            const mesh = new THREE.Mesh(
                new THREE.CylinderGeometry(25, 25, 0.15, 16),
                new THREE.MeshBasicMaterial({ color: z.color, transparent: true, opacity: 0.2 })
            );
            mesh.position.set(z.x, 0.1, z.z);
            this.scene.add(mesh);
            this.turfZones.push({ center: new THREE.Vector3(z.x, 0, z.z), owner: z.owner, mesh });
        }
    }

    private startTurfWar(): void {
        if (this.turfWarActive) return;
        this.turfWarActive = true;
        this.turfWarTimer = 45;
        this.chaosLevel = Math.min(100, this.chaosLevel + 20);
        // pulse all zone colors bright
        for (const z of this.turfZones) {
            (z.mesh.material as THREE.MeshBasicMaterial).opacity = 0.5;
        }
        console.log('%c🗺️ TURF WAR!! territories contested', 'color:#ff8800;font-weight:bold');
    }

    // =================== NPC REBELLION ===================
    // the cats rise up against the cat god. it ends poorly for everyone.

    private startRebellion(): void {
        if (this.rebellionActive) return;
        this.rebellionActive = true;
        this.rebellionTimer = 90;
        this.onRebellionStart?.();
        this.chaosLevel = Math.min(100, this.chaosLevel + 35);
        // make ALL npcs extra hostile
        for (const npc of this.npcs) {
            npc.markHostileToPlayer();
        }
        console.log('%c😾 NPC REBELLION!! all cats are hostile. good luck.', 'color:#ff0000;font-weight:bold;font-size:14px');
    }

    // =================== LIGHTNING ===================
    // zaps random npcs. visually dramatic. they don't appreciate it.

    private strikeLightning(): void {
        const target = this.npcs.length > 0
            ? this.npcs[Math.floor(Math.random() * this.npcs.length)].getPosition()
            : new THREE.Vector3((Math.random() - 0.5) * 200, 0, (Math.random() - 0.5) * 200);

        const bolt = new THREE.Mesh(
            new THREE.CylinderGeometry(0.1, 0.1, 80, 4),
            new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        bolt.position.set(target.x, 40, target.z);
        this.scene.add(bolt);
        this.lightningBolts.push({ mesh: bolt, lifetime: 0, maxLife: 0.25 });

        // deal damage to nearby NPCs
        for (const npc of this.npcs) {
            if (npc.getPosition().distanceTo(target) < 8) {
                npc.takeDamage(35);
            }
        }

        this.onLightningStrike?.(target.clone());
        this.chaosLevel = Math.min(100, this.chaosLevel + 3);
        console.log('%c⚡ LIGHTNING STRIKE', 'color:#ffff00');
    }

    private updateLightning(dt: number): void {
        for (let i = this.lightningBolts.length - 1; i >= 0; i--) {
            const b = this.lightningBolts[i];
            b.lifetime += dt;
            const opacity = 1 - b.lifetime / b.maxLife;
            (b.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, opacity);
            (b.mesh.material as THREE.MeshBasicMaterial).transparent = true;
            if (b.lifetime >= b.maxLife) {
                this.scene.remove(b.mesh);
                this.lightningBolts.splice(i, 1);
            }
        }
    }

    // =================== MAIN UPDATE ===================

    public update(dt: number, npcs: BaseNPC[], playerPos?: THREE.Vector3): void {
        this.npcs = npcs;
        if (playerPos) this.playerPos = playerPos;

        // slowly decay chaos level
        if (this.chaosLevel > 0) this.chaosLevel -= dt * 0.5;

        // civil war
        if (!this.civilWarActive) {
            this.civilWarTimer += dt;
            if (this.civilWarTimer >= this.CIVIL_WAR_INTERVAL + Math.random() * 60) {
                this.civilWarTimer = 0;
                if (Math.random() < 0.4) this.startCivilWar();
            }
        } else {
            this.civilWarTimer -= dt;
            if (this.civilWarTimer <= 0) this.civilWarActive = false;
        }

        // giant cat boss
        this.giantCatSpawnTimer -= dt;
        if (this.giantCatSpawnTimer <= 0 && !this.giantCatAlive) {
            this.spawnGiantCat();
            this.giantCatSpawnTimer = this.GIANT_CAT_INTERVAL + Math.random() * 60;
        }
        this.updateGiantCat(dt);

        // void invasion
        if (!this.invasionActive) {
            const invTimer = this.INVASION_INTERVAL + Math.random() * 60;
            // start invasion randomly based on chaos
            if (Math.random() < dt * 0.002 * (1 + this.chaosLevel / 100)) this.startVoidInvasion();
        } else {
            this.invasionTimer -= dt;
            if (this.invasionTimer <= 0) {
                this.invasionWave++;
                if (this.invasionWave > 3) {
                    // invasion over -- clean up portals
                    this.scene.traverse(obj => { if (obj.name === 'invasion_portal') this.scene.remove(obj); });
                    this.invasionActive = false;
                } else {
                    this.invasionTimer = 30;
                    this.onVoidInvasionStart?.(this.invasionWave);
                }
            }
        }

        // fish rain
        if (!this.fishRainActive && Math.random() < dt * 0.003) this.startFishRain();
        if (this.fishRainActive) {
            this.fishRainTimer -= dt;
            if (this.fishRainTimer <= 0) this.fishRainActive = false;
        }
        this.updateFishRain(dt);

        // arena
        if (!this.arenaActive && Math.random() < dt * 0.002) this.startArena();
        if (this.arenaActive) {
            this.arenaTimer -= dt;
            if (this.arenaTimer <= 0) {
                this.arenaRound++;
                if (this.arenaRound > 5) {
                    this.arenaActive = false;
                    if (this.arenaArch) this.arenaArch.visible = false;
                } else {
                    this.arenaTimer = 25;
                    this.onArenaStart?.(this.arenaRound);
                }
            }
        }

        // plague
        if (!this.plagueActive && Math.random() < dt * 0.001) this.startPlague();
        if (this.plagueActive) {
            this.plagueTimer -= dt;
            if (this.plagueTimer <= 0) {
                this.plagueActive = false;
                this.infectedNPCs.clear();
            }
        }

        // stampede
        if (!this.stampedeActive) {
            this.stampedeTimer += dt;
            if (this.stampedeTimer >= this.STAMPEDE_INTERVAL && Math.random() < 0.3) {
                this.stampedeTimer = 0;
                this.startStampede();
            }
        } else {
            this.stampedeTimer -= dt;
            if (this.stampedeTimer <= 0) this.stampedeActive = false;
        }

        // turf war
        if (!this.turfWarActive && Math.random() < dt * 0.002) this.startTurfWar();
        if (this.turfWarActive) {
            this.turfWarTimer -= dt;
            if (this.turfWarTimer <= 0) {
                this.turfWarActive = false;
                for (const z of this.turfZones) {
                    (z.mesh.material as THREE.MeshBasicMaterial).opacity = 0.2; // back to chill
                }
            }
        }

        // rebellion
        if (!this.rebellionActive) {
            this.rebellionTimer += dt;
            if (this.rebellionTimer >= this.REBELLION_INTERVAL && this.chaosLevel > 50) {
                this.rebellionTimer = 0;
                this.startRebellion();
            }
        } else {
            this.rebellionTimer -= dt;
            if (this.rebellionTimer <= 0) this.rebellionActive = false;
        }

        // lightning
        this.lightningTimer -= dt;
        if (this.lightningTimer <= 0) {
            this.strikeLightning();
            this.lightningTimer = this.LIGHTNING_INTERVAL * (0.5 + Math.random());
        }
        this.updateLightning(dt);
    }

    // exposed getters so main.ts can react
    public isCivilWarActive(): boolean { return this.civilWarActive; }
    public isGiantCatAlive(): boolean { return this.giantCatAlive; }
    public isInvasionActive(): boolean { return this.invasionActive; }
    public isRebellionActive(): boolean { return this.rebellionActive; }
    public getChaosLevel(): number { return Math.min(100, Math.max(0, this.chaosLevel)); }
    public getActiveEvents(): string[] {
        const events: string[] = [];
        if (this.civilWarActive) events.push('Civil War');
        if (this.giantCatAlive) events.push('Giant Cat Boss');
        if (this.invasionActive) events.push(`Void Invasion Wave ${this.invasionWave}`);
        if (this.fishRainActive) events.push('Fish Rain');
        if (this.arenaActive) events.push(`Arena Round ${this.arenaRound}`);
        if (this.plagueActive) events.push('Plague');
        if (this.stampedeActive) events.push('Stampede');
        if (this.turfWarActive) events.push('Turf War');
        if (this.rebellionActive) events.push('REBELLION');
        return events;
    }
}
