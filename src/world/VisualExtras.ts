import * as THREE from 'three';
import { BaseNPC } from './BaseNPC';

// visual extras -- trails, holograms, ghost effects, frozen visual, heat distortion, bloom pulse
// INTRODUCING: the most visually spectacular effects file!! ACT NOW!! -- infomercial dev
// also chaotic extras at the bottom because why have two files
// (we used to have separation of concerns. i'm not angry. just disappointed. -- disappointed parent dev)

// =================== TRAIL EFFECTS ===================

interface TrailPoint {
    position: THREE.Vector3;
    life: number;
    maxLife: number;
}

export class TrailEffectSystem {
    private scene: THREE.Scene;
    private npcTrails: Map<BaseNPC, TrailPoint[]> = new Map();
    private trailMeshes: Map<BaseNPC, THREE.Points[]> = new Map();

    constructor(scene: THREE.Scene) { this.scene = scene; }

    // grab da player pos nyaa~ and leave rainbow sparkles
    public enableTrailFor(npc: BaseNPC, color?: number): void {
        if (!this.npcTrails.has(npc)) {
            this.npcTrails.set(npc, []);
            this.trailMeshes.set(npc, []);
        }
    }

    public update(dt: number): void {
        for (const [npc, trail] of this.npcTrails) {
            if (!npc.isAlive()) {
                this.cleanupTrail(npc);
                continue;
            }
            // add new point
            trail.push({ position: npc.getPosition().clone(), life: 1.2, maxLife: 1.2 });
            // update existing points
            for (let i = trail.length - 1; i >= 0; i--) {
                trail[i].life -= dt;
                if (trail[i].life <= 0) trail.splice(i, 1);
            }
            // rebuild points mesh
            const existingMeshes = this.trailMeshes.get(npc) ?? [];
            for (const m of existingMeshes) this.scene.remove(m);
            existingMeshes.length = 0;
            if (trail.length > 0) {
                const positions = new Float32Array(trail.length * 3);
                const colors = new Float32Array(trail.length * 3);
                for (let i = 0; i < trail.length; i++) {
                    positions[i * 3] = trail[i].position.x;
                    positions[i * 3 + 1] = trail[i].position.y + 0.5;
                    positions[i * 3 + 2] = trail[i].position.z;
                    // rainbow colors bc why not
                    const hue = (i / trail.length) * 360;
                    const c = new THREE.Color().setHSL(hue / 360, 1, 0.6);
                    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
                }
                const geo = new THREE.BufferGeometry();
                geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
                const mat = new THREE.PointsMaterial({ size: 0.4, vertexColors: true, transparent: true, opacity: 0.7 });
                const pts = new THREE.Points(geo, mat);
                this.scene.add(pts);
                existingMeshes.push(pts);
                this.trailMeshes.set(npc, existingMeshes);
            }
        }
    }

    private cleanupTrail(npc: BaseNPC): void {
        for (const m of this.trailMeshes.get(npc) ?? []) this.scene.remove(m);
        this.npcTrails.delete(npc);
        this.trailMeshes.delete(npc);
    }

    public dispose(): void {
        for (const [npc] of this.npcTrails) this.cleanupTrail(npc);
    }
}

// =================== HOLOGRAPHIC EFFECT ===================

export class HologramEffect {
    private scene: THREE.Scene;
    private holoNPCs: Map<BaseNPC, THREE.Mesh> = new Map();
    private time = 0;

    constructor(scene: THREE.Scene) { this.scene = scene; }

