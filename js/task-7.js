const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.value = 5;
textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', onInputSizeControl);

function onInputSizeControl(event) {
  const value = event.target.value;
  textRef.style.fontSize = `${value}px`;
}
