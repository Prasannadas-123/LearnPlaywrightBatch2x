//let is block scoped, so it is not hoisted to the top of the block.

let x = "global";
if (true) {
    let x = "block"; // SyntaxError: Identifier 'x' has already been declared
    console.log(x); // block
}
console.log(x); // global