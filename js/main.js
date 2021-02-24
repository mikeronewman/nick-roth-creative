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