let mydate = new Date()
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleTimeString());


let mycreatedate = new Date(2026 ,0,24)
console.log(mycreatedate.toDateString());
let anothermycreatedate = new Date(2026 ,0,24,5,3)
console.log(anothermycreatedate.toLocaleString());

let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(mycreatedate.getTime());

console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
console.log(newdate);
console.log(newdate.getDay());
console.log(newdate.getMonth()+1);
console.log(newdate.getFullYear());






