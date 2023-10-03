
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');




menuIcon.onclick = () => { 
    menuIcon.classList.toggle('fa-close');
    navbar.classList.toggle('active');
 }

// thi is for anmarion in the header navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector(' header a[href*=' + id + ']').classList.add('active');
                    sec.delay= 1000;
                });
            };
    });
// This is for anmation for the icons in mobile
    let header = document.querySelector('.header');
    header.classList.toggle('stick', window.screenY > 100);
    menuIcon.classList.remove('fa-close');
    navbar.classList.remove('active');
};
 
// This is for anmations by Scroll
ScrollReveal({
    reset: true,
    distance: '88px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .protfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 ,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content h1 ,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content h1 ,.text-delay', { origin: 'left' });
ScrollReveal().reveal('.home-content h1 ,.text-right', { origin: 'right' });
ScrollReveal().reveal('.home-content h1 ,.btn-dow', { origin: 'right' });
ScrollReveal().reveal('.num1', { origin: 'left' });
ScrollReveal().reveal('.num2', { origin: 'right' });
ScrollReveal().reveal('.num1', { origin: 'left' });
ScrollReveal().reveal('.num2', { origin: 'right' });
ScrollReveal().reveal('.area', { origin: 'bottom' ,duration:3000});
ScrollReveal().reveal(' .countact, .btn-dow', { origin: 'bottom' ,duration:3000});



const typed = new Typed('.multplay-text', {
    strings: ['Web Developer', 'Grphic Design', 'Programer'],
    typeSpeed:90,
    backSpeed:90,
    backDelay: 1000,
    loop:true,
});
