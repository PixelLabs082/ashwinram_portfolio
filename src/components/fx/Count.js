'use client';

import { useEffect, useRef, useState } from 'react';

export default function Count({ value }) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : '';
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (target === null) return undefined;
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setCurrent(target);
          return;
        }
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / 1200);
          setCurrent(Math.round(target * (1 - (1 - progress) ** 3)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  if (target === null) return value;
  return <span ref={ref}>{current}{suffix}</span>;
}
