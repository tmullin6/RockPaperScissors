let comScore = 0 
let playerScore = 0

let round =1

while (true) {
    game()
    break
}


function game() {

    while (round <= 5 ) {
        let playerMove = playerChoice()
        let comMove = comChoice()
    
        Compare(playerMove, comMove)
        console.log(`You chose: ${playerMove}`)
        console.log(`Computer chose: ${comMove}`)
        console.log(`Player: ${playerScore}`)
        console.log(`Computer: ${comScore}`)
        round +=1
    }
    
    if (comScore < playerScore) {
        console.log("You Win!")
    }
    
    else {
        console.log("You lose this time. Try again!")
    }

    let playAgain = prompt("Would you like to play again? Y/N")

    if (playAgain=="Y" || playAgain=="y") {
        return true;
    }

    else if(playAgain=="N" || playAgain=="n") {
        alert("Thanks for playing!")
        return false;
    }

    else {
        alert("Please make a valid selection")
    }

    

}
function comChoice() {
    let choice = Math.floor(Math.random()*4)

    if(choice==0) {
        choice="rock"
    }

    else if (choice==1) {
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

function playerChoice() {

    let choice = prompt("Please choose Rock, Paper or Scissors").toLowerCase()

    return choice
}

function Compare(playerMove, comMove) {

    if (playerMove=="rock" && comMove =="scissors") {
        alert("You win!")
        playerScore +=1
    }
    else if (playerMove=="scissors" && comMove =="paper") {
        alert("You win!")
        playerScore +=1
    }

    else if (playerMove=="paper" && comMove =="rock") {
        alert("You win!")
        playerScore +=1
    }
    else if(playerMove==comMove) {
        alert("You Tied!")
    }

    else {
        alert("You lost. Try again")
        comScore+=1
    }

   
}