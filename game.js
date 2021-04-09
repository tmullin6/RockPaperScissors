let comScore = 0 
let playerScore = 0

console.log(comChoice())

function comChoice() {
    let choice = Math.floor(Math.random()*4)

    if(choice==0) {
        choice="Rock"
    }

    else if (choice==1) {
        choice="Rock"
    }

    else if(choice==2) {
        choice="Paper"
    }

    else {
        choice="Scissors"
    }

    return choice
}