    public makeHologram(npc: BaseNPC): void {
        const original = npc.getMesh();
        // clone the mesh and make it holographic
        const holoMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true, transparent: true, opacity: 0.4 });
        const holo = original.clone() as THREE.Mesh;
        // verily this loop doth iterate to set materials -- medieval dev
        holo.traverse((child: THREE.Object3D) => {
            if ((child as THREE.Mesh).isMesh) {
                (child as THREE.Mesh).material = holoMat.clone();
            }
        });
        holo.position.copy(original.position);
        this.scene.add(holo);
        this.holoNPCs.set(npc, holo);
    }

    public update(dt: number): void {
        this.time += dt;
        for (const [npc, holo] of this.holoNPCs) {
            if (!npc.isAlive()) {
                this.scene.remove(holo);
                this.holoNPCs.delete(npc);
                continue;
            }
            holo.position.copy(npc.getMesh().position);
            holo.rotation.copy(npc.getMesh().rotation);
            // scanline flicker effect -- just mess with opacity
            const mat = (holo as any).material as THREE.MeshBasicMaterial;
            if (mat) mat.opacity = 0.2 + Math.abs(Math.sin(this.time * 12)) * 0.35;
            // float slightly above
            holo.position.y += Math.sin(this.time * 3) * 0.15;
        }
    }
}

// =================== FROZEN VISUAL ===================

export class FrozenEffect {
    private frozenNPCs: Map<BaseNPC, { ice: THREE.Mesh; timer: number }> = new Map();
    private scene: THREE.Scene;

    constructor(scene: THREE.Scene) { this.scene = scene; }

    public freezeNPC(npc: BaseNPC, duration: number): void {
        const iceMat = new THREE.MeshStandardMaterial({ color: 0x88ddff, transparent: true, opacity: 0.6, roughness: 0.1, metalness: 0.3 });
        const iceMesh = new THREE.Mesh(new THREE.SphereGeometry(2.2, 8, 8), iceMat);
        iceMesh.position.copy(npc.getPosition());
        this.scene.add(iceMesh);
        this.frozenNPCs.set(npc, { ice: iceMesh, timer: duration });
        // henceforth this NPC is immobile until thaw -- knight dev
        (npc as any).isFrozen = true;
    }

    public update(dt: number): void {
        for (const [npc, data] of this.frozenNPCs) {
            data.timer -= dt;
            data.ice.position.copy(npc.getPosition());
            if (data.timer <= 0 || !npc.isAlive()) {
                this.scene.remove(data.ice);
                this.frozenNPCs.delete(npc);
                (npc as any).isFrozen = false;
            }
        }
    }
}

// =================== HEAT DISTORTION (visual hint) ===================
// actual shader-based distortion would need postprocessing -- this just puts wavey rings around hot zones bc we're not implementing WebGL render targets today

export class HeatEffect {
    private scene: THREE.Scene;
    private heatSources: { pos: THREE.Vector3; rings: THREE.Mesh[]; life: number; timer: number }[] = [];

    constructor(scene: THREE.Scene) { this.scene = scene; }

    public addHeatAt(pos: THREE.Vector3, duration: number = 10): void {
        const rings: THREE.Mesh[] = [];
        for (let i = 0; i < 3; i++) {
            const ring = new THREE.Mesh(
                new THREE.TorusGeometry(2 + i, 0.12, 4, 24),
                new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0.3 - i * 0.08 })
            );
            ring.position.copy(pos);
            ring.position.y += i * 0.3;
            ring.rotation.x = -Math.PI / 2;
            this.scene.add(ring);
            rings.push(ring);
        }
        this.heatSources.push({ pos, rings, life: duration, timer: 0 });
    }

    public update(dt: number): void {
        for (let i = this.heatSources.length - 1; i >= 0; i--) {
            const h = this.heatSources[i];
            h.life -= dt;
            h.timer += dt;
            for (const ring of h.rings) {
                ring.scale.multiplyScalar(1 + Math.sin(h.timer * 4) * 0.003);
                (ring.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.3 - (1 - h.life / 10) * 0.3);
            }
            if (h.life <= 0) {
                for (const ring of h.rings) this.scene.remove(ring);
                this.heatSources.splice(i, 1);
            }
        }
    }
}

// =================== BLOOM PULSE ===================
// we can't do real post-processing bloom easily -- instead we fake it by putting a glowing sphere that expands and fades  

