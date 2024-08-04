const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: "swift by apple"  
}

// forin loop helps in iterating objects as forof does not do that

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('Fr', "For real")
// map.set('USSAR', "Russia")

// for (const key in map) {
//   console.log(key);
// }
// line 20- 28 will not execute as forin loop can not iterate it

