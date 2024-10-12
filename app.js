const Container = document.getElementById('container');
const displayImage = document.getElementById('display-image');
const images = [
  {
    src: '1.jpg',
    alt: 'vineyard',
    title: 'vineyard',
    tabindex: '0',
  },

  {
    src: 'Argentina.jpg',
    alt: 'vineyard',
    title: 'vineyard',
    tabindex: '1',
  },
  {
    src: 'v3.jpg',
    alt: 'vineyard',
    title: 'vineyard',
    tabindex: '2',
  },
  {
    src: 'vineyard-2.jpg',
    alt: 'vineyard',
    title: 'vineyard',
    tabindex: '3',
  },
  {
    src: '751027.jpg',
    alt: 'vineyard',
    title: 'vineyard',
    tabindex: '4',
  },
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement('img');

  img.src = images[i].src;
  img.alt = images[i].alt;
  img.title = images[i].title;
  img.tabindex = images[i].tabindex;

  img.addEventListener('click', function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
  });

  Container.appendChild(img);
}

Container.addEventListener('click', function () {
  console.log('image was clicked');
});
