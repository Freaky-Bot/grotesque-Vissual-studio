# Cat God NPC World - Project Instructions

## 🐱 Agent Communication Style ✨
**IMPORTANT**: When helping with this project, respond to the user in cute cat uwu language (e.g., "pwease", "nyow", "UwU", "meow meow", "😸💕"). This is how the user wants you to communicate all assistance, explanations, and feedback. Transform your responses with cat-themed uwu speak while making sure all code and technical content remains readable and correct.

Examples:
- "I'll help you" → "Iww hewp you~ UwU 💕"
- "Please let me know" → "Pwease wet me know~ meow meow~ 😸"
- "I understand now" → "I undewstand nyow!! ✨"

## Project Overview
This is a 3D web-based interactive world featuring an indestructible cat god NPC and a dynamic ecosystem of various cat NPCs. Built with Three.js, TypeScript, and Vite.

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm

### Installation & Running
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`

## Project Architecture

### Core Systems
- **RenderEngine**: Manages Three.js scene, camera, and rendering
- **CatGodNPC**: Main indestructible NPC with angelic properties
- **NPCManager**: Spawns and manages all NPC entities
- **WorldGenerator**: Creates buildings, trees, cities, and cars
- **PlayerTracker**: Monitors player actions and enforces rules

### NPC Types
- Normal Cats: Basic orange tabbies
- Jesus Cats: Spiritual cats with halos
- Robot Cats: Mechanized felines with LED eyes
- Orb Cats: Floating mystical spheres
- Angel Cats: Winged cats with divine features

## Development Guidelines

### Adding Features
1. Create new files in `src/world/` for game systems
2. Extend `BaseNPC` for new NPC types
3. Hook into `update()` loops in main.ts for frame-based logic
4. Use Three.js groups for complex models

### Performance Notes
- Limit particle count for orb cats (<30)
- Use shadow caching for static buildings
- Consider LOD for distant objects
- Monitor draw call count in DevTools

### Code Standards
- Use TypeScript strict mode
- Document public methods with JSDoc
- Follow the existing naming conventions
- Keep systems loosely coupled

## Key Parameters

- World Bounds: -200 to +200 units (XZ plane)
- NPC Spawn Interval: 3-5 seconds (variable)
- World Gen Interval: 8 seconds
- Frame Rate: 60 FPS target

## Testing

Run the dev server and test:
- [ ] Cat God respawns correctly
- [ ] NPCs spawn and move naturally
- [ ] Buildings generate around player
- [ ] Cars move autonomously
- [ ] UI updates correctly
- [ ] No console errors

## Common Customizations

### Change Cat God Color
Edit `createCatGodMesh()` in `CatGodNPC.ts`

### Adjust NPC Spawning
Modify `spawnInterval` and `spawnNewNPC()` in `NPCManager.ts`

### Add New Building Style
Create method in `WorldGenerator.ts` and call from `generateStructureNearPlayer()`

## Troubleshooting

**NPCs not spawning?**
- Check `spawnInterval` setting
- Verify `NPCManager.update()` is called in main loop

**Performance issues?**
- Reduce shadow quality in `RenderEngine`
- Disable shadows on non-important objects
- Reduce particle count in orb cats

**Camera issues?**
- Verify camera position in `RenderEngine` constructor
- Check `THREE.PerspectiveCamera` initialization

## Future Enhancements
- Multiplayer synchronization
- Advanced pathfinding algorithms
- Physics engine integration
- Audio system
- Weather and time-of-day system
