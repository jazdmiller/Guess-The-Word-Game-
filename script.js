/// Global Variables ///
const words = ['the godfather', 'inception', 'fight club', 'pulp fiction', 'forrest gump'];
let answerArray = '';
let wrongGuess = 6;
let guesses = [];
let gameStatus = null;
let mistakes = 0;





/// Game functions + logic ///

const randomWord = () => {
    answerArray = words[Math.floor(Math.random() * words.length)];
}

const getButtons = () => {
    let buttons = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
        `<button class="btn btn-lg btn-primary m-2" id=`+ letter +` onClick="handleGuess('`+ letter +`')">
        `+ letter +`
        </button> 
        
        `).join('');

        document.querySelector('.wrapper').innerHTML = buttons;
}

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
    }
}

const checkWin = () => {
    if (gameStatus === answerArray) {
        document.querySelector('.wrapper').innerHTML = 'Congratulations! You won!';
    }
}

const checkLost = () => {
    if (mistakes === wrongGuess) {
        document.querySelector('.wrapper').innerHTML = 'Sorry! You lose!';
    }
}

const guessWord = () => {
    gameStatus = answerArray.split('').map(letter => (guesses.indexOf(letter) >= 0 ? letter : ' _ ')).join('');
    
    document.querySelector(".answer").innerHTML = gameStatus;
}

const addMistakes = () => {
    document.getElementById('mistakes').innerHTML = mistakes;
}

document.getElementById('wrongGuess').innerHTML = wrongGuess;

randomWord();
getButtons();
guessWord();
handleGuess();
// 1. Pick a random word
    // While word has not been guessed {
    //     (Get guess from player)
    //     (Show current progress)

    //     if player wants to quit game {
    //         (quit game)
    //     } else if player guesses wrong letter {
    //         (add to illustration)
    //         (show current progress)
    //         (gray out letters in board)
    //     }
    // }

    // u for (var j = 0; j < word.length; j++) {
    //     v if (word[j] === guess) {
    //      answerArray[j] = guess;
    //     w remainingLetters--;
    //      }
// 2. Take  player's input/guess
// 3. Check if guess is a valid letter
// 4. Keep track of letters guessed
// 5. Timer
// 6. Keep track of progress
// 7. Check for winning word
// 8. Replay/quit game





/// Event Listeners ///