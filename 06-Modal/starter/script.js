'use strict';

// when call a function with (), js exepects to see return values.
// w/o(), functions will be passed to be called later
// adding and removing to chg appearances

// start by selecting all we will need. HTML elements into variables instead of choosing all over again.

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
// to select all elements with same class name
const btnShowModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < btnShowModal.length; i++)
  console.log(btnShowModal[i].addEventListener('click', unhideOverlayModal));

btnCloseModal.addEventListener('click', hideOverlayModal); // only w/o (), functions will be called only when clicked.

overlay.addEventListener('click', hideOverlayModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideOverlayModal();
  }
});

function unhideOverlayModal() {
  console.log('Button clicked');
  // remove a class from HTML element
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hideOverlayModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
