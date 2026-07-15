
const myarr =[1,2,3,4,5]

const myhero = ["spiderman","ironman","baalveer"]
console.log(myarr[0]);


//array method

// myarr.push(6)
// myarr.push(7)
// myarr.pop()

myarr.unshift(9)
myarr.unshift(8)
myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(2));
// console.log(myarr.indexOf(3));



const newarr = myarr.join()
// console.log(newarr);
// console.log(typeof newarr);

// slice and splice
console.log("A ", myarr)
const myn1 = myarr.slice(1,3)
console.log(myn1);

console.log("B ", myarr)
const myn2 = myarr.splice(1,3)
console.log(myn2);
console.log("C ", myarr)



