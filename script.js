const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;
let interval = setInterval(carousel, 3000);

function carousel() {
    idx++;
    if (idx >= img.length) {
        idx = 0;
    }
    const translateXValue = -(idx * (100 / img.length));
    imgs.style.transform = `translateX(${translateXValue}%)`; 
}

imgs.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

imgs.addEventListener('mouseleave', () => {
    interval = setInterval(carousel, 3000);
});

// Alternar Tema
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Carregar Tema
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    }
});
