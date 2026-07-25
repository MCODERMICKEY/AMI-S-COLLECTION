/**
 * Vercel Web Analytics Integration
 * 
 * This file demonstrates how to use the @vercel/analytics package
 * with a bundler (like Vite, Webpack, or Parcel) if you want to
 * customize the analytics behavior beyond the default CDN script.
 * 
 * To use this instead of the CDN script:
 * 1. Remove the script tag from index.html
 * 2. Bundle this file and include it in your HTML
 * 3. Customize the inject() options as needed
 */

import { inject } from '@vercel/analytics';

// Inject analytics with optional configuration
inject({
  mode: 'auto', // Automatically detects development vs production
  debug: false, // Set to true to see analytics events in console
  // beforeSend: (event) => {
  //   // Optional: Filter or modify events before sending
  //   // Return null to cancel the event
  //   if (event.url.includes('/admin')) {
  //     return null; // Don't track admin pages
  //   }
  //   return event;
  // },
});

console.log('Vercel Analytics initialized');
