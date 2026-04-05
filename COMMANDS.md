# 🐱 Cat God World - Command Reference - Nyaa!

## Essential Commands - Meow Magic! ✨

### First Time Setup - Purr Purr!
```bash
npm install
```
*Installs all the divine cat libraries, nyaa~*

### Start Development Server - Meowing Begins!
```bash
npm run dev
```
*Launches your Cat God realm on localhost:5173 - Nyaa!*
- Auto-reloads when you change code
- Opens browser automatically
- Shows errors in console

### Build for Production - Final Meow! 🚀
```bash
npm run build
```
*Creates optimized version in `dist/` folder, purr!*
- Compresses all code
- Ready to deploy anywhere
- Meow meow, go live!

### Preview Built Version - Check It Out!
```bash
npm run preview
```
*Shows what your production build looks like, nyaa~*

## Development Tips - Pro Nyaa! 🧙‍♂️

### Change Dev Port - If 5173 is Taken!
```bash
npm run dev -- --port 5174
```
*Uses different port - meow flexibility!*

### Clear npm Cache - Freshen Up!
```bash
npm cache clean --force
```
*Clears cache if things get weird, nyaa!*

### Reinstall Everything - Clean Slate!
```bash
rm -r node_modules package-lock.json
npm install
```
*Completely fresh install - purr renewal!*

## Editing Tips - Nyaa Code Style! 🐱

### File Modifications - Where to Meow!

**Change Cat God appearance:**
- File: `src/world/CatGodNPC.ts`
- Function: `createCatGodMesh()`
- Edit colors, size, effects - meow!

**Add new NPC types:**
- File: `src/world/CatNPC.ts`
- Add enum value, copy creation method
- Nyaa instant cat type!

**Adjust spawn rates:**
- File: `src/world/NPCManager.ts`
- Variable: `spawnInterval`
- Lower = more cats, higher = fewer cats - purr balance!

**Change world generation:**
- File: `src/world/WorldGenerator.ts`
- Methods: `createBuilding()`, `createTree()`, `createCar()`
- Meow with structure code!

**Add world boundaries:**
- Search for: `Math.max(-200, Math.min(200`
- Change 200 to desired limit - nyaa!

## Debugging - Meow Detective Mode! 🔍

### Open Browser DevTools
```
Press: F12 or Ctrl+Shift+I
```

### Check Console - Nyaa Messages!
- Shows NPC dialogue
- Reports errors
- Displays game events
- Meow information flow!

### Performance Monitoring
- Tab: "Performance"
- Click "Record"
- Watch your code run
- Purr optimization tips!

### 3D Inspection
*In Three.js, you can add orbit controls:*
```typescript
// Helps debug camera angles - meow!
```

## Common Issues & Fixes - Meow Help! 🆘

| Problem | Solution | Cat Blessing |
|---------|----------|-------------|
| `npm: command not found` | Install Node.js | Nyaa! |
| Port 5173 in use | Change port number | Meow! |
| Blank screen | Wait for build, check F12 | Purr! |
| Models not showing | Check console for errors | Meow meow! |
| Slow performance | Reduce shadow quality | Nyaa! |
| NPCs not spawning | Check spawnInterval value | Hiss! |

## Git Commands - Version Control Nyaa! 📦

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "🐱 Cat God World - Divine realm created"

# Check status
git status
```

*Meow, track your creations!*

## Deployment - Take It Live! 🚀

After running `npm run build`:

### Deploy to Vercel (Easy Meow!)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify (Also Easy!)
1. Zip the `dist/` folder
2. Go to netlify.com
3. Drag & drop the zip
4. Meow, it's live! Nyaa!

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
```
*Then add deployment scripts to package.json*

## Useful Extensions - IDE Power! 🔧

For VS Code, install:
- **Three.js Helper** - Better 3D support
- **TypeScript Vue Plugin** - Type checking
- **Thunder Client** - API testing
- **Live Server** - Local server alternative

*Meow, power up your editor!*

## Resources - More Nyaa Learning! 📚

- **Three.js Docs:** https://threejs.org/docs/
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **Vite Guide:** https://vitejs.dev/guide/
- **MDN Web Docs:** https://developer.mozilla.org/

*Purr through the documentation, meow!*

---

**Remember:** The Cat God watches over your code. Code with honor! Nyaa~ ✨🐱
