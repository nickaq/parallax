'use client';

import React, { useMemo, useCallback, useEffect, useState } from 'react';
import { useSectionContext } from './ParallaxSection';
import styles from './parallax.module.css';

type Axis = 'x' | 'y' | 'both';

interface ParallaxLayerProps {
  children?: React.ReactNode;
  /** Speed multiplier: positive = move with scroll, negative = against scroll */
  speed?: number;
  /** Maximum pixel offset (amplitude) */
  amplitude?: number;
  /** Movement axis */
  axis?: Axis;
  /** Additional CSS class name */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Whether this layer should receive pointer events */
  interactive?: boolean;
  /** Static fallback offset for reduced motion (max 2px) */
  reducedMotionOffset?: number;
  /** Enable mouse-based parallax on desktop (optional) */
  mouseParallax?: boolean;
  /** Mouse parallax intensity (0-1) */
  mouseIntensity?: number;
}

/**
 * Individual parallax layer component
 * Applies GPU-accelerated transforms based on section progress
 * Respects reduced motion and responsive settings
 */
export function ParallaxLayer({
  children,
  speed = 0.5,
  amplitude = 100,
  axis = 'y',
  className = '',
  style,
  interactive = false,
  reducedMotionOffset = 0,
  mouseParallax = false,
  mouseIntensity = 0.02,
}: ParallaxLayerProps) {
  const { progress, isVisible, isEnabled, amplitudeMultiplier } = useSectionContext();
  
  // Mouse position for optional mouse parallax
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Handle mouse movement for optional mouse parallax
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!mouseParallax || !isEnabled) return;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const offsetX = (e.clientX - centerX) * mouseIntensity;
    const offsetY = (e.clientY - centerY) * mouseIntensity;
    
    setMouseOffset({ x: offsetX, y: offsetY });
  }, [mouseParallax, isEnabled, mouseIntensity]);

  useEffect(() => {
    if (!mouseParallax || typeof window === 'undefined') return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseParallax, handleMouseMove]);

  // Calculate transform
  const transform = useMemo(() => {
    // Handle reduced motion
    if (!isEnabled) {
      const offset = Math.min(reducedMotionOffset, 2); // Cap at 2px
      if (offset === 0) return 'translate3d(0, 0, 0)';
      
      switch (axis) {
        case 'x':
          return `translate3d(${offset}px, 0, 0)`;
        case 'y':
          return `translate3d(0, ${offset}px, 0)`;
        case 'both':
          return `translate3d(${offset}px, ${offset}px, 0)`;
      }
    }

    // Calculate parallax offset
    // Progress goes from 0 to 1 as section scrolls through viewport
    // Center the movement around 0.5 progress point
    const centeredProgress = (progress - 0.5) * 2; // -1 to 1
    const effectiveAmplitude = amplitude * amplitudeMultiplier * speed;
    const offset = centeredProgress * effectiveAmplitude;

    // Add mouse offset if enabled
    const totalX = (axis === 'x' || axis === 'both') ? offset + mouseOffset.x : mouseOffset.x;
    const totalY = (axis === 'y' || axis === 'both') ? offset + mouseOffset.y : mouseOffset.y;

    switch (axis) {
      case 'x':
        return `translate3d(${totalX}px, ${mouseOffset.y}px, 0)`;
      case 'y':
        return `translate3d(${mouseOffset.x}px, ${totalY}px, 0)`;
      case 'both':
        return `translate3d(${totalX}px, ${totalY}px, 0)`;
    }
  }, [progress, speed, amplitude, axis, isEnabled, amplitudeMultiplier, reducedMotionOffset, mouseOffset]);

  // Combine styles
  const layerStyle = useMemo<React.CSSProperties>(() => ({
    ...style,
    transform,
    // Only use will-change when visible and enabled for performance
    willChange: isVisible && isEnabled ? 'transform' : 'auto',
  }), [style, transform, isVisible, isEnabled]);

  return (
    <div
      className={`${styles.layer} ${interactive ? styles.interactive : ''} ${className}`}
      style={layerStyle}
    >
      {children}
    </div>
  );
}
