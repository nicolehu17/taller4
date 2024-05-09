const indicadores = document.querySelectorAll('.indicador');
const slides = document.querySelectorAll('.slide');

let indiceActual = 0;

function mostrarSlide(indice) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[indice].style.display = 'block';
}

mostrarSlide(indiceActual);

indicadores.forEach((indicador, i) => {
    indicador.addEventListener('click', () => {
        indiceActual = i;
        mostrarSlide(indiceActual);
        actualizarIndicadores();
    });
});

function actualizarIndicadores() {
    indicadores.forEach(indicador => indicador.classList.remove('activo'));
    indicadores[indiceActual].classList.add('activo');
}

// Función para cambiar de slide automáticamente (opcional)

setInterval(() => {
    indiceActual = (indiceActual + 1) % slides.length;
    mostrarSlide(indiceActual);
    actualizarIndicadores();
}, 3000);
