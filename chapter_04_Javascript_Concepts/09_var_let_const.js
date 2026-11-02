var x = 10;
let l = 20;
const c = 3.14;

var browser = "chrome";
var browser = "firefox"; //redeclartion allowed 
    browser = "edge";    //reassignment allowed

console.log(browser);

//for , function
var testCase = ["login", "Logout", "signup"];
for (var i = 0; i < testCase.length; i++) {
    console.log("Running test: ", testCase[i]);
    
    console.log("Loop counter leaked outside:", i);
}

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {

    console.log("Hi from function");
}
say()
say()