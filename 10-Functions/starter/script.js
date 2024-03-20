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
    alert(`Checked in`);
  } else {
    alert(`Wrong passport`);
  }
};
checkIn(flight, jonas);
console.log(flight, jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(jonas);
checkIn(flight, jonas);
