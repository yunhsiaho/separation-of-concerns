//debugger; // once when the program is initialized

const state = {//NOTE create an object
  currentNumber: 0,
  allNumbers: [],
};

// ==== the user can add a new number to state ====

document.getElementById('next-number').addEventListener('change', (event) => {
  //debugger; // each time the user changes the 'next-number' input

  // --- read the user's input ---
  const inputValue = event.target.value; //NOTE here the target means the target of which the event occurs
  const nextNumber = Number(inputValue);//NOTE change the input value to a number

  // --- update state ---
  state.allNumbers.push(nextNumber);//NOTE  push the new number to the array in state object
  state.currentNumber = state.allNumbers.at(-1);//NOTE current number is the last element in the allNumbers array

  // --- update UI ---

  // create new HTML string
  const liString = `<li class="number-item">${state.currentNumber}</li>`;

  // add the new item to the history
  const backwardsContainer = document.getElementById('number-history');//NOTE id of the ui tag
  backwardsContainer.innerHTML = liString + backwardsContainer.innerHTML;
});

// ==== the user can change the input's value ====

document
  .getElementById('number-history')
  .addEventListener('mouseover', (event) => {
    //debugger; // each time the user moves the mouse over 'number-history'

    // only do something if the user is hovering over an LI child
    if (event.target.nodeName !== 'LI') {
      return;
    }

    // read the user's input
    const targetText = event.target.innerText;//NOTE the number mouse hover through
    const userNumber = Number(targetText);//NOTE change the value into number

    // update state
    state.currentNumber = userNumber;

    // update the UI
    document.getElementById('next-number').value = state.currentNumber;//NOTE change the  number in the input box to the hovered number
  });
