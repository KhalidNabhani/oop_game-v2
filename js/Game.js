/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
   constructor(){
        // missed used to track the number of missed guesses by the player
        this.missed = 0;

        // phrases array of class phrase defined in phrase.js file 
        this.phrases = [
            'The best of both worlds',
            'Let the cat out of the bag',
            'You can’t judge a book by its cover',
            'To hit the nail on the head',
            'No pain no gain',
            'Let the cat out of the bag',
            'To kill two birds with one stone',
            // Copyright© 1996 - 2018 © EF Education First Group. All rights reserved. 
            // EF English Live and Englishlive.ef.com are registered trademarks.
        ];  
        // this.activePhrase (below) is the Phrase object that’s currently in play. 
        // The initial value is null. 
        // Within the startGame() method, this property will be set to the Phrase object returned 
        // from a call to the getRandomPhrase() method.
        this.activePhrase = null; //
        
        
    }

    /************************************************************************  */
    /* hides the start screen overlay, calls the getRandomPhrase() method, se. */
    /* and sets the activePhrase property with the chosen phra                 */
    /************************************************************************  */
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
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
     handleInteraction(){

     }
     /************************************************************************  
      * this method removes a life from the scoreboard
     ************************************************************************  */
     removeLife(){

     }
     /************************************************************************  
     * this method checks to see if the player has revealed all of 
     * the letters in the active phrase.
     ************************************************************************  */
     checkForWin(){

     }
     /************************************************************************  
      * this method displays the original start screen overlay
     ************************************************************************  */
     gameOver(){

     }
}