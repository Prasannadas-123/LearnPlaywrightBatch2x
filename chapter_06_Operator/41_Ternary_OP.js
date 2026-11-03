let rajkumar_age = 25;
let result = rajkumar_age >= 18 ? "Eligible for voting" : "Not eligible for voting";
console.log(result); // Output: Eligible for voting

let actualStatusCode = 200;
let statusMessage = actualStatusCode === 200 ? "Success" : "Error";
console.log(statusMessage); // Output: Success

let environment = "production";
let apiUrl = environment === "production" ? "https://api.example.com" : "http://localhost:3000";
console.log(apiUrl); // Output: https://api.example.com

let userRole = "admin";
let accessLevel = userRole === "admin" ? "Full Access" : userRole === "editor" ? "Limited Access" : "No Access";
console.log(accessLevel); // Output: Full Access

let isCI = true;
let buildStatus = isCI ? "Build in progress" : "Build not started";
console.log(buildStatus); // Output: Build in progress

let resposeTime = 120;
let performanceStatus = resposeTime < 100 ? "Good" : resposeTime < 200 ? "Average" : "Poor";
console.log(performanceStatus); // Output: Average  

let responseCode = 850;
let sla = 1000;
let slaStatus = responseCode <= sla ? "SLA met" : "SLA breached";
console.log(slaStatus); // Output: SLA met

//condition ? true : false

let condition  = true;
let isSKmale = condition ? true : false;
console.log(isSKmale);

// Nested Ternary:-


//Multiple  condition
let age = 26;
let is_promod_dutta_goa = age > 26 ? "Yes , he will go ": "else he will not go to goa"
console.log(is_promod_dutta_goa);

let age_promad = 45;
let is_pramod_d = age_promad > 18?  (age_promad > 26 ? "Drink" : "No Drink") : "No GOA";
console.log(is_pramod_d);

//---------------
 let statusCode = 404;
 let category =
   statusCode < 300 ? "sucess" : 
    statusCode < 400 ? "Redirect" :
    statusCode < 500 ? "Client Error " : "Server Error";
    console.log(`Status ${statusCode}: ${category}`);

    let temp = 35;
    let feel = (temp >= 40) ? "Very Hot" :
               (temp >= 30) ? "Hot" :
               (temp >= 20) ? "Warm" :
               (temp >= 20) ? "Cool" : "Cold";
               console.log("7, Temperature: ", temp, "| Feel :", feel);