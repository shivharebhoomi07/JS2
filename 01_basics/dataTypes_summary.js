//Primitive-call by value inki copy di jaati h

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
//Non Primitive - call by reference

//Arrays, Objects, Functions


//MEMORY
//Stack(primitive)-COPY and Heap(Non-primitive)-REFERNCE DIRECT VALUE

 /******************** 1. STACK (PRIMITIVE VALUES) ********************/

// Primitive types → stored in STACK
// When copied → actual value is copied (not reference)

let myYoutubeName = "chaiAurCode";
let anotherName = myYoutubeName; // copy of value

anotherName = "codeWithBhoomi";

console.log( myYoutubeName); // chaiAurCode
console.log( anotherName);     // codeWithBhoomi

// ✅ Explanation:
// Changing 'anotherName' does NOT affect 'myYoutubeName'
// because primitives are copied by VALUE (independent)



/******************** 2. HEAP (NON-PRIMITIVE / OBJECTS) ********************/

// Objects → stored in HEAP
// Variables store reference (address) in STACK

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl"
};

let userTwo = userOne; // reference copy (same object)

// Modify userTwo
userTwo.email = "newuser@gmail.com";

console.log("userOne email:", userOne.email); // newuser@gmail.com
console.log("userTwo email:", userTwo.email); // newuser@gmail.com

// ❗ Explanation:
// Both variables point to SAME object in heap
// So change via one → affects the other



/******************** 3. HOW TO CREATE A REAL COPY (IMPORTANT) ********************/

// Shallow copy using spread operator

let userThree = { ...userOne };

userThree.email = "separateuser@gmail.com";

console.log("userOne email:", userOne.email);   // still newuser@gmail.com
console.log("userThree email:", userThree.email); // separateuser@gmail.com

// ✅ Now they are different objects (separate memory)
