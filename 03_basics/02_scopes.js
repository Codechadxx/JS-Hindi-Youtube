// {} -> called scopes in case of if-else and
// functions but not in the case of objects 

var c = 300
let a = 300

if (true) {
  let a = 10
  const b = 20
  // console.log("Inner: ", a);
  // c = 30 =>  it will print as var does not follow scope shit
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "hitesh"

  function two(){
    const website = "youtube"
    // console.log(username);
  }
  // console.log(website);

  two()
}

one()

if (true) {
  const username = "hitesh"
  if (username ==- "hitesh") {
    const website = "youtube"
    // console.log(username + website);
  }
  // console.log(website); => understand scope
}

// console.log(username);

// ++++++++++++++++++ interesting +++++++++++++++++++++++ 

console.log(addone(5))


function addone(num) {
  return num + 1
}

// addTwo(5) => this cannot be accesed before initialization

const addTwo = function(num) {
  return num + 2
}
