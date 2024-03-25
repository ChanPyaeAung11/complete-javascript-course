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

const high5 = function () {
  console.log(`Wave`);
};

document.body.addEventListener(`click`, high5);

[`jonas`, `martha`, `array`].forEach(high5);

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
