const Container = document.getElementById('container');
const displayImage = document.getElementById('display-image');
const images = [
  {
    src: '1.jpg',
    alt: 'vineyard',
  },

  {
    src: 'Argentina.jpg',
    alt: 'vineyard',
  },
  {
    src: 'v3.jpg',
    alt: 'vineyard',
  },
];

for (let i = 0; i < images.length; i++) {
  const img = document.createElement('img');

  img.src = images[i].src;
  img.alt = images[i].alt;

  img.addEventListener('click', function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
  });

  Container.appendChild(img);
}
