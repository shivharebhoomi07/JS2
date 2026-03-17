/******************** BASIC VARIABLES ********************/

const name = "hitesh";
const repoCount = 50;

// ❌ Old way (not recommended)
console.log(name + repoCount + " Value");

// ✅ Modern way → Template literals (clean & readable)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// this is called interpolation

/******************** STRING OBJECT ********************/

// Creating a string using constructor (rarely used in real projects)
const gameName = new String('hitesh-hc-com');

// Access character using index
console.log(gameName[0]); // h

// Check internal methods (prototype)
console.log(gameName.__proto__);



/******************** STRING METHODS ********************/

// Length of string
console.log(gameName.length); // total characters

// Convert to uppercase (does NOT change original string)
console.log(gameName.toUpperCase());

// Get character at specific index
console.log(gameName.charAt(2)); // t

// Find index of character
console.log(gameName.indexOf('t')); // first occurrence of 't'



/******************** SUBSTRING vs SLICE ********************/

// substring(start, end)
// ❗ negative values are treated as 0
const newString = gameName.substring(0, 4);
console.log(newString); // "hite"

// slice(start, end, add)
// ✅ supports negative values
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

// Explanation:
// Negative index starts from end of string



/******************** TRIM (REMOVE SPACES) ********************/

const newStringOne = "   hitesh    ";

console.log(newStringOne);        // with spaces
console.log(newStringOne.trim()); // removes spaces from start & end



/******************** REPLACE ********************/

const url = "https://hitesh.com/hitesh%20choudhary";

// Replace '%20' with '-'
console.log(url.replace('%20', '-'));



/******************** INCLUDES ********************/

// Check if string contains a word
console.log(url.includes('sundar')); // false



/******************** SPLIT ********************/

// Convert string into array based on separator
console.log(gameName.split('-'));

// Output:
// ['hitesh', 'hc', 'com']

