const user ={
    username:"mithlesh",
    price:999,

    welcomemsg: function(){
        console.log(`${this.username},welcome to website`); 
        // console.log(this);
        
    }
}
// user.welcomemsg()
// user.username = "sam"
// user.welcomemsg()
// console.log(this);

// function chai(){
//     const username ="mithlesh"
//     console.log(this.username);   // this operator is not work in the function
// }


// const chai = function(){
//     const username ="mithlesh"
//     console.log(this.username);
// }

const chai = () =>{
    const username ="mithlesh"
    console.log(this.username);
}
// chai()
// const addtwonum = (num1 ,num2) =>{
//     return num1+num2
// }

// const addtwonum = (num1 ,num2) => num1+num2 // implicit method
const addtwonum = (num1 ,num2) => (num1+num2) // implicit method

console.log(addtwonum(3,4));

