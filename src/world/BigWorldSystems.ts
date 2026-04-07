import * as THREE from 'three';

// big world systems. all of them. in one file. because why not.
// this runs the whole world chaos -- meteors, volcanoes, black holes, the whole nightmare
// idk why this works. ngl kinda scared to touch it. -- edgy dev

export class BigWorldSystems {
    private scene: THREE.Scene;
    private timers: Record<string, number> = {};
    private floatingIslands: { mesh: THREE.Group; vel: THREE.Vector3 }[] = [];
    private meteorTrails: { mesh: THREE.Mesh; vel: THREE.Vector3; life: number }[] = [];
    private volcanoCooldown = 0;
    private blackHoleMesh: THREE.Mesh | null = null;
    private blackHoleActive = false;
    private blackHoleTimer = 0;
    private lakeMeshes: THREE.Mesh[] = [];
    private catStatue: THREE.Group | null = null;
    private mazePieces: THREE.Object3D[] = [];
    private tunnelMeshes: THREE.Group[] = [];
    private cemeteryStones: THREE.Group[] = [];
    private rollerCoaster: THREE.Group | null = null;
    private ruinPieces: THREE.Object3D[] = [];
    private cityPortals: { mesh: THREE.Mesh; pos: THREE.Vector3 }[] = [];
    private portalCooldown: number = 0; // so u dont instantly chain-teleport every frame. ugh.
    private movingPlatforms: { mesh: THREE.Mesh; startY: number; phase: number }[] = [];
    private livingTrees: { group: THREE.Group; growTimer: number; maxScale: number; dying: boolean }[] = [];

    // callbacks so the big systems can talk back to main
    public onMeteorImpact: ((pos: THREE.Vector3) => void) | null = null;
    public onVolcanoErupt: ((catPositions: THREE.Vector3[]) => void) | null = null;
    public onBlackHolePull: ((center: THREE.Vector3, strength: number) => THREE.Vector3[] | null) | null = null;
    public onPortalTeleport: ((playerPos: THREE.Vector3) => void) | null = null;
    public onCatWorshipStatue: (() => void) | null = null;

