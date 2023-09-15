/*
Reflow , repaint 
document fragment:- lightweight document object in this there is no reflow and repaint which makes it efficient

*/

// adding 100 para 
// code 1
// const t1 = performance.now();

// for(let i = 1; i <= 100; i++) {

//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     document.body.appendChild(newElement);
// }

// const t2 = performance.now();

// console.log("this took " + (t2 - t1) + " ms");

// // optimising a bit 
// // code 2
// let t3 = performance.now();

// let myDiv = document.createElement('div');

// for(i = 1; i <= 100; i++) {

//     let element = document.createElement('p');
//     element.textContent = 'This is Para ' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// let t4 = performance.now();

// console.log("this took " + (t4 - t3) + " ms");

// if we need a standard way to measure how long the code takes to run so that we can decide which is a better or optimized . 
// so the standard way to measure this is a method 
// performance.now(); this provied a time stamp 


// using fragment 
// let fragment = document.createDocumentFragment();


// for(let i = 1; i <= 100; i++) {

//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     fragment.body.appendChild(newElement);
// }
// document.body.appendChild(fragment);


// SINGLE THREADING :-  JavaScript is a single threaded language which means it executes one command at a time 

function addPara() {
    let para = document.createElement('p');
    para.textContent = 'JS is single Threaded language';
    document.body.appendChild(para);
}

function appendNewMessage() {
    let para = document.createElement('p');
     para.textContent = 'kya haal chaal ';
     document.body.appendChild(para);
}

addPara();
appendNewMessage();
