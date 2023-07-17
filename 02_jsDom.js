/*
eventTarge <---- node <---- Element 

eventTarget has 3 methods : 

1- addEventListener()
2- removeEventListener()
3- dispatch    

1 -> addEventListener()
<event.target>.addEventListener(<event-to-listen-for, <function-to-run-when-Event-happened)

eventTarget = component to add event upon 
eventType = click, double click, scroll
function = define what to do when event happens 



*/

// let content = document.querySelector('h1');

// content.addEventListener('click', function(){
//     content.style.background = 'aqua';
// });

// content.addEventListener('dblclick', function(){
//     content.style.background = 'none';
// });

// let content2 = document.querySelector('body');

// content2.addEventListener('click', function(){
//     content2.style.background = 'orange';
// });


// function eventFunction() {
//     console.log('I have clicked on the document');
// }

// document.addEventListener('click', eventFunction);

// functions are treated as object in js so when we use removeEventListener then we have to pass the same function in the argumnet of removeEventListener and we can do that by defining the functoin at one place at calling it directly in the argument thats why this removeeventlistener will not print anything when clicked becaue the event will be removed 
// document.removeEventListener('click', eventFunction);

// but if we pass the function like this , this will not be invoked as a result it will print the given output 
// document.removeEventListener('click', function eventFunction() {
//     console.log('I have clicked on the document');
// });


// conditions for removeEventListener to work 
// 1. same Target
// same event type 
// same function 


// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event){
//     console.log(event);
// });

//      The default action - for ex. the defalut actin of an achor tag is to take to the new web page 
//  in order to prevent this default action of various tags we can use preventDefalut() method in js 

// let links = document.querySelectorAll('a');
// let firstLink = links[0];

// firstLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Maza aaya');
// });


let myDiv = document.createElement('div');


function paraStatus(event){
    console.log('Para' + event.taret.textContent);
}

myDiv.addEventListener('click', paraStatus);

for(let i = 1; i < 100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    newElement.addEventListener('click', function(){
        // console.log('I have clicked on para' + " "+ i)
        if(event.target.nodeName === 'SPAN') {
            console.log('span pr click kia hai ' + event.target.textContent);
        }
    });

    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);