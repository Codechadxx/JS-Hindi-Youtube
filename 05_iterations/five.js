const coding = ["js","ruby", "java", "python", "cpp"]

// coding.forEach( function (val) { // it is callback function so no name is required
//   console.log(val);
// }) // no function name is required

// coding.forEach((item) => {
//   console.log(item);
// })

// function printMe (item){
//   console.log(item);
// }

// coding.forEach(printMe) => we do not have to execute the function we have to call it

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// })

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "Java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]

myCoding.forEach((item) => {
  console.log(item.languageName);
  console.log(item.languageFileName);
})

