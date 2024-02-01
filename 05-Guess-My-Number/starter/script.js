'use strict';
// secret number
let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

let score = 20;
let highScore = 0;

// DOM is not or part of JS
// DOM is created by browsers and have methods of DOM being accessed by web API

// accessing web api and DOM.
console.log(document.querySelector('.message').textContent);
// manipulate DOM
// document.querySelector('.score').textContent = 10;

// JS input this value into element with this class
document.querySelector('.guess').value = '';

function printValue() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🟥 No Number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    // if the css porperty has '-' in word, jsut camalCase.
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      document.querySelector('.highscore').textContent = highScore = score;
    }
  } else if (guess > number) {
    document.querySelector('.message').textContent = '📈 Too High';
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guess < number) {
    document.querySelector('.message').textContent = '📉 Too Low';
    if (score <= 1) {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost the game';
    } else {
      document.querySelector('.score').textContent = --score;
    }
  }
}
document.querySelector('.check').addEventListener('click', printValue);

document.querySelector('.again').addEventListener('click', function () {
  // location.reload();
  document.querySelector('.score').textContent = score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
