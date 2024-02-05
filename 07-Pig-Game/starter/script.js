'use strict';

// variables

const dice = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const player0 = document.querySelector('.player--0');
let currentScoreForPlayer0 = document.querySelector('#current--0');
let totalScoreForPlayer0 = document.querySelector('#score--0');

currentScoreForPlayer0.textContent = 0;
totalScoreForPlayer0.textContent = 0;

const player1 = document.querySelector('.player--1');
let currentScoreForPlayer1 = document.querySelector('#current--1');
let totalScoreForPlayer1 = document.querySelector('#score--1');

currentScoreForPlayer1.textContent = 0;
totalScoreForPlayer1.textContent = 0;

// logic for roll dice
dice.addEventListener('click', rollDice);

function rollDice() {
  const num = Math.floor(Math.random() * 6) + 1;

  let currentScore;
  if (player0.classList.contains('player--active')) {
    currentScore = currentScoreForPlayer0;
  } else {
    currentScore = currentScoreForPlayer1;
  }

  if (num > 1) {
    currentScore.textContent = Number(currentScore.textContent) + num;
    diceImg.src = `dice-${num}.png`;
  } else {
    currentScore.textContent = 0;
    console.log(num);
    changePlayer();
  }
}

// logic for hold
hold.addEventListener('click', function () {
  let currentScore;
  let totalScore;
  if (player0.classList.contains('player--active')) {
    currentScore = currentScoreForPlayer0;
    totalScore = totalScoreForPlayer0;
  } else {
    currentScore = currentScoreForPlayer1;
    totalScore = totalScoreForPlayer1;
  }

  totalScore.textContent =
    Number(currentScore.textContent) + Number(totalScore.textContent);

  if (totalScore.textContent >= 100) {
    gameWon();
  } else {
    currentScore.textContent = 0;
    changePlayer();
  }
});

// changing active players
function changePlayer() {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
}

// after game win
function gameWon() {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player0.classList.add('player--winner');
  } else {
    player1.classList.remove('player--active');
    player1.classList.add('player--winner');
  }
  dice.disabled = true;
  hold.disabled = true;
}

// reset the game
newGame.addEventListener('click', function () {
  diceImg.style.display = 'none';

  currentScoreForPlayer0.textContent = 0;
  totalScoreForPlayer0.textContent = 0;
  player0.classList.remove('player--winner');

  currentScoreForPlayer1.textContent = 0;
  totalScoreForPlayer1.textContent = 0;
  player1.classList.remove('player--winner');

  player0.classList.add('player--active');

  dice.disabled = false;
  hold.disabled = false;
});
