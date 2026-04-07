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

// ------ EMO NPC -- goth humanoid. dark. dramatic. ------
async function buildEmo() {
    const m = new ModelDoc('emo');
    const black   = m.createMaterial('emo-black',  0x0a0a0f, 0.9, 0.05);
    const skin    = m.createMaterial('emo-skin',   0xd8c8c0, 0.85, 0.0);
    const hair    = m.createMaterial('emo-hair',   0x060608, 0.95, 0.0);
    const red     = m.createMaterial('emo-red',    0x990011, 0.8,  0.0, 0x330005);
    const dkred   = m.createMaterial('emo-dkred',  0x440008, 0.9,  0.0);
    const boot    = m.createMaterial('emo-boot',   0x111116, 0.8,  0.1);
    const belt    = m.createMaterial('emo-belt',   0x1a1a1a, 0.7,  0.3);
    const tear    = m.createMaterial('emo-tear',   0x220022, 0.5,  0.0, 0x110011);

    // torso -- slim dark hoodie
    m.addMesh('torso',    makeBox(0.72, 1.0, 0.42, 0, 1.65, 0), black);
    m.addMesh('hoodie-c', makeCylinder(0.38, 0.36, 0.25, 10, 0, 2.2, 0), black); // collar
    // arms -- long sleeves
    for (const s of [-1, 1]) {
        const sx = s * 0.58;
        m.addMesh(`arm-up-${s}`,  makeCylinder(0.14, 0.12, 0.6, 8,  sx, 1.85, 0), black, [0,0,0], [0,0, s * 0.2]);
        m.addMesh(`arm-lo-${s}`,  makeCylinder(0.12, 0.09, 0.6, 8,  sx, 1.2, 0), black);
        m.addMesh(`hand-${s}`,    makeSphere(0.11, 8, 6, sx, 0.88, 0), skin);
    }
    // slim legs -- skinny jeans
    for (const s of [-1, 1]) {
        const lx = s * 0.18;
        m.addMesh(`thigh-${s}`, makeCylinder(0.17, 0.15, 0.65, 8, lx, 1.0, 0), dkred);
        m.addMesh(`shin-${s}`,  makeCylinder(0.14, 0.13, 0.65, 8, lx, 0.32, 0), dkred);
        // chunky boots
        m.addMesh(`boot-${s}`,  makeBox(0.22, 0.22, 0.38, lx, -0.04, 0.04), boot);
        m.addMesh(`sole-${s}`,  makeBox(0.24, 0.06, 0.42, lx, -0.17, 0.04), belt);
    }
    // belt with buckle
    m.addMesh('belt',   makeBox(0.76, 0.1, 0.46, 0, 1.12, 0), belt);
    m.addMesh('buckle', makeBox(0.14, 0.1, 0.05, 0, 1.12, 0.24), m.createMaterial('buckle', 0xaaaaaa, 0.3, 0.8));

    // head -- pale, slightly narrow
    m.addMesh('head',   makeSphere(0.52, 16, 12, 0, 2.8, 0), skin, [0,0,0], [0,0,0], [0.94, 1.05, 0.9]);
    // eyes -- dark lined, sunken look
    m.addMesh('eye-l',  makeSphere(0.085, 8, 6, -0.18, 2.86, 0.46), m.createMaterial('eye-l', 0x220022, 0.2, 0.0, 0x550055));
    m.addMesh('eye-r',  makeSphere(0.085, 8, 6,  0.18, 2.86, 0.46), m.createMaterial('eye-r', 0x220022, 0.2, 0.0, 0x550055));
    // dark eye makeup
    m.addMesh('liner-l', makeBox(0.18, 0.04, 0.02, -0.18, 2.82, 0.49), black);
    m.addMesh('liner-r', makeBox(0.18, 0.04, 0.02,  0.18, 2.82, 0.49), black);
    // black tears -- signature
    m.addMesh('tear-l', makeCylinder(0.025, 0.015, 0.25, 6, -0.17, 2.7, 0.48), tear);
    m.addMesh('tear-r', makeCylinder(0.025, 0.015, 0.20, 6,  0.17, 2.72, 0.48), tear);
    // nose ring -- tiny red circle
    m.addMesh('nose-ring', makeTorus(0.035, 0.01, 10, 6, 0, 2.74, 0.52), red);
    // mouth -- sad line
    m.addMesh('mouth', makeBox(0.16, 0.025, 0.02, 0, 2.64, 0.49), black);

    // huge black hair -- sweeps over one eye
    m.addMesh('hair-main',  makeSphere(0.58, 14, 10, 0, 3.14, 0), hair, [0,0,0], [0,0,0], [1, 0.9, 0.85]);
    m.addMesh('hair-bang',  makeBox(0.5, 0.3, 0.12, -0.08, 2.93, 0.48), hair, [0,0,0], [-0.3, 0, 0.0]); // dramatic side sweep
    m.addMesh('hair-side-l', makeCylinder(0.12, 0.06, 0.45, 8, -0.38, 2.78, 0.0), hair, [0,0,0], [0,0,-0.4]);
    m.addMesh('hair-side-r', makeCylinder(0.12, 0.06, 0.35, 8,  0.38, 2.78, 0.0), hair, [0,0,0], [0,0, 0.3]);
    m.addMesh('hair-back',   makeBox(0.54, 0.55, 0.08, 0, 2.88, -0.46), hair);
    // spiky bits on top -- because emo
    for (let i = 0; i < 5; i++) {
        const sx = (i - 2) * 0.12;
        m.addMesh(`spike-${i}`, makeCone(0.06, 0.28, 5, sx, 3.38, 0.0), hair, [0,0,0], [0, 0, sx * 0.5]);
    }

    await m.save('emo.glb');
}

// ------ CAT NINJA ------
async function buildCatNinja() {
    const m = new ModelDoc('cat-ninja');
    const black  = m.createMaterial('n-black',  0x0d0d10, 0.9, 0.1);
    const dkgray = m.createMaterial('n-dkgray', 0x1e1e22, 0.85, 0.05);
    const red    = m.createMaterial('n-red',    0xcc1111, 0.7, 0.0, 0x330000);
    const white  = m.createMaterial('n-white',  0xeeffee, 0.5, 0.0, 0x002200);
    const silver = m.createMaterial('n-silver', 0xaaaacc, 0.3, 0.6);

    // base cat body in black
    m.addMesh('body',   makeSphere(0.7, 16, 12, 0, 1.2, 0), black,  [0,0,0], [0,0,0], [1, 1.3, 0.85]);
    for (const [lx, ly, lz] of [[-0.45, 0, 0.38], [0.45, 0, 0.38], [-0.45, 0, -0.38], [0.45, 0, -0.38]]) {
        m.addMesh(`leg-${lx}`, makeCylinder(0.16, 0.12, 0.9, 8, lx, 0.5, lz), black);
        m.addMesh(`paw-${lx}`, makeSphere(0.14, 8, 6, lx, 0.03, lz + 0.05), dkgray, [0,0,0], [0,0,0], [1, 0.5, 1.2]);
    }
    m.addMesh('head',   makeSphere(0.62, 16, 12, 0, 2.35, 0), black,  [0,0,0], [0,0,0], [1, 1.0, 0.95]);
    m.addMesh('ear-l',  makeCone(0.22, 0.4, 7, -0.3, 2.82, 0), black, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r',  makeCone(0.22, 0.4, 7,  0.3, 2.82, 0), black, [0,0,0], [0,0, 0.22]);
    // glowing red slit eyes -- only visible part of face
    m.addMesh('eye-l',  makeSphere(0.09, 8, 6, -0.22, 2.42, 0.56), red);
    m.addMesh('eye-r',  makeSphere(0.09, 8, 6,  0.22, 2.42, 0.56), red);
    // ninja mask covering lower face
    m.addMesh('mask',   makeBox(0.55, 0.28, 0.05, 0, 2.22, 0.56), dkgray);
    // headband with red symbol
    m.addMesh('hband',  makeBox(0.68, 0.14, 0.08, 0, 2.62, 0.56), dkgray);
    m.addMesh('hband-k', makeBox(0.28, 0.12, 0.03, 0, 2.62, 0.61), silver); // metal plate
    // tail
    m.addMesh('tail',   makeCylinder(0.1, 0.05, 1.1, 8, 0, 1.0, -0.85), black, [0,0,0], [0.6, 0, 0]);
    // shuriken floating next to it -- why not
    for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        m.addMesh(`shuri-${i}`, makeBox(0.18, 0.04, 0.04, 1.2 + Math.cos(a)*0.12, 1.8 + Math.sin(a)*0.12, 0), silver, [0,0,0], [0, a, 0]);
    }

    await m.save('cat-ninja.glb');
}

