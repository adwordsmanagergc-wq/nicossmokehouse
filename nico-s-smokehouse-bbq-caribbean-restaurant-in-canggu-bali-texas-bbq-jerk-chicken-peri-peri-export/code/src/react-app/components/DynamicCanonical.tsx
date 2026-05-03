import { useEffect } from 'react';
import { useLocation } from 'react-router';

const BASE_URL = 'https://nicossmokehouse.com';

export default function DynamicCanonical() {
  const location = useLocation();

  useEffect(() => {
    // Get the canonical link element, or create one if it doesn't exist
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }

    // Set the canonical URL to the current page
    const canonicalUrl = location.pathname === '/' 
      ? BASE_URL 
      : `${BASE_URL}${location.pathname}`;
    
    canonicalLink.href = canonicalUrl;

    // Also update og:url meta tag for social sharing
    let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
    if (ogUrl) {
      ogUrl.content = canonicalUrl;
    }
  }, [location.pathname]);

  return null;
}
