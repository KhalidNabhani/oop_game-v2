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


// built an array letters to use for restriction any other input than screen letters
for (let i=0;i < keysArray.length;i++){
   
    lineOfKeys.push(keysArray[i].innerHTML);
    
}

/******************************************************** 
* event listeners 
* 
* ******************************************************/
/***************button start game ******************** */
startBtn.addEventListener("click", e =>  game.startGame());

/*****************screen key buttons ***************** */
keyBtn.addEventListener("click", event  => {
   
   
    if(lineOfKeys.indexOf(event.target.innerHTML) !== -1 )
    {
        game.handleInteraction(event.target);
        ignoredKey.push(event.target.textContent);  
    }
});

/********************KeyBoard input ******************* */
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

 