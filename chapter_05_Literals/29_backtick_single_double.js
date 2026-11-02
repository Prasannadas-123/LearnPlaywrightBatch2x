// 29_backtick_single_double.js
// Difference between single quote ('), double quote (") and backtick (`) strings.

// ---------------------------------------------------------------
// 1. SINGLE QUOTE  '...'
// ---------------------------------------------------------------
// Simple string. You must escape a single quote inside it.

let single = 'Hello, I am Harish';
console.log(single);

let singleWithApostrophe = 'It\'s a nice day'; // escape with \
console.log(singleWithApostrophe);

let singleWithDoubleInside = 'She said "Hi"'; // double quotes are fine inside
console.log(singleWithDoubleInside);

// ---------------------------------------------------------------
// 2. DOUBLE QUOTE  "..."
// ---------------------------------------------------------------
// Behaves exactly like single quotes. Only the escape rules change.

let double = "Hello, I am Harish";
console.log(double);

let doubleWithQuote = "She said \"Hi\""; // escape with \
console.log(doubleWithQuote);

let doubleWithSingleInside = "It's a nice day"; // single quote is fine inside
console.log(doubleWithSingleInside);

// ---------------------------------------------------------------
// 3. BACKTICK  `...`   (Template Literal)
// ---------------------------------------------------------------
// Everything single/double quotes can do, PLUS:
//   a) variable interpolation with ${ }
//   b) multi-line strings without \n
//   c) expressions inside ${ }

let name = "Harish";
let age = 30;

// a) Interpolation
let intro = `My name is ${name} and I am ${age} years old`;
console.log(intro);

// b) Multi-line (no need for \n)
let address = `Flat 101,
MG Road,
Bengaluru - 560001`;
console.log(address);

// c) Expression inside ${ }
let total = `2 + 3 = ${2 + 3}`;
console.log(total);

// Backtick is fine inside a normal string, and quotes are fine inside backticks
let quoteInsideBacktick = `He said "It's fine"`;
console.log(quoteInsideBacktick);

// ---------------------------------------------------------------
// QUICK SUMMARY
// ---------------------------------------------------------------
// Feature                     'single'   "double"   `backtick`
// ---------------------------------------------------------------
// Plain string                   yes        yes        yes
// Escape same quote (\)          yes        yes        yes
// Multi-line without \n          no         no         yes
// ${variable} interpolation      no         no         yes
// ${expression}                  no         no         yes
// Used for JSON / HTML attrs     okay       common     okay
// Called                         string     string     template literal

// Single vs Double: no real difference in behaviour.
//   -> Pick one and stay consistent. Most JS codebases use single quotes.
// Backtick: use whenever you need variables or multiple lines.

// ---------------------------------------------------------------
// RUNNABLE CHECKS
// ---------------------------------------------------------------
console.log(typeof single);  // string
console.log(typeof double);  // string
console.log(typeof intro);   // string

console.log('Same text?', single === double); // true (quotes are not part of the value)

// Length is the same for the same text, no matter which quote you used
console.log(single.length, double.length); // 18 18

// ---------------------------------------------------------------
// PLAYWRIGHT EXAMPLE (where backticks really help)
// ---------------------------------------------------------------
// Locators and URLs are much cleaner with template literals.

const env = "staging";
const baseUrl = `https://${env}.example.com`;
console.log(baseUrl); // https://staging.example.com

const user = "harish";
const password = "Test@123";

// With single/double quotes you must join with +
const oldWay = 'button[data-testid="login-' + user + '"]';
console.log(oldWay);

// With backticks it stays readable
const newWay = `button[data-testid="login-${user}"]`;
console.log(newWay);

// console.log(`Login failed for user: ${user}, password: ${password}`);
// (Only do this in a lab. Never log real passwords in real tests.)
