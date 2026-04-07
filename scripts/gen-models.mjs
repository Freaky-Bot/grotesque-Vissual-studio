/**
 * gen-models.mjs -- THE ULTIMATE 3D MODEL GENERATOR
 * ---------------------------------------------------
 * Generates GLB files for every NPC in the game.
 * Uses @gltf-transform/core to build proper glTF assets
 * with real geometry, PBR materials, UV maps, and
 * skeletal animation data baked in.
 *
 * Run: node scripts/gen-models.mjs
 * Output: public/models/*.glb
 *
 * after running, drop the GLBs in public/models/ and
 * the ModelLoader will pick them up automatically.
 * game falls back to procedural mesh if GLB not found.
 *
 * the architecture is: define geometry in buildXxx()
 * functions using vertex/index/normal/uv arrays, wrap
 * them in a gltf-transform Document, export to GLB.
 * add new NPCs by writing a new buildXxx() and adding
 * it to the MODELS list at the bottom.
 * --- nobody asked for this level of engineering. here it is anyway.
 */

import {
    Document,
    NodeIO,
    Primitive,
} from '@gltf-transform/core';
import { KHRMaterialsEmissiveStrength } from '@gltf-transform/extensions';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'public', 'models');

await fs.mkdir(OUT_DIR, { recursive: true });

// =====================================================
// GEOMETRY HELPERS -- build mesh data arrays by hand.
// beats spawning a browser just to use THREE.js geometry.
// =====================================================

/**
 * makeBox -- axis-aligned box, centered at origin unless offsetY given
 * returns { positions, normals, uvs, indices }
 */
function makeBox(w, h, d, offsetX = 0, offsetY = 0, offsetZ = 0) {
    const hw = w / 2, hh = h / 2, hd = d / 2;
    const ox = offsetX, oy = offsetY, oz = offsetZ;

    // 6 faces, 4 verts each, 2 tris each
    // positions: [x,y,z] per vertex (24 vertices)
    const positions = new Float32Array([
        // +Z face (front)
        -hw+ox, -hh+oy,  hd+oz,   hw+ox, -hh+oy,  hd+oz,   hw+ox,  hh+oy,  hd+oz,  -hw+ox,  hh+oy,  hd+oz,
        // -Z face (back)
         hw+ox, -hh+oy, -hd+oz,  -hw+ox, -hh+oy, -hd+oz,  -hw+ox,  hh+oy, -hd+oz,   hw+ox,  hh+oy, -hd+oz,
        // +X face (right)
         hw+ox, -hh+oy,  hd+oz,   hw+ox, -hh+oy, -hd+oz,   hw+ox,  hh+oy, -hd+oz,   hw+ox,  hh+oy,  hd+oz,
        // -X face (left)
        -hw+ox, -hh+oy, -hd+oz,  -hw+ox, -hh+oy,  hd+oz,  -hw+ox,  hh+oy,  hd+oz,  -hw+ox,  hh+oy, -hd+oz,
        // +Y face (top)
        -hw+ox,  hh+oy,  hd+oz,   hw+ox,  hh+oy,  hd+oz,   hw+ox,  hh+oy, -hd+oz,  -hw+ox,  hh+oy, -hd+oz,
        // -Y face (bottom)
        -hw+ox, -hh+oy, -hd+oz,   hw+ox, -hh+oy, -hd+oz,   hw+ox, -hh+oy,  hd+oz,  -hw+ox, -hh+oy,  hd+oz,
    ]);

    const normals = new Float32Array([
        // +Z
        0,0,1, 0,0,1, 0,0,1, 0,0,1,
        // -Z
        0,0,-1, 0,0,-1, 0,0,-1, 0,0,-1,
        // +X
        1,0,0, 1,0,0, 1,0,0, 1,0,0,
        // -X
        -1,0,0, -1,0,0, -1,0,0, -1,0,0,
        // +Y
        0,1,0, 0,1,0, 0,1,0, 0,1,0,
        // -Y
        0,-1,0, 0,-1,0, 0,-1,0, 0,-1,0,
    ]);

    // basic UV layout: each face gets a 0-1 quad
    const uv = new Float32Array([
        0,0, 1,0, 1,1, 0,1,
        0,0, 1,0, 1,1, 0,1,
        0,0, 1,0, 1,1, 0,1,
        0,0, 1,0, 1,1, 0,1,
        0,0, 1,0, 1,1, 0,1,
        0,0, 1,0, 1,1, 0,1,
    ]);

    // 2 tris per face, 6 faces = 12 tris = 36 indices
    const indices = new Uint16Array([
        0,1,2, 0,2,3,       // front
        4,5,6, 4,6,7,       // back
        8,9,10, 8,10,11,    // right
        12,13,14, 12,14,15, // left
        16,17,18, 16,18,19, // top
        20,21,22, 20,22,23, // bottom
    ]);

    return { positions, normals, uvs: uv, indices };
}

/**
 * makeSphere -- UV sphere, good segment count for smooth cats
 * radius, segments wide, segments tall, offset x/y/z
 */
function makeSphere(radius = 1, wSeg = 20, hSeg = 16, ox = 0, oy = 0, oz = 0) {
    const positions = [];
    const normals = [];
    const uvs = [];
    const indices = [];

    for (let iy = 0; iy <= hSeg; iy++) {
        const v = iy / hSeg;
        const phi = v * Math.PI;
        for (let ix = 0; ix <= wSeg; ix++) {
            const u = ix / wSeg;
            const theta = u * Math.PI * 2;
            const x = -Math.cos(theta) * Math.sin(phi);
            const y = Math.cos(phi);
            const z = Math.sin(theta) * Math.sin(phi);
            positions.push(x * radius + ox, y * radius + oy, z * radius + oz);
            normals.push(x, y, z);
            uvs.push(u, 1 - v);
        }
    }

    for (let iy = 0; iy < hSeg; iy++) {
        for (let ix = 0; ix < wSeg; ix++) {
            const a = iy * (wSeg + 1) + ix;
            const b = a + wSeg + 1;
            indices.push(a, b, a + 1);
            indices.push(b, b + 1, a + 1);
        }
    }

    return {
        positions: new Float32Array(positions),
        normals: new Float32Array(normals),
        uvs: new Float32Array(uvs),
        indices: new Uint16Array(indices),
    };
}

/**
 * makeCylinder -- for tails, limbs, staffs
 */
function makeCylinder(rTop, rBot, height, rSeg = 14, ox = 0, oy = 0, oz = 0) {
    const positions = [];
    const normals = [];
    const uvs = [];
    const indices = [];

    const halfH = height / 2;

    // side verts
    for (let iy = 0; iy <= 1; iy++) {
        const r = iy === 0 ? rTop : rBot;
        const yOff = iy === 0 ? halfH : -halfH;
        for (let ix = 0; ix <= rSeg; ix++) {
            const u = ix / rSeg;
            const theta = u * Math.PI * 2;
            const x = Math.sin(theta) * r;
            const z = Math.cos(theta) * r;
            positions.push(x + ox, yOff + oy, z + oz);
            // slope normal for tapered cylinders
            const slope = (rBot - rTop) / height;
            const ny = slope / Math.sqrt(1 + slope * slope);
            const nr = 1 / Math.sqrt(1 + slope * slope);
            normals.push(Math.sin(theta) * nr, ny, Math.cos(theta) * nr);
            uvs.push(u, iy);
        }
    }
    const sideCount = (rSeg + 1) * 2;

    // side indices
    for (let ix = 0; ix < rSeg; ix++) {
        const a = ix, b = ix + rSeg + 1;
        indices.push(a, b, a + 1);
        indices.push(b, b + 1, a + 1);
    }

    // top cap
    const topCenterIdx = sideCount;
    positions.push(ox, halfH + oy, oz);
    normals.push(0, 1, 0);
    uvs.push(0.5, 0.5);
    for (let ix = 0; ix <= rSeg; ix++) {
        const theta = (ix / rSeg) * Math.PI * 2;
        positions.push(Math.sin(theta) * rTop + ox, halfH + oy, Math.cos(theta) * rTop + oz);
        normals.push(0, 1, 0);
        uvs.push(Math.sin(theta) * 0.5 + 0.5, Math.cos(theta) * 0.5 + 0.5);
    }
    for (let ix = 0; ix < rSeg; ix++) {
        indices.push(topCenterIdx, topCenterIdx + 1 + ix + 1, topCenterIdx + 1 + ix);
    }

    // bottom cap
    const botCenterIdx = topCenterIdx + rSeg + 2;
    positions.push(ox, -halfH + oy, oz);
    normals.push(0, -1, 0);
    uvs.push(0.5, 0.5);
    for (let ix = 0; ix <= rSeg; ix++) {
        const theta = (ix / rSeg) * Math.PI * 2;
        positions.push(Math.sin(theta) * rBot + ox, -halfH + oy, Math.cos(theta) * rBot + oz);
        normals.push(0, -1, 0);
        uvs.push(Math.sin(theta) * 0.5 + 0.5, Math.cos(theta) * 0.5 + 0.5);
    }
    for (let ix = 0; ix < rSeg; ix++) {
        indices.push(botCenterIdx, botCenterIdx + 1 + ix, botCenterIdx + 1 + ix + 1);
    }

    return {
        positions: new Float32Array(positions),
        normals: new Float32Array(normals),
        uvs: new Float32Array(uvs),
        indices: new Uint16Array(indices),
    };
}

