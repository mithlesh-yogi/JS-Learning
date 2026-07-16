const useremail ="m@gmail.com"

if(useremail){
    console.log('got user email'); 
} else{
    console.log("do not get user email");
}

// falsy value 

// "",NaN,null,false,undefined, 0,-0,BigInt 0n,
// truthy val

// "false","0"," ",[],{},function(){}
const array = []

if(array.length===0){
    console.log("array is empty");  
}
const emptyobj = {}

if(Object.keys(emptyobj).length===0){
    console.log("obj is empty");  
}

//Nullish coalsacing operator(??) : null undefined
let val;
val = 5 ?? 10
val = null??4


console.log(val);
