//if
// const temprature = 41
// if(temprature<=50){
//      console.log("temp is less than 50");  
// } else{
//     console.log("temp is greater than 50"); 
// }

// <,>,<=,>=,!=,==,===

// const balance = 1000
// if(balance<500){
//     console.log("less thsn 500");
// } else if(balance<750){
//     console.log("less than 750"); 
// } else if(balance<900){
//     console.log("less than 900")
// } else{
//     console.log("less than 1200");
// }


const userloggedin = true
const userdebitcard = true
const userloggedbygoogle = false
const userloggedbyemail = true

if(userloggedin && userdebitcard){
    console.log("allow to buy course"); 
}
if(userloggedbyemail || userloggedbygoogle){
    console.log("allow to excess"); 
}