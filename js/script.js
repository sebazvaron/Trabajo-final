const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.slide-video');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentVideo = 0;

    function showVideo(index) {
        videos[currentVideo].classList.remove('active');
        videos[currentVideo].pause(); // Pausar el video actual

        currentVideo = (index + videos.length) % videos.length;

        videos[currentVideo].classList.add('active');
        videos[currentVideo].play(); // Reproducir el nuevo video
    }

    prevBtn.addEventListener('click', () => showVideo(currentVideo - 1));
    nextBtn.addEventListener('click', () => showVideo(currentVideo + 1));

    // Opcional: Cambio automático cada 5 segundos
    setInterval(() => showVideo(currentVideo + 1), 10000);

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        // Ocultar todas las diapositivas
        slides.forEach(slide => slide.classList.remove('active'));

        // Asegurarse de que el índice no se salga de los límites
        currentSlide = (index + slides.length) % slides.length;

        // Mostrar la diapositiva actual
        slides[currentSlide].classList.add('active');
    }

    // Botón para avanzar (si lo tienes)
    document.getElementById('next-btn')?.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Botón para retroceder (si lo tienes)
    document.getElementById('prev-btn')?.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
});