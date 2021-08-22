/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    
    constructor(phrase){
        this.game = new Game();
        this.phrase = phrase.toLowerCase();
        
    }
    /************************************************************************  
      * 
     ************************************************************************  */
    addPhraseToDisplay(){

       const phraseUl = document.querySelector("#phrase ul");
       console.log(phraseUl);
       const words = this.game.getRandomPhrase();

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
      * 
     ************************************************************************  */
    showMatchedLetter(letter){
        
       
        
        const allLetters = document.querySelectorAll('.letter');
        allLetters.forEach(element => {
            
        
           
               if(element.textContent === letter){
                   element.classList.replace("hide","show");
               }
               
           
               
        }); 
           
       
       
        
       
    }
}
