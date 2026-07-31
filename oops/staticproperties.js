class user{
    constructor(username){
        this.username =username
    }
    logme(){
        console.log(`username:${this.username}`);
    }
    static createId(){
        return '123'
    }
}
const user1 = new user('mithlesh')
// console.log(user1.createId());

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email =email
    }
}

const user2 = new teacher("suresh",'suresh@gmail.com')
// user2.logme()
// console.log(user2.createId());

