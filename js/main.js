// Hamburger and mobile menu animations
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const header = document.getElementById('header');

const hasSubmenu = document.getElementById('has-submenu');
const submenu = document.getElementById('submenu');

const hasOverlaySubmenu = document.getElementById('has-overlay-submenu');
const overlaySubmenu = document.getElementById('overlay-submenu');

hasSubmenu.addEventListener('click', event => {
    submenu.classList.toggle('opened');
});

hasOverlaySubmenu.addEventListener('click', event => {
    hasOverlaySubmenu.classList.toggle('active');
    overlaySubmenu.classList.toggle('opened');
});

hamburger.onclick = function() {
    console.log('clicked!!');
    hamburger.classList.toggle('open');
    overlay.classList.toggle('opened');
}


// CAROUSEL STUFF
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
let currentSlide = document.getElementById('currentSlide');
let nextSlide = document.getElementById('currentSlide').nextElementSibling;

const showPreviousSlide = (e) => {
    console.log(e);
}

const showNextSlide = (e) => {
    console.log(e);
    console.log(currentSlide);
    console.log(nextSlide);

    currentSlide.classList.toggle('carousel__image--active');
    nextSlide.classList.toggle('carousel__image--active');
    currentSlide.id = "";
    nextSlide.id = "currentSlide";
    currentSlide = document.getElementById('currentSlide');
    nextSlide = document.getElementById('currentSlide').nextElementSibling;
}

prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);

