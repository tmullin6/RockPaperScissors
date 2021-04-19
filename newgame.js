const title=document.querySelector("#title");
const start=document.querySelector("#start");
const desc = document.querySelector("#description");
const gamearea = document.querySelector(".game-area");
const moves= document.querySelector("#moves");

startGame();


function startGame() {
    start.addEventListener ('click', () => {
        title.setAttribute('style', "margin-top: 0px; font-size: 30px; text-shadow: none;");
        desc.textContent="Select your weapon"
        desc.setAttribute("style", "margin-top: 5px; color: red; font-size: 20px;")
        gamearea.removeChild(start);
        moves.classList.toggle("player-moves");
    
    });   
}