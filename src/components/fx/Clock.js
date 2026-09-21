'use client';

import { useEffect, useState } from 'react';
import { site } from '@/data/site';

export default function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        }).format(new Date()),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="hidden items-center gap-3 text-[0.72rem] uppercase tracking-[0.16em] text-muted lg:flex">
      <span>{site.timezone}</span>
      <span className="min-w-[4.7rem] tabular-nums tracking-[0.12em]">{time}</span>
    </span>
  );
}
