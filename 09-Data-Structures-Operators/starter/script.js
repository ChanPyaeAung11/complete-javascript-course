'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (index1, index2) {
    return [this.starterMenu[index1], this.starterMenu[index2]];
  },

  // arrays and objs can be destrucuted at the paramter themselves
  orderComesInArray: function ([el1, el2, el3, el4]) {
    // const [el1, el2, el3] = arr;
    console.log(el1, el2, el3, el4);
  },
  orderDelivery: function ({
    time = '00:00',
    address = 'Earth',
    mainIndex = '1',
    starterIndex = '1',
  }) {
    // destructuring can be done inside block or directly inside parameter
    // const { time, address, mainIndex, starterIndex } = obj;
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
};

// normal way of getting elements from array
const menu1 = restaurant.mainMenu[0];
const menu2 = restaurant.mainMenu[1];
const menu3 = restaurant.mainMenu[2];
console.log(menu1, menu2, menu3);

// destructuring arrays from ES6
// this is not an array. if js engine sees [] on left side, it knows there will be destructuring
const [x, y, z] = restaurant.mainMenu;
console.log(x, y, z);

// can destructure partial
let [main, , secondary] = restaurant.starterMenu;
console.log(main, secondary);

// normally to switch values between 2 vars require temp var
const temp = main;
main = secondary;
secondary = temp;

// with destructruing to switch values
[main, secondary] = [secondary, main];
console.log(main, secondary);

// returned array can be divided into diff variables w/o using array's indices
console.log(restaurant.order(0, 2));
const [item1, item2] = restaurant.order(0, 2);
console.log(item1, item2);

// destructuring nested arrays
const [j, , [f, k]] = [5, 4, [6, 9]];
console.log(j, f, k);

// default values assigned. in case not know the array
const [m = null, u = null, c = null] = [5, 6];
console.log(m, u, c);

// destructuring objects
const { name, openingHours } = restaurant;
console.log(name, openingHours);

// chging name of variables from default object's ones
// creating new vars with const
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { x: 23, y: 7, z: 14 };

// when code line started with {, js expects it to be a block. as such, need()
({ x: a, y: b } = obj);
console.log(a, b);

// nested objects
// able to access nested object w/o specifying the parent object in both assignment and assignee
const {
  sat: { open: oT, close: cT },
} = openingHours;
console.log(oT, cT);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({});

restaurant.orderComesInArray(['22:30', 'Via del Sole, 21', 2, 3]);
