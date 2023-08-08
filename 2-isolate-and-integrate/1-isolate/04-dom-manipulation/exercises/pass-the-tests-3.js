'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  you want to create a 2x2 table with a, b, c, d in the squares
for(let i = 0; i <=1;i++){
  for(let i = 0; i <=1;i++){
    let newTd= document.createElement("td");
    divEl.querySelectorAll("tr")[i].append(newTd);
  }
}

let alphabet = ["a", "b", "c", "d"];
for(let r = 0; r <=3;r++){
  //console.log(divEl.querySelectorAll("td")[r].innerHTML);
  divEl.querySelectorAll("td")[r].innerHTML = alphabet[r];
}
console.log(divEl);
// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
