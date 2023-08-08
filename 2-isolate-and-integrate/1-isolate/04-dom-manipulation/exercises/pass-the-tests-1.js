'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
const navEl = document.createElement('nav');
const pEl = divEl.querySelector('p');

divEl.replaceChild(navEl, pEl);

//  insert something before the <section>
const h2El = document.createElement('h2');
const sectionEl = divEl.querySelector('section');
divEl.insertBefore(h2El, sectionEl);


//  remove the <h1>
divEl.querySelector('h1').remove();

//  append something to the end
const pCreate = document.createElement('p');
divEl.append(pCreate);




// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P', 'Test: 4th child');
