const categoriesItemsRef = document.querySelectorAll('#categories > .item');

const countCategories = references => {
  const result = [...references].length;
  return `В списке ${result} категории.`;
};

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
