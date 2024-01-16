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

// GSAP Cursor
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

// Function to update cursor position
const updateCursor = (e) => {
    gsap.to(cursor, { 
        duration: 0.5, 
        top: e.pageY, 
        left: e.pageX 
    });
    gsap.to(cursorDot, { 
        duration: 0.3, 
        top: e.pageY, 
        left: e.pageX 
    });
};

// Event listeners for black-background elements
const blackBg = document.querySelectorAll('.black-background');

blackBg.forEach((bg) => {
    bg.addEventListener('mouseenter', () => {
        gsap.to(cursor, { 
            duration: 0.3, 
            borderColor: '#ece7e1', 
        });
        gsap.to(cursorDot, { 
            duration: 0.3, 
            background: '#ece7e1' 
        });
    });

    bg.addEventListener('mouseleave', () => {
        gsap.to(cursor, { 
            duration: 0.3, 
            borderColor: '#1a1818'
        });
        gsap.to(cursorDot, { 
            duration: 0.3, 
            background: '#1a1818' 
        });
    });
});

// Event listeners for cursor-out elements
const cursorOut = document.querySelectorAll('.cursor-out');

cursorOut.forEach((out) => {
    out.addEventListener('mouseenter', () => {
        gsap.to([cursor, cursorDot], { duration: 0.3, autoAlpha: 0 });
    });

    out.addEventListener('mouseleave', () => {
        gsap.to([cursor, cursorDot], { duration: 0.3, autoAlpha: 1 });
    });
});

// Event listener for updating cursor position on mouse move
window.addEventListener('mousemove', updateCursor);


// Skills animation
var tl = gsap.timeline({scrollTrigger:{
    duration: 0.8,
    trigger: '.skills',
    start: "0% 90%",
    end: "450% 90%",
    scrub: true
}})

tl.to(".to-left", {
    marginLeft: "-40%",
}, 'skills')
tl.to(".to-right", {
    marginRight: "-50%",
}, 'skills')