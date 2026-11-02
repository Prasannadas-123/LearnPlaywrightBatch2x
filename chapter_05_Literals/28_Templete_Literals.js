//Template literals are a way to create strings in JavaScript that allow for easier string interpolation and multi-line strings. They are enclosed by backticks (`) instead of single or double quotes.
let firstnmae = "Promod";

let fullname = `${firstnmae} Kumar`; // Using template literals to concatenate strings
console.log(fullname); // Output: Promod Kumar

const env = "production";
const url = `https://api.example.com/${env}/endpoint`; // Using template literals to create a URL with a variable
console.log(url); // Output: https://api.example.com/production/endpoint

//playwright
const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com');
  const title = await page.title();
  console.log(`Page title is: ${title}`); // Using template literals to log the page title

  await browser.close();
})();   

