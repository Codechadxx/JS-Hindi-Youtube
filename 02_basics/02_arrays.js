const marvel_heros = ["Thor", "Ironman", "spiderman"]
const dc_heros = ["Batman", "flash","superman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros = [...marvel_heros,...dc_heros]
// when we drop a glass all of there pieces spread and become individual 
// and then this format combines them 
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) 
// the flat() method is used to create a new array with all the sub-aaray 
// elements concatenated into a recurdively up to a specified depth
console.log(real_another_array);



console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh")); // -> created a new array instance from
// array-like or iterable object
console.log(Array.from({name: "hitesh"})); //intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));

