// console.log('Babbar Here');

// setTimeout(function() {
//     console.log('third');
// },3000);

// //  example of synchornous code 
// function sync() {
//     console.log('first');
// }

// sync();
// console.log('second');

/* 
API = Application programming interface 

Promise -> It is used for parallel execution of programs in background in JS
*/

// creating a promise 

// let meraPromise = new Promise(function(resolve, reject) {
//     console.log('I am inside Promise');
//     resolve(1998);
// })

// let meraPromise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside Promise 1');
//     }, 5000);

//     // resolve(1998);
//     // reject(new Error('Bhaisahab Error aaye hai'))
// })

// let meraPromise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside Promise 2');
//     }, 3000);

//     // resolve(1998);
//     // reject(new Error('Bhaisahab Error aaye hai'))
// })

// console.log('Pehla')
// console.log('Pehla')
// console.log('dusra');

// two things can happen in proise either the promise is fullfilled or it is rejected 

// when the promise is fullfilled we can use then() to handle the value which is returned by promise 

// when the promise is rejected then catch() will catch the error and handle it

// let meraPromise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside Promise 1');
//     }, 5000);

//     // resolve(1998);
//     reject(new Error('Bhaisahab Error aaye hai'))
// });

// meraPromise1.then((value) => {console.log(value)});
// meraPromise1.catch((error) => {console.log('received an error')});

// console.log('Pehla')


// working of multiple promises

// let vaada1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('setTimeout1 started');
//     }, 2000);
//     resolve(true);
// })

// let output = vaada1.then(() => {
//     let vaada2 = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log('setTimeout2 started');
//         }, 3000)
//         resolve("vaada 2 resolved");
//     })
//     return vaada2;
// })

// output.then((value) => console.log(value));

// if we are working on 50  promises then will we use then() 50 times ? no
// thre is a special syntax which is async await used to work with promises

//async function always return promise object. 


// async function abcd() {
//     return 7;
// }

// let ans = abcd();
// console.log(ans);

// async function utility() {

// let delhiMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Delhi me bahot garmi hai");
//     }, 1000)
// });

// let hydMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hyderabad is cool");
//     }, 5000)
// });

// let dM = delhiMausam;
// let hM = hydMausam;

// return [dM, hM];


// }

// async function utility() {

//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json();
//     console.log(output);

// }

// utility();

// async function helper () {

// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// };


// let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);

// let response = content.json();
// return response;

// }



// closures in JS
function init () {

    var name = "Mozilla"; // name is a local variable created by init

    function displayName() {
        // displayName() is the inner function, that forms the closures
        console.log(name); // use variables declared in the parent function
    }

    displayName();

}

init();