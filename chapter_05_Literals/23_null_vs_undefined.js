// null vs undefined

// ---------------------------------------------------------------
// 1. undefined = "no value was ever assigned"
// ---------------------------------------------------------------
let notAssigned;
console.log("notAssigned:", notAssigned); // undefined

function greet(name) {
    console.log("Hello,", name);
}
greet();          // name is undefined because no argument was passed
greet("Promod");  // name is "Promod"

const user = { name: "Promod" };
console.log("missing property:", user.age); // undefined

// ---------------------------------------------------------------
// 2. null = "the value is intentionally empty"
// ---------------------------------------------------------------
let selectedBrowser = null; // we deliberately have no browser selected yet
console.log("selectedBrowser:", selectedBrowser); // null

selectedBrowser = "chromium";
console.log("selectedBrowser:", selectedBrowser); // chromium

selectedBrowser = null; // clear it again on purpose
console.log("selectedBrowser:", selectedBrowser); // null

// A function can return null to say "nothing found, on purpose"
function findTestId(tests, id) {
    for (const test of tests) {
        if (test.id === id) {
            return test;
        }
    }
    return null; // searched, nothing matched
}

const tests = [{ id: 1, name: "login" }];
console.log("found:", findTestId(tests, 2)); // null

// ---------------------------------------------------------------
// 3. typeof
// ---------------------------------------------------------------
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof null:", typeof null);           // object (historic JS bug)

// ---------------------------------------------------------------
// 4. Equality: == treats them the same, === does not
// ---------------------------------------------------------------
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false
console.log("null == 0:", null == 0);                   // false
console.log("null >= 0:", null >= 0);                   // true (null converts to 0)

// ---------------------------------------------------------------
// 5. Safe checks
// ---------------------------------------------------------------
let value;

// Both catch null and undefined
if (value == null) {
    console.log("value is null or undefined");
}

// Be explicit when the difference matters
if (value === undefined) {
    console.log("value is undefined");
}
if (value === null) {
    console.log("value is null");
}

// Default values only apply to undefined, not null
function withDefault(name = "guest") {
    return name;
}
console.log("default for undefined:", withDefault(undefined)); // guest
console.log("default for null:", withDefault(null));            // null

// Optional chaining stops at both null and undefined
console.log("optional chaining:", user.address?.city); // undefined, no error

// Nullish coalescing (??) only falls back for null and undefined
console.log("nullish:", null ?? "fallback");      // fallback
console.log("nullish:", undefined ?? "fallback"); // fallback
console.log("nullish:", 0 ?? "fallback");         // 0 (unlike ||)

// ---------------------------------------------------------------
// 6. JSON
// ---------------------------------------------------------------
const payload = { a: null, b: undefined };
console.log("JSON:", JSON.stringify(payload)); // {"a":null} - b is dropped

// ---------------------------------------------------------------
// 7. Things that are NOT allowed
// ---------------------------------------------------------------
// undefined = 5; // in strict mode this throws TypeError
// let x = null; x = 5; // fine: null is a value, not a constant

// ---------------------------------------------------------------
// 8. Playwright-style examples
// ---------------------------------------------------------------
// page.evaluate(() => null) returns null, not undefined
// getAttribute() on a missing attribute returns null, not undefined
// expect(locator.textContent()).toBeNull() works for null
// A missing property from evaluate() returns undefined

// Summary:
// undefined -> JS says "not assigned / not found"
// null      -> you say "intentionally empty"
// Use === null or === undefined when the difference matters,
// use == null when you want to catch both.
