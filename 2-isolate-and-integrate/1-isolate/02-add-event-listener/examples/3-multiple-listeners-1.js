'use strict';

/* Multiple Listeners: different handlers

  you can add more than one event listener to an element
  each one can call a different handler function

*/

// create a new button
const buttonEl = document.createElement('button');

// write two different handlers
const firstHandler = () => {
  alert('first handler');
};

const secondHandler = () => {
  alert('second handler');
};

// add a click listener to call the first handler
buttonEl.addEventListener('click', firstHandler);//successfully added
// some browsers will not let you add:
//  the same handler
//  with the same event
//  to the same button
// more than once
buttonEl.addEventListener('click', firstHandler);//already added the same handler, so this one doesn't work
buttonEl.addEventListener('click', firstHandler);//already added the same handler, so this one doesn't work
buttonEl.addEventListener('click', firstHandler);//already added the same handler, so this one doesn't work

// add a different handler for the same event
buttonEl.addEventListener('click', secondHandler);//successfully added

// .onclick is still empty!
console.log(buttonEl.nodeName, buttonEl);

// click the button once
//  how many times will you see an alert?
const clickEvent1 = new Event('click');//add the click event to the buttonEl button, which means add the button
buttonEl.dispatchEvent(clickEvent1);

// click the button again
//  many times will you see an alert?
const clickEvent2 = new Event('click');//click the buttonEl button
buttonEl.dispatchEvent(clickEvent2);
