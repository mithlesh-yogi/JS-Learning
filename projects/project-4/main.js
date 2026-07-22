let randomnum = parseInt((Math.random() * 100) + 1)

const userInput = document.querySelector("#guess");
const submit = document.querySelector("#submit");
const previousGuess = document.querySelector(".guesses");
const attempts = document.querySelector(".attempts");
const message = document.querySelector(".message");
const startover = document.querySelector('#results')
console.log(message);


const p = document.createElement("p");
let priGuesses = [];
let numguess = 1;
let playgame = true;

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validationguess(guess)
  })
}
function validationguess(guess){
   if(isNaN(guess)){
     alert(`please enter a valid number`)
   } else if(guess<1){
    alert(`enter a valid number`)
   } else if(guess>100){
    alert(`enter a valid number`)
   } else{
      priGuesses.push(guess)
      if(numguess == 10){
        displayguess(guess)
        displaymsg(`game over ,random nuber was ${randomnum}`)
        endgame()
      } else{
        displayguess(guess)
        checkguess(guess)
      }
   }
}
function checkguess(guess){
    if(guess===randomnum){
        displaymsg(`your guess is right`)
    }else if(guess<randomnum){
        displaymsg(`nuber is too low`)
    }else if(guess>randomnum){
        displaymsg(`nuber is too high`)

    }
}
function displayguess(guess){
  userInput.value = ''
  previousGuess.innerHTML += `<div class="guess-design">${guess}</div>`;
  previousGuess.scrollLeft = previousGuess.scrollWidth;
  numguess++;
  attempts.innerHTML = `${11-numguess}`
  console.log(attempts);
}
function displaymsg(msg){
    console.log(`${msg}`);
  message.innerHTML = `<h2>${msg}</h2>`;
}
function endgame(){
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML =`<h2 id = "newgame">start new game</h2>`
    playgame =false
    console.log(p);
    startover.appendChild(p)
    console.log(userInput);
    Newgame()
    
}
function Newgame(){
    const newgame = document.querySelector('#newgame')
    // console.log(newgame);
    
    newgame.addEventListener('click',function(){
        randomnum = parseInt((Math.random() * 100) + 1)
        priGuesses = [];
        numguess = 1;
        userInput.removeAttribute('disabled')
        previousGuess.innerHTML=''
        message.innerHTML=''
        attempts.innerHTML = `${11- numguess}`;
        startover.removeChild(p)
        playgame=true

    })
}