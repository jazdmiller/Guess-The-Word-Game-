/// Global Variables ///
const words = ['The Godfather', 'Inception', 'Fight Club', 'Pulp Fiction', 'Forrest Gump'];
let answerArray = [];
let wrongGuess = 8;
let guesses = 0;





/// Game functions + logic ///

const randomWord = () => {
    word = words[Math.floor(Math.random() * words.length)];
    alert(word);
}

randomWord();
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