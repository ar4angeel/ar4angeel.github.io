document.addEventListener('DOMContentLoaded', function() {
    // Анимация карточек при скролле
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Плавное появление элементов
    document.querySelectorAll('li, .item').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeIn 0.5s ease-in forwards ${index * 0.2}s`;
    });
});