// window , DOM , BOM 

// To fetch an element. 

/* 
1. document.getElementbyId('hello');
2. document.getElementsbyClassName('className');

    Using the QuerySelector method. 

    document.querySelector('.className');
    document.querySelector('#IdName');

    document.querySelectorAll('.className');
    document.querySelectorAll('#IdName');

    */


    // Methods to Update Existing Content on a web page 
/*
    1. .innerHtml -> get/set HTML content
    2. .outerHtml
    3. .textContent
    4. .innerText 

    */

    // adding new Element 
    /*

    let newChild = document.createElement('span');
    content.appendChild(newChild);  
    */

    // Creating a Text Node (2 method )
    /*
    Method 1 
    let newPara = document.createElement('p'); // creating a new element
    let textPara = document.createTextNode('I am the text'); // creating a text node 

    myPara = appendChild(textPara);
    content.appendChild(newPara);

    Method 2 
    let myPara = document.createElement('p');
    myPara.textContent = 'I am the text '; 
    content.appendChild(my Para); 
    this would append the node in the last of a tag 
    to place it in begining, middle or last we can use insertadjacentHTML method 

    // Removing the already added element 

    parent = childElement.parent(remove);


    */



    /* Styling(css) page content using js
    can be done by the following properties 
    
    .style()
    .cssText()
    .setAttribute()
    .className()
    .classList()

    */
