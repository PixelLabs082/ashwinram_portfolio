'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({
      lerp: 0.12,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      autoRaf: true,
      anchors: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