// ------ CAT SAMURAI ------
async function buildCatSamurai() {
    const m = new ModelDoc('cat-samurai');
    const orange  = m.createMaterial('s-orange', 0xff7744, 0.85, 0.0);
    const darkgr  = m.createMaterial('s-armor',  0x222233, 0.7,  0.3);
    const red     = m.createMaterial('s-red',    0xbb1100, 0.7,  0.1);
    const gold    = m.createMaterial('s-gold',   0xddaa22, 0.3,  0.7);
    const silver  = m.createMaterial('s-silver', 0x99aabb, 0.3,  0.6);
    const black   = m.createMaterial('s-black',  0x111111, 0.9,  0.1);
    const white   = m.createMaterial('s-white',  0xeeeeff, 0.8,  0.0);

    // cat body with armor plates
    m.addMesh('body',     makeSphere(0.7, 16, 12, 0, 1.2, 0),  orange, [0,0,0], [0,0,0], [1.05, 1.3, 0.9]);
    m.addMesh('chest-pl', makeBox(0.7, 0.7, 0.08, 0, 1.4, 0.52), darkgr); // chest plate
    m.addMesh('ch-trim',  makeBox(0.74, 0.02, 0.08, 0, 1.75, 0.52), gold);
    m.addMesh('ch-trim2', makeBox(0.74, 0.02, 0.08, 0, 1.05, 0.52), gold);
    // shoulder pads
    for (const s of [-1, 1]) {
        m.addMesh(`spad-${s}`,  makeSphere(0.3, 10, 8, s * 0.95, 1.82, 0), darkgr, [0,0,0], [0,0,0], [1, 0.55, 1.2]);
        m.addMesh(`srim-${s}`,  makeTorus(0.28, 0.04, 10, 6, s * 0.95, 1.82, 0), gold);
    }
    // legs with armor greaves
    for (const [lx, lz] of [[-0.45, 0.38], [0.45, 0.38], [-0.45, -0.38], [0.45, -0.38]]) {
        m.addMesh(`leg-${lx}`,  makeCylinder(0.17, 0.14, 0.9, 8, lx, 0.5, lz), orange);
        m.addMesh(`gv-${lx}`,   makeBox(0.2, 0.38, 0.22, lx, 0.5, lz), darkgr);
        m.addMesh(`paw-${lx}`,  makeSphere(0.14, 8, 6, lx, 0.02, lz + 0.05), orange, [0,0,0], [0,0,0], [1, 0.5, 1.2]);
    }
    // head + samurai helm
    m.addMesh('head',   makeSphere(0.62, 16, 12, 0, 2.35, 0), orange, [0,0,0], [0,0,0], [1, 1.0, 0.95]);
    m.addMesh('ear-l',  makeCone(0.24, 0.42, 7, -0.3, 2.82, 0), orange, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r',  makeCone(0.24, 0.42, 7,  0.3, 2.82, 0), orange, [0,0,0], [0,0, 0.22]);
    m.addMesh('eye-l',  makeSphere(0.09, 8, 6, -0.22, 2.42, 0.56), black);
    m.addMesh('eye-r',  makeSphere(0.09, 8, 6,  0.22, 2.42, 0.56), black);
    // kabuto helm
    m.addMesh('helm',    makeSphere(0.68, 14, 10, 0, 2.62, 0), darkgr, [0,0,0], [0,0,0], [1, 0.7, 1]);
    m.addMesh('helm-rim', makeBox(0.8, 0.08, 0.78, 0, 2.28, 0), darkgr);
    m.addMesh('helm-crest', makeCylinder(0.06, 0.04, 0.55, 6, 0, 3.1, 0), red);
    m.addMesh('helm-top',   makeSphere(0.1, 8, 6, 0, 3.35, 0), gold);
    for (const s of [-1, 1]) {
        m.addMesh(`hhorn-${s}`, makeCone(0.06, 0.32, 5, s*0.35, 2.82, 0), gold, [0,0,0], [0, 0, s*0.45]);
    }
    // katana -- the star of the show
    m.addMesh('handle', makeCylinder(0.06, 0.06, 0.55, 8,  1.3, 1.55, 0.3), m.createMaterial('handle', 0x331100, 0.9, 0.0));
    m.addMesh('guard',  makeBox(0.08, 0.08, 0.35, 1.3, 1.84, 0.3), gold);
    m.addMesh('blade',  makeBox(0.04, 0.02, 1.6,  1.3, 2.2,  0.3), silver);
    // tail
    m.addMesh('tail',   makeCylinder(0.11, 0.06, 1.2, 8, 0, 1.1, -0.85), orange, [0,0,0], [0.7, 0, 0.1]);

    await m.save('cat-samurai.glb');
}

// ------ CAT KNIGHT ------
async function buildCatKnight() {
    const m = new ModelDoc('cat-knight');
    const silver = m.createMaterial('k-silver', 0xaabbcc, 0.3, 0.7);
    const gold   = m.createMaterial('k-gold',   0xddaa22, 0.3, 0.7);
    const blue   = m.createMaterial('k-blue',   0x1133aa, 0.6, 0.2);
    const black  = m.createMaterial('k-black',  0x111111, 0.9, 0.2);
    const orange = m.createMaterial('k-orange', 0xff8844, 0.85, 0.0);

    // heavily armored cat body
    m.addMesh('body',   makeSphere(0.78, 16, 12, 0, 1.25, 0), silver, [0,0,0], [0,0,0], [1.05, 1.3, 0.95]);
    // pauldrons
    for (const s of [-1, 1]) {
        m.addMesh(`pld-${s}`,   makeSphere(0.38, 12, 8,  s*1.0, 1.85, 0), silver, [0,0,0], [0,0,0], [0.9, 0.5, 1.1]);
        m.addMesh(`prim-${s}`,  makeTorus(0.36, 0.045, 12, 6, s*1.0, 1.85, 0), gold);
    }
    // tabard (heraldic cloth hanging down)
    m.addMesh('tab-f',  makeBox(0.5, 0.75, 0.05, 0, 1.15, 0.58), blue);
    m.addMesh('tab-l',  makeBox(0.16, 0.02, 0.06, -0.18, 0.78, 0.58), gold);
    m.addMesh('tab-cr', makeSphere(0.08, 8, 6, 0, 1.35, 0.61), gold); // emblem center
    // legs
    for (const [lx, lz] of [[-0.45, 0.38], [0.45, 0.38], [-0.45, -0.38], [0.45, -0.38]]) {
        m.addMesh(`gv-${lx}${lz}`, makeCylinder(0.2, 0.18, 0.9, 8, lx, 0.5, lz), silver);
        m.addMesh(`boot-${lx}`,    makeBox(0.22, 0.18, 0.36, lx, -0.0, lz+0.04), silver);
    }
    // great helm -- full cover
    m.addMesh('helm',      makeSphere(0.72, 16, 12, 0, 2.6, 0), silver);
    m.addMesh('visor',     makeBox(0.62, 0.22, 0.08, 0, 2.48, 0.64), black);
    m.addMesh('visor-sl1', makeBox(0.52, 0.04, 0.03, 0, 2.54, 0.67), silver); // visor slot
    m.addMesh('visor-sl2', makeBox(0.52, 0.04, 0.03, 0, 2.44, 0.67), silver);
    m.addMesh('plume',     makeCylinder(0.06, 0.03, 0.8, 8, 0, 3.2, 0), blue);
    // cat ears peeking through helm holes
    m.addMesh('ear-l', makeCone(0.18, 0.32, 6, -0.3, 3.05, 0), orange, [0,0,0], [0,0,-0.2]);
    m.addMesh('ear-r', makeCone(0.18, 0.32, 6,  0.3, 3.05, 0), orange, [0,0,0], [0,0, 0.2]);
    // shield
    m.addMesh('shield-face', makeBox(0.55, 0.75, 0.06, -1.25, 1.5, 0.0), blue);
    m.addMesh('shield-rim',  makeBox(0.59, 0.79, 0.04, -1.25, 1.5, 0.0), silver);
    m.addMesh('shield-boss', makeSphere(0.12, 8, 6, -1.25, 1.5, 0.07), gold);
    m.addMesh('shield-cr',   makeBox(0.12, 0.62, 0.05, -1.25, 1.5, 0.05), gold); // cross
    m.addMesh('shield-cr2',  makeBox(0.44, 0.12, 0.05, -1.25, 1.5, 0.05), gold);
    // sword
    m.addMesh('sw-handle', makeCylinder(0.06, 0.06, 0.5, 8, 1.35, 1.4, 0.2), m.createMaterial('sw-h', 0x442200, 0.9, 0.0));
    m.addMesh('sw-guard',  makeBox(0.1, 0.06, 0.38, 1.35, 1.68, 0.2), gold);
    m.addMesh('sw-blade',  makeBox(0.05, 0.02, 1.5, 1.35, 2.1, 0.2), silver);
    m.addMesh('sw-tip',    makeCone(0.05, 0.18, 4, 1.35, 2.88, 0.2), silver);

    await m.save('cat-knight.glb');
}

// ------ CAT GRIM REAPER ------
async function buildCatGrimReaper() {
    const m = new ModelDoc('cat-grim-reaper');
    const black  = m.createMaterial('gr-black', 0x080810, 0.95, 0.05);
    const dkpur  = m.createMaterial('gr-purp',   0x1a0d33, 0.9, 0.05, 0x0a0022);
    const green  = m.createMaterial('gr-eyes',   0x00ff55, 0.1,  0.0,  0x00aa33);
    const bone   = m.createMaterial('gr-bone',   0xd4c9a8, 0.8,  0.05);
    const silver = m.createMaterial('gr-silver', 0x888899, 0.35, 0.5);
    const gloom  = m.createMaterial('gr-gloom',  0x111122, 0.95, 0.0,  0x000011, 0.85);

    // cat body hidden under robe
    m.addMesh('body',  makeSphere(0.62, 14, 10, 0, 1.2, 0), black,   [0,0,0], [0,0,0], [0.95, 1.3, 0.85]);
    // robe -- wide skirt covering legs
    m.addMesh('robe-bot', makeCylinder(0.82, 0.88, 1.2, 14, 0, 0.8, 0), black);
    m.addMesh('robe-top', makeCylinder(0.74, 0.8,  0.85, 12, 0, 1.6, 0), black);
    m.addMesh('robe-sl', makeBox(0.18, 0.7, 0.65, 0, 0.28, 0), gloom); // shadow beneath robe
    // arms -- skeletal under sleeves
    for (const s of [-1, 1]) {
        m.addMesh(`sleeve-${s}`, makeCylinder(0.18, 0.12, 0.85, 8, s*0.82, 1.75, 0), black, [0,0,0], [0,0,s*0.35]);
        m.addMesh(`hand-${s}`,   makeSphere(0.1, 8, 6, s*1.1, 1.32, 0), bone);
        // exposed bone finger
        m.addMesh(`fing-${s}`,   makeCylinder(0.02, 0.015, 0.22, 4, s*1.18, 1.21, 0.08), bone);
    }
    // head + hood
    m.addMesh('head',  makeSphere(0.62, 14, 10, 0, 2.38, 0), black,  [0,0,0], [0,0,0], [0.95, 1.0, 0.92]);
    m.addMesh('ear-l', makeCone(0.22, 0.38, 6, -0.28, 2.82, 0), black,  [0,0,0], [0,0,-0.2]);
    m.addMesh('ear-r', makeCone(0.22, 0.38, 6,  0.28, 2.82, 0), black,  [0,0,0], [0,0, 0.2]);
    m.addMesh('eye-l', makeSphere(0.1, 8, 6, -0.2, 2.45, 0.55), green);
    m.addMesh('eye-r', makeSphere(0.1, 8, 6,  0.2, 2.45, 0.55), green);
    // large hood draping down over face
    m.addMesh('hood',  makeSphere(0.76, 14, 10, 0, 2.72, -0.1), dkpur, [0,0,0], [0,0,0], [1.05, 0.85, 1.0]);
    m.addMesh('hood-tip', makeCone(0.06, 0.65, 6, 0, 3.35, -0.18), black, [0,0,0], [-0.45, 0, 0]);

    // scythe -- iconic and long
    m.addMesh('scythe-pole',    makeCylinder(0.04, 0.03, 2.8, 6, 1.0, 2.0, 0.1),  m.createMaterial('pole', 0x332200, 0.9, 0.0));
    m.addMesh('scythe-bl-main', makeBox(0.05, 1.1, 0.04, 1.0, 3.25, 0.35), silver, [0,0,0], [-0.6, 0, 0]);
    m.addMesh('scythe-bl-tip',  makeCone(0.04, 0.28, 4, 1.0, 2.7, 0.55), silver);
    m.addMesh('scythe-bolts',   makeTorus(0.065, 0.02, 8, 4, 1.0, 2.88, 0.1), m.createMaterial('bolt', 0x665500, 0.5, 0.5));

    // tail peeking under robe
    m.addMesh('tail', makeCylinder(0.09, 0.04, 1.0, 6, 0, 0.75, -0.9), black, [0,0,0], [0.55, 0, 0]);

    await m.save('cat-grim-reaper.glb');
}

// ------ CAT FIRE DEMON ------
async function buildCatFireDemon() {
    const m = new ModelDoc('cat-fire-demon');
    const fire   = m.createMaterial('fd-fire',   0xff4400, 0.5,  0.0, 0xff2200);
    const lava   = m.createMaterial('fd-lava',   0xff8800, 0.4,  0.0, 0xff5500);
    const dark   = m.createMaterial('fd-dark',   0x220800, 0.95, 0.1);
    const ember  = m.createMaterial('fd-ember',  0xffcc00, 0.2,  0.0, 0xffaa00);
    const black  = m.createMaterial('fd-black',  0x0a0400, 0.9,  0.2);
    const horn   = m.createMaterial('fd-horn',   0x442200, 0.7,  0.2);

    // body -- big, with lava cracks
    m.addMesh('body',     makeSphere(0.82, 16, 12, 0, 1.25, 0), dark,  [0,0,0], [0,0,0], [1.05, 1.35, 0.95]);
    m.addMesh('chest-cr', makeBox(0.5, 0.55, 0.05, 0, 1.38, 0.72), lava); // lava crack on chest
    m.addMesh('crack-2',  makeBox(0.28, 0.3, 0.04, -0.22, 1.15, 0.72), fire);
    m.addMesh('crack-3',  makeBox(0.2, 0.22, 0.04,  0.2, 0.98, 0.72), ember);
    // arms -- big fiery
    for (const s of [-1, 1]) {
        m.addMesh(`arm-${s}`,    makeCylinder(0.26, 0.2, 0.9, 10, s*1.05, 1.68, 0), dark, [0,0,0], [0,0,s*0.28]);
        m.addMesh(`fist-${s}`,   makeSphere(0.24, 10, 8, s*1.35, 1.15, 0), dark, [0,0,0], [0,0,0], [1.1, 0.95, 1.0]);
        m.addMesh(`fire-${s}`,   makeSphere(0.18, 8, 6,  s*1.35, 1.18, 0), lava, [0,0,0], [0,0,0], [1, 1, 0.6]);
        m.addMesh(`ember-${s}`,  makeSphere(0.09, 6, 5,  s*1.35, 1.35, 0.05), ember);
    }
    // massive legs
    for (const [lx, lz] of [[-0.5, 0.42], [0.5, 0.42], [-0.5, -0.42], [0.5, -0.42]]) {
        m.addMesh(`leg-${lx}${lz}`, makeCylinder(0.24, 0.2, 0.95, 8, lx, 0.52, lz), dark);
        m.addMesh(`hoof-${lx}`,     makeBox(0.26, 0.2, 0.34, lx, 0.01, lz+0.04), black);
    }
    // head -- flat angry cat with lava eyes
    m.addMesh('head',   makeSphere(0.68, 16, 12, 0, 2.4, 0), dark, [0,0,0], [0,0,0], [1.0, 0.9, 0.95]);
    m.addMesh('ear-l',  makeCone(0.26, 0.44, 7, -0.32, 2.92, 0), dark, [0,0,0], [0,0,-0.28]);
    m.addMesh('ear-r',  makeCone(0.26, 0.44, 7,  0.32, 2.92, 0), dark, [0,0,0], [0,0, 0.28]);
    m.addMesh('eye-l',  makeSphere(0.11, 8, 6, -0.24, 2.44, 0.6), ember);
    m.addMesh('eye-r',  makeSphere(0.11, 8, 6,  0.24, 2.44, 0.6), ember);
    m.addMesh('mouth',  makeBox(0.3, 0.08, 0.04, 0, 2.2, 0.62), fire); // glowing mouth
    // massive curled horns
    for (const s of [-1, 1]) {
        m.addMesh(`horn-ba-${s}`, makeCylinder(0.1, 0.04, 0.7, 8, s*0.4, 2.95, -0.1), horn, [0,0,0], [0.4, 0, s*0.55]);
        m.addMesh(`horn-ti-${s}`,  makeCone(0.04, 0.3, 6, s*0.52, 3.28, -0.22), horn, [0,0,0], [0.7, 0, s*0.4]);
    }
    // spiky tail with flame tip
    m.addMesh('tail-1', makeCylinder(0.14, 0.08, 1.1, 8, 0, 1.1, -0.9), dark, [0,0,0], [0.6, 0, 0]);
    m.addMesh('tail-f', makeSphere(0.18, 8, 6, 0.05, 0.6, -1.48), fire);
    m.addMesh('tail-e', makeSphere(0.1, 6, 5, 0.05, 0.72, -1.5), ember);
    // fire aura particles around body
    for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const fx = Math.cos(a) * 1.05, fz = Math.sin(a) * 1.05;
        m.addMesh(`aura-${i}`, makeSphere(0.12, 6, 5, fx, 1.35 + Math.sin(a)*0.2, fz), lava);
    }

    await m.save('cat-fire-demon.glb');
}

