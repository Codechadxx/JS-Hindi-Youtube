const user = {
    username: "hitesh",
    price: 999,
  
    welcomeMessage : function() {
      console.log(`${this.username} , welcome to website`);
      // console.log(this); // => prints the whole object in terminal
    }
  }
  
  // user.welcomeMessage()
  // user.username = "sam"
  // user.welcomeMessage()
  
  // console.log(this); => the output is {} and because 
  
  function chai() {
    let username = "hitesh"
    // console.log(this.username); // => The output is undefined as you can not use this 
    // inside a function 
  }
  
  // chai()
  
  // Just another way to write function
  // const chai = () => {
  //   let username = "hitesh"
  //   console.log(this.username); // => undefined
  // }
  
  // chai()
  
  // Just another way to write function
  // const addTwo = (num1,num2) => {
  //   return num1 + num2
  // }
  
  // implicit return 
  // const addTwo = (num1,num2) => num1 + num2
  
  // const addTwo = (num1,num2) => ( num1 + num2 )
  
  // const addTwo = (num1,num2) => {username:"hitesh"} => undefined because 
  // you can't return a object like that 
  
  const addTwo = (num1,num2) => ({username:"hitesh"}) 
  
  console.log(addTwo(5,3));
  
  const myArray = [2,5,3,7,8]
  
  // myArray.forEach(function () {})
  // myArray.forEach(() => {})
  
  
  