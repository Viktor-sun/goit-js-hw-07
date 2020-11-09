const inputRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener('change', onInputChange);

function onInputChange(event) {
  const str = event.target.value;
  const inputLength = Number(event.target.dataset.length);
  if (str.length === inputLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
