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

const getLiElement = ({ url, alt }) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = url;
  img.alt = alt;

  li.appendChild(img);
  return li;
};

const result = images.map(obj => getLiElement(obj));

const galleryRef = document.querySelector('#gallery');
galleryRef.append(...result);
// console.log(galleryRef);
