// Hamburger and mobile menu animations
const hamburger = document.getElementById('hamburger');

hamburger.onclick = function() {
    console.log('clicked!!');
    hamburger.classList.toggle('open');
}