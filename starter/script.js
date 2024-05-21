'use strict';


/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Numbah!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; */

let score = 5;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

        // No number
    if (!guess) {
        displayMessage('Ehhh do you know what a number is??');
        // Player win
    } else if (guess === secretNumber) {
        displayMessage('Omg you guessed the correct number! :-)');
        displayNumber(secretNumber);

        document.querySelector('body').style.backgroundColor = '#60b347';
        /* document.querySelector('.number').style.width = '30rem'; */
        displayNumber().style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // Wrong guess
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'tOO high!' : 'T00 low!'); // ternary operator
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game bro');
            document.querySelector('.score').textContent = 0;
        }


        // Too high
    } /* else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'tOO high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game bro';
            document.querySelector('.score').textContent = 0;
        }
        // Too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'T00 low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game bro';
            document.querySelector('.score').textContent = 0;
        }
    } */
});

document.querySelector('.again').addEventListener('click', function() {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})