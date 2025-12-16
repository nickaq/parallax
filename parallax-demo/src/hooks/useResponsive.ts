'use client';

import { useEffect, useState } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

interface ResponsiveConfig {
  device: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  amplitudeMultiplier: number;
}

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

/**
 * Hook to detect device type and provide responsive amplitude multipliers
 * - Desktop: full parallax (1.0)
 * - Tablet: reduced amplitude (0.5)
 * - Mobile: minimal/disabled (0.0)
 */
export function useResponsive(): ResponsiveConfig {
  const [config, setConfig] = useState<ResponsiveConfig>({
    device: 'desktop',
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    amplitudeMultiplier: 1.0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateDevice = () => {
      const width = window.innerWidth;
      
      let device: DeviceType;
      let amplitudeMultiplier: number;

      if (width < BREAKPOINTS.mobile) {
        device = 'mobile';
        amplitudeMultiplier = 0; // Disabled on mobile
      } else if (width < BREAKPOINTS.tablet) {
        device = 'tablet';
        amplitudeMultiplier = 0.5; // Reduced on tablet
      } else {
        device = 'desktop';
        amplitudeMultiplier = 1.0; // Full on desktop
      }

      setConfig({
        device,
        isMobile: device === 'mobile',
        isTablet: device === 'tablet',
        isDesktop: device === 'desktop',
        amplitudeMultiplier,
      });
    };

    // Initial check
    updateDevice();

    // Listen for resize
    window.addEventListener('resize', updateDevice);
    
    return () => {
      window.removeEventListener('resize', updateDevice);
    };
  }, []);

  return config;
}
