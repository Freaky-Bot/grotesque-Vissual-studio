// I am NOT angry, just... this should have existed from the start.
// runs git log, grabs last 40 commits, writes public/patchnotes.json
// called during prebuild so the deployed site always has current notes

import { execSync } from 'child_process';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const OUT_PATH = join(process.cwd(), 'public', 'patchnotes.json');

let raw = '';
try {
    // get: subject, date, abbreviated hash -- all we need nyaa~
    raw = execSync('git log --pretty=format:"%s|||%ad|||%h" --date=short -40', {
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
writeFileSync(OUT_PATH, JSON.stringify(notes, null, 2), 'utf8');

console.log(`gen-patchnotes: wrote ${notes.length} entries to public/patchnotes.json uwu 🐱`);
