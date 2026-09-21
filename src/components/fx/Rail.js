'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from '@/lib/icons';

export default function Rail({ children }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    const node = ref.current;
    if (!node) return;
    node.scrollBy({ left: dir * Math.min(node.clientWidth * 0.86, 640), behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div ref={ref} className="rail flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
        {children}
      </div>
      <div className="mt-8 flex gap-2">
        <button type="button" className="rail-btn" onClick={() => scroll(-1)} aria-label="Previous">
          <ChevronLeft size={18} />
        </button>
        <button type="button" className="rail-btn" onClick={() => scroll(1)} aria-label="Next">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
