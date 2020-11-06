const inputRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener('change', onInputChange);

function onInputChange(event) {
  const str = event.target.value;
  if (str.length === 6) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
