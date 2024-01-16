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
/*
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
        cursor.style.borderColor = '#ece7e1';
        cursorDot.style.background = '#ece7e1';
    
})
bg.addEventListener('mouseleave', () => {
    cursor.style.borderColor = '#1a1818';
    cursorDot.style.background = '#1a1818';
})
})

const cursorOut = document.querySelectorAll('.cursor-out');

cursorOut.forEach((out) => {
    out.addEventListener('mouseenter', () => {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
        console.log('mouse enter')
    
})
    out.addEventListener('mouseleave', () => {
        cursor.style.display = 'block';
        cursorDot.style.display = 'block';
        console.log('mouse leave')

})
})


window.addEventListener('mousemove', updateCursor);
*/

// GSAP Cursor
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

// Function to update cursor position
const updateCursor = (e) => {
    gsap.to(cursor, { duration: 0.5, top: e.pageY, left: e.pageX });
    gsap.to(cursorDot, { duration: 0.3, top: e.pageY, left: e.pageX });
};

// Event listeners for black-background elements
const blackBg = document.querySelectorAll('.black-background');

blackBg.forEach((bg) => {
    bg.addEventListener('mouseenter', () => {
        gsap.to([cursor, cursorDot], { duration: 0.3, borderColor: '#ece7e1', background: '#ece7e1' });
    });

    bg.addEventListener('mouseleave', () => {
        gsap.to([cursor, cursorDot], { duration: 0.3, borderColor: '#1a1818', background: '#1a1818' });
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
