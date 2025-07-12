document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Load theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            projectCards.forEach(card => {
                card.style.display = filter === 'all' || card.getAttribute('data-category') === filter ? 'block' : 'none';
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (Note: This is a demo, no actual submission occurs.)');
        contactForm.reset();
    });
});