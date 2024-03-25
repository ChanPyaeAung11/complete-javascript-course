'use strict';

const bookings = [];

const createBooking = function (
  flightNum = 123,
  numPassengers = 1,
  price = 199 * numPassengers // ONLY worked on paramters defined b4
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`);
createBooking(`LH123`, 10, 100);
createBooking(`LH123`, 10);
createBooking(`LH123`, 5);
createBooking(`LH123`, undefined, 5); // undefined === not setting the value

const flight = `LH234`;
const jonas = {
  name: `Jonas Shit`,
  passport: 234323,
};

const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr. ` + passenger.name;

  if (passenger.passport === 234323) {
    //alert(`Checked in`);
  } else {
    //alert(`Wrong passport`);
  }
};
checkIn(flight, jonas);
console.log(flight, jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(jonas);
checkIn(flight, jonas);

// first class functions and higher order functions

// these 2 methods are basically abstracted out implementations
const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

// higher order functions
// functions accepting functions as arguments
// this function will only care about transforming code. how it is done will be completed by abstracted methods.
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// these 2 methods become callback functions 2 b called by other functions
// similar as those of eventlisteners
transformer(`Java is the best`, upperFirstWord);
transformer(`Java is the best`, oneWord);

// const high5 = function () {
//   console.log(`Wave`);
// };

// document.body.addEventListener(`click`, high5);

// [`jonas`, `martha`, `array`].forEach(high5);

// functions returning functions
// it works because of closures

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting} ${name}`);

greet(`Hey`)(`Chan`);

const greeterHey = greet(`Hey`);
console.log(greeterHey);

greeterHey(`Jonas`);
greeterHey(`Steven`);

// this keyword and how to set it manually
const singair = {
  airline: 'SingAir',
  iataCode: `SA`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

singair.book(239, `Chan`);
singair.book(696, `Smith`);
console.log(singair);

const book = singair.book;
//book(23, `Selina); // this keyword will be undefined

const eurowings = {
  airline: 'Enrowings',
  iataCode: `EW`,
  bookings: [],
};

// fns are objects due to being 1st class citizens. have their own functions
// call() will call object method with the object passed in parameter
book.call(eurowings, 23, `Sacha`);
book.call(singair, 1, `Bradley`);
console.log(eurowings);

// apply()
const flightData = [583, `George`];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(singair, ...flightData);

// bind()
//bind `this` from parameter object on a copied method
const bookEW = book.bind(eurowings);
const bookSA = book.bind(singair);

// can also bind arguments
const bookEW23 = book.bind(eurowings, 23, `Bitch`);
bookEW23();

// with event listeners
singair.planes = 300;
singair.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(`.buy`)
  .addEventListener(`click`, singair.buyPlane.bind(singair));

const addTax = (rate, value) => rate * value + value;
console.log(addTax(10, 200));

// partial application - setting partial parameters
// for functions with no this keyword, use null
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addVATArrow = value => rate => addTax(rate, value);

console.log(addVATArrow(100)(0.23));

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`
      )
    );
    console.log(answer);

    typeof answer === `number` &&
      answer < this.options.length &&
      answer >= 0 &&
      this.answers[answer]++;

    this.displayResults(`string`);
    this.displayResults(`array`);
  },
  displayResults(type = `array`) {
    type = type.toLowerCase();
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(`, `)}`);
    }
  },
};

const answersObj = { answers: [5, 2, 3] };
poll.displayResults.call(answersObj);
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, `string`);
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

// IIFEs - Immediately Invoked Function Expressions
// to be used in async/await
// delcare functions and execute once
// can declare and use private variables once and done
(() => console.log('This will nvr run again'))();

// just use block scope to do delcare and use of private vars from es6
{
  const privVar1 = 'This is a private person';
  const privVar2 = `This is the way now for decla`;
}

// Closures
// every function scope has access to var environment of the execution context of its birth place
// even after that execution context has been gone
// VE attached to the function and most updated
// js will look inside current scope -> closure -> scope chain

const secureBooking = function () {
  let passengerCount = 0;
  // this fn is birthed in this secureBooking function. as such will have secureBooking's var environment
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

booker(); //1
booker(); //2
booker(); //3

console.dir(booker);

// diff use of closure
// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  let z = function () {
    console.log(`Just z function`);
  };
  const b = 7;
  f = function () {
    console.log(b * 2);
    z();
  };
};

g();
// after g() is completed, f is assigned a function and have closure to VE of g()
f();
console.dir(f);

// reassigning functions will input new closure
h();
f();

console.dir(f);

// Example 2 Timer
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // this is a callback that will only be called after boardPassengers completed
  // which means there is closure included in this function to execute these
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
    console.log(`This was the ${wait} s of waiting`);
  }, wait * 1000);
  wait = 69;
  console.log(`Will start boarding in ${wait} seconds`);
};

// if there is no perGroup in boardPassengers, this will b used.
// proof that closure has higher priority than scope chain
const perGroup = 1000;
boardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector(`body`).addEventListener(`click`, function () {
    header.style.color = 'blue';
  });
})();
