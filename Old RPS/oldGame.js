/*Project #2 for The Odin Project. Create a simple Rock Paper Scissors game to be played in the browser through the console. 
The game is played by a player against the computer. The computer makes a move choice randomly and the move is compared to the players input.
The game funs five rounds and a winner is determined. */




let comScore = 0        //Initialize Computer score to zero
let playerScore = 0     //Initialize Player score to zero
let play=true


while(play==true) {
    game()
    replay()
}

    



function game() {                                           //Initialize a function called "Game" that contains the main game logic and structure
     
        
let round=1

    while (round <=5) {
        let playerMove = playerChoice().trim()
        let comMove = comChoice().trim()
        Compare(playerMove, comMove)
        console.log(`You chose: ${playerMove}`)
        console.log(`Computer chose: ${comMove}`)
        console.log(`Player: ${playerScore}`)
        console.log(`Computer: ${comScore}`)
        round +=1
}
    findWinner()

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

function playerChoice() {                                   //Initialize a function to get a choice from the player and return the value to the game

    let choice = prompt("Please choose Rock, Paper or Scissors").toLowerCase()
    
    return choice
}

function Compare(playerMove, comMove) {                     //Initialize a function that compares the player's and computer's and updates score variable for winner

    if (playerMove=="rock" && comMove =="scissors") {
        playerScore +=1
        console.log(`You win!`)
        
    }
    else if (playerMove=="scissors" && comMove =="paper") {
        playerScore +=1
        console.log(`You win!`)
        
    }

    else if (playerMove=="paper" && comMove =="rock") {
        playerScore +=1
        console.log(`You win!`)
        
    }
    else if(playerMove==comMove) {
        console.log(`You tied!`)
    }

    else {
        comScore+=1
        console.log(`You lost!`)
        
    }
   
}

function findWinner() {                                       //Takes results from the game and determines a final winner

    if (comScore < playerScore) {
        console.log(`You won! \n Player: ${playerScore} \n Computer: ${comScore}`)
    }
    
    else if (comScore>playerScore){
        console.log(`You lose this time. Try again! \n Player: ${playerScore} \n Computer: ${comScore}`)
    }

    else {
        console.log("A tie game! Try again!")
    }

}

function replay() {                                           //Asks user if they would like to play again and restarts the game loop
    
    let playAgain = prompt("Would you like to play again? Y/N")

    if (playAgain=="Y".trim() || playAgain=="y".trim()) {
        comScore=0
        playerScore=0
        play=true
        
    }
    else if(playAgain=="N".trim() || playAgain=="n".trim()) {
        alert("Thanks for playing!")
        play=false
        
    }
}
