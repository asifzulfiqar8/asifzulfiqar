// Hamburger JS
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    const hamburderLines = document.querySelectorAll('.line');
    const navLinks = document.querySelector('.nav-links');
    const logoText = document.querySelector('.logo');

    hamburderLines.forEach((line) => {
        line.classList.toggle('active');
    });

    navLinks.classList.toggle('active');
    logoText.classList.toggle('active');
})

let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('.header');

window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = `-${navbar.offsetHeight}px`;
    }

    prevScrollPos = currentScrollPos;
};

