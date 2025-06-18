// PRELOADER
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    preloader.classList.add('fade-out');
    preloader.addEventListener('transitionend', () => {
        preloader.style.display = 'none';
    });
});

// HAMBURGER MENU
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});