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

    // cleanup everything -- call on game shutdown if ever needed
    public dispose(): void {
        if (this.stalkerMesh) this.scene.remove(this.stalkerMesh);
        if (this.cursedMoonMesh) this.scene.remove(this.cursedMoonMesh);
        if (this.floorLavaPanel) this.scene.remove(this.floorLavaPanel);
        for (const p of this.portals) this.scene.remove(p.group);
        for (const c of this.fallingCatMeshes) this.scene.remove(c.mesh);
    }
}
