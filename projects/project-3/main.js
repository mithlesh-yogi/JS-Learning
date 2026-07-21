const time =document.getElementById('clock')

let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(() => {
    date = new Date()
    time.innerHTML = date.toLocaleTimeString()
}, 1000)
