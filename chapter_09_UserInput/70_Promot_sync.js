// prompt-sync lets us read user input synchronously in Node.js.
// Install it once before running this file:
//   npm install prompt-sync

const prompt = require("prompt-sync")();

const name = prompt("Enter your name: ");
const num = Number(prompt("Enter a Number: "));

console.log("Hello, " + name + "!");

if (Number.isNaN(num)) {
    console.log("Please enter a valid number");
} else if (num % 2 === 0) {
    console.log(num + " Is Even");
} else {
    console.log(num + " Is Odd");
}
