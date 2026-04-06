// scripts/ship.mjs -- the ONE COMMAND to rule them all
// TIRED OF DOING BUILD → COMMIT → PUSH MANUALLY?? NOT ANYMORE!! act now!! operators standing by!!
//
// usage: node scripts/ship.mjs "v2.x.x feat: ur message here"
//   OR: npm run ship -- "v2.x.x feat: ur message here"
//
// what this does:
//   1. writes the pending patch note into patchnotes.json BEFORE committing
//   2. runs vite build (build-only, no prebuild so notes dont get overwritten)
//   3. git add -A
//   4. git commit -m "your message"
//   5. git push origin main (with rebase if rejected -- the classic pattern)
//
// the result: in-game patch notes include YOUR LATEST ENTRY the moment you ship.
// no more "oops that commit wasnt in patchnotes". never again. this is the way.
//
// the emo would say: why does this need to be a whole script. whatever.
// but ETERNAL SUNSHINE has arrived and the ship script SAVES THE DAY

import { execSync } from 'child_process';
import { join } from 'path';

const ROOT = process.cwd();

// ---- grab the commit message from args ----
const msg = process.argv.slice(2).join(' ').trim();
if (!msg) {
    console.error('\n❌ no commit message given. usage:  npm run ship -- "v2.x.x feat: your message"\n');
    process.exit(1);
}

console.log(`\n🚢 SHIPPING: ${msg}\n`);

// ---- step 1: write patchnotes with pending entry at top ----
// this is the "write patchnotes before the commit message" trick.
// gen-patchnotes reads git log + prepends our pending msg so its visible in-game immediately
console.log('📋 generating patchnotes with pending entry...');
runShell(`node scripts/gen-patchnotes.mjs --pending "${msg.replace(/"/g, '\\"')}"`);

// ---- step 2: run vite build directly (skip prebuild so we dont wipe the pending entry) ----
console.log('🔨 building (skipping prebuild to preserve pending entry)...');
runShell('npx vite build');

// ---- step 3: git add everything ----
console.log('➕ staging files...');
runShell('git add -A');

// ---- step 4: commit ----
console.log(`💾 committing as: ${msg}`);
runShell(`git commit -m "${msg.replace(/"/g, '\\"')}"`);

// ---- step 5: push (with rebase if rejected -- the classic pattern) ----
console.log('🚀 pushing to origin main...');
const pushResult = runShell('git push origin main', true);
if (pushResult !== 0) {
    console.log('⚠️  push rejected -- pulling with rebase...');
    runShell('git pull --rebase', true); // may pause at conflict, thats ok
    // take our version of dist files (we just built them, they are correct, period)
    // with rebase, --theirs = our commit being replayed (the one we want)
    for (const f of ['dist/index.html', 'dist/patchnotes.json', 'public/patchnotes.json']) {
        runShell(`git checkout --theirs "${f}"`, true);
        runShell(`git add "${f}"`, true);
    }
    // continue rebase -- if nothing changed between us and remote, skip the commit instead
    const cont = runShell('git rebase --continue', true);
    if (cont !== 0) runShell('git rebase --skip', true);
    runShell('git push origin main');
}

console.log('\n✅ shipped nyaa~ 🐱💕\n');

// ---- helpers ----

function runShell(cmd, ignoreError = false) {
    try {
        execSync(cmd, { cwd: ROOT, stdio: 'inherit' });
        return 0;
    } catch (e) {
        if (!ignoreError) {
            console.error(`\n❌ shell command failed: ${cmd}`);
            process.exit(1);
        }
        return e.status ?? 1;
    }
}
