
//Given promt to OpenCode AI
//create a another lab ex 26_Literals_Number_all.js where you will mention about all the number type supported in the js

// Number literals in JavaScript
// JavaScript has only one number type: "number" (64-bit floating point / IEEE 754).
// BigInt ("bigint") is a separate type used for very large integers.

// 1. Integer literal (base 10)
let count = 42;
console.log(count, typeof count); // 42 number

// 2. Negative integer literal
let negativeCount = -42;
console.log(negativeCount, typeof negativeCount); // -42 number

// 3. Decimal / floating-point literal
let pi = 3.14;
console.log(pi, typeof pi); // 3.14 number

// 4. Leading dot and trailing dot are valid
let leadingDot = .5;
let trailingDot = 5.;
console.log(leadingDot, trailingDot); // 0.5 5

// 5. Exponential (scientific) notation
let million = 1e6;
let tiny = 1.5e-3;
console.log(million, tiny); // 1000000 0.0015

// 6. Hexadecimal literal (base 16, prefix 0x)
let hex = 0xFF;
console.log(hex, typeof hex); // 255 number

// 7. Binary literal (base 2, prefix 0b)
let binary = 0b1010;
console.log(binary, typeof binary); // 10 number

// 8. Octal literal (base 8, prefix 0o)
let octal = 0o12;
console.log(octal, typeof octal); // 10 number

// 9. Numeric separators (underscore) for readability
let bigNumber = 1_000_000;
console.log(bigNumber); // 1000000

// 10. BigInt literal (suffix n) - for integers beyond Number.MAX_SAFE_INTEGER
let bigIntValue = 123456789012345678901234567890n;
console.log(bigIntValue, typeof bigIntValue); // 123456789012345678901234567890n bigint

// 11. Infinity and -Infinity (result of overflow / division by zero)
console.log(Infinity, -Infinity, typeof Infinity); // Infinity -Infinity number
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

// 12. NaN (Not a Number) - still of type "number"
console.log(NaN, typeof NaN); // NaN number
console.log(0 / 0); // NaN
console.log("abc" / 2); // NaN

// 13. Number limits and special values
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324 (smallest positive number)
console.log(Number.EPSILON); // 2.220446049250313e-16

// 14. Floating point precision caution
console.log(0.1 + 0.2); // 0.30000000000000004 (not exactly 0.3)
console.log(0.1 + 0.2 === 0.3); // false

// 15. Useful number conversions
console.log(Number("42")); // 42
console.log(parseInt("42px", 10)); // 42
console.log(parseFloat("3.14abc")); // 3.14
console.log((255).toString(16)); // ff
console.log(Number.isInteger(42)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isNaN(NaN)); // true
