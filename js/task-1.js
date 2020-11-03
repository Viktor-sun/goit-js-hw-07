const categoriesItemsRef = document.querySelectorAll('#categories > .item');

const countCategories = references => {
  const result = [...references].length;
  return `В списке ${result} категории.`;
};

console.log(countCategories(categoriesItemsRef));

const getTitleAndCountCategories = categories => {
  let result;
  //   const result = {};
  categories.forEach(item => {
    // console.log(item);
    const title = item.firstElementChild.textContent;
    const value = item.lastElementChild.children;
    const countCategories = [...value].length;
    // result[title] = countCategories;

    result += ` Категория: ${title}\n Количество элементов: ${countCategories}`;
  });
  return result;
};

console.log(getTitleAndCountCategories(categoriesItemsRef));
