// ======================
// 📌 1. BASIC ARRAYS
// ======================

const marvel = ["thor", "IronMan", "SpiderMan"];
const dc = ["superman", "flash", "batman"];


// ======================
// 📌 2. PUSH (adds as a single element)
// ======================

// marvel.push(dc);
// console.log(marvel);

// 👉 Output:
// [
//   "thor",
//   "IronMan",
//   "SpiderMan",
//   ["superman", "flash", "batman"]
// ]

// ❗ Important:
// push() adds the whole array as ONE element (nested array)


// ======================
// 📌 3. CONCAT (returns new array)
// ======================

// const allheroes = marvel.concat(dc);
// console.log(allheroes);

// 👉 Output:
// ["thor", "IronMan", "SpiderMan", "superman", "flash", "batman"]

// ❗ Important:
// - concat() does NOT modify original arrays
// - it RETURNS a new array


// ======================
// 📌 4. SPREAD OPERATOR (BEST METHOD)
// ======================

const allheroes = [...marvel, ...dc];
console.log(allheroes);

// 👉 Output:
// ["thor", "IronMan", "SpiderMan", "superman", "flash", "batman"]

// ✅ Most modern & preferred way



// ======================
// 📌 5. FLAT (remove nested arrays)
// ======================

const anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real = anotherarray.flat(Infinity);
console.log(real);

// 👉 Output:
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// ❗ Important:
// Infinity = flatten all levels



// ======================
// 📌 6. ARRAY CHECKING
// ======================

console.log(Array.isArray("Hitesh"));
// 👉 false (string is NOT array)

console.log(Array.isArray(real));
// 👉 true (this is an array)



// ======================
// 📌 7. ARRAY FROM
// ======================

console.log(Array.from("Bhoomi"));

// 👉 Output:
// ["B", "h", "o", "o", "m", "i"]

// ❗ Converts iterable (string) → array



// ======================
// 📌 8. ARRAY OF
// ======================

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

// 👉 Output:
// [100, 200, 300]

// ❗ Creates array from individual values
