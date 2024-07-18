// objects literals

const mySym = Symbol("Key1")


const JsUser = {
  name : "Hitesh",
  age: 18,
  mySym: "myKey1", // so here it is not a symbol but declared 
// as a string to use it a symbol this is the syntax next line
  [mySym]: "myKey1", 
  location: "Jaipur",
  "full name": "Hitesh Choudhary",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays:["Monday", "Saturday"]
}

console.log(JsUser.email); 
// used to acces the following object but not the good method
console.log(JsUser[email]); 
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
console.log(JsUser[mySym]); // actual syntax to use a symbol forma object

JsUser.email = "hitesh@chad.com" // this is how you can overwrite the values
// Object.freeze(JsUser) // no one can change the values of this object
JsUser.email = "hitesh@chadgbt.com" // there will be no change as we haved freezed the object(JsUser)

JsUser.greeting = function() {
  console.log(`Hello JS user`);
}

JsUser.greetingTwo = function() {
  console.log(`Hello JS user, ${this.name}`);
} 

console.log(JsUser.greeting); // -> program will give -> [Fucnction (anonymous)] will be explained later
console.log(JsUser.greeting());// -> undefined
console.log(JsUser.greetingTwo());
// the results of these line 40,41 will be explained later

