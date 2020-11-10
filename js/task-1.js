const categoriesItemsRef = document.querySelectorAll('#categories > .item');

const countCategories = references =>
  `В списке ${[...references].length} категории.`;

console.log(countCategories(categoriesItemsRef));

const getTitleAndCountCategories = categories => {
  let result = '';
  categories.forEach(item => {
    const title = item.firstElementChild.textContent;
    const value = item.lastElementChild.children.length;

    result += `Категория: ${title}\nКоличество элементов: ${value}\n`;
  });
  return result;
};

console.log(getTitleAndCountCategories(categoriesItemsRef));
