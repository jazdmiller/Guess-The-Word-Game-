/// Global Variables ///
const words = ['the godfather', 'inception', 'fight club', 'pulp fiction', 'forrest gump'];
let answerArray = '';
let wrongGuess = 6;
let guesses = [];
let gameStatus = null;
let mistakes = 0;





/// Game functions + logic ///

// Pick a random word
const randomWord = () => {
    answerArray = words[Math.floor(Math.random() * words.length)];
}

const getButtons = () => {
    let buttons = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
        `<button class="btn" id=`+ letter +` onClick="handleGuess('`+ letter +`')">
        `+ letter +`
        </button> 
        
        `).join('');

        document.querySelector('.wrapper').innerHTML = buttons;
}

//Take  player's input/guess
const handleGuess = (letterGuess) => {
    guesses.indexOf(letterGuess) === -1 ? guesses.push(letterGuess) : null;
    document.getElementById(letterGuess).setAttribute('disabled', true);

    if (answerArray.indexOf(letterGuess) >= 0) {
        guessWord();
        checkWin();
    } else if (answerArray.indexOf(letterGuess) === -1) {
        mistakes++;
        addMistakes();
        checkLost();
        addPic();
    }
}

// Add items to hangman when user guesses wrong letter
const addPic = () => {
    document.querySelector('.hangmanPic').src = './images/flowers/' + mistakes + '.jpg';
}

// Check to see if there is a winner
const checkWin = () => {
    if (gameStatus === answerArray) {
        document.querySelector('.wrapper').innerHTML = 'Congratulations! You won!';
    }
}

// Check to see if player lost
const checkLost = () => {
    if (mistakes === wrongGuess) {
        document.querySelector('.wrapper').innerHTML = `Sorry, you lose! The movie is: ${answerArray}`;
    }
}

const guessWord = () => {
    gameStatus = answerArray.split('').map(letter => (guesses.indexOf(letter) >= 0 ? letter : ' _ ')).join('');
    
    document.querySelector(".answer").innerHTML = gameStatus;
}

// Add the number of mistakes made (limit 6)
const addMistakes = () => {
    document.getElementById('mistakes').innerHTML = mistakes;
}


//Reset game function
const reset = () => {
    mistakes = 0;
    guesses = [];
    document.querySelector('.hangmanPic').src = "./images/flowers/1.jpg";

    randomWord();
    guessWord();
    addMistakes();
    getButtons();
}
document.getElementById('wrongGuess').innerHTML = wrongGuess;

randomWord();
getButtons();
guessWord();
handleGuess();