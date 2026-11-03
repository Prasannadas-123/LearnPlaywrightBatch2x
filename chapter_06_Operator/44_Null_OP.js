console.log(null >= 0); // true
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null <= 0); // true
console.log(null < 0); // false

console.log(undefined >= 0); // false
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined <= 0); // false
console.log(undefined < 0); // false    

// Nullish
let amuul = null;
let milk_required = amuul ?? "Nadidni Milk";
console.log(milk_required);

let amuul1 = "Nestle";
let milk_required1 = amuul ?? "Nadidni Milk";
console.log(milk_required1);

