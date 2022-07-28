const scopeForm = document.querySelector(".scopeForm");
const guessForm = document.querySelector(".guessForm");
const scopeNumber = document.querySelector(".scopeNumber");
const guessNumber = document.querySelector(".guessNumber");
const playBtn = document.querySelector(".playBtn");
const choseResult = document.querySelector(".numberresult");
const result = document.querySelector(".winLost");


function hanndleScope (event){
    event.preventDefault();
}

function handdleCasino(event){
    event.preventDefault();
    let scopeinput = parseInt(scopeNumber.value);
    let guessinput = parseInt(guessNumber.value);

    playBtn.addEventListener("click", haddleBtn(scopeinput, guessinput));
}

function haddleBtn(scopeinput, guessinput){
    let randomnumber = parseInt(Math.floor(Math.random() * (scopeinput+1)));
    
    if(scopeinput < 0 || guessinput < 0 ||isNaN(scopeinput) === true ) {
        alert("Please enter an integer.");

    } else if ( scopeinput <guessinput ){
        alert("Please enter a value within the range!");
    }
    
    else {
        choseResult.innerText = `You chose: ${guessinput}, the machine chose: ${randomnumber}`;

        if(randomnumber === guessinput){
            result.innerText = `You won!`;
        } else{
            result.innerText = `You lost!`
            
        }
    }
    
}


scopeForm.addEventListener("submit", hanndleScope);
guessForm.addEventListener("submit", handdleCasino);


