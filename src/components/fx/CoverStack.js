'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from '@/lib/icons';
import { riseEase } from '@/lib/motion';

export default function CoverStack({ items, renderItem, className = '' }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((value) => Math.max(0, value - 1));
  const next = () => setIndex((value) => Math.min(items.length - 1, value + 1));

  return (
    <div className={className}>
      <div className="relative h-[min(78svh,42rem)] overflow-hidden">
        {items.map((item, i) => (
          <motion.div
            key={item.title || item.number || i}
            className="absolute inset-0 origin-top will-change-transform"
            style={{ zIndex: i + 1 }}
            initial={false}
            animate={{
              y: i <= index ? '0%' : '108%',
              scale: i < index ? 0.92 : 1,
            }}
            transition={{ duration: 0.85, ease: riseEase }}
          >
            {renderItem(item, i, index)}
          </motion.div>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-2">
        <button type="button" className="rail-btn" onClick={prev} aria-label="Previous" disabled={index === 0}>
          <ChevronUp size={18} />
        </button>
        <button
          type="button"
          className="rail-btn"
          onClick={next}
          aria-label="Next"
          disabled={index === items.length - 1}
        >
          <ChevronDown size={18} />
        </button>
      </div>
    </div>
  );
}
