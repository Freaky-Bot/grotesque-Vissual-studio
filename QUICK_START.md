# 🐱 Cat God World - Quick Start Guide - Nyaa!

## What You Got - Meow! 🎉

Your divine cat realm is fully created with:
- ✨ An indestructible angelic Cat God NPC that roams and speaks
- 🐱 Five different cat types (Normal, Jesus, Robot, Orb, Angel) - nyaa~
- 🏢 Procedurally generated buildings, trees, cities, and cars
- 👁️ Real-time NPC and environment tracking
- ⚔️ Player punishment system for rule-breakers - meow!

## Installation Steps - Nyaa! 🚀

### Step 1: Install Node.js 
Download and install from: **https://nodejs.org/** (version 16 or higher)
Purr-fect! ✨

### Step 2: Run Setup Script
Choose one based on your preference:

**Windows Command Prompt (easiest):**
```
setup.bat
```

**PowerShell:**
```
powershell -ExecutionPolicy Bypass -File setup.ps1
```

**Manual (if scripts don't work):**
```
npm install
```

### Step 3: Start the World - Meow! 🌍
```
npm run dev
```

Your browser should open automatically to `http://localhost:5173` - Nyaa~!

## What Happens - Cat Behaviors! 🐱

When you launch the world, behold:
- 🌟 The angelic Cat God appears at the center, glowing with divine light - meow!
- 🐱 New cats spawn every 3-5 seconds with unique personalities
- 🏗️ Buildings and trees generate around you as you explore
- 🚗 Cars roam the world autonomously - vroom vroom, nyaa!
- 💬 NPCs speak unique dialogue based on their type
- ⚖️ The UI tracks kills and punishments

## Controls & Interaction - Purr! 🎮

- **Mouse Scroll/Drag**: Explore the world
- **Look Around**: Follow the Cat God and see what happens
- **Console**: Open DevTools (F12) to see NPC dialogue and events

## Building Details - Meow Details! 🏰

### The Cat God - Divine and Indestructible! ✨
- Golden aura that glows with holy light
- Angelic halo that rotates
- Speaks wisdom: "Meow... the world is mine", "All cats bow before me"
- Never dies, always respawns at center
- Bobs gracefully with mystical motion

### Cat Types - Nyaa Variety! 🌈

| Type | Appearance | Special Feature |
|------|-----------|-----------------|
| **Normal** | Orange tabby | Standard meowing |
| **Jesus** | Orange + Halo | Spiritual dialogue |
| **Robot** | Gray metallic + LED eyes | Beep boop meows |
| **Orb** | Glowing blue sphere | Floating mystically |
| **Angel** | Tabby + Wings + Halo | Divine messages |

## Troubleshooting - Help! Meow SOS! 🆘

**"npm: command not found"**
- Node.js isn't installed - download from nodejs.org, nyaa!

**"Port 5173 is already in use"**
- Another app is using that port
- Try: `npm run dev -- --port 5174` - meow!

**Browser shows blank page**
- Wait 5-10 seconds for build to complete - patience, nyaa~
- Check DevTools Console (F12) for errors - meow!

**Performance is slow**
- Close other browser tabs
- Reduce shadow quality in `src/renderEngine.ts` - purr!

## Customization Ideas - Nyaa Creativity! 🎨

### Add More Cat Types
Edit `src/world/CatNPC.ts` and copy an existing cat creation method~

### Change Spawn Rates
Edit `src/world/NPCManager.ts` - adjust `spawnInterval` value, meow!

### Modify World Size
Edit the bounds in any NPC file (currently ±200 units) - nyaa!

### Add Custom Dialogue
Edit the `dialogues` array in `src/world/CatNPC.ts` - speak your truth! Meow!

## File Structure - The Kitty Files! 📁

```
src/
├── main.ts                  # Entry point - Nyaa!
├── renderEngine.ts          # 3D rendering setup
└── world/
    ├── CatGodNPC.ts        # The divine feline - Meow!
    ├── BaseNPC.ts          # NPC foundation
    ├── CatNPC.ts           # All cat types - Nyaa variety!
    ├── NPCManager.ts       # Spawning system
    ├── WorldGenerator.ts   # Building & environment
    └── PlayerTracker.ts    # Kill tracking - Justice!
```

## Next Steps - More Cat Power! 🚀

Want to expand? Try:
- [ ] Add keyboard controls to move the player
- [ ] Create a quest system
- [ ] Add sound effects and music
- [ ] Implement day/night cycle
- [ ] Add weather system
- [ ] Create building interiors

## Have Fun! - Nyaa! 🎉✨

The Cat God realm is yours to explore! May you be blessed with infinite purrs and divine wisdom! 

**Meow meow, nyaa~** 🐱✨

---
For more details, check `README.md` - Purr-fect documentation! 📖
