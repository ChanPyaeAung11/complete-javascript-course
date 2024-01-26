
// // need to be first line of code. if other codes are above, this will not activate. can also be on functions and blocks.
// 'use strict'; 
// // not allowed to do some things and if there is error not highlighted, will be visibile. thse make code secure by not allowing bugs to program

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;

// if(hasDriversLicense) console.log("I can drive")

// function logger(){
//     console.log("My name is Chan");
// }

// function funcTest(hello, there){
//     console.log("Cool", hello, "Shit", there);  
//     console.log(1980 - hello); // pukes out NaN
//     return "something";
// }

// console.log(logger()); // will print out undefined due to no value returning
// funcTest(); // will print out undefined as i dont put any arguments
// console.log(funcTest("hello", "there"));
// funcTest("hello", "there", "general", "kenobi"); // extra parameters will not used.

// function delcrations can be called before they are defined.
console.log(calcAge1(2001));
// function delcration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

// // anonymous function. this function returns value. so, function expression
// const calcAge2 = function (birthYear){
// return 2037 - birthYear;
// }

// console.log(calcAge1(2001), calcAge2(2001))

// // arrow function expression
// const calcAge3 = birthYear => 2027 - birthYear

// console.log(calcAge3(2001))

// const yearsUntilRetirement = (birthYear, firstName) =>{ // if multiple paramters, () neeeded.
//     const retirement = 65 - calcAge3(birthYear);
//     return `${firstName} retires in ${retirement > 0 ? retirement : -1} years.` // if multiple lines of code, return required.
// }

// console.log(yearsUntilRetirement(2001, `Chan`));

const years = new Array(1991, 1992, 1993, 1994);
// console.log(years);
// console.log(years[1]);

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends.length);
// console.log(friends[friends.length-1]);

// // just assigned a new value inside an array with const declaration.
// // only primitive values with const are immutable.
// friends[2] = 'Jay';
// console.log(friends);

// // raises an error cuz reassigning a const variable.
friends = ['Lee', 'Loe', 'May'];

// arrays can have diff value types unlike in java lol
const jonas = ['jonas', 'nick', 1990 - 2001, true, null, friends];
// console.log(jonas);

// console.log(calcAge1(years[0]));
// console.log(calcAge2(years[1]));
// console.log(calcAge3(years[years.length-1]));

// const dynamicArr =[calcAge1(years[0]), calcAge2(years[1]), calcAge3(years[years.length-1])];
// console.log(dynamicArr);

// console.log(friends.push('Leno')); 

// friends.unshift('John');
// console.log(friends.pop());
// console.log(friends.shift());
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'))

// console.log(friends.includes('Bob'));

// // Objects

const chan ={
    firstName : "Chan", 
    lastName : "Aung",
    age : calcAge1(2001),
    birthYear : 2001,
    arrayEmbedded : `${jonas}`,
    job: "teacher",
    friends : friends,
    hasDriversLicense : false,
    // function expressions can be put inside objects
    // they will not do anything unless explicitly called
    // w/o this keyword, need to pass in the value when called
    // calcAge : function(birthYear){
    //     return 2037 - birthYear
    // }
    // calcAge : function(){
    //     return 2037 - this.birthYear
    // }

    calcAge : function(){
        this.age = 2037 - this.birthYear; // creating property for an object from function
        return this.age;
    }
}

// console.log(chan);
// console.log(chan.lastName);
// console.log(chan['firstName']); // perform string concat with this

// const nameKey ="Name";
// console.log(chan['first' + nameKey]);
// console.log(chan['last' + nameKey]);

// // if properties of object that do not exist are accessed, get undefined.

// const interestedIn = prompt('What do you want to know about Chan?');
// if(chan[interestedIn]){
//     console.log(chan[interestedIn]);
// }else{
//     console.log("Wrong request! Choose between firstName, lastName, age, job and friends")
// }

// chan.location = "Singapore";
// chan['instagram'] = "chanpyae11";

// console.log(chan);

// console.log(`${chan.firstName} has ${chan.friends.length} friends, and his best friend is called ${chan.friends[0]}`)

// console.log(chan.calcAge());
// console.log(chan['calcAge']());

// console.log(`${chan.firstName} is a ${chan.calcAge()}-year old ${chan[`job`]} and he has ${chan.hasDriversLicense ? "has" : "does not have"} driver's license.`)


// /* Write your code below. Good luck! 🙂 */

// const mark = {
//     fullName : "Mark Miller",
//     mass : 78,
//     height : 1.69,
//     calcBMI : function(){
//         this.bmi = this.mass/this.height ** 2 ;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName : "John Smith",
//     mass : 92,
//     height : 1.95,
//         calcBMI : function(){
//         this.bmi = this.mass/(this.height ** 2);
//         return this.bmi;
//     }
// }

// console.log(mark.calcBMI() > john.calcBMI() ? `${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})!` : 
// `${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})!`);

// for loop

const types = [];
const ages =[];
for(let i = 1; i <= 10; i++){
 console.log(`Lifting weights repetition ${i}`);   
}

for(let i= 0; i <= years.length-1 ; i++){
    console.log(years[i], typeof years[i]);
    types.push(typeof years[i]);
}
years.forEach(year => ages.push(2024 - year));


console.log(types);
console.log(ages);

// continue and break
const mixedArray = ["ABC", null, 12.3, true, jonas, NaN, "XYZ"]
mixedArray.forEach(element => console.log(element));

for(let i = 0; i < mixedArray.length; i++){
    if(typeof mixedArray[i] !== 'string') continue; // continue will exit current loop and check the conditions
    console.log(mixedArray[i], typeof mixedArray[i]);
}

// break terminates the whole loop
for(let i = 0; i < mixedArray.length; i++){
    if(mixedArray[i] === 12.3) break;
    console.log(mixedArray[i], typeof mixedArray[i]);
}
console.log("TENET Loop")
for(let i = mixedArray.length - 1; i >= 0; i--){
    console.log(mixedArray[i], typeof mixedArray[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`------ Starting exercise ${exercise}`);
    
    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}:Lifting Weight Peptition ${rep}`);
    }
}

// while loop
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice ===6 ) console.log("Loop is about to end...")
}