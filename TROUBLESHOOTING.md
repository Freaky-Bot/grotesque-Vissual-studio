# 🐱 Cat God World - Troubleshooting Guide - Nyaa Help! 

## Installation Issues - Meow Setup Problems! 🆘

### "Node is not recognized" / "npm: command not found"

**Cause:** Node.js not properly installed, meow!

**Fix:**
1. Download Node.js from https://nodejs.org/ (LTS version - purr!)
2. Run the installer and restart your computer - nyaa!
3. Verify: Open terminal and type `node --version` - should show version number, meow!
4. Try `npm install` again - blessed by the Cat God!

### "npm ERR! code EACCES" (Permission Denied)

**Cause:** npm cache permissions issue, meow meow!

**Fix:**
```bash
npm cache clean --force
npm install --no-optional
```

Or try with admin terminal:
- Windows: Right-click terminal → "Run as Administrator" - nyaa!
- Mac/Linux: `sudo npm install`

### "npm ERR! 404" (Package Not Found)

**Cause:** Network issue or npm registry problem, hiss!

**Fix:**
```bash
npm cache clean --force
rm package-lock.json
npm install
```

*Sometimes npm servers are sleepy, patience meow!*

---

## Runtime Issues - The World Won't Load! 🌍

### Blank Screen After `npm run dev`

**Cause:** Multiple reasons - let's debug, nyaa!

**Steps to Fix:**
1. **Wait 10-15 seconds** - Vite builds in background, meow patience!
2. **Open DevTools** - Press F12
3. **Check Console tab** - Look for red error messages
4. **Check Network tab** - See if files are loading
5. **Hard refresh** - Ctrl+Shift+R (or Cmd+Shift+R on Mac) - purr refresh!

**Common Errors:**
- `Cannot find module 'three'` → Run `npm install`, nyaa!
- `[vite] Internal server error` → Restart dev server, meow!
- `404 on src/main.ts` → Check file paths in code, hiss!

### Port 5173 Already in Use

**Cause:** Another app using the port, meow!

**Fix Option 1 - Change Port:**
```bash
npm run dev -- --port 5174
```
*Uses 5174 instead, nyaa!*

**Fix Option 2 - Find & Kill Process:**

Windows PowerShell:
```powershell
Get-Process | Where-Object {$_.Port -eq 5173}
Stop-Process -Name node -Force
```

Mac/Linux:
```bash
lsof -i :5173
kill -9 <PID>
```

**Fix Option 3 - Restart Everything:**
- Close VS Code
- Close browser
- Restart terminal
- Run `npm run dev` again - meow fresh start!

---

## Graphics/Rendering Issues - Something's Wrong With The Cats! 🐱

### Black Screen or No Objects Visible

**Cause:** Rendering initialization issue, meow meow!

**Fix:**
1. Check browser console (F12) for WebGL errors
2. Verify graphics card supports WebGL2
3. Try different browser - Chrome is most reliable, nyaa!
4. Update graphics drivers - purr smoothly!

### Low FPS / Game Runs Slowly

**Cause:** Performance issue - too much cat power! Meow!

**Quick Fixes:**
```typescript
// In src/renderEngine.ts

// Disable shadow mapping:
this.renderer.shadowMap.enabled = false;

// Reduce resolution:
this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
```

**Other Tips:**
- Close other browser tabs - cat focus!
- Reduce spawn rates in `NPCManager.ts` - fewer meows!
- Reduce particle effects - less shimmer, nyaa!
- Lower shadow map size - purr performance!

### NPCs Disappearing or Looking Wrong

**Cause:** Rendering bounds or camera issues, hiss!

**Fix:**
1. Verify world bounds in `CatGodNPC.ts`:
```typescript
this.position.x = Math.max(-200, Math.min(200, this.position.x));
```

2. Check camera position in `renderEngine.ts`:
```typescript
this.camera.position.set(0, 30, 50); // Meow coordinates!
```

3. Ensure mesh is added to scene - check `scene.add(mesh)`, nyaa!

---

## TypeScript/Code Issues - Meow Code Problems! 📝

### "Cannot find name" Error

**Cause:** Missing import statement, meow!

**Example:**
```typescript
// Wrong - nyaa!
const mesh = new THREE.Mesh();

// Right - purr!
import * as THREE from 'three';
const mesh = new THREE.Mesh();
```

### Red Squiggly Lines in Editor

**Cause:** TypeScript type errors - don't panic, meow!

**Fix:**
1. Hover over red squiggle - read error message
2. Usually just missing type annotations
3. Check if property exists on object
4. Add proper TypeScript types, nyaa!

### Build Succeeds But Runtime Error

**Cause:** Logic error not caught by TypeScript, hiss!

**Debug Steps:**
1. Open DevTools Console (F12)
2. Look for error message
3. Check line number mentioned
4. Add defensive checks - type guards, purr!
5. Console.log() values to check - meow debugging!

