---
description: "Use when: adding a new feature, fixing a bug, committing code, making any change to gameplay or UI, or starting any coding session. Always bump the version number, update the bottom-right HUD, and prefix the git commit with the new version. Before any change, verify the HUD version matches the last git commit version and sync it if not."
applyTo: "**"
---

# Version Tracking — Cat God World

## Version Format: `MAJOR.MINOR.PATCH`

```
1.0.0   ← starting point
│ │ └── PATCH: small fix, tweak, typo, comment change, tiny adjustment
│ └──── MINOR: new feature, new NPC type, new system, new mechanic
└────── MAJOR: complete overhaul, total rewrite, game-breaking architecture change
```

### Increment Rules

| Change type | Which number bumps | Example |
|---|---|---|
| Fix a bug, tweak a value, small visual change | PATCH (+0.0.1) | `1.0.0 → 1.0.1` |
| New feature, new NPC, new system, new UI element | MINOR (+0.1.0), reset PATCH | `1.0.1 → 1.1.0` |
| Multiple features in one commit | MINOR once (+0.1.0) | `1.1.0 → 1.2.0` |
| Architecture overhaul, breaking change | MAJOR (+1.0.0), reset all | `1.2.3 → 2.0.0` |

### Minecraft-style depth intuition
- `1.0.1` → barely noticeable tweak
- `1.3.0` → solid new feature landed
- `1.12.4` → well-built game with lots of stuff and several post-release patches
- `2.0.0` → this is basically a different game now

---

## Steps to Follow on EVERY Change

### Step 0 — Sync check (do this FIRST, before anything else)
Before deciding the new version number, verify the HUD is not stale:

1. Read the current `#version-hud` value from `index.html`
2. Read the version prefix from the last git commit: `git log --oneline -1`
3. Compare them:

| HUD | Last commit | Action |
|-----|-------------|--------|
| `v1.3.0` | `v1.3.3 fix: ...` | HUD is stale — update it to `v1.3.3` **before** applying this session's bump |
| `v1.4.0` | `v1.4.0 feat: ...` | In sync — proceed normally with the bump |
| `v1.3.0` | no version prefix | Treat last HUD value as truth — proceed normally |

**If the HUD is behind the last commit version, bring it up first.** Then apply the bump for the current change on top of the corrected base.

> Example: HUD says `v1.3.0`, last commit was `v1.3.3`. You're adding a new feature.
> Correct action: update HUD to `v1.3.3` first, THEN bump MINOR → `v1.4.0` for this change.

### 1. Decide the new version number
Read the current version from `#version-hud` in `index.html` (after Step 0 sync). Apply the increment rule above.

### 2. Update the HUD in `index.html`
Find the version div and update the text:
```html
<div id="version-hud">v1.0.0</div>
```

### 3. Prefix the git commit message with the version
```
v1.1.0 feat: added 20 new cat types with unique voices and domains
v1.0.1 fix: NPC domain wall enforcement pushed back escaping cats
v1.2.0 feat: Aberrant Throne Malevolent Shrine slash waves
```

The version tag goes at the **very start** of the commit message string, before the conventional commit type.

### 4. Never skip a version bump
Every commit that changes gameplay, UI, logic, or assets must have a version bump.
Comments-only or instruction file changes may use PATCH.

### 5. Verify HUD matches commit before pushing
After updating the HUD and before committing, confirm `#version-hud` in `index.html` shows exactly the version you're about to prefix the commit with. They must be identical.

---

## Version Display Element

The version is shown bottom-right of the screen at all times. The element already exists in `index.html`:

```html
<!-- version display -- bottom right, always visible, always current -->
<div id="version-hud">v1.0.0</div>
```

CSS (already in `index.html`):
```css
#version-hud {
    position: fixed;
    bottom: 8px;
    right: 10px;
    color: rgba(255, 255, 255, 0.35);
    font-size: 10px;
    font-family: Arial, sans-serif;
    pointer-events: none;
    z-index: 105;
    user-select: none;
}
```

---

## Current Version

**Start: `1.0.0`**

Track the current version by reading `#version-hud` in `index.html`. That element is the single source of truth.
**Always verify it matches `git log --oneline -1` at the start of every session.** If it doesn't, sync it immediately.
