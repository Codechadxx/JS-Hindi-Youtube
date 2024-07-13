const name = "Rachit"
const repoCount = 50

// console.log(`Hello my name is ${name} and my repCount is
// ${repoCount}`);

const gameName = new String('Rachit')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); 
// console.log(gameName.indexOf('c'));

const newString = gameName.substring(0 , 4);
console.log(newString);

const anotherString = gameName.slice(-3,4)
console.log(anotherString);

const newStringOne = "   Rachit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rachit.com/rachit%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('Hitesh'));

console.log(url.includes('sundar'));

// --------------------------------------------------

const str1 = 'Hello broo';

const index = 'broo';
