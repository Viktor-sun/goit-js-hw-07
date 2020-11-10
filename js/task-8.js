const inputRef = document.querySelector('#controls > input');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.getElementById('boxes');

inputRef.addEventListener('keydown', onKeyDown);
btnRenderRef.addEventListener('click', () => createBoxes(inputRef.value));
btnDestroyRef.addEventListener('click', destroyBoxes);

function onKeyDown(event) {
  if (event.code === 'Enter') {
    createBoxes(inputRef.value);
  }
}

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

// 1 вариант
function destroyBoxes() {
  const divs = boxesRef.children;
  [...divs].forEach(element => element.remove());
}

// 2 вариант
// function destroyBoxes() {
//   boxesRef.innerHTML = '';
// }
