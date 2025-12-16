'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

interface UseParallaxOptions {
  /** Threshold for IntersectionObserver (0-1) */
  threshold?: number;
  /** Root margin for IntersectionObserver */
  rootMargin?: string;
}

interface UseParallaxReturn {
  /** Ref to attach to the parallax section */
  ref: React.RefObject<HTMLElement | null>;
  /** Scroll progress within the section (0-1) */
  progress: number;
  /** Whether the section is currently visible */
  isVisible: boolean;
}

/**
 * Hook for calculating scroll progress within a section
 * Uses IntersectionObserver for visibility detection
 * Uses requestAnimationFrame for smooth scroll updates
 */
export function useParallax(options: UseParallaxOptions = {}): UseParallaxReturn {
  const { threshold = 0, rootMargin = '0px' } = options;
  
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0.5); // Start at center
  const rafId = useRef<number | null>(null);

  // Calculate scroll progress
  const updateProgress = useCallback(() => {
    if (!ref.current) return;

    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate progress: 0 when element enters viewport, 1 when it leaves
    // Progress is based on how much of the viewport height has been scrolled
    // relative to the element's position
    const elementTop = rect.top;
    const elementHeight = rect.height;
    
    // Start progress when element top reaches bottom of viewport
    // End progress when element bottom reaches top of viewport
    const startPoint = windowHeight; // When element top is at viewport bottom
    const endPoint = -elementHeight; // When element bottom is at viewport top
    const range = startPoint - endPoint;
    
    const currentProgress = (startPoint - elementTop) / range;
    const clampedProgress = Math.max(0, Math.min(1, currentProgress));
    
    setProgress(clampedProgress);
  }, []);

  // Scroll handler with RAF
  const handleScroll = useCallback(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }
    
    rafId.current = requestAnimationFrame(() => {
      updateProgress();
      rafId.current = null;
    });
  }, [updateProgress]);

  // IntersectionObserver for visibility
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  // Scroll event listener - ALWAYS active for proper parallax
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initial calculation on mount
    updateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Also listen to resize for recalculation
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateProgress);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll, updateProgress]);

  return { ref, progress, isVisible };
}
