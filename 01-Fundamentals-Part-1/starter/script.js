let js = "amazing";
//if (js === "amazing") alert("JS is fUN!");

console.log(40 + 2 + 23 - 10);

// let is block scoped
const country = 'Myanmar',
continent = 'Asia';
let population = 35;
console.log("I live in " + country + " which is in " + continent + " continent " + "with a population of " + population );

let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);

javaScriptIsFun = "FK YES";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);

year = s;
console.log(year);
console.log(typeof year); // this will say object which is wrong. but this error is not fixed.
// var is function scoped
// use only when need to support older browsers
var job = "programmer";
job = "teacher";

// this will make variable global
lastName = "Dick";

// math operators
const now = 2024;
const myAge = now - 2001;
const herAge = now - 1998;
console.log(myAge, herAge);

console.log(myAge * 2, herAge / 10, 2**3);

// assignment operators
let x = 10 + 5;
x += 10;
x *= 2;
x /= 2;
console.log(x++);
console.log(--x);
console.log(x %= 5);

// comparision operators
console.log(myAge < herAge);
console.log(myAge <= 18);

const isFullAge = myAge >= 18
console.log(2024 - 2001 > 2024 - 1998);

const isIsLand = false;
const language = "Burmese";

// when logging, if there string and +, all other data types will be turned into string. if ',', all other data types will be printed as own types
console.log("I live in" , country ,"which is in", continent, " continent " + "with a population of " + population , language  + isIsLand );
console.log(population + isIsLand + country + null);
console.log(population,isIsLand);

let halfPopulatin = population / 2;
console.log(population += 1);
let finLandPopulation = 6;
let avgPopultionInACountry = 33;
console.log("My country has more population than average"+ (population > avgPopultionInACountry));
console.log(country, "is in", continent, "and, its", population, "million people speak", language);

// template literals
let normalString = "I'm " + js + "and I have been for " + (30-15) + "years";

let tempString = `I'm ${js} and I have been for ${30 - 15} years`;
console.log(tempString)

console.log('Multi \n\
Line \n\
String using " \' ');

console.log(`Multi
Line
String Using template literal`)

// if statements

const age = 15;
if(age >= 18){
    console.log("You can start driving license");
}else{
    console.log(`Wait another ${18 - age} years`);
}

const birthYear = 2002;
if(birthYear <= 2001){
    var century = 20;
}else{
    var century = 21;
}
console.log(century);

// in js, NaN is not a number. It is still a number in type but it is invalid. It happens when a number operation does not produce new number.
console.log(null+ 10);

// type coersion - implictly
const inputYear = "1990";
console.log(inputYear + 10) // + coersed data into string
console.log(inputYear - 10) // other math operators did the opposite
console.log(inputYear * 10)
console.log(inputYear / 10)
console.log(inputYear % 10)
console.log(inputYear ** 10)

console.log("10" + 10 - 10);
console.log(2+3+4+"5") // this becomes string

// type conversion - converting data explicitly
console.log(Number(inputYear));
console.log(String(10));

// falsy values: 0, '', undefined, null, NaN
// for boolean, conversion & coersion will be based on falsy values. apart from these values, otehrs will be true
console.log(Boolean(0));
console.log(Boolean(10));
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));

let money;
if(money){ // number coerced to Boolean in logical context
console.log("Dont spend it all");
}else{
    console.log("Poor bitch");
}
// + sign makes the boolean or number into string
// other signs reverses this
console.log(true + 1); // since there is only number, bool coerced to num
console.log(true + "1"); // true becomes String with +
console.log(true - "3"); // true becomes num due to -
console.log(null + 5); // null = 0
console.log(1 - "Dfssda")

// == loose operator - type coersion performed
// === strict operator - no type coersion 
// better to use strict. chg the type b4 doing comparison

const age1 = 18;
if(age1 === 18) console.log("U r an adult");

if(age1 == '18') console.log("U r an adult");

const favourite = Number(prompt("What's your fav num?"));
console.log(typeof favourite)
if (favourite === 23) {
    console.log("Cool" + favourite)
} else if(favourite === 7){
    console.log("same", favourite)
} else{
    console.log("This aint 7 or 23, boi")
}
// just like equality, strict and loose, !== and !=
if(favourite !== 23)console.log("Why not 23?")

// basic logical operatoers AND,OR, NOT
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense && hasGoodVision);
console.log(!hasDriversLicense); // ! chges the value temporarily
console.log(hasDriversLicense);

const isTired = true;
if(hasDriversLicense && hasGoodVision && !isTired){console.log("Allowed to drive")}
else{console.log("Dont drive.")}

// switch statement
// same as java. without break; it will continue execute all other cases even if case dont match
// default will hit if no other cases match.
// executed wth strict equality
const day = "wedsdfsnesday";
switch(day){
    case("monday"): 
        console.log("It is Monday");
        break;
    case("tuesday"):
        console.log("It is Tuesday");
        break;
    case("wednesday"):break;
    case("thursday"):
        console.log("It is wednesay or thursday");
        break;
    case("friday"):
        console.log("It is TGIF");
        break;
    case("saturday"):
    case("sunday"):
    console.log("It is da weekend");break;
    default:
        console.log("Not a valid day");
    }


// expression - code that produce value
// template literals only allows expressions. no statements
3+4
1991
true && false && !true
// statement - code that do not procude value
// if, switch, var declaration/assignment do not produce value.



// using ternary operator, only 1 line instead of if-else block
const drink = age >= 18 ? "wine" : "water"
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = "wine";
}else{
    drink2 = "water";
}
console.log(drink2);
// can use ternary op in template litreal unlike if statement

console.log(`I want to drink ${age >= 18 ? "wine" : "water"}`);
