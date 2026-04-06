---
description: "Use when: adding a new feature, fixing a bug, committing code, or updating the in-game patch notes. The in-game patch notes must always reflect the latest git commit messages. Chore commits are always excluded. Never manually edit patchnotes.json."
applyTo: "**"
---

# In-Game Patch Notes — Always Auto-Updated

## How It Works

The in-game patch notes are **auto-generated from `git log`** by `scripts/gen-patchnotes.mjs`.
This script runs automatically as part of `prebuild` every time you do `npm run build`.
Output goes to `public/patchnotes.json` (and into `dist/` after build).

**You never need to manually add entries to the patch notes.**
Just write your commit message normally — it will appear in-game after the next build.

## Hard Rules

1. **Never manually edit `public/patchnotes.json`.** It is auto-generated. Any manual edits will be overwritten on the next build.
2. **Always run `npm run build` before committing** so the latest commit is reflected in the built patch notes. (This is also enforced by `rebuild-dist-on-commit.instructions.md`.)
3. The script reads the **last 40 commits** — older commits beyond that are dropped from the in-game display.

## Commit Filter Rules

The following commits are **automatically excluded** from the in-game patch notes:

| Pattern | Example | Reason |
|---|---|---|
| Starts with `chore:` | `chore: updated deps nyaa` | Boring maintenance, not player-visible |
| Starts with `chore ` | `chore fix typo` | Catch variant spellings |
| Contains `[skip ci]` | `fix: tweak [skip ci]` | CI-skip commits are trivial |
| Contains `rebuild dist` | `rebuild dist files uwu` | Auto-generated rebuild commits |

**If a commit should NOT appear in-game, prefix it with `chore:`.**
**If a commit SHOULD appear in-game, use any other conventional prefix: `feat:`, `fix:`, `refactor:`, etc.**

## Pipeline Reference

```
npm run build
  └─ prebuild:
       ├─ node scripts/gen-patchnotes.mjs    ← reads git log, writes public/patchnotes.json
       └─ node scripts/check-threejs-assign.mjs
  └─ vite build                              ← copies public/ into dist/
```

## Example: Adding a New Feature

1. Write code changes
2. Run `npm run build` (patchnotes regenerated automatically)
3. `git add -A`
4. `git commit -m "v1.x.x feat: added awesome new thing nyaa~ 🐱"`
5. `git push origin main`

The commit message `feat: added awesome new thing nyaa~` will now appear in the in-game patch notes after the next page load.

## Example: Hiding a Commit from Patch Notes

Prefix with `chore:`:
```
git commit -m "v1.x.1 chore: updated tsconfig nyaa"
```
This will NOT appear in the in-game patch notes. ✅
