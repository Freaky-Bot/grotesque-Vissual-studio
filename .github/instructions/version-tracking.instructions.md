---
description: "Use when: adding a new feature, fixing a bug, committing code, or making any change to gameplay or UI. Always bump the version number, update the bottom-right HUD, and prefix the git commit with the new version."
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

### 1. Decide the new version number
Read the current version from the `#version-display` element in `index.html` or the `CURRENT_VERSION` constant. Apply the increment rule above.

### 2. Update the HUD in `index.html`
Find the version span and update the text:
```html
<span id="version-display">v1.0.0</span>
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
