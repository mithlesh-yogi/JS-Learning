

if (true) {    // let & const a is a block scope variable
              // var is a global scope variable 
    let a = 10
    const b =20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const username = "mithlesh"

    function two(){
        const website = "youtube"
        console.log(username);   
    }
    // console.log(website);
    two()
}
one()


if(true){
    const username = "mithlesh"

    if(username==="mithlesh"){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website); 
}
// console.log(username);


// ++++++++++++++++++++ intersting ++++++++++++++++++

addone(3)
function addone(num){
    return num+1
}

addtwo(4)
const addtwo = function(num){
    return num+2
}
