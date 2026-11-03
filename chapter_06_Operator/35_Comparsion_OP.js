// comparison operators

// ==, ===, !=, !==, >, <, >=, <=

// ==, != - only check value
// ===, !== - check value and type

// == assignment operator
// == lossly check value and type
// === strict check value and type 

console.log(10 == 10); // true
console.log(10 == '10'); // true
console.log(10 === '10'); // false

console.log(10 != 10); // false
console.log(10 != '10'); // false
console.log(10 !== '10'); // true

console.log(3 > 4); // true
console.log(5 < 10); // true
console.log(5 >= 5); // true // 5>5 or 5==5 or gate 
console.log(5 <= 5); // true