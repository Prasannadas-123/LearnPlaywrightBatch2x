// 38 - Confusing Comparison: == (loose) vs === (strict)
//
// ==  -> loose equality  : compares value AFTER type coercion (type conversion)
// === -> strict equality : compares value AND type, no coercion
//
// Rule of thumb: prefer === and !==
// Only use == when you intentionally want to check "null or undefined" (x == null).

// ---------------------------------------------------------
// 1) Number vs String
// ---------------------------------------------------------
console.log(10 == "10");   // true  (string "10" is converted to number 10)
console.log(10 === "10");  // false (number vs string -> different types)

console.log(0 == "0");     // true
console.log(0 === "0");    // false

console.log(1 == "1");     // true
console.log(1 === "1");    // false

// ---------------------------------------------------------
// 2) Boolean coercion (true -> 1, false -> 0)
// ---------------------------------------------------------
console.log(true == 1);    // true
console.log(true === 1);   // false

console.log(true == "1");  // true  ("1" -> 1, true -> 1)
console.log(true == "true"); // false (Number("true") is NaN)

console.log(false == 0);   // true
console.log(false == "0"); // true
console.log(false == "");  // true  ("" -> 0)
console.log(false == "false"); // false (Number("false") is NaN)
console.log(false === 0);  // false

// ---------------------------------------------------------
// 3) Empty string / whitespace
// ---------------------------------------------------------
console.log(0 == "");      // true  ("" -> 0)
console.log(0 === "");     // false

console.log(0 == " ");     // true  (whitespace " " -> 0)
console.log("" == " ");    // false (string vs string -> no number conversion)

// ---------------------------------------------------------
// 4) null and undefined
// ---------------------------------------------------------
console.log(null == undefined);  // true  (special rule in JS)
console.log(null === undefined); // false (different types)

console.log(null == 0);    // false (null only loosely equals undefined)
console.log(null == false); // false
console.log(undefined == 0); // false
console.log(undefined == false); // false

// Classic confusing trio: == says false, >= says true
console.log(null == 0);    // false
console.log(null > 0);     // false
console.log(null >= 0);    // true  (relational ops convert null to 0)

// ---------------------------------------------------------
// 5) Arrays (arrays are converted to strings/numbers)
// ---------------------------------------------------------
console.log([] == false);  // true  ([] -> "" -> 0, false -> 0)
console.log([] == 0);      // true
console.log([] == "");     // true  ([] -> "")
console.log([] == null);   // false
console.log([] == undefined); // false

console.log([1] == 1);     // true  ([1] -> "1" -> 1)
console.log([1] == "1");   // true
console.log([1, 2] == "1,2"); // true ([1,2] -> "1,2")
console.log([null] == ""); // true  ([null] -> "")

console.log([] == ![]);    // true  (![] is false, [] == false -> true)
//console.log([] === ![]);   // false
//console.log([] === []);    // false (two different array objects)

// ---------------------------------------------------------
// 6) Objects (compared by reference, not by content)
// ---------------------------------------------------------
const obj1 = { name: "Amit" };
const obj2 = { name: "Amit" };
const obj3 = obj1;

console.log(obj1 == obj2);   // false (different references)
console.log(obj1 === obj2);  // false
console.log(obj1 == obj3);   // true  (same reference)
console.log(obj1 === obj3);  // true

console.log({} == {});       // false
//console.log({} === {});      // false

// Boxed primitives are objects
console.log(new Number(5) == 5);  // true  (object -> primitive 5)
console.log(new Number(5) === 5); // false (object vs number)
console.log(new Number(5) == new Number(5)); // false (two objects)

// ---------------------------------------------------------
// 7) NaN - never equal to anything, not even itself
// ---------------------------------------------------------
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false

console.log(Object.is(NaN, NaN)); // true  (Object.is treats NaN as equal)
console.log(Number.isNaN(NaN));   // true

// 0 and -0 are === equal, but Object.is says they are different
console.log(0 === -0);          // true
console.log(Object.is(0, -0));  // false

// ---------------------------------------------------------
// 8) Relational operators (<, >, <=, >=) also coerce
// ---------------------------------------------------------
console.log("2" > "10");   // true  (string vs string -> alphabetical)
console.log(2 > "10");     // false (string -> number)
console.log("10" < "9");   // true  (string vs string)
console.log(10 < "9");     // false (string -> number)

// ---------------------------------------------------------
// 9) Strict versions (!==) are just the opposite of ===
// ---------------------------------------------------------
console.log(10 != "10");   // false (loose: values equal)
console.log(10 !== "10");  // true  (strict: types differ)

console.log(null != undefined);  // false
console.log(null !== undefined); // true

// ---------------------------------------------------------
// 10) Safest way to check null or undefined
// ---------------------------------------------------------
const value = null;

console.log(value == null);          // true for both null and undefined
console.log(value === null);         // true only for null
console.log(value === undefined);    // false

// ---------------------------------------------------------
// Summary
// ---------------------------------------------------------
// ==  -> may convert types, can give surprising results
// === -> no conversion, compares type + value (preferred)
// Object.is() -> best for NaN and -0 edge cases
