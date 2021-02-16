//---- Import netlify-cms ----//
import CMS from 'netlify-cms-app'
// Initialize the CMS object
CMS.init();

//---- Import cloudinary ----//
import cloudinary from 'netlify-cms-media-library-uploadcare';

// Now the registry is available via the CMS object.
CMS.registerMediaLibrary(cloudinary);



// Hamburger and mobile menu animations
const hamburger = document.getElementById('hamburger');

hamburger.onclick = function() {
    console.log('clicked!!');
    hamburger.classList.toggle('open');
}