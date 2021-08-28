/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    
    constructor(phrase){
        
        this.phrase = phrase.toLowerCase();
        
    }
    /************************************************************************  
    * this adds letter placeholders to the display when the game starts. 
    * Each letter is presented by an empty box
    ************************************************************************  */
    addPhraseToDisplay(){

       

       for(let l=0; l < this.phrase.length; l++){
           let letterLi = document.createElement('li');
            if(this.phrase[l]===' '){
                letterLi.classList.add("space")
                
            }else {
                letterLi.classList.add("hide", "letter", this.phrase[l]);
                letterLi.innerHTML = this.phrase[l];
                
            }
            document.querySelector('#phrase ul').appendChild(letterLi);
       }
       

    }
    /************************************************************************  
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
     ************************************************************************  */
    checkLetter(letter){
        
        return (this.phrase.indexOf(letter) !== -1);
    }

    /************************************************************************  
    * reveals the letter(s) on the board that matches the player's selection. 
    * To reveal the matching letter(s) @param (string) letter - Letter to match
    ************************************************************************  */
    showMatchedLetter(letter){

        document.querySelectorAll('.letter').forEach(element => {
               if(element.textContent === letter){
                   element.classList.replace("hide","show");
               }
        });   
    }
}
