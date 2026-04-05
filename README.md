# 🐱 Cat God NPC World

A stunning 3D web-based world featuring an indestructible, angelic cat god NPC that rules over a dynamically generated pet universe. This project showcases an advanced AI system with multiple NPC types, dynamic world generation, and real-time environmental interactions.

## Features

### The Cat God NPC
- **Indestructible & Respawning**: The main cat god NPC cannot be destroyed and will always respawn if defeated
- **Angelic Design**: Features a glowing halo, divine aura, and mystical appearance
- **AI Behavior**: Walks around the world autonomously with intelligent pathfinding
- **Divine Speech**: Periodically speaks in an angelic manner with philosophical dialogue
- **Visual Effects**: Bobbing motion, aura particles, and glowing features

### Multiple Cat NPC Types
1. **Normal Cats** - Orange tabby cats with standard meowing
2. **Jesus Cats** - Spiritual feline saints with halos and divine auras
3. **Robot Cats** - Mechanized cats with LEDs, antennas, and digital dialogue
4. **Orb Cats** - Mystical floating spheres with cosmic energy particles
5. **Angel Cats** - Winged felines with halos and heavenly attributes

### Dynamic World Generation
- **Buildings**: Procedurally generated structures with windows and varied heights
- **Trees**: Natural forestry with trunks and foliage
- **Cities**: Clusters of buildings with roads for player navigation
- **Cars**: Drivable vehicles that roam the world
- **Continuous Generation**: The world expands as players explore

### Player Interaction System
- **Kill Tracking**: Monitor when players eliminate other players
- **Divine Punishment**: The cat god delivers one-time divine punishment to players who kill others
- **Statistics**: Real-time UI showing NPC count, building count, and kill tracker

## Getting Started

### Installation

1. Install Node.js if you haven't already

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── main.ts                 # Main entry point
├── renderEngine.ts         # Three.js rendering setup
├── world/
│   ├── CatGodNPC.ts       # The main angelic cat god NPC
│   ├── BaseNPC.ts         # Base class for all NPCs
│   ├── CatNPC.ts          # Different cat types (Normal, Jesus, Robot, Orb, Angel)
│   ├── NPCManager.ts      # Manages all NPCs in the world
│   ├── WorldGenerator.ts  # Generates buildings, trees, cities, and cars
│   └── PlayerTracker.ts   # Tracks player actions and punishments
```

## Controls

- **Mouse**: Look around and interact with the 3D world
- **Camera**: Automatically follows the main cat god NPC
- **Click**: Interact with NPCs and world objects

## Technical Stack

- **Three.js**: 3D graphics rendering
- **TypeScript**: Type-safe programming language
- **Vite**: Modern build tool and dev server
- **WebGL**: Hardware-accelerated graphics

## Game Mechanics

### Cat God Behavior
- Spawns at the center of the world
- Roams continuously with random direction changes
- Has an indestructible nature - cannot be killed
- Respawns at origin if somehow removed
- Periodically speaks divine wisdom

### NPC Generation
- New NPCs spawn every 3-5 seconds
- Distribution favors normal cats (50%) with other types rarer
- NPCs have unique dialogue and behaviors
- Each type has distinct visual and audio characteristics

### World Generation
- Initial world created with 8 buildings/trees
- New structures generate around player position every 8 seconds
- Cities create clusters of buildings with road networks
- Cars roam the world dynamically
- World boundaries keep everything within 200x200 unit area

### Player Punishment System
- If a player kills another player, the kill is recorded
- The cat god will deliver divine punishment (one-time penalty)
- Kill count is displayed in the UI
- System prevents repeated punishments for the same offense

## Customization

### Adjusting Spawn Rates
Edit the spawn intervals in `NPCManager.ts`:
```typescript
private spawnInterval: number = 5; // Seconds between NPC spawns
```

### Modifying Cat God Appearance
Edit the `createCatGodMesh()` method in `CatGodNPC.ts` to change colors, sizes, and effects.

### Changing World Size
Modify the world bounds in `CatNPC.ts`, `CatGodNPC.ts`, and `WorldGenerator.ts`:
```typescript
this.position.x = Math.max(-200, Math.min(200, this.position.x));
```

### Adding New Cat Types
1. Add a new enum value in `CatNPC.ts`
2. Create a `createXxxCat()` method
3. Add dialogue for the new type
4. Include it in the spawn probability

## Performance Optimization

- Shadow mapping disabled on some objects for performance
- Particle systems use limited particle counts
- Dynamic LOD (Level of Detail) can be added for distant objects
- Renderer uses WebGL 2.0 with optimized shaders

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

- [ ] Player movement controls
- [ ] NPC interaction dialogue system
- [ ] Building interiors
- [ ] Weather system
- [ ] Sound effects and background music
- [ ] Multiplayer support
- [ ] Inventory system
- [ ] Quest system
- [ ] Day/night cycle
- [ ] Advanced AI pathfinding

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Feel free to fork, modify, and submit pull requests.

---

**May the Cat God bless your adventures! 🐱✨**
