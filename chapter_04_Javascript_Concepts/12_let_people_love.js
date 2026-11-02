let a = 10;

let retryCount = 0; //GLOBAL variable
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

//let retryCount = 5; //SyntaxError: Identifier 'retryCount' has already been declared

//let retryCount = 5;//ERROR: Cannot redeclare block-scoped variable 'retryCount'

let testStatus = "Pending"; //GLOBAL variable
if(testStatus === "Pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);
}
    console.log(executionTime); //ERROR: executionTime is not defined
    
    //{} = Block scope
    //if, for, while, do-while, switch, try-catch, function, class are block scoped
    //if(){}
    //function(){}

    //let = loyal
    //var = varibale / triator 


