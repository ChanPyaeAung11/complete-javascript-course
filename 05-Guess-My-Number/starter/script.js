'use strict';
// secret number
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

let score = 20;

// DOM is not or part of JS
// DOM is created by browsers and have methods of DOM being accessed by web API

// accessing web api and DOM.
console.log(document.querySelector('.message').textContent);
// manipulate DOM
// document.querySelector('.score').textContent = 10;

// JS input this value into element with this class
document.querySelector('.guess').value = 23;

function printValue() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🟥 No Number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.score').textContent = score += 1;
  } else if (guess > number) {
    document.querySelector('.message').textContent = '📈 Too High';
    score !== 0 ? (score -= 1) : (score = 0);
    document.querySelector('.score').textContent = score;
  } else if (guess < number) {
    document.querySelector('.message').textContent = '📉 Too Low';
    score !== 0 ? (score -= 1) : (score = 0);
    document.querySelector('.score').textContent = score;
  }
}
document.querySelector('.check').addEventListener('click', printValue);
