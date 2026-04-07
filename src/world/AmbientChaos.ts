import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

// AmbientChaos.ts -- passive chaos. nobody pressed anything. the world is just like this.
// UFO abductions, raining cats, random portals, stalker shadows, cursed moon, floor is lava, etc.
// all of these happen automatically. forever. u cant turn them off. thats the deal.

// ============================================================
// UFO ABDUCTION -- every 45-90s a UFO appears, locks onto a random NPC,
// and beams it up with a tractor beam light. the NPC vanishes. this is fine.
// ============================================================

interface UFOData {
    group: THREE.Group;
    beamLight: THREE.PointLight | null;
    beamMesh: THREE.Mesh | null;
    target: BaseNPC | null;
    phase: 'arriving' | 'beaming' | 'leaving';
    timer: number;
    startY: number;
    targetX: number;
    targetZ: number;
}

// ============================================================
// RANDOM PORTALS -- every 30-60s a glowing ring portal appears.
// any NPC that walks through it gets teleported to a random spot.
// the portal disappears after 15s.
// ============================================================

interface PortalData {
    group: THREE.Group;
    position: THREE.Vector3;
    timer: number;
    spinAngle: number;
}

// ============================================================
// RAINING CATS -- every 60-90s, 10 NPC ghosts fall from the sky.
// these are just visual chunks -- not real NPCs. pure chaos visual.
// actually spawn real ones if callback is wired.
// ============================================================

export class AmbientChaos {
    private scene: THREE.Scene;

    // UFO vars
    private ufo: UFOData | null = null;
    private ufoTimer: number = 45 + Math.random() * 45;

    // portals
    private portals: PortalData[] = [];
    private portalTimer: number = 30 + Math.random() * 45;

    // raining cats
    private rainTimer: number = 60 + Math.random() * 60;
    private fallingCatMeshes: { mesh: THREE.Group; vy: number }[] = [];

    // stalker shadow -- follows the player silently at the edge of vision
    private stalkerMesh: THREE.Group | null = null;
    private stalkerPos: THREE.Vector3 = new THREE.Vector3();
    private stalkerVisible: boolean = false;
    private stalkerTimer: number = 20 + Math.random() * 30;
    private stalkerHideTimer: number = 0;

    // cursed moon -- at night, all npcs glow redder and deal more dmg (cosmetic + callback)
    private cursedMoonActive: boolean = false;
    private cursedMoonMesh: THREE.Mesh | null = null;

    // floor is lava -- every 80-120s, the floor flashes red and hurts npcs on the ground for 4s
    private floorLavaTimer: number = 80 + Math.random() * 60;
    private floorLavaPanelTimer: number = 0;
    private floorLavaPanel: THREE.Mesh | null = null;

    // callbacks from main.ts
    public getNPCs: (() => BaseNPC[]) | null = null;
    public getPlayerPos: (() => THREE.Vector3) | null = null;
    public onChat: ((msg: string) => void) | null = null;
    public onSpawnAt: ((pos: THREE.Vector3) => void) | null = null;
    public onDeathParticles: ((pos: THREE.Vector3) => void) | null = null;
    public isNight: (() => boolean) | null = null;

    // blood moon -- every 8-12 min. sky goes red, npcs glow evil, everything is worse.
    private bloodMoonTimer: number = 480 + Math.random() * 240;
    private bloodMoonActive: boolean = false;
    private bloodMoonDuration: number = 0;
    private bloodMoonSphere: THREE.Mesh | null = null;

    // ghost invasion -- every 90-120s. translucent ghost npcs appear and drift around.
    private ghostInvasionTimer: number = 90 + Math.random() * 60;
    private ghostMeshes: { mesh: THREE.Group; drift: THREE.Vector3; timer: number }[] = [];

    // npc civil war -- every 3-5 min. npcs are split into two factions. they fight each other.
    private civilWarTimer: number = 180 + Math.random() * 120;
    private civilWarActive: boolean = false;
    private civilWarDuration: number = 0;
    private factionA: BaseNPC[] = [];
    private factionB: BaseNPC[] = [];

    // npc empowerment -- every 2 min, 3 random npcs grow 1.5x and glow purple. they evolved.
    private empowerTimer: number = 120 + Math.random() * 60;

    // phantom fist -- every 60-90s, a giant ghost fist punches through the world.
    private phantomFistTimer: number = 60 + Math.random() * 45;
    private phantomFistMesh: THREE.Group | null = null;
    private phantomFistData: { pos: THREE.Vector3; dir: THREE.Vector3; phase: 'punch' | 'withdraw'; timer: number } | null = null;

    // speed demon -- every 90-120s, one random NPC becomes a red blur for 20s.
    private speedDemonTimer: number = 90 + Math.random() * 60;
    private speedDemonNPC: BaseNPC | null = null;
    private speedDemonDuration: number = 0;
    private speedDemonTrail: THREE.Mesh[] = [];

    // random weather bomb -- every 3-4 min, force a dramatic weather change via weather callback.
    private weatherBombTimer: number = 180 + Math.random() * 60;

