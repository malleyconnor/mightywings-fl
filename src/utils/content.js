// Utility functions for loading dynamic content

import contentConfig from '../config/content.json';

export const getContentConfig = () => contentConfig;

// For the gallery images, we'll create a static list since we can't dynamically 
// read directory contents at runtime in a Next.js client component
export const getGalleryImages = () => {
  const config = getContentConfig();
  const imageDirectory = config.gallery.imageDirectory;
  const descriptions = config.gallery.imageDescriptions;
  
  return Object.entries(descriptions).map(([filename, description]) => ({
    src: `${imageDirectory}${filename}`,
    alt: description,
    filename
  }));
};

export default { getContentConfig, getGalleryImages };