    // npc positions for black hole pulling etc -- updated from main each frame
    public npcPositions: THREE.Vector3[] = [];
    public playerPos: THREE.Vector3 | null = null;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.init();
        console.log('%c🌋 BigWorldSystems online. chaos ready. hold on.', 'color: #ff6600; font-weight: bold');
    }

    private init(): void {
        // spawn the initial world features -- all of them at once because INTRODUCING EVERYTHING!!
        this.spawnLakes();
        this.spawnCatStatue();
        this.spawnTunnels();
        this.spawnCemetery();
        this.spawnRollerCoaster();
        this.spawnRuins();
        this.spawnCityPortals();
        this.spawnMovingPlatforms();
        this.spawnFloatingIslands(4);
        this.spawnLivingTrees(8);
        // timers for periodic events
        this.timers.meteor = 18;     // first meteor in 18s
        this.timers.volcano = 45;    // volcano erupts every 45s
        this.timers.blackHole = 60;  // black hole spawns after 60s
        this.timers.newIsland = 30;  // new floating island every 30s
        this.timers.statueWorship = 20; // npcs worship statue periodically
    }

    // =================== METEORS ===================
    // INTRODUCING: RANDOM METEOR STRIKES!! tired of a safe sky?? NOT ANYMORE!!

    private spawnMeteor(): void {
        const geo = new THREE.SphereGeometry(0.8 + Math.random() * 1.5, 8, 8);
        const mat = new THREE.MeshStandardMaterial({ color: 0xff6600, emissive: new THREE.Color(0xff3300), roughness: 0.9 });
        const meteor = new THREE.Mesh(geo, mat);
        // spawn high up at random position
        const tx = (Math.random() - 0.5) * 300;
        const tz = (Math.random() - 0.5) * 300;
        meteor.position.set(tx + (Math.random() - 0.5) * 80, 120, tz + (Math.random() - 0.5) * 80);
        const target = new THREE.Vector3(tx, 0, tz);
        const vel = target.clone().sub(meteor.position).normalize().multiplyScalar(35 + Math.random() * 20);
        this.scene.add(meteor);
        this.meteorTrails.push({ mesh: meteor, vel, life: 5.0 });
        console.log('🌑 meteor incoming at', tx.toFixed(0), tz.toFixed(0));
    }

    private updateMeteors(dt: number): void {
        for (let i = this.meteorTrails.length - 1; i >= 0; i--) {
            const m = this.meteorTrails[i];
            m.life -= dt;
            m.mesh.position.add(m.vel.clone().multiplyScalar(dt));
            // spin it bc it looks cool
            m.mesh.rotation.x += dt * 3;
            m.mesh.rotation.z += dt * 2;
            // crater the ground when it hits
            if (m.mesh.position.y <= 1.5 || m.life <= 0) {
                const impactPos = m.mesh.position.clone();
                this.scene.remove(m.mesh);
                this.meteorTrails.splice(i, 1);
                this.createCrater(impactPos);
                this.onMeteorImpact?.(impactPos);
            }
        }
    }

    private createCrater(pos: THREE.Vector3): void {
        // dig a lil hole -- visual only, we dont have real terrain deformation lol
        const craterGeo = new THREE.CylinderGeometry(3 + Math.random() * 2, 2.5, 0.5, 12);
        const craterMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 1.0 });
        const crater = new THREE.Mesh(craterGeo, craterMat);
        crater.position.set(pos.x, -0.1, pos.z);
        this.scene.add(crater);
        // glowing rim
        const rimGeo = new THREE.TorusGeometry(3.5, 0.3, 8, 16);
        const rimMat = new THREE.MeshBasicMaterial({ color: 0xff4400, transparent: true, opacity: 0.6 });
        const rim = new THREE.Mesh(rimGeo, rimMat);
        rim.position.set(pos.x, 0.3, pos.z);
        rim.rotation.x = Math.PI / 2;
        this.scene.add(rim);
        // fade the rim out over 5s
        let rimLife = 5;
        const fadeRim = () => {
            rimLife -= 0.05;
            if (rimLife <= 0) { this.scene.remove(rim); return; }
            (rim.material as THREE.MeshBasicMaterial).opacity = Math.max(0, rimLife / 5 * 0.6);
            setTimeout(fadeRim, 50);
        };
        setTimeout(fadeRim, 50);
    }

    // =================== FLOATING ISLANDS ===================
    // they drift. they go places. nobody controls them. ideal.

    private spawnFloatingIslands(count: number): void {
        for (let i = 0; i < count; i++) {
            const island = new THREE.Group();
            const base = new THREE.Mesh(
                new THREE.CylinderGeometry(8 + Math.random() * 6, 4 + Math.random() * 3, 3, 10),
                new THREE.MeshStandardMaterial({ color: 0x5a9e4a, roughness: 1.0 })
            );
            island.add(base);
            // dirt underside
            const bottom = new THREE.Mesh(
                new THREE.ConeGeometry(6, 4, 10),
                new THREE.MeshStandardMaterial({ color: 0x8b6914, roughness: 1.0 })
            );
            bottom.rotation.x = Math.PI; bottom.position.y = -3.5; island.add(bottom);
            // lil tree on top
            const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 2, 6), new THREE.MeshStandardMaterial({ color: 0x8b5a2b }));
            trunk.position.y = 2.5; island.add(trunk);
            const canopy = new THREE.Mesh(new THREE.SphereGeometry(3, 10, 10), new THREE.MeshStandardMaterial({ color: 0x228B22 }));
            canopy.position.y = 5; island.add(canopy);
            // position high up
            const x = (Math.random() - 0.5) * 350;
            const z = (Math.random() - 0.5) * 350;
            island.position.set(x, 30 + Math.random() * 50, z);
            this.scene.add(island);
            // slow drift velocity
            const vel = new THREE.Vector3((Math.random() - 0.5) * 2, 0, (Math.random() - 0.5) * 2);
            this.floatingIslands.push({ mesh: island, vel });
        }
    }

    private updateFloatingIslands(dt: number): void {
        const t = Date.now() * 0.001;
        for (const island of this.floatingIslands) {
            island.mesh.position.add(island.vel.clone().multiplyScalar(dt));
            // gentle bob
            island.mesh.position.y += Math.sin(t * 0.5 + island.mesh.position.x * 0.01) * 0.02;
            // bounce off far edges -- islands drift but come back eventually. lazy. whatever.
            if (Math.abs(island.mesh.position.x) > 2000) island.vel.x *= -1;
            if (Math.abs(island.mesh.position.z) > 2000) island.vel.z *= -1;
        }
    }

    // =================== VOLCANO ===================
    // its erupting. cats go flying. nobody is okay.

    private volcano: THREE.Group | null = null;

    private spawnVolcano(): void {
        const v = new THREE.Group();
        // giant cone
        const cone = new THREE.Mesh(
            new THREE.ConeGeometry(25, 40, 16),
            new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 1.0 })
        );
        v.add(cone);
        // crater at top
        const crater = new THREE.Mesh(
            new THREE.CylinderGeometry(6, 8, 2, 12),
            new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 1.0 })
        );
        crater.position.y = 21; v.add(crater);
        // lava glow inside crater
        const lava = new THREE.Mesh(
            new THREE.CylinderGeometry(5.5, 5.5, 0.5, 12),
            new THREE.MeshBasicMaterial({ color: 0xff4400 })
        );
        lava.position.y = 21; v.add(lava);
        // pick a corner of the world so it doesn't block everything
        v.position.set(160, 0, 160);
        this.scene.add(v);
        this.volcano = v;
        console.log('%c🌋 VOLCANO SPAWNED', 'color:#ff4400;font-weight:bold');
    }

    private eruptVolcano(): void {
        if (!this.volcano) return;
        console.log('%c🌋 VOLCANO ERUPTION!!', 'color:#ff0000;font-weight:bold;font-size:14px');
        // spawn 16 lava balls flying outward
        for (let i = 0; i < 16; i++) {
            const ball = new THREE.Mesh(
                new THREE.SphereGeometry(0.6 + Math.random() * 0.8, 6, 6),
                new THREE.MeshBasicMaterial({ color: 0xff6600 })
            );
            ball.position.copy(this.volcano.position);
            ball.position.y = 42;
            const angle = (i / 16) * Math.PI * 2 + Math.random() * 0.5;
            const vx = Math.cos(angle) * (15 + Math.random() * 20);
            const vz = Math.sin(angle) * (15 + Math.random() * 20);
            const vy = 20 + Math.random() * 15;
            const ballVel = new THREE.Vector3(vx, vy, vz);
            this.scene.add(ball);
            // simulate as a meteor basically
            this.meteorTrails.push({ mesh: ball, vel: ballVel, life: 4.0 });
        }
        this.onVolcanoErupt?.(this.npcPositions);
    }

    // =================== BLACK HOLE ===================
    // literally just pulls everything in. very polite about it. not polite about it at all.

    private spawnBlackHole(x: number, z: number): void {
        if (this.blackHoleMesh) { this.scene.remove(this.blackHoleMesh); }
        const geo = new THREE.SphereGeometry(5, 16, 16);
        const mat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        this.blackHoleMesh = new THREE.Mesh(geo, mat);
        this.blackHoleMesh.position.set(x, 8, z);
        this.scene.add(this.blackHoleMesh);
        // accretion disc -- the pretty part
        const disc = new THREE.Mesh(
            new THREE.TorusGeometry(10, 1.5, 8, 32),
            new THREE.MeshBasicMaterial({ color: 0xff8800, transparent: true, opacity: 0.7 })
        );
        disc.position.set(x, 8, z);
        disc.rotation.x = Math.PI / 4;
        disc.name = 'bhdisc';
        this.scene.add(disc);
        this.blackHoleActive = true;
        this.blackHoleTimer = 20; // 20 seconds of doom
        console.log(`%c⚫ BLACK HOLE opened at ${x.toFixed(0)},${z.toFixed(0)}`, 'color:#8800ff;font-weight:bold');
    }

    private updateBlackHole(dt: number): void {
        if (!this.blackHoleActive || !this.blackHoleMesh) return;
        this.blackHoleTimer -= dt;
        const bh = this.blackHoleMesh.position;
        // spin the disc
        const disc = this.scene.getObjectByName('bhdisc');
        if (disc) disc.rotation.z += dt * 2;
        // pulse the black hole size
        const scale = 1 + Math.sin(Date.now() * 0.003) * 0.2;
        this.blackHoleMesh.scale.setScalar(scale);
        // pull everything nearby -- npcs, player
        const PULL_RANGE = 60;
        const PULL_FORCE = 12;
        for (const npcPos of this.npcPositions) {
            const dist = bh.distanceTo(npcPos);
            if (dist < PULL_RANGE && dist > 1) {
                const dir = bh.clone().sub(npcPos).normalize();
                const force = PULL_FORCE * (1 - dist / PULL_RANGE);
                npcPos.add(dir.multiplyScalar(force * dt));
            }
        }
        if (this.playerPos) {
            const pdist = bh.distanceTo(this.playerPos);
            if (pdist < PULL_RANGE && pdist > 5) {
                const pdir = bh.clone().sub(this.playerPos).normalize();
                const pforce = PULL_FORCE * 0.5 * (1 - pdist / PULL_RANGE);
                this.playerPos.add(pdir.multiplyScalar(pforce * dt));
                this.onBlackHolePull?.(bh.clone(), pforce);
            }
        }
        if (this.blackHoleTimer <= 0) {
            this.scene.remove(this.blackHoleMesh);
            if (disc) this.scene.remove(disc);
            this.blackHoleActive = false;
            this.blackHoleMesh = null;
            console.log('%c⚫ black hole collapsed. cats scattered.', 'color:#8800ff');
        }
    }

    // =================== LAKES ===================
    // cats refuse to go near them. they have reviews. one star. too wet.

    private spawnLakes(): void {
        const lakePositions = [
            [80, 30], [-70, 90], [40, -110], [-120, -60], [100, -80]
        ];
        for (const [x, z] of lakePositions) {
            const size = 12 + Math.random() * 18;
            const lake = new THREE.Mesh(
                new THREE.CylinderGeometry(size, size, 0.3, 20),
                new THREE.MeshStandardMaterial({ color: 0x1a6699, transparent: true, opacity: 0.75, roughness: 0.1, metalness: 0.3 })
            );
            lake.position.set(x, 0.05, z);
            lake.receiveShadow = true;
            this.scene.add(lake);
            this.lakeMeshes.push(lake);
            // lily pads because aesthetic
            for (let i = 0; i < 4; i++) {
                const pad = new THREE.Mesh(
                    new THREE.CylinderGeometry(1.2, 1.2, 0.1, 10),
                    new THREE.MeshStandardMaterial({ color: 0x228b22, roughness: 0.9 })
                );
                pad.position.set(x + (Math.random() - 0.5) * size * 1.4, 0.15, z + (Math.random() - 0.5) * size * 1.4);
                this.scene.add(pad);
            }
        }
    }

    // check if a position is near a lake -- used by NPC AI to avoid them
    public isNearLake(pos: THREE.Vector3, margin: number = 8): boolean {
        for (const lake of this.lakeMeshes) {
            const dx = pos.x - lake.position.x;
            const dz = pos.z - lake.position.z;
            const r = (lake.geometry as THREE.CylinderGeometry).parameters.radiusTop ?? 15;
            if (Math.sqrt(dx * dx + dz * dz) < r + margin) return true;
        }
        return false;
    }

    // =================== GIANT CAT STATUE ===================
    // npcs come worship it. nobody installed it. it was always there.

    private spawnCatStatue(): void {
        const s = new THREE.Group();
        // pedestal
        const ped = new THREE.Mesh(new THREE.BoxGeometry(5, 3, 5), new THREE.MeshStandardMaterial({ color: 0xccbbaa, roughness: 0.9 }));
        ped.position.y = 1.5; s.add(ped);
        // cat body (big)
        const body = new THREE.Mesh(new THREE.BoxGeometry(3, 4, 2), new THREE.MeshStandardMaterial({ color: 0xddcc99, roughness: 0.7 }));
        body.position.y = 6; s.add(body);
        // cat head
        const head = new THREE.Mesh(new THREE.SphereGeometry(1.7, 14, 14), new THREE.MeshStandardMaterial({ color: 0xddcc99, roughness: 0.7 }));
        head.position.y = 9.5; s.add(head);
        // ears
        const earMat = new THREE.MeshStandardMaterial({ color: 0xccbb88, roughness: 0.8 });
        const earL = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.2, 6), earMat);
        earL.position.set(-1.0, 11.0, 0); s.add(earL);
        const earR = earL.clone(); earR.position.set(1.0, 11.0, 0); s.add(earR);
        // glowing eyes
        const eyeM = new THREE.MeshBasicMaterial({ color: 0xffdd00 });
        const eL = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), eyeM); eL.position.set(-0.6, 9.5, 1.6); s.add(eL);
        const eR = eL.clone(); eR.position.set(0.6, 9.5, 1.6); s.add(eR);
        // mystical aura ring
        const aura = new THREE.Mesh(new THREE.TorusGeometry(4, 0.2, 8, 20), new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.5 }));
        aura.position.y = 6; s.add(aura);
        s.position.set(0, 0, -50); // south of spawn
        this.scene.add(s);
        this.catStatue = s;
        console.log('%c🗿 CAT STATUE spawned. npcs will worship soon.', 'color:#ffaa00');
    }

    // =================== TUNNELS ===================
    // underground!! cats dig!! they emerge somewhere else!! chaos infrastructure

    private spawnTunnels(): void {
        const tunnelPairs = [
            { a: [30, -30] as [number, number], b: [100, 80] as [number, number] },
            { a: [-60, 50] as [number, number], b: [-90, -70] as [number, number] },
            { a: [80, -90] as [number, number], b: [-30, 60] as [number, number] },
        ];
        for (const pair of tunnelPairs) {
            const tGroup = new THREE.Group();
            // entrance A
            const entA = this.createTunnelEntrance(pair.a[0], pair.a[1]);
            const entB = this.createTunnelEntrance(pair.b[0], pair.b[1]);
            tGroup.add(entA); tGroup.add(entB);
            this.scene.add(tGroup);
            this.tunnelMeshes.push(tGroup);
        }
    }

    private createTunnelEntrance(x: number, z: number): THREE.Object3D {
        const g = new THREE.Group();
        // dark arch entrance
        const arch = new THREE.Mesh(
            new THREE.TorusGeometry(2.5, 0.5, 8, 10, Math.PI),
            new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 1.0 })
        );
        arch.position.set(x, 2.5, z);
        g.add(arch);
        // dark hole
        const hole = new THREE.Mesh(
            new THREE.CircleGeometry(2.2, 12),
            new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide })
        );
        hole.position.set(x, 2.0, z);
        hole.rotation.y = Math.PI / 2;
        g.add(hole);
        // sign above
        const sign = new THREE.Mesh(
            new THREE.BoxGeometry(2.5, 0.8, 0.2),
            new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
        );
        sign.position.set(x, 5.5, z);
        g.add(sign);
        return g;
    }

    public getTunnelEntrances(): THREE.Vector3[] {
        // returns all tunnel entrance positions for NPC pathfinding
        const positions: THREE.Vector3[] = [];
        const locs = [[30,-30],[100,80],[-60,50],[-90,-70],[80,-90],[-30,60]];
        for (const [x, z] of locs) positions.push(new THREE.Vector3(x, 0, z));
        return positions;
    }

    // =================== CAT CEMETERY ===================
    // dead NPCs get buried here. emotional. nobody asked for this feature. here it is.

    private spawnCemetery(): void {
        const cX = -80, cZ = -80; // cemetery district -- appropriately gloomy corner
        // fence
        for (let i = 0; i < 20; i++) {
            const post = new THREE.Mesh(
                new THREE.BoxGeometry(0.3, 2, 0.3),
                new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 1.0 })
            );
            const angle = (i / 20) * Math.PI * 2;
            post.position.set(cX + Math.cos(angle) * 22, 1, cZ + Math.sin(angle) * 22);
            this.scene.add(post);
        }
        // initial graves
        for (let i = 0; i < 8; i++) {
            this.addGrave(cX + (Math.random() - 0.5) * 36, cZ + (Math.random() - 0.5) * 36);
        }
    }

    private addGrave(x: number, z: number): void {
        const g = new THREE.Group();
        // headstone
        const stone = new THREE.Mesh(
            new THREE.BoxGeometry(0.8, 1.4, 0.25),
            new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 1.0 })
        );
        stone.position.y = 0.7; g.add(stone);
        // top arch of headstone
        const arch = new THREE.Mesh(
            new THREE.CylinderGeometry(0.4, 0.4, 0.25, 8, 1, false, 0, Math.PI),
            new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 1.0 })
        );
        arch.position.set(0, 1.55, 0); arch.rotation.z = Math.PI / 2; g.add(arch);
        // mound
        const mound = new THREE.Mesh(
            new THREE.SphereGeometry(1.2, 10, 10, 0, Math.PI * 2, 0, Math.PI / 2),
            new THREE.MeshStandardMaterial({ color: 0x4a6741, roughness: 1.0 })
        );
        mound.scale.set(1, 0.4, 2.5); g.add(mound);
        g.position.set(x, 0, z);
        this.scene.add(g);
        this.cemeteryStones.push(g);
    }

    // called when an NPC dies -- buries them in the cemetery
    public buryNPC(npcType: string): void {
        const cX = -80, cZ = -80;
        this.addGrave(
            cX + (Math.random() - 0.5) * 36,
            cZ + (Math.random() - 0.5) * 36
        );
        // cap at 40 graves otherwise it gets out of hand
        if (this.cemeteryStones.length > 40) {
            const old = this.cemeteryStones.shift()!;
            this.scene.remove(old);
        }
    }

    // =================== ROLLER COASTER ===================
    // cat-sized. operational. nobody is safe.

    private spawnRollerCoaster(): void {
        const rc = new THREE.Group();
        const trackMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.7, roughness: 0.3 });
        // build a rough loop track
        for (let i = 0; i < 40; i++) {
            const angle = (i / 40) * Math.PI * 2;
            const lx = Math.cos(angle) * 20;
            const lz = Math.sin(angle) * 20;
            const ly = 3 + Math.sin(angle * 2) * 8; // ups and downs
            const piece = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.5, 2.5), trackMat);
            piece.position.set(lx, ly, lz);
            piece.lookAt(Math.cos(angle + 0.1) * 20, ly, Math.sin(angle + 0.1) * 20);
            rc.add(piece);
            // support column
            const col = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, ly, 6), new THREE.MeshStandardMaterial({ color: 0x888888 }));
            col.position.set(lx, ly / 2, lz);
            rc.add(col);
        }
        // lil cart on the track
        const cart = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.8, 2.5), new THREE.MeshStandardMaterial({ color: 0xff3300 }));
        cart.position.set(20, 3, 0);
        cart.name = 'rc_cart';
        rc.add(cart);
        rc.position.set(-40, 0, 50);
        this.scene.add(rc);
        this.rollerCoaster = rc;
        console.log('%c🎢 ROLLER COASTER built. safety not guaranteed.', 'color:#ff3300');
    }

    private updateRollerCoaster(dt: number): void {
        if (!this.rollerCoaster) return;
        const t = Date.now() * 0.001;
        const cart = this.rollerCoaster.getObjectByName('rc_cart');
        if (cart) {
            const angle = t * 0.8;
            cart.position.x = Math.cos(angle) * 20;
            cart.position.z = Math.sin(angle) * 20;
            cart.position.y = 3 + Math.sin(angle * 2) * 8;
        }
    }

    // =================== RUINS ===================
    // slowly crumbling. they have seen better days. haven't we all.

    private spawnRuins(): void {
        const positions = [[120, 20], [-100, 30], [60, -140]];
        for (const [x, z] of positions) {
            // broken walls
            for (let i = 0; i < 5; i++) {
                const wallH = 2 + Math.random() * 5;
                const wall = new THREE.Mesh(
                    new THREE.BoxGeometry(8 + Math.random() * 4, wallH, 0.8),
                    new THREE.MeshStandardMaterial({ color: 0xaa9977, roughness: 1.0 })
                );
                wall.position.set(x + (Math.random() - 0.5) * 20, wallH / 2, z + (Math.random() - 0.5) * 20);
                wall.rotation.y = Math.random() * Math.PI;
                this.scene.add(wall);
                this.ruinPieces.push(wall);
            }
            // rubble
            for (let j = 0; j < 12; j++) {
                const chunk = new THREE.Mesh(
                    new THREE.BoxGeometry(0.5 + Math.random() * 1.5, 0.3 + Math.random(), 0.5 + Math.random() * 1.5),
                    new THREE.MeshStandardMaterial({ color: 0x998866, roughness: 1.0 })
                );
                chunk.position.set(x + (Math.random() - 0.5) * 25, 0.3, z + (Math.random() - 0.5) * 25);
                chunk.rotation.set(Math.random(), Math.random(), Math.random());
                this.scene.add(chunk);
                this.ruinPieces.push(chunk);
            }
        }
    }

    // =================== CITY PORTALS ===================
    // purple rings between city zones. step in, emerge somewhere else. or not. unclear.

    private spawnCityPortals(): void {
        const portalPositions: [number, number, number, number][] = [
            [50, 0, 50, 0x9900ff],
            [-50, 0, -50, 0x00ff99],
            [50, 0, -50, 0xff9900],
            [-50, 0, 50, 0x0099ff],
        ];
        for (const [x, y, z, color] of portalPositions) {
            const ring = new THREE.Mesh(
                new THREE.TorusGeometry(4, 0.5, 10, 20),
                new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8 })
            );
            ring.position.set(x, 4, z);
            const inner = new THREE.Mesh(
                new THREE.CircleGeometry(3.5, 16),
                new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
            );
            inner.position.copy(ring.position);
            this.scene.add(ring);
            this.scene.add(inner);
            this.cityPortals.push({ mesh: ring, pos: new THREE.Vector3(x, y, z) });
        }
    }

    private updatePortals(dt: number): void {
        const t = Date.now() * 0.001;
        for (const p of this.cityPortals) {
            p.mesh.rotation.y += dt * 1.5;
            // pulse opacity
            (p.mesh.material as THREE.MeshBasicMaterial).opacity = 0.5 + Math.sin(t * 3) * 0.3;
        }
        // cooldown so we dont fire every single frame and chain-teleport the player forever lmao
        if (this.portalCooldown > 0) { this.portalCooldown -= dt; return; }
        // check if player walked through a portal
        if (this.playerPos) {
            for (const p of this.cityPortals) {
                if (this.playerPos.distanceTo(p.pos) < 5) {
                    // teleport to random other portal
                    const others = this.cityPortals.filter(op => op !== p);
                    const dest = others[Math.floor(Math.random() * others.length)];
                    if (dest) {
                        this.onPortalTeleport?.(dest.pos.clone());
                        this.portalCooldown = 3; // 3 second cooldown so u dont instantly teleport back
                    }
                    break;
                }
            }
        }
    }

    // =================== MOVING PLATFORMS ===================
    // hover above the world. go up and down. cats probably fall off.

    private spawnMovingPlatforms(): void {
        for (let i = 0; i < 8; i++) {
            const platform = new THREE.Mesh(
                new THREE.BoxGeometry(6, 0.5, 6),
                new THREE.MeshStandardMaterial({ color: 0x4488cc, roughness: 0.6, metalness: 0.3 })
            );
            const x = (Math.random() - 0.5) * 280;
            const z = (Math.random() - 0.5) * 280;
            const startY = 8 + Math.random() * 20;
            platform.position.set(x, startY, z);
            this.scene.add(platform);
            this.movingPlatforms.push({ mesh: platform, startY, phase: Math.random() * Math.PI * 2 });
        }
    }

    private updateMovingPlatforms(dt: number): void {
        const t = Date.now() * 0.001;
        for (const p of this.movingPlatforms) {
            p.mesh.position.y = p.startY + Math.sin(t * 0.8 + p.phase) * 8;
        }
    }

    // =================== LIVING TREES ===================
    // grow. die. get eaten by beavers. the full lifecycle.

    private spawnLivingTrees(count: number): void {
        for (let i = 0; i < count; i++) {
            const g = new THREE.Group();
            const x = (Math.random() - 0.5) * 300;
            const z = (Math.random() - 0.5) * 300;
            const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.5, 4, 8), new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 1.0 }));
            trunk.position.y = 2; g.add(trunk);
            const canopy = new THREE.Mesh(new THREE.SphereGeometry(3, 10, 10), new THREE.MeshStandardMaterial({ color: 0x228b22 }));
            canopy.position.y = 5; g.add(canopy);
            g.position.set(x, 0, z);
            g.name = 'living_tree';
            this.scene.add(g);
            this.livingTrees.push({ group: g, growTimer: 0, maxScale: 0.3 + Math.random() * 1.2, dying: false });
        }
    }

    private updateLivingTrees(dt: number): void {
        for (let i = this.livingTrees.length - 1; i >= 0; i--) {
            const tree = this.livingTrees[i];
            tree.growTimer += dt;
            if (!tree.dying) {
                // grow
                const newScale = Math.min(tree.maxScale, tree.group.scale.x + dt * 0.02);
                tree.group.scale.setScalar(newScale);
                if (newScale >= tree.maxScale) tree.dying = true; // fully grown, now dying
            } else {
                // die -- shrink and change color
                const newScale = Math.max(0.05, tree.group.scale.x - dt * 0.01);
                tree.group.scale.setScalar(newScale);
                tree.group.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        const mat = child.material as THREE.MeshStandardMaterial;
                        if (mat?.color?.g > 0) mat.color.g -= dt * 0.05; // brown death
                    }
                });
                if (tree.group.scale.x <= 0.06) {
                    // tree died -- regrow somewhere else
                    this.scene.remove(tree.group);
                    this.livingTrees.splice(i, 1);
                    this.spawnLivingTrees(1); // the circle of life
                }
            }
        }
    }

    // =================== MAIN UPDATE ===================
    // tick everything. its a lot. its fine.

    public update(dt: number, playerPos?: THREE.Vector3): void {
        if (playerPos) this.playerPos = playerPos;

        // tick all the timer-based events
        for (const key of Object.keys(this.timers)) {
            this.timers[key] -= dt;
        }

        // meteor strike
        if (this.timers.meteor <= 0) {
            this.spawnMeteor();
            if (Math.random() < 0.3) this.spawnMeteor(); // bonus meteor bc why one when u can two
            this.timers.meteor = 15 + Math.random() * 25;
        }

        // volcano eruption
        if (this.timers.volcano <= 0) {
            if (!this.volcano) this.spawnVolcano(); // spawn it if not already there
            else this.eruptVolcano();
            this.timers.volcano = 35 + Math.random() * 30;
        }

        // black hole event
        if (this.timers.blackHole <= 0 && !this.blackHoleActive) {
            const bx = (Math.random() - 0.5) * 250;
            const bz = (Math.random() - 0.5) * 250;
            this.spawnBlackHole(bx, bz);
            this.timers.blackHole = 90 + Math.random() * 60;
        }

        // new floating island
        if (this.timers.newIsland <= 0) {
            this.spawnFloatingIslands(1);
            this.timers.newIsland = 45 + Math.random() * 30;
            // cap floating islands at 12 or frame rate suffers
            while (this.floatingIslands.length > 12) {
                const old = this.floatingIslands.shift()!;
                this.scene.remove(old.mesh);
            }
        }

        // cat statue worship pulse
        if (this.timers.statueWorship <= 0 && this.catStatue) {
            this.onCatWorshipStatue?.();
            // pulse the statue glow
            const aura = this.catStatue.children.find(c => c instanceof THREE.Mesh && (c as THREE.Mesh).geometry instanceof THREE.TorusGeometry);
            if (aura) {
                const mat = (aura as THREE.Mesh).material as THREE.MeshBasicMaterial;
                mat.opacity = 1.0;
                setTimeout(() => { mat.opacity = 0.5; }, 600);
            }
            this.timers.statueWorship = 15 + Math.random() * 20;
        }

        // update dynamic things
        this.updateMeteors(dt);
        this.updateFloatingIslands(dt);
        this.updateBlackHole(dt);
        this.updateRollerCoaster(dt);
        this.updateMovingPlatforms(dt);
        this.updatePortals(dt);
        this.updateLivingTrees(dt);

        // rotate statue slowly -- it watches
        if (this.catStatue) this.catStatue.rotation.y += dt * 0.15;
    }

    public getPortalPositions(): THREE.Vector3[] {
        return this.cityPortals.map(p => p.pos.clone());
    }

    public getFloatingIslandCount(): number { return this.floatingIslands.length; }
    public getMeteorCount(): number { return this.meteorTrails.length; }
    public isBlackHoleActive(): boolean { return this.blackHoleActive; }
}
