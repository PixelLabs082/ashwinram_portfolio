'use client';

import { useEffect, useRef } from 'react';

export default function ThemeScrollbar() {
  const trackRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return undefined;

    const progress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return 0;
      return Math.min(1, Math.max(0, window.scrollY / max));
    };

    const paint = () => {
      fill.style.transform = `scaleY(${progress()})`;
    };

    const scrollToY = (clientY) => {
      const box = track.getBoundingClientRect();
      const ratio = (clientY - box.top) / Math.max(1, box.height);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: Math.min(Math.max(ratio, 0), 1) * max });
    };

    let dragging = false;

    const onPointerDown = (event) => {
      dragging = true;
      track.setPointerCapture(event.pointerId);
      scrollToY(event.clientY);
    };

    const onPointerMove = (event) => {
      if (!dragging) return;
      scrollToY(event.clientY);
    };

    const onPointerUp = () => {
      dragging = false;
    };

    paint();
    window.addEventListener('scroll', paint, { passive: true });
    window.addEventListener('resize', paint);
    track.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      window.removeEventListener('scroll', paint);
      window.removeEventListener('resize', paint);
      track.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  return (
    <div className="theme-scroll" aria-hidden="true">
      <div ref={trackRef} className="theme-scroll-track">
        <div ref={fillRef} className="theme-scroll-fill" />
      </div>
    </div>
  );
}
