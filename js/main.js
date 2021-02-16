//---- Import netlify-cms ----//
import CMS from 'netlify-cms-app'

//---- Import cloudinary ----//
import cloudinary from 'netlify-cms-media-library-cloudinary';

// Now the registry is available via the CMS object.
CMS.registerMediaLibrary(cloudinary);

// Initialize the CMS object
CMS.init();


