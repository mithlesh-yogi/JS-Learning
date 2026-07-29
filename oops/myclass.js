// class user{
//     constructor(username ,email,password){
//         this.username =username
//         this.email = email
//         this.password = password
//     }
//     encriptedpassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new user('chai','chai@gmail.com','123')
// console.log(chai);
// console.log(chai.encriptedpassword());


//behind the scence

function user(username ,email,password){
        this.username =username
        this.email = email
        this.password = password
    }
 user.prototype.encriptedpassword = function(){
    return `${this.password}abc`
 }   
 user.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
 }   
 const tea =new user('tea','tea@gmail.com','3421')
 console.log(tea.encriptedpassword());
 console.log(tea.changeusername());
 
 