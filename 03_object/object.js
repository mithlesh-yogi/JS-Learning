// const tinderuser = new Object()  //singleton

const tinderuser ={}
tinderuser.id = "123djk"
tinderuser.name = "mithlesh"
tinderuser.isloggin = true
// console.log(tinderuser);


const regularuser = {
    email:"mithleshyogi@gmail.com",
    name:{
        userfull:{
            firstname:"mithlesh",
            lastname:"yogi"
        }
    }
}
console.log(regularuser.name.userfull.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

const user =[
    {
        id:1,
        email:"m@gmail.com"
    },
    {
        id:1,
        email:"m@gmail.com"
    },
    {
        id:1,
        email:"m@gmail.com"
    },
    {
        id:1,
        email:"m@gmail.com"
    },

]
user[1].email;
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isloggin'));