// ------ CAT ROBOT SUPREME ------
async function buildCatRobotSupreme() {
    const m = new ModelDoc('cat-robot-supreme');
    const chrome = m.createMaterial('rs-chrome', 0xccddee, 0.1,  0.9);
    const dark   = m.createMaterial('rs-dark',   0x112233, 0.55, 0.7);
    const blue   = m.createMaterial('rs-blue',   0x0099ff, 0.1,  0.0, 0x0055cc);
    const gold   = m.createMaterial('rs-gold',   0xddbb33, 0.2,  0.8);
    const red    = m.createMaterial('rs-red',    0xff2200, 0.2,  0.0, 0xcc1100);
    const panel  = m.createMaterial('rs-panel',  0x445566, 0.4,  0.7);

    // ultra-heavy robot cat chassis
    m.addMesh('torso',     makeBox(1.1, 1.2, 0.85, 0, 1.3, 0), dark);
    m.addMesh('torso-rim', makeBox(1.14, 0.04, 0.89, 0, 1.93, 0), gold);
    m.addMesh('torso-r2',  makeBox(1.14, 0.04, 0.89, 0, 0.71, 0), gold);
    m.addMesh('chest-pl',  makeBox(0.62, 0.52, 0.04, 0, 1.38, 0.44), panel);
    m.addMesh('reactor',   makeSphere(0.2, 10, 8, 0, 1.38, 0.48), blue);  // glowing reactor
    m.addMesh('reactor-r', makeTorus(0.22, 0.04, 12, 6, 0, 1.38, 0.47), gold);
    // shoulder cannons
    for (const s of [-1, 1]) {
        m.addMesh(`pld-${s}`,   makeBox(0.45, 0.42, 0.48, s*0.93, 1.75, 0), dark, [0,0,0], [0,s*0.2,0]);
        m.addMesh(`prim-${s}`,  makeBox(0.49, 0.46, 0.52, s*0.93, 1.75, 0), gold, [0,0,0], [0,s*0.2,0]);
        m.addMesh(`cannon-${s}`, makeCylinder(0.1, 0.08, 0.55, 8, s*1.28, 1.72, 0.28), dark, [0,0,0], [0,s*0.2,0]);
        m.addMesh(`barrel-${s}`, makeCylinder(0.06, 0.06, 0.7, 6, s*1.3,  1.72, 0.55), chrome, [0,0,0], [0,s*0.2,0]);
    }
    // heavy legs
    for (const [lx, lz] of [[-0.42, 0.38], [0.42, 0.38], [-0.42, -0.38], [0.42, -0.38]]) {
        m.addMesh(`thigh-${lx}${lz}`, makeBox(0.3, 0.52, 0.38, lx, 0.78, lz), dark);
        m.addMesh(`shin-${lx}${lz}`,  makeBox(0.26, 0.55, 0.32, lx, 0.2, lz), panel);
        m.addMesh(`foot-${lx}${lz}`,  makeBox(0.34, 0.18, 0.52, lx, -0.1, lz+0.05), dark);
        m.addMesh(`ftrim-${lx}${lz}`, makeBox(0.36, 0.04, 0.54, lx, 0.0, lz+0.05), gold);
    }
    // robot head -- boxy cat
    m.addMesh('head',    makeBox(1.0, 1.05, 0.85, 0, 2.65, 0), dark);
    m.addMesh('head-rim',makeBox(1.04, 0.04, 0.89, 0, 3.18, 0), gold);
    m.addMesh('head-r2', makeBox(1.04, 0.04, 0.89, 0, 2.13, 0), gold);
    // cat ears -- angular robotic versions
    m.addMesh('ear-l', makeBox(0.22, 0.3, 0.16, -0.42, 3.32, 0), dark, [0,0,0], [0, 0, -0.28]);
    m.addMesh('ear-r', makeBox(0.22, 0.3, 0.16,  0.42, 3.32, 0), dark, [0,0,0], [0, 0,  0.28]);
    // massive eye visors
    m.addMesh('eye-l',   makeBox(0.34, 0.2, 0.05, -0.28, 2.66, 0.44), blue);
    m.addMesh('eye-r',   makeBox(0.34, 0.2, 0.05,  0.28, 2.66, 0.44), red);
    m.addMesh('eye-lr',  makeBox(0.36, 0.24, 0.04, -0.28, 2.66, 0.43), chrome);
    m.addMesh('eye-rr',  makeBox(0.36, 0.24, 0.04,  0.28, 2.66, 0.43), chrome);
    // speaker grille
    for (let i = 0; i < 4; i++) {
        m.addMesh(`spk-${i}`, makeBox(0.55, 0.03, 0.03, 0, 2.38 - i*0.07, 0.44), panel);
    }
    // antenna
    m.addMesh('antenna', makeCylinder(0.03, 0.02, 0.5, 6, 0.25, 3.55, 0), chrome);
    m.addMesh('ant-tip', makeSphere(0.06, 6, 5, 0.25, 3.82, 0), red);
    // tail -- segmented
    for (let i = 0; i < 5; i++) {
        m.addMesh(`tail-${i}`, makeBox(0.14-i*0.015, 0.14-i*0.015, 0.16, 0, 1.05-i*0.1, -0.7-i*0.28), i%2===0?dark:panel);
    }

    await m.save('cat-robot-supreme.glb');
}

