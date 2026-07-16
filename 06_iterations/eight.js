const newnum =[1,2,3]
// const total = newnum.reduce(function(acc,currval){
//     console.log(`acc : ${acc} currval : ${currval}`);
//     return acc+currval
// },0)


const total = newnum.reduce( (acc,currval)=> acc+currval,0)

console.log(total);

const shoppingcart = [
    {
        itemname:"js course",
        price:1999
    },
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemname:"data science course",
        price:12999
    },
]

const bill = shoppingcart.reduce((acc,item) => acc+item.price,0)
console.log(bill);