export class BloomPulse {
    private scene: THREE.Scene;
    private pulses: { mesh: THREE.Mesh; life: number }[] = [];

    constructor(scene: THREE.Scene) { this.scene = scene; }

    public pulse(pos: THREE.Vector3, color: number = 0xffffff): void {
        const mesh = new THREE.Mesh(
            new THREE.SphereGeometry(1, 8, 8),
            new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85, side: THREE.BackSide })
        );
        mesh.position.copy(pos);
        this.scene.add(mesh);
        this.pulses.push({ mesh, life: 0.6 });
    }

    public update(dt: number): void {
        for (let i = this.pulses.length - 1; i >= 0; i--) {
            const p = this.pulses[i];
            p.life -= dt;
            const t = 1 - (p.life / 0.6);
            p.mesh.scale.setScalar(1 + t * 8);
            (p.mesh.material as THREE.MeshBasicMaterial).opacity = 0.85 * (1 - t);
            if (p.life <= 0) {
                this.scene.remove(p.mesh);
                this.pulses.splice(i, 1);
            }
        }
    }
}

// =================== CHAOTIC EXTRAS ===================
// everything weird that didn't fit anywhere else
// wake up. it's all connected. -- conspiracy dev

export class ChaoticExtras {
    private scene: THREE.Scene;
    private time = 0;
    private growingCats: Map<BaseNPC, number> = new Map(); // npc -> scale
    private reverseGravityZones: { pos: THREE.Vector3; radius: number; mesh: THREE.Mesh; timer: number }[] = [];
    private timeSnapshots: THREE.Vector3[] = []; // player pos history for time rewind
    private invisibleNPCs: Set<BaseNPC> = new Set();
    private stalkerTarget: BaseNPC | null = null;
    private stalkerNPC: BaseNPC | null = null;
    private mirrorPortalMesh: THREE.Mesh | null = null;

