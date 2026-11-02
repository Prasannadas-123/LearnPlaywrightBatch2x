let a = 10; //GLOBAL variable
//var is funtion scoped and can be redeclared and reassigned
console.log(a);

function printHello() {
    console.log("Hello The Testing Academy");
    let a = 20; //LOCAL variable
    console.log(a);
if (true) {
    let a = 30; 
    console.log(a);
}
console.log("F --> ",a); 
}
printHello();

console.log("G --> ",a); 