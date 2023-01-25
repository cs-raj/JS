/*
 * Document is object representation of Markup
 * We change the Object using javaScript
 * DOM can be anything that I want
 * We can also use python to manipulate the html object once converted to document
 * Create Element
 * Update Styles
 * Select element
 * Link Files
 * There are multiple ways of selecting an element
 * Inner html will give all the child elment within that html tag
 * Inner text will give the text
 * Try to use inner text of the page rahter than innerHTMl as there you are changing the structure of the page
 * Whenvever attaching an event handler in Js just pass the reference do not call the function
 * 
*/

let count = 0;

const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
let countValue = document.getElementById("countValue");
function incrementCount(){
    count  = count + 1;
    updateCount();
}

function decrementCount(){
    count  = count - 1;
    updateCount();
}

function updateCount(){
    countValue.innerText = `count : ${count}`;
}

decrementButton.onclick = decrementCount;

incrementButton.addEventListener('click',incrementCount);
//Attaching fucntion to button
//Use onClick
//defer waits till body completely loads
//If we don't use defer we will have to put script after body
