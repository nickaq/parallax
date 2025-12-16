'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { useParallaxContext } from './ParallaxProvider';
import styles from './parallax.module.css';

interface SectionContextValue {
  /** Scroll progress within this section (0-1) */
  progress: number;
  /** Whether the section is visible */
  isVisible: boolean;
  /** Whether parallax is enabled */
  isEnabled: boolean;
  /** Amplitude multiplier from device */
  amplitudeMultiplier: number;
}

const SectionContext = createContext<SectionContextValue | null>(null);

interface ParallaxSectionProps {
  children: React.ReactNode;
  /** Additional CSS class name */
  className?: string;
  /** Section ID for accessibility */
  id?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** IntersectionObserver threshold */
  threshold?: number;
  /** IntersectionObserver root margin */
  rootMargin?: string;
}

/**
 * Section wrapper that tracks local scroll progress
 * Activates parallax only when visible
 * Provides progress context to child ParallaxLayer components
 */
export function ParallaxSection({
  children,
  className = '',
  id,
  style,
  threshold = 0,
  rootMargin = '100px',
}: ParallaxSectionProps) {
  const { ref, progress, isVisible } = useParallax({ threshold, rootMargin });
  const { isEnabled, amplitudeMultiplier } = useParallaxContext();

  const sectionValue = useMemo<SectionContextValue>(() => ({
    progress,
    isVisible,
    isEnabled,
    amplitudeMultiplier,
  }), [progress, isVisible, isEnabled, amplitudeMultiplier]);

  return (
    <SectionContext.Provider value={sectionValue}>
      <section
        ref={ref as React.RefObject<HTMLElement>}
        id={id}
        className={`${styles.section} ${className}`}
        style={style}
      >
        {children}
      </section>
    </SectionContext.Provider>
  );
}

/**
 * Hook to access section context
 * Must be used within ParallaxSection
 */
export function useSectionContext(): SectionContextValue {
  const context = useContext(SectionContext);
  
  if (!context) {
    throw new Error('useSectionContext must be used within a ParallaxSection');
  }
  
  return context;
}
