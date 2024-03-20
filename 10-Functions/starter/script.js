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
