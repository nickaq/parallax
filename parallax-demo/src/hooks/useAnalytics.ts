'use client';

import { useEffect, useRef } from 'react';
import { trackPageView, trackInteraction } from '@/services/api';

// Generate unique session ID
function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  
  let sessionId = sessionStorage.getItem('parallax_session');
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('parallax_session', sessionId);
  }
  return sessionId;
}

export function useAnalytics(page: string = '/') {
  const hasTracked = useRef(false);
  const sessionId = useRef('');

  // Track page view on mount
  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;
    
    sessionId.current = getSessionId();
    
    trackPageView(page, sessionId.current, document.referrer).catch(() => {
      // Silently fail if backend is not running
    });
  }, [page]);

  // Track scroll depth
  useEffect(() => {
    let maxScrollDepth = 0;
    let lastSection = '';

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentDepth = (window.scrollY / scrollHeight) * 100;
      
      if (currentDepth > maxScrollDepth + 10) {
        maxScrollDepth = currentDepth;
        
        trackInteraction(
          sessionId.current,
          'scroll',
          'page',
          Math.round(maxScrollDepth)
        ).catch(() => {});
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Return function to track custom interactions
  return {
    trackSection: (section: string) => {
      trackInteraction(sessionId.current, 'view', section).catch(() => {});
    },
    trackClick: (section: string) => {
      trackInteraction(sessionId.current, 'click', section).catch(() => {});
    },
  };
}
