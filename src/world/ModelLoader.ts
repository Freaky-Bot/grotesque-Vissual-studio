import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// =====================================================
// MODEL LOADER -- the whole pipeline lives here.
// loads GLBs from public/models/, caches them so we
// don't reload the same mesh 40 times like animals,
// and falls back to the old procedural mesh if the
// GLB doesn't exist yet. nobody gets left behind.
// =====================================================

export interface LoadedModel {
    scene: THREE.Group;
    animations: THREE.AnimationClip[];
}

// global singleton loader -- one loader to rule them all
const _loader = new GLTFLoader();

// model cache -- load once, clone forever
const _cache = new Map<string, LoadedModel>();

// pending promises -- so if 5 NPCs all ask for "cat.glb" at once
// we only fire ONE network request, not five. we're civilized here.
const _pending = new Map<string, Promise<LoadedModel>>();

// =====================================================
// loadModel -- async, cached, doesn't duplicate requests
// modelName: just the filename like "cat.glb"
// falls back to null if file doesn't exist
// =====================================================
export async function loadModel(modelName: string): Promise<LoadedModel | null> {
    const url = `/models/${modelName}`;

    // already cached? return a CLONE, not the original -- sharing meshes = bad time
    if (_cache.has(modelName)) {
        return cloneModel(_cache.get(modelName)!);
    }

    // already loading? hop on the same promise, don't start a second one
    if (_pending.has(modelName)) {
        try {
            const result = await _pending.get(modelName)!;
            return cloneModel(result);
        } catch {
            return null;
        }
    }

    // fresh load -- fire the request and cache the promise immediately
    // so any simultaneous requests latch onto it
    const promise = new Promise<LoadedModel>((resolve, reject) => {
        _loader.load(
            url,
            (gltf) => {
                const model: LoadedModel = {
                    scene: gltf.scene,
                    animations: gltf.animations,
                };
                _cache.set(modelName, model);
                _pending.delete(modelName);

                // enable shadows on everything in the loaded model
                gltf.scene.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        // upgrade materials to MeshStandardMaterial if they aren't already
                        // so they respond to scene lighting properly
                        if (child.material && !(child.material instanceof THREE.MeshStandardMaterial)) {
                            const oldMat = child.material as any;
                            const newMat = new THREE.MeshStandardMaterial({
                                color: oldMat.color ?? 0xffffff,
                                roughness: 0.7,
                                metalness: 0.0,
                            });
                            child.material = newMat;
                        }
                    }
                });

                resolve(model);
            },
            undefined, // progress callback -- don't need it
            (err) => {
                // 404 or network fail -- not a crash, just means no GLB yet for this NPC
                _pending.delete(modelName);
                reject(err);
            }
        );
    });

    _pending.set(modelName, promise);

    try {
        const result = await promise;
        return cloneModel(result);
    } catch {
        // silently return null -- caller gets the procedural fallback
        return null;
    }
}

// =====================================================
// cloneModel -- deep clone so each NPC gets its OWN
// copy of the geometry and materials, not a shared ref.
// animations are reused (safe -- they're immutable data)
// =====================================================
function cloneModel(model: LoadedModel): LoadedModel {
    return {
        scene: model.scene.clone(true),
        animations: model.animations, // animations are data, safe to share
    };
}

// =====================================================
// applyModel -- attach a loaded model scene to an NPC
// group, properly scaled and positioned. handles the
// annoying part of centering/scaling the imported mesh
// so it matches the game's scale conventions.
// targetScale: desired height in world units
// =====================================================
export function applyModel(
    targetGroup: THREE.Group,
    model: LoadedModel,
    targetScale: number = 2.0
): THREE.AnimationMixer | null {
    const scene = model.scene;

    // figure out what size the model actually is and scale to match game units
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
        const uniformScale = targetScale / maxDim;
        scene.scale.setScalar(uniformScale);
    }

    // center the model at origin so it sits on the ground, not floating or buried
    const centerAfterScale = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    centerAfterScale.getCenter(center);
    scene.position.x -= center.x;
    scene.position.z -= center.z;
    // push it up so bottom of model is at y=0
    const minY = centerAfterScale.min.y;
    scene.position.y -= minY;

    targetGroup.add(scene);

    // set up animation mixer if the model has animations
    if (model.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(scene);
        return mixer;
    }

    return null;
}

// =====================================================
// playAnimation -- start a named animation on a mixer
// falls back to playing animation[0] if name not found
// loopOnce: true for attack/death, false for idle/walk
// =====================================================
export function playAnimation(
    mixer: THREE.AnimationMixer,
    animations: THREE.AnimationClip[],
    name: string,
    loopOnce: boolean = false
): THREE.AnimationAction | null {
    if (!animations.length) return null;

    // try to find the named clip, fall back to first
    const clip = THREE.AnimationClip.findByName(animations, name) ?? animations[0];
    const action = mixer.clipAction(clip);

    if (loopOnce) {
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
    } else {
        action.setLoop(THREE.LoopRepeat, Infinity);
    }

    action.reset().play();
    return action;
}

// =====================================================
// preloadModels -- call this at startup to warm the
// cache for the most common models before NPCs spawn.
// pass an array of filenames to preload.
// =====================================================
export async function preloadModels(modelNames: string[]): Promise<void> {
    // fire all loads in parallel -- faster than sequential
    await Promise.allSettled(modelNames.map(name => loadModel(name)));
    console.log(`%c🐱 ModelLoader: preloaded ${modelNames.length} models`, 'color: #00ffaa; font-weight: bold');
}

// =====================================================
// isModelAvailable -- sync check after cache is warm.
// useful for deciding whether to show GLB or procedural
// without awaiting every single frame.
// =====================================================
export function isModelAvailable(modelName: string): boolean {
    return _cache.has(modelName);
}

// =====================================================
// MODEL NAME REGISTRY -- single source of truth for
// what GLB file each NPC type uses. add new entries
// here when you run gen-models.mjs and get new files.
// =====================================================
export const MODEL_NAMES: Record<string, string> = {
    // cats
    'normal':        'cat-normal.glb',
    'jesus':         'cat-jesus.glb',
    'robot':         'cat-robot.glb',
    'orb':           'cat-orb.glb',
    'angel':         'cat-angel.glb',
    'void':          'cat-void.glb',
    'shadow':        'cat-shadow.glb',
    'vampire':       'cat-vampire.glb',
    'wizard':        'cat-wizard.glb',
    'pirate':        'cat-pirate.glb',
    'disco':         'cat-disco.glb',
    'ninja':         'cat-ninja.glb',
    'samurai':       'cat-samurai.glb',
    'knight':        'cat-knight.glb',
    'grim_reaper':   'cat-grim-reaper.glb',
    'fire_demon':    'cat-fire-demon.glb',
    'robot_supreme': 'cat-robot-supreme.glb',
    'fallen_angel':  'cat-fallen-angel.glb',
    'viking':        'cat-viking.glb',
    'demon':         'cat-demon.glb',
    'glitch':        'cat-glitch.glb',
    // special NPCs
    'catgod':        'catgod.glb',
    'voidcat':       'voidcat.glb',
    'shrek':         'shrek.glb',
    'obama':         'obama.glb',
    'trump':         'trump.glb',
    'barney':        'barney.glb',
    'elmo':          'elmo.glb',
    'dio':           'dio.glb',
    'ugandan':       'ugandan-knuckles.glb',
    'buffcat':       'buffcat.glb',
    // mobs
    'bird':          'bird.glb',
};