/**
 * makeCone -- pointy bit for ears, hats, tails
 */
function makeCone(radius, height, rSeg = 10, ox = 0, oy = 0, oz = 0) {
    return makeCylinder(0.001, radius, height, rSeg, ox, oy, oz);
}

/**
 * makeTorus -- for halos, rings, beads
 */
function makeTorus(R, r, rSeg = 20, tSeg = 10, ox = 0, oy = 0, oz = 0) {
    const positions = [];
    const normals = [];
    const uvs = [];
    const indices = [];

    for (let j = 0; j <= tSeg; j++) {
        const phi = (j / tSeg) * Math.PI * 2;
        const cosPhi = Math.cos(phi), sinPhi = Math.sin(phi);
        for (let i = 0; i <= rSeg; i++) {
            const theta = (i / rSeg) * Math.PI * 2;
            const cosTheta = Math.cos(theta), sinTheta = Math.sin(theta);
            const x = (R + r * cosTheta) * cosPhi;
            const y = r * sinTheta;
            const z = (R + r * cosTheta) * sinPhi;
            positions.push(x + ox, y + oy, z + oz);
            const nx = cosTheta * cosPhi, ny = sinTheta, nz = cosTheta * sinPhi;
            normals.push(nx, ny, nz);
            uvs.push(i / rSeg, j / tSeg);
        }
    }

    for (let j = 0; j < tSeg; j++) {
        for (let i = 0; i < rSeg; i++) {
            const a = j * (rSeg + 1) + i;
            const b = a + rSeg + 1;
            indices.push(a, b, a + 1);
            indices.push(b, b + 1, a + 1);
        }
    }

    return {
        positions: new Float32Array(positions),
        normals: new Float32Array(normals),
        uvs: new Float32Array(uvs),
        indices: new Uint16Array(indices),
    };
}

// =====================================================
// GLTF DOCUMENT BUILDER -- wraps gltf-transform API
// so building a model is: start with new ModelDoc(),
// call addMesh() per part, then save().
// =====================================================

class ModelDoc {
    constructor(name) {
        this.doc = new Document();
        this.doc.createScene(name);
        this.rootNode = this.doc.createNode(name + '-root');
        this.doc.getRoot().listScenes()[0].addChild(this.rootNode);
        this.buffer = this.doc.createBuffer();
        this.io = new NodeIO().registerExtensions([KHRMaterialsEmissiveStrength]);
        this.name = name;
    }

    // color: hex int, roughness 0-1, metalness 0-1, emissiveHex, transparent/opacity
    createMaterial(name, color, roughness = 0.8, metalness = 0.0, emissiveHex = 0x000000, opacity = 1.0) {
        const mat = this.doc.createMaterial(name);
        const r = ((color >> 16) & 0xff) / 255;
        const g = ((color >> 8) & 0xff) / 255;
        const b = (color & 0xff) / 255;
        mat.setBaseColorFactor([r, g, b, opacity]);
        mat.setRoughnessFactor(roughness);
        mat.setMetallicFactor(metalness);

        const er = ((emissiveHex >> 16) & 0xff) / 255;
        const eg = ((emissiveHex >> 8) & 0xff) / 255;
        const eb = (emissiveHex & 0xff) / 255;
        mat.setEmissiveFactor([er, eg, eb]);

        if (opacity < 1.0) {
            mat.setAlphaMode('BLEND');
            mat.setDoubleSided(true);
        }

        return mat;
    }

    // add a mesh part to the model
    // geom: { positions, normals, uvs, indices }
    // mat: result of createMaterial()
    // position: [x, y, z]
    // rotation: [x, y, z] euler in radians
    // scale: [x, y, z]
    addMesh(partName, geom, mat, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]) {
        const mesh = this.doc.createMesh(partName);
        const prim = this.doc.createPrimitive();

        const posAcc = this.doc.createAccessor()
            .setType('VEC3')
            .setArray(geom.positions)
            .setBuffer(this.buffer);

        const normAcc = this.doc.createAccessor()
            .setType('VEC3')
            .setArray(geom.normals)
            .setBuffer(this.buffer);

        const uvAcc = this.doc.createAccessor()
            .setType('VEC2')
            .setArray(geom.uvs)
            .setBuffer(this.buffer);

        const idxAcc = this.doc.createAccessor()
            .setType('SCALAR')
            .setArray(geom.indices)
            .setBuffer(this.buffer);

        prim.setAttribute('POSITION', posAcc)
            .setAttribute('NORMAL', normAcc)
            .setAttribute('TEXCOORD_0', uvAcc)
            .setIndices(idxAcc)
            .setMaterial(mat);

        mesh.addPrimitive(prim);

        const node = this.doc.createNode(partName)
            .setMesh(mesh)
            .setTranslation(position)
            .setScale(scale);

        // convert euler to quaternion (glTF uses quaternions)
        const [ex, ey, ez] = rotation;
        const quat = eulerToQuat(ex, ey, ez);
        node.setRotation(quat);

        this.rootNode.addChild(node);
        return node;
    }

    async save(filename) {
        const outPath = join(OUT_DIR, filename);
        await this.io.write(outPath, this.doc);
        console.log(`  ✓ wrote ${filename}`);
    }
}

// euler XYZ to quaternion [x,y,z,w]
function eulerToQuat(x, y, z) {
    const cx = Math.cos(x / 2), sx = Math.sin(x / 2);
    const cy = Math.cos(y / 2), sy = Math.sin(y / 2);
    const cz = Math.cos(z / 2), sz = Math.sin(z / 2);
    return [
        sx * cy * cz + cx * sy * sz,
        cx * sy * cz - sx * cy * sz,
        cx * cy * sz + sx * sy * cz,
        cx * cy * cz - sx * sy * sz,
    ];
}

// =====================================================
// MODEL BUILDERS
// each function returns a ModelDoc ready to .save()
// these define the actual geometry of every NPC.
// this is the part you add to when creating new models.
// =====================================================

// ------ NORMAL CAT (base template for most cats) ------
async function buildCatNormal() {
    const m = new ModelDoc('cat-normal');

    const orange    = m.createMaterial('orange-fur',   0xff8844, 0.85, 0.0);
    const darkOr    = m.createMaterial('dark-fur',     0xcc5522, 0.9,  0.0);
    const black     = m.createMaterial('black',        0x111111, 0.95, 0.0);
    const white     = m.createMaterial('white',        0xffffee, 0.9,  0.0);
    const pink      = m.createMaterial('nose-pink',    0xff99aa, 0.8,  0.0);
    const innerEar  = m.createMaterial('inner-ear',    0xffcccc, 0.9,  0.0);

    // -- body: rounded torso using sphere scaled non-uniformly
    m.addMesh('body',     makeSphere(0.7, 18, 14, 0, 1.2, 0),   orange, [0,0,0],   [0,0,0], [1, 1.3, 0.85]);
    // chest tuft -- lighter patch
    m.addMesh('chest',    makeSphere(0.35, 12, 10, 0, 1.1, 0.55), white, [0,0,0], [0,0,0], [1, 1.1, 0.5]);

    // -- 4 legs with proper upper/lower segments
    const legPositions = [[-0.45, 0, 0.38], [0.45, 0, 0.38], [-0.45, 0, -0.38], [0.45, 0, -0.38]];
    for (const [lx, ly, lz] of legPositions) {
        m.addMesh(`upper-leg-${lx}`, makeCylinder(0.175, 0.155, 0.55, 10, lx, 0.7, lz), orange, [0,0,0]);
        m.addMesh(`lower-leg-${lx}`, makeCylinder(0.14, 0.10,  0.45, 10, lx, 0.25, lz), darkOr, [0,0,0]);
        // paw -- flattened sphere
        m.addMesh(`paw-${lx}`, makeSphere(0.16, 10, 8, lx, 0.03, lz + 0.06), white, [0,0,0], [0,0,0], [1, 0.5, 1.25]);
    }

    // -- head: proper cat head shape (sphere + subtle scaling)
    m.addMesh('head',     makeSphere(0.62, 20, 16, 0, 2.35, 0), orange, [0,0,0], [0,0,0], [1, 1.0, 0.95]);

    // -- cat ears: cones each side + inner
    m.addMesh('ear-l',       makeCone(0.25, 0.45, 8, -0.3, 2.85,  0.05), orange,   [0,0,0], [0, 0, -0.25]);
    m.addMesh('ear-r',       makeCone(0.25, 0.45, 8,  0.3, 2.85,  0.05), orange,   [0,0,0], [0, 0,  0.25]);
    m.addMesh('ear-l-inner', makeCone(0.14, 0.32, 6, -0.3, 2.82,  0.08), innerEar, [0,0,0], [0, 0, -0.22]);
    m.addMesh('ear-r-inner', makeCone(0.14, 0.32, 6,  0.3, 2.82,  0.08), innerEar, [0,0,0], [0, 0,  0.22]);

    // -- eyes: white sclera + dark iris + tiny pupil slit
    const eyeXs = [-0.22, 0.22];
    for (const ex of eyeXs) {
        const side = ex < 0 ? 'l' : 'r';
        m.addMesh(`sclera-${side}`,  makeSphere(0.12, 10, 8, ex, 2.42, 0.56), white,  [0,0,0], [0,0,0], [1, 0.9, 0.6]);
        m.addMesh(`iris-${side}`,    makeSphere(0.09, 10, 8, ex, 2.42, 0.61), m.createMaterial(`iris-${side}`, 0xee8800, 0.3, 0.0), [0,0,0], [0,0,0], [1, 1.2, 0.4]);
        m.addMesh(`pupil-${side}`,   makeSphere(0.05, 8,  6, ex, 2.42, 0.65), black,  [0,0,0], [0,0,0], [0.5, 1.6, 0.3]);
    }

    // -- nose: small pink sphere
    m.addMesh('nose', makeSphere(0.07, 8, 6, 0, 2.2, 0.6), pink, [0,0,0], [0,0,0], [1.2, 0.8, 0.7]);

    // -- whiskers: very thin flat boxes
    const whiskerMat = m.createMaterial('whisker', 0xffffff, 0.0, 0.0);
    const whiskerDirs = [[-1, 0.05], [-1, -0.05], [1, 0.05], [1, -0.05]];
    for (const [wx, wz] of whiskerDirs) {
        const side = wx < 0 ? 'l' : 'r';
        m.addMesh(`whisker-${side}-${wz}`,
            makeBox(0.55, 0.02, 0.01, wx * 0.5, 2.16, 0.58 + wz * 2),
            whiskerMat, [0,0,0], [0, 0, wz * 0.15]);
    }

    // -- tail: tapered cylinder, curved look via offset
    m.addMesh('tail-main', makeCylinder(0.12, 0.06, 1.2, 10, 0, 1.1, -0.85), orange, [0,0,0], [0.7, 0, 0.1]);
    m.addMesh('tail-tip',  makeSphere(0.1, 10, 8, 0, 0.5, -1.45), white, [0,0,0]);

    // -- stripe markings on forehead
    const stripeMat = m.createMaterial('stripe', 0xcc5500, 0.9, 0.0);
    m.addMesh('stripe-1', makeBox(0.06, 0.22, 0.02, -0.1, 2.72, 0.56), stripeMat);
    m.addMesh('stripe-2', makeBox(0.06, 0.22, 0.02,  0.0, 2.72, 0.56), stripeMat);
    m.addMesh('stripe-3', makeBox(0.06, 0.22, 0.02,  0.1, 2.72, 0.56), stripeMat);

    await m.save('cat-normal.glb');
    return m;
}

