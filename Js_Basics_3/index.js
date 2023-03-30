// -------------  Math Object (in built)-----------------------
// console.log('Testing');

// let lastName = 'Babbar';

// let firstName = new String('Love'); 

// let message = 'This is \n my first \n Message ';
// let message2 = `This is
// my first 
// Message`;

// let message3 = `Hello ${lastName}, 
// Thanks for the Oppourtunity
// Thanks
// Regards`;

// console.log(message);
// console.log(message2);
// console.log(message3);
// let words = message.split(' ');

// console.log(words);

// --------------------------- Date and Time (inbuilt object) -----------------

// let date = new Date();

// console.log(date);

// let date2 = new Date('June 20 1998 07:55');

// console.log(date2);

// let date3 = new Date();


// ------------------------   ARRAYS  --------------------------

//  creating array 

// let numbers = [1, 3, 5, 2, 7, 11, 9, 'hello', 'c'];
// console.log(numbers);

// inserting elements in the array 
// at end -> push()
// at begining -> unshift()
// in between -> splice(element, no. of element you want to remove)

// Searching in array
// console.log(numbers.indexOf(5));

// we want to check if a number exist in an array 

// if(numbers.indexOf(10) != -1){
//     console.log('Present');
// }
// else {
//     console.log('Not Present');
// }


// working on objects in array 

// let courses = [
//     {no: 1, naam: 'Priyanshu'},
//     {no: 2, naam: 'Ayush'}
// ];

// console.log(courses);


// let course = courses.find(function(courses) {
//      return courses.naam == 'Priyanshu';
// })

// let course2 = courses.find(function(courses){
//     return courses.no == 1;
// })

// let course3 = courses.find(course => course.naam == 'Kilvish');

// console.log(course);


// Removing element from an array. 
// let num = [1, 2, 3, 4, 5, 6, 7];
// let num2 = num;

// to remove last element
// num.pop();
// console.log(num); 

// to remove first element 
// num.shift();
// console.log(num);

// to remove from middle 
// num.splice(2, 1);
// console.log(num);

// emptying an array 
// num = [];
// num.length = 0;

// console.log(num);
// console.log(num2);


// --------------------- Combining and Slicing Arrays ---------------------------

let first = [1 , 2, 3];
let second = [4 , 5, 6];

let combined = first.concat(second);
console.log(combined);

// slicing
let sliced = combined.slice(2, 3);
console.log(sliced);


