# VS Code Suggestions (Autocomplete / IntelliSense)

A practical guide to turning on and using code suggestions in VS Code, written for the JavaScript examples in this repository.

## What "suggestions" means in VS Code

VS Code calls its autocomplete feature **IntelliSense**. It offers suggestions while you type:

| Type | What it suggests |
| --- | --- |
| **Word suggestions** | Words already present in the open file |
| **Member suggestions** | Properties and methods after a `.` (for example `console.` → `log`) |
| **Signature help** | Function parameters while typing inside `()` |
| **Snippets** | Reusable code templates such as `for`, `if`, `log` |
| **Quick suggestions** | Suggestions that appear automatically as you type |
| **Parameter hints** | Small popup showing what a function expects |

## Enable suggestions (the default)

Suggestions are on by default. To confirm or turn them back on:

1. Open **Settings** with `Cmd + ,` (macOS) or `Ctrl + ,` (Windows/Linux).
2. Search for `suggest`.
3. Make sure these are enabled:
   - **Editor: Quick Suggestions** — shows suggestions while typing.
   - **Editor: Suggest On Trigger Characters** — shows suggestions after `.`, `(`, and similar.
   - **Editor: Accept Suggestion On Enter** — `Enter` accepts the selected suggestion.
   - **Editor: Tab Completion** — `Tab` accepts a suggestion.
   - **Editor: Word Based Suggestions** — suggests words from the open document.

## Trigger and accept suggestions

| Action | macOS | Windows / Linux |
| --- | --- | --- |
| Show suggestions manually | `Ctrl + Space` | `Ctrl + Space` |
| Trigger parameter hints | `Cmd + Shift + Space` | `Ctrl + Shift + Space` |
| Accept the selected suggestion | `Tab` or `Enter` | `Tab` or `Enter` |
| Next suggestion | `Down` / `Ctrl + N` | `Down` / `Ctrl + N` |
| Previous suggestion | `Up` / `Ctrl + P` | `Up` / `Ctrl + P` |
| Show details of a suggestion | `Cmd + Space` (while list is open) | `Ctrl + Space` |
| Close the suggestion list | `Esc` | `Esc` |

> `Ctrl + Space` may be captured by macOS Spotlight. If nothing happens, disable that macOS shortcut in **System Settings → Keyboard → Keyboard Shortcuts → Spotlight**, or change the VS Code keybinding.

## Project settings for this repository

Create a `.vscode/settings.json` file in the repository root to keep suggestion behaviour consistent for every chapter:

```json
{
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": true
  },
  "editor.suggestOnTriggerCharacters": true,
  "editor.acceptSuggestionOnEnter": "on",
  "editor.tabCompletion": "on",
  "editor.wordBasedSuggestions": "matchingDocuments",
  "editor.parameterHints.enabled": true,
  "editor.snippetSuggestions": "top",
  "javascript.suggest.autoImports": true,
  "javascript.suggest.completeFunctionCalls": true
}
```

What each setting does:

| Setting | Effect |
| --- | --- |
| `editor.quickSuggestions` | Turns automatic suggestions on for code and strings, off inside comments |
| `editor.suggestOnTriggerCharacters` | Suggests after `.`, `(`, quotes, and other triggers |
| `editor.acceptSuggestionOnEnter` | `Enter` accepts the highlighted suggestion |
| `editor.tabCompletion` | `Tab` accepts suggestions and snippet prefixes |
| `editor.wordBasedSuggestions` | Suggests words from the current or all open documents |
| `editor.parameterHints.enabled` | Shows parameter hints inside function calls |
| `editor.snippetSuggestions` | Puts snippets at the top of the list |
| `javascript.suggest.autoImports` | Suggests and adds imports automatically |
| `javascript.suggest.completeFunctionCalls` | Inserts `()` and places the cursor inside when accepting a function |

## Useful built-in JavaScript snippets

Type the prefix and press `Tab`:

| Prefix | Result |
| --- | --- |
| `log` | `console.log()` |
| `for` | A `for` loop |
| `forof` | A `for...of` loop |
| `if` | An `if` statement |
| `ifelse` | An `if...else` statement |
| `func` | A function declaration |
| `arrow` | An arrow function |
| `trycatch` | A `try...catch` block |
| `setTimeout` | A `setTimeout` call |

Example: type `log` then `Tab` to get `console.log()` with the cursor already inside the parentheses.

## Add your own snippets

1. Open the Command Palette: `Cmd + Shift + P` (macOS) or `Ctrl + Shift + P` (Windows/Linux).
2. Run **Snippets: Configure Snippets**.
3. Choose **javascript.json** (or **New Global Snippets File** to share across projects).
4. Add a snippet and save.

Example snippet for this course:

```json
{
  "Print a test step": {
    "prefix": "step",
    "body": ["console.log(\"Step: $1\");", "$0"],
    "description": "Log a test step to the console"
  },
  "Arrow test function": {
    "prefix": "testfn",
    "body": ["const ${1:name} = () => {", "  $0", "};"],
    "description": "Create an arrow function for a test"
  }
}
```

Type `step` or `testfn` in a `.js` file and press `Tab` to insert the snippet.

## Suggested extensions for better suggestions

Install from the Extensions view (`Cmd + Shift + X` / `Ctrl + Shift + X`):

| Extension | Why |
| --- | --- |
| **ESLint** | Highlights problems and suggests fixes |
| **Prettier – Code formatter** | Formats code consistently |
| **Error Lens** | Shows errors and warnings inline |
| **GitHub Copilot** | AI-powered inline suggestions (requires a subscription) |
| **Playwright Test for VS Code** | Suggestions and test running for Playwright specs |

## If suggestions are not showing

Check these in order:

1. **File language mode** — the bottom-right status bar should show `JavaScript`, not `Plain Text`. Click it and choose `JavaScript`.
2. **Quick suggestions enabled** — search `suggest` in Settings and re-enable them.
3. **`Ctrl + Space` manually** — if the list appears now, only automatic triggering is disabled.
4. **File saved** — IntelliSense works best on saved files; save with `Cmd + S` / `Ctrl + S`.
5. **Untrusted workspace** — accept the prompt to trust the folder; some features stay limited in Restricted Mode.
6. **Extension conflict** — disable other autocomplete extensions one at a time to find the culprit.
7. **Reload the window** — Command Palette → **Developer: Reload Window**.
