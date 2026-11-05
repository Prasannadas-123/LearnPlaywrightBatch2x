const readLine = require("node:readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter a Number: ", (input) => {
    const num = Number(input);

    if (Number.isNaN(num)) {
        console.log("Please enter a valid number");
    } else if (num % 2 === 0) {
        console.log(num + " Is Even");
    } else {
        console.log(num + " Is Odd");
    }

    rl.close();
});
