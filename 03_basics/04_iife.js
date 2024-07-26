// Immediately Invoked Function Expressions (IIFE)

// Global scope se pollution se problem hoti hai kayi (Global scope ke jo bi 
// variables and declarations hein) baar to usko haatne ke liye humne iife ka 
// use kiya hai
(function chai() {
    console.log(`DB CONNECTED`);
  }) (); // => you have to place semicolon at the end when you declare these types of functions 
  // (generally code editor does that job but in this case we have to place ';') otherwise it 
  // will give a error
  
  // ()() => syntax of IIFE 
  
  (function aurCode() {
    // Named iife
    console.log(`DB CONNECTED TWO`);
  }) ();
  
  // Other way of writing it 
  
  ( (name) => {
    console.log(`DB CONNECTED TWO , ${name}`);
  }) ('Rachit');
  
  
  