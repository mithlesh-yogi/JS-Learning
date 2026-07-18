const randomcolor = function(){
    const hex = '0123456789abcdef'
    let color ='#'
    for (let i = 0; i < 6; i++) {
       color = color+hex[Math.floor(Math.random()*16)] 
    }
    return color;
}
let intervalid;
const changingbgcolor =function(){
   const looping = function(){
       document.body.style.backgroundColor =randomcolor()
   }
   if (!intervalid) {
       intervalid = setInterval(looping,1000)
   }
};
const stopingbgcolor =function(){
    clearInterval(intervalid)
    intervalid = null
};
document.querySelector("#start").addEventListener('click',changingbgcolor)
document.querySelector("#stop").addEventListener('click',stopingbgcolor)

