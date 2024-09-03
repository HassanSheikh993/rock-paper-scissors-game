const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const totalGames = document.querySelector(".total_games h3");
const userResult = document.querySelector(".user_result h3");
const computerResult = document.querySelector(".computer_result h3");
const drawResult = document.querySelector(".draw_result h3");
const restartBtn = document.querySelector(".restart_btn");
const userSelect = document.querySelector(".user_select_choice");
const computerSelect = document.querySelector(".computer_select_choice");

let choiceList = ['rock','paper','scissors'];
let userChoice;

// Generate random choice from the choice list
const generateRandomChoice = ()=>{
    let randomChoice = Math.floor(Math.random() * choiceList.length)
    return choiceList[randomChoice];
}

//  Main logic of the game
const conditionCheck = ()=>{
    returnResult = generateRandomChoice();
    if(userChoice === returnResult){
        result.innerHTML = "IT'S A TIE";
const drawResult = document.querySelector(".draw_result h3");
        let draw = parseInt(drawResult.textContent);
        drawResult.innerHTML = draw + 1;
     }
     else if( (userChoice == 'rock' && returnResult == 'scissors' ) || (userChoice == 'scissors' && returnResult == 'paper' ) || (userChoice == 'paper' && returnResult == 'rock' ) ){
         result.innerHTML = "YOU WON";
         let user = parseInt(userResult.textContent);
         userResult.innerHTML = user + 1;
     }
     else{
         result.innerHTML = "COMPUTER WON";
         let computer = parseInt(computerResult.textContent);
         computerResult.innerHTML = computer + 1;
     }

     let total=  parseInt(totalGames.textContent);
     totalGames.innerHTML = total + 1;

     userSelect.innerHTML = "User Select:  " + userChoice.toUpperCase();
     computerSelect.innerHTML ="Computer Select:  " + returnResult.toUpperCase();

     
}

//  Event Listener part
rock.addEventListener('click',()=>{
    userChoice = 'rock';
    conditionCheck();
})

paper.addEventListener('click',()=>{
    userChoice = 'paper';
    conditionCheck();
})

scissors.addEventListener('click',()=>{
    userChoice = 'scissors';
    conditionCheck();
})

// Re-start game button

restartBtn.addEventListener('click',()=>{
    drawResult.innerHTML = 0;
    userResult.innerHTML = 0;
    computerResult.innerHTML = 0;
    totalGames.innerHTML = 0;
    result.innerHTML = "";
    userSelect.innerHTML ="";
    computerSelect.innerHTML ="";
})