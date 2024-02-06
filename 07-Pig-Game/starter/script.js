'use strict';

// variables

const dice = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const hold = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let activePlayer, currentScore, totalScore, playing;

// starting and restarting conditions
function init() {
  diceImg.style.display = 'none';
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#score--0').textContent = 0;

  document.querySelector('#current--1').textContent = 0;
  document.querySelector('#score--1').textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  player0.classList.add('player--active');
  activePlayer = 0;
  playing = true;
}
init();

// logic for roll dice
dice.addEventListener('click', rollDice);

function rollDice() {
  if (playing) {
    const num = Math.floor(Math.random() * 6) + 1;
    diceImg.style.display = 'inline';
    currentScore = document.querySelector(`#current--${activePlayer}`);

    diceImg.src = `dice-${num}.png`;
    if (num > 1) {
      currentScore.textContent = Number(currentScore.textContent) + num;
    } else {
      currentScore.textContent = 0;
      changePlayer();
    }
  }
}

// logic for hold
hold.addEventListener('click', function () {
  if (playing) {
    currentScore = document.querySelector(`#current--${activePlayer}`);
    totalScore = document.querySelector(`#score--${activePlayer}`);

    totalScore.textContent =
      Number(currentScore.textContent) + Number(totalScore.textContent);

    if (totalScore.textContent >= 100) {
      gameWon();
      playing = false;
    } else {
      currentScore.textContent = 0;
      changePlayer();
    }
  }
});

// changing active players
function changePlayer() {
  // toggle makes if unnecessary
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

// after game win
function gameWon() {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add(`player--winner`);

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--active`);

  diceImg.style.display = 'none';
}

// reset the game
document.querySelector('.btn--new').addEventListener('click', init);
