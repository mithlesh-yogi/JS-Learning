let mystring = "mithlesh    "
// console.log(mystring.truelength);


let myhero =['spider','superman']

let heropower ={
    spider: "sling",
    superman: "fly",

    getspiderpower: function(){
        console.log(`spidy power is ${this.spider}`);
        
    }
}
Object.prototype.mithlesh = function(){
    console.log(`my name is mithlesh `);
}
Array.prototype.saymithlesh = function(){
    console.log(`hello mithlesh`);
}
// heropower.mithlesh()
// myhero.mithlesh()
// mystring.mithlesh()

// myhero.saymithlesh()
// heropower.saymithlesh()



//inheritance in js
const user ={
    name: "mithlesh",
    email: "mithlesh@gmail.com",
}
const teacher ={
    makevideo: true,
}
const teachingSupport ={
    isavailable: false,
}   
const  tasupport ={
    makeassignment: "js assignment",
    fulltime: true,
    __proto__: teachingSupport
}
teacher.__proto__ = user

// modern synatx
Object.setPrototypeOf(teachingSupport,user)
// console.log(user);

let newstring = "hii          "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`true length is :${this.trim().length}`);
}
newstring.trueLength()
"mith".trueLength()
