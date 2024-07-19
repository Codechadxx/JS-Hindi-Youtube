function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("T");
  }
  
  sayMyName()
  
  function add(num1,num2) {
    console.log(num1 + num2);
  }
  
  function add(num1,num2) {
  
    // let result = (num1 + num2);
    // return result;
  
    return num1 + num2
  
    // console.log("Rachit"); this will not be executed as nothing is 
    // executed after return syntax
  }
  
  add(3,"4") // answer will be 34 both of the para are assumed to be strings
  add(3,"a") 
  
  const result = add(3,5) // the reuslt would be undefined as function did 
  // not returned the value 
  
  // console.log("Result: ",result);
  
  function loginUserMessage(username= "sam") {
    if (username === undefined) {
      console.log("Please enter a username");
      return
    }
    return `return ${username} just logged in`
  }
  
  // console.log(loginUserMessage("Rachit"));
  console.log(loginUserMessage(" "));
  console.log(loginUserMessage("Hitesh")); // it will bw give undefined 
  
  // if u give arguments in function it will overwrite the any 
  // value given in parameters
  
  function calculateCartPrice(val1,val2,...num1) {
    return num1
  }
  // ...  -> rust operator or spread operator but depends on use case
  console.log(calculateCartPrice(200,300,400));
  
  const user = {
    usernaem:"hitesh",
    price: 199
  }
  
  function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is 
    ${anyobject.price}`);
  }
  // if we change price to prices then ${anyobject.price} will give undefined
  
  // handleobject(user)
  
  handleobject({
    username: "Sam",
    price: 399
  })
  
  
  const myNewAarry = [200,400,100,600]
  
  function returnSecondValue(getAarry) {
    return getArray[1]
  }
  
  // console.log(returnSecondValue(myNewAarry));
  console.log(returnSecondValue([200,400,500,1000]));
  