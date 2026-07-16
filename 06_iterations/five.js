const coding =["python","java","cpp","ruby","javasript"]

// coding.forEach( function (val){
//     console.log(val);            //write call back functin in side the for rach loop and call back function doeesnot have the function name
    
// })


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);

// })

const mycoding =[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]

mycoding.forEach( (item)=>{
    console.log(`${item.languagename} :- ${item.languagefilename}`);
    
})