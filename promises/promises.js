const promiseone = new Promise(function(resolve,reject) {
    //do async task
    //db call ,cyrptography,network
    setTimeout(() => {
        console.log("async task is complete");
        resolve();
    }, 1000);
});
promiseone.then(function() {
    console.log("promise consumed");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2 is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("task 2 consumed");
    
});

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({username:"mithlesh",email:"mithleshyogi@gmail.com"})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
    
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"mithlesh",age:18})
        }else{
            reject('Error:something went wrong')
        }
        
    },1000)
})
promisefour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error); 
}).finally(()=>{
    console.log('promise is either resolve or rejected');
    
})
const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error =true
       if(!error){
        resolve({language:"javascript",price:500})
       }else{
        reject('Error:Something went wrong')
       }
    },1000)
})

async   function promisefiveconsumed () {
    try {
        const respone =await promisefive
        console.log(respone);
    } catch (error) {
        console.log(error);
        
    }
    
}
promisefiveconsumed ()


// async function getalluser () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E",error);
        
//     }
// }
// getalluser() 

fetch('https://jsonplaceholder.typicode.com/users').then((respone)=>{
    return respone.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})