const trending = [
  'https://image.tmdb.org/t/p/w300/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg',
  'https://image.tmdb.org/t/p/w300/t/p/w300/xuCHkaxkkm9pPum1SByC0dhBXZC.jpg',
  'https://image.tmdb.org/t/p/w300/xUqVn5fMZZAmphX5R9YNxoG9F3T.jpg',
];

const topRated = [
  'https://image.tmdb.org/t/p/w300/6agKYU5IQFpuDyUYPu39w7UCRrJ.jpg',
  'https://image.tmdb.org/t/p/w300/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
  'https://image.tmdb.org/t/p/w300/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
];

function loadPosters(images, containerId) {
  const container = document.getElementById(containerId);
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    container.appendChild(img);
  });
}

loadPosters(trending, 'trending');
loadPosters(topRated, 'top-rated');