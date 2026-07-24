function setusername(username){
    this.username = username
}
function creatuser(username,email,password){
    setusername.call(this,username)
    this.email = email
    this.password =password
}
const user1 = new creatuser('mithlesh','mith@gmail,com',345)
console.log(user1);
