const user = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    getuserinfo: function(){
        console.log(`username: ${this.username}`);
    }
}
// console.log(user.getuserinfo());

function userdetails(username,logincount,islooggedin){
    this.username =username
    this.logincount =logincount
    this.islooggedin=islooggedin
    return this
}

const userone = new userdetails('mithlesh',3,true)
const usertwo = new userdetails('mythish',8,false)
//new creates a empty object and then constructor function called that inject all value of pack in the this context return to the function
console.log(userone);


