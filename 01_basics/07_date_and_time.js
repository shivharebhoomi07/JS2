// ======================
// 📌 1. CURRENT DATE & TIME
// ======================

let myDate = new Date();

// Raw date object (not very readable)
console.log(myDate);

// Convert to readable formats 👇

// Full string (most common)
console.log(myDate.toString());

// Only date part
console.log(myDate.toDateString());

// ISO format (used in backend / APIs)
console.log(myDate.toISOString());

// Local format (best for users)
console.log(myDate.toLocaleString());

// Type of Date
console.log(typeof myDate); // object


// ======================
// 📌 2. CREATING CUSTOM DATES
// ======================

// 🔹 Format: new Date(year, month, day)
// ⚠️ Month starts from 0 (VERY IMPORTANT)

let myCreatedDate1 = new Date(2026, 1, 15); 
// 1 = February (0 = Jan)

console.log(myCreatedDate1.toDateString());


// 🔹 Using string (YYYY-MM-DD) → ISO format
let myCreatedDate2 = new Date("2023-01-14");
// Year-Month-Day (safe & recommended)

console.log(myCreatedDate2.toDateString());


// 🔹 Using string (MM-DD-YYYY)
let myCreatedDate3 = new Date("12-01-2026");
// December 1, 2026

console.log(myCreatedDate3.toDateString());


// ======================
// 📌 3. TIMESTAMPS (IMPORTANT)
// ======================

// Current timestamp (milliseconds since Jan 1, 1970)
let myTimeStamp = Date.now();

console.log(myTimeStamp);

// Convert any date to timestamp
console.log(myCreatedDate1.getTime());

// Convert current date to timestamp
console.log(myDate.getTime());


// ======================
// 📌 4. GETTING INDIVIDUAL VALUES
// ======================

let newDate = new Date();

console.log(newDate);

// 🔹 Day of week (0 = Sunday, 6 = Saturday)
console.log(newDate.getDay());

// 🔹 Month (0 = January, so we add +1)
console.log(newDate.getMonth() + 1);


// ======================
// 📌 5. EXTRA USEFUL METHODS (IMPORTANT FOR INTERVIEWS)
// ======================

// Day of month (1–31)
console.log(newDate.getDate());

// Full year
console.log(newDate.getFullYear());

// Hours, Minutes, Seconds
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());


// ======================
// 📌 6. CUSTOM FORMAT (ADVANCED)
// ======================

// Customize output using options
console.log(
  newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })
);
