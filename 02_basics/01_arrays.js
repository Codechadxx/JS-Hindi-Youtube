// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Rachit","Hitesh sir"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) -> adds the value in array 
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()  join -> combines the array and makes it a string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

console.log("B", myArr);

const myn1 = myArr.slice(1,3) // -> slice takes out a section of array and ex: slice(1,3) 
// only 1 and 2 element are inluded 3 is excluded

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3) // -> splice takes out a section of array and ex: slice(1,3) 
// only 1 and 2 element are inluded 3 is also included and prints out other elements
console.log("C",myArr);
console.log(myn2);