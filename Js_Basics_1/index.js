console.log('Namaste Duniya version 2.1.2'); // to print something on console

// This line is commented and will not be read or executed

// To create a variable we use let keyword

let a = 6;
let firstName = 'Priyanshu';

console.log(a);
console.log(firstName);
// there is another keyword to declare a variable it is the var keyword the difference between var and js is of scope let acts as local variable and var acts as global variable. now we do not use var keyword . 
var num = 5;
var num = 7; // var can be recreated and let cannot it can only be redefined or reinitialized .

console.log(num);

// To declare a constant value that cannot be changed throughout the program we use const keyword . 

const x = 27;
// x = 88; this will give the error in console (browser) 

console.log(x); 

// Variable naming convention
// 1 -> Cannot be a reserved keyword
// 2 -> Should be meaningful
// 3 -> Cannot start with a number
// 4 -> Should not contain space or hypen (-)
// 4 -> Use cammel case while declaring a variable ex. nameOfStudent , priyanshuYadav, anujKumarGupta


// ---------------  Data Types --------------------
/*
    1 - Primitive Data Types 
 1.1 - String 
 1.2 - Number
 1.3 - Boolean
 1.4- Undefined
 1.5 - Null

 2 - Reference Types 
 2.1 - Objects
 2.2 - Arrays
 2.3 - Functions
*/


// to fint out the power of a numbr there is a different operator in js
// x to the power y can be calculated as x ** y

let num3 = 2;
let num4 = 3;

console.log(num3 ** num4);

// Ternary Operator
let age = 17;
let voteStatus = (age >= 18) ? 'You can vote' : 'You cannot vote';

console.log(voteStatus);


//  loops in Js
// 1 for loop 

for(let i = 1; i <= 10; i++) {
    console.log('2', 'x', i ,'=', 2*i);
}
