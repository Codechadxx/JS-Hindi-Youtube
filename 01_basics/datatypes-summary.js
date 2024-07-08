// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 12222222222222222n

// Referrence (Non primitive)

// Array, Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"Rachit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-primitive)

let myYoutubename = "rachitdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rachitdotcom"

console.log(userOne.email);
console.log(userTwo.email);

