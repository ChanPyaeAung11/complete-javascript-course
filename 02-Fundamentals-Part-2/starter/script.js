
// need to be first line of code. if other codes are above, this will not activate. can also be on functions and blocks.
'use strict'; 
// not allowed to do some things and if there is error not highlighted, will be visibile. thse make code secure by not allowing bugs to program

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;

if(hasDriversLicense) console.log("I can drive")

function logger(){
    console.log("My name is Chan");
}

function funcTest(hello, there){
    console.log("Cool", hello, "Shit", there);
    console.log(1980 - hello); // pukes out NaN
    return "something";
}

console.log(logger()); // will print out undefined due to no value returning
funcTest(); // will print out undefined as i dont put any arguments
console.log(funcTest("hello", "there"));
funcTest("hello", "there", "general", "kenobi"); // extra parameters will not used.

// function delcration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

// anonymous function. this function returns value. so, function expression
const calcAge2 = function (birthYear){
return 2037 - birthYear;
}

console.log(calcAge1(), calcAge2())
