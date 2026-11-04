// let age = 18;

// if (age > 18){
//    console.log("You are allowed to vote");
// }
// else{
//     console.log("You are not allowed to vote");
// }

// https://app.vwo.com/#/login
let isLoggedIn = true;
let userRole = "editor";

if(isLoggedIn){
    if (userRole === "Admin") {
        console.log("Admin can do all the things");
    }
    else if  (userRole === "Editor") {
        console.log("Welcome Editor -- Editor Accesss Granted");
    }else if  (userRole === "Viewer") {
        console.log("Welcome viewer -- Read Only Accesss");
    }
    else{
       console.log("No idea you may be a guest! role");
    }

}
else{
       console.log("you are not logged In!"); 
    }