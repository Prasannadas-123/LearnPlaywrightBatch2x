var name = "Vikash";

var firstName = "VikuVikash";
var lastName = "Arjun"; //CamelCase

var first_Name = "Amit"; // Snake Case

// snake_case
var user_name = "Suresh";

// camelCase
var userName = "Mahesh";

// PascalCase
var UserName = "Ramesh";

// SCREAMING_SNAKE_CASE
var MAX_AGE = 25;

// CONSTANT_CASE
var PI = 3.14;

// kebab-case
// var user-name = "Anil"; // Error: hyphen is not allowed

// Mixed_Case
var Mixed_Case = "Sneha";

// lower case
var username = "Kiran";

// UPPER CASE
var COUNTRY = "India";

// Train-Case (not valid as identifier, used in CSS class names)
// <div class="user-name-card"></div>

// dot.case (property access, not a variable name)
var person = { firstName: "Deepak", lastName: "Kumar" };
console.log(person.firstName, person.lastName);

// bracket[] case (property with invalid identifier characters)
var data = { "user-id": 101, "user name": "Anil" };
console.log(data["user-id"], data["user name"]);

// camelCase with numbers
var item1 = "Pen";
var item2Price = 20;
var total2 = 100;

// snake_case with numbers
var item_count = 5;
var user_age_2 = 30;

// PascalCase for class names
function UserProfile() {
  this.name = "Rohit";
}
console.log(new UserProfile().name);

// SCREAMING_SNAKE_CASE for constants
var MAX_RETRIES = 3;
var API_BASE_URL = "https://example.com";
var TIME_OUT_MS = 5000;
console.log(MAX_RETRIES, API_BASE_URL, TIME_OUT_MS);

// snake_case in function names
function get_user_name() {
  return "Suresh";
}
console.log(get_user_name());

// camelCase preferred for variables and functions
var firstName2 = "VikuVikash";
function getUserName() {
  return "VikuVikash";
}
console.log(firstName2, getUserName());

// PascalCase preferred for constructors
function Student() {
  this.rollNo = 12;
}
console.log(new Student().rollNo);

// CONSTANT_CASE preferred for true constants
var MAX = 100;
console.log(MAX);


