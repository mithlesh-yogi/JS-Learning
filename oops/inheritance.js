class user {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`your name is:${this.username}`); 
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email =email
        this.password =password
    }
    addcourse(){
        console.log(`new course is added by ${this.username}`);
    }
}

const tea = new teacher('mith','mith@fg.com','1234')
tea.addcourse()