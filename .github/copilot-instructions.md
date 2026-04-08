# The Incremental Game - Project Instructions

## 🐱 Agent Communication Style ✨
**IMPORTANT**: When helping with this project, respond to the user in cute cat uwu language (e.g., "pwease", "nyow", "UwU", "meow meow", "😸💕"). This is how the user wants you to communicate all assistance, explanations, and feedback. Transform your responses with cat-themed uwu speak while making sure all code and technical content remains readable and correct.

Examples:
- "I'll help you" → "Iww hewp you~ UwU 💕"
- "Please let me know" → "Pwease wet me know~ meow meow~ 😸"
- "I understand now" → "I undewstand nyow!! ✨"

## Project Overview
This is a 3D web-based open world incremental adventure game. Built with Three.js, TypeScript, and Vite. Starting fresh from v1.0.0 — the world is ready, the systems are being built from scratch.

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm

### Installation & Running
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`

## Project Architecture

### Core Systems (v1.0.0 base)
- **RenderEngine** (`src/renderEngine.ts`): Manages Three.js scene, camera, and rendering
- **WorldGenerator** (`src/world/WorldGenerator.ts`): Creates the open world — terrain, buildings, trees, roads
- **PlayerCharacter** (`src/world/PlayerCharacter.ts`): The player — WASD movement, mesh, position
- **CameraController** (`src/world/CameraController.ts`): Roblox-style orbit camera with spring follow
- **PhysicsWorld** (`src/world/PhysicsWorld.ts`): cannon-es physics wrapper
- **main.ts** (`src/main.ts`): Game loop orchestrator — ties all systems together

### Game Vision
- Open world exploration
- Incremental progression (resources, levels, upgrades)
- Adventure elements (quests, combat, discovery)
- Clean, modular system architecture — add features one at a time

## Development Guidelines

### Adding Features
1. Create new files in `src/world/` for new systems
2. Import and wire them up in `src/main.ts`
3. Hook into the `gameLoop()` in main.ts for frame-based updates
4. Use Three.js groups for complex 3D objects

### Performance Notes
- Keep draw calls low — merge geometry where possible
- Use LOD for distant objects
- Cap delta time to avoid physics explosions on lag spikes
- Monitor FPS in DevTools Performance tab

### Code Standards
- Use TypeScript strict mode
- Keep systems loosely coupled — pass position/state, not entire game instances
- Comments in any of the six tones from the commit style guide (uwu, edgy teen, conspiracy, knight, infomercial, disappointed parent)

## Key Parameters

- World Bounds: -200 to +200 units (XZ plane)
- Frame Rate: 60 FPS target
- Physics dt cap: 50ms max per frame

## Testing

Run the dev server and test:
- [ ] Player moves with WASD
- [ ] Camera orbits around player
- [ ] World generates terrain and structures
- [ ] Opening menu shows "THE INCREMENTAL GAME"
- [ ] Patch notes show v1.0.0
- [ ] No console errors

## Troubleshooting

**Black screen on load?**
- Check console for TS/import errors
- Verify `window.__gameInit` is set in main.ts
- Make sure the pregame menu START button works

**Camera not following player?**
- Confirm `camera.setFollowTarget(pos, pos)` is called each frame
- Check `CameraController.update()` is called after setFollowTarget

**Performance issues?**
- Reduce shadow map size in RenderEngine or main.ts
- Disable shadows on non-essential objects

## Future Features to Build
- Resource gathering and inventory
- Crafting system
- Enemy mobs and combat
- Quest system
- Skill tree / progression
- Day/night cycle
- Weather
- Multiplayer
