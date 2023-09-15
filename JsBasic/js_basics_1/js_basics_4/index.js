//  Functions
// -> Syntax 
// function funciton_Name() {

//     body
// }

console.log('Kya haal bro')

// creating function
// if we call cun here then also the function will run this conept is known as hoisting because when the program starts the javascript engine move the function to the top and the program becomes runable 
// this concept is known is hoisting. IT is done automatically by JS Engine 
function run() {
    console.log('Running Function run')
}

// run();

// Named function assingment
let stand = function walk() {
    console.log('Walking');
}

stand();

// Anonymus function assingment
let stand2 = function() {
    console.log('Walking');
}

let jump = stand;

stand2();

// rest operator  -> ... 
function sum(... args){
    console.log(args);
}

sum(1, 2, 3, 4, 5, 6);


// Default parameters in functions 

function interest(p , r = 5, y) { // r = 5 is the default parameter in this function 
    return p * r * y / 100 ;
}

console.log(interest(1000, 10, 5));

// let person = {
//     fName: 'love',
//     lName: 'Babbar',
//     get fullName() {
//         return `${person.fName}   ${person.lName}`;
//     },
//     set fullName(value) {
//         if(typeof value !== String) {
//             throw new Error("You have not sent a String");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// console.log(person);


// issue -> read only 
// person.fullName = true;
// console.log(person.fullName);


//   -------------- Try and Catch block-----------------------

// try {
//     person.fullName = 1;
// }
// catch(e) {
//     alert(e);
//  }
// console.log(person.fullName);

// ------------------  Reducing an Array -----------------------

let arr = [1, 2, 3, 4];
let total = 0;

for(let value of arr) {
    total = total + value;
}

console.log(total);


// Reducing the array 

let totalsum = arr.reduce(accumulator, currentValue => accumulator + currentValue,  0);
console.log(totalsum);