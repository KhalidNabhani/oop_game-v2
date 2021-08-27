/* Treehouse FSJS Techdegree
* Project 4 - OOP Game App
* Game.js */


class Game{

   constructor(){
        // missed used to track the number of missed guesses by the player
        this.missed = 0;

        // array of  7 Phrase objects 
        this.phrases = [
            new Phrase('The best of both worlds'),
            new Phrase('Let the cat out of the bag'),
            new Phrase('You cant judge a book by its cover'),
            new Phrase('To hit the nail on the head'),
            new Phrase('No pain no gain'),
            new Phrase('Let the cat out of the bag'),
            new Phrase('To kill two birds with one stone'),
            // Copyright© 1996 - 2018 © EF Education First Group. All rights reserved. 
            // EF English Live and Englishlive.ef.com are registered trademarks.
        ];  
        // this.activePhrase (below) is the Phrase object that’s currently in play. 
        // The initial value is null. 
        // Within the startGame() method, this property will be set to the Phrase object returned 
        // from a call to the getRandomPhrase() method.
        this.activePhrase = null;    
    }

    /************************************************************************  *
    * hides the start screen overlay, calls the getRandomPhrase() method, se.  *
    * and sets the activePhrase property with the chosen phra                  *
    ************************************************************************  */
    startGame(){
        document.getElementById('overlay').className='start';
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /************************************************************************  */
    /* this method randomly retrieves one of the phrases                       */
    /* stored in the phrases array and returns it.
    /* @return {object} randomPhrase                                           */
    /************************************************************************  */
    getRandomPhrase(){
        return  this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /************************************************************************  
      * this method controls most of the game logic
      * It checks to see if the button clicked by the player 
      * matches a letter in the phrase, 
      * and then directs the game based on a correct or incorrect guess
     ************************************************************************  */


    handleInteraction(e){
        e.disabled = true;
        e.classList.add("chosen");
        

        if (this.activePhrase.checkLetter(e.textContent)){
            this.activePhrase.showMatchedLetter(e.textContent)
        }else{
            e.classList.add("wrong");
            this.removeLife();  
        }

        if(this.checkForWin()){
            this.gameOver('win','Congragulations You Won');
        }

        if (this.missed === 5){
            this.gameOver('lose',"Good Luck Next Time No More Tries Are Available For You");
        }
    }



    /************************************************************************  
      * this method removes a life from the scoreboard
     ************************************************************************  */
    removeLife(){
        let triesHeart = document.getElementsByClassName('tries');
        triesHeart[this.missed].firstElementChild.src = "images/arrowHeart.png" 
        this.missed +=1;
        document.getElementById("missed_number").textContent=5-this.missed + ' lives(s) available';
    }

    /************************************************************************  
     * this method checks to see if the player has revealed all of 
     * the letters in the active phrase.
     ************************************************************************  */
    checkForWin(){
        if (document.querySelectorAll('.hide').length === 0){
            return true;
        } else return false;

    }
    
    /************************************************************************  
      * this method displays the original start screen overlay
     ************************************************************************  */
    gameOver(stat, message){
        
        const  keys = document.querySelectorAll(".key");
        const  lifeHearts = document.querySelectorAll(".tries");

        document.getElementById('overlay').classList.replace("start",stat);
        document.getElementById("game-over-message").textContent=message;
        document.getElementById('overlay').style.display = 'block';
        document.querySelector('#phrase ul').innerHTML ='';
        
        keys.forEach(element => {
            element.disabled=false;
            keys.forEach(element => element.className = "key");
            
        });

        lifeHearts.forEach(heart => heart.firstElementChild.src = "images/liveHeart.png"  );
        game.missed =0;

     }
}