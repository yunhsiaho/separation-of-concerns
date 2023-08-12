'use strict';

const actual = (linksData) => {
  const divEl = document.createElement('div');

  const h3El = document.createElement('h3');
  h3El.textContent = linksData.topic;
  divEl.appendChild(h3El);

  const entryToLi = (entry) => {
    const liEl = document.createElement('li');
    const aEl = document.createElement('a');
    aEl.innerHTML = entry[topic];
    aEl.href = entry[links];
    aEl.target = '_blank';
    liEl.appendChild(aEl);
    return liEl;
  };

  const appendLiToList = (listEl, nextLi) => {
    listEl.appendChild(nextLi);
    return listEl;
  };

  const ulEl = Object._(linksData._)._(_).appendLiToList(_, document.createElement('li'));
  
  divEl.appendChild(entryToLi(linksData.links));

  return divEl;
};
