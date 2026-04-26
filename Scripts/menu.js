const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

// Close menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    });
});