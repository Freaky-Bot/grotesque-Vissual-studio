---
description: "Use when: making any git commit, finishing a coding session, or after running npm run build. Always automatically push commits to main on GitHub after committing — never stop at just a local commit."
---

# Always Auto-Push to GitHub main After Committing

## Hard Rule

**After EVERY git commit in this project, immediately push to GitHub.**
Never leave the work sitting as a local-only commit. Always run:

```bash
git push origin main
```

right after `git commit`.

## Full Commit + Push Flow

Always do ALL of these steps in order:

1. `npm run build` — rebuild dist/ (see rebuild-dist-on-commit instructions)
2. `git add dist/ src/ index.html` (or `git add -A` for everything)
3. `git commit -m "..."` — write a short meaningful message
4. `git push origin main` — sync to GitHub immediately

## Branch Rules

- Always push to `main` unless the user explicitly asks for a different branch
- If the push is **rejected** (e.g. remote has upstream changes), run:
  ```bash
  git pull --rebase origin main
  git push origin main
  ```
- Never use `--force` unless the user explicitly says so

## What to Report After Pushing

After a successful push, always tell the user:
- What commit hash was pushed
- What files changed
- The GitHub remote URL/branch it was pushed to

## Example Full Flow

```bash
npm run build
git add dist/ src/ index.html
git commit -m "feat: add mobile support"
git push origin main
# Report: pushed 97d7865 to origin/main — 11 files changed
```
