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
const tl = gsap.timeline({scrollTrigger:{
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
    marginRight: "-60%",
}, 'skills');
tl.to(".to-left-last", {
    marginLeft: "-90%",
}, 'skills');

// starting loader animation js

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.initial-loader-main');

    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        delay: 1,
        onComplete: hideLoader,
    })
});

const hideLoader = () => {
    const loader = document.querySelector('.initial-loader-main');

    loader.style.display = 'none';
}

// Form handling
var loader = document.querySelector('.btn-loader');

loader.style.display = 'none';

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;
    const submit = document.querySelector('.submit');    

    if (!name && (!email) || (!subject) && !message) {
        alert('Please fill the required fields first');
    }else {

        loader.style.display = 'block';
        submit.textContent = '';
        submit.innerHTML = '<span class="btn-loader"></span>';

        var params = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            subject: document.querySelector('#subject').value,
            message: document.querySelector('#message').value
        }

        const serviceID = "service_23af2wk";
        const templateID = "template_opjb08h";
    
        emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            
            loader.style.display = 'none';
            submit.textContent = 'SEND';
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#subject').value = '';
            document.querySelector('#message').value = '';
            alert('Your message sent successfully');
        })
        .catch((err) => console.log(err));
    }
})

// Animation for header and hero banner
const timeline = gsap.timeline({
    defaults: {
      opacity: 0,
      stagger: 1,
      delay: 0.7,
    }
  });
  
  timeline.from([".logo", ".hamburger"], {
    duration: 1,
    stagger: 0.3,
    y: -150,
  });
  
  timeline.from(
    [
      ".hello",
      ".intro",
      ".hero-para",
      ".git",
      ".linked-in",
      ".hero-btn",
      ".hero-img"
    ],
    {
      duration: 1,
      stagger: 0.3,
      y: 50,
    }
  );
  
  // Play the timelines when the window loads
  window.onload = () => {
    timeline.play();
  };

// Animation for smooth scrolling
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 2.5, 
  effects: true
});