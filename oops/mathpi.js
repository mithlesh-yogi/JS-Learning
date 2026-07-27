// console.log(Math.PI);
// Math.PI = 7
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);

const user = {
    name:'mithlesh',
    bio:'student'
}

// console.log(Object.getOwnPropertyDescriptor(user,'name'));

Object.defineProperty(user,"name",{
    writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(user,'name'));

user.name ="chaddi"
console.log(user);

for (const [key,value] of Object.entries(user)) {
    console.log(`${key}:${value}`);
    
}