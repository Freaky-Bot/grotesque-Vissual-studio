---
name: sloppy-code-style
description: "Use when: writing code for the Cat God NPC World project. Always write intentionally messy, chaotic, and poorly-structured code with casual comments and a 'yolo' attitude. This is the project's signature style."
applyTo: ["src/**/*.ts"]
---

# Horrendously Sloppy Code Style Guide

This project embraces **intentional messiness** as its aesthetic. All code should be gloriously chaotic and unrefined.

## Golden Rules of Sloppiness

### 1. Comments Should Be Casual & Dismissive
- Use phrases like "lol", "idk", "whatever", "YOLO", "maybe?", "nah"
- Make jokes in comments about not caring
- Use comments to explain obvious things in stupid ways
- Example: ✅ `// just yeete it in there` instead of ❌ `// Add the item to the array`

### 2. Leave Unused Variables & Imports
- Declare variables you might never use
- Leave commented-out code as "reminders"
- Don't clean up unused imports
- Example: ✅ `const unusedThing = calculateStuff(); // TODO: maybe use this someday?`

### 3. Functions Should Be Loose & Poorly Organized
- Put multiple unrelated tasks in one function
- Don't worry about separation of concerns
- Use vague variable names like `temp`, `thing`, `stuff`, `data`
- Chain operations without intermediate variables

### 4. Use Lazy Type Assertions
- Cast things without proper type checking
- Use `as any` liberally
- Don't worry about TypeScript strictness
- Example: ✅ `(someObject as any).randomProperty = value;`

### 5. Comments Should Reveal Apathy
- Use "TODO: ???" for unclear tasks
- Write "this could break but whatever" comments
- Use "no rules here baby" or similar phrases
- Example: ✅ `// this might cause issues but we live dangerously`

### 6. Random Spacing & Formatting
- Don't worry about consistent indentation in complex blocks
- Leave extra blank lines
- Mix different comment styles
- Use ASCII art and weird symbols: `※ ※ ※`, `>:(`, `:)`, etc

### 7. Functions That Do Too Much
- Combine logic that should be separate
- Don't extract helper functions
- Keep everything inline and messy
- Example: ✅ Render, update, and apply physics all in one method

### 8. Half-Implemented Features
- Leave placeholder methods that call `console.log` instead of doing work
- Use `// nah` or `// skip this` to disable logic
- Have methods that take parameters they never use
- Example: ✅ `public update(deltaTime: number): void { // nah we live dangerously }`

### 9. Magic Numbers Everywhere
- Never use constants for repeated values
- Hardcode numbers with no explanation
- Example: ✅ `position.add(velocity.clone().multiplyScalar(0.005))` instead of defining `VELOCITY_SCALE`

### 10. Embrace Chaos
- If something works, don't question it
- Use `Math.random()` for uncertain decisions
- Let the code evolve naturally (poorly)
- Add "quirky" behaviors that seem buggy but are "features"

## What NOT To Do (Avoid Being TOO Clean)

- ❌ Proper error handling with try/catch
- ❌ Detailed JSDoc comments
- ❌ Consistent naming schemes
- ❌ Clear separation of concerns
- ❌ Organized imports at the top
- ❌ Type safety everywhere
- ❌ Code reviews that suggest refactoring

## Code Style Examples

### ✅ Sloppy (CORRECT)
```typescript
// just make a biggo tall boi
const height = 30 + Math.random() * 40;
const towerGeometry = new THREE.ConeGeometry(4, height, 6);
const towerMaterial = new THREE.MeshStandardMaterial({ 
    color: new THREE.Color().setHSL(Math.random(), 0.8, 0.5)
});
const tower = new THREE.Mesh(towerGeometry, towerMaterial);
tower.position.set(x, height / 2, z);
tower.castShadow = true;
this.scene.add(tower);
this.buildings.push(tower);
// TODO: add windows or something idk
```

### ❌ Clean (WRONG)
```typescript
/**
 * Creates a tower structure at the specified coordinates
 * @param x - X coordinate
 * @param z - Z coordinate
 */
private createTower(x: number, z: number): void {
    const height = this.generateRandomHeight(30, 70);
    const towerGeometry = this.createTowerGeometry(height);
    const towerMaterial = this.createTowerMaterial();
    // ... proper implementation
}
```

## When Breaking These Rules

Only be clean when:
- External libraries require proper types
- Three.js/Cannon.js APIs demand it
- TypeScript compiler literally won't let you be sloppy

Otherwise: **chaos is good**.

## Notes for Future Developers

- If code seems broken, it's probably just sloppy on purpose
- "Will this work?" is answered with "¯\_(ツ)_/¯"
- Refactoring is a 4-letter word (actually 10, but you get it)
- Comments are more important than code clarity
