'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const canvasRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    const label = labelRef.current;
    if (!fine || reduce || !canvas || !label) return undefined;

    document.documentElement.dataset.cursor = 'on';

    const ctx = canvas.getContext('2d');
    const points = [];
    const next = { x: innerWidth / 2, y: innerHeight / 2 };
    let hovering = false;
    let view = false;
    let moving = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(innerWidth * dpr);
      canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event) => {
      next.x = event.clientX;
      next.y = event.clientY;
      moving = 10;
      const target = event.target instanceof Element ? event.target : null;
      hovering = Boolean(target?.closest('a, button, summary, [data-magnetic], [data-cursor]'));
      view = Boolean(target?.closest('[data-cursor="view"]'));
    };

    const draw = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      if (points.length < 2) return;

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let i = 1; i < points.length; i += 1) {
        const t = i / (points.length - 1);
        const prev = points[i - 1];
        const curr = points[i];
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);
        ctx.strokeStyle = `rgba(255,255,255,${0.08 + t * 0.92})`;
        ctx.lineWidth = view || hovering ? 0.6 + t * 3.4 : 0.35 + t * 2.15;
        ctx.stroke();
      }

      const tip = points[points.length - 1];
      ctx.beginPath();
      ctx.fillStyle = '#fff';
      ctx.arc(tip.x, tip.y, view ? 2.4 : 1.2, 0, Math.PI * 2);
      ctx.fill();
    };

    const tick = () => {
      const last = points[points.length - 1] || next;
      const x = last.x + (next.x - last.x) * 0.42;
      const y = last.y + (next.y - last.y) * 0.42;
      points.push({ x, y });
      if (points.length > 18) points.shift();
      if (moving > 0) {
        moving -= 1;
      } else if (points.length > 2) {
        points.shift();
      }

      draw();
      label.style.opacity = view ? '1' : '0';
      label.style.transform = `translate3d(${next.x}px, ${next.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      delete document.documentElement.dataset.cursor;
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-trail site-cursor" aria-hidden="true" />
      <span
        ref={labelRef}
        className="site-cursor pointer-events-none fixed top-0 left-0 z-81 text-[10px] font-medium tracking-[0.18em] uppercase text-white opacity-0 mix-blend-difference"
        aria-hidden="true"
      >
        View
      </span>
    </>
  );
}
