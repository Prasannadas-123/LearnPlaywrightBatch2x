# LearnPlaywrightBatch2x

A personal learning repository for JavaScript fundamentals and Playwright automation, organised chapter by chapter. Each chapter contains small, focused example files that can be read and run directly.

## Chapters

| Chapter | Contents |
| --- | --- |
| `chapter_01_Basics` | Console output, loops, functions, hoisting behaviour, and Node.js runtime commands |
| `chapter_02_JavaScript_Concepts` | `var` fundamentals, identifier rules, naming conventions, and comment styles |
| `chapter_03_Indentifier_literals` | VS Code keyboard shortcut references for macOS and Windows |

### `chapter_01_Basics`

| File | Topic |
| --- | --- |
| `01_Basics.js` | First `console.log` script |
| `02_js.JS` | `let`, `for` loops, and function declarations |
| `03_JS_Commands.js` | Node.js runtime info via `process` (`platform`, `arch`, `version`) |
| `04_JS_HotCodes.js` | Function call performance in a 10,000-iteration loop |

### `chapter_02_JavaScript_Concepts`

| File | Topic |
| --- | --- |
| `05_JS_Basics.js` | Declaring and logging a variable |
| `06_JS_Identifier_Rules.js` | Valid and invalid identifier names |
| `07_Identifier_Part2.js` | Naming conventions: camelCase, snake_case, PascalCase, CONSTANT_CASE, and more |
| `08_Comment.js` | Single-line, multi-line, and documentation comments |

### `chapter_03_Indentifier_literals`

| File | Topic |
| --- | --- |
| `VS_Code_keyword_shortcut_mac.md` | Shortcuts for macOS |
| `VS_Code_keyword_shortcut_windows.md` | Shortcuts for Windows |

## Running the Examples

The examples are plain JavaScript and run with Node.js, so no dependencies need to be installed.

```bash
node chapter_01_Basics/01_Basics.js
node chapter_02_JavaScript_Concepts/07_Identifier_Part2.js
```

Check your installed Node.js version with:

```bash
node --version
```

An editor with JavaScript support is recommended. [VS Code](https://code.visualstudio.com/) is used for the shortcut references in `chapter_03_Indentifier_literals`.

## Notes

- Some files intentionally contain syntax errors or invalid identifier names to demonstrate what JavaScript rejects. They are learning examples, not runnable scripts.
- Chapters build on each other, so working through them in numeric order is recommended.
