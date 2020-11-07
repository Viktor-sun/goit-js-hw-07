const inputRef = document.querySelector('#controls > input');
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

btnRender.addEventListener('click', () => createBoxes(inputRef.value));
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const arr = [];
  let count = 20;
  for (let i = 0; i < amount; i += 1) {
    const divRef = document.createElement('div');
    count += 10;
    divRef.style =
      'background-color: ' +
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    divRef.style.width = `${count}px`;
    divRef.style.height = `${count}px`;
    arr.push(divRef);
  }
  boxesRef.append(...arr);
}

function destroyBoxes() {
  const divs = boxesRef.children;
  [...divs].forEach(element => element.remove());
}
