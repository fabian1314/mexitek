// slider.js - Controla el slider autom�tico y manual del banner

const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let currentIndex = 0;

// Funci�n para mostrar el slide seg�n el �ndice dado
function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Evento para mostrar el slide anterior
btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    mostrarSlide(currentIndex);
});

// Evento para mostrar el siguiente slide
btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    mostrarSlide(currentIndex);
});

// Cambio autom�tico de slide cada 6 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    mostrarSlide(currentIndex);
}, 6000);

// Mostrar el primer slide al cargar la p�gina
mostrarSlide(currentIndex);

