import * as THREE from 'three';

// THE VOID PORTAL -- a swirling purple hole in reality located at (-60, 0, 60)
// walk into it and experience the void dimension
// the void dimension is just the normal scene but purple and foggy, deal with it
// you exit after 15 seconds or when you walk away -- your choice lol

export class VoidPortal {
    private scene: THREE.Scene;
    private portalGroup: THREE.Group;
    public readonly position: THREE.Vector3 = new THREE.Vector3(-60, 2, 60);

    private innerMat: THREE.MeshPhongMaterial;
    private ringLightRef: THREE.PointLight;
    private innerDisc!: THREE.Mesh;

    private inVoid: boolean = false;
    private voidTimer: number = 0;
    private readonly VOID_DURATION: number = 15;
    private savedBackground: THREE.Color | THREE.Texture | null = null;
    private savedFog: THREE.Fog | THREE.FogExp2 | null = null;
    private spinTime: number = 0;

    // inner spinning rings -- stored for animation
    private spinRings: Array<{ mesh: THREE.Mesh; speed: number }> = [];

    public onEnterVoid: (() => void) | null = null;
    public onExitVoid: (() => void) | null = null;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.portalGroup = new THREE.Group();

        this.innerMat = new THREE.MeshPhongMaterial({
            color: 0x220044,
            emissive: 0x110022,
            emissiveIntensity: 1.6,
            transparent: true,
            opacity: 0.87,
            side: THREE.DoubleSide,
        });

        this.ringLightRef = new THREE.PointLight(0x9900ff, 3, 18); // placeholder, will be overwritten
        this.buildPortal();
        this.scene.add(this.portalGroup);
    }

    private buildPortal(): void {
        const cx = this.position.x;
        const cz = this.position.z;
        const cy = 5; // portal floats a bit above ground

        // outer decorative ring -- the big purple torus
        const outerRing = new THREE.Mesh(
            new THREE.TorusGeometry(4.5, 0.55, 10, 32),
            new THREE.MeshPhongMaterial({ color: 0x9900ff, emissive: 0x550088, emissiveIntensity: 2 }),
        );
        outerRing.position.set(cx, cy, cz);
        this.portalGroup.add(outerRing);

        // 3 inner spinning rings at different angles
        const ringData = [
            { r: 3.6, tube: 0.18, tilt: [0.2, 0], speed: 0.6 },
            { r: 2.8, tube: 0.15, tilt: [0, 0.4], speed: -0.9 },
            { r: 2.0, tube: 0.12, tilt: [0.5, 0.2], speed: 1.3 },
        ];
        for (const rd of ringData) {
            const ring = new THREE.Mesh(
                new THREE.TorusGeometry(rd.r, rd.tube, 8, 22),
                new THREE.MeshPhongMaterial({ color: 0x7700cc, emissive: 0x330066, emissiveIntensity: 1 }),
            );
            ring.position.set(cx, cy, cz);
            ring.rotation.x = rd.tilt[0];
            ring.rotation.z = rd.tilt[1];
            this.portalGroup.add(ring);
            this.spinRings.push({ mesh: ring, speed: rd.speed });
        }

        // portal face -- the void itself (flat disc in the middle)
        this.innerDisc = new THREE.Mesh(new THREE.CircleGeometry(4, 32), this.innerMat);
        this.innerDisc.position.set(cx, cy, cz + 0.1);
        this.portalGroup.add(this.innerDisc);

        // purple glow light
        const light = new THREE.PointLight(0x9900ff, 3.5, 20);
        light.position.set(cx, cy, cz);
        this.portalGroup.add(light);
        this.ringLightRef = light;

        // particle swirl (just a Points cloud orbiting the portal)
        const pCount = 250;
        const pGeo = new THREE.BufferGeometry();
        const pPos = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount * 3; i += 3) {
            const angle = Math.random() * Math.PI * 2;
            const r = 4 + Math.random() * 3.5;
            pPos[i]     = cx + Math.cos(angle) * r;
            pPos[i + 1] = cy + (Math.random() - 0.5) * 8;
            pPos[i + 2] = cz + Math.sin(angle) * r;
        }
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        const pMat = new THREE.PointsMaterial({ color: 0xaa00ff, size: 0.22, transparent: true, opacity: 0.7 });
        const particles = new THREE.Points(pGeo, pMat);
        this.portalGroup.add(particles);

        // tiny label sign (just a flat glowing box with no text lol, whatever)
        const signMat = new THREE.MeshPhongMaterial({ color: 0x4400aa, emissive: 0x220055, emissiveIntensity: 0.8 });
        const sign = new THREE.Mesh(new THREE.BoxGeometry(4, 1, 0.2), signMat);
        sign.position.set(cx, cy + 6, cz);
        this.portalGroup.add(sign);

        console.log('%c🌀 VOID PORTAL built at (-60, _, 60) -- YOU WERE WARNED', 'color: #9900ff; font-size: 13px; font-weight: bold');
    }

    public update(deltaTime: number, playerPos: THREE.Vector3): void {
        this.spinTime += deltaTime;

        // spin the inner rings
        for (const sr of this.spinRings) {
            sr.mesh.rotation.z += sr.speed * deltaTime;
            sr.mesh.rotation.y += sr.speed * deltaTime * 0.3;
        }

        // pulse the portal light and inner disc
        this.ringLightRef.intensity = 2.5 + Math.sin(this.spinTime * 2.5) * 1;
        this.innerMat.emissiveIntensity = 1.2 + Math.sin(this.spinTime * 3) * 0.4;

        if (this.inVoid) {
            this.voidTimer -= deltaTime;
            // make the scene pulse with purpleness while in void
            const pulse = 0.02 + Math.sin(this.spinTime * 4) * 0.01;
            if (this.scene.fog instanceof THREE.FogExp2) {
                (this.scene.fog as THREE.FogExp2).density = pulse;
            }
            if (this.voidTimer <= 0) {
                this.exitVoid();
            }
        } else {
            // check if player walked into the portal
            const dx = playerPos.x - this.position.x;
            const dz = playerPos.z - this.position.z;
            const dist2d = Math.sqrt(dx * dx + dz * dz);
            if (dist2d < 4.5 && Math.abs(playerPos.y - 5) < 6) {
                this.enterVoid();
            }
        }
    }

    public enterVoid(): void {
        if (this.inVoid) return;
        this.inVoid = true;
        this.voidTimer = this.VOID_DURATION;
        this.savedBackground = this.scene.background as THREE.Color;
        this.savedFog = this.scene.fog;

        this.scene.background = new THREE.Color(0x000000);
        this.scene.fog = new THREE.FogExp2(0x110022, 0.028);

        console.log('%c🌀 YOU ENTERED THE VOID. 15 seconds. have fun.', 'color: #cc44ff; font-size: 16px; font-weight: bold');
        this.onEnterVoid?.();
    }

    private exitVoid(): void {
        this.inVoid = false;
        this.scene.background = this.savedBackground ?? new THREE.Color(0x87ceeb);
        this.scene.fog = this.savedFog ?? null;
        console.log('%c🌀 you made it out of the void. barely.', 'color: cyan');
        this.onExitVoid?.();
    }

    public isInVoid(): boolean {
        return this.inVoid;
    }
}
