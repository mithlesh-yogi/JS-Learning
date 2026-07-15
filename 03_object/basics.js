//singlton

// object.create
//object literal
const mysym = Symbol("key1")
const jsname = {
    name:"mithlesh",
    age:18,
    "full name":"mithlesh yogi",
    email:"mihtlesh@google.com",
    [mysym]:"mykey1",
    isloggind :true,
    lastdaylogin :["monday","sunday"]
}

// console.log(jsname.email);
// console.log(jsname["email"]);
// console.log(jsname["full name"]);
// console.log(jsname.mysym);

// console.log(jsname[mysym]);
// console.log(jsname);

jsname.email = "mithlesh@chatgpt"
// Object.freeze(jsname)
jsname.email ="mithlesh"
// console.log(jsname["email"]);

jsname.greet = function(){
    console.log("hellow js user ");  
}
jsname.greetingttwo = function(){
    console.log(`hellow js user ${this.email}`);  
}
console.log(jsname.greet());
console.log(jsname.greetingttwo());




