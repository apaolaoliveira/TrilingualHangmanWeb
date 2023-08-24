import { Words } from "./words.js";

class hangmanGame{    
    hangmanImgs = document.querySelector(".hangman-imgs");
    word = document.querySelector(".word");
    attempts = document.querySelector(".attempts");
    keyboardBtns = document.querySelectorAll(".keyboard button");
    newGame = document.querySelector('.newGame');
    languageChange = document.querySelector('.language-selected');
    themeText = document.querySelector('.theme-selected');
    themeIcon = document.getElementById('theme-icon');
    error = 0;

    ManageWord = null;

    constructor(){
        this.ManageWord = new Words();       
        this.startNewGame();
        this.addClickListeners();        
    }

    startNewGame(){
        this.newGame.addEventListener('click', () =>{
            this.reset();
        })
    }
    
    reset(){
        this.error = 0;
        this.hangmanImgs.src = `src/Imgs/hangman/errorNoose.png`;
        this.ManageWord.manageThemeLangClicks();        
        this.displayWord();
        this.keyboardBtns.forEach(key =>{
            key.disabled = false;     
            key.classList.remove('background-red');           
            key.classList.remove('background-green');           
        });
    }

    addClickListeners(){
        this.keyboardBtns.forEach(key =>{
            key.addEventListener('click', (sender) => this.takeGuess(sender));
        });
    }

    displayWord(){
        this.word.innerHTML = this.ManageWord.foundLetters.join(' ');
        this.attempts.innerHTML = `${this.error}/6`;
    }

    takeGuess(sender){
        const btn = sender.target;
        btn.disabled = true;
        const guess = btn.textContent[0];
        
        let gotRight = this.ManageWord.checkGuess(guess);
        this.displayWord();   
        
        if(gotRight == false){
            btn.classList.add('background-red');
            btn.classList.remove('background-green');
            this.error++;
            this.hangmanImgs.src = `src/Imgs/hangman/error${this.error}.png`;
            this.displayWord();
            
        }else{
            btn.classList.add('background-green');
            btn.classList.remove('background-red');
        }

        this.checkWinLoss();
    }

    checkWinLoss() {
        if (this.error == 6) {
            this.ManageWord.setMessage("lose");
            this.hangmanImgs.src = `src/Imgs/hangman/hangmanLose.png`;
            this.ManageWord.setMessage("restart");
            this.keyboardBtns.forEach(key =>{ key.disabled = true; });
            this.word.innerHTML = this.ManageWord.secretWord.join(' ');
        } else if (!this.word.textContent.includes("_")) {
            this.ManageWord.setMessage("win");
            this.hangmanImgs.src = `src/Imgs/hangman/hangmanWin.png`;
            this.ManageWord.setMessage("restart");
        }
    } 
}

window.addEventListener('load', () => new hangmanGame());

