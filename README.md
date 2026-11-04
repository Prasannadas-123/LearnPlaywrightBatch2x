# LearnPlaywrightBatch2x

A personal learning repository for JavaScript fundamentals and Playwright automation, organised chapter by chapter. Each chapter contains small, focused example files that can be read and run directly.

## Chapters

| Chapter | Contents |
| --- | --- |
| `chapter_01_Basics` | Console output, loops, functions, hoisting behaviour, and Node.js runtime commands |
| `chapter_02_JavaScript_Concepts` | `var` fundamentals, identifier rules, naming conventions, and comment styles |
| `chapter_03_Indentifier_literals` | VS Code keyboard shortcut references for macOS and Windows, and IntelliSense/suggestions |
| `chapter_04_Javascript_Concepts` | `var`, `let`, and `const`, function basics, scope, and hoisting |
| `chapter_05_Literals` | String, number, null, undefined, template literals, and literal types |
| `chapter_06_Operator` | Arithmetic, modulo, exponentiation, comparison, logical, ternary, typeof, increment/decrement, and nullish operators |
| `chapter_07_if_else` | If-else, if-else-if, real-world conditionals, API checks, grading, leap year, and related exercises |
| `chapter_08_Switch_Statement` | Switch statement examples |

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
| `06_JS_Identifier_Rules.js` | Valid and invalid identifier names, including Unicode and reserved words |
| `07_Identifier_Part2.js` | Naming conventions: camelCase, snake_case, PascalCase, CONSTANT_CASE, and more |
| `08_Comment.js` | Single-line, multi-line, and documentation comments |

### `chapter_03_Indentifier_literals`

| File | Topic |
| --- | --- |
| `VS_Code_keyword_shortcut_mac.md` | Shortcuts for macOS |
| `VS_Code_keyword_shortcut_windows.md` | Shortcuts for Windows |
| `VS_Code_Suggestions.md` | How to enable and use IntelliSense, snippets, and autocomplete |

### `chapter_04_Javascript_Concepts`

| File | Topic |
| --- | --- |
| `09_var_let_const.js` | Declaring variables with `var`, `let`, and `const` |
| `10_functions.js` | Defining and calling a function, with and without arguments |
| `11_var_explained.js` | `var` as a global variable with redeclaration and reassignment |
| `12_let_people_love.js` | `let` block scoping and why redeclaration fails |
| `13_const_explained.js` | `const` values and reassignment errors |
| `14_var_functionScope.js` | `var` function scope versus block scope |
| `15_letScope.js` | `let` block scope versus function scope |
| `16_Hosting.js` | Hoisting with `var` and the temporal behaviour of `let` |
| `17_hosting_funstions.js` | Hoisting inside functions and `undefined` before assignment |

### `chapter_05_Literals`

| File | Topic |
| --- | --- |
| `22_Literals.js` | Introduction to literals |
| `23_null_vs_undefined.js` | Differences between `null` and `undefined` |
| `24_null.js` | Working with `null` |
| `25_Literals_All.js` | Overview of different literal types |
| `26_Literals_Number_all.js` | Number literals |
| `27_Stirng.js` | String literals |
| `28_Templete_Literals.js` | Template literals (backticks) |
| `29_backtick_single_double.js` | Comparing quotes and backticks |

### `chapter_06_Operator`

| File | Topic |
| --- | --- |
| `30_Operator.js` | Introduction to operators |
| `31_Arithmetic_OP.js` | Arithmetic operators |
| `32_Modulu_OP.js` | Modulus operator |
| `33_Expo_OP.js` | Exponentiation operator |
| `34_IQ.js` | Operator interview questions |
| `35_Comparsion_OP.js` | Comparison operators |
| `36_Comparsion_Strict_Lose.js` | Strict vs loose comparison |
| `37_Loose.Strict.js` | Loose vs strict comparison examples |
| `38_Confusing_Copmarsion.js` | Tricky comparison cases |
| `39_Logical_OP.js` | Logical operators (AND, OR, NOT) |
| `40_String_Con_OP,js` | String concatenation operator |
| `41_Ternary_OP.js` | Ternary operator |
| `42_Type_OP.js` | `typeof` operator |
| `43_Incre_Decre_OP.js` | Increment and decrement operators |
| `44_Null_OP.js` | Nullish coalescing operator |
| `45_Post_Increment.js` | Post-increment examples |
| `46_IQ_Increment_Decrement.js` | Increment/decrement interview questions |
| `47_Advance_ID.js` | Advanced increment/decrement operator cases |

### `chapter_07_if_else`

| File | Topic |
| --- | --- |
| `48_If_ELSE.js` | Basic if-else |
| `49_if_elseIf_esle.js` | If-else-if-else ladder |
| `50_REAL_IF_ELSE.js` | Real-world if-else examples |
| `51_API_IF_ELSE.js` | API response conditional handling |
| `52_IQ_IF_ELSE.js` | If-else interview questions |
| `54_IQ.js` | Additional interview questions |
| `55_IE.js` | If-else exercises |
| `56_IQ_Even_Odd.js` | Even/odd number checks |
| `57_Grade_Cal.js` | Grade calculation |
| `58_Leap_Year.js` | Leap year checker |
| `IF_ELSE.Real.js` | Real if-else examples |

### `chapter_08_Switch_Statement`

| File | Topic |
| --- | --- |
| `59_Switch.js` | Switch statement examples |

## Running the Examples

The examples are plain JavaScript and run with Node.js, so no dependencies need to be installed.

```bash
node chapter_01_Basics/01_Basics.js
node chapter_02_JavaScript_Concepts/07_Identifier_Part2.js
node chapter_04_Javascript_Concepts/09_var_let_const.js
```

Check your installed Node.js version with:

```bash
node --version
```

An editor with JavaScript support is recommended. [VS Code](https://code.visualstudio.com/) is used for the shortcut references in `chapter_03_Indentifier_literals`.

## Notes

- Some files intentionally contain syntax errors or invalid identifier names to demonstrate what JavaScript rejects. They are learning examples, not runnable scripts.
- Chapters build on each other, so working through them in numeric order is recommended.
