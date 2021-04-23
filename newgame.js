const title=document.querySelector("#title");
const start=document.querySelector("#start");
const desc = document.querySelector("#description");
const gamearea = document.querySelector(".game-area");
const moves= document.querySelector("#moves");
const roundNum = document.querySelector("#round");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const pScore = document.querySelector("#playerscore");
const cScore = document.querySelector("#comscore");

const winner = document.createElement("p");

let comScore = 0        //Initialize Computer score to zero
let playerScore = 0     //Initialize Player score to zero
let playerMove;
let comMove;
let round= 1;

startGame();

rock.addEventListener("click", () => {

    playGame('rock');
    pScore.textContent="Player: " + playerScore;
    cScore.textContent= "Computer: " + comScore;
    
    if (playerScore == 5 || comScore ==5) {
       endGame();
       replay();
    }
});

paper.addEventListener("click", () => {

    playGame('paper');
    pScore.textContent="Player: " + playerScore;
    cScore.textContent= "Computer: " + comScore;
    if (playerScore == 5 || comScore ==5) {
        endGame();
        replay();
     }
});

scissors.addEventListener("click", () => {

    playGame('scissors');
    pScore.textContent="Player: " + playerScore;
    cScore.textContent= "Computer: " + comScore;
    
    if (playerScore == 5 || comScore ==5) {
        endGame();
        replay();
     }
    
});











function startGame() {

    start.addEventListener ('click', () => {
        title.setAttribute('style', "margin-top: 0px; font-size: 30px; text-shadow: none;");
        roundNum.textContent="Round: " + round
        roundNum.setAttribute('style', "margin-bottom: 10px; font-size:25px;")
        desc.textContent="Select your weapon"
        desc.setAttribute("style", "margin-top: 5px; color: red; font-size: 20px;")
        gamearea.removeChild(start);
        moves.classList.toggle("player-moves");

        pScore.setAttribute("style", "text-align: center; font-size: 24px;");
        cScore.setAttribute("style", "text-align: center; font-size: 24px;");
        pScore.textContent="Player: " + playerScore;
        cScore.textContent="Computer: " + comScore;
       
    });   
}

function playGame(move) {
    playerMove=move;
    comMove=comChoice();
    compare(playerMove,comMove);
    round +=1;
    roundNum.textContent="Round: " + round;

}



    
function comChoice() {                                      //Initialize a function for the computer's move choice. Uses RNG to determine the move and returns value to game   
     let choice = Math.floor(Math.random()*3)+1
    
       if (choice==1) {
            choice="rock"
        }
    
        else if(choice==2) {
            choice="paper"
        }
    
        else {
            choice="scissors"
        }
    
        return choice
    }
    
    
function compare(playerMove, comMove) {                     //Initialize a function that compares the player's and computer's and updates score variable for winner
    

        if (playerMove=="rock" && comMove =="scissors") {
            playerScore +=1
            winner.setAttribute("style", "color: green; font-size:30px");
            winner.textContent="You win this round!";
        }
        else if (playerMove=="scissors" && comMove =="paper") {
            playerScore +=1
            winner.setAttribute("style", "color: green; font-size:30px");
            winner.textContent="You win this round!";
        }
    
        else if (playerMove=="paper" && comMove =="rock") {
            playerScore +=1
            winner.setAttribute("style", "color: green; font-size:30px");
            winner.textContent="You win this round!";
        }
        else if(playerMove==comMove) {
            winner.setAttribute("style", "color: black; font-size:30px");
            winner.textContent="Oh no! A tied round.. Try again";
        }
    
        else {
            comScore+=1
            winner.setAttribute("style", "color: red; font-size:30px");
            winner.textContent="You lost this round!";
         
        }
       gamearea.insertBefore(winner,roundNum);
    }
    
function findWinner() {                                       //Takes results from the game and determines a final winner
        let winner=''
        if (comScore < playerScore) {
            winner = 'You win!  Final Score: '
            desc.setAttribute('style', 'color: green; font-size: 24px')
            return winner;
        }
        
        else if (comScore>playerScore){
            winner ='You lost this time. Try Again!  Final Score: ';
            desc.setAttribute('style','color: red; font-size: 24px;')
            return winner;
        }
    
        else {
            winner='A tie game! Try again!  Final Score: '
            desc.setAttribute('style','color: black; font-size: 24px;')
            return winner
        }
    
    }

function endGame() {

        gamearea.removeChild(roundNum);
        moves.removeChild(rock);
        moves.removeChild(paper);
        moves.removeChild(scissors);
        gamearea.removeChild(winner);
        desc.textContent=findWinner();

}

function replay() {
    const quit = document.createElement("button");
    
    quit.textContent="Play Again?";
    gamearea.appendChild(quit);

   

    quit.addEventListener("click", () => {
        window.location.reload(false);
    });
}

