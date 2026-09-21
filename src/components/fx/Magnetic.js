'use client';

import { useRef } from 'react';

export default function Magnetic({ children, className = '', strength = 7 }) {
  const ref = useRef(null);
  const rafId = useRef(null);

  const onMove = (event) => {
    const node = ref.current;
    if (
      !node ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }
    const box = node.getBoundingClientRect();
    const x = (event.clientX - (box.left + box.width / 2)) / strength;
    const y = (event.clientY - (box.top + box.height / 2)) / strength;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (node) {
        node.style.transition = 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)';
        node.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      }
    });
  };

  const onLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (ref.current) {
      ref.current.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      ref.current.style.transform = 'translate3d(0, 0, 0)';
    }
  };

  return (
    <span
      ref={ref}
      data-magnetic="true"
      className={`inline-flex transform-gpu ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  );
}