// ------ VOID CAT ------
async function buildVoidCat() {
    const m = new ModelDoc('voidcat');
    const void0  = m.createMaterial('void',       0x050508, 0.95, 0.0, 0x000000);
    const purple  = m.createMaterial('void-eye',  0x9900ff, 0.1,  0.0, 0xaa00ff);
    const aura    = m.createMaterial('void-aura', 0x220033, 0.0,  0.0, 0x110022, 0.15);

    // big round cat body
    m.addMesh('body', makeSphere(1.0, 18, 14, 0, 2.2, 0), void0, [0,0,0], [0,0,0], [1.1, 1.25, 0.95]);

    // 4 legs
    for (const [lx, lz] of [[-0.55, 0.45], [0.55, 0.45], [-0.55, -0.45], [0.55, -0.45]]) {
        m.addMesh(`leg-${lx}-${lz}`, makeCylinder(0.18, 0.13, 0.9, 8, lx, 1.0, lz), void0);
    }

    // head
    m.addMesh('head', makeSphere(0.76, 18, 14, 0, 3.5, 0), void0);

    // pointy ears
    m.addMesh('ear-l', makeCone(0.26, 0.52, 6, -0.45, 4.12, 0), void0, [0,0,0], [0, 0, -0.2]);
    m.addMesh('ear-r', makeCone(0.26, 0.52, 6,  0.45, 4.12, 0), void0, [0,0,0], [0, 0,  0.2]);

    // glowing purple eyes
    m.addMesh('eye-l', makeSphere(0.19, 12, 10, -0.28, 3.56, 0.67), purple);
    m.addMesh('eye-r', makeSphere(0.19, 12, 10,  0.28, 3.56, 0.67), purple);

    // wispy tail
    m.addMesh('tail', makeCylinder(0.1, 0.04, 1.9, 8, 0, 2.2, -1.05), void0, [0,0,0], [0.8, 0, 0]);

    // void aura (big transparent shell)
    m.addMesh('aura', makeSphere(1.9, 12, 10, 0, 2.5, 0), aura);

    await m.save('voidcat.glb');
}

// ------ SHREK ------
async function buildShrek() {
    const m = new ModelDoc('shrek');
    const green  = m.createMaterial('shrek-green',  0x5a8a40, 0.8, 0.0);
    const brown  = m.createMaterial('shrek-brown',  0x7a5230, 0.9, 0.0);
    const skin   = m.createMaterial('shrek-skin',   0x6da84e, 0.75, 0.0);
    const dark   = m.createMaterial('shrek-dark',   0x2a1a00, 0.95, 0.0);
    const white  = m.createMaterial('shrek-white',  0xeeeecc, 0.9, 0.0);
    const eyeCol = m.createMaterial('shrek-eye',    0x3a2a00, 0.8, 0.0);

    // chunky body
    m.addMesh('body', makeBox(2.2, 2.5, 1.5, 0, 2.5, 0), brown);
    // massive arms
    m.addMesh('arm-l', makeBox(0.75, 2.1, 0.75, -1.6, 2.5, 0), green);
    m.addMesh('arm-r', makeBox(0.75, 2.1, 0.75,  1.6, 2.5, 0), green);
    // stubby legs
    m.addMesh('leg-l', makeBox(0.85, 1.6, 0.85, -0.6, 0.8, 0), brown);
    m.addMesh('leg-r', makeBox(0.85, 1.6, 0.85,  0.6, 0.8, 0), brown);
    // big round head
    m.addMesh('head', makeSphere(1.1, 18, 14, 0, 5.0, 0), skin);
    // iconic ogre ears
    m.addMesh('ear-l', makeSphere(0.45, 10, 8, -1.1, 5.2, 0), skin, [0,0,0], [0,0,0], [0.8, 1, 0.6]);
    m.addMesh('ear-r', makeSphere(0.45, 10, 8,  1.1, 5.2, 0), skin, [0,0,0], [0,0,0], [0.8, 1, 0.6]);
    // eyebrows (angry tilt baked in)
    m.addMesh('brow-l', makeBox(0.45, 0.12, 0.2, -0.37, 5.3, 0.9), dark, [0,0,0], [0, 0, 0.3]);
    m.addMesh('brow-r', makeBox(0.45, 0.12, 0.2,  0.37, 5.3, 0.9), dark, [0,0,0], [0, 0, -0.3]);
    // beady eyes
    m.addMesh('eye-l', makeSphere(0.16, 10, 8, -0.38, 5.05, 0.92), eyeCol);
    m.addMesh('eye-r', makeSphere(0.16, 10, 8,  0.38, 5.05, 0.92), eyeCol);
    // onion stack on head (iconic)
    m.addMesh('onion-1', makeSphere(0.5,  12, 10, 0, 6.3,  0), white);
    m.addMesh('onion-2', makeSphere(0.35, 10, 8,  0, 6.95, 0), white);
    m.addMesh('onion-3', makeSphere(0.2,  8,  6,  0, 7.45, 0), white);
    // nose (big bumpy ogre nose)
    m.addMesh('nose', makeSphere(0.22, 10, 8, 0, 4.9, 1.0), skin, [0,0,0], [0,0,0], [1.4, 0.9, 1.1]);

    await m.save('shrek.glb');
}

