export class Words{
    word = document.querySelector('.word');
    newGame = document.querySelector('.newGame');
    langSelected = 'English';
    themeSelected = 'fruits';
    secretWord = '';
    foundLetters = [];

    constructor(){
        this.manageThemeLangClicks();   
        this.setMessage("start");   
    }
    
    manageThemeLangClicks(){
        const themeOptions = document.querySelectorAll('.theme-option');         
        const langOptions = document.querySelectorAll('.lang-option');  
        
        const updateSelection = (theme, lang) => {
            this.themeSelected = theme;
            this.langSelected = lang;
            
            this.secretWord = this.SetSecretWord();
            this.foundLetters = this.EncryptedWord();
        };
        
        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const selectedTheme = option.classList[1];
                updateSelection(selectedTheme, this.langSelected);
            });
        });
        
        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const selectedLang = option.textContent.trim();
                updateSelection(this.themeSelected, selectedLang);  
            });
        }); 
        
    }    
    
    SetSecretWord(){
        const hangmanWords = {
            animals: {
                words: {
                    Português: ["cachorro", "gato", "elefante", "girafa", "tigre", "macaco", "golfinho", "tartaruga", "coelho", "cavalo", "vaca", "pato", "galinha", "cobra", "rato", "ovelha", "pinguim", "rinoceronte", "esquilo"],
                    English: ["dog", "cat", "lion", "elephant", "giraffe", "tiger", "monkey", "dolphin", "turtle", "rabbit", "horse", "cow", "duck", "chicken", "snake", "rat", "sheep", "penguin", "rhinoceros", "squirrel"],
                    Español: ["perro", "gato", "leon", "elefante", "jirafa", "tigre", "mono", "delfin", "tortuga", "conejo", "caballo", "vaca", "pato", "gallina", "serpiente", "rata", "oveja", "pinguino", "rinoceronte", "ardilla"]
                }
            },
            fruits: {
                words: {
                    Português: ["banana", "laranja", "uva", "morango", "abacaxi", "kiwi", "melancia", "pera", "manga", "cereja", "framboesa", "ameixa", "figo", "coco", "abacate", "goiaba", "pitanga"],
                    English: ["apple", "banana", "orange", "grape", "strawberry", "pineapple", "kiwi", "watermelon", "pear", "mango", "lemon", "cherry", "melon", "raspberry", "plum", "fig", "coconut", "avocado", "guava"],
                    Español: ["manzana", "naranja", "uva", "fresa", "pina", "kiwi", "sandia", "pera", "mango", "limon", "cereza", "frambuesa", "ciruela", "higo", "coco", "aguacate", "guayaba", "pitanga"]
                }
            },
            professions: {
                words: {
                    Português: [ "professor", "engenheiro", "advogado", "cozinheiro", "jornalista", "piloto", "arquiteto", "artista", "policial", "bombeiro", "escritor", "cientista", "eletricista", "motorista", "fazendeiro", "juiz", "pedreiro", "pescador"],
                    English: ["doctor", "teacher", "engineer", "lawyer", "chef", "journalist", "pilot", "architect", "artist", "police officer", "firefighter", "writer", "scientist", "electrician", "driver", "farmer", "judge", "bricklayer", "fisherman", "veterinarian"],
                    Español: ["medico", "profesor", "ingeniero", "abogado", "cocinero", "periodista", "piloto", "arquitecto", "artista", "policia", "bombero", "escritor", "cientifico", "electricista", "conductor", "agricultor", "juez", "pescador"]
                }
            },
            colours: {
                words: {
                    Português: ["vermelho", "azul", "amarelo", "verde", "roxo", "laranja", "preto", "branco", "rosa", "marrom", "cinza", "ciano", "turquesa", "bege"],
                    English: ["red", "blue", "yellow", "green", "purple", "orange", "black", "white", "pink", "brown", "gray", "cyan", "turquoise", "beige"],
                    Español: ["rojo", "azul", "amarillo", "verde", "morado", "naranja", "negro", "blanco", "rosa", "marron", "gris", "cian", "turquesa", "beige",]
                }
            }
        };
        
        const hangmanTheme = hangmanWords[this.themeSelected];
        const hangmanLang = hangmanTheme.words[this.langSelected];
        
        const randomIndex = Math.floor(Math.random() * hangmanLang.length);
        const randomWord = hangmanLang[randomIndex];    
        // console.log(randomWord); 
        
        return randomWord;
    }

    EncryptedWord(){
        return new Array(this.secretWord.length).fill('_');       
    }

    checkGuess(guess){
        let gotRight = false;
    
        for (let i = 0; i < this.secretWord.length; i++) {
            if (this.secretWord[i].toLowerCase().includes(guess.toLowerCase())) {                
                this.foundLetters[i] = guess;
                gotRight = true;
            }
        }

        return gotRight;
    }

    setLangMessage(type){
        let finalMessage = '';

        switch(type){
            case "lose":
                switch(this.langSelected){
                    case "Português": finalMessage = `Que pena, você perdeu.. A palavra secreta era "${this.secretWord.toUpperCase()}"!`;       break;
                    case "English": finalMessage = `You lost the game.. The secret word was "${this.secretWord.toUpperCase()}"!`;                  break;
                    case "Español": finalMessage = `Qué lástima, perdiste el juego... la palabra secreta era "${this.secretWord.toUpperCase()}"!`; break;
                }
            break;

            case "win":
                switch(this.langSelected){
                    case "Português": finalMessage = `Parabéns!! Você acertou a palavra secreta :)`;     break;
                    case "English": finalMessage = `Congratulations!! You got the secret word right :)`; break;
                    case "Español": finalMessage = `¡¡Felicidades!! Tienes bien la palabra secreta :)`;  break;
                }
            break;

            case "start":
                switch(this.langSelected){
                    case "Português": finalMessage = `Escolha um tema e clique em "Novo Jogo" para começar`;   break;
                    case "English": finalMessage = `Choose a theme and click "New Game" to start`;             break;
                    case "Español": finalMessage = `Elija un tema y haga clic en "Nuevo juego" para comenzar`; break;
                }
            break;

            case "restart":
                switch(this.langSelected){
                    case "Português": finalMessage = `Escolha um novo tema e clique em "Novo Jogo" para jogar novamente`; break;
                    case "English": finalMessage = `Choose a new theme and click "New Game" to play again`;               break;
                    case "Español": finalMessage = `Elija un nuevo tema y haz clic en "Nuevo juego" para volver a jugar`; break;
                }
            break;
        }

        return finalMessage;
    }

    setToastifyAlert(text, color) {
        let color1, color2;
    
        switch (color) {
            case "green":
                color1 = "#00b09b";
                color2 = "#32a852";;
                break;
            case "red":
                color1 = "#e74c3c";
                color2 = "#c0392b";
                break;
            case "yellow":
                color1 = "#f39c09";
                color2 = "#e67e22";
                break;
        }
    
        Toastify({
            text: text,
            duration: 6000,
            stopOnFocus: true,
            close: true,
            gravity: "bottom", 
            position: "right",
            
            style: {
                background: `linear-gradient(to right, ${color1}, ${color2})`,
                fontSize: "18px"
            }
        }).showToast();
    }

    setMessage(result){
        let message = '';

        switch(result){
            case "win":
                message = this.setLangMessage("win");
                this.setToastifyAlert(message, "green");
            break;
            case "lose":
                message = this.setLangMessage("lose");
                this.setToastifyAlert(message, "red");
            break;
            case "start":
                message = this.setLangMessage("start");
                this.setToastifyAlert(message, "yellow");
            break;
            case "restart":
                message = this.setLangMessage("restart");
                this.setToastifyAlert(message, "yellow");
            break;
        }
    }
}