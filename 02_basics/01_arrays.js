// ======================
// 📌 1. ARRAY CREATION
// ======================

// JS arrays are flexible:
// - dynamic size
// - can store multiple data types

const myArr = [0, 1, 2, 3, 4, 5]; 
// 👉 Shallow copy (reference-based, not deep copy)

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[0]);
// 👉 0



// ======================
// 📌 2. BASIC ARRAY METHODS
// ======================

myArr.push(6);  
// 👉 adds element at END
// [0,1,2,3,4,5,6]

myArr.pop();   
// 👉 removes last element
// [0,1,2,3,4,5]


myArr.unshift(99);  
// 👉 adds element at START
// [99,0,1,2,3,4,5]

myArr.shift();      
// 👉 removes first element
// [0,1,2,3,4,5]


// ======================
// 📌 3. SEARCHING
// ======================

console.log(myArr.includes(9));
// 👉 false (9 not present)

console.log(myArr.indexOf(3));
// 👉 3 (index position)



// ======================
// 📌 4. JOIN (IMPORTANT)
// ======================

const myArr3 = myArr.join();  
// 👉 converts array → string

console.log(myArr3);
// 👉 "0,1,2,3,4,5"

console.log(typeof myArr3);
// 👉 string



// ======================
// 📌 5. SLICE vs SPLICE (VERY IMPORTANT)
// ======================

console.log("A", myArr);
// 👉 A [0,1,2,3,4,5]


// 🔹 SLICE (does NOT modify original array)
// const myArr4 = myArr.slice(1, 3);

// console.log("B", myArr4);
// 👉 B [1,2]

// console.log("A", myArr);
// 👉 A [0,1,2,3,4,5] (unchanged)



// 🔥 SPLICE (MODIFIES original array)

const myArr4 = myArr.splice(1, 3);
// 👉 removes elements from index 1 to 3 (inclusive)

console.log("B", myArr4);
// 👉 B [1,2,3] (removed elements)

console.log("A", myArr);
// 👉 A [0,4,5] (original array changed)
