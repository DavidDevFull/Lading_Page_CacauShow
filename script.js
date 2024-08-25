const imgs = document.getElementById('img'); // Verifique se o id no HTML é 'img'
const img = document.querySelectorAll('#img img');

let idx = 0;

function carousel() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }
  // Mova o estilo de transformação para dentro da função
  imgs.style.transform = `translateX(${-idx * 33.33}%)`; 
}

// A cada 1800ms, a função 'carousel' será chamada
setInterval(carousel, 3000);