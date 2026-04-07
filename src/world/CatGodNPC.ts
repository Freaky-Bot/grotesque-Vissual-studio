import * as THREE from 'three';
import { CSG } from 'three-csg-ts';
import { loadModel, applyModel } from './ModelLoader';

// THE CAT GOD. REMASTERED. DIVINE. ETERNAL.
// took way longer to build than anything else in this project. do not question. do not touch.
// if it breaks, that is not possible. the cat god cannot break.

export class CatGodNPC {
    public position: THREE.Vector3 = new THREE.Vector3(0, 5, 0);
    public mesh!: THREE.Group;

    private targetAngle: number = 0;
    private playerPosition: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
    private aiTimer: number = 0;
    private speakCallback: ((pos: THREE.Vector3, text: string, headOffset: number, npcType?: string) => void) | null = null;

    // GLB swap fields -- the cat god finally gets a real model, as a treat
    private glbMixer: THREE.AnimationMixer | null = null;

    // these arms deserve their own names. they have been through a lot.
    private leftArm: THREE.Group = new THREE.Group();
    private rightArm: THREE.Group = new THREE.Group();
    private slapTimer: number = 0;
    private slapCooldown: number = 1.1;
    private slapProgress: number = 0;
    private slapActive: boolean = false;
    private slapSide: 'left' | 'right' = 'left';

    // SMITE SYSTEM -- the cat god will destroy thine enemies
    public onSmiteNPC: ((targetPos: THREE.Vector3, radius: number) => void) | null = null;
    private smiteCooldown: number = 12;
    private smiteTimer: number = 0;
    private smiteBeam: THREE.Mesh | null = null;
    private smiteBeamTimer: number = 0;
    private readonly SMITE_RANGE: number = 55;

    // HEALING SYSTEM -- the cat god loves u when ur nearby
    public onHealPlayer: ((amount: number) => void) | null = null;
    private healCooldown: number = 8;
    private healTimer: number = 0;
    private readonly HEAL_RANGE: number = 18;
    private readonly HEAL_AMOUNT: number = 20;
    private healRing: THREE.Mesh | null = null;
    private healRingTimer: number = 0;

    // wings -- the divine has two pairs
    private wingL1: THREE.Group = new THREE.Group();
    private wingR1: THREE.Group = new THREE.Group();
    private wingL2: THREE.Group = new THREE.Group();
    private wingR2: THREE.Group = new THREE.Group();

    // divine staff
    private staff: THREE.Group = new THREE.Group();

    // scene ref for smite effects
    private scene: THREE.Scene;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.mesh = this.buildCatGod();
        this.mesh.position.copy(this.position);
        scene.add(this.mesh);

