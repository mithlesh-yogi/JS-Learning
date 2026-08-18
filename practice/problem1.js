const arr = [3,5,6,7,2,15];
let maxvalue =arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i]>maxvalue) {
        maxvalue= arr[i];
    }
}
let maximum_value = maxvalue;
console.log(maximum_value);

const heros =['spiderman','superman','ironman']

heros.forEach((value)=>{
    console.log(value);
    
})
