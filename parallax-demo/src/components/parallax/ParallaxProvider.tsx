'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useResponsive, DeviceType } from '@/hooks/useResponsive';

interface ParallaxContextValue {
  /** Global scroll Y position */
  scrollY: number;
  /** User prefers reduced motion */
  prefersReducedMotion: boolean;
  /** Current device type */
  device: DeviceType;
  /** Amplitude multiplier based on device */
  amplitudeMultiplier: number;
  /** Whether parallax should be enabled */
  isEnabled: boolean;
}

const ParallaxContext = createContext<ParallaxContextValue | null>(null);

interface ParallaxProviderProps {
  children: React.ReactNode;
  /** Force disable parallax for testing */
  disabled?: boolean;
}

/**
 * Global context provider for parallax effects
 * Manages scroll position, reduced motion preference, and responsive behavior
 */
export function ParallaxProvider({ children, disabled = false }: ParallaxProviderProps) {
  const [scrollY, setScrollY] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { device, amplitudeMultiplier } = useResponsive();
  const rafId = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }
    
    rafId.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY);
      rafId.current = null;
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initial value
    setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  const isEnabled = !disabled && !prefersReducedMotion && amplitudeMultiplier > 0;

  const value: ParallaxContextValue = {
    scrollY,
    prefersReducedMotion,
    device,
    amplitudeMultiplier,
    isEnabled,
  };

  return (
    <ParallaxContext.Provider value={value}>
      {children}
    </ParallaxContext.Provider>
  );
}

/**
 * Hook to access parallax context
 * Must be used within ParallaxProvider
 */
export function useParallaxContext(): ParallaxContextValue {
  const context = useContext(ParallaxContext);
  
  if (!context) {
    throw new Error('useParallaxContext must be used within a ParallaxProvider');
  }
  
  return context;
}
