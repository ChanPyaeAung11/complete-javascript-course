'use strict';

// variables

const dice = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const player0 = document.querySelector('.player--0');
let currentScoreForPlayer0 = document.querySelector('#current--0');
let totalScoreForPlayer0 = document.querySelector('#score--0');

const player1 = document.querySelector('.player--1');
let currentScoreForPlayer1 = document.querySelector('#current--1');
let totalScoreForPlayer1 = document.querySelector('#score--1');

// starting and restarting conditions
function init() {
  diceImg.style.display = 'none';
  currentScoreForPlayer0.textContent = 0;
  totalScoreForPlayer0.textContent = 0;

  currentScoreForPlayer1.textContent = 0;
  totalScoreForPlayer1.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  player0.classList.add('player--active');

  dice.disabled = false;
  hold.disabled = false;
}
init();

// logic for roll dice
dice.addEventListener('click', rollDice);

function rollDice() {
  const num = Math.floor(Math.random() * 6) + 1;
  diceImg.style.display = 'inline';
  let currentScore;
  if (player0.classList.contains('player--active')) {
    currentScore = currentScoreForPlayer0;
  } else {
    currentScore = currentScoreForPlayer1;
  }
  diceImg.src = `dice-${num}.png`;
  if (num > 1) {
    currentScore.textContent = Number(currentScore.textContent) + num;
  } else {
    currentScore.textContent = 0;
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
  // toggle makes if unnecessary
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  //   if (player0.classList.contains('player--active')) {
  //     player0.classList.remove('player--active');
  //     player1.classList.add('player--active');
  //   } else {
  //     player1.classList.remove('player--active');
  //     player0.classList.add('player--active');
  //   }
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
newGame.addEventListener('click', init);
