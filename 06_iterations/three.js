// for each loop
const arr =[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}
const greetings ="hellow world"

for (const greet of greetings) {
    // console.log(`the each char is ${greet}`);
    
}
// ========  Map  ==================

const map = new Map()
map.set('IN' ,"India")
map.set('USA' ,"United State Of India")
map.set('Fr' ,"France")
map.set('IN' ,"India")
// console.log(map);

for (const [key ,value] of map) {
    // console.log(key,':-',value);
    
}

const myobject = {
    'game1':"freefire",
    'game2':"pubg"
}

for (const [key,val] of myobject) {
     console.log(key,':-',value);
}