    // callbacks from main.ts
    public onForceWeather: ((type: string) => void) | null = null;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this._buildStalker();
    }

    // ============================================================
    // INTERNAL: build all initial meshes
    // ============================================================

    private _buildUFO(): UFOData {
        const g = new THREE.Group();

        // saucer body -- classic UFO shape using flattened torus + dome
        const bodyGeo = new THREE.TorusGeometry(3.2, 0.8, 8, 24);
        const bodyMat = new THREE.MeshPhongMaterial({ color: 0xaaaacc, metalness: 0.8, shininess: 120 });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.rotation.x = Math.PI / 2;
        g.add(body);

        // dome on top
        const domeGeo = new THREE.SphereGeometry(1.8, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2);
        const domeMat = new THREE.MeshPhongMaterial({ color: 0x88aaff, transparent: true, opacity: 0.6, shininess: 180 });
        const dome = new THREE.Mesh(domeGeo, domeMat);
        dome.position.y = 0.4;
        g.add(dome);

        // spinning ring of lights around the rim
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const lightGeo = new THREE.SphereGeometry(0.22, 6, 6);
            const lightMat = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0xffff00 : 0x00ffff });
            const lightBulb = new THREE.Mesh(lightGeo, lightMat);
            lightBulb.position.set(Math.cos(angle) * 3.2, -0.3, Math.sin(angle) * 3.2);
            g.add(lightBulb);
        }

        // UFO glow
        const ufoLight = new THREE.PointLight(0x8888ff, 3, 20);
        ufoLight.position.y = -1;
        g.add(ufoLight);

        return {
            group: g,
            beamLight: null,
            beamMesh: null,
            target: null,
            phase: 'arriving',
            timer: 0,
            startY: 0,
            targetX: 0,
            targetZ: 0,
        };
    }

    private _spawnUFO(): void {
        const npcs = this.getNPCs?.() ?? [];
        const alive = npcs.filter(n => n.isAlive());
        if (alive.length === 0) return;

        const target = alive[Math.floor(Math.random() * alive.length)];
        const targetPos = target.getPosition();

        const ufoData = this._buildUFO();
        ufoData.target = target;
        ufoData.phase = 'arriving';
        ufoData.timer = 4; // 4s to arrive
        ufoData.targetX = targetPos.x;
        ufoData.targetZ = targetPos.z;
        ufoData.startY = 50 + Math.random() * 20;

        // start high up
        ufoData.group.position.set(targetPos.x + (Math.random() - 0.5) * 20, ufoData.startY, targetPos.z + (Math.random() - 0.5) * 20);
        this.scene.add(ufoData.group);
        this.ufo = ufoData;

        this.onChat?.('🛸 UFO detected!! it has selected one of the NPCs for study!! the chosen one is unaware!!');
    }

    private _buildStalker(): void {
        // a shadowy cat-shaped silhouette that watches from afar
        const g = new THREE.Group();
        const darkMat = new THREE.MeshBasicMaterial({ color: 0x0a0008, transparent: true, opacity: 0.55 });

        // body blob
        const bodyGeo = new THREE.SphereGeometry(0.65, 8, 8);
        const body = new THREE.Mesh(bodyGeo, darkMat);
        body.scale.set(1, 1.3, 0.6);
        body.position.y = 0.8;
        g.add(body);

        // head
        const headGeo = new THREE.SphereGeometry(0.45, 8, 8);
        const head = new THREE.Mesh(headGeo, darkMat);
        head.position.y = 1.85;
        g.add(head);

        // ears
        for (const s of [-1, 1]) {
            const earGeo = new THREE.ConeGeometry(0.18, 0.4, 4);
            const ear = new THREE.Mesh(earGeo, darkMat);
            ear.position.set(s * 0.28, 2.35, 0);
            g.add(ear);
        }

        // glowing eyes -- the only light in the darkness
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        for (const s of [-1, 1]) {
            const eyeGeo = new THREE.SphereGeometry(0.06, 6, 6);
            const eye = new THREE.Mesh(eyeGeo, eyeMat);
            eye.position.set(s * 0.15, 1.9, 0.38);
            g.add(eye);
        }

        g.visible = false; // starts invisible
        this.scene.add(g);
        this.stalkerMesh = g;
    }

    // ============================================================
    // UPDATE -- call every frame from main.ts
    // ============================================================

    public update(dt: number): void {
        this._updateUFO(dt);
        this._updatePortals(dt);
        this._updateRainTimer(dt);
        this._updateFallingCats(dt);
        this._updateStalker(dt);
        this._updateCursedMoon(dt);
        this._updateFloorLava(dt);
        this._updateBloodMoon(dt);
        this._updateGhostInvasion(dt);
        this._updateCivilWar(dt);
        this._updateNPCEmpowerment(dt);
        this._updatePhantomFist(dt);
    }

    // ---- UFO ----
    private _updateUFO(dt: number): void {
        this.ufoTimer -= dt;
        if (this.ufoTimer <= 0 && !this.ufo) {
            this.ufoTimer = 45 + Math.random() * 55;
            this._spawnUFO();
        }

        if (!this.ufo) return;
        const ufo = this.ufo;
        ufo.timer -= dt;

        if (ufo.phase === 'arriving') {
            // descend toward target -- lerp Y down to hover height
            const hoverY = 18;
            ufo.group.position.y += (hoverY - ufo.group.position.y) * (2 * dt);
            ufo.group.position.x += (ufo.targetX - ufo.group.position.x) * (1.5 * dt);
            ufo.group.position.z += (ufo.targetZ - ufo.group.position.z) * (1.5 * dt);
            ufo.group.rotation.y += 1.5 * dt;

            if (ufo.timer <= 0) {
                ufo.phase = 'beaming';
                ufo.timer = 3;
                this.onChat?.('🛸 THE TRACTOR BEAM IS ACTIVE!! THE NPC CANNOT ESCAPE!! SCIENCE!!');

                // create tractor beam -- tall cyan cone from ufo down to npc
                if (ufo.target) {
                    const beamGeo = new THREE.ConeGeometry(1.5, 18, 12, 1, true);
                    const beamMat = new THREE.MeshBasicMaterial({
                        color: 0x00ffcc,
                        transparent: true,
                        opacity: 0.28,
                        side: THREE.DoubleSide,
                    });
                    const beam = new THREE.Mesh(beamGeo, beamMat);
                    beam.position.set(ufo.targetX, 9, ufo.targetZ);
                    beam.rotation.y = 0;
                    this.scene.add(beam);
                    ufo.beamMesh = beam;

                    const bLight = new THREE.PointLight(0x00ffcc, 5, 25);
                    bLight.position.set(ufo.targetX, 2, ufo.targetZ);
                    this.scene.add(bLight);
                    ufo.beamLight = bLight;
                }
            }
        } else if (ufo.phase === 'beaming') {
            // pulse the beam
            if (ufo.beamMesh) {
                (ufo.beamMesh.material as THREE.MeshBasicMaterial).opacity = 0.2 + Math.sin(Date.now() * 0.008) * 0.15;
                ufo.beamMesh.rotation.y += 2 * dt;
            }
            ufo.group.rotation.y += 2 * dt;

            // slowly lift the npc
            if (ufo.target && ufo.target.isAlive()) {
                const p = ufo.target.getPosition();
                if (p.y < 16) {
                    ufo.target.setPosition(new THREE.Vector3(p.x, p.y + 4 * dt, p.z));
                }
            }

            if (ufo.timer <= 0) {
                // NPC abducted -- kill it (beamed to another planet)
                if (ufo.target && ufo.target.isAlive()) {
                    ufo.target.takeDamage(99999);
                    this.onChat?.('🛸 NPC HAS BEEN ABDUCTED!! THE ALIENS HAVE WHAT THEY CAME FOR!!');
                    this.onChat?.('🛸 scientists believe they will not be returned. scientists are correct.');
                }
                ufo.phase = 'leaving';
                ufo.timer = 3;

                // cleanup beam
                if (ufo.beamMesh) { this.scene.remove(ufo.beamMesh); ufo.beamMesh = null; }
                if (ufo.beamLight) { this.scene.remove(ufo.beamLight); ufo.beamLight = null; }
            }
        } else if (ufo.phase === 'leaving') {
            // fly away fast
            ufo.group.position.y += 25 * dt;
            ufo.group.rotation.y += 4 * dt;

            if (ufo.timer <= 0 || ufo.group.position.y > 100) {
                this.scene.remove(ufo.group);
                this.ufo = null;
            }
        }
    }

    // ---- PORTALS ----
    private _updatePortals(dt: number): void {
        this.portalTimer -= dt;
        if (this.portalTimer <= 0) {
            this.portalTimer = 30 + Math.random() * 50;
            this._spawnPortal();
        }

        for (let i = this.portals.length - 1; i >= 0; i--) {
            const p = this.portals[i];
            p.timer -= dt;
            p.spinAngle += 2.5 * dt;
            p.group.rotation.y = p.spinAngle;
            // pulse opacity
            const ring = p.group.children[0] as THREE.Mesh;
            if (ring?.material) {
                (ring.material as THREE.MeshBasicMaterial).opacity = 0.6 + Math.sin(Date.now() * 0.005) * 0.3;
            }

            // teleport any NPC that walks through
            const npcs = this.getNPCs?.() ?? [];
            for (const npc of npcs) {
                if (!npc.isAlive()) continue;
                const d = npc.getPosition().distanceTo(p.position);
                if (d < 3) {
                    // random destination far away
                    const angle = Math.random() * Math.PI * 2;
                    const dist = 40 + Math.random() * 80;
                    const newPos = new THREE.Vector3(
                        Math.cos(angle) * dist,
                        0,
                        Math.sin(angle) * dist
                    );
                    npc.setPosition(newPos);
                    this.onChat?.(`🌀 An NPC fell into a portal and came out ${dist.toFixed(0)} units away. physics is a suggestion.`);
                }
            }

            if (p.timer <= 0) {
                this.scene.remove(p.group);
                p.group.children.forEach(c => {
                    (c as THREE.Mesh).geometry?.dispose();
                    ((c as THREE.Mesh).material as THREE.Material)?.dispose();
                });
                this.portals.splice(i, 1);
            }
        }
    }

    private _spawnPortal(): void {
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        const angle = Math.random() * Math.PI * 2;
        const dist = 15 + Math.random() * 35;
        const pos = new THREE.Vector3(pp.x + Math.cos(angle) * dist, 1, pp.z + Math.sin(angle) * dist);

        const g = new THREE.Group();

        // spinning ring
        const ringGeo = new THREE.TorusGeometry(2.5, 0.3, 10, 32);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x9900ff, transparent: true, opacity: 0.8 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        g.add(ring);

        // inner glow disk
        const diskGeo = new THREE.CircleGeometry(2.2, 24);
        const diskMat = new THREE.MeshBasicMaterial({ color: 0x5500aa, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
        const disk = new THREE.Mesh(diskGeo, diskMat);
        g.add(disk);

        // portal light
        const pLight = new THREE.PointLight(0xaa00ff, 3, 12);
        g.add(pLight);

        g.position.copy(pos);
        this.scene.add(g);
        this.portals.push({ group: g, position: pos, timer: 15, spinAngle: 0 });

        this.onChat?.('🌀 a portal appeared nearby. npcs that walk into it go... somewhere else. good luck to them.');
    }

    // ---- RAINING CATS ----
    private _updateRainTimer(dt: number): void {
        this.rainTimer -= dt;
        if (this.rainTimer <= 0) {
            this.rainTimer = 60 + Math.random() * 70;
            this._triggerRainOfCats();
        }
    }

    private _triggerRainOfCats(): void {
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        this.onChat?.('😸 IT IS RAINING CATS!! LITERALLY!! NPCs FALLING FROM THE SKY!! THIS IS NORMAL!!');

        for (let i = 0; i < 12; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 5 + Math.random() * 30;
            const x = pp.x + Math.cos(angle) * dist;
            const z = pp.z + Math.sin(angle) * dist;
            const y = 55 + Math.random() * 25;

            // spawn a tiny falling cat visual -- real NPC spawned at ground
            const g = new THREE.Group();
            const bodyMat = new THREE.MeshPhongMaterial({ color: Math.random() > 0.5 ? 0xff8844 : 0x332211 });
            const catBody = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), bodyMat);
            catBody.scale.set(1, 1.2, 0.8);
            g.add(catBody);
            const headGeo = new THREE.SphereGeometry(0.38, 8, 6);
            const head = new THREE.Mesh(headGeo, bodyMat);
            head.position.y = 0.9;
            g.add(head);
            g.position.set(x, y, z);
            this.scene.add(g);
            this.fallingCatMeshes.push({ mesh: g, vy: -2 });

            // spawn real NPC at landing zone after delay based on height
            const fallMs = (y / 30) * 1000 + Math.random() * 500;
            setTimeout(() => {
                this.onSpawnAt?.(new THREE.Vector3(x, 0, z));
                // remove the falling visual
            }, fallMs);
        }
    }

    private _updateFallingCats(dt: number): void {
        for (let i = this.fallingCatMeshes.length - 1; i >= 0; i--) {
            const c = this.fallingCatMeshes[i];
            c.vy -= 25 * dt; // gravity
            c.mesh.position.y += c.vy * dt;
            c.mesh.rotation.z += 4 * dt; // spin while falling

            if (c.mesh.position.y <= 0.5) {
                this.scene.remove(c.mesh);
                c.mesh.children.forEach(child => {
                    (child as THREE.Mesh).geometry?.dispose();
                    ((child as THREE.Mesh).material as THREE.Material)?.dispose();
                });
                this.fallingCatMeshes.splice(i, 1);
            }
        }
    }

    // ---- STALKER SHADOW ----
    private _updateStalker(dt: number): void {
        if (!this.stalkerMesh) return;
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();

        this.stalkerTimer -= dt;
        if (this.stalkerHideTimer > 0) {
            this.stalkerHideTimer -= dt;
            if (this.stalkerHideTimer <= 0) {
                this.stalkerMesh.visible = false;
                this.stalkerVisible = false;
                this.stalkerTimer = 25 + Math.random() * 35; // wait before reappearing
            }
        }

        if (this.stalkerTimer <= 0 && !this.stalkerVisible) {
            // appear at edge of vision -- 22-28 units behind the player
            const angle = Math.atan2(pp.z, pp.x) + Math.PI + (Math.random() - 0.5) * 0.6;
            const dist = 22 + Math.random() * 8;
            this.stalkerPos.set(pp.x + Math.cos(angle) * dist, 0, pp.z + Math.sin(angle) * dist);
            this.stalkerMesh.position.copy(this.stalkerPos);
            this.stalkerMesh.visible = true;
            this.stalkerVisible = true;
            this.stalkerHideTimer = 6 + Math.random() * 5; // visible for 6-11s
            this.onChat?.('👁️ something is watching you from the edge of the world. it is not friendly. it is not unfriendly. it is watching.');
        }

        if (this.stalkerVisible) {
            // slowly drift toward player while watching -- creepy lurch
            const toPlayer = pp.clone().sub(this.stalkerPos).normalize();
            this.stalkerPos.add(toPlayer.multiplyScalar(1.4 * dt));
            this.stalkerMesh.position.copy(this.stalkerPos);
            this.stalkerMesh.lookAt(pp);
            // pulse opacity for extra unsettling
            const opc = 0.4 + Math.sin(Date.now() * 0.003) * 0.25;
            this.stalkerMesh.children.forEach(c => {
                const mat = (c as THREE.Mesh).material as THREE.MeshBasicMaterial;
                if (mat?.transparent) mat.opacity = opc;
            });
        }
    }

    // ---- CURSED MOON ----
    private _updateCursedMoon(dt: number): void {
        const night = this.isNight?.() ?? false;

        if (night && !this.cursedMoonActive) {
            this.cursedMoonActive = true;
            // spawn a blood-red moon in the sky
            if (!this.cursedMoonMesh) {
                const geo = new THREE.SphereGeometry(8, 18, 18);
                const mat = new THREE.MeshBasicMaterial({ color: 0xff2200 });
                this.cursedMoonMesh = new THREE.Mesh(geo, mat);
                this.cursedMoonMesh.position.set(80, 120, -150);
                this.scene.add(this.cursedMoonMesh);
            }
            this.cursedMoonMesh.visible = true;

            // tint all npc materials blood red at night -- they are EMPOWERED
            const npcs = this.getNPCs?.() ?? [];
            for (const npc of npcs) {
                const mesh = npc.getMesh() as THREE.Object3D;
                mesh.traverse(child => {
                    const m = child as THREE.Mesh;
                    if (m.material && (m.material as THREE.MeshPhongMaterial).color) {
                        (m.material as THREE.MeshPhongMaterial).emissive?.setHex(0x330000);
                    }
                });
            }
        } else if (!night && this.cursedMoonActive) {
            this.cursedMoonActive = false;
            if (this.cursedMoonMesh) this.cursedMoonMesh.visible = false;
        }
    }

    // ---- FLOOR IS LAVA ----
    private _updateFloorLava(dt: number): void {
        this.floorLavaTimer -= dt;

        if (this.floorLavaTimer <= 0) {
            this.floorLavaTimer = 80 + Math.random() * 70;
            this._triggerFloorLava();
        }

        if (this.floorLavaPanelTimer > 0) {
            this.floorLavaPanelTimer -= dt;

            if (this.floorLavaPanel) {
                // pulse orange/red
                const hue = 0.04 + Math.sin(Date.now() * 0.006) * 0.03;
                (this.floorLavaPanel.material as THREE.MeshBasicMaterial).color.setHSL(hue, 1, 0.5);
                (this.floorLavaPanel.material as THREE.MeshBasicMaterial).opacity = 0.45 + Math.sin(Date.now() * 0.008) * 0.15;
            }

            // hurt all NPCs touching the floor
            const npcs = this.getNPCs?.() ?? [];
            for (const npc of npcs) {
                if (!npc.isAlive()) continue;
                if (npc.getPosition().y < 1.5) {
                    npc.takeDamage(6 * dt * 60); // ~6 dmg per second scaled by frame
                }
            }

            if (this.floorLavaPanelTimer <= 0 && this.floorLavaPanel) {
                this.scene.remove(this.floorLavaPanel);
                this.floorLavaPanel.geometry.dispose();
                (this.floorLavaPanel.material as THREE.Material).dispose();
                this.floorLavaPanel = null;
                document.body.style.filter = '';
                this.onChat?.('🌋 lava receded. the floor is once again a floor. for now.');
            }
        }
    }

    private _triggerFloorLava(): void {
        this.floorLavaPanelTimer = 4;
        this.onChat?.('🌋 THE FLOOR IS LAVA!! NPCs on the ground take damage!! for 4 seconds!! this is unrelated to anything!!');

        // red glowing floor panel
        const geo = new THREE.PlaneGeometry(500, 500);
        const mat = new THREE.MeshBasicMaterial({ color: 0xff4400, transparent: true, opacity: 0.45, side: THREE.DoubleSide });
        const panel = new THREE.Mesh(geo, mat);
        panel.rotation.x = -Math.PI / 2;
        panel.position.y = 0.05;
        this.scene.add(panel);
        this.floorLavaPanel = panel;

        document.body.style.filter = 'sepia(0.8) saturate(3) hue-rotate(340deg) brightness(1.2)';
    }

    // ---- BLOOD MOON ----
    private _updateBloodMoon(dt: number): void {
        this.bloodMoonTimer -= dt;

        if (this.bloodMoonTimer <= 0 && !this.bloodMoonActive) {
            this.bloodMoonTimer = 480 + Math.random() * 240;
            this._triggerBloodMoon();
        }

        if (this.bloodMoonActive) {
            this.bloodMoonDuration -= dt;

            // pulse the moon
            if (this.bloodMoonSphere) {
                const s = 8 + Math.sin(Date.now() * 0.002) * 1.5;
                this.bloodMoonSphere.scale.setScalar(s / 8);
            }

            if (this.bloodMoonDuration <= 0) {
                this._endBloodMoon();
            }
        }
    }

    // expose so WildCards can also trigger it manually (';' key)
    public triggerBloodMoonManual(): void {
        if (this.bloodMoonActive) {
            this.onChat?.('🔴 BLOOD MOON ALREADY ACTIVE!! the sky cannot get redder. it is trying anyway.');
            this.bloodMoonDuration = Math.max(this.bloodMoonDuration, 40);
            return;
        }
        this._triggerBloodMoon();
    }

    private _triggerBloodMoon(): void {
        this.bloodMoonActive = true;
        this.bloodMoonDuration = 60;

        // build a giant blood red moon orb in the sky
        if (!this.bloodMoonSphere) {
            const geo = new THREE.SphereGeometry(8, 18, 18);
            const mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            this.bloodMoonSphere = new THREE.Mesh(geo, mat);
            this.scene.add(this.bloodMoonSphere);
        }
        this.bloodMoonSphere.visible = true;
        this.bloodMoonSphere.position.set(-60, 130, -120);

        // tint all npcs red glowing and make them emit danger aura
        const npcs = this.getNPCs?.() ?? [];
        for (const npc of npcs) {
            (npc.getMesh() as THREE.Object3D).traverse(child => {
                const m = child as THREE.Mesh;
                if (!m.material) return;
                const mat = m.material as THREE.MeshPhongMaterial;
                if (mat?.emissive) mat.emissive.setHex(0x880000);
                if (mat?.color) mat.color.multiplyScalar(0.7);
            });
        }

        document.body.style.filter = 'sepia(0.5) hue-rotate(330deg) saturate(2.5) brightness(0.85)';
        setTimeout(() => { if (this.bloodMoonActive) return; document.body.style.filter = ''; }, 2000);

        this.onChat?.('🔴 BLOOD MOON RISES!! the sky is bleeding!! ALL NPCs are EMPOWERED!! run!! or dont!! ur choice!!');
        this.onChat?.('🔴 they are faster. angrier. glowing. this lasts 60 seconds. ur welcome.');
    }

    private _endBloodMoon(): void {
        this.bloodMoonActive = false;
        if (this.bloodMoonSphere) this.bloodMoonSphere.visible = false;

        // restore npc emissives
        const npcs = this.getNPCs?.() ?? [];
        for (const npc of npcs) {
            (npc.getMesh() as THREE.Object3D).traverse(child => {
                const m = child as THREE.Mesh;
                if (!m.material) return;
                const mat = m.material as THREE.MeshPhongMaterial;
                if (mat?.emissive) mat.emissive.setHex(0x000000);
            });
        }

        document.body.style.filter = '';
        this.onChat?.('🔴 blood moon fades. the sky is normal again. the npcs remember what they did. some of them feel bad probably. meow.');
    }

    // ---- GHOST INVASION ----
    private _updateGhostInvasion(dt: number): void {
        this.ghostInvasionTimer -= dt;
        if (this.ghostInvasionTimer <= 0) {
            this.ghostInvasionTimer = 90 + Math.random() * 70;
            this._triggerGhostInvasion();
        }

        // update existing ghosts
        for (let i = this.ghostMeshes.length - 1; i >= 0; i--) {
            const g = this.ghostMeshes[i];
            g.timer -= dt;

            // drift
            g.mesh.position.addScaledVector(g.drift, dt);
            g.mesh.position.y = 2 + Math.sin(Date.now() * 0.002 + i) * 1.5; // float up and down
            g.mesh.rotation.y += 0.8 * dt;

            // pulse opacity
            const opc = 0.25 + Math.sin(Date.now() * 0.004 + i * 0.7) * 0.2;
            g.mesh.children.forEach(c => {
                const mat = (c as THREE.Mesh).material as THREE.MeshBasicMaterial;
                if (mat?.transparent) mat.opacity = opc;
            });

            // occasionally deal damage to nearby NPCs (ghost touches = bad vibes)
            if (Math.random() < 0.01) {
                const npcs = this.getNPCs?.() ?? [];
                for (const npc of npcs) {
                    if (!npc.isAlive()) continue;
                    if (npc.getPosition().distanceTo(g.mesh.position) < 3) {
                        npc.takeDamage(8);
                        break;
                    }
                }
            }

            if (g.timer <= 0) {
                this.scene.remove(g.mesh);
                g.mesh.children.forEach(c => {
                    (c as THREE.Mesh).geometry?.dispose();
                    ((c as THREE.Mesh).material as THREE.Material)?.dispose();
                });
                this.ghostMeshes.splice(i, 1);
            }
        }
    }

    // expose for manual triggering ('  key in WildCards)
    public triggerGhostInvasionManual(): void {
        this._triggerGhostInvasion();
    }

    private _triggerGhostInvasion(): void {
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        const count = 8 + Math.floor(Math.random() * 6);
        this.onChat?.(`👻 GHOST INVASION!! ${count} spectral entities have entered the world!! they drift!! they haunt!! they deal chip damage!!`);

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 10 + Math.random() * 40;
            const spawnPos = new THREE.Vector3(
                pp.x + Math.cos(angle) * dist,
                3 + Math.random() * 4,
                pp.z + Math.sin(angle) * dist
            );

            const g = new THREE.Group();
            const ghostMat = new THREE.MeshBasicMaterial({ color: 0x99ccff, transparent: true, opacity: 0.3 });

            // ghost body -- stretched sphere
            const bodyGeo = new THREE.SphereGeometry(0.7, 10, 8);
            const body = new THREE.Mesh(bodyGeo, ghostMat);
            body.scale.set(1, 1.6, 0.8);
            g.add(body);

            // ghost head
            const headGeo = new THREE.SphereGeometry(0.55, 10, 8);
            const head = new THREE.Mesh(headGeo, ghostMat);
            head.position.y = 1.4;
            g.add(head);

            // creepy eyes -- hollow black
            const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000033, transparent: true, opacity: 0.9 });
            for (const sx of [-1, 1]) {
                const eyeGeo = new THREE.SphereGeometry(0.1, 6, 6);
                const eye = new THREE.Mesh(eyeGeo, eyeMat);
                eye.position.set(sx * 0.2, 1.5, 0.48);
                g.add(eye);
            }

            // glow
            const gLight = new THREE.PointLight(0x6699ff, 1.5, 8);
            gLight.position.y = 1;
            g.add(gLight);

            g.position.copy(spawnPos);
            this.scene.add(g);

            // random drift direction
            const driftAngle = Math.random() * Math.PI * 2;
            const drift = new THREE.Vector3(Math.cos(driftAngle) * 1.8, 0, Math.sin(driftAngle) * 1.8);

            this.ghostMeshes.push({ mesh: g, drift, timer: 18 + Math.random() * 8 });
        }
    }

    // ---- NPC CIVIL WAR ----
    private _updateCivilWar(dt: number): void {
        this.civilWarTimer -= dt;

        if (this.civilWarTimer <= 0 && !this.civilWarActive) {
            this.civilWarTimer = 180 + Math.random() * 120;
            this._startCivilWar();
        }

        if (this.civilWarActive) {
            this.civilWarDuration -= dt;

            // make factions attack each other
            const fA = this.factionA.filter(n => n.isAlive());
            const fB = this.factionB.filter(n => n.isAlive());

            for (const npc of fA) {
                if (fB.length === 0) break;
                const myPos = npc.getPosition();
                const nearest = fB.reduce((best, n) =>
                    n.getPosition().distanceTo(myPos) < best.getPosition().distanceTo(myPos) ? n : best, fB[0]);
                const toTarget = nearest.getPosition().sub(myPos).normalize();
                npc.setPosition(myPos.add(toTarget.multiplyScalar(4 * dt)));
                if (npc.getPosition().distanceTo(nearest.getPosition()) < 2) {
                    nearest.takeDamage(12 * dt);
                }
            }

            for (const npc of fB) {
                if (fA.length === 0) break;
                const myPos = npc.getPosition();
                const nearest = fA.reduce((best, n) =>
                    n.getPosition().distanceTo(myPos) < best.getPosition().distanceTo(myPos) ? n : best, fA[0]);
                const toTarget = nearest.getPosition().sub(myPos).normalize();
                npc.setPosition(myPos.add(toTarget.multiplyScalar(4 * dt)));
                if (npc.getPosition().distanceTo(nearest.getPosition()) < 2) {
                    nearest.takeDamage(12 * dt);
                }
            }

            if (this.civilWarDuration <= 0 || fA.length === 0 || fB.length === 0) {
                this._endCivilWar(fA.length === 0 ? 'B' : fB.length === 0 ? 'A' : 'none');
            }
        }
    }

    // expose for manual triggering via WildCards
    public triggerCivilWarManual(): void {
        if (this.civilWarActive) {
            this.onChat?.('⚔️ war is already happening!! two factions fighting!! this cannot be escalated. maybe.');
            this.civilWarDuration = Math.max(this.civilWarDuration, 30);
            return;
        }
        this._startCivilWar();
    }

    private _startCivilWar(): void {
        const npcs = this.getNPCs?.() ?? [];
        const alive = npcs.filter(n => n.isAlive());
        if (alive.length < 4) { return; } // not enough npcs for a real war

        // split 50/50 -- faction A = first half, faction B = second half
        const shuffled = [...alive].sort(() => Math.random() - 0.5);
        const mid = Math.floor(shuffled.length / 2);
        this.factionA = shuffled.slice(0, mid);
        this.factionB = shuffled.slice(mid);

        // tint A = orange, B = blue
        for (const n of this.factionA) {
            (n.getMesh() as THREE.Object3D).traverse(c => {
                const m = c as THREE.Mesh;
                if (m.material && (m.material as THREE.MeshPhongMaterial)?.emissive) {
                    (m.material as THREE.MeshPhongMaterial).emissive.setHex(0x884400);
                }
            });
        }
        for (const n of this.factionB) {
            (n.getMesh() as THREE.Object3D).traverse(c => {
                const m = c as THREE.Mesh;
                if (m.material && (m.material as THREE.MeshPhongMaterial)?.emissive) {
                    (m.material as THREE.MeshPhongMaterial).emissive.setHex(0x004488);
                }
            });
        }

        this.civilWarActive = true;
        this.civilWarDuration = 45;
        this.onChat?.(`⚔️ NPC CIVIL WAR!! ${this.factionA.length} vs ${this.factionB.length}!! orange vs blue!! they attack each other now!! pick a side! (u cant pick a side)`);
    }

    private _endCivilWar(winner: string): void {
        this.civilWarActive = false;

        // restore emissives
        const all = [...this.factionA, ...this.factionB];
        for (const n of all) {
            if (!n.isAlive()) continue;
            (n.getMesh() as THREE.Object3D).traverse(c => {
                const m = c as THREE.Mesh;
                if (m.material && (m.material as THREE.MeshPhongMaterial)?.emissive) {
                    (m.material as THREE.MeshPhongMaterial).emissive.setHex(0x000000);
                }
            });
        }

        this.factionA = [];
        this.factionB = [];

        if (winner === 'A') {
            this.onChat?.('⚔️ ORANGE FACTION WINS!! blue npcs are mostly dead. orange npcs stand victorious. this was avoidable.');
        } else if (winner === 'B') {
            this.onChat?.('⚔️ BLUE FACTION WINS!! orange npcs are mostly dead. the war is over. for now. meow.');
        } else {
            this.onChat?.('⚔️ civil war ends. no side won. everyone is tired. the world goes back to normal. whatever that means.');
        }
    }

    // ---- NPC EMPOWERMENT ----
    private _updateNPCEmpowerment(dt: number): void {
        this.empowerTimer -= dt;
        if (this.empowerTimer > 0) return;
        this.empowerTimer = 120 + Math.random() * 60;

        const npcs = this.getNPCs?.() ?? [];
        const alive = npcs.filter(n => n.isAlive());
        if (alive.length === 0) return;

        // pick 3 lucky NPCs
        const shuffled = [...alive].sort(() => Math.random() - 0.5);
        const chosen = shuffled.slice(0, Math.min(3, shuffled.length));

        for (const npc of chosen) {
            const mesh = npc.getMesh() as THREE.Object3D;
            // scale up 1.5x (cumulative if they keep getting chosen... oh well)
            const curr = mesh.scale.x;
            if (curr < 4) mesh.scale.setScalar(curr * 1.5); // cap at 4x so the world doesnt explode

            // purple emissive glow -- u are chosen
            mesh.traverse(child => {
                const m = child as THREE.Mesh;
                if (m.material && (m.material as THREE.MeshPhongMaterial)?.emissive) {
                    (m.material as THREE.MeshPhongMaterial).emissive.setHex(0x550088);
                }
            });
        }

        this.onChat?.(`✨ ${chosen.length} NPCs have EVOLVED!! they grew 1.5x!! they glow purple!! they are becoming something. something different.`);
    }

    // ---- PHANTOM FIST ----
    private _updatePhantomFist(dt: number): void {
        this.phantomFistTimer -= dt;

        if (this.phantomFistTimer <= 0 && !this.phantomFistData) {
            this.phantomFistTimer = 60 + Math.random() * 50;
            this._triggerPhantomFist();
        }

        if (!this.phantomFistData || !this.phantomFistMesh) return;
        const fist = this.phantomFistData;
        fist.timer -= dt;

        if (fist.phase === 'punch') {
            // fist lunges in its direction at high speed
            this.phantomFistMesh.position.addScaledVector(fist.dir, 28 * dt);

            // rotate dramatically
            this.phantomFistMesh.rotation.z += 3 * dt;

            // deal damage to any NPC in its path
            const npcs = this.getNPCs?.() ?? [];
            for (const npc of npcs) {
                if (!npc.isAlive()) continue;
                if (npc.getPosition().distanceTo(this.phantomFistMesh.position) < 3.5) {
                    npc.takeDamage(45);
                    // knock them back
                    const knockDir = npc.getPosition().sub(this.phantomFistMesh.position).normalize();
                    const knockPos = npc.getPosition().add(knockDir.multiplyScalar(8));
                    npc.setPosition(new THREE.Vector3(knockPos.x, 0, knockPos.z));
                }
            }

            if (fist.timer <= 0) {
                fist.phase = 'withdraw';
                fist.timer = 1.2;
                fist.dir.negate(); // reverse direction
            }
        } else {
            // withdraw
            this.phantomFistMesh.position.addScaledVector(fist.dir, 35 * dt);

            if (fist.timer <= 0) {
                this.scene.remove(this.phantomFistMesh);
                this.phantomFistMesh!.children.forEach(c => {
                    (c as THREE.Mesh).geometry?.dispose();
                    ((c as THREE.Mesh).material as THREE.Material)?.dispose();
                });
                this.phantomFistMesh = null;
                this.phantomFistData = null;
            }
        }
    }

    private _triggerPhantomFist(): void {
        const pp = this.getPlayerPos?.() ?? new THREE.Vector3();
        const angle = Math.random() * Math.PI * 2;
        const dist = 50;
        const startPos = new THREE.Vector3(pp.x + Math.cos(angle) * dist, 2.5, pp.z + Math.sin(angle) * dist);
        const dir = new THREE.Vector3(-Math.cos(angle), 0, -Math.sin(angle)).normalize(); // punches toward center

        // build a giant translucent fist mesh (simplified as knuckle bumps + palm)
        const g = new THREE.Group();
        const ghostMat = new THREE.MeshBasicMaterial({ color: 0xffddaa, transparent: true, opacity: 0.35 });

        // palm
        const palmGeo = new THREE.BoxGeometry(3, 2.5, 2);
        const palm = new THREE.Mesh(palmGeo, ghostMat);
        g.add(palm);

        // 4 knuckles
        for (let i = 0; i < 4; i++) {
            const kGeo = new THREE.SphereGeometry(0.55, 8, 8);
            const knuckle = new THREE.Mesh(kGeo, ghostMat);
            knuckle.position.set(-1.3 + i * 0.88, 1.4, 0.3);
            g.add(knuckle);
        }

        // thumb
        const thumbGeo = new THREE.SphereGeometry(0.52, 8, 8);
        const thumb = new THREE.Mesh(thumbGeo, ghostMat);
        thumb.position.set(1.8, 0.3, 0.6);
        g.add(thumb);

        // glow
        const fistLight = new THREE.PointLight(0xffcc88, 4, 12);
        g.add(fistLight);

        g.position.copy(startPos);
        g.lookAt(pp.x, 2.5, pp.z); // points toward player
        this.scene.add(g);
        this.phantomFistMesh = g;
        this.phantomFistData = { pos: startPos.clone(), dir, phase: 'punch', timer: 1.8 };

        this.onChat?.('👊 A PHANTOM FIST appeared from the void!! it is punching!! nobody knows whose fist it is!! stay out of its way!! meow!!');
    }

    // 

    // cleanup everything -- call on game shutdown if ever needed
    public dispose(): void {
        if (this.stalkerMesh) this.scene.remove(this.stalkerMesh);
        if (this.cursedMoonMesh) this.scene.remove(this.cursedMoonMesh);
        if (this.floorLavaPanel) this.scene.remove(this.floorLavaPanel);
        for (const p of this.portals) this.scene.remove(p.group);
        for (const c of this.fallingCatMeshes) this.scene.remove(c.mesh);
    }
}
