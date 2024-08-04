// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // here by object they mean upon which u want to put loop
  // console.log(num);
}

const greetings = "Hello World!!"
for (const greet of greetings) {
  if (greet === " ") {
    continue
  }
  // console.log(`Each chai is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('Fr', "For real")
map.set('USSAR', "Russia")


console.log(map);

for (const Key of map) {
  // console.log(Key);
}
for (const [Key , value] of map) {
  console.log(Key, ':-', value);
}

const myObject = {
  'game1': 'NFS',
  'game2': 'Spiderman'
}

// for (const [Key, value] of myObject) {
//   console.log('key', ':-', value);
// } => it gives a error that is Objects are not iterable 

