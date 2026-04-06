// I am NOT angry, just... this should have existed from the start.
// runs git log, grabs last 200 commits, writes public/patchnotes.json
// called during prebuild so the deployed site always has current notes
//
// --pending "msg"  flag: prepend a fake "not committed yet" entry at the top
// used by scripts/ship.mjs so the upcoming commit appears in patchnotes BEFORE it's committed
// its clever. maybe too clever. whatever.

import { execSync } from 'child_process';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const OUT_PATH = join(process.cwd(), 'public', 'patchnotes.json');

// check for --pending "message" arg -- this is the commit msg we're about to make
const pendingIdx = process.argv.indexOf('--pending');
const pendingMsg = pendingIdx !== -1 ? process.argv[pendingIdx + 1] : null;

let raw = '';
try {
    // get: subject, date, abbreviated hash -- all we need nyaa~
    raw = execSync('git log --pretty=format:"%s|||%ad|||%h" --date=short -200', {
        cwd: process.cwd(),
        encoding: 'utf8',
    });
} catch (e) {
    // no git?? just write empty array and move on. fine. whatever.
    writeFileSync(OUT_PATH, JSON.stringify([]), 'utf8');
    console.log('gen-patchnotes: no git found, wrote empty array');
    process.exit(0);
}

const notes = raw
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
        const parts = line.split('|||');
        return {
            msg: parts[0] || '',
            date: parts[1] || '',
            hash: parts[2] || '',
        };
    });

// write to public/ so vite serves it as a static asset
mkdirSync(join(process.cwd(), 'public'), { recursive: true });

// if --pending was given, shove it at the top of the list before writing
// this is the "write patchnotes before the commit message" trick
if (pendingMsg) {
    const today = new Date().toISOString().slice(0, 10);
    notes.unshift({ msg: pendingMsg, date: today, hash: 'pending' });
}

writeFileSync(OUT_PATH, JSON.stringify(notes, null, 2), 'utf8');

const pendingNote = pendingMsg ? ' (+ 1 pending entry prepended nyaa~)' : '';
console.log(`gen-patchnotes: wrote ${notes.length} entries to public/patchnotes.json uwu 🐱${pendingNote}`);
