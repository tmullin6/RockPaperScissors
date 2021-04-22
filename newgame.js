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

let comScore = 0        //Initialize Computer score to zero
let playerScore = 0     //Initialize Player score to zero
let playerMove;
let comMove;
let round= 1;

startGame();

rock.addEventListener("click", () => {
    if (round < 5) {
    playGame('rock');
    pScore.textContent="Player: " + playerScore;
    cScore.textContent= "Computer: " + comScore;
    }
    else {
       endGame();
    }
});

paper.addEventListener("click", () => {
    if (round < 5) {
    playGame('paper');
    pScore.textContent="Player: " + playerScore;
    cScore.textContent= "Computer: " + comScore;
    }
    else {
       endGame();
    }
});

scissors.addEventListener("click", () => {
    if (round < 5) {
    playGame('scissors');
    pScore.textContent="Player: " + playerScore;
    cScore.textContent= "Computer: " + comScore;
    }
    else {
       endGame();
    }
});




    

    


 


        
//if (round > 5) {
  //  const playAgain = document.createElement("div");
   // const replay = document.createElement('p');
    //const y = document.createElement('button');
   // const n = document.createElement('button');
   // replay.textContent="Would you like to play again?";
   // y.textContent="Yes";
   // n.textContent="No";
    
  // gamearea.appendChild(playAgain);
    
  //  playAgain.appendChild(replay);
   // playAgain.appendChild(y);
   // playAgain.appendChild(n);

//}
















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
    console.log(playerMove)
    console.log(comMove)
    console.log(playerScore)
    console.log(comScore)
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
            
        }
        else if (playerMove=="scissors" && comMove =="paper") {
            playerScore +=1
            
        }
    
        else if (playerMove=="paper" && comMove =="rock") {
            playerScore +=1
            
        }
        else if(playerMove==comMove) {
            
        }
    
        else {
            comScore+=1
         
        }
       
    }
    
function findWinner() {                                       //Takes results from the game and determines a final winner
        let winner=''
        if (comScore < playerScore) {
            winner = 'You win!'
            desc.setAttribute('style', 'color: green; font-size: 24px')
            return winner;
        }
        
        else if (comScore>playerScore){
            winner ='You lost this time. Try Again!';
            desc.setAttribute('style','color: red; font-size: 24px;')
            return winner;
        }
    
        else {
            winner='A tie game! Try again!'
            desc.setAttribute('style','color: black; font-size: 24px;')
            return winner
        }
    
    }

function endGame() {

        gamearea.removeChild(roundNum);
        moves.removeChild(rock);
        moves.removeChild(paper);
        moves.removeChild(scissors);
        desc.textContent=findWinner();

}
    