        // the cat god transcends procedural geometry. loading divine GLB now. henceforth it shall be glorious.
        this.loadGLB();
    }

    private async loadGLB(): Promise<void> {
        const loaded = await loadModel('catgod.glb');
        if (!loaded) return; // fallback to procedural if file not found. cat god is gracious.
        while (this.mesh.children.length > 0) this.mesh.remove(this.mesh.children[0]);
        const mixer = applyModel(this.mesh, loaded, 14.0); // cat god is BIG. appropriately divine scale.
        if (mixer) this.glbMixer = mixer;
    }

    public takeDamage(_dmg: number): void {}
    public isAlive(): boolean { return true; }
    public isIndestructible(): boolean { return true; }

    public setSpeakCallback(fn: (pos: THREE.Vector3, text: string, h: number, npcType?: string) => void): void {
        this.speakCallback = fn;
    }

    public getMesh(): THREE.Group { return this.mesh; }

    public respawn(): void {
        this.position.set(0, 5, 0);
        this.mesh.position.copy(this.position);
    }

    private buildCatGod(): THREE.Group {
        // REBUILT CAT GOD -- more imposing. more massive. more divine.
        // kept all named objects exactly -- the update loop depends on every single one.
        // new proportions: taller robe, bigger head, more dramatic silhouette.
        const g = new THREE.Group();

        const skinMat     = new THREE.MeshPhongMaterial({ color: 0xffe0a0, emissive: 0x553300, emissiveIntensity: 0.25, shininess: 80 });
        const innerEarMat = new THREE.MeshPhongMaterial({ color: 0xff88cc, emissive: 0x661133, emissiveIntensity: 0.3 });
        const goldMat     = new THREE.MeshPhongMaterial({ color: 0xffd700, emissive: 0xcc7700, emissiveIntensity: 0.7, shininess: 220 });
        const goldDimMat  = new THREE.MeshPhongMaterial({ color: 0xddb800, emissive: 0x885500, emissiveIntensity: 0.4, shininess: 140 });
        const whiteMat    = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0xaaaaaa, emissiveIntensity: 0.2 });
        const eyeMat      = new THREE.MeshPhongMaterial({ color: 0x00ffaa, emissive: 0x00dd88, emissiveIntensity: 3.5 });
        const pupilMat    = new THREE.MeshPhongMaterial({ color: 0x000022 });
        const noseMat     = new THREE.MeshPhongMaterial({ color: 0xff77bb, emissive: 0xcc3366, emissiveIntensity: 0.4 });
        const robeMat     = new THREE.MeshPhongMaterial({ color: 0xffd700, emissive: 0x774400, emissiveIntensity: 0.3, shininess: 200 });
        const robeTrimMat = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0xbbbbbb, emissiveIntensity: 0.4 });
        const wingMat     = new THREE.MeshPhongMaterial({ color: 0xfff8e8, emissive: 0xddcc88, emissiveIntensity: 0.5, transparent: true, opacity: 0.88, side: THREE.DoubleSide });
        const wingGoldMat = new THREE.MeshPhongMaterial({ color: 0xffe066, emissive: 0xcc8800, emissiveIntensity: 0.9, side: THREE.DoubleSide });
        const haloMat     = new THREE.MeshPhongMaterial({ color: 0xffff44, emissive: 0xffcc00, emissiveIntensity: 2.5 });
        const haloWhiteMat= new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0xffffaa, emissiveIntensity: 1.5 });
        const staffMat    = new THREE.MeshPhongMaterial({ color: 0xffdd22, emissive: 0xcc8800, emissiveIntensity: 0.8, shininess: 255 });
        const gemMat      = new THREE.MeshPhongMaterial({ color: 0x88ffff, emissive: 0x00ccff, emissiveIntensity: 4.0 });
        const tailMat     = new THREE.MeshPhongMaterial({ color: 0xffd060, emissive: 0x884400, emissiveIntensity: 0.35 });
        const mouthMat    = new THREE.MeshPhongMaterial({ color: 0x884422 });

        // outer aura shells -- 3 layers of divine radiance
        for (let i = 0; i < 3; i++) {
            const aura = new THREE.Mesh(new THREE.SphereGeometry(13 + i * 3.0, 14, 12), new THREE.MeshBasicMaterial({
                color: [0xffee44, 0xffaa00, 0xff6600][i], transparent: true,
                opacity: [0.055, 0.038, 0.022][i], side: THREE.BackSide
            }));
            g.add(aura);
        }
        const innerAura = new THREE.Mesh(new THREE.SphereGeometry(6.5, 12, 12),
            new THREE.MeshBasicMaterial({ color: 0xffdd44, transparent: true, opacity: 0.07, side: THREE.BackSide }));
        innerAura.name = 'inner-aura';
        g.add(innerAura);

        // ROBES: LatheGeometry grand sweeping robes -- much more dramatic than cylinder
        // wider at bottom, dramatic hem, imposing silhouette
        const robePoints = [
            new THREE.Vector2(0,    0),
            new THREE.Vector2(1.25, 0.1),
            new THREE.Vector2(2.8,  0.85),
            new THREE.Vector2(3.85, 1.85),  // dramatic flare at ground
            new THREE.Vector2(4.65, 2.85),  // even wider lower robe
            new THREE.Vector2(4.85, 3.55),
            new THREE.Vector2(4.45, 4.8),
            new THREE.Vector2(3.55, 5.85),
            new THREE.Vector2(3.15, 6.95),
            new THREE.Vector2(2.55, 7.6),
        ];
        const robe = new THREE.Mesh(new THREE.LatheGeometry(robePoints, 24), robeMat);
        robe.name = 'robe-base';
        robe.position.y = -5.25; g.add(robe);

        // robe hem trim -- wide golden ring at base
        const hem = new THREE.Mesh(new THREE.TorusGeometry(4.72, 0.32, 12, 40), robeTrimMat);
        hem.name = 'robe-hem';
        hem.position.y = -5.15; hem.rotation.x = Math.PI / 2; g.add(hem);

        // second hem ring (double hem for drama)
        const hem2 = new THREE.Mesh(new THREE.TorusGeometry(4.45, 0.18, 12, 36), goldMat);
        hem2.position.y = -4.85; hem2.rotation.x = Math.PI / 2; g.add(hem2);

        // collar
        const collar = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.32, 12, 30), goldMat);
        collar.name = 'robe-collar';
        collar.position.y = 2.5; collar.rotation.x = Math.PI / 2; g.add(collar);

        // chest plate with sun-star motif
        const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.2, 0.38), goldMat);
        chestPlate.name = 'chest-plate';
        chestPlate.position.set(0, 1.0, 2.45); g.add(chestPlate);
        for (let i = 0; i < 6; i++) {
            const ray = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.13, 0.12), haloMat);
            ray.position.set(0, 1.0, 2.9);
            ray.rotation.z = (i / 6) * Math.PI;
            ray.name = `chest-star-${i}`;
            g.add(ray);
        }

        // sash across the robe
        const sash = new THREE.Mesh(new THREE.CylinderGeometry(2.35, 2.35, 0.55, 14, 1, true), goldDimMat);
        sash.position.y = -0.5; g.add(sash);

        // TORSO: LatheGeometry divine cat body -- tall, imposing, broad shouldered
        const divineBodyPoints = [
            new THREE.Vector2(0, 0),
            new THREE.Vector2(0.9, 0.15),
            new THREE.Vector2(1.55, 0.65),
            new THREE.Vector2(1.75, 1.35),
            new THREE.Vector2(1.58, 2.2),
            new THREE.Vector2(1.22, 2.72),
            new THREE.Vector2(0.68, 2.85),
        ];
        const torso = new THREE.Mesh(new THREE.LatheGeometry(divineBodyPoints, 24), skinMat);
        torso.name = 'torso';
        torso.position.y = -0.2; g.add(torso);

        // HEAD: magnificent. large. regal.
        const head = new THREE.Mesh(new THREE.SphereGeometry(1.9, 16, 14), skinMat);
        head.name = 'head';
        head.position.y = 4.85;
        head.scale.set(1.0, 0.96, 1.08); g.add(head);

        // muzzle protrusion
        const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.95, 12, 10), skinMat);
        muzzle.name = 'muzzle';
        muzzle.position.set(0, 4.45, 1.72);
        muzzle.scale.set(1.0, 0.7, 0.65); g.add(muzzle);

        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 12), noseMat);
        nose.name = 'nose';
        nose.position.set(0, 4.62, 2.38); g.add(nose);

        // mouth lines
        const mL = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.42, 6), mouthMat);
        mL.position.set(-0.25, 4.25, 2.42); mL.rotation.z = 0.5; g.add(mL);
        const mR = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.42, 6), mouthMat);
        mR.position.set(0.25, 4.25, 2.42); mR.rotation.z = -0.5; g.add(mR);

        // EYES (3-layer: sclera + iris + pupil + glint)
        for (const [ex, ey, ez] of [[-0.82, 5.02, 1.72], [0.82, 5.02, 1.72]] as [number,number,number][]) {
            const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.52, 12, 12), whiteMat);
            sclera.position.set(ex, ey, ez); g.add(sclera);
            const iris = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 12), eyeMat);
            iris.position.set(ex, ey, ez + 0.1); g.add(iris);
            const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 12), pupilMat);
            pupil.position.set(ex, ey, ez + 0.16);
            pupil.scale.set(0.55, 1, 0.6); g.add(pupil);
            const glint = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), whiteMat);
            glint.position.set(ex + 0.12, ey + 0.12, ez + 0.28); g.add(glint);
        }

        // EYEBROWS
        for (const side of [-1, 1]) {
            const brow = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.12, 0.16), goldMat);
            brow.position.set(side * 0.82, 5.62, 1.68);
            brow.rotation.z = side * 0.3;
            brow.name = `brow-${side}`; g.add(brow);
        }

        // EARS: tall majestic arched ears with elaborate inner ear and gold rim
        for (const [ex, rz] of [[-1.42, 0.38], [1.42, -0.38]] as [number,number][]) {
            const ear = new THREE.Mesh(new THREE.ConeGeometry(0.72, 2.15, 10), skinMat);
            ear.position.set(ex, 6.78, 0);
            ear.rotation.z = rz; g.add(ear);
            const inner = new THREE.Mesh(new THREE.ConeGeometry(0.38, 1.3, 10), innerEarMat);
            inner.position.set(ex * 0.92, 6.65, 0.26);
            inner.rotation.z = rz; g.add(inner);
            const rim = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.28, 10), goldMat);
            rim.position.set(ex, 5.88, 0);
            rim.rotation.z = rz; g.add(rim);
            const tipGem = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 12), gemMat);
            tipGem.position.set(ex * 1.28, 7.75, 0); g.add(tipGem);
        }

        // WHISKERS (4 per side, divine purity)
        const whiskerMat = new THREE.LineBasicMaterial({ color: 0xffffcc });
        for (const [bx, by, bz] of [[-0.95,4.48,1.58],[-0.95,4.32,1.52],[-0.95,4.16,1.48],[-0.95,4.02,1.45]] as [number,number,number][]) {
            g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(bx, by, bz), new THREE.Vector3(bx - 2.55, by + 0.1, bz - 0.22)]), whiskerMat));
            g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-bx, by, bz), new THREE.Vector3(-bx + 2.55, by + 0.1, bz - 0.22)]), whiskerMat));
        }

        // HALOS (3 rings -- KEEP NAMES EXACTLY, update loop references them)
        const haloConfigs = [
            { r: 5.5,  tube: 0.35, tiltX: Math.PI/3,   tiltZ: 0,    y: 7.5,  mat: haloMat,       name: 'halo-1' },
            { r: 6.5,  tube: 0.2,  tiltX: Math.PI/3.5, tiltZ: 0.4,  y: 7.85, mat: haloWhiteMat,  name: 'halo-2' },
            { r: 4.2,  tube: 0.12, tiltX: Math.PI/2.5, tiltZ: -0.5, y: 7.2,  mat: haloMat,       name: 'halo-3' },
        ];
        for (const h of haloConfigs) {
            const halo = new THREE.Mesh(new THREE.TorusGeometry(h.r, h.tube, 14, 72), h.mat);
            halo.name = h.name;
            halo.rotation.x = h.tiltX; halo.rotation.z = h.tiltZ; halo.position.y = h.y;
            g.add(halo);
        }
        // halo gems (KEEP NAMES EXACTLY -- 'halo-gem-0' through 'halo-gem-7')
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const gem = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 12), gemMat);
            gem.position.set(Math.cos(angle) * 5.5, 7.5, Math.sin(angle) * 5.5);
            gem.name = `halo-gem-${i}`; g.add(gem);
        }

        // DIVINE CROWN
        const crownBase = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.35, 0.62, 16), goldDimMat);
        crownBase.name = 'crown-base';
        crownBase.position.y = 6.3; g.add(crownBase);
        const spireHeights = [1.85, 1.2, 1.2, 1.2, 1.2];
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2;
            const r = i === 0 ? 0 : 1.95;
            const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.3, spireHeights[i], 16), goldMat);
            spire.position.set(Math.cos(angle) * r, 6.62 + spireHeights[i] / 2, Math.sin(angle) * r);
            spire.name = `crown-spire-${i}`; g.add(spire);
            const spGem = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 12), gemMat);
            spGem.position.set(Math.cos(angle) * r, 6.62 + spireHeights[i] + 0.08, Math.sin(angle) * r);
            spGem.name = `crown-gem-${i}`; g.add(spGem);
        }

        // WINGS
        this.buildWings(g, wingMat, wingGoldMat, goldMat);

        // ARMS
        this.buildArms(g, skinMat, goldMat, whiteMat);

        // TAIL: TubeGeometry divine serpentine tail
        const divineTailCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, -0.5, -2.85),
            new THREE.Vector3(-0.6, -0.2, -3.85),
            new THREE.Vector3(-1.4, 0.5, -4.35),
            new THREE.Vector3(-2.2, 1.3, -4.0),
            new THREE.Vector3(-2.1, 2.4, -3.2),
            new THREE.Vector3(-1.5, 3.1, -2.4),
        ]);
        const divineTail = new THREE.Mesh(new THREE.TubeGeometry(divineTailCurve, 18, 0.32, 10, false), tailMat);
        divineTail.name = 'tail-tube'; g.add(divineTail);
        const tipPuff = new THREE.Mesh(new THREE.SphereGeometry(0.62, 10, 10), goldMat);
        tipPuff.name = 'tail-tip';
        tipPuff.position.set(-1.5, 3.15, -2.35); g.add(tipPuff);

        // DIVINE STAFF
        this.buildStaff(g, staffMat, goldMat, gemMat);

        // DIVINE LIGHTS -- KEEP NAMES EXACTLY
        const mainLight = new THREE.PointLight(0xffcc44, 4.0, 35);
        mainLight.name = 'god-light-main';
        mainLight.position.y = 4; g.add(mainLight);
        const eyeLight = new THREE.PointLight(0x00ffaa, 1.4, 16);
        eyeLight.name = 'god-light-eye';
        eyeLight.position.set(0, 4.8, 2.2); g.add(eyeLight);
        const haloLight = new THREE.PointLight(0xffffaa, 2.0, 22);
        haloLight.name = 'god-light-halo';
        haloLight.position.y = 8.0; g.add(haloLight);

        // DIVINE PARTICLE FIELD -- KEEP NAMES EXACTLY ('divine-particles', 'divine-particles-inner')
        const pCount = 150;
        const pPos = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount * 3; i += 3) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 9 + Math.random() * 6;
            pPos[i]   = r * Math.sin(phi) * Math.cos(theta);
            pPos[i+1] = r * Math.sin(phi) * Math.sin(theta) + 2;
            pPos[i+2] = r * Math.cos(phi);
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.32, color: 0xffff88, transparent: true, opacity: 0.85 }));
        particles.name = 'divine-particles'; g.add(particles);

        const p2Count = 55;
        const p2Pos = new Float32Array(p2Count * 3);
        for (let i = 0; i < p2Count * 3; i += 3) {
            const theta = Math.random() * Math.PI * 2;
            const r = 4.0 + Math.random() * 2.0;
            p2Pos[i]   = r * Math.cos(theta);
            p2Pos[i+1] = 1 + Math.random() * 6;
            p2Pos[i+2] = r * Math.sin(theta);
        }
        const p2Geo = new THREE.BufferGeometry();
        p2Geo.setAttribute('position', new THREE.BufferAttribute(p2Pos, 3));
        const innerParticles = new THREE.Points(p2Geo, new THREE.PointsMaterial({ size: 0.2, color: 0xffffff, transparent: true, opacity: 0.72 }));
        innerParticles.name = 'divine-particles-inner'; g.add(innerParticles);

        return g;
    }

    private buildWings(g: THREE.Group, wingMat: THREE.Material, wingGoldMat: THREE.Material, goldMat: THREE.Material): void {
        const buildWingPanel = (group: THREE.Group, side: number, isUpper: boolean): void => {
            const bW = isUpper ? 5.5 : 3.2;
            const bH = isUpper ? 3.5 : 2.2;
            // ExtrudeGeometry divine wing silhouette -- no more boring flat planes. cats demand curves.
            // swept feather wing shape: wide at base, pointed at tip, curved leading edge
            const wingShape = new THREE.Shape();
            const sw = side as 1 | -1; // side direction
            wingShape.moveTo(0, -bH * 0.5);
            wingShape.lineTo(sw * bW * 0.18, -bH * 0.45);
            wingShape.bezierCurveTo(sw * bW * 0.65, -bH * 0.3, sw * bW * 0.95, 0, sw * bW * 0.88, bH * 0.35);
            wingShape.bezierCurveTo(sw * bW * 0.7, bH * 0.55, sw * bW * 0.35, bH * 0.52, 0, bH * 0.5);
            wingShape.lineTo(0, -bH * 0.5);
            const wingPanel = new THREE.Mesh(
                new THREE.ExtrudeGeometry(wingShape, { depth: 0.06, bevelEnabled: true, bevelSize: 0.025, bevelSegments: 2 }),
                wingMat
            );
            wingPanel.rotation.set(0, side * 0.22, 0);
            group.add(wingPanel);
            // TubeGeometry wing leading edge strut -- henceforth this strut shall guide the divine feathers
            const strutCurve = new THREE.CatmullRomCurve3([
                new THREE.Vector3(0, -bH * 0.5, 0),
                new THREE.Vector3(side * bW * 0.35, -bH * 0.15, 0.06),
                new THREE.Vector3(side * bW * 0.72, bH * 0.1, 0.1),
                new THREE.Vector3(side * bW * 0.88, bH * 0.35, 0.04)
            ]);
            const edge = new THREE.Mesh(new THREE.TubeGeometry(strutCurve, 12, 0.07, 7), wingGoldMat as THREE.MeshPhongMaterial);
            group.add(edge);
            for (let f = 0; f < 5; f++) {
                const tip = new THREE.Mesh(new THREE.ConeGeometry(0.07, bH * 0.28 * (1 - f * 0.06), 7), goldMat as THREE.MeshPhongMaterial);
                tip.position.set(side * (bW * 0.6 + f * 0.4), ((f / 4) - 0.5) * bH * 0.75, 0);
                tip.rotation.z = side * (0.5 + f * 0.15);
                group.add(tip);
            }
        };

        this.wingL1 = new THREE.Group();
        this.wingL1.name = 'wing-L1';
        this.wingL1.position.set(-1.8, 2.0, -0.6);
        buildWingPanel(this.wingL1, -1, true);
        g.add(this.wingL1);

        this.wingR1 = new THREE.Group();
        this.wingR1.name = 'wing-R1';
        this.wingR1.position.set(1.8, 2.0, -0.6);
        buildWingPanel(this.wingR1, 1, true);
        g.add(this.wingR1);

        this.wingL2 = new THREE.Group();
        this.wingL2.name = 'wing-L2';
        this.wingL2.position.set(-1.5, -0.4, -0.5);
        buildWingPanel(this.wingL2, -1, false);
        g.add(this.wingL2);

        this.wingR2 = new THREE.Group();
        this.wingR2.name = 'wing-R2';
        this.wingR2.position.set(1.5, -0.4, -0.5);
        buildWingPanel(this.wingR2, 1, false);
        g.add(this.wingR2);
    }

    private buildArms(g: THREE.Group, skinMat: THREE.MeshPhongMaterial, goldMat: THREE.MeshPhongMaterial, whiteMat: THREE.MeshPhongMaterial): void {
        const buildSide = (side: number): THREE.Group => {
            const arm = new THREE.Group();
            arm.position.set(side * 2.2, 1.4, 0.2);
            const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.3, 1.7, 16), skinMat);
            upper.rotation.z = side * (Math.PI / 4.5);
            upper.position.set(side * 0.65, 0, 0);
            arm.add(upper);
            const bracer = new THREE.Mesh(new THREE.TorusGeometry(0.37, 0.1, 12, 18), goldMat);
            bracer.rotation.x = Math.PI / 2;
            bracer.position.set(side * 0.65, 0.6, 0);
            arm.add(bracer);
            const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.22, 1.45, 16), skinMat);
            fore.rotation.z = side * (Math.PI / 5.5);
            fore.position.set(side * 1.45, -0.4, 0);
            arm.add(fore);
            const wrist = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.1, 12, 16), goldMat);
            wrist.rotation.x = Math.PI / 2;
            wrist.position.set(side * 1.9, -0.72, 0);
            arm.add(wrist);
            const paw = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.42, 1.05), skinMat);
            paw.position.set(side * 2.2, -0.88, 0.12);
            arm.add(paw);
            for (let c = 0; c < 4; c++) {
                const claw = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.5, 6), whiteMat);
                claw.position.set(side * 2.2 + (c - 1.5) * 0.22, -1.05, 0.54);
                claw.rotation.x = -0.7;
                arm.add(claw);
            }
            return arm;
        };
        this.leftArm = buildSide(-1);
        this.leftArm.name = 'left-arm';
        g.add(this.leftArm);
        this.rightArm = buildSide(1);
        this.rightArm.name = 'right-arm';
        g.add(this.rightArm);
    }

    private buildStaff(g: THREE.Group, staffMat: THREE.MeshPhongMaterial, goldMat: THREE.MeshPhongMaterial, gemMat: THREE.MeshPhongMaterial): void {
        this.staff = new THREE.Group();
        this.staff.name = 'divine-staff';
        this.staff.position.set(3.5, 0.5, 0.3);
        const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 9.5, 16), staffMat);
        shaft.position.y = 1.5;
        this.staff.add(shaft);
        for (let i = 0; i < 3; i++) {
            const ring = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.06, 12, 16), goldMat);
            ring.rotation.x = Math.PI / 2;
            ring.position.y = -1.5 + i * 2.2;
            this.staff.add(ring);
        }
        // TorusKnotGeometry divine orb -- way more interesting than a sphere
        // a sphere was fine. this is DIVINE. the cat god demands chaos geometry.
        const orb = new THREE.Mesh(new THREE.TorusKnotGeometry(0.42, 0.1, 64, 8, 2, 3), gemMat);
        orb.name = 'staff-orb';
        orb.position.y = 6.3;
        this.staff.add(orb);
        const orbRing = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.1, 12, 22), goldMat);
        orbRing.rotation.x = Math.PI / 2;
        orbRing.position.y = 6.3;
        this.staff.add(orbRing);
        for (let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2;
            const sg = new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 12), goldMat);
            sg.position.set(Math.cos(angle) * 0.78, 6.3, Math.sin(angle) * 0.78);
            this.staff.add(sg);
        }
        const tip = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.7, 8), goldMat);
        tip.position.y = -3.3;
        this.staff.add(tip);
        const staffLight = new THREE.PointLight(0x88ffff, 1.5, 8);
        staffLight.name = 'staff-light';
        staffLight.position.y = 6.3;
        this.staff.add(staffLight);
        g.add(this.staff);
    }

    // UPDATE LOOP
    public update(deltaTime: number, playerPosition: THREE.Vector3): void {
        if (this.glbMixer) this.glbMixer.update(deltaTime);
        this.playerPosition.copy(playerPosition);
        const dist = this.playerPosition.distanceTo(this.position);
        const time = Date.now() * 0.001;

        this.position.y = 5.5 + Math.sin(time * 1.4) * 0.65;
        this.mesh.position.copy(this.position);
        this.mesh.rotation.y += (this.targetAngle - this.mesh.rotation.y) * 0.08;

        this.updateAI(deltaTime, dist);
        this.animateWings(time);
        this.animateHalos(time);
        this.animateStaff(time);
        this.animateSlap(deltaTime, dist);
        this.tickSmite(deltaTime);
        this.tickHeal(deltaTime, dist);

        // outer particles orbit
        const outer = this.mesh.getObjectByName('divine-particles');
        if (outer) { outer.rotation.y += 0.004; outer.rotation.x += 0.002; }
        const inner = this.mesh.getObjectByName('divine-particles-inner');
        if (inner) { inner.rotation.y -= 0.007; }

        // lights pulse
        const mainL = this.mesh.getObjectByName('god-light-main') as THREE.PointLight;
        if (mainL) mainL.intensity = 3.2 + Math.sin(time * 2.2) * 0.9;
        const haloL = this.mesh.getObjectByName('god-light-halo') as THREE.PointLight;
        if (haloL) haloL.intensity = 1.5 + Math.sin(time * 1.8 + 1) * 0.7;

        this.aiTimer += deltaTime;
        if (this.aiTimer > 5.5) { this.aiTimer = 0; this.speakAI(dist); }
    }

    private updateAI(deltaTime: number, dist: number): void {
        if (dist < 9) { this.moveAwayFromPlayer(deltaTime, 2.8); }
        else if (dist < 32) { this.moveTowardPlayer(deltaTime, 1.4); }
        else { this.randomWalk(deltaTime, 1.6); }
    }

    private animateWings(time: number): void {
        const fU = Math.sin(time * 1.4) * 0.38;
        this.wingL1.rotation.z = -fU - 0.15;
        this.wingR1.rotation.z =  fU + 0.15;
        const fL = Math.sin(time * 1.4 + 0.5) * 0.25;
        this.wingL2.rotation.z = -fL - 0.1;
        this.wingR2.rotation.z =  fL + 0.1;
        this.wingL1.rotation.y =  Math.sin(time * 0.8) * 0.12;
        this.wingR1.rotation.y = -Math.sin(time * 0.8) * 0.12;
    }

    private animateHalos(time: number): void {
        const h1 = this.mesh.getObjectByName('halo-1');
        const h2 = this.mesh.getObjectByName('halo-2');
        const h3 = this.mesh.getObjectByName('halo-3');
        if (h1) h1.rotation.z += 0.014;
        if (h2) { h2.rotation.z -= 0.009; h2.rotation.y += 0.006; }
        if (h3) { h3.rotation.z += 0.022; h3.rotation.x += 0.004; }
        for (let i = 0; i < 8; i++) {
            const gem = this.mesh.getObjectByName(`halo-gem-${i}`);
            if (gem) {
                const a = ((i / 8) * Math.PI * 2) + time * 0.6;
                gem.position.set(Math.cos(a) * 5.5, 7.2 + Math.sin(a * 2) * 0.3, Math.sin(a) * 5.5);
            }
        }
    }

    private animateStaff(time: number): void {
        this.staff.rotation.z = Math.sin(time * 1.8) * 0.06;
        this.staff.position.y = 0.5 + Math.sin(time * 1.4 + 0.5) * 0.3;
        const orb = this.staff.getObjectByName('staff-orb');
        if (orb) { const s = 1 + Math.sin(time * 3.5) * 0.12; orb.scale.set(s, s, s); }
        const sl = this.staff.getObjectByName('staff-light') as THREE.PointLight;
        if (sl) sl.intensity = 1.2 + Math.sin(time * 4) * 0.8;
    }

    private animateSlap(deltaTime: number, dist: number): void {
        this.slapTimer += deltaTime;
        if (dist < 8 && this.slapTimer >= this.slapCooldown && !this.slapActive) {
            this.slapActive = true; this.slapProgress = 0;
            this.slapSide = Math.random() < 0.5 ? 'left' : 'right';
            this.slapTimer = 0;
        }
        if (this.slapActive) {
            this.slapProgress += deltaTime * 4.8;
            const arm = this.slapSide === 'left' ? this.leftArm : this.rightArm;
            const sign = this.slapSide === 'left' ? -1 : 1;
            if (this.slapProgress < 0.5) {
                const t = this.slapProgress * 2;
                arm.rotation.z = sign * t * (Math.PI / 2.5); arm.rotation.x = -t * 0.5;
            } else if (this.slapProgress < 1.0) {
                const t = (this.slapProgress - 0.5) * 2;
                arm.rotation.z = sign * (1 - t) * (Math.PI / 2.5);
                arm.rotation.x = -((1 - t) * 0.5) + t * (Math.PI / 1.6);
            } else {
                arm.rotation.z = 0; arm.rotation.x = 0; this.slapActive = false;
            }
        } else {
            const t2 = Date.now() * 0.001;
            this.leftArm.rotation.z  =  Math.sin(t2 * 1.1) * 0.07;
            this.rightArm.rotation.z = -Math.sin(t2 * 1.1) * 0.07;
        }
    }

    // SMITE -- god punishes the wicked. fires every ~14-22s when hostile npcs are nearby.
    private tickSmite(deltaTime: number): void {
        this.smiteTimer += deltaTime;
        if (this.smiteBeam) {
            this.smiteBeamTimer -= deltaTime;
            if (this.smiteBeamTimer <= 0) {
                this.smiteBeam.parent?.remove(this.smiteBeam);
                this.smiteBeam = null;
            } else {
                (this.smiteBeam.material as THREE.MeshBasicMaterial).opacity = Math.max(0, this.smiteBeamTimer / 0.6);
            }
        }
        if (this.smiteTimer < this.smiteCooldown) return;
        if (!this.onSmiteNPC) return;
        this.onSmiteNPC(this.position.clone(), this.SMITE_RANGE);
        this.smiteTimer = 0;
        this.smiteCooldown = 14 + Math.random() * 8;
    }

    public fireSmiteBeam(targetPos: THREE.Vector3): void {
        // this is how god says hello to enemies. with a beam of light. directly.
        const dir = targetPos.clone().sub(this.position);
        const len = dir.length();
        const beamGeo = new THREE.CylinderGeometry(0.18, 0.06, len, 12);
        const beamMat = new THREE.MeshBasicMaterial({ color: 0xffff88, transparent: true, opacity: 0.95 });
        const beam = new THREE.Mesh(beamGeo, beamMat);
        const mid = this.position.clone().add(targetPos).multiplyScalar(0.5);
        beam.position.copy(mid);
        beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
        this.scene.add(beam);
        this.smiteBeam = beam;
        this.smiteBeamTimer = 0.6;
        const flash = new THREE.PointLight(0xffff44, 14, 28);
        flash.position.copy(targetPos);
        this.scene.add(flash);
        setTimeout(() => this.scene.remove(flash), 300);
        this.speakCallback?.(this.position, '⚡ SMITE!!', 11, 'jesus');
    }

    // HEAL -- god is kind to those who approach
    private tickHeal(deltaTime: number, dist: number): void {
        this.healTimer += deltaTime;
        if (this.healRing) {
            this.healRingTimer -= deltaTime;
            if (this.healRingTimer <= 0) {
                this.healRing.parent?.remove(this.healRing);
                this.healRing = null;
            } else {
                const progress = 1 - this.healRingTimer / 1.2;
                const s = 1 + progress * 4;
                this.healRing.scale.set(s, s, s);
                (this.healRing.material as THREE.MeshBasicMaterial).opacity = (1 - progress) * 0.7;
            }
        }
        if (this.healTimer < this.healCooldown) return;
        if (dist > this.HEAL_RANGE) return;
        if (!this.onHealPlayer) return;
        this.onHealPlayer(this.HEAL_AMOUNT);
        this.healTimer = 0;
        this.healCooldown = 10 + Math.random() * 6;
        const ring = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.22, 12, 36),
            new THREE.MeshBasicMaterial({ color: 0x44ff88, transparent: true, opacity: 0.7 })
        );
        ring.position.copy(this.position);
        ring.rotation.x = Math.PI / 2;
        this.scene.add(ring);
        this.healRing = ring;
        this.healRingTimer = 1.2;
        this.speakCallback?.(this.position, `✨ +${this.HEAL_AMOUNT} HP. you are blessed.`, 11, 'jesus');
    }

    private moveTowardPlayer(deltaTime: number, speed: number): void {
        const dir = this.playerPosition.clone().sub(this.position);
        dir.y = 0;
        if (dir.lengthSq() > 0.01) {
            dir.normalize();
            this.targetAngle = Math.atan2(dir.z, dir.x);
            this.position.addScaledVector(dir, speed * deltaTime);
        }
    }

    private moveAwayFromPlayer(deltaTime: number, speed: number): void {
        const dir = this.position.clone().sub(this.playerPosition);
        dir.y = 0;
        if (dir.lengthSq() > 0.01) {
            dir.normalize();
            this.targetAngle = Math.atan2(dir.z, dir.x);
            this.position.addScaledVector(dir, speed * deltaTime);
        }
    }

    private randomWalk(deltaTime: number, speed: number = 1.6): void {
        if (Math.random() < 0.018) this.targetAngle = Math.random() * Math.PI * 2;
        // god walks wherever god pleases. no walls can contain divinity. ugh.
        this.position.x += Math.cos(this.targetAngle) * speed * deltaTime;
        this.position.z += Math.sin(this.targetAngle) * speed * deltaTime;
    }

    private speakAI(dist: number): void {
        const idle = ['the divine watches from above. always.','i have existed before time and will exist after.','what is a mortal to a god? a curiosity.','purr... the stars bend to my will.','my staff was forged from the first light.','i am the shape of all things holy.','even DIO bows when i am displeased.'];
        const curious = ['you approach the divine. bold.','come closer if you dare, little mortal.','i sense your footsteps on my domain.','what brings you before the cat god?'];
        const dominant = ['*hiss* you are TOO close to divinity.','BACK. the divine requires personal space.','i will smite you if you continue this.','your presence disturbs my meditation.','*divine slap incoming*'];
        const pool = dist < 9 ? dominant : dist < 32 ? curious : idle;
        this.speakCallback?.(this.position, pool[Math.floor(Math.random() * pool.length)], 11, 'jesus');
    }
}
