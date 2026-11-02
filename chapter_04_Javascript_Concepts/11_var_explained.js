var a = 10; //GLOBAL variable
//var is funtion scoped and can be redeclared and reassigned
console.log(a);

function printHello() {
    console.log("Hello The Testing Academy");
    var a = 20; //LOCAL variable
    console.log(a);
}
printHello();
if (true) {
    var a = 30; //GLOBAL variable
    console.log(a);
}
//var is function scoped and can be redeclared and reassigned   
