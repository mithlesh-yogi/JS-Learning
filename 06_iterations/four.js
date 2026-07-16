const myobject = {
    js:"javascript",
    cpp:"c++",
    swift:"swift for apple"
}

for (const key in myobject) {
    // console.log(`${key} shortcut is for ${myobject[key]}`);
}

const myarray = ["py","js","cpp","java"]

for (const key in myarray) {    //map is not itearable in "in loops"
   console.log(myarray[key]);
}