/**
 * Image path utility for consistent image references
 * Handles base path configuration for GitHub Pages deployment
 */

// Import Astro's getImage utility for optimization
export const getImagePath = (imagePath: string): string => {
  // Normalize the path - remove leading slash if present
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  // In Astro, static assets in public/ are served from root
  // The base path is handled by the Astro config for routing
  // but public assets are served relative to the site root
  return normalizedPath;
};

/**
 * Common image paths
 */
export const IMAGES = {
  // Header
  HEADER: '/images/hondmorvan-header1.png',
  
  // Home page
  HOME_LEFT: '/images/hondmorvan-homelinks1.png',
  HOME_RIGHT_1: '/images/hondmorvan-homerechts1.png',
  HOME_RIGHT_2: '/images/hondmorvan-homerechts2.png',
  HOME_RIGHT_3: '/images/hondmorvan-homerechts3.png',
  
  // Gastenboek page
  GASTENBOEK_LEFT_1: '/images/hondmorvan-gastenboeklinks1.png',
  GASTENBOEK_LEFT_2: '/images/hondmorvan-gastenboeklinks2.png',
  GASTENBOEK_RIGHT: '/images/gastenboek-1.jpg',
  
  // Kaart page
  KAART_LEFT: '/images/hondmorvan-kaartlinks1.png',
  KAART_RIGHT_1: '/images/hondmorvan-kaartrechts1.png',
  KAART_RIGHT_2: '/images/hondmorvan-kaartrechts4.png',
  KAART_RIGHT_3: '/images/hondmorvan-kaartrechts3.png',
  
  // Tarieven page
  TARIEVEN_LEFT_1: '/images/hondmorvan-tarievenlinks1.png',
  TARIEVEN_LEFT_2: '/images/hondmorvan-tarievenlinks2.png',
  TARIEVEN_RIGHT_1: '/images/hondmorvan-tarievenrechts1.png',
  TARIEVEN_RIGHT_2: '/images/hondmorvan-tarievenrechts2.png',
  TARIEVEN_RIGHT_3: '/images/hondmorvan-tarievenrechts4.png',
  TARIEVEN_RIGHT_4: '/images/hondmorvan-tarievenrechts5.png',
  
  // Links page
  LINKS_LEFT_1: '/images/hondmorvan-linklinks1.png',
  LINKS_LEFT_2: '/images/hondmorvan-linklinks2.png',
  LINKS_RIGHT_1: '/images/hondmorvan-linklrechts1.png',
  LINKS_RIGHT_2: '/images/hondmorvan-linklrechts4.png',
  LINKS_RIGHT_3: '/images/hondmorvan-linklrechts3.png',
  LINKS_RIGHT_4: '/images/hondmorvan-linklrechts5.png',
  
  // Contact page
  CONTACT_LEFT_1: '/images/hondmorvan-contactlinks1.png',
  CONTACT_LEFT_2: '/images/hondmorvan-contactlinks2.png',
  CONTACT_RIGHT_1: '/images/hondmorvan-contactrechts1.png',
  CONTACT_RIGHT_2: '/images/hondmorvan-contactrechts2.png',
  CONTACT_RIGHT_3: '/images/hondmorvan-contactrechts3.png',
  CONTACT_RIGHT_4: '/images/hondmorvan-contactrechts4.png',
} as const;
