'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const days = [`mon`, `tues`, `wed`, `thu`, `fri`, `sat`, `sun`];

const openingHours = {
  // calc the key name instead of static
  [days[4]]: {
    open: 1,
    close: 22,
  },
  [days[5]]: {
    open: 1,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 10, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // with ES6, if there is 1 object to be embedded from outside, just call varName
  // will ref the obj. so, chges made will be same
  openingHours,
  order: function (index1, index2) {
    return [this.starterMenu[index1], this.starterMenu[index2]];
  },

  // arrays and objs can be destrucuted at the paramter themselves
  orderComesInArray([el1, el2, el3, el4]) {
    // const [el1, el2, el3] = arr;
    console.log(el1, el2, el3, el4);
  },

  orderDelivery({
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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3} `);
  },
  orderPizza: function (mainIngredient, ...otherIng) {
    console.log(mainIngredient);
    console.log(otherIng);
  },
};
openingHours.fri.open = 99999;
console.log(restaurant.openingHours);
console.log(openingHours);

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
const { name, openTime } = restaurant;
console.log(name, openTime);

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
  fri: { open: friOT, close: friCT },
} = openingHours;
console.log(oT, cT);
console.log(friOT, friCT);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
  sthDark: 3,
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
const { int1, int2, ...others } = [1, 2, 6, 4, 5];
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
console.log('Hello' && 23 && null && 'jonas');

// prac use
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// execute function if function returns truthy value
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

console.log(restaurant.orderPizza);

// nullish coalecing operator (??)
// nullish: null, undefined, not include 0 or ''

// 0 does not equal to not exist such as null or undefined.
restaurant.dontExist = 0;
// with OR short circuit, it will take 0 as falsy value
console.log(restaurant.dontExist || 10);
//using nullish
console.log(restaurant.dontExist ?? 10);

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'Piazza',
  owner: `Chan`,
};
// set default number of guests for all restaurant objs

// using short circuiting
//rest1.numGuests = rest1.numGuests || 5; // in this way, 0 will get assigned
//rest2.numGuests || (rest2.numGuests = 5); // in this way, it wont

// OR assignment operator
//rest1.numGuests ||= 5;
rest2.numGuests ||= 5;
rest2.name &&= `Dick`;
// nullish assignment
rest1.numGuests ??= 10;

// rest1.owner && (rest1.owner = `Anon`);
// rest2.owner && (rest2.owner = `Anon`);
rest1.owner &&= `<ANON>`;
rest2.owner &&= `<ANON>`;
console.log(rest1);
console.log(rest2);

// Coding Challenge 1
/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players.
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players.
So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = [];
const players2 = [];

const [gkBayern, ...fieldPlayersBayern] = game.players[0];
const [gkDortmund, ...fieldPlayersDortmund] = game.players[1];

players1.push(gkBayern);
players1.push(...fieldPlayersBayern);
// players1.push(...game.players[0]);
players2.push(gkDortmund);
players2.push(...fieldPlayersDortmund);
// players2.push(...game.players[1]);

const allPlayers = [...players1, ...players2];
console.log(players1);
console.log(players2);
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

function printGoals(...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    console.log(playerNames[i]);
  }
  console.log(`Num. of goals scored in total: ` + playerNames.length);
}

// console.log(...fieldPlayersBayern);
// printGoals(...fieldPlayersBayern);
// printGoals('Chan', 'Pyae', 'Aung');
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 || console.log('Team 2 is more likely to win');
team1 > team2 || console.log('Team 1 is more likely to win');

// looping arrays using for-of

for (const item of superMenu) console.log(item);

// 2 get index of element
for (const [i, j] of superMenu.entries()) {
  // array which contains index and element
  console.log(`${i + 1}: ${j}`);
}

console.log(...superMenu.entries());

// object literal

// optional chaining
// if we try to access nested objects, `undefined` is given for unexisting keys.
// if keys of unexisting keys are accessed, there is TypeError.
//console.log(restaurant.openingHours.mon.open);

// use if to error check keys b4 which can get inflated
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// only undefined and null will be flagged
console.log(restaurant?.openingHours?.mon?.open);

// objects
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
}

// can access objects with []. if property name, need to use ``
// if accessing with variable, can use [varName] only
console.log(openingHours[`sat`]);

// methods
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
console.log(restaurant.fakeOrder?.(0, 1) ?? `Method does not exist`);

// arrays
const users = [{ name: `Jonas`, email: `jonas@hello.com` }];
console.log(users[0]?.email ?? `fssdfs`);

console.log(`-------Looping Objs--------`);
// looping objects

// LOOPING keys
const openKey = Object.keys(openingHours); // becomes an array
//console.log(openKey);
for (const i of openKey) {
  console.log(i);
}
// LOOPING values
const closeValue = Object.values(openingHours);
for (const i of closeValue) console.log(i);
// LOOPING objects
const entries = Object.entries(openingHours);
console.log(entries);
for (const [i, { open: o, close: c }] of entries) console.log(i, o, c);

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const scoreInEntries = game.scored.entries();
console.log(scoreInEntries);
for (const [i, j] of game.scored.entries()) console.log(`Goal ${i + 1}: ${j}`);

let total = 0;
const oddValues = Object.values(game.odds);
console.log(oddValues);
for (const odd of oddValues) {
  total += odd;
}
const avg = total / oddValues.length;
console.log(avg);

const oddInEntries = Object.entries(game.odds);
for (const [i, j] of oddInEntries) {
  console.log(`Odd of ${i !== 'x' ? `victory ` + game[i] : `draw`}: ${j}`);
}

let scorers = {};
console.log(...game.scored.entries());
// terrible way
// for (const [i, k] of game.scored.entries()) {
//   let goal = 0;

//   for (const j of game.scored) {
//     if (game.scored[i] === j) {
//       goal++;
//     }
//   }
//   scorers[k] = goal;
// }

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

// Sets
// only contains unique values
// iterables - can loop over them.
// no index or order. Cannot retrieve them.
// can put in any iterables to be a set (MapIterator, array, String)

const ordersSet = new Set([1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9, 10]);

console.log(ordersSet.size);
console.log(ordersSet.has(-1));
ordersSet.add(69);
ordersSet.add(69); // only 1 69 will be added

ordersSet.delete(10);
// ordersSet.clear();
console.log(ordersSet);

console.log(new Set(`Jonas`));

// make a unique array by chging to set to array
const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// to know letters included in a string
console.log(new Set('Chan Pyae Aung').size);

//Maps
// diff between map and object is map can have keys with diff data types compared to strings in object

const rest = new Map();
rest.set('name', 'Cheetos');
rest.set(1, `Italy`);
console.log(rest.set(2, `Portugal`));

// since set returns the maps, can chain settings
rest
  .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `We are open :D`)
  .set(false, `We are closed :(`);

console.log(rest.get(`name`));
// same as obj. if key does not exist, undefined
console.log(rest.get(`name12`));

// able to pass in expressions
const time = 21;
const weSee = rest.get(time > rest.get(`open`) && time < rest.get(`close`));
console.log(weSee);

console.log(rest.has(`categories`)); // true or false
rest.delete(2);
console.log(rest);
console.log(rest.size);

const arr2 = [1, 2];
rest.set(arr2, `Test`);
console.log(rest);
console.log(rest.get(arr2));

rest.set(document.querySelector(`h1`), `Heading`);
console.log(rest);

// populating a map w/o set()
const questions = new Map([
  [`question`, `What is the bet programming lang in the world`],
  [1, 'C'],
  [2, 'Java'],
  [3, `JS`],
  [`correct`, 2],
  [true, `Correct`],
  [false, `Try again`],
]);

console.log(questions);
console.log(questions.size);

// Object to maps
console.log(Object.entries(openingHours)); // this produces the same format as making a map above.
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// Iteration
// when looped, each element is an array.
console.log(questions.get(`question`));
for (const [k, v] of questions) {
  if (typeof k === `number`) {
    console.log(`${k} : ${v}`);
  }
}

//const userAnswer = Number(prompt('Answer plz'));
//console.log(questions.get(userAnswer === questions.get(`correct`)));

// map to array
// .keys() and .values() are map's methods
console.log([...questions]);
console.log([...questions.entries()]);
console.log([...questions.keys()]);
console.log([...questions.values()]);

// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log([...new Set(gameEvents.values())]);

gameEvents.delete(64);
console.log(gameEvents);

// let minsInterval = [];
// for (let a = gameEvents.size - 1; a > 0; a--) {
//   minsInterval.push([...gameEvents.keys()][a] - [...gameEvents.keys()][a - 1]);
// }
// console.log(minsInterval);
// let minSubtracted = 0;
// for (const ele of minsInterval) {
//   minSubtracted += ele;
// }
// console.log(minSubtracted / gameEvents.size);

const fullTimeGame = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${
    fullTimeGame / gameEvents.size
  } minutes`,
);

for (const [j, k] of gameEvents) {
  console.log(`[${j <= 45 ? `FIRST` : `SECOND`} HALF] ${j} : ${k}`);
}

// working with strings
// strings are immutable. chges made are actually new strings
// when methods are called, js converts string primitive to string object, perform operations, then reverted back to primitive
// this is called boxing

console.log(typeof new String(`jonas`));
console.log(typeof new String(`jonas`).slice(1)); // even string objects get turned into primitives after operations
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airline = `TAP Air Portugal`;
const plane = `A320`;

console.log(plane[2]);
console.log(plane[3]);
console.log(`B373`[0]);
console.log(airline.length);

console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Portugal`));

// slice method
console.log(airline.slice(4)); // sub-string
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

console.log(airline.slice(-2));
console.log(airline.slice(0, -1));
console.log(airline.slice(-1)); // get the last element

const checkMiddleSeat = function (seat) {
  // this will short circuit the OR operator. since first value can come out as num, it will b truthy
  //console.log((seat.indexOf(`E`) || seat.indexOf(`B`)) != -1);

  // B and E are middle
  if ((seat.indexOf(`B`) != -1 || seat.indexOf(`E`)) != -1) {
    console.log(`This is the middle seat`);
  } else {
    console.log(`You are lucky`);
  }
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`12A`);
checkMiddleSeat(`13C`);
checkMiddleSeat(`15E`);

console.log(airline.toLowerCase());
console.log(`chan`.toUpperCase());

// fix capitalization in name
const passenger = `jOnAs`; // chg to Jonas
console.log(correctCapitalizationOfStrings(passenger));

function correctCapitalizationOfStrings(str) {
  const strCorrect = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return strCorrect;
}

// comparing emails
const email = `hello@chan.com`;
const userInputEmail = `  heLlo@chaN.com \n`;

console.log(userInputEmail.toLowerCase().trim());

// replacing
const priceGB = `289,97E`;
const priceUS = priceGB.replace(`E`, `$`).replace(`,`, `.`);
console.log(priceUS);

const annnouncement = `All passengers come to boarding door 23. Boarding door 23`;

console.log(annnouncement.replace(`door`, `gate`)); // only replaces first occurance

console.log(annnouncement.replace(/door/g, `gate`)); // with regex, it replaces all occurances

// booleans
const plane1 = `Airbus A320neo`;
console.log(plane1.includes(`A320`));
console.log(plane1.includes(`B`)); // cas-sensitive
console.log(plane1.startsWith(`Air`));

if (plane1.startsWith(`Airbus`) && plane1.endsWith(`neo`)) {
  console.log(`Part of th new AIRBUS family`);
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`you are NOT allowed on board`);
  } else {
    console.log(`Welcome Aboard`);
  }
};
checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks AND Camera`);
checkBaggage(`Got some snacks and a gun for protection`);