---

## Asset/Model Issues - Cat Meshes Acting Funny! 🐱

### Models Positioned Wrong (Underground/Sky)

**Cause:** Position calculation error, meow!

**Fix:**
```typescript
// Check Y position - should be above ground (0)
const npc = new CatNPC(CatType.NORMAL, new THREE.Vector3(x, 2, z));
                                                            // ^ should be > 0, nyaa!
```

### Models Not Rotating Correctly

**Cause:** Wrong rotation axis or order, hiss!

**Fix:**
```typescript
// Test rotation
mesh.rotation.x = 0;
mesh.rotation.y = 0; // Most common for facing direction
mesh.rotation.z = 0;

// Or use vector rotation
const axis = new THREE.Vector3(0, 1, 0);
mesh.rotateOnWorldAxis(axis, angle); // Meow precision!
```

### Materials Look Wrong / Too Dark / Too Bright

**Cause:** Lighting or material issue, meow!

**Fix:**
```typescript
// Better material setup
const material = new THREE.MeshStandardMaterial({
    color: 0xff8844,
    metalness: 0.3,    // 0-1, lower = matte, nyaa!
    roughness: 0.4,    // 0-1, higher = duller, meow!
    emissive: 0x000000 // Glow color, purr!
});
```

---

## World Generation Issues - Structures Acting Weird! 🏗️

### Buildings/Trees Not Spawning

**Cause:** Spawn function called wrong or interval too long, hiss!

**Fix - Check NPCManager.ts:**
```typescript
this.spawnTimer += deltaTime;
if (this.spawnTimer >= this.spawnInterval) { // Should trigger, meow!
    this.spawnNewNPC();
    this.spawnTimer = 0;
}
```

### World Gets Too Crowded

**Cause:** Spawning too fast, meow overload!

**Fix - Increase intervals:**
```typescript
// In NPCManager.ts
this.spawnInterval = 8; // Was 5, now more patient - nyaa!

// In WorldGenerator.ts
private spawnTimer = 0;
private worldGenInterval = 15; // Was 8, purr slower!
```

### Objects Stacking on Top of Each Other

**Cause:** No collision detection, meow chaos!

**Note:** Current system doesn't have physics. Objects can overlap - it's magical, nyaa! 

**To Fix (advanced):**
- Add Cannon-es physics engine
- Implement collision detection
- Use raycasting to find free space
- Purr sophisticated meow!

---

## Performance Profiling - Make It Fast! ⚡

### Use Browser DevTools

1. Press F12 → Performance tab
2. Click Record circle
3. Let it run for 10 seconds
4. Stop recording
5. Look at FPS and frame times - meow metrics!

**What Should Happen:**
- Green bar = smooth (60 FPS) - purr excellent!
- Yellow bar = okay (30-60 FPS) - meow acceptable
- Red bar = bad (<30 FPS) - hiss need optimization!

### Optimize If Needed

```typescript
// Reduce shadow calculations
directionalLight.shadow.mapSize.width = 1024; // Was 2048, purr lighter!

// Limit particles in orb cats
const particlesCount = 10; // Was 20, fewer glows, nyaa!

// Use LOD (Level of Detail)
// Far objects = simpler models, meow efficiency!
```

---

## Network/Deployment Issues - Share Your Cats! 🚀

### Build Fails With Errors

**Fix:**
```bash
npm run build 2>&1 | more
```
*Shows full error output, read carefully meow!*

### Built Files Don't Work When Hosted

**Cause:** Path issues or missing assets, hiss!

**Fix in vite.config.ts:**
```typescript
export default defineConfig({
  base: '/', // Or your subdirectory path, meow!
})
```

### Website says "Cannot GET /"

**Cause:** Need to serve index.html, not a folder, meow!

**Proper Hosting:**
- Vercel - auto detects Vite, purr easy!
- Netlify - set build command to `npm run build`, nyaa!
- GitHub Pages - requires extra config, hiss technical!

---

## Last Resort - The Nuclear Option! 💣

If ALL else fails, try the ultimate meow reset:

```bash
# Back up your src/ folder first! Meow safety!

# Complete clean
rm -r node_modules dist .vite
rm package-lock.json

# Fresh install
npm install

# Delete .git folder if having git issues
rm -r .git
git init

# Try again
npm run dev
```

*The divine Cat God can heal all issues! Nyaa!* ✨

---

## Still Stuck? - Meow for Help! 🆘

If nothing works, try:
1. **Check exact error message** - copy-paste it, meow!
2. **Google the error** - often solved, nyaa!
3. **Check Three.js docs** - https://threejs.org/docs/ - purr knowledge!
4. **Check Vite docs** - https://vitejs.dev/ - official meow!
5. **Check your code** - Is import path right? Type right? Meow logical!

Remember: The Cat God believes in you! Keep calm and meow on! 🐱✨

**Blessed be your debugging journey, nyaa~**
