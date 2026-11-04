let year = 2024;

//** Divisible by 4 and not Divisible by 100 - leap year 
// OR Divisible by 400 -- leap year 
// Else -- Not a leap year*/
if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log(year + " Is a leap year");
} else {
    console.log(year + " Not a leap year");
}