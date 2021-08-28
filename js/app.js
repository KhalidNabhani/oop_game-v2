/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game;
const startBtn = document.getElementById("btn__reset");
const keyBtn = document.querySelector("#qwerty");
const kbKeys = document.querySelector("html");
const keysArray = document.querySelectorAll('.key');
const ignoredKey =[];
let lineOfKeys = [];


// keysArray.forEach(item => lineOfKeys.push(item.textContent));
for (let i=0;i < keysArray.length;i++){
    console.log(keysArray[i].innerHTML);
    lineOfKeys.push(keysArray[i].innerHTML);
    console.log("lineOfKeys     "+lineOfKeys);
}
startBtn.addEventListener("click", e =>  game.startGame());

keyBtn.addEventListener("click", event  => {
   
   
    if(lineOfKeys.indexOf(event.target.innerHTML) !== -1 )
    {
        console.log(event.target.innerHTML);
        game.handleInteraction(event.target);
        ignoredKey.push(event.target.textContent);  
    }else console.log("Out and ignored   "+event.target.innerHTML);
});

kbKeys.addEventListener("keydown", event  => {
    
    keysArray.forEach(element => {
        if(ignoredKey.indexOf(event.key) === -1){
            if(element.innerHTML === event.key){
                ignoredKey.push(event.key);
                game.handleInteraction(element);
            }
        }
    });   
});

 