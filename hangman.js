const prompt = require('prompt-promise');
const chalk = require('chalk');
process.setMaxListeners(100);

console.log(chalk.yellow('H A N G M A N'));

let word = '';
let hangman = [];
const displayHangman = () => console.log(chalk.blue(hangman.join('')));

prompt('Enter a word for Hangman: ')
    .then(function setUpGame(val) {
        word = val;
        for (let i = 0; i < val.length; i++) {
            hangman.push('_ ');
        }    
        console.log('The hangman word is: ' + word);
        return prompt('Press any key to start playing.');
    })
    .then(function start(val) {
        console.log(chalk.yellow('H A N G M A N. You need to guess the ' + word.length + '-letter word: '));
        displayHangman();
        return prompt('Guess a letter: ');
    })
    .then(function guess(val) {
        if (hangman.includes('_ ')) {
            if (word.includes(val)) {
                console.log(chalk.green('You guessed a letter correctly!'));
                let index = word.indexOf(val);
                let letter = word.charAt(index);
                word = word.replace(letter, '_');
                hangman.splice(index, 1, val + ' ');
                displayHangman(); 
                return prompt('Guess another letter: ');
            } else {
                console.log(chalk.red('Wrong!'));
                return prompt.guess('Guess another letter: ');
            }
        } else {
            console.log(chalk.green('You guessed the word!'));
            displayHangman(); 
            prompt.done();
        }
    })
    .catch (function rejected(err) {
        console.log('error: ', err.stack);
        prompt.finish();
    });

