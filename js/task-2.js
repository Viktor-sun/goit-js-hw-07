const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeLiElement = text => {
  const liRef = document.createElement('li');
  liRef.textContent = text;
  return liRef;
};

const result = ingredients.map(element => makeLiElement(element));

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...result);
console.log(ingredientsRef);
