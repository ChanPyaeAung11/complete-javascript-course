'use strict';

// function defined in global scope
function calcAge(birthYear) {
  // birthYear is only in current scope and accessible within this scop
  const age = 2037 - birthYear;

  // cuz of var declaration, will be able to access and assign values b4 being declared
  var3 = 'hello';
  console.log(var3);
  var var3;

  let var2;
  console.log(var2, var3); //var3 will retain the value
  console.log(undeclaredVar); //will return RefError not defined

  // console.log(firstName); will find firstName from current scope. if var, undefined. if others, RefError
  // variables with same names can be redeclared in any scope.
  var firstName = 'Sue';

  function printAge() {
    // variables with same names can be redeclared in any scope.
    const firstName = 'Chan';
    console.log(firstName);

    const output = `You are ${firstName} and ${age}, born in ${birthYear}`;

    if (birthYear >= 1981 && birthYear <= 1996) {
      // variables with same names can be redeclared in any scope.
      const firstName = 'Batman';
      // will cling onto the nearest function scope
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // defined function within block scope
      // w/o strict, it will b func scope.
      function add(a, b) {
        // variables with same names can be redeclared in any scope.
        const firstName = 'Sue';
        return a + b;
      }
      console.log(add(2, 3));
    }
    console.log(age);

    console.log(millenial);

    return output;
  }
  console.log(printAge());

  return age;
}

const firstName = 'Jonas';
//calcAge(1991);

// hoisting exploration
console.log(x);
// console.log(y);
// console.log(z);
var x;
let y;
const z = 10;

console.log(y);
console.log(z);

doNth();

console.log(doNth1);
//doNth1(); // TypeError: Not a function || cause: var is still undefined
// console.log(doNth2()); // RefError: Cannot use before initlization
function doNth() {
  console.log('DO NTH FUNCTION');
}

var doNth1 = function (a, b) {
  console.log('do nth 1');
};

const doNth2 = () => {
  console.log('do nth 2');
};

// hoisting's downfall

// value is undefined which is falsy value
if (numOfItems) deleteShoppingCart();
var numOfItems = 10;

function deleteShoppingCart() {
  console.log('all items deleted');
}

// vars declared using var are all in window - global object in js
console.log(x === window.x);
console.log(numOfItems === window.numOfItems);
