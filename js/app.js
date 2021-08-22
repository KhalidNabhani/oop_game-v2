/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game;
const startBtn = document.getElementById("btn__reset");
const keyBtn = document.querySelector("#qwerty");
const kbKeys =document.querySelector("html");




startBtn.addEventListener("click", e =>  game.startGame());

keyBtn.addEventListener("click", event  => {
    
    game.handleInteraction(event.target);



});

kbKeys.addEventListener("keydown", event  => {
    
    game.handleInteraction(event.target);
});

 