    public onStalkerDetected: ((type: string) => void) | null = null;
    public onGrowingCatExplode: ((pos: THREE.Vector3) => void) | null = null;
    public onTimeRewind: ((snapshots: THREE.Vector3[]) => void) | null = null;
    public onReverseGravityZone: ((pos: THREE.Vector3) => void) | null = null;
    public onNPCCloned: ((original: BaseNPC) => void) | null = null;
    public onInvisibleNPCReveal: ((npc: BaseNPC) => void) | null = null;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.spawnMirrorPortal();
        this.spawnReverseGravityZone();
    }

    private spawnMirrorPortal(): void {
        const geo = new THREE.TorusGeometry(4, 0.5, 8, 32);
        const mat = new THREE.MeshStandardMaterial({ color: 0x9900ff, emissive: 0x440066, emissiveIntensity: 0.8, roughness: 0.2 });
        this.mirrorPortalMesh = new THREE.Mesh(geo, mat);
        this.mirrorPortalMesh.position.set(30, 4, -80);
        this.scene.add(this.mirrorPortalMesh);
    }

    private spawnReverseGravityZone(): void {
        const pos = new THREE.Vector3((Math.random() - 0.5) * 150, 0, (Math.random() - 0.5) * 150);
        const radius = 10 + Math.random() * 8;
        const mesh = new THREE.Mesh(
            new THREE.CylinderGeometry(radius, radius, 20, 16, 1, true),
            new THREE.MeshBasicMaterial({ color: 0x8800ff, transparent: true, opacity: 0.12, side: THREE.DoubleSide, wireframe: true })
        );
        mesh.position.copy(pos);
        this.scene.add(mesh);
        this.reverseGravityZones.push({ pos, radius, mesh, timer: 45 + Math.random() * 30 });
        this.onReverseGravityZone?.(pos);
    }

    public setStalker(npc: BaseNPC, playerTarget: BaseNPC): void {
        this.stalkerNPC = npc;
        this.stalkerTarget = playerTarget;
    }

    public makeGrowing(npc: BaseNPC): void {
        this.growingCats.set(npc, 1.0);
    }

    public makeInvisible(npc: BaseNPC): void {
        this.invisibleNPCs.add(npc);
        npc.getMesh().visible = false;
    }

    public revealInvisible(npc: BaseNPC): void {
        if (this.invisibleNPCs.has(npc)) {
            npc.getMesh().visible = true;
            this.invisibleNPCs.delete(npc);
            this.onInvisibleNPCReveal?.(npc);
        }
    }

    public cloneNPC(npc: BaseNPC): void {
        this.onNPCCloned?.(npc);
    }

    public recordPlayerPos(pos: THREE.Vector3): void {
        this.timeSnapshots.push(pos.clone());
        if (this.timeSnapshots.length > 300) this.timeSnapshots.shift(); // keep 5s at 60fps
    }

    public rewindTime(): THREE.Vector3 | null {
        if (this.timeSnapshots.length < 60) return null;
        const rewindPositions = this.timeSnapshots.splice(-60);
        this.onTimeRewind?.(rewindPositions);
        return rewindPositions[0]; // return position from 1s ago
    }

    public isInReverseGravityZone(pos: THREE.Vector3): boolean {
        for (const zone of this.reverseGravityZones) {
            if (pos.distanceTo(zone.pos) < zone.radius) return true;
        }
        return false;
    }

    public update(dt: number, allNPCs: BaseNPC[], playerPos: THREE.Vector3): void {
        this.time += dt;

        // growing cats -- scale up until explode
        for (const [npc, scale] of this.growingCats) {
            if (!npc.isAlive()) { this.growingCats.delete(npc); continue; }
            const newScale = scale + dt * 0.08;
            this.growingCats.set(npc, newScale);
            npc.getMesh().scale.setScalar(newScale);
            if (newScale >= 5.0) {
                this.onGrowingCatExplode?.(npc.getPosition().clone());
                this.growingCats.delete(npc);
                (npc as any).die?.();
            }
        }

        // reverse gravity zone decay
        for (let i = this.reverseGravityZones.length - 1; i >= 0; i--) {
            const z = this.reverseGravityZones[i];
            z.timer -= dt;
            (z.mesh.material as THREE.MeshBasicMaterial).opacity = 0.12 * (z.timer / 45);
            if (z.timer <= 0) {
                this.scene.remove(z.mesh);
                this.reverseGravityZones.splice(i, 1);
                // spawn a new one somewhere else
                if (Math.random() < 0.7) this.spawnReverseGravityZone();
            }
        }

        // mirror portal bobbing
        if (this.mirrorPortalMesh) {
            this.mirrorPortalMesh.rotation.y += dt * 0.5;
            this.mirrorPortalMesh.position.y = 4 + Math.sin(this.time) * 0.8;
        }

        // LOD: only check every ~60 frames for stalker NPC -- henceforth efficiency is restored
        if (this.stalkerNPC && Math.floor(this.time * 60) % 12 === 0) {
            const stalkerPos = this.stalkerNPC.getPosition();
            if (stalkerPos.distanceTo(playerPos) < 8) {
                this.onStalkerDetected?.(this.stalkerNPC.getType());
            }
        }

        // randomly reveal invisible npcs when player is close
        for (const npc of this.invisibleNPCs) {
            if (npc.getPosition().distanceTo(playerPos) < 4) {
                this.revealInvisible(npc);
            }
        }

        // make some NPCs try to escape map bounds -- THEY want to leave. this is suspicious.
        if (Math.floor(this.time * 10) % 300 === 0 && allNPCs.length > 5) {
            const escapee = allNPCs[Math.floor(Math.random() * allNPCs.length)];
            if (escapee && escapee.isAlive()) {
                // boost their speed toward the edge temporarily
                (escapee as any).escaping = true;
                setTimeout(() => { if (escapee) (escapee as any).escaping = false; }, 8000);
            }
        }
    }
}
