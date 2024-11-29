// Initialize animations on scroll
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-aos]');
    const observerOptions = {
        threshold: 0.3,
    };

    const onScrollAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    const observer = new IntersectionObserver(onScrollAnimation, observerOptions);

    elements.forEach(element => observer.observe(element));
});
