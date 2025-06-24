const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    preloader.style.opacity = '0';
    preloader.addEventListener('transitionend', () => {
        preloader.style.display = 'none';
    });
});


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelectorAll(".menu-links a");

hamburgerIcon.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
            icon.classList.remove("open");
        }
    });
});

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