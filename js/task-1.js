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
    const value = item.lastElementChild.children;
    // const countCategories = [...value].length;
    const countCategories = Array.from(value).length;

    result += `Категория: ${title}\nКоличество элементов: ${countCategories}\n`;
  });
  return result;
};

console.log(getTitleAndCountCategories(categoriesItemsRef));
