function multiplyby5(num){
    return num*5 
}

multiplyby5.power =2
console.log(multiplyby5(2));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createuser(username,score){
    this.username = username
    this.score =score
}
createuser.prototype.Increment =function(){
    this.score++
}
createuser.prototype.printMe =function(){
    console.log(`score is : ${this.score}`);
}
const chai =  new createuser("chai",25)
const tea = new createuser("tea",250)


chai.Increment()
chai.printMe()


