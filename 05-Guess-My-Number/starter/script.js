'use strict';
// secret number
let number = generateSecretNumber();
document.querySelector('.number').textContent = number;

let score = 20;
let highScore = 0;

// DOM is not or part of JS
// DOM is created by browsers and have methods of DOM being accessed by web API

// accessing web api and DOM.
console.log(document.querySelector('.message').textContent);

// manipulating DOM
// JS input this value into element with this class
//document.querySelector('.guess').value = '';

function printValue() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🟥 No Number!');
  } else if (guess === number) {
    displayMessage('🎉 Correct Number');
    // if the css porperty has '-' in word, jsut camalCase.
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = highScore = score;
    }
  } else if (guess !== number) {
    if (score <= 1) {
      displayScore(0);
      displayMessage('You lost the game');
    } else {
      displayMessage(guess > number ? '📈 Too High' : '📉 Too Low');
      displayScore(--score);
    }
  }
}
document.querySelector('.check').addEventListener('click', printValue);

document.querySelector('.again').addEventListener('click', function () {
  // page refresh will destroy highScore
  // location.reload();

  // resetting all states
  displayScore(20);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  number = generateSecretNumber();
  document.querySelector('.number').textContent = '?';
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
