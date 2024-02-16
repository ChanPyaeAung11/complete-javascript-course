'use strict';

// function defined in global scope
function calcAge(birthYear) {
  // birthYear is only in current scope and accessible within this scop
  const age = 2037 - birthYear;

  console.log(firstName);
  // variables with same names can be redeclared in any scope.
  const firstName = 'Sue';

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
calcAge(1991);
