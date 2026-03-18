//js arrays igves flexibility in size and can be of different datatype
const myArr=[0,1,2,3,4,5]; //create shallow copies (points to reference) not deep copies
const myArr2=new Array(1,2,3,4);
// console.log(myArr[0]);

//Array Methods
myArr.push(6);
myArr.pop()

myArr.unshift(99); //ads to the start of the arrays
myArr.shift(); //pops from start
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const myArr3=myArr.join(); //it converts the type of n arr from onject to string 
console.log(typeof myArr3);

//slice, splice

console.log("A", myArr);
// const myArr4=myArr.slice(1,3); //it doesnt chage th original array just return the part asked for
// console.log("B", myArr4);

const myArr4=myArr.splice(1,3); //does changes in the original array inclues the last index removes the start to end index elemyts
console.log("B", myArr4);
console.log("A", myArr);
 
