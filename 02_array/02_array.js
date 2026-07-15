const marvel_heros = ["thor","spiderman","ironman"]
const dc_heros = ["shaktiman","flash","naagraj"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


const newheros = marvel_heros.concat(dc_heros)
console.log(newheros);

// spread operator

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array =[1,2,[3,4],5,6,[7,8,[9,10]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("mithlesh"));
console.log(Array.from("mithlesh"));
console.log(Array.from({name : "mithlesh"}));//intersing case


const score1 = 100
const score2 = 200
const score3 =300
console.log(Array.of(score1,score2,score3))





