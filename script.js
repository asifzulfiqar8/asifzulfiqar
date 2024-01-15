// Hamburger JS
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    const hamburgerLines = document.querySelectorAll('.line');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    hamburgerLines.forEach((line) => {
        line.classList.toggle('active');
    });

    navLinks.classList.toggle('active');

    links.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerLines.forEach((line) => {
                line.classList.remove('active');
            })
        })
    })
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

// Cursor js
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

const updateCursor = (e) => {
    
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
    cursorDot.style.top = e.pageY + 'px';
    cursorDot.style.left = e.pageX + 'px';
}

const blackBg = document.querySelectorAll('.black-background');

blackBg.forEach((bg) => {
    bg.addEventListener('mouseenter', () => {
        cursor.style.display = 'none';
        cursorDot.style.background = '#ece7e1';
        cursorDot.style.width = '80px';
        cursorDot.style.height = '80px';
        
    })
    bg.addEventListener('mouseleave', () => {
        cursor.style.display = 'block';
        cursorDot.style.background = '#1a1818';
        cursorDot.style.width = '10px';
        cursorDot.style.height = '10px';
    })
})


window.addEventListener('mousemove', updateCursor);