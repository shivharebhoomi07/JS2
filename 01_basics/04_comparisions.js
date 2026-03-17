console.log("2">1);  //automatically conversts string in number and then returns

console.log(null>0); //false
console.log(null==0); //false (null is only equla to undefined)
console.log(null>=0); //true
//the null is converted to a number and treated as 0...
console.log(null == undefined);
console.log(typeof null == typeof undefined);

//== loose equalty checks value only
//=== strict equality ..checks both value and type

console.log(undefined>0); //false
console.log(undefined==0); //false 
console.log(undefined>=0); //false  

//undefined will surely refer false with 0