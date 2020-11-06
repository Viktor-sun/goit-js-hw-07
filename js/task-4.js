const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const spanRef = document.querySelector('#counter > #value');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

let counterValue = 0;

function decrement() {
  spanRef.textContent = counterValue -= 1;
}

function increment() {
  spanRef.textContent = counterValue += 1;
}
