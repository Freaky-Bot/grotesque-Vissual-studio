// HEAR YE: this script doth guard the realm against the cursed Object.assign pattern
// on THREE.js Object3D subclasses. THREE.js r183 defines position/rotation/scale via
// Object.defineProperties({ value: ... }) -- no writable:true. ES modules run strict.
// Object.assign tries to overwrite those props -> TypeError -> black screen. forever.

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

// dis pattern is BANNED -- Object.assign on a freshly-created THREE mesh/group/etc meow~
const DANGER_PATTERN = /Object\.assign\s*\(\s*new\s+THREE\.(Mesh|Group|Points|Line|Sprite|Object3D|Bone|SkinnedMesh)/g;

const SRC_DIR = join(process.cwd(), 'src');

let found = 0;

function scanDir(dir) {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        const stat = statSync(full);
        if (stat.isDirectory()) {
            scanDir(full);
        } else if (['.ts', '.js'].includes(extname(entry))) {
            const text = readFileSync(full, 'utf8');
            const lines = text.split('\n');
            lines.forEach((line, i) => {
                if (DANGER_PATTERN.test(line)) {
                    // reset lastIndex bc global regex is stateful ugh
                    DANGER_PATTERN.lastIndex = 0;
                    console.error(`\n[BANNED PATTERN] ${full}:${i + 1}`);
                    console.error(`  > ${line.trim()}`);
                    console.error(`  THREE.js r183: Object3D.position/rotation are non-writable.`);
                    console.error(`  Use .position.set(x,y,z) and .rotation.set(x,y,z) instead.\n`);
                    found++;
                }
                DANGER_PATTERN.lastIndex = 0;
            });
        }
    }
}

scanDir(SRC_DIR);

if (found > 0) {
    console.error(`\nda check found ${found} dangerous Object.assign pattern(s). fix dem first!! UwU`);
    process.exit(1);
} else {
    console.log('threejs-assign check: all clear nyaa~ uwu 🐱');
}