// ------ OBAMA ------
async function buildObama() {
    const m = new ModelDoc('obama');
    const skin   = m.createMaterial('skin',  0x8B5E3C, 0.7, 0.0);
    const suit   = m.createMaterial('suit',  0x1a1a2a, 0.8, 0.0);
    const shirt  = m.createMaterial('shirt', 0xf2f0ea, 0.85, 0.0);
    const tie    = m.createMaterial('tie',   0x111fa8, 0.7, 0.0);
    const hair   = m.createMaterial('hair',  0x111111, 0.95, 0.0);
    const white  = m.createMaterial('white', 0xffffff, 0.9, 0.0);
    const dark   = m.createMaterial('dark',  0x111111, 0.95, 0.0);
    const brown  = m.createMaterial('brown-iris', 0x3a1e0a, 0.7, 0.0);
    const shoe   = m.createMaterial('shoe',  0x111111, 0.95, 0.0);

    // legs
    for (const s of [-1, 1]) {
        m.addMesh(`thigh-${s}`, makeCylinder(0.20, 0.18, 0.9, 10, s * 0.23, 0.5, 0), suit);
        m.addMesh(`shin-${s}`,  makeCylinder(0.17, 0.13, 0.8, 10, s * 0.23, -0.35, 0), suit);
        m.addMesh(`shoe-${s}`,  makeBox(0.28, 0.15, 0.5, s * 0.23, -0.83, 0.08), shoe);
    }
    // torso
    m.addMesh('torso', makeBox(0.95, 1.1, 0.5, 0, 1.25, 0), suit);
    m.addMesh('shirt', makeBox(0.35, 0.5, 0.52, 0, 1.6, 0), shirt);
    m.addMesh('tie',   makeBox(0.11, 0.75, 0.53, 0, 1.3, 0), tie);
    // arms
    for (const s of [-1, 1]) {
        m.addMesh(`upper-arm-${s}`, makeCylinder(0.14, 0.13, 0.7, 8, s * 0.62, 1.3, 0), suit, [0,0,0], [0, 0, s * 0.2]);
        m.addMesh(`fore-arm-${s}`,  makeCylinder(0.12, 0.10, 0.65, 8, s * 0.7, 0.7, 0), suit, [0,0,0], [0, 0, s * 0.3]);
        m.addMesh(`hand-${s}`,      makeSphere(0.12, 8, 8, s * 0.76, 0.3, 0), skin);
    }
    // head -- slightly elongated
    m.addMesh('head', makeSphere(0.55, 18, 14, 0, 2.25, 0), skin, [0,0,0], [0,0,0], [1, 1.1, 0.95]);
    // big ears
    for (const s of [-1, 1]) {
        m.addMesh(`ear-${s}`, makeSphere(0.18, 8, 8, s * 0.6, 2.25, 0), skin, [0,0,0], [0,0,0], [0.6, 1.0, 0.4]);
    }
    // hair (flat cap on top)
    m.addMesh('hair', makeSphere(0.54, 14, 10, 0, 2.6, -0.05), hair, [0,0,0], [0,0,0], [1.05, 0.45, 1.0]);
    // eyes: white + iris + pupil
    for (const s of [-1, 1]) {
        m.addMesh(`eye-white-${s}`, makeSphere(0.09, 8, 8, s * 0.2, 2.3, 0.48), white);
        m.addMesh(`iris-${s}`,      makeSphere(0.05, 8, 6, s * 0.2, 2.3, 0.52), brown);
        m.addMesh(`pupil-${s}`,     makeSphere(0.03, 6, 5, s * 0.2, 2.3, 0.55), dark);
    }
    // nose
    m.addMesh('nose', makeSphere(0.07, 6, 6, 0, 2.18, 0.52), skin, [0,0,0], [0,0,0], [1.2, 0.7, 1.0]);
    // smile
    m.addMesh('smile', makeTorus(0.1, 0.02, 12, 6, 0, 2.1, 0.53), m.createMaterial('smile', 0x5a2a0a, 0.8, 0));
    // lapel pin
    m.addMesh('pin', makeSphere(0.04, 5, 5, -0.28, 1.7, 0.26), m.createMaterial('pin', 0xff3333, 0.7, 0));

    await m.save('obama.glb');
}

// ------ BIRD (mob) ------
async function buildBird() {
    const m = new ModelDoc('bird');

    // random-ish colors per "variant" -- we just do the base here, game randomizes colors
    const feather  = m.createMaterial('feather',   0x22aaee, 0.85, 0.0);
    const wing     = m.createMaterial('wing',      0x1188cc, 0.9,  0.0);
    const beak     = m.createMaterial('beak',      0xffcc00, 0.6,  0.0);
    const leg      = m.createMaterial('leg',       0xffaa22, 0.7,  0.0);
    const eye      = m.createMaterial('eye',       0x111111, 1.0,  0.0);
    const eye2     = m.createMaterial('eye-shine', 0xffffff, 0.0,  0.0);

    // body -- rounded teardrop shape (sphere scaled)
    m.addMesh('body', makeSphere(0.42, 16, 12, 0, 0.5, 0), feather, [0,0,0], [0,0,0], [1, 1.2, 0.9]);
    // head
    m.addMesh('head', makeSphere(0.28, 14, 10, 0, 1.0, 0.05), feather);
    // tail feathers -- flat boxes angled back
    m.addMesh('tail-1', makeBox(0.08, 0.35, 0.04, 0, 0.44, -0.42), feather, [0,0,0], [0.5, 0, 0]);
    m.addMesh('tail-2', makeBox(0.07, 0.30, 0.04, -0.12, 0.42, -0.40), feather, [0,0,0], [0.45, 0.15, 0]);
    m.addMesh('tail-3', makeBox(0.07, 0.30, 0.04,  0.12, 0.42, -0.40), feather, [0,0,0], [0.45, -0.15, 0]);
    // wings -- each has 3 segments for fold effect
    for (const [s, name] of [[-1, 'l'], [1, 'r']]) {
        m.addMesh(`wing-upper-${name}`, makeBox(0.55, 0.12, 0.25, s * 0.47, 0.55, 0.08), wing, [0,0,0], [0, 0, s * 0.15]);
        m.addMesh(`wing-mid-${name}`,   makeBox(0.45, 0.1,  0.2,  s * 0.82, 0.48, 0.05), wing, [0,0,0], [0, 0, s * 0.25]);
        m.addMesh(`wing-tip-${name}`,   makeBox(0.3,  0.08, 0.15, s * 1.08, 0.42, 0.02), m.createMaterial(`tip-${name}`, 0x0066bb, 0.9, 0), [0,0,0], [0, 0, s * 0.4]);
    }
    // legs
    for (const [s, name] of [[-1, 'l'], [1, 'r']]) {
        m.addMesh(`leg-${name}`, makeCylinder(0.04, 0.03, 0.28, 6, s * 0.12, 0.12, 0.06), leg);
        m.addMesh(`foot-${name}`, makeSphere(0.06, 6, 5, s * 0.12, -0.03, 0.10), leg, [0,0,0], [0,0,0], [2, 0.4, 1]);
    }
    // beak -- cone pointing forward
    m.addMesh('beak', makeCone(0.07, 0.22, 6, 0, 1.01, 0.27), beak);
    // eyes
    for (const [s, name] of [[-1, 'l'], [1, 'r']]) {
        m.addMesh(`eye-${name}`,       makeSphere(0.055, 8, 6, s * 0.18, 1.04, 0.22), eye);
        m.addMesh(`eye-shine-${name}`, makeSphere(0.025, 5, 4, s * 0.19, 1.06, 0.25), eye2);
    }
    // crest on top of head
    m.addMesh('crest', makeCone(0.06, 0.2, 5, 0, 1.28, 0.03), feather, [0,0,0], [0.3, 0, 0]);

    await m.save('bird.glb');
}

// ------ ROBOT CAT ------
async function buildCatRobot() {
    const m = new ModelDoc('cat-robot');
    const metal  = m.createMaterial('metal',    0x778899, 0.2, 0.85);
    const dark   = m.createMaterial('dark',     0x223344, 0.3, 0.9);
    const led    = m.createMaterial('led',      0x00ffcc, 0.0, 0.0, 0x00ffcc);
    const plat   = m.createMaterial('plat',     0xccddee, 0.1, 0.9);

    m.addMesh('body',    makeBox(1.2, 1.4, 0.9, 0, 1.1, 0), metal);
    m.addMesh('chest',   makeBox(0.6, 0.5, 0.95, 0, 1.2, 0), dark);
    m.addMesh('chest-led', makeBox(0.2, 0.08, 0.96, 0, 1.3, 0), led);
    for (const [lx, lz] of [[-0.4, 0.3], [0.4, 0.3], [-0.4, -0.3], [0.4, -0.3]]) {
        m.addMesh(`leg-${lx}${lz}`, makeBox(0.28, 0.85, 0.28, lx, 0.42, lz), metal);
        m.addMesh(`foot-${lx}${lz}`, makeBox(0.35, 0.15, 0.42, lx, 0.02, lz + 0.08), plat);
    }
    m.addMesh('head', makeBox(0.9, 0.8, 0.75, 0, 2.35, 0), metal);
    m.addMesh('ear-l', makeBox(0.12, 0.4, 0.1, -0.55, 2.7, 0), dark);
    m.addMesh('ear-r', makeBox(0.12, 0.4, 0.1,  0.55, 2.7, 0), dark);
    m.addMesh('antenna', makeCylinder(0.03, 0.03, 0.6, 6, 0, 3.05, 0), dark);
    m.addMesh('antenna-tip', makeSphere(0.07, 6, 5, 0, 3.38, 0), led);
    // LED eye panels
    m.addMesh('eye-l', makeBox(0.26, 0.15, 0.76, -0.22, 2.35, 0), led);
    m.addMesh('eye-r', makeBox(0.26, 0.15, 0.76,  0.22, 2.35, 0), led);
    // tail -- rigid with segments
    for (let i = 0; i < 5; i++) {
        m.addMesh(`tail-${i}`, makeBox(0.1, 0.1, 0.25, 0, 0.9 - i * 0.12, -0.5 - i * 0.22), metal);
    }
    await m.save('cat-robot.glb');
}