// ------ CAT FALLEN ANGEL ------
async function buildCatFallenAngel() {
    const m = new ModelDoc('cat-fallen-angel');
    const ashwhite = m.createMaterial('fa-ash',   0xc8bfb5, 0.8, 0.05);
    const wing     = m.createMaterial('fa-wing',  0xddd5cc, 0.7, 0.0);
    const burn     = m.createMaterial('fa-burn',  0x222211, 0.9, 0.05, 0x221100);
    const halo     = m.createMaterial('fa-halo',  0x886633, 0.4, 0.5); // tarnished
    const orange   = m.createMaterial('fa-orange',0xff8844, 0.85, 0.0);
    const dark     = m.createMaterial('fa-dark',  0x332211, 0.9, 0.05);
    const eyegl    = m.createMaterial('fa-eye',   0xddcc88, 0.2, 0.0, 0xaa8822);

    // cat body, slightly dirty-white
    m.addMesh('body',    makeSphere(0.72, 16, 12, 0, 1.22, 0), ashwhite, [0,0,0], [0,0,0], [1, 1.3, 0.88]);
    for (const [lx, lz] of [[-0.45, 0.38], [0.45, 0.38], [-0.45, -0.38], [0.45, -0.38]]) {
        m.addMesh(`leg-${lx}`,  makeCylinder(0.17, 0.13, 0.9, 8, lx, 0.5, lz), ashwhite);
        m.addMesh(`paw-${lx}`,  makeSphere(0.14, 8, 6, lx, 0.02, lz+0.05), ashwhite, [0,0,0], [0,0,0], [1, 0.5, 1.2]);
    }
    m.addMesh('head',    makeSphere(0.62, 16, 12, 0, 2.37, 0), ashwhite, [0,0,0], [0,0,0], [1, 1.0, 0.95]);
    m.addMesh('ear-l',   makeCone(0.24, 0.42, 7, -0.3, 2.85, 0), ashwhite, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r',   makeCone(0.24, 0.42, 7,  0.3, 2.85, 0), ashwhite, [0,0,0], [0,0, 0.22]);
    m.addMesh('eye-l',   makeSphere(0.09, 8, 6, -0.22, 2.44, 0.56), eyegl);
    m.addMesh('eye-r',   makeSphere(0.09, 8, 6,  0.22, 2.44, 0.56), eyegl);
    m.addMesh('tail',    makeCylinder(0.11, 0.06, 1.2, 8, 0, 1.12, -0.86), ashwhite, [0,0,0], [0.7, 0, 0.1]);

    // broken halo -- tilted, cracked, tarnished
    m.addMesh('halo',    makeTorus(0.42, 0.04, 16, 8, 0.18, 3.4, 0.05), halo, [0,0,0], [0.4, 0.2, 0]);
    m.addMesh('halo-cr', makeBox(0.06, 0.12, 0.06, -0.35, 3.42, 0.02), dark); // crack piece

    // wings -- large but scorched/torn at edges
    for (const s of [-1, 1]) {
        // main wing surface
        m.addMesh(`wing-main-${s}`,  makeSphere(0.95, 14, 8, s*1.4,  1.9, -0.3), wing,  [0,0,0], [s*0.55, 0, s*0.25], [1, 0.35, 1.0]);
        m.addMesh(`wing-outer-${s}`, makeSphere(0.55, 10, 6, s*2.15, 2.25, -0.45), wing, [0,0,0], [s*0.35, 0, s*0.2],  [1, 0.3, 0.85]);
        m.addMesh(`wing-tip-${s}`,   makeCone(0.06, 0.65, 6, s*2.6,  2.55, -0.55), wing, [0,0,0], [s*0.3, 0, s*0.18]);
        // burn damage on wing edges
        m.addMesh(`burn-${s}`,       makeSphere(0.32, 8, 6, s*2.0, 2.1, -0.42), burn, [0,0,0], [0,0,0], [1, 0.25, 0.9]);
        m.addMesh(`burn2-${s}`,      makeSphere(0.18, 6, 5, s*2.4, 2.4, -0.5), burn);
        // feathers -- a few surviving ones
        for (let fi = 0; fi < 4; fi++) {
            const fy = 1.5 + fi * 0.22, fx = s * (1.05 + fi * 0.12);
            m.addMesh(`feath-${s}-${fi}`, makeBox(0.06, 0.38, 0.055, fx, fy, -0.15), wing, [0,0,0], [fi*0.1, 0, s*(0.12+fi*0.06)]);
        }
    }

    await m.save('cat-fallen-angel.glb');
}

// ------ CAT VIKING ------
async function buildCatViking() {
    const m = new ModelDoc('cat-viking');
    const orange  = m.createMaterial('v-orange', 0xdd7733, 0.85, 0.0);
    const fur     = m.createMaterial('v-fur',    0x8b6a3a, 0.9,  0.0);
    const iron    = m.createMaterial('v-iron',   0x888899, 0.4,  0.5);
    const gold    = m.createMaterial('v-gold',   0xddaa22, 0.3,  0.7);
    const wood    = m.createMaterial('v-wood',   0x88552a, 0.9,  0.05);
    const beard   = m.createMaterial('v-beard',  0xcc9933, 0.85, 0.0);
    const blood   = m.createMaterial('v-blood',  0x882211, 0.6,  0.0);

    // big chunky cat body
    m.addMesh('body',     makeSphere(0.82, 16, 12, 0, 1.25, 0), orange, [0,0,0], [0,0,0], [1.1, 1.3, 1.0]);
    // fur cape / animal pelt around shoulders
    m.addMesh('cape-l',   makeSphere(0.52, 10, 8, -0.7, 1.8, 0), fur, [0,0,0], [0,0,0], [0.85, 0.5, 1.0]);
    m.addMesh('cape-r',   makeSphere(0.52, 10, 8,  0.7, 1.8, 0), fur, [0,0,0], [0,0,0], [0.85, 0.5, 1.0]);
    m.addMesh('cape-b',   makeBox(0.98, 0.85, 0.05, 0, 1.55, -0.5), fur); // back
    // belt with axe loops
    m.addMesh('belt',     makeBox(1.0, 0.14, 0.95, 0, 0.92, 0), m.createMaterial('belt', 0x442211, 0.85, 0.05));
    m.addMesh('buckle',   makeBox(0.18, 0.14, 0.04, 0, 0.92, 0.49), gold);
    // big meaty legs
    for (const [lx, lz] of [[-0.48, 0.4], [0.48, 0.4], [-0.48, -0.4], [0.48, -0.4]]) {
        m.addMesh(`leg-${lx}`,  makeCylinder(0.22, 0.18, 0.9, 8, lx, 0.5, lz), orange);
        m.addMesh(`boot-${lx}`, makeBox(0.28, 0.28, 0.42, lx, -0.01, lz+0.04), fur);
        m.addMesh(`brim-${lx}`, makeBox(0.3, 0.04, 0.44, lx, -0.15, lz+0.04), iron);
    }
    // head
    m.addMesh('head',   makeSphere(0.68, 16, 12, 0, 2.4, 0), orange, [0,0,0], [0,0,0], [1.02, 0.98, 0.96]);
    m.addMesh('ear-l',  makeCone(0.26, 0.44, 7, -0.32, 2.94, 0), orange, [0,0,0], [0,0,-0.28]);
    m.addMesh('ear-r',  makeCone(0.26, 0.44, 7,  0.32, 2.94, 0), orange, [0,0,0], [0,0, 0.28]);
    m.addMesh('eye-l',  makeSphere(0.1, 8, 6, -0.24, 2.44, 0.58), m.createMaterial('eye', 0x336600, 0.3, 0.0));
    m.addMesh('eye-r',  makeSphere(0.1, 8, 6,  0.24, 2.44, 0.58), m.createMaterial('eye2', 0x336600, 0.3, 0.0));
    // HUGE beard -- the most important part
    m.addMesh('beard-m', makeSphere(0.52, 12, 8, 0, 2.05, 0.3), beard, [0,0,0], [0,0,0], [0.95, 1.2, 0.6]);
    m.addMesh('beard-l', makeCylinder(0.12, 0.06, 0.55, 8, -0.22, 1.72, 0.28), beard, [0,0,0], [0.25, 0, -0.1]);
    m.addMesh('beard-r', makeCylinder(0.12, 0.06, 0.55, 8,  0.22, 1.72, 0.28), beard, [0,0,0], [0.25, 0,  0.1]);
    m.addMesh('beard-c', makeCylinder(0.08, 0.04, 0.65, 8, 0,     1.62, 0.3), beard,  [0,0,0], [0.35, 0, 0]);
    // braid rings
    for (let i = 0; i < 3; i++) {
        m.addMesh(`brd-r-${i}`, makeTorus(0.075, 0.02, 8, 5, 0, 1.62 - i*0.2, 0.3), gold);
    }
    // winged helm -- iconic
    m.addMesh('helm',      makeSphere(0.74, 14, 10, 0, 2.72, 0), iron, [0,0,0], [0,0,0], [1, 0.75, 1]);
    m.addMesh('helm-band', makeBox(0.82, 0.1, 0.82, 0, 2.43, 0), iron);
    m.addMesh('helm-nose', makeBox(0.1, 0.38, 0.06, 0, 2.44, 0.64), iron);
    m.addMesh('helm-rim',  makeTorus(0.58, 0.04, 14, 5, 0, 2.43, 0), gold);
    // wing tabs on helm
    for (const s of [-1, 1]) {
        m.addMesh(`helm-wing-${s}`, makeBox(0.1, 0.42, 0.48, s*0.72, 2.62, -0.08), m.createMaterial('hwing', 0xcccccc, 0.8, 0.0), [0,0,0], [s*0.3, 0, 0]);
    }
    // battle axe -- YES
    m.addMesh('axe-haft',  makeCylinder(0.06, 0.05, 2.1, 6, 1.1, 1.75, 0.2), wood);
    m.addMesh('axe-head',  makeBox(0.08, 0.88, 0.44, 1.1, 2.85, 0.2), iron, [0,0,0], [0, 0.2, 0]);
    m.addMesh('axe-trim',  makeBox(0.06, 0.92, 0.48, 1.1, 2.85, 0.2), gold, [0,0,0], [0, 0.2, 0]);
    m.addMesh('axe-nick',  makeBox(0.04, 0.1, 0.06, 1.14, 2.78, 0.42), blood); // battle damage
    // tail
    m.addMesh('tail',      makeCylinder(0.13, 0.07, 1.2, 8, 0, 1.12, -0.88), orange, [0,0,0], [0.7, 0, 0.1]);

    await m.save('cat-viking.glb');
}

// ------ CAT DEMON ------
async function buildCatDemon() {
    const m = new ModelDoc('cat-demon');
    const crimson = m.createMaterial('cd-crim',  0x880011, 0.7, 0.1, 0x440006);
    const dkred   = m.createMaterial('cd-dark',  0x330005, 0.9, 0.2);
    const black   = m.createMaterial('cd-black', 0x0a0008, 0.9, 0.3);
    const horn    = m.createMaterial('cd-horn',  0x221100, 0.7, 0.2);
    const yellow  = m.createMaterial('cd-eyes',  0xffcc00, 0.2, 0.0, 0xff8800);
    const spikes  = m.createMaterial('cd-spike', 0x440010, 0.8, 0.3);

    // body -- dark red, muscular
    m.addMesh('body',     makeSphere(0.78, 16, 12, 0, 1.22, 0), crimson, [0,0,0], [0,0,0], [1.05, 1.35, 0.92]);
    for (const [lx, lz] of [[-0.46, 0.38], [0.46, 0.38], [-0.46, -0.38], [0.46, -0.38]]) {
        m.addMesh(`leg-${lx}`,  makeCylinder(0.2, 0.16, 0.9, 8, lx, 0.5, lz), dkred);
        m.addMesh(`hoof-${lx}`, makeBox(0.24, 0.2, 0.3, lx, 0.0, lz+0.03), black);
    }
    // arms with claws
    for (const s of [-1, 1]) {
        m.addMesh(`arm-${s}`,   makeCylinder(0.22, 0.18, 0.82, 8, s*0.98, 1.7, 0), dkred, [0,0,0], [0,0,s*0.28]);
        m.addMesh(`claw-${s}`,  makeSphere(0.2, 8, 6, s*1.28, 1.22, 0), black, [0,0,0], [0,0,0], [1.1, 0.9, 1.0]);
        // individual claw tips
        for (let c = 0; c < 3; c++) {
            const ca = (c / 3 - 0.33) * 0.6, cy = -0.08;
            m.addMesh(`ct-${s}${c}`, makeCone(0.035, 0.2, 4, s*(1.35+ca*s*0.12), 1.08+cy, ca * 0.5), black, [0,0,0], [0.5, 0, s*ca*0.6]);
        }
    }
    // head
    m.addMesh('head',   makeSphere(0.66, 16, 12, 0, 2.38, 0), crimson, [0,0,0], [0,0,0], [1.0, 0.95, 0.95]);
    m.addMesh('ear-l',  makeCone(0.24, 0.42, 7, -0.32, 2.9, 0), dkred, [0,0,0], [0,0,-0.26]);
    m.addMesh('ear-r',  makeCone(0.24, 0.42, 7,  0.32, 2.9, 0), dkred, [0,0,0], [0,0, 0.26]);
    m.addMesh('eye-l',  makeSphere(0.105, 8, 6, -0.23, 2.44, 0.57), yellow);
    m.addMesh('eye-r',  makeSphere(0.105, 8, 6,  0.23, 2.44, 0.57), yellow);
    m.addMesh('mouth-g', makeBox(0.28, 0.08, 0.04, 0, 2.2, 0.6), black);
    // fangs
    m.addMesh('fang-l', makeCone(0.04, 0.18, 4, -0.08, 2.18, 0.62), m.createMaterial('fang', 0xeeeecc, 0.5, 0.1), [0,0,0], [0.3, 0, 0]);
    m.addMesh('fang-r', makeCone(0.04, 0.18, 4,  0.08, 2.18, 0.62), m.createMaterial('fang2',0xeeeecc, 0.5, 0.1), [0,0,0], [0.3, 0, 0]);
    // big curled horns
    for (const s of [-1, 1]) {
        m.addMesh(`horn-b-${s}`,  makeCylinder(0.1, 0.06, 0.62, 8, s*0.38, 2.92, -0.05), horn, [0,0,0], [0.35, 0, s*0.55]);
        m.addMesh(`horn-m-${s}`,  makeCylinder(0.06, 0.03, 0.48, 6, s*0.56, 3.18, -0.18), horn, [0,0,0], [0.55, 0, s*0.35]);
        m.addMesh(`horn-t-${s}`,  makeCone(0.03, 0.25, 5, s*0.68, 3.38, -0.28), horn,       [0,0,0], [0.7, 0, s*0.2]);
    }
    // bat wings -- HUGE
    for (const s of [-1, 1]) {
        m.addMesh(`wing-${s}`,   makeSphere(1.1, 14, 8, s*1.65, 1.9, -0.2), black, [0,0,0], [s*0.6, 0, s*0.2], [1, 0.3, 1.0]);
        m.addMesh(`wing2-${s}`,  makeSphere(0.6, 10, 6, s*2.4, 2.2, -0.3), dkred, [0,0,0], [s*0.4, 0, s*0.15], [1, 0.28, 0.85]);
        m.addMesh(`wtip-${s}`,   makeCone(0.06, 0.7, 5, s*2.85, 2.45, -0.38), black, [0,0,0], [s*0.35, 0, s*0.12]);
        // wing bones
        for (let wb = 0; wb < 3; wb++) {
            m.addMesh(`wbone-${s}${wb}`, makeCylinder(0.025, 0.02, 0.9, 4, s*(0.75+wb*0.58), 1.88+wb*0.12, -0.15), spikes, [0,0,0], [s*0.55, 0, s*(0.1+wb*0.08)]);
        }
    }
    // spiked tail
    m.addMesh('tail-1', makeCylinder(0.13, 0.07, 1.1, 8, 0, 1.08, -0.88), crimson, [0,0,0], [0.62, 0, 0]);
    m.addMesh('tail-2', makeCylinder(0.07, 0.045, 0.65, 6, -0.1, 0.55, -1.42), dkred, [0,0,0], [-0.25, 0, 0]);
    m.addMesh('tail-sp', makeCone(0.06, 0.36, 4, -0.14, 0.24, -1.72), black, [0,0,0], [-0.4, 0.2, 0]);

    await m.save('cat-demon.glb');
}

// ------ CAT GLITCH ------
async function buildCatGlitch() {
    const m = new ModelDoc('cat-glitch');
    const cyan   = m.createMaterial('gl-cyan',  0x00ffee, 0.2, 0.0, 0x00cccc);
    const mag    = m.createMaterial('gl-mag',   0xff00cc, 0.2, 0.0, 0xcc0099);
    const grn    = m.createMaterial('gl-grn',   0x00ff44, 0.2, 0.0, 0x00aa22);
    const wht    = m.createMaterial('gl-wht',   0xffffff, 0.1, 0.0, 0xaaaaaa);
    const blk    = m.createMaterial('gl-blk',   0x000000, 0.95, 0.1);
    const err    = m.createMaterial('gl-err',   0xff4400, 0.2, 0.0, 0xcc2200);
    const purple = m.createMaterial('gl-purp',  0xaa00ff, 0.2, 0.0, 0x7700cc);

    // glitching cat body -- offset/displaced parts representing corruption
    m.addMesh('body',     makeSphere(0.7, 16, 12, 0, 1.2, 0), cyan, [0,0,0], [0,0,0], [1, 1.3, 0.85]);
    m.addMesh('body-g1',  makeSphere(0.6, 12, 8, 0.22, 1.28, 0), mag, [0,0,0], [0,0,0], [0.9, 1.1, 0.7]); // ghost copy offset
    m.addMesh('body-g2',  makeSphere(0.45, 10, 6, -0.18, 1.18, 0.1), grn, [0,0,0], [0,0,0], [0.8, 1.0, 0.6]);
    // missing/displaced leg segments
    for (const [lx, lz, col] of [
        [-0.45, 0.38, cyan], [0.45, 0.38, mag], [-0.45, -0.38, grn], [0.45, -0.38, purple]
    ]) {
        m.addMesh(`leg-${lx}`, makeCylinder(0.16, 0.12, 0.9, 8, lx, 0.5, lz), col);
        m.addMesh(`paw-${lx}`, makeSphere(0.13, 8, 6, lx + (Math.random()-0.5)*0.12, 0.03, lz + 0.05), wht, [0,0,0], [0,0,0], [1, 0.5, 1.2]);
    }
    // head -- partially transparent/glitched
    m.addMesh('head',    makeSphere(0.62, 16, 12, 0, 2.35, 0), cyan,  [0,0,0], [0,0,0], [1, 1.0, 0.95]);
    m.addMesh('head-g',  makeSphere(0.55, 12, 8, 0.2, 2.38, 0.04), mag, [0,0,0], [0,0,0], [0.9, 0.95, 0.9]); // ghost copy
    m.addMesh('ear-l',   makeCone(0.24, 0.42, 6, -0.3, 2.84, 0), cyan, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r',   makeCone(0.24, 0.42, 6,  0.3, 2.84, 0), mag,  [0,0,0], [0,0, 0.22]); // different color -- glitched
    m.addMesh('ear-l-g', makeCone(0.2, 0.38, 5, -0.22, 2.8, 0.08), grn); // ghost ear
    // eyes -- wrong colors, misaligned
    m.addMesh('eye-l',   makeSphere(0.1, 8, 6, -0.22, 2.44, 0.57), err);
    m.addMesh('eye-r',   makeSphere(0.1, 8, 6,  0.26, 2.42, 0.55), grn); // misaligned intentionally
    m.addMesh('eye-lg',  makeSphere(0.08, 6, 5, -0.18, 2.46, 0.56), wht); // ghost
    // scan lines / glitch artifacts
    for (let i = 0; i < 6; i++) {
        const y = 0.4 + i * 0.5;
        const col2 = [cyan, mag, grn, purple, err, wht][i];
        m.addMesh(`scan-${i}`, makeBox(1.8, 0.04, 0.96, (Math.random()-0.5)*0.35, y, 0), col2);
    }
    // ERROR text block floating above
    m.addMesh('err-block', makeBox(0.8, 0.28, 0.05, 0.15, 3.52, 0), err);
    m.addMesh('err-b2',    makeBox(0.78, 0.26, 0.04, 0.14, 3.52, 0), blk);
    m.addMesh('err-stripe-1', makeBox(0.18, 0.08, 0.06, -0.22, 3.52, -0.01), wht);
    m.addMesh('err-stripe-2', makeBox(0.12, 0.08, 0.06,  0.0,  3.52, -0.01), wht);
    m.addMesh('err-stripe-3', makeBox(0.08, 0.08, 0.06,  0.16, 3.52, -0.01), wht);
    // floating displaced body parts -- classic glitch effect
    m.addMesh('float-body', makeSphere(0.35, 10, 8, 1.4, 1.85, 0.1), purple, [0,0,0], [0,0,0], [1, 0.9, 0.8]);
    m.addMesh('float-eye',  makeSphere(0.12, 6, 5, 1.55, 2.0, 0.3), err);
    m.addMesh('float-ear',  makeCone(0.16, 0.3, 5, 1.45, 2.22, 0.1), cyan, [0,0,0], [0,0,0.4]);
    // tail -- glitching between positions
    m.addMesh('tail',   makeCylinder(0.11, 0.06, 1.2, 8, 0, 1.1, -0.85), cyan,   [0,0,0], [0.7, 0, 0.1]);
    m.addMesh('tail-g', makeCylinder(0.09, 0.05, 1.0, 6, 0.28, 1.05, -0.8), mag, [0,0,0], [0.5, 0.2, 0.0]); // ghost tail

    await m.save('cat-glitch.glb');
}

// ------ CAT JESUS ------
async function buildCatJesus() {
    const m = new ModelDoc('cat-jesus');
    const white   = m.createMaterial('j-white',  0xf5f5f0, 0.8,  0.0, 0x111100);
    const orange  = m.createMaterial('j-orange', 0xff8844, 0.85, 0.0);
    const gold    = m.createMaterial('j-gold',   0xffdd44, 0.2,  0.1, 0xddaa00);
    const skin    = m.createMaterial('j-skin',   0xffb07a, 0.8,  0.0);
    const beam    = m.createMaterial('j-beam',   0xffffcc, 0.1,  0.0, 0xffff88, 0.7);

    // cat body in a white robe
    m.addMesh('body',    makeSphere(0.7, 16, 12, 0, 1.2, 0), orange, [0,0,0], [0,0,0], [1, 1.3, 0.85]);
    // robe flowing down
    m.addMesh('robe',    makeCylinder(0.78, 0.88, 1.55, 14, 0, 0.8, 0), white);
    m.addMesh('robe-sh', makeSphere(0.78, 14, 10, 0, 1.75, 0), white, [0,0,0], [0,0,0], [1.05, 0.55, 1.05]);
    // sleeves -- wide, draping
    for (const s of [-1, 1]) {
        m.addMesh(`sleeve-${s}`,  makeCylinder(0.24, 0.38, 0.9, 8, s*0.9, 1.62, 0), white, [0,0,0], [0, 0, s*0.42]);
        m.addMesh(`sleeve2-${s}`, makeCylinder(0.38, 0.28, 0.55, 8, s*1.3, 1.28, 0), white, [0,0,0], [0, 0, s*0.25]);
        m.addMesh(`hand-${s}`,    makeSphere(0.14, 8, 6, s*1.55, 1.02, 0), skin);
    }
    // head + cat ears
    m.addMesh('head',  makeSphere(0.62, 16, 12, 0, 2.35, 0), orange, [0,0,0], [0,0,0], [1, 1.0, 0.95]);
    m.addMesh('ear-l', makeCone(0.24, 0.42, 7, -0.3, 2.84, 0), orange, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r', makeCone(0.24, 0.42, 7,  0.3, 2.84, 0), orange, [0,0,0], [0,0, 0.22]);
    m.addMesh('eye-l', makeSphere(0.09, 8, 6, -0.22, 2.44, 0.56), m.createMaterial('el', 0x2244ff, 0.2, 0.0, 0x0011aa));
    m.addMesh('eye-r', makeSphere(0.09, 8, 6,  0.22, 2.44, 0.56), m.createMaterial('er', 0x2244ff, 0.2, 0.0, 0x0011aa));
    // halo -- glowing golden ring
    m.addMesh('halo',     makeTorus(0.52, 0.06, 20, 8, 0, 3.22, 0), gold);
    m.addMesh('halo-glo', makeTorus(0.52, 0.1,  20, 8, 0, 3.22, 0), beam);
    // divine light rays around halo
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        m.addMesh(`ray-${i}`, makeBox(0.04, 0.45, 0.02, Math.cos(a)*0.64, 3.22, Math.sin(a)*0.64), gold, [0,0,0], [0, a, 0]);
    }
    // blessing hands position -- arms slightly open
    m.addMesh('beard', makeSphere(0.28, 10, 8, 0, 2.08, 0.32), m.createMaterial('beard', 0xdda055, 0.85, 0.0), [0,0,0], [0,0,0], [0.88, 0.9, 0.55]);
    // tail visible under robe
    m.addMesh('tail', makeCylinder(0.1, 0.05, 1.1, 8, 0, 0.75, -0.88), orange, [0,0,0], [0.55, 0, 0]);

    await m.save('cat-jesus.glb');
}

// ------ CAT ORB ------
async function buildCatOrb() {
    const m = new ModelDoc('cat-orb');
    const glow   = m.createMaterial('orb-glow', 0x88aaff, 0.1,  0.0, 0x4466cc);
    const core   = m.createMaterial('orb-core', 0xccddff, 0.05, 0.0, 0x99aaff);
    const purple = m.createMaterial('orb-purp', 0xaa55ff, 0.1,  0.0, 0x6622cc);
    const white  = m.createMaterial('orb-wht',  0xeeeeff, 0.5,  0.0, 0x6688aa);
    const ring   = m.createMaterial('orb-ring', 0x66aaff, 0.2,  0.1, 0x3366cc, 0.75);

    // main orb body -- large pulsing sphere
    m.addMesh('core',    makeSphere(0.9, 20, 16, 0, 1.5, 0), core);
    m.addMesh('glow-1',  makeSphere(1.0, 16, 12, 0, 1.5, 0), glow,   [0,0,0], [0,0,0], [1, 1, 1]);
    m.addMesh('glow-2',  makeSphere(1.1, 14, 10, 0, 1.5, 0), purple, [0,0,0], [0,0,0], [1, 0.95, 1]);
    // cat face on the orb surface (inset slightly)
    m.addMesh('eye-l', makeSphere(0.1,  10, 8, -0.28, 1.72, 0.84), white);
    m.addMesh('eye-r', makeSphere(0.1,  10, 8,  0.28, 1.72, 0.84), white);
    m.addMesh('pup-l', makeSphere(0.06, 8, 6, -0.28, 1.72, 0.9),  m.createMaterial('pl', 0x000022, 0.9, 0.0));
    m.addMesh('pup-r', makeSphere(0.06, 8, 6,  0.28, 1.72, 0.9),  m.createMaterial('pr', 0x000022, 0.9, 0.0));
    m.addMesh('nose',  makeSphere(0.055, 8, 6, 0, 1.58, 0.9), m.createMaterial('nose', 0xff99aa, 0.7, 0.0));
    // cat ears poking from top of orb
    m.addMesh('ear-l', makeCone(0.2, 0.38, 6, -0.38, 2.32, 0), glow, [0,0,0], [0,0,-0.18]);
    m.addMesh('ear-r', makeCone(0.2, 0.38, 6,  0.38, 2.32, 0), glow, [0,0,0], [0,0, 0.18]);
    // orbital rings around the orb
    m.addMesh('ring-h', makeTorus(1.25, 0.055, 22, 8, 0, 1.5, 0), ring, [0,0,0], [0, 0, 0]);
    m.addMesh('ring-v', makeTorus(1.25, 0.055, 22, 8, 0, 1.5, 0), ring, [0,0,0], [Math.PI/2, 0, 0]);
    m.addMesh('ring-d', makeTorus(1.25, 0.055, 22, 8, 0, 1.5, 0), purple, [0,0,0], [0, Math.PI/4, 0]);
    // orbital particles 
    for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        m.addMesh(`orb-p-${i}`, makeSphere(0.1, 8, 6, Math.cos(a)*1.25, 1.5 + Math.sin(a)*1.25, 0), i%2===0?glow:purple);
    }
    // wispy tail made of spheres
    for (let i = 0; i < 5; i++) {
        const y = 0.52 - i * 0.15, s2 = 0.14 - i * 0.02;
        m.addMesh(`tail-${i}`, makeSphere(Math.max(s2, 0.04), 6, 5, 0, y, -0.1 - i*0.1), glow);
    }

    await m.save('cat-orb.glb');
}

// ------ CAT PIRATE ------
async function buildCatPirate() {
    const m = new ModelDoc('cat-pirate');
    const orange  = m.createMaterial('p-orange', 0xff8844, 0.85, 0.0);
    const black   = m.createMaterial('p-black',  0x111111, 0.9,  0.1);
    const dkbrown = m.createMaterial('p-dbrown', 0x3a1c08, 0.85, 0.05);
    const red     = m.createMaterial('p-red',    0xaa1111, 0.7,  0.05);
    const gold    = m.createMaterial('p-gold',   0xddaa22, 0.3,  0.7);
    const silver  = m.createMaterial('p-silver', 0xaabbcc, 0.3,  0.6);

    // cat body in pirate coat
    m.addMesh('body',     makeSphere(0.7, 16, 12, 0, 1.2, 0), orange, [0,0,0], [0,0,0], [1, 1.3, 0.85]);
    m.addMesh('coat-f',   makeBox(0.75, 1.1, 0.08, 0, 1.35, 0.52), red);    // front coat flap
    m.addMesh('coat-b',   makeBox(1.05, 1.35, 0.06, 0, 1.22, -0.5),  dkbrown); // coat back
    m.addMesh('coat-brd', makeBox(0.08, 1.05, 0.06, 0, 1.4, 0.56), gold);   // center trim
    // buttons
    for (let i = 0; i < 4; i++) {
        m.addMesh(`btn-${i}`, makeSphere(0.045, 6, 5, 0, 1.72 - i*0.28, 0.57), gold);
    }
    // coat shoulders / sleeves
    for (const s of [-1, 1]) {
        m.addMesh(`sleeve-${s}`, makeCylinder(0.2, 0.16, 0.82, 8, s*0.96, 1.65, 0), dkbrown, [0,0,0], [0,0,s*0.3]);
        m.addMesh(`cuff-${s}`,   makeCylinder(0.18, 0.18, 0.16, 8, s*1.25, 1.18, 0), red);
    }
    // hook hand on left, paw on right
    m.addMesh('hook-arm', makeCylinder(0.1, 0.085, 0.45, 8, -1.55, 1.0, 0), orange);
    m.addMesh('hook',     makeCylinder(0.055, 0.03, 0.42, 6, -1.7, 0.82, 0.12), silver, [0,0,0], [-0.75, 0, 0]);
    m.addMesh('hook-tip', makeCone(0.03, 0.12, 5, -1.75, 0.6, 0.24), silver, [0,0,0], [-0.75, 0, 0.2]);
    m.addMesh('paw-r',    makeSphere(0.16, 8, 6, 1.42, 1.0, 0), orange, [0,0,0], [0,0,0], [1, 0.65, 1.1]);
    // cat legs + boots
    for (const [lx, lz] of [[-0.42, 0.36], [0.42, 0.36], [-0.42, -0.36], [0.42, -0.36]]) {
        m.addMesh(`leg-${lx}`,  makeCylinder(0.17, 0.14, 0.9, 8, lx, 0.5, lz), dkbrown);
        m.addMesh(`boot-${lx}`, makeBox(0.22, 0.24, 0.38, lx, -0.02, lz+0.04), black);
        m.addMesh(`bsole-${lx}`,makeBox(0.24, 0.06, 0.4, lx, -0.16, lz+0.04), dkbrown);
    }
    // head + eyepatch
    m.addMesh('head',   makeSphere(0.62, 16, 12, 0, 2.35, 0), orange, [0,0,0], [0,0,0], [1, 1.0, 0.95]);
    m.addMesh('ear-l',  makeCone(0.24, 0.42, 7, -0.3, 2.84, 0), orange, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r',  makeCone(0.24, 0.42, 7,  0.3, 2.84, 0), orange, [0,0,0], [0,0, 0.22]);
    m.addMesh('eye-r',  makeSphere(0.1, 8, 6, 0.24, 2.44, 0.57), m.createMaterial('eye', 0x3c6000, 0.3, 0.0));
    // eyepatch
    m.addMesh('patch',  makeSphere(0.1, 8, 6, -0.24, 2.44, 0.57), black, [0,0,0], [0,0,0], [1.2, 0.9, 0.4]);
    m.addMesh('pstr-h', makeBox(0.22, 0.025, 0.02, -0.06, 2.44, 0.57), black); // strap horizontal
    m.addMesh('pstr-v', makeBox(0.025, 0.28, 0.02, -0.24, 2.44, 0.57), black); // strap over ear
    // pirate hat -- tricorn
    m.addMesh('hat-main', makeSphere(0.7, 14, 10, 0, 2.82, 0), black, [0,0,0], [0,0,0], [1.05, 0.65, 1]);
    m.addMesh('hat-brim', makeBox(1.15, 0.1, 0.38, 0, 2.54, 0), black);
    m.addMesh('hat-skull',makeBox(0.22, 0.18, 0.04, 0, 2.75, 0.5), m.createMaterial('skull', 0xddddcc, 0.8, 0.0)); // skull badge
    m.addMesh('hat-trim', makeBox(1.17, 0.04, 0.4, 0, 2.63, 0), gold);
    // tail curled like a pirate swagger
    m.addMesh('tail', makeCylinder(0.11, 0.06, 1.2, 8, 0, 1.1, -0.85), orange, [0,0,0], [0.7, 0, 0.15]);

    await m.save('cat-pirate.glb');
}

// ------ CAT DISCO ------
async function buildCatDisco() {
    const m = new ModelDoc('cat-disco');
    const orange  = m.createMaterial('d-orange', 0xff8844, 0.85, 0.0);
    const silver  = m.createMaterial('d-silver', 0xccddee, 0.05, 0.9);
    const gold    = m.createMaterial('d-gold',   0xffdd22, 0.1,  0.8, 0xcc9900);
    const pink    = m.createMaterial('d-pink',   0xff44cc, 0.3,  0.0, 0xcc0099);
    const cyan    = m.createMaterial('d-cyan',   0x22ffee, 0.2,  0.0, 0x00cccc);
    const purple  = m.createMaterial('d-purp',   0xcc22ff, 0.2,  0.0, 0x8800cc);
    const white   = m.createMaterial('d-white',  0xffffff, 0.1,  0.2, 0x888888);
    const platform= m.createMaterial('d-plat',   0x888899, 0.3,  0.5);

    // sparkly disco body -- sequined outfit
    m.addMesh('body',   makeSphere(0.7, 16, 12, 0, 1.2, 0), silver, [0,0,0], [0,0,0], [1, 1.3, 0.85]);
    m.addMesh('seq-1',  makeSphere(0.55, 12, 8, 0, 1.3, 0.02), gold,   [0,0,0], [0,0,0], [0.85, 1.0, 0.55]); // sequins layer
    m.addMesh('seq-2',  makeSphere(0.48, 10, 8, 0, 1.3, 0.02), pink,   [0,0,0], [0,0,0], [0.75, 0.9, 0.5]);
    // flare pants
    for (const [lx, lz] of [[-0.36, 0.32], [0.36, 0.32], [-0.36, -0.32], [0.36, -0.32]]) {
        m.addMesh(`flare-${lx}`,  makeCylinder(0.16, 0.32, 1.05, 10, lx, 0.4, lz), purple); // flare bottom
        m.addMesh(`flare2-${lx}`, makeCylinder(0.14, 0.16, 0.55, 8,  lx, 0.85, lz), silver);
        // platform shoes
        m.addMesh(`shoe-${lx}`,   makeBox(0.22, 0.16, 0.38, lx, -0.12, lz+0.04), pink);
        m.addMesh(`plat-${lx}`,   makeBox(0.22, 0.22, 0.40, lx, -0.27, lz+0.04), platform);
    }
    // sparkly arms
    for (const s of [-1, 1]) {
        m.addMesh(`arm-${s}`,  makeCylinder(0.14, 0.11, 0.82, 8, s*0.96, 1.65, 0), silver, [0,0,0], [0,0,s*0.3]);
        m.addMesh(`aglv-${s}`, makeCylinder(0.13, 0.13, 0.22, 8, s*1.25, 1.18, 0), gold);   // glove cuff
        m.addMesh(`paw-${s}`,  makeSphere(0.13, 8, 6, s*1.42, 1.0, 0), white);
    }
    // head
    m.addMesh('head',  makeSphere(0.62, 16, 12, 0, 2.35, 0), orange, [0,0,0], [0,0,0], [1, 1.0, 0.95]);
    m.addMesh('ear-l', makeCone(0.24, 0.42, 7, -0.3, 2.84, 0), orange, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r', makeCone(0.24, 0.42, 7,  0.3, 2.84, 0), orange, [0,0,0], [0,0, 0.22]);
    m.addMesh('eye-l', makeSphere(0.09, 8, 6, -0.22, 2.44, 0.56), pink);
    m.addMesh('eye-r', makeSphere(0.09, 8, 6,  0.22, 2.44, 0.56), cyan);
    // afro / big disco hair
    m.addMesh('hair',    makeSphere(0.88, 16, 12, 0, 2.75, 0), gold, [0,0,0], [0,0,0], [1.05, 0.95, 1.0]);
    m.addMesh('hair-sh', makeSphere(0.8, 14, 10, 0, 2.75, 0), pink,  [0,0,0], [0,0,0], [0.92, 0.82, 0.9]);
    // mini disco ball on head -- THE PIECE DE RESISTANCE
    m.addMesh('disco-ball',  makeSphere(0.28, 12, 10, 0, 3.52, 0), silver);
    m.addMesh('ball-row-1',  makeTorus(0.29, 0.02, 14, 4, 0, 3.52, 0), gold);
    m.addMesh('ball-row-2',  makeTorus(0.29, 0.02, 14, 4, 0, 3.52, 0), gold, [0,0,0], [Math.PI/4, 0, 0]);
    m.addMesh('ball-row-3',  makeTorus(0.29, 0.02, 14, 4, 0, 3.52, 0), pink, [0,0,0], [-Math.PI/4, 0, 0]);
    m.addMesh('ball-v',      makeTorus(0.29, 0.015, 14, 4, 0, 3.52, 0), cyan, [0,0,0], [Math.PI/2, 0, 0]);
    // sparkle particles around ball
    for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2, r = 0.52;
        const cols = [gold, pink, cyan, purple, silver, white];
        m.addMesh(`spark-${i}`, makeSphere(0.06, 5, 4, Math.cos(a)*r, 3.52+Math.sin(a)*r*0.5, Math.sin(a)*r), cols[i]);
    }
    // tail with sequins
    m.addMesh('tail', makeCylinder(0.11, 0.06, 1.2, 8, 0, 1.1, -0.85), gold, [0,0,0], [0.7, 0, 0.1]);

    await m.save('cat-disco.glb');
}

// ------ CAT ZOMBIE ------
async function buildCatZombie() {
    const m = new ModelDoc('cat-zombie');
    const rot    = m.createMaterial('z-rot',    0x4a6635, 0.9,  0.0); // rotting green-grey
    const dark   = m.createMaterial('z-dark',   0x2a3320, 0.95, 0.05);
    const bone   = m.createMaterial('z-bone',   0xd4c9a8, 0.8,  0.05);
    const blood  = m.createMaterial('z-blood',  0x880011, 0.7,  0.0, 0x220000);
    const eye    = m.createMaterial('z-eye',    0xeeffcc, 0.2,  0.0, 0x88cc22); // milky green
    const torn   = m.createMaterial('z-torn',   0x332211, 0.9,  0.05);

    // decaying cat body -- asymmetric, slumped
    m.addMesh('body',      makeSphere(0.72, 16, 12, 0, 1.18, 0), rot,   [0,0,0], [0.12, 0, 0], [1, 1.28, 0.88]);
    m.addMesh('rib-l',     makeBox(0.05, 0.42, 0.04, -0.28, 1.22, 0.62), bone); // exposed ribs
    m.addMesh('rib-l2',    makeBox(0.05, 0.38, 0.04, -0.18, 1.32, 0.64), bone);
    m.addMesh('rib-r',     makeBox(0.05, 0.36, 0.04,  0.25, 1.2, 0.62), bone);
    m.addMesh('flesh-t',   makeBox(0.22, 0.18, 0.05, -0.28, 1.08, 0.65), blood); // torn flesh
    // torn rags for clothing
    m.addMesh('rag-f',   makeBox(0.62, 0.55, 0.06, 0, 1.35, 0.5), torn);
    m.addMesh('rag-l',   makeBox(0.06, 0.48, 0.06, -0.45, 1.22, 0.5), torn, [0,0,0], [0, 0, 0.18]);
    m.addMesh('rag-r',   makeBox(0.06, 0.38, 0.06,  0.4, 1.28, 0.5), torn, [0,0,0], [0, 0,-0.12]);
    // arms -- one normal, one skeletal/missing
    m.addMesh(`arm-r`,   makeCylinder(0.2, 0.16, 0.85, 8, 0.98, 1.62, 0), rot, [0,0,0], [0,0, 0.3]);
    m.addMesh(`hand-r`,  makeSphere(0.19, 8, 6, 1.4, 1.12, 0), rot, [0,0,0], [0,0,0], [1.1, 0.9, 1.0]);
    // reaching arm (zombie pose -- outstretched)
    m.addMesh('arm-l',   makeCylinder(0.18, 0.14, 0.9, 8, -0.98, 1.68, 0), rot, [0,0,0], [0.4, 0,-0.35]);
    m.addMesh('bone-l',  makeCylinder(0.06, 0.05, 0.58, 6, -1.52, 1.25, 0.2), bone, [0,0,0], [0.4, 0, -0.2]);
    m.addMesh('hand-l',  makeSphere(0.13, 8, 6, -1.68, 1.0, 0.38), bone, [0,0,0], [0,0,0], [1.1, 0.85, 1.0]);
    for (let c = 0; c < 3; c++) {
        m.addMesh(`claw-l${c}`, makeCone(0.03, 0.2, 4, -1.72 + c*0.07, 0.82, 0.44+c*0.04), bone, [0,0,0], [0.5, 0, (c-1)*0.4]);
    }
    // legs -- one dragging
    for (const [lx, lz, rot2] of [[-0.44, 0.36, 0.0], [0.44, 0.36, 0.08], [-0.44, -0.36, 0.0], [0.44, -0.36, 0.0]]) {
        m.addMesh(`leg-${lx}`, makeCylinder(0.18, 0.14, 0.92, 8, lx, 0.5, lz), rot, [0,0,0], [rot2, 0, 0]);
        m.addMesh(`paw-${lx}`, makeSphere(0.15, 8, 6, lx, 0.02, lz+0.05), dark, [0,0,0], [0,0,0], [1, 0.5, 1.2]);
    }
    // bloodstain on ground / foot area
    m.addMesh('blood-d', makeSphere(0.28, 10, 6, 0.44, 0.0, 0.38), blood, [0,0,0], [0,0,0], [1.4, 0.08, 1.4]);
    // head -- tilted, jaw slack
    m.addMesh('head',    makeSphere(0.62, 16, 12, 0, 2.35, 0), rot,  [0,0,0], [0.18, 0.06, 0], [1, 0.98, 0.94]);
    m.addMesh('jaw',     makeSphere(0.38, 10, 8, 0, 2.12, 0.18), rot, [0,0,0], [0.35, 0, 0], [1, 0.55, 0.9]);
    m.addMesh('ear-l',   makeCone(0.2, 0.36, 6, -0.3, 2.8, 0), rot, [0,0,0], [0,0,-0.2]);
    m.addMesh('ear-r',   makeCone(0.18, 0.32, 5,  0.3, 2.82, 0), dark, [0,0,0], [0,0, 0.18]); // one ear ripped
    // milky dead eyes -- one falling out
    m.addMesh('eye-l',   makeSphere(0.1, 8, 6, -0.22, 2.42, 0.54), eye);
    m.addMesh('eye-r',   makeSphere(0.1, 8, 6,  0.24, 2.38, 0.56), eye, [0,0,0], [0,0,0], [1, 1.3, 1]);
    m.addMesh('blood-e', makeCylinder(0.04, 0.025, 0.25, 5, -0.22, 2.28, 0.56), blood); // drip from eye
    // brain matter peaking through skull (why not)
    m.addMesh('brain',   makeSphere(0.24, 8, 6, 0.12, 2.85, 0), m.createMaterial('brain', 0xcc6677, 0.7, 0.0), [0,0,0], [0,0,0], [1.1, 0.75, 1.0]);
    // tail -- half decomposed
    m.addMesh('tail',    makeCylinder(0.1, 0.04, 0.85, 6, 0, 1.08, -0.86), rot, [0,0,0], [0.6, 0.15, 0]);
    m.addMesh('tail-b',  makeCylinder(0.04, 0.025, 0.38, 4, 0, 0.72, -1.38), bone, [0,0,0], [-0.2, 0, 0]);

    await m.save('cat-zombie.glb');
}

// ------ CAT ALIEN ------
async function buildCatAlien() {
    const m = new ModelDoc('cat-alien');
    const green   = m.createMaterial('al-green', 0x44cc66, 0.5,  0.1, 0x228844);
    const lgrn    = m.createMaterial('al-lgrn',  0x88ffaa, 0.4,  0.0, 0x44cc77);
    const black   = m.createMaterial('al-black', 0x000005, 0.95, 0.1);
    const silver  = m.createMaterial('al-sil',   0xaabbcc, 0.2,  0.7);
    const glowblue= m.createMaterial('al-glow',  0x33aaff, 0.1,  0.0, 0x1166cc);
    const white   = m.createMaterial('al-wht',   0xeeffff, 0.5,  0.0, 0x446688);

    // slim alien cat body
    m.addMesh('body',     makeSphere(0.62, 16, 12, 0, 1.22, 0), green,  [0,0,0], [0,0,0], [0.9, 1.25, 0.82]);
    m.addMesh('chest-g',  makeSphere(0.38, 10, 8, 0, 1.32, 0.48), lgrn, [0,0,0], [0,0,0], [0.8, 0.9, 0.4]); // bioluminescent patch
    // 4 slim arms -- two pairs for alien hands
    for (const s of [-1, 1]) {
        m.addMesh(`arm-up-${s}`,   makeCylinder(0.12, 0.09, 0.75, 8, s*0.82, 1.72, 0), green, [0,0,0], [0,0,s*0.28]);
        m.addMesh(`arm-lo-${s}`,   makeCylinder(0.09, 0.07, 0.65, 8, s*1.1, 1.23, 0), green);
        m.addMesh(`hand-${s}`,     makeSphere(0.12, 8, 6, s*1.35, 0.88, 0), lgrn, [0,0,0], [0,0,0], [1.1, 0.9, 1.0]);
        // 3 long alien fingers with sucker tips
        for (let f = 0; f < 3; f++) {
            const fa = (f / 3 - 0.33) * 0.5;
            m.addMesh(`fing-${s}${f}`, makeCylinder(0.025, 0.02, 0.3, 5, s*(1.46+fa*s*0.12), 0.72, fa*0.5), green);
            m.addMesh(`suck-${s}${f}`, makeSphere(0.04, 5, 4, s*(1.5+fa*s*0.14), 0.58, fa*0.52), lgrn);
        }
    }
    // slim legs
    for (const [lx, lz] of [[-0.38, 0.32], [0.38, 0.32], [-0.38, -0.32], [0.38, -0.32]]) {
        m.addMesh(`leg-${lx}`,  makeCylinder(0.13, 0.1, 0.88, 8, lx, 0.52, lz), green);
        m.addMesh(`foot-${lx}`, makeSphere(0.14, 8, 6, lx, 0.04, lz+0.12), green, [0,0,0], [0,0,0], [1.2, 0.5, 1.5]);
    }
    // BIG alien head -- oversized, classic
    m.addMesh('head',     makeSphere(0.98, 20, 16, 0, 2.52, 0), green, [0,0,0], [0,0,0], [0.88, 1.0, 0.88]);
    // cat ears -- smaller, more aerodynamic
    m.addMesh('ear-l',    makeCone(0.2, 0.48, 7, -0.4, 3.2, 0), green, [0,0,0], [0,0,-0.18]);
    m.addMesh('ear-r',    makeCone(0.2, 0.48, 7,  0.4, 3.2, 0), green, [0,0,0], [0,0, 0.18]);
    // HUGE black almond eyes
    m.addMesh('eye-l',    makeSphere(0.24, 12, 10, -0.34, 2.58, 0.84), black,  [0,0,0], [0,0,0], [1, 1.8, 0.45]);
    m.addMesh('eye-r',    makeSphere(0.24, 12, 10,  0.34, 2.58, 0.84), black,  [0,0,0], [0,0,0], [1, 1.8, 0.45]);
    m.addMesh('shine-l',  makeSphere(0.08, 8, 6, -0.28, 2.62, 0.92), white);   // eye shine
    m.addMesh('shine-r',  makeSphere(0.08, 8, 6,  0.28, 2.62, 0.92), white);
    // tiny slit nostrils (no nose)
    m.addMesh('nos-l', makeBox(0.03, 0.06, 0.03, -0.07, 2.38, 0.95), black);
    m.addMesh('nos-r', makeBox(0.03, 0.06, 0.03,  0.07, 2.38, 0.95), black);
    // antennae -- bouncy alien antennae
    for (const s of [-1, 1]) {
        m.addMesh(`ant-b-${s}`, makeCylinder(0.03, 0.02, 0.55, 6, s*0.28, 3.68, 0), green, [0,0,0], [0, 0, s*0.22]);
        m.addMesh(`ant-t-${s}`, makeSphere(0.08, 8, 6, s*0.38, 4.18, 0), glowblue);
    }
    // abduction beam from below -- classic joke
    m.addMesh('beam-t',  makeCylinder(0.55, 0.85, 1.5, 14, 0, -0.5, 0), glowblue, [0,0,0], [0,0,0], [1,1,1]);
    // tail -- thin alien tail
    m.addMesh('tail', makeCylinder(0.07, 0.03, 1.1, 6, 0, 1.05, -0.84), lgrn, [0,0,0], [0.55, 0, 0]);

    await m.save('cat-alien.glb');
}

// ------ CAT GHOST ------
async function buildCatGhost() {
    const m = new ModelDoc('cat-ghost');
    const ghost  = m.createMaterial('gh-white',  0xeeeeff, 0.3, 0.0, 0x8888cc, 0.78);
    const dark   = m.createMaterial('gh-dark',   0x1a1a2e, 0.95, 0.0,  0x000011);
    const eye    = m.createMaterial('gh-eye',    0x000022, 0.9,  0.1);
    const glowwh = m.createMaterial('gh-glow',   0xffffff, 0.05, 0.0,  0xaaaadd, 0.45);
    const bluegl = m.createMaterial('gh-blue',   0x6688ff, 0.2,  0.0,  0x3344cc, 0.65);

    // wispy ghost body -- floating, no legs
    m.addMesh('body',    makeSphere(0.75, 16, 12, 0, 1.5, 0), ghost, [0,0,0], [0,0,0], [1, 1.25, 0.95]);
    // wispy bottom -- undulating ghostly trail
    for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const wx = Math.cos(a) * 0.38, wz = Math.sin(a) * 0.38;
        m.addMesh(`wisp-${i}`, makeCylinder(0.15, 0.04, 0.55+i*0.06, 6, wx, 0.65-i*0.04, wz), ghost, [0,0,0], [(i*0.15)%0.4-0.2, 0, 0]);
    }
    m.addMesh('wisp-c',  makeCylinder(0.22, 0.02, 0.85, 8, 0, 0.6, 0), ghost);
    // glow aura
    m.addMesh('aura',    makeSphere(0.95, 16, 12, 0, 1.5, 0), glowwh, [0,0,0], [0,0,0], [1, 1.2, 1]);
    m.addMesh('aura-2',  makeSphere(1.1,  14, 10, 0, 1.5, 0), bluegl, [0,0,0], [0,0,0], [1, 1.15, 1]);
    // arms -- trailing wispy ghost arms
    for (const s of [-1, 1]) {
        m.addMesh(`arm-${s}`, makeCylinder(0.18, 0.06, 0.72, 8, s*0.95, 1.72, 0), ghost, [0,0,0], [0.15, 0, s*0.35]);
        m.addMesh(`hnd-${s}`, makeSphere(0.12, 8, 6, s*1.38, 1.38, 0), ghost, [0,0,0], [0,0,0], [1.2, 0.8, 1.0]);
        // finger wisps
        for (let f = 0; f < 3; f++) {
            m.addMesh(`fwsp-${s}${f}`, makeCylinder(0.04, 0.01, 0.28, 5, s*(1.48+(f-1)*0.08), 1.22+(f-1)*0.04, 0.0), ghost, [0,0,0], [(f-1)*0.25, 0, s*0.1]);
        }
    }
    // head -- classic cat ghost head with HUGE eyes
    m.addMesh('head',  makeSphere(0.72, 18, 14, 0, 2.45, 0), ghost, [0,0,0], [0,0,0], [0.96, 1.0, 0.94]);
    m.addMesh('ear-l', makeCone(0.25, 0.46, 7, -0.32, 2.98, 0), ghost, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r', makeCone(0.25, 0.46, 7,  0.32, 2.98, 0), ghost, [0,0,0], [0,0, 0.22]);
    // sad huge O eyes
    m.addMesh('eye-l',  makeSphere(0.15, 10, 8, -0.25, 2.52, 0.64), eye, [0,0,0], [0,0,0], [1, 1.5, 0.55]);
    m.addMesh('eye-r',  makeSphere(0.15, 10, 8,  0.25, 2.52, 0.64), eye, [0,0,0], [0,0,0], [1, 1.5, 0.55]);
    m.addMesh('shine-l',makeSphere(0.055, 7, 5, -0.22, 2.56, 0.7),  glowwh);
    m.addMesh('shine-r',makeSphere(0.055, 7, 5,  0.22, 2.56, 0.7),  glowwh);
    // small wavy mouth
    for (let i = 0; i < 4; i++) {
        m.addMesh(`mouth-${i}`, makeSphere(0.04, 5, 4, (i-1.5)*0.11, 2.24 + Math.sin(i)*0.03, 0.68), eye);
    }
    // ghostly chain -- bound to something spooky
    for (let i = 0; i < 6; i++) {
        const cy = 0.85 - i * 0.22;
        m.addMesh(`chain-${i}`, makeTorus(0.1, 0.025, 8, 4, -0.55+Math.sin(i)*0.08, cy, -0.1+Math.cos(i)*0.06), dark, [0,0,0], [0, i*0.55, 0]);
    }

    await m.save('cat-ghost.glb');
}

// ------ CAT WITCH ------
async function buildCatWitch() {
    const m = new ModelDoc('cat-witch');
    const black  = m.createMaterial('wt-black', 0x0d0d15, 0.85, 0.1);
    const purple = m.createMaterial('wt-purp',  0x5a1a8a, 0.6,  0.1, 0x220044);
    const orange = m.createMaterial('wt-orange',0xff8844, 0.85, 0.0);
    const skin   = m.createMaterial('wt-skin',  0xc8b89a, 0.8,  0.0);
    const green  = m.createMaterial('wt-green', 0x225500, 0.6,  0.0, 0x112200);
    const caul   = m.createMaterial('wt-caul',  0x228822, 0.5,  0.2, 0x114411);
    const gold   = m.createMaterial('wt-gold',  0xcc9922, 0.3,  0.5);
    const wood   = m.createMaterial('wt-wood',  0x7a4a22, 0.9,  0.05);

    // cat body in witch robes
    m.addMesh('body',     makeSphere(0.7, 16, 12, 0, 1.2, 0), orange, [0,0,0], [0,0,0], [1, 1.3, 0.85]);
    m.addMesh('robe',     makeCylinder(0.76, 0.92, 1.65, 14, 0, 0.72, 0), black);
    m.addMesh('robe-top', makeSphere(0.78, 14, 10, 0, 1.7, 0), black, [0,0,0], [0,0,0], [1.0, 0.52, 1.0]);
    m.addMesh('robe-trim',makeBox(0.88, 0.06, 0.98, 0, -0.03, 0), purple); // hem with purple trim
    // sleeves with pointy tips
    for (const s of [-1, 1]) {
        m.addMesh(`slv-${s}`,  makeCylinder(0.22, 0.35, 0.88, 8, s*0.94, 1.62, 0), black, [0,0,0], [0, 0, s*0.42]);
        m.addMesh(`slv2-${s}`, makeCylinder(0.34, 0.22, 0.55, 8, s*1.32, 1.24, 0), black, [0,0,0], [0, 0, s*0.22]);
        m.addMesh(`hnd-${s}`,  makeSphere(0.13, 8, 6, s*1.58, 1.0, 0), skin);
        // gnarled warty fingers
        for (let f = 0; f < 3; f++) {
            const fy = 0.82-(f*0.08), fx = s*(1.62 + (f-1)*0.06);
            m.addMesh(`fng-${s}${f}`, makeCylinder(0.025, 0.018, 0.28, 4, fx, fy, -0.05+f*0.08), skin);
        }
    }
    // big green nose (classic witch)
    m.addMesh('head',  makeSphere(0.62, 16, 12, 0, 2.38, 0), orange, [0,0,0], [0,0,0], [1, 0.98, 0.95]);
    m.addMesh('ear-l', makeCone(0.24, 0.42, 7, -0.3, 2.86, 0), orange, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r', makeCone(0.24, 0.42, 7,  0.3, 2.86, 0), orange, [0,0,0], [0,0, 0.22]);
    m.addMesh('eye-l', makeSphere(0.09, 8, 6, -0.22, 2.44, 0.57), m.createMaterial('el', 0x553300, 0.4, 0.0));
    m.addMesh('eye-r', makeSphere(0.09, 8, 6,  0.22, 2.44, 0.57), m.createMaterial('er', 0x553300, 0.4, 0.0));
    m.addMesh('nose',  makeSphere(0.12, 8, 6, 0, 2.28, 0.64), green, [0,0,0], [-0.5, 0, 0], [1.2, 2.2, 0.65]); // big warty nose
    m.addMesh('wart',  makeSphere(0.04, 6, 5, -0.08, 2.24, 0.7), green); // wart ON the nose
    // ICONIC pointy witch hat
    m.addMesh('hat-brim',  makeCylinder(0.22, 0.88, 0.15, 14, 0, 2.9, 0), black);
    m.addMesh('hat-brim2', makeCylinder(0.88, 0.95, 0.07, 14, 0, 2.83, 0), black);
    m.addMesh('hat-cone',  makeCone(0.22, 1.45, 12, 0, 3.12, 0), black);
    m.addMesh('hat-band',  makeTorus(0.22, 0.04, 12, 5, 0, 3.0, 0), purple);
    m.addMesh('hat-star',  makeSphere(0.07, 6, 5, 0, 3.0, 0.26), gold); // buckle star
    m.addMesh('hat-tip',   makeSphere(0.08, 6, 5, 0, 4.58, 0), purple);
    // broomstick -- because DUH
    m.addMesh('broom-haft', makeCylinder(0.045, 0.04, 2.4, 6, 0.95, 1.55, 0.35), wood, [0,0,0], [0.2, 0, 0.45]);
    m.addMesh('broom-head', makeCylinder(0.1, 0.24, 0.65, 10, 1.55, 0.55, 0.75), m.createMaterial('bsh', 0xcc9944, 0.9, 0.0), [0,0,0], [0.45, 0, 0]);
    m.addMesh('broom-tie',  makeTorus(0.13, 0.03, 8, 4, 1.55, 0.57, 0.73), wood);
    // cauldron floating beside
    m.addMesh('caul',  makeCylinder(0.35, 0.48, 0.52, 12, -1.4, 0.5, 0.2), m.createMaterial('ck', 0x222222, 0.7, 0.4));
    m.addMesh('brew',  makeSphere(0.4, 10, 8, -1.4, 0.78, 0.2), caul, [0,0,0], [0,0,0], [1, 0.22, 1]); // bubbling brew top
    m.addMesh('steam', makeCylinder(0.12, 0.04, 0.45, 6, -1.38, 1.05, 0.22), caul);
    // TAIL -- cats always have tails
    m.addMesh('tail', makeCylinder(0.11, 0.06, 1.2, 8, 0, 1.12, -0.86), orange, [0,0,0], [0.7, 0, 0.1]);

    await m.save('cat-witch.glb');
}

// ------ CAT CHEF ------
async function buildCatChef() {
    const m = new ModelDoc('cat-chef');
    const orange = m.createMaterial('ch-orange', 0xff8844, 0.85, 0.0);
    const white  = m.createMaterial('ch-white',  0xf8f5ee, 0.8,  0.0);
    const cream  = m.createMaterial('ch-cream',  0xeee8d5, 0.85, 0.0);
    const black  = m.createMaterial('ch-black',  0x111111, 0.9,  0.1);
    const navybl = m.createMaterial('ch-navy',   0x1a2244, 0.75, 0.05);
    const wood   = m.createMaterial('ch-wood',   0x8b5a2b, 0.9,  0.05);
    const gold   = m.createMaterial('ch-gold',   0xddaa22, 0.3,  0.6);
    const food   = m.createMaterial('ch-food',   0xff6633, 0.7,  0.0);

    // cat body in pristine chef whites
    m.addMesh('body',    makeSphere(0.7, 16, 12, 0, 1.2, 0), orange, [0,0,0], [0,0,0], [1, 1.3, 0.85]);
    m.addMesh('jacket',  makeCylinder(0.76, 0.82, 1.4, 14, 0, 0.82, 0), white);
    m.addMesh('jacket-f',makeBox(0.68, 1.0, 0.08, 0, 1.35, 0.55), white);         // front overlap
    m.addMesh('collar',  makeBox(0.24, 0.55, 0.06, 0, 1.95, 0.58), white);         // collar V
    m.addMesh('jk-btn',  makeBox(0.06, 0.82, 0.06, -0.1, 1.35, 0.59), white);     // button row
    for (let i = 0; i < 4; i++) {
        m.addMesh(`btn-${i}`, makeSphere(0.042, 6, 5, -0.1, 1.72 - i*0.28, 0.6), black);
    }
    // apron
    m.addMesh('apron',    makeBox(0.66, 0.95, 0.06, 0, 0.88, 0.58), navybl);
    m.addMesh('apron-st', makeBox(0.68, 0.04, 0.06, 0, 1.35, 0.58), navybl); // apron strap across
    m.addMesh('pocket',   makeBox(0.22, 0.18, 0.04, -0.25, 0.72, 0.62), navybl);
    m.addMesh('spoon-p',  makeCylinder(0.02, 0.02, 0.35, 4, -0.3, 0.88, 0.65), m.createMaterial('sp', 0xaaaaaa, 0.3, 0.5));
    // sleeves -- cuffed up, show orange fur
    for (const s of [-1, 1]) {
        m.addMesh(`slv-${s}`, makeCylinder(0.2, 0.17, 0.75, 8, s*0.96, 1.68, 0), white, [0,0,0], [0,0,s*0.3]);
        m.addMesh(`cuf-${s}`, makeCylinder(0.18, 0.18, 0.2, 8, s*1.28, 1.22, 0), white);
        m.addMesh(`paw-${s}`, makeSphere(0.16, 8, 6, s*1.45, 1.0, 0), orange, [0,0,0], [0,0,0], [1, 0.65, 1.1]);
    }
    // right hand holding a big rolling pin
    m.addMesh('rp-l',  makeCylinder(0.06, 0.06, 0.88, 8, 1.5, 1.08, 0.15), wood);
    m.addMesh('rp-bl', makeCylinder(0.12, 0.12, 0.6, 8, 1.5, 1.12, 0.16), cream);
    m.addMesh('rp-br', makeCylinder(0.12, 0.12, 0.04, 8, 1.5, 1.08, -0.14), cream);
    // legs -- black checkered pants
    for (const [lx, lz] of [[-0.42, 0.36], [0.42, 0.36], [-0.42, -0.36], [0.42, -0.36]]) {
        m.addMesh(`pant-${lx}`,  makeCylinder(0.18, 0.16, 0.9, 8, lx, 0.5, lz), black);
        m.addMesh(`pant2-${lx}`, makeBox(0.2, 0.45, 0.22, lx, 0.5, lz), m.createMaterial('chk', 0x222222, 0.9, 0.1)); // check pattern (faked)
        m.addMesh(`shoe-${lx}`,  makeBox(0.22, 0.18, 0.4, lx, -0.0, lz+0.05), black);
    }
    // head + toque blanche (the hat that matters)
    m.addMesh('head',   makeSphere(0.62, 16, 12, 0, 2.35, 0), orange, [0,0,0], [0,0,0], [1, 1.0, 0.95]);
    m.addMesh('ear-l',  makeCone(0.24, 0.42, 7, -0.3, 2.84, 0), orange, [0,0,0], [0,0,-0.22]);
    m.addMesh('ear-r',  makeCone(0.24, 0.42, 7,  0.3, 2.84, 0), orange, [0,0,0], [0,0, 0.22]);
    m.addMesh('eye-l',  makeSphere(0.09, 8, 6, -0.22, 2.44, 0.56), black);
    m.addMesh('eye-r',  makeSphere(0.09, 8, 6,  0.22, 2.44, 0.56), black);
    m.addMesh('mous-l', makeBox(0.14, 0.04, 0.03, -0.12, 2.22, 0.59), m.createMaterial('mr', 0x442200, 0.85, 0.0)); // tiny mustache
    m.addMesh('mous-r', makeBox(0.14, 0.04, 0.03,  0.12, 2.22, 0.59), m.createMaterial('ml', 0x442200, 0.85, 0.0));
    // tall toque blanche -- chef hat ICONIC
    m.addMesh('hat-b',  makeCylinder(0.68, 0.72, 0.22, 14, 0, 2.82, 0), white); // brim band
    m.addMesh('hat-t',  makeCylinder(0.65, 0.6, 1.0, 14, 0, 3.28, 0), white);    // tall crown
    m.addMesh('hat-p',  makeSphere(0.62, 12, 10, 0, 3.82, 0), white, [0,0,0], [0,0,0], [1.05, 0.5, 1.05]); // puffed top
    // food stain on apron (earned in battle)
    m.addMesh('stain',  makeSphere(0.12, 8, 6, 0.18, 0.7, 0.62), food, [0,0,0], [0,0,0], [1.4, 0.5, 0.8]);
    // tail
    m.addMesh('tail', makeCylinder(0.11, 0.06, 1.2, 8, 0, 1.12, -0.86), orange, [0,0,0], [0.7, 0, 0.1]);

    await m.save('cat-chef.glb');
}

// ------ CAT CLOWN ------
async function buildCatClown() {
    const m = new ModelDoc('cat-clown');
    const orange  = m.createMaterial('cl-orange', 0xff8844, 0.85, 0.0);
    const red     = m.createMaterial('cl-red',    0xff1111, 0.6,  0.0, 0x880000);
    const yellow  = m.createMaterial('cl-yellow', 0xffee11, 0.5,  0.0, 0xcc9900);
    const blue    = m.createMaterial('cl-blue',   0x2244ff, 0.5,  0.0, 0x1122cc);
    const green   = m.createMaterial('cl-green',  0x00cc44, 0.5,  0.0, 0x006622);
    const purple  = m.createMaterial('cl-purp',   0xaa22ee, 0.5,  0.0, 0x660099);
    const white   = m.createMaterial('cl-white',  0xfafffa, 0.7,  0.0);
    const skin    = m.createMaterial('cl-skin',   0xffd8c5, 0.75, 0.0);

    // clown body -- oversized baggy suit
    m.addMesh('body',    makeSphere(0.85, 16, 12, 0, 1.22, 0), yellow, [0,0,0], [0,0,0], [1.12, 1.35, 1.05]);
    // multi-color suit pattern (stripes approximated with sections)
    m.addMesh('suit-l',  makeBox(0.45, 1.15, 0.9, -0.28, 1.3, 0), blue, [0,0,0], [0,0,0]); // left half blue
    m.addMesh('suit-r',  makeBox(0.45, 1.15, 0.9,  0.28, 1.3, 0), red);                    // right half red
    m.addMesh('suit-ov', makeSphere(0.88, 14, 10, 0, 1.3, 0), yellow, [0,0,0], [0,0,0], [0.9, 0.75, 0.6]); // unifying shape
    // giant bow tie
    m.addMesh('bow-l',   makeSphere(0.32, 10, 8, -0.3, 1.95, 0.55), red, [0,0,0], [0,0,0], [1.2, 0.65, 0.45]);
    m.addMesh('bow-r',   makeSphere(0.32, 10, 8,  0.3, 1.95, 0.55), red, [0,0,0], [0,0,0], [1.2, 0.65, 0.45]);
    m.addMesh('bow-c',   makeSphere(0.14, 8, 6, 0, 1.95, 0.58), yellow);
    // baggy sleeves
    for (const s of [-1, 1]) {
        m.addMesh(`slv-${s}`,  makeCylinder(0.28, 0.35, 0.85, 10, s*1.05, 1.68, 0), s<0?blue:red, [0,0,0], [0,0,s*0.38]);
        m.addMesh(`cuf-${s}`,  makeCylinder(0.38, 0.28, 0.25, 10, s*1.45, 1.22, 0), white);
        m.addMesh(`glv-${s}`,  makeSphere(0.2, 10, 8, s*1.65, 1.0, 0), white, [0,0,0], [0,0,0], [1.1, 0.85, 1.1]);
    }
    // HUGE clown feet -- the signature
    for (const [lx, lz, col] of [
        [-0.42, 0.36, yellow], [0.42, 0.36, green], [-0.42, -0.36, red], [0.42, -0.36, yellow]
    ]) {
        m.addMesh(`leg-${lx}${lz}`, makeCylinder(0.22, 0.26, 0.95, 8, lx, 0.5, lz), lx<0?blue:red);
        m.addMesh(`shoe-${lx}`,     makeBox(0.3, 0.22, 0.88, lx, -0.04, lz + 0.2), col); // giant shoe
        m.addMesh(`stoe-${lx}`,     makeSphere(0.2, 8, 6, lx, -0.02, lz + 0.56), col);   // rounded toe
    }
    // pompoms on suit
    for (let i = 0; i < 3; i++) {
        const colors = [red, yellow, green];
        m.addMesh(`pom-${i}`, makeSphere(0.1, 8, 6, 0, 1.72 - i*0.32, 0.6), colors[i]);
    }
    // head + clown makeup
    m.addMesh('head',    makeSphere(0.68, 16, 12, 0, 2.4, 0), skin, [0,0,0], [0,0,0], [1, 1.0, 0.95]);
    m.addMesh('ear-l',   makeCone(0.26, 0.44, 7, -0.34, 2.96, 0), orange, [0,0,0], [0,0,-0.26]);
    m.addMesh('ear-r',   makeCone(0.26, 0.44, 7,  0.34, 2.96, 0), orange, [0,0,0], [0,0, 0.26]);
    // white face paint
    m.addMesh('face',    makeSphere(0.65, 14, 10, 0, 2.42, 0.05), white, [0,0,0], [0,0,0], [0.95, 0.92, 0.58]);
    // red clown nose -- THE NOSE
    m.addMesh('nose',    makeSphere(0.15, 10, 8, 0, 2.34, 0.65), red, [0,0,0], [0,0,0], [1, 0.9, 0.8]);
    // eye makeup -- stars
    m.addMesh('eye-l',   makeSphere(0.11, 8, 6, -0.24, 2.5, 0.62), blue,   [0,0,0], [0,0,0], [1.4, 0.9, 0.6]);
    m.addMesh('eye-r',   makeSphere(0.11, 8, 6,  0.24, 2.5, 0.62), purple, [0,0,0], [0,0,0], [1.4, 0.9, 0.6]);
    m.addMesh('star-l',  makeSphere(0.14, 8, 6, -0.24, 2.5, 0.63), yellow, [0,0,0], [0,0,0], [1.6, 0.5, 0.4]);
    m.addMesh('star-r',  makeSphere(0.14, 8, 6,  0.24, 2.5, 0.63), red,    [0,0,0], [0,0,0], [1.6, 0.5, 0.4]);
    // giant grin
    m.addMesh('mouth',   makeSphere(0.32, 10, 8, 0, 2.22, 0.62), red, [0,0,0], [0,0,0], [1.4, 0.55, 0.4]);
    m.addMesh('teeth',   makeSphere(0.24, 8, 6, 0, 2.22, 0.65), white, [0,0,0], [0,0,0], [1.3, 0.35, 0.3]);
    // rainbow afro -- the biggest, most chaotic element
    const afroCols = [red, yellow, green, blue, purple, red];
    for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        const r2 = 0.72, ax = Math.cos(a)*r2, ay = Math.sin(a)*r2*0.55+2.82, az = Math.sin(a)*0.22;
        m.addMesh(`afro-${i}`, makeSphere(0.32, 8, 6, ax, ay, az), afroCols[i%6]);
    }
    m.addMesh('afro-top', makeSphere(0.38, 10, 8, 0, 3.42, 0), yellow);
    m.addMesh('afro-mid', makeSphere(0.68, 12, 10, 0, 2.88, 0), red, [0,0,0], [0,0,0], [1.1, 0.7, 1.1]);
    // tail -- curly clown tail with pompom
    m.addMesh('tail',  makeCylinder(0.1, 0.06, 1.1, 8, 0, 1.12, -0.86), m.createMaterial('ctail', 0xffee11, 0.7, 0.0), [0,0,0], [0.7, 0.3, 0]);
    m.addMesh('tail-p',makeSphere(0.14, 8, 6, 0.08, 0.45, -1.48), red);

    await m.save('cat-clown.glb');
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
    // new additions -- the void demands variety
    { name: 'emo',               build: buildEmo },
    { name: 'cat-ninja',         build: buildCatNinja },
    { name: 'cat-samurai',       build: buildCatSamurai },
    { name: 'cat-knight',        build: buildCatKnight },
    { name: 'cat-grim-reaper',   build: buildCatGrimReaper },
    { name: 'cat-fire-demon',    build: buildCatFireDemon },
    { name: 'cat-robot-supreme', build: buildCatRobotSupreme },
    { name: 'cat-fallen-angel',  build: buildCatFallenAngel },
    { name: 'cat-viking',        build: buildCatViking },
    { name: 'cat-demon',         build: buildCatDemon },
    { name: 'cat-glitch',        build: buildCatGlitch },
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
