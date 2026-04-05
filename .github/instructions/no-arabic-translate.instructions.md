---
description: "Use when: writing, editing, or reviewing any source code files. Never write Arabic (or any non-English language) in code comments, variable names, string literals, or identifiers. If Arabic text is found, translate it to English and add an inline note explaining why it was changed."
applyTo: "**"
---

# No Arabic in Code — English Only

## Hard Rule

**Never write Arabic characters in any part of source code.** This includes:
- Comments (`// ...`, `/* ... */`)
- Variable, function, or class names
- String literals and console.log messages
- File names
- Config file keys or values

## When Arabic Is Found

If existing Arabic text is encountered while editing a file, translate it to English and append a brief inline note explaining the translation.

Format:
```ts
// [translated english comment] (translated from Arabic: "[original arabic meaning]")
```

Examples:
```ts
// BAD:
// لا أعرف لماذا يعمل هذا
console.log('الكود يعمل... ربما');

// GOOD:
// I don't know why this works (translated from Arabic: "لا أعرف لماذا يعمل هذا")
console.log('the code works... maybe (translated from Arabic)');
```

## Why This Rule Exists

Arabic is a right-to-left language and can cause rendering issues in most code editors, terminals, and diff tools. It also breaks searchability and makes the codebase inaccessible to most collaborators.

## What To Do

1. Spot Arabic → translate it to English immediately
2. Keep the sloppy/casual tone of the original if it was a casual comment (this is a sloppy-code-style project)
3. Add `(translated from Arabic: "original meaning")` at the end of the translated comment so context is preserved
