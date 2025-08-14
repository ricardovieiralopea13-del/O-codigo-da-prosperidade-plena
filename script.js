document.addEventListener("DOMContentLoaded", function() {
    const elementosAnimados = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // A animação dispara quando 20% do elemento está visível na tela
    });

    elementosAnimados.forEach(elemento => {
        observer.observe(elemento);
    });
});
