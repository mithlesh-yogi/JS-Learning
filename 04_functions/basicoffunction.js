function saymyname(){
    console.log("M");
    console.log("I");
    console.log("T");
    console.log("H");
    console.log("L");
    console.log("E");
    console.log("S");
    console.log("H");
}
// saymyname()

// function addtwonumber(number1,number2){
//    console.log(number1+number2);  // no return 
// }
function addtwonumber(number1,number2){
   return number1+number2
}

let result = addtwonumber(3,4)
// console.log("result : ",result);

function userlogginmsg(username){
    if(!username){
        console.log("please provide a username");
        return
    }
    return `${username} just logged in`
}
// console.log(userlogginmsg("mithlesh"));
// console.log(userlogginmsg());

function calcultefunction( val1,val2,...num1){
    return num1
}
// console.log(calcultefunction(100,200,300,400));


const user = {
    username:"mithlesh",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and prices is ${anyobject.price}`);
}
// console.log(handleobject(user));
handleobject({
    username:"myhish",
    price:200
});

const mynewarray = [200,300,400,500];
function secondvalueofarray(getarray){
    return getarray[1]
}
console.log(secondvalueofarray(mynewarray));