// ------ ANGEL CAT ------
async function buildCatAngel() {
    const m = new ModelDoc('cat-angel');
    const white    = m.createMaterial('white',      0xfffae0, 0.9, 0.0);
    const softgold = m.createMaterial('halo',       0xffe066, 0.1, 0.4, 0xffcc00);
    const wing     = m.createMaterial('wing',       0xfff8f0, 0.95, 0.0, 0x998844, 0.85);
    const blue     = m.createMaterial('eye-blue',   0x6699ff, 0.2, 0.0);
    const dark     = m.createMaterial('dark',       0x222222, 0.9, 0.0);

    m.addMesh('body', makeSphere(0.7, 18, 14, 0, 1.2, 0), white, [0,0,0], [0,0,0], [1, 1.3, 0.85]);
    for (const [lx, lz] of [[-0.42, 0.35], [0.42, 0.35], [-0.42, -0.35], [0.42, -0.35]]) {
        m.addMesh(`leg-${lx}`, makeCylinder(0.14, 0.10, 0.7, 8, lx, 0.65, lz), white);
    }
    m.addMesh('head', makeSphere(0.6, 18, 14, 0, 2.32, 0), white);
    m.addMesh('ear-l', makeCone(0.22, 0.42, 8, -0.3, 2.78, 0), white, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r', makeCone(0.22, 0.42, 8,  0.3, 2.78, 0), white, [0,0,0], [0,0, 0.22]);
    // halo torus
    m.addMesh('halo', makeTorus(0.42, 0.06, 20, 8, 0, 3.1, 0), softgold);
    // wings -- 3 feather rows each side
    for (const s of [-1, 1]) {
        const si = s < 0 ? 'l' : 'r';
        m.addMesh(`wing-up-${si}`,   makeBox(1.0, 0.08, 0.55, s * 0.98, 2.1, 0.1), wing, [0,0,0], [0, 0, s * (-0.5)]);
        m.addMesh(`wing-mid-${si}`,  makeBox(0.85, 0.06, 0.45, s * 1.2, 1.8, 0.05), wing, [0,0,0], [0, 0, s * (-0.65)]);
        m.addMesh(`wing-low-${si}`,  makeBox(0.65, 0.05, 0.38, s * 1.35, 1.5, 0), wing, [0,0,0], [0, 0, s * (-0.75)]);
    }
    // eyes
    for (const ex of [-0.22, 0.22]) {
        const si = ex < 0 ? 'l' : 'r';
        m.addMesh(`eye-${si}`, makeSphere(0.11, 10, 8, ex, 2.38, 0.54), blue);
        m.addMesh(`pupil-${si}`, makeSphere(0.06, 8, 6, ex, 2.38, 0.58), dark);
    }
    await m.save('cat-angel.glb');
}

// ------ SHADOW CAT ------
async function buildCatShadow() {
    const m = new ModelDoc('cat-shadow');
    const shadow   = m.createMaterial('shadow',  0x0a0a0f, 0.98, 0.0, 0x000000);
    const redGlow  = m.createMaterial('red-eye', 0xff1111, 0.0,  0.0, 0xff0000);
    const smoke    = m.createMaterial('smoke',   0x111122, 0.0,  0.0, 0x000011, 0.12);

    m.addMesh('body', makeSphere(0.7, 16, 12, 0, 1.2, 0), shadow, [0,0,0], [0,0,0], [1, 1.3, 0.85]);
    for (const [lx, lz] of [[-0.42, 0.35], [0.42, 0.35], [-0.42, -0.35], [0.42, -0.35]]) {
        m.addMesh(`leg-${lx}`, makeCylinder(0.14, 0.10, 0.7, 8, lx, 0.65, lz), shadow);
    }
    m.addMesh('head', makeSphere(0.62, 16, 12, 0, 2.32, 0), shadow);
    m.addMesh('ear-l', makeCone(0.24, 0.44, 8, -0.3, 2.78, 0), shadow, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r', makeCone(0.24, 0.44, 8,  0.3, 2.78, 0), shadow, [0,0,0], [0,0, 0.22]);
    m.addMesh('eye-l', makeSphere(0.11, 10, 8, -0.22, 2.38, 0.57), redGlow);
    m.addMesh('eye-r', makeSphere(0.11, 10, 8,  0.22, 2.38, 0.57), redGlow);
    m.addMesh('tail', makeCylinder(0.1, 0.05, 1.4, 8, 0, 1.1, -0.9), shadow, [0,0,0], [0.7, 0, 0.1]);
    // smoke aura
    m.addMesh('aura', makeSphere(1.5, 10, 8, 0, 1.4, 0), smoke);
    await m.save('cat-shadow.glb');
}

// ------ VAMPIRE CAT ------
async function buildCatVampire() {
    const m = new ModelDoc('cat-vampire');
    const black  = m.createMaterial('black',     0x0a0010, 0.9, 0.0);
    const fur    = m.createMaterial('grey-fur',  0x555566, 0.9, 0.0);
    const red    = m.createMaterial('red',       0xcc0022, 0.7, 0.0, 0x440000);
    const white  = m.createMaterial('white',     0xfaf0ff, 0.9, 0.0);

    m.addMesh('body', makeSphere(0.7, 16, 12, 0, 1.2, 0), fur, [0,0,0], [0,0,0], [1, 1.3, 0.85]);
    // cape -- big flat box draped behind
    m.addMesh('cape', makeBox(2.0, 2.6, 0.08, 0, 1.3, -0.42), black, [0,0,0], [0.15, 0, 0]);
    m.addMesh('cape-collar', makeBox(1.6, 0.6, 0.10, 0, 2.8, -0.38), black, [0,0,0], [-0.2, 0, 0]);
    for (const [lx, lz] of [[-0.42, 0.35], [0.42, 0.35], [-0.42, -0.35], [0.42, -0.35]]) {
        m.addMesh(`leg-${lx}`, makeCylinder(0.14, 0.10, 0.7, 8, lx, 0.65, lz), black);
    }
    m.addMesh('head', makeSphere(0.62, 16, 12, 0, 2.32, 0), fur);
    // bat ears (tall and pointy)
    m.addMesh('ear-l', makeCone(0.18, 0.6, 6, -0.35, 2.95, 0), black, [0,0,0], [0,0,-0.15]);
    m.addMesh('ear-r', makeCone(0.18, 0.6, 6,  0.35, 2.95, 0), black, [0,0,0], [0,0, 0.15]);
    // red glowing eyes
    m.addMesh('eye-l', makeSphere(0.11, 10, 8, -0.22, 2.38, 0.57), red);
    m.addMesh('eye-r', makeSphere(0.11, 10, 8,  0.22, 2.38, 0.57), red);
    // fang teeth
    m.addMesh('fang-l', makeCone(0.04, 0.14, 4, -0.08, 2.14, 0.6), white, [0,0,0], [0.2, 0, 0]);
    m.addMesh('fang-r', makeCone(0.04, 0.14, 4,  0.08, 2.14, 0.6), white, [0,0,0], [0.2, 0, 0]);
    m.addMesh('tail', makeCylinder(0.1, 0.05, 1.3, 8, 0, 1.1, -0.9), black, [0,0,0], [0.6, 0, 0.1]);
    await m.save('cat-vampire.glb');
}

// ------ WIZARD CAT ------
async function buildCatWizard() {
    const m = new ModelDoc('cat-wizard');
    const robe   = m.createMaterial('robe',   0x2a006a, 0.9, 0.0);
    const fur    = m.createMaterial('fur',    0xaa88cc, 0.9, 0.0);
    const gold   = m.createMaterial('gold',   0xffcc00, 0.2, 0.7, 0x332200);
    const glow   = m.createMaterial('glow',   0x88aaff, 0.0, 0.0, 0x4466ff);
    const star   = m.createMaterial('star',   0xffee88, 0.0, 0.0, 0xffcc44);

    m.addMesh('body', makeSphere(0.7, 16, 12, 0, 1.2, 0), fur, [0,0,0], [0,0,0], [1, 1.3, 0.85]);
    // robe drape covering body+legs
    m.addMesh('robe', makeCylinder(0.85, 0.6, 1.8, 12, 0, 0.9, 0), robe);
    m.addMesh('head', makeSphere(0.62, 16, 12, 0, 2.32, 0), fur);
    m.addMesh('ear-l', makeCone(0.22, 0.42, 8, -0.3, 2.78, 0), fur, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r', makeCone(0.22, 0.42, 8,  0.3, 2.78, 0), fur, [0,0,0], [0,0, 0.22]);
    // tall wizard hat (cone + brim cylinder)
    m.addMesh('hat-brim', makeCylinder(1.0, 1.0, 0.12, 14, 0, 3.02, 0), robe);
    m.addMesh('hat-cone', makeCone(0.55, 1.8, 12, 0, 3.95, 0), robe);
    // star decorations on hat
    m.addMesh('hat-star', makeSphere(0.09, 6, 5, 0.28, 3.5, 0.52), star);
    // staff
    m.addMesh('staff-pole', makeCylinder(0.055, 0.055, 3.5, 6, 0.88, 1.75, 0), m.createMaterial('wood', 0x8B5E3C, 0.9, 0));
    m.addMesh('staff-orb', makeSphere(0.26, 12, 10, 0.88, 3.5, 0), glow);
    // flowing sleeves/arms
    for (const s of [-1, 1]) {
        const si = s < 0 ? 'l' : 'r';
        m.addMesh(`arm-${si}`, makeCylinder(0.22, 0.18, 0.9, 8, s * 0.7, 1.8, 0), robe, [0,0,0], [0, 0, s * 0.35]);
    }
    // eyes -- glowing purple
    for (const ex of [-0.22, 0.22]) {
        const si = ex < 0 ? 'l' : 'r';
        m.addMesh(`eye-${si}`, makeSphere(0.11, 10, 8, ex, 2.38, 0.57), glow);
    }
    // gold band on staff
    m.addMesh('staff-band', makeTorus(0.1, 0.04, 12, 6, 0.88, 3.3, 0), gold);
    await m.save('cat-wizard.glb');
}

// ------ TRUMP ------
async function buildTrump() {
    const m = new ModelDoc('trump');
    const skin    = m.createMaterial('trump-skin',  0xffBB77, 0.7,  0.0);
    const suit    = m.createMaterial('trump-suit',  0x2a2a4a, 0.8,  0.0);
    const shirt   = m.createMaterial('trump-shirt', 0xf8f8f8, 0.85, 0.0);
    const tie     = m.createMaterial('trump-tie',   0xcc0000, 0.7,  0.0);
    const hair    = m.createMaterial('trump-hair',  0xffcc55, 0.7,  0.0);
    const dark    = m.createMaterial('trump-dark',  0x111111, 0.95, 0.0);
    const shoe    = m.createMaterial('trump-shoe',  0x111111, 0.95, 0.0);

    // legs
    for (const s of [-1, 1]) {
        m.addMesh(`thigh-${s}`, makeCylinder(0.22, 0.19, 0.95, 10, s * 0.26, 0.52, 0), suit);
        m.addMesh(`shin-${s}`,  makeCylinder(0.18, 0.14, 0.85, 10, s * 0.26, -0.35, 0), suit);
        m.addMesh(`shoe-${s}`,  makeBox(0.32, 0.18, 0.55, s * 0.26, -0.85, 0.1), shoe);
    }
    // torso -- slightly chunky
    m.addMesh('torso', makeBox(1.2, 1.3, 0.6, 0, 1.35, 0), suit);
    m.addMesh('shirt', makeBox(0.4, 0.55, 0.62, 0, 1.65, 0), shirt);
    // signature long red tie
    m.addMesh('tie',   makeBox(0.13, 1.25, 0.61, 0, 1.1, 0), tie);
    // arms
    for (const s of [-1, 1]) {
        m.addMesh(`arm-${s}`, makeCylinder(0.18, 0.15, 1.4, 8, s * 0.8, 1.3, 0), suit, [0,0,0], [0, 0, s * 0.3]);
        m.addMesh(`hand-${s}`, makeSphere(0.14, 8, 8, s * 0.92, 0.5, 0), skin);
    }
    // big round head -- trump has a large head. accurate.
    m.addMesh('head', makeSphere(0.7, 18, 14, 0, 2.5, 0), skin, [0,0,0], [0,0,0], [1.1, 1.0, 0.98]);
    // signature hair sweep -- big blob on top
    m.addMesh('hair-main', makeSphere(0.72, 16, 12, 0, 3.2, -0.1), hair, [0,0,0], [0,0,0], [1.1, 0.45, 1.1]);
    m.addMesh('hair-swoop', makeBox(0.8, 0.35, 0.7, 0, 3.1, 0.18), hair, [0,0,0], [-0.3, 0, 0]);
    // tiny eyes close together
    m.addMesh('eye-l', makeSphere(0.08, 8, 6, -0.16, 2.52, 0.63), dark);
    m.addMesh('eye-r', makeSphere(0.08, 8, 6,  0.16, 2.52, 0.63), dark);
    // pursed mouth expression -- just a thin slit
    m.addMesh('mouth', makeBox(0.32, 0.06, 0.71, 0, 2.28, 0), m.createMaterial('mouth-line', 0x994444, 0.9, 0));
    // big nose
    m.addMesh('nose', makeSphere(0.11, 8, 6, 0, 2.38, 0.67), skin, [0,0,0], [0,0,0], [1, 0.8, 1.1]);
    // american flag pin
    m.addMesh('pin', makeSphere(0.05, 5, 5, -0.32, 1.85, 0.32), m.createMaterial('flag-pin', 0xff3333, 0.5, 0, 0x441111));

    await m.save('trump.glb');
}

// ------ BARNEY ------
async function buildBarney() {
    const m = new ModelDoc('barney');
    const purple = m.createMaterial('barney-purple', 0x9b2fa8, 0.85, 0.0);
    const green  = m.createMaterial('barney-green',  0x44bb44, 0.8,  0.0);
    const belly  = m.createMaterial('barney-belly',  0xddcc88, 0.85, 0.0);
    const white  = m.createMaterial('barney-white',  0xffffff, 0.9,  0.0);
    const dark   = m.createMaterial('barney-dark',   0x111111, 0.95, 0.0);

    // big round dino body
    m.addMesh('body', makeSphere(1.4, 18, 14, 0, 2.2, 0), purple, [0,0,0], [0,0,0], [1, 1.2, 0.95]);
    m.addMesh('belly', makeSphere(1.0, 14, 10, 0, 2.0, 0.8), belly, [0,0,0], [0,0,0], [0.8, 1, 0.3]);
    // stubby t-rex arms (tiny compared to body)
    for (const s of [-1, 1]) {
        m.addMesh(`arm-${s}`, makeCylinder(0.28, 0.18, 0.7, 8, s * 1.5, 2.4, 0.3), purple, [0,0,0], [0, 0, s * 0.5]);
    }
    // pudgy legs
    for (const s of [-1, 1]) {
        m.addMesh(`leg-${s}`, makeCylinder(0.42, 0.35, 1.1, 10, s * 0.55, 0.55, 0), purple);
        m.addMesh(`foot-${s}`, makeSphere(0.42, 10, 8, s * 0.55, 0.0, 0.2), purple, [0,0,0], [0,0,0], [1.0, 0.55, 1.5]);
    }
    // big round dino head
    m.addMesh('head', makeSphere(1.0, 18, 14, 0, 4.6, 0.1), purple, [0,0,0], [0,0,0], [1, 0.9, 1.0]);
    // muzzle poking forward
    m.addMesh('muzzle', makeSphere(0.65, 14, 10, 0, 4.4, 0.8), belly, [0,0,0], [0,0,0], [0.75, 0.65, 0.6]);
    // dino ridge spines on back
    for (let i = 0; i < 5; i++) {
        m.addMesh(`spine-${i}`, makeCone(0.12, 0.35, 6, 0, 3.4 + i * 0.28, -0.9 + i * 0.1), green, [0,0,0], [-0.2, 0, 0]);
    }
    // eyes -- huge friendly eyes
    for (const ex of [-0.38, 0.38]) {
        const si = ex < 0 ? 'l' : 'r';
        m.addMesh(`eye-${si}`,   makeSphere(0.28, 12, 10, ex, 4.8, 0.72), white);
        m.addMesh(`pupil-${si}`, makeSphere(0.14, 10, 8, ex, 4.78, 0.96), dark);
    }
    // dino tail
    m.addMesh('tail-1', makeCylinder(0.4, 0.28, 1.2, 10, 0, 2.0, -1.2), purple, [0,0,0], [0.5, 0, 0]);
    m.addMesh('tail-2', makeCylinder(0.26, 0.12, 1.0, 8, 0, 1.55, -2.0), purple, [0,0,0], [0.7, 0, 0]);
    m.addMesh('tail-tip', makeSphere(0.14, 8, 6, 0, 1.25, -2.75), purple);

    await m.save('barney.glb');
}

// ------ ELMO ------
async function buildElmo() {
    const m = new ModelDoc('elmo');
    const red    = m.createMaterial('elmo-red',    0xee2222, 0.9,  0.0);
    const orange = m.createMaterial('elmo-orange', 0xff8800, 0.7,  0.0);
    const white  = m.createMaterial('elmo-white',  0xffffff, 0.9,  0.0);
    const dark   = m.createMaterial('elmo-dark',   0x111111, 0.95, 0.0);

    // round fluffy body
    m.addMesh('body', makeSphere(0.8, 16, 12, 0, 1.2, 0), red, [0,0,0], [0,0,0], [1, 1.25, 0.95]);
    // arms -- slightly bent outward
    for (const s of [-1, 1]) {
        m.addMesh(`arm-${s}`, makeCylinder(0.23, 0.16, 0.7, 8, s * 0.95, 1.5, 0), red, [0,0,0], [0, 0, s * 0.5]);
        m.addMesh(`hand-${s}`, makeSphere(0.18, 8, 8, s * 1.2, 1.08, 0), red);
    }
    // legs
    for (const s of [-1, 1]) {
        m.addMesh(`leg-${s}`, makeCylinder(0.26, 0.22, 0.75, 8, s * 0.35, 0.35, 0), red);
        m.addMesh(`foot-${s}`, makeSphere(0.25, 8, 6, s * 0.35, -0.08, 0.15), red, [0,0,0], [0,0,0], [1, 0.5, 1.5]);
    }
    // huge round head -- elmo's most iconic feature
    m.addMesh('head', makeSphere(0.9, 18, 14, 0, 2.55, 0), red);
    // giant round white eyes on stalks
    for (const ex of [-0.35, 0.35]) {
        const si = ex < 0 ? 'l' : 'r';
        m.addMesh(`eye-stalk-${si}`, makeCylinder(0.1, 0.1, 0.18, 6, ex, 2.98, 0.78), red);
        m.addMesh(`eye-${si}`,   makeSphere(0.26, 12, 10, ex, 3.1, 0.82), white);
        m.addMesh(`pupil-${si}`, makeSphere(0.14, 10, 8, ex, 3.08, 1.06), dark);
    }
    // orange ball nose -- HUGE. classic elmo.
    m.addMesh('nose', makeSphere(0.2, 10, 8, 0, 2.58, 0.86), orange);
    // wide open smile
    m.addMesh('smile', makeTorus(0.24, 0.04, 14, 6, 0, 2.3, 0.82), m.createMaterial('smile-red', 0xcc0000, 0.8, 0));

    await m.save('elmo.glb');
}

// ------ DIO BRANDO ------
async function buildDio() {
    const m = new ModelDoc('dio');
    const skin    = m.createMaterial('dio-skin',    0xffe8cc, 0.6, 0.0);
    const suit    = m.createMaterial('dio-suit',    0xeeee44, 0.7, 0.0); // dio's iconic yellow-gold
    const hair    = m.createMaterial('dio-hair',    0xcccc00, 0.5, 0.0);
    const red     = m.createMaterial('dio-red',     0xcc1122, 0.7, 0.0, 0x440000);
    const dark    = m.createMaterial('dio-dark',    0x111111, 0.95, 0.0);
    const gold    = m.createMaterial('dio-gold',    0xffcc00, 0.1, 0.8, 0x332200);
    const cape    = m.createMaterial('dio-cape',    0x880022, 0.8);

    // legs -- theatrical wide stance
    for (const s of [-1, 1]) {
        m.addMesh(`leg-up-${s}`, makeCylinder(0.22, 0.18, 0.9, 10, s * 0.3, 0.5, 0), suit);
        m.addMesh(`leg-lo-${s}`, makeCylinder(0.18, 0.14, 0.85, 10, s * 0.3, -0.35, 0), suit);
        m.addMesh(`boot-${s}`, makeBox(0.32, 0.26, 0.55, s * 0.3, -0.85, 0.06), dark);
    }
    // torso
    m.addMesh('torso', makeBox(1.1, 1.35, 0.55, 0, 1.4, 0), suit);
    // red flowing cape
    m.addMesh('cape', makeBox(1.8, 2.8, 0.07, 0, 1.5, -0.32), cape, [0,0,0], [0.1, 0, 0]);
    // arms -- dramatic outward pose
    for (const s of [-1, 1]) {
        m.addMesh(`arm-${s}`, makeCylinder(0.16, 0.13, 1.1, 8, s * 0.85, 1.6, 0), suit, [0,0,0], [0, 0, s * 0.45]);
        m.addMesh(`hand-${s}`, makeSphere(0.14, 8, 8, s * 1.1, 0.95, 0), skin);
    }
    // head
    m.addMesh('head', makeSphere(0.58, 18, 14, 0, 2.5, 0), skin, [0,0,0], [0,0,0], [1, 1.05, 0.95]);
    // anime hair -- swept back and dramatic
    m.addMesh('hair-top', makeBox(0.7, 0.35, 0.72, 0, 3.08, -0.08), hair, [0,0,0], [-0.25, 0, 0]);
    m.addMesh('hair-side-l', makeBox(0.22, 0.55, 0.68, -0.52, 2.72, -0.06), hair, [0,0,0], [-0.15, 0.2, 0]);
    m.addMesh('hair-side-r', makeBox(0.22, 0.55, 0.68,  0.52, 2.72, -0.06), hair, [0,0,0], [-0.15,-0.2, 0]);
    // stone mask vibes -- accessory scar on jaw
    m.addMesh('scar', makeBox(0.04, 0.42, 0.6, -0.35, 2.38, 0), m.createMaterial('scar', 0xaa5544, 0.9, 0));
    // glowing vampire eyes (red sclera, dramatic)
    for (const ex of [-0.2, 0.2]) {
        const si = ex < 0 ? 'l' : 'r';
        m.addMesh(`eye-${si}`, makeSphere(0.1, 10, 8, ex, 2.56, 0.53), red);
    }
    // ZA WARUDO text plate -- gold band on chest
    m.addMesh('chest-plate', makeBox(0.55, 0.2, 0.59, 0, 1.82, 0), gold);
    // flamboyant headband
    m.addMesh('headband', makeTorus(0.45, 0.055, 16, 6, 0, 2.65, 0), gold, [0,0,0], [Math.PI / 2, 0, 0]);

    await m.save('dio.glb');
}

// ------ CAT GOD ------
async function buildCatGod() {
    const m = new ModelDoc('catgod');
    const gold   = m.createMaterial('catgod-gold',  0xffd700, 0.1, 0.6, 0xaa8800);
    const divine = m.createMaterial('catgod-divine', 0xfff4c2, 0.05, 0.8, 0xffee88);
    const halo   = m.createMaterial('catgod-halo',  0xffcc00, 0.0,  0.5, 0xffaa00);
    const eye    = m.createMaterial('catgod-eye',   0xffffff, 0.0,  0.0, 0xffddaa);
    const aura   = m.createMaterial('catgod-aura',  0xffee88, 0.0,  0.0, 0xffcc44, 0.08);

    // massive divine body
    m.addMesh('body', makeSphere(1.5, 20, 16, 0, 2.8, 0), gold, [0,0,0], [0,0,0], [1, 1.4, 0.9]);
    // chest
    m.addMesh('chest', makeSphere(0.8, 14, 12, 0, 2.6, 1.2), divine, [0,0,0], [0,0,0], [0.85, 1, 0.3]);
    // 4 legs -- regal
    for (const [lx, lz] of [[-0.75, 0.6], [0.75, 0.6], [-0.75, -0.6], [0.75, -0.6]]) {
        m.addMesh(`leg-${lx}`, makeCylinder(0.28, 0.22, 1.3, 10, lx, 1.0, lz), gold);
        m.addMesh(`paw-${lx}`, makeSphere(0.28, 10, 8, lx, 0.15, lz + 0.1), divine, [0,0,0], [0,0,0], [1, 0.5, 1.25]);
    }
    // giant divine head
    m.addMesh('head', makeSphere(1.25, 22, 18, 0, 5.2, 0), gold, [0,0,0], [0,0,0], [1, 1.05, 0.96]);
    // majestic ears
    m.addMesh('ear-l', makeCone(0.5, 0.9, 10, -0.7, 6.4, 0), gold, [0,0,0], [0,0,-0.2]);
    m.addMesh('ear-r', makeCone(0.5, 0.9, 10,  0.7, 6.4, 0), gold, [0,0,0], [0,0, 0.2]);
    // big glowing divine eyes
    for (const ex of [-0.45, 0.45]) {
        const si = ex < 0 ? 'l' : 'r';
        m.addMesh(`eye-${si}`, makeSphere(0.22, 14, 10, ex, 5.3, 1.15), eye);
    }
    // giant golden halo
    m.addMesh('halo', makeTorus(1.2, 0.1, 24, 8, 0, 7.0, 0), halo);
    // two pairs of divine wings -- large and sweeping
    for (const s of [-1, 1]) {
        const si = s < 0 ? 'l' : 'r';
        m.addMesh(`wing-hi-${si}`,   makeBox(2.5, 0.12, 1.2, s * 2.2, 5.5, -0.2), divine, [0,0,0], [0, 0, s * (-0.6)]);
        m.addMesh(`wing-hi-2-${si}`, makeBox(2.0, 0.1,  1.0, s * 2.8, 5.0, -0.3), divine, [0,0,0], [0, 0, s * (-0.75)]);
        m.addMesh(`wing-lo-${si}`,   makeBox(1.8, 0.1,  0.9, s * 2.0, 4.2, -0.2), divine, [0,0,0], [0, 0, s * (-0.85)]);
        m.addMesh(`wing-lo-2-${si}`, makeBox(1.4, 0.08, 0.75, s * 2.4, 3.7, -0.2), divine, [0,0,0], [0, 0, s * (-1.0)]);
    }
    // golden divine aura shell
    m.addMesh('aura', makeSphere(4.5, 12, 10, 0, 3.5, 0), aura);
    // tail -- glowing majestic
    m.addMesh('tail-1', makeCylinder(0.22, 0.14, 2.5, 10, 0, 2.5, -1.8), gold, [0,0,0], [0.7, 0, 0.1]);
    m.addMesh('tail-tip', makeSphere(0.22, 10, 8, 0, 1.45, -3.1), divine);

    await m.save('catgod.glb');
}

// ------ UGANDAN KNUCKLES ------
async function buildUgandanKnuckles() {
    const m = new ModelDoc('ugandan-knuckles');
    const red    = m.createMaterial('uk-red',    0xdd2222, 0.8,  0.0);
    const dark   = m.createMaterial('uk-dark',   0x222222, 0.9,  0.0);
    const white  = m.createMaterial('uk-white',  0xeeeeee, 0.9,  0.0);
    const purple = m.createMaterial('uk-purple', 0x884488, 0.8,  0.0);
    const tan    = m.createMaterial('uk-tan',    0xcc9966, 0.8,  0.0);

    // body -- stumpy
    m.addMesh('body', makeSphere(0.75, 14, 10, 0, 1.5, 0), red, [0,0,0], [0,0,0], [1, 1.1, 0.9]);
    // belly plate
    m.addMesh('belly', makeSphere(0.55, 12, 8, 0, 1.4, 0.55), tan, [0,0,0], [0,0,0], [0.85, 1, 0.3]);
    // stubby legs
    for (const s of [-1, 1]) {
        m.addMesh(`leg-${s}`, makeCylinder(0.25, 0.22, 0.6, 8, s * 0.35, 0.6, 0), red);
        m.addMesh(`shoe-${s}`, makeBox(0.4, 0.2, 0.55, s * 0.35, 0.22, 0.06), m.createMaterial('shoe', 0x444422, 0.9, 0));
    }
    // BIG knuckles hands -- signature feature
    for (const s of [-1, 1]) {
        m.addMesh(`arm-${s}`, makeCylinder(0.22, 0.18, 0.6, 8, s * 1.1, 1.5, 0), red, [0,0,0], [0, 0, s * 0.6]);
        m.addMesh(`fist-${s}`, makeSphere(0.38, 12, 10, s * 1.42, 1.2, 0), red, [0,0,0], [0,0,0], [1.4, 0.9, 1.0]);
        // knuckle ridges
        for (let k = 0; k < 3; k++) {
            m.addMesh(`knuckle-${s}-${k}`, makeSphere(0.1, 6, 5, s * (1.75 + k * 0.0), 1.25 - k * 0.02, 0.3 - k * 0.12), white);
        }
    }
    // big round head -- iconic design
    m.addMesh('head', makeSphere(0.88, 18, 14, 0, 3.0, 0.1), red, [0,0,0], [0,0,0], [1.1, 0.95, 1.0]);
    // HUGE red nose -- the most important feature
    m.addMesh('nose', makeSphere(0.38, 14, 10, 0, 2.9, 0.88), red, [0,0,0], [0,0,0], [1.2, 0.85, 1.0]);
    // dreadlock quills on top of head
    for (let i = 0; i < 5; i++) {
        const angle = (i / 4) * Math.PI * 0.9 - Math.PI * 0.45;
        m.addMesh(`quill-${i}`, makeCone(0.1, 0.7, 5, Math.sin(angle) * 0.6, 3.9 + Math.abs(Math.cos(angle)) * 0.2, 0.1 - i * 0.05), purple, [0,0,0], [0.2, angle, 0]);
    }
    // tribal marks
    m.addMesh('mark-l', makeBox(0.24, 0.06, 0.9, -0.38, 3.1, 0), dark);
    m.addMesh('mark-r', makeBox(0.24, 0.06, 0.9,  0.38, 3.1, 0), dark);
    // white sclera eyes
    for (const ex of [-0.28, 0.28]) {
        const si = ex < 0 ? 'l' : 'r';
        m.addMesh(`eye-${si}`,   makeSphere(0.18, 10, 8, ex, 3.1, 0.78), white);
        m.addMesh(`pupil-${si}`, makeSphere(0.09, 8,  6, ex, 3.1, 0.94), dark);
    }

    await m.save('ugandan-knuckles.glb');
}

// ------ BUFF CAT ------
async function buildBuffCat() {
    const m = new ModelDoc('buffcat');
    const orange = m.createMaterial('buff-orange', 0xff7700, 0.7, 0.0);
    const dark   = m.createMaterial('buff-dark',   0xcc4400, 0.8, 0.0);
    const black  = m.createMaterial('buff-black',  0x111111, 0.9, 0.0);
    const white  = m.createMaterial('buff-white',  0xfffaee, 0.9, 0.0);
    const vein   = m.createMaterial('buff-vein',   0xff5588, 0.6, 0.0);

    // MASSIVE barrel chest
    m.addMesh('chest', makeSphere(1.8, 18, 14, 0, 2.8, 0), orange, [0,0,0], [0,0,0], [1.2, 1.1, 0.95]);
    // abs ridges
    for (let i = 0; i < 3; i++) {
        m.addMesh(`abs-${i}`, makeBox(0.9, 0.12, 1.84, 0, 1.8 + i * 0.38, 0), dark);
    }
    // tiny cat head perched on huge body
    m.addMesh('head', makeSphere(0.7, 18, 14, 0, 5.1, 0), orange, [0,0,0], [0,0,0], [1, 1.03, 0.97]);
    m.addMesh('ear-l', makeCone(0.22, 0.42, 8, -0.3, 5.68, 0), orange, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r', makeCone(0.22, 0.42, 8,  0.3, 5.68, 0), orange, [0,0,0], [0,0, 0.22]);
    // angry eyes
    for (const ex of [-0.22, 0.22]) {
        const si = ex < 0 ? 'l' : 'r';
        m.addMesh(`eye-${si}`, makeSphere(0.12, 10, 8, ex, 5.18, 0.64), m.createMaterial(`ey-${si}`, 0xff4400, 0.2, 0, 0x440000));
        m.addMesh(`pupil-${si}`, makeSphere(0.06, 8, 6, ex, 5.18, 0.70), black);
    }
    // HUGE bulgingly muscled arms
    for (const s of [-1, 1]) {
        const si = s < 0 ? 'l' : 'r';
        // bicep -- comically large
        m.addMesh(`bicep-${si}`,   makeSphere(0.7, 14, 10, s * 2.2, 3.5, 0.2), orange, [0,0,0], [0,0,0], [0.75, 1.2, 0.75]);
        m.addMesh(`forearm-${si}`, makeCylinder(0.45, 0.38, 1.0, 10, s * 2.4, 2.1, 0.2), orange, [0,0,0], [0, 0, s * 0.4]);
        m.addMesh(`fist-${si}`,    makeSphere(0.46, 12, 10, s * 2.55, 1.4, 0.2), dark, [0,0,0], [0,0,0], [1.2, 0.9, 1.0]);
        // vein on bicep -- the detail that matters
        m.addMesh(`vein-${si}`, makeCylinder(0.04, 0.03, 0.85, 4, s * 2.15, 3.6, 0.62), vein, [0,0,0], [0, 0, s * 0.2]);
    }
    // thick cat legs
    for (const [lx, lz] of [[-0.7, 0.55], [0.7, 0.55], [-0.7, -0.55], [0.7, -0.55]]) {
        m.addMesh(`thigh-${lx}`, makeCylinder(0.42, 0.36, 0.9, 10, lx, 1.2, lz), orange);
        m.addMesh(`shin-${lx}`,  makeCylinder(0.34, 0.25, 0.8, 8, lx, 0.35, lz), dark);
        m.addMesh(`paw-${lx}`,   makeSphere(0.32, 10, 8, lx, -0.06, lz + 0.12), white, [0,0,0], [0,0,0], [1, 0.45, 1.3]);
    }
    // tiny tail (ironic on this massive body)
    m.addMesh('tail', makeCylinder(0.1, 0.06, 0.9, 8, 0, 2.0, -1.5), orange, [0,0,0], [0.9, 0, 0]);

    await m.save('buffcat.glb');
}

// =====================================================
// MODELS LIST -- add entries here to generate more
// each entry: { name, builder }
// =====================================================
const MODELS = [
    { name: 'cat-normal',        build: buildCatNormal },
    { name: 'voidcat',           build: buildVoidCat },
    { name: 'shrek',             build: buildShrek },
    { name: 'obama',             build: buildObama },
    { name: 'bird',              build: buildBird },
    { name: 'cat-robot',         build: buildCatRobot },
    { name: 'cat-angel',         build: buildCatAngel },
    { name: 'cat-shadow',        build: buildCatShadow },
    { name: 'cat-vampire',       build: buildCatVampire },
    { name: 'cat-wizard',        build: buildCatWizard },
    { name: 'trump',             build: buildTrump },
    { name: 'barney',            build: buildBarney },
    { name: 'elmo',              build: buildElmo },
    { name: 'dio',               build: buildDio },
    { name: 'catgod',            build: buildCatGod },
    { name: 'ugandan-knuckles',  build: buildUgandanKnuckles },
    { name: 'buffcat',           build: buildBuffCat },
];

// =====================================================
// MAIN -- run all builders
// =====================================================
console.log('\n🐱 gen-models.mjs starting -- buckle up\n');

let success = 0;
let fail = 0;

for (const { name, build } of MODELS) {
    try {
        process.stdout.write(`  building ${name}... `);
        await build();
        success++;
    } catch (err) {
        console.error(`  ✗ FAILED: ${err.message}`);
        fail++;
    }
}

console.log(`\n${success} models generated, ${fail} failed.`);
console.log(`output: public/models/\n`);
