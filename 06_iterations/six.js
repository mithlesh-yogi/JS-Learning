// const coding =["python","java","cpp","ruby","javasript"]

// const values = coding.forEach( (item)=>{
//     return item
// })                 //in foreach loop Callbackfn doesnot return

// console.log(values);

const mynum = [1,2,3,4,5,6,7,8,9,10]

//const newnum = mynum.filter( (num)=> num>4)
// const newnum = mynum.filter( (num)=> {
//    return num>4
// })
// const newnum =[]
// mynum.forEach( (num) => {
//     if (num>4) {
//         newnum.push(num)
//     }
// })
// console.log(newnum);



const books =[
    {
        tittle:"book-one",genre:"fiction",publish:1987,edition:2007
    },
    {
        tittle:"book-two",genre:"non-fiction",publish:1987,edition:2007
    },
    {
        tittle:"book-three",genre:"history",publish:1987,edition:2007
    },
    {
        tittle:"book-four",genre:"science",publish:1987,edition:2007
    },
    {
        tittle:"book-five",genre:"maths",publish:1987,edition:2007
    },
    {
        tittle:"book-six",genre:"fiction",publish:1987,edition:2007
    },
    {
        tittle:"book-seven",genre:"non-fiction",publish:2008,edition:2007
    },
]

let userbooks = books.filter( (bk) => bk.genre === "non-fiction")
userbooks = books.filter((bk)=> bk.genre === "non-fiction" && bk.publish >=2000)
console.log(userbooks);
