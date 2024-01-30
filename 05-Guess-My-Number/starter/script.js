'use strict';
// secret number
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

// DOM is not or part of JS
// DOM is created by browsers and have methods of DOM being accessed by web API

// accessing web api and DOM.
console.log(document.querySelector('.message').textContent);
// manipulate DOM
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.score').textContent = 10;

// JS input this value into element with this class
document.querySelector('.guess').value = 23;

function printValue() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🟥 No Number!';
  } else if (guess === number) {
  }
}
document.querySelector('.check').addEventListener('click', printValue);
