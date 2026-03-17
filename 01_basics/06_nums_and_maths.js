/******************** NUMBERS BASICS ********************/

const score = 400;
console.log(score); // simple number

// Creating number using constructor (rarely used)
const balance = new Number(100);
console.log(balance);

// Convert number to string
console.log(balance.toString());        // "100"
console.log(balance.toString().length); // length = 3

// Fix decimal places
console.log(balance.toFixed(1)); // "100.0"


/******************** DECIMAL PRECISION ********************/

const otherNumber = 123.8966;

// toPrecision → total digits (rounds accordingly)
console.log(otherNumber.toPrecision(4)); 
// Output: "123.9"


/******************** LARGE NUMBERS FORMATTING ********************/

const hundreds = 1000000;

// Convert number to readable format (Indian system)
console.log(hundreds.toLocaleString('en-IN')); 
// Output: "10,00,000"


/******************** MATH OBJECT ********************/

// Math is a built-in object in JS

console.log(Math); // shows all math functions

console.log(Math.abs(-4));     // 4 → absolute value (removes negative)
console.log(Math.round(4.6));  // 5 → rounds to nearest integer
console.log(Math.ceil(4.2));   // 5 → always rounds UP
console.log(Math.floor(4.9));  // 4 → always rounds DOWN

console.log(Math.min(4, 3, 6, 8)); // 3 → smallest
console.log(Math.max(4, 3, 6, 8)); // 8 → largest


/******************** RANDOM NUMBERS ********************/

// Math.random() → gives number between 0 and 1
console.log(Math.random()); 

// Shift range → 1 to 10 (decimal)
console.log((Math.random() * 10) + 1);

// Convert to integer (1 to 10)
console.log(Math.floor(Math.random() * 10) + 1);


/******************** RANDOM IN CUSTOM RANGE ********************/

const min = 10;
const max = 20;

// Formula to get random number between min & max (inclusive)
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);


/*
🧠 HOW THIS FORMULA WORKS:

Math.random() → 0 to 1

* (max - min + 1) → expands range
→ here: (20 - 10 + 1) = 11 → range becomes 0 to 10

Math.floor() → removes decimal → 0 to 10 (integers)

+ min → shifts range → 10 to 20

✅ Final range: [10, 20]
*/