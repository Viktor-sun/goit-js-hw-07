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
const insertLiElement = array => {
  return array
    .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
    .join('');
};

const template = insertLiElement(images);
const result = galleryRef.insertAdjacentHTML('beforeEnd', template);
