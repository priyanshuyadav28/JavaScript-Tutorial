console.log('lets start');

// object creation 
let rectangle = {
    length: 1, 
    breadth: 2, 

    draw : function(){
        console.log('draw');
    }
}; 
// There are two ways to create objects 
    // 1. Factory Function. 
    // 2. Constructor funcction 

// 1. factory function -> to create objects

// function createRectangle(length, breadth) {

//     return rectangle = {
//         // length: length, 
//         // breadth: breadth, 
//         // OR
//         length, 
//         breadth,
    
//         draw : function(){
//             console.log('draw');
//         }
//     };
// }

// let rectangleObj1 = createRectangle(5, 4);
// let rectangle2 = createRectangle(2, 3);
// let rectangle3 = createRectangle(7, 9);


// 2. Constructor function --> Pascal notation(first letter of every word in capital) of writing the name of constructor function 

function Rectangle(len, bre) {
    // this.length = 1;
    // this.breadth = 2;
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing')
    }
}

// object creation using constructor
let rectangleObject = new Rectangle(1, 8);

rectangleObject.color = 'yellow';
console.log(rectangleObject); // creating new property in the same already created object 

delete rectangleObject.color; // deleting a property after creating it . 
console.log(rectangleObject);


// ------------------ Constructor Property ---------------- 

let Rectangle1 = new Function(
'length', 'breadth',
`this.length = length;
this.breadth = breadth;
this.draw = function() {
console.log('drawing');
}`);

// object creation using Rectangle1
let rect = new Rectangle1(2, 3);
console.log(rect);

// NOTE: we can acces some properties and methods on functions also by using the dot (.) operator this means those functions are also objects becuase . operator works on object  ex. 
// Rectangle1.length; 

// primitives are copied by their values whereas 
// References are copied by their memory address ex. 

// let a = 10;
// let b = a;
// a++;
// console.log(a); // output = 11
// console.log(b); // output = 10

// but 
// let a = {value: 10};
// let b = a;

// a.value++;
// console.log(a.value); // output 11 
// console.log(b.value); // output 11 
// because when we assigned b = a the the address of a is passed to the variable b and any change made by b or a leads to reflect those change in both a and b because both are pointing to the same memory location . 


// ------------ PASS BY value (copy of the value in the function)-----------------
let a = 10;
function inc(a) {
    a++;
}
inc(a);
console.log(a);

// ------------------- PASS BY REFERENCE (memory address)---------------------
let b = {value: 10};

function inc(b) {
   b.value++;
}

inc(b);
console.log(b);


// ------------------ Iterating through Objects-----------------------
//  1. for in loop 
//  2. for-of loop 

let rectangle3 = {
    length: 2,
    breadth: 4,
};

// 1. for in loop 
// for(let key in rectangle3) {
//     console.log(key, rectangle3[key]);
// }

// // for-of loop 
// // this loop can be applied only on iterables ex. arrays maps
// for(let key of Objects.key(rectangle3)){
//     console.log(key);
// }

// for(let key of Objects.entries(rectangle3)){
//     console.log(key);
// }


if('color' in rectangle3) {
    console.log('Present');
} 
else {
    console.log('absent');
}

// -------------------------- Object Cloning -----------------------------
// objects can be cloned via three ways -->
//  1. Iteration 
// 2. Assign
// 3. Spread

// Iteration
let c = {value: 2110};
let d = {};

// for(let key in c){
//     d[key] = c[key];
// }

// console.log(d);

// Assign
// e = Object.assign({}, c);
// console.log(e)

// Spread
let dest = {...c};
console.log(dest);

// --------------------------- Garbage Collection ----------------------




