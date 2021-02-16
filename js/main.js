//---- Import netlify-cms ----//
import CMS from 'netlify-cms-app'
// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', MyTemplate);

// Hamburger and mobile menu animations
const hamburger = document.getElementById('hamburger');

hamburger.onclick = function() {
    console.log('clicked!!');
    hamburger.classList.toggle('open');
}