'use client';

import { motion } from 'motion/react';
import { rise } from '@/lib/motion';

export default function Reveal({ as = 'div', className = '', delay = 0, children }) {
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={rise.initial}
      whileInView={rise.whileInView}
      viewport={rise.viewport}
      transition={{ ...rise.transition, delay: delay / 1000 }}
    >
      {children}
    </Tag>
  );
}
