---
description: "Use when: making any git commit, pushing to GitHub, or finishing a coding change in this project. Always run npm run build before committing so the dist/ folder stays up to date on GitHub."
---

# Always Rebuild dist Before Committing

## Hard Rule

**Before EVERY git commit in this project, run `npm run build` first.**
This keeps the `dist/` folder on GitHub always in sync with the latest source code.

## Steps to Follow

1. Finish all code changes
2. **Automatically run the build and show the full output to the user:**
   ```
   npm run build
   ```
3. If the build **fails**, fix the error before committing — do NOT commit broken dist files. Show the error output.
4. Stage the updated dist files along with the source changes:
   ```
   git add dist/ src/ index.html
   ```
5. Then commit normally and report what was committed

## Why

The `dist/` folder is **not gitignored** (intentionally tracked for deployment/submission).
Skipping a build before commit means GitHub will have stale or mismatched compiled files.

## What to Include in the Commit

Always include:
- `dist/` — the compiled output
- Any changed source files (`src/`, `index.html`, etc.)

Do **not** commit:
- `node_modules/`
- `.vscode/settings.json`
- Temporary debug files

## Example Commit Flow

```bash
npm run build
git add dist/ src/ index.html
git commit -m "feat: add mobile support"
git push
```

## If Build Errors Occur

- Check the Vite/TypeScript error output
- Fix the type or import error in `src/`
- Re-run `npm run build` until it succeeds
- Then commit
