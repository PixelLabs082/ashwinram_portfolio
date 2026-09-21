'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotion } from '@/components/fx/MotionProvider';
import { createScene } from '@/lib/scene';

export default function Scene() {
  const canvasRef = useRef(null);
  const apiRef = useRef(null);
  const { mode } = useMotion();
  const [live, setLive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const api = createScene(canvas);
    apiRef.current = api;
    if (!api) return undefined;

    setLive(true);
    api.setMode(mode);
    api.setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 1 : 0);

    const onVisibility = () => (document.hidden ? api.pause() : api.resume());
    const themeWatch = new MutationObserver(() => {
      api.setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 1 : 0);
    });
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      themeWatch.disconnect();
      api.destroy();
    };
  }, []);

  useEffect(() => {
    apiRef.current?.setMode(mode);
  }, [mode]);

  return (
    <>
      <canvas ref={canvasRef} className={`scene-canvas pointer-events-none fixed inset-0 z-0 h-full w-full ${live ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true" />
      <div className={`scene-fallback pointer-events-none fixed inset-0 z-0 ${live ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true" />
      <div className="grain pointer-events-none fixed inset-0" aria-hidden="true" />
    </>
  );
}
