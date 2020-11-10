const galleryRef = document.getElementById('gallery');

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 1 вариант
// const getLiElement = ({ url, alt }) => {
//   const li = document.createElement('li');
//   const img = document.createElement('img');
//   img.src = url;
//   img.alt = alt;

//   li.appendChild(img);
//   return li;
// };

// const result = images.map(obj => getLiElement(obj));

// galleryRef.append(...result);

// 2 вариант
const getLiElement = ({ url, alt }, element) =>
  element.insertAdjacentHTML(
    'beforeend',
    `<li><img src="${url}" alt="${alt}"></li>`,
  );
const result = images.forEach(obj => getLiElement(obj, galleryRef));
