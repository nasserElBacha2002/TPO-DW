function loadSection(sectionId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(sectionId).innerHTML = data;

            // Inicializa el carrusel solo después de cargar la sección del portafolio
            if (sectionId === "portfolio") {
                initializeCarousel(); // Llama a la función que controla el carrusel
            }
        });
}

// Cargar las secciones
loadSection("header", "header.html");
loadSection("hero", "hero.html");
loadSection("about", "about.html");
loadSection("portfolio", "portfolio.html");
loadSection("resume", "resume.html");
loadSection("services", "services.html");
loadSection("testimonials", "testimonials.html");
loadSection("certifications", "certifications.html");
loadSection("contact", "contact.html");
loadSection("footer", "footer.html");

// Scroll Snap fix for Safari
document.documentElement.style.scrollSnapType = "y mandatory";

// Scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function initializeCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Asegúrate de mostrar la primera diapositiva
    slides[currentSlide].classList.add('active');

    // Evento para la flecha "Siguiente"
    document.querySelector('.arrow-next').addEventListener('click', function () {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides; // Incrementa y reinicia al llegar al final
        slides[currentSlide].classList.add('active');
    });

    // Evento para la flecha "Anterior"
    document.querySelector('.arrow-prev').addEventListener('click', function () {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Decrementa y reinicia al llegar al inicio
        slides[currentSlide].classList.add('active');
    });
}
