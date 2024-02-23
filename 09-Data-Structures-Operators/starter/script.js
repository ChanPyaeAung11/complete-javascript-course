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
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3} `);
  },
  orderPizza: function (mainIngredient, ...otherIng) {
    console.log(mainIngredient);
    console.log(otherIng);
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

// spread operators ...
// taking elements out and putting in somewhere. no vars were created
// only use in places where values can be seperated by commas

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const goodArr = [1, 2, ...arr];
console.log(goodArr);

console.log(...goodArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Escargot'];
console.log(newMenu);

restaurant.mainMenu = [...restaurant.mainMenu, 'Gnocci', 'Escargot'];
console.log(restaurant.mainMenu);

// copy array (only shallow cppy)
const mainMenuCopy = [...restaurant.mainMenu];

const superMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(superMenu);

// can be used on Iteratbles : arrays, strings, maps, sets, NO obj
// only used in places where they are expecting multiple values
const str = 'Jones';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// console.log(`${...str} ipso facto`);

// calling functions with spread
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
//restaurant.orderPasta(...ingredients);

// since ES2018, objets also work.

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Luiz' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Alfredo's Place";
console.log(newRestaurant.name);
console.log(restaurantCopy.name);

// REST pattern
// has same indicator as spread ...
// takes elements and combine them into array
// must be the last element and only 1 rest in any destructuring assignment

// SPREAD has ... on right side of =
const spreadArr = [1, 2, ...[3, 4]];

// REST has ... on the left side of =
const [int1, int2, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(otherFood);

const { name: shopName, categories: cat, ...remains } = restaurant;
console.log(shopName, cat, remains);

const { sat, ...otherTimes } = openingHours;
console.log(sat, otherTimes);

// use in functions
const restFunction = function (...numbers) {
  let sum = 0;

  numbers.forEach(i => (sum += i));
  return sum;
};

console.log(restFunction(1, 2, 3, 4, 5));
restFunction(1);

// use case and rest
const xMen = [23, 5, 7];
console.log(restFunction(...xMen));

restaurant.orderPizza('Cheese', 'Tamato', 'Ball');
restaurant.orderPizza('Meaat', 'Vege');

// Short-circuiting
// && || operators can take in and return any value

// OR will return first truthy value
// if No truthy value in the comparision statement, return last one
console.log(`------ || ------`);
console.log(5 || '');
console.log(0 || 'String');
console.log(0 || '');

// prac use
console.log(restaurant.dontExist ? restaurant.dontExist : 10);

console.log(restaurant.dontExist || 10);

// AND will return first falsy value.
// if there is no falsy,
console.log(`------ && ------`);
console.log(5 && '');
console.log(0 && 'String');
console.log('Some' && 'Thing');
