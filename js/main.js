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
const slides = document.getElementsByClassName('carousel__image');
let currentSlide = document.getElementById('currentSlide');
let nextSlide = document.getElementById('currentSlide').nextElementSibling;

const showPreviousSlide = (e) => {
    if(currentSlide == slides[0]) {
        currentSlide.classList.toggle('carousel__image--active');
        currentSlide.id = "";
        console.log(slides);
        currentSlide = slides[slides.length - 1];
        console.log(currentSlide);
        currentSlide.id = "currentSlide";
        currentSlide.classList.toggle('carousel__image--active');
    } else if (currentSlide == slides[1]) {
        currentSlide.classList.toggle('carousel__image--active');
        currentSlide.id = "";
        currentSlide = slides[0];
        currentSlide.id = "currentSlide";
        currentSlide.classList.toggle('carousel__image--active');
    } else if (currentSlide == slides[2]) {
        currentSlide.classList.toggle('carousel__image--active');
        currentSlide.id = "";
        currentSlide = slides[1];
        currentSlide.id = "currentSlide";
        currentSlide.classList.toggle('carousel__image--active');

    }
}

const showNextSlide = (e) => {
    if(nextSlide.classList.contains('carousel__image')) {
        currentSlide.classList.toggle('carousel__image--active');
        nextSlide.classList.toggle('carousel__image--active');
        currentSlide.id = "";
        nextSlide.id = "currentSlide";
        currentSlide = document.getElementById('currentSlide');
        nextSlide = document.getElementById('currentSlide').nextElementSibling;
    } else {
        currentSlide.classList.toggle('carousel__image--active');
        currentSlide.id = "";
        currentSlide = slides[0];
        currentSlide.id = "currentSlide";
        currentSlide.classList.toggle('carousel__image--active');
        nextSlide = slides[1];
    }

    automateCarousel();
}

const automateCarousel = () => {
    setInterval(showNextSlide, 5000);
}

prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);

automateCarousel();

