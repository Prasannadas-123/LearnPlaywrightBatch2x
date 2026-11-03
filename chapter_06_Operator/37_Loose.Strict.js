console.log(0 == ""); // true
console.log(0 === ""); // false

console.log("" == "0"); // false
console.log("" === "0"); // false

console.log(0 == "0"); // true
console.log(0 === "0"); // false

console.log(false == "false"); // false
console.log(false === "false"); // false

console.log(false == "0"); // true
console.log(false === "0"); // false

console.log(false == undefined); // false
console.log(false === undefined); // false

console.log(false == null); // false
console.log(false === null); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(0 == false); // false
console.log(0 == null); // false
console.log(0 == undefined); // false

console.log(NaN == null); // false
console.log(NaN == undefined); // false
console.log(NaN == NaN); // false   

