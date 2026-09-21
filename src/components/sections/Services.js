'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Magnetic from '@/components/fx/Magnetic';
import { site } from '@/data/site';
import { btnPrimary } from '@/lib/ui';

function ServiceBody({ service, index, count }) {
  return (
    <div className="service-card flex h-full min-h-0 flex-col justify-between overflow-y-auto rounded-3xl border border-line bg-card p-5 sm:rounded-[1.75rem] sm:p-10 md:p-12">
      <div>
        {index === 0 && (
          <p className="mb-4 text-[12px] uppercase tracking-[0.16em] text-muted sm:mb-6">Services</p>
        )}
        <p className="text-[13px] uppercase tracking-[0.16em] text-muted">
          {service.number} / {String(count).padStart(2, '0')}
        </p>
        <h2 className="mt-3 text-[clamp(2rem,11vw,6.5rem)] leading-[0.88] font-medium tracking-tighter sm:mt-5">
          {service.title}
        </h2>
        <p className="mt-4 max-w-[42ch] text-[15px] leading-7 text-muted sm:mt-6 sm:text-[18px]">{service.description}</p>
      </div>
      <div>
        <ul className="mt-6 flex list-none flex-col gap-2 p-0 text-[14px] text-muted sm:mt-8 sm:gap-2.5 sm:text-[16px]">
          {service.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-green font-mono">{'//'}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Magnetic className="mt-7 sm:mt-10">
          <a className={btnPrimary} href="#contact">
            Start a Project
          </a>
        </Magnetic>
      </div>
    </div>
  );
}

function ServiceSlide({ service, index, count, progress }) {
  const x = useTransform(
    progress,
    index === 0 ? [0, 1] : [(index - 1) / (count - 1), index / (count - 1)],
    index === 0 ? ['0%', '0%'] : ['100%', '0%'],
  );

  return (
    <motion.article className="absolute inset-0 transform-gpu will-change-transform" style={{ x, zIndex: index + 1 }}>
      <ServiceBody service={service} index={index} count={count} />
    </motion.article>
  );
}

function Services() {
  const ref = useRef(null);
  const count = site.services.length;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="services" className="relative z-1 pt-10 sm:pt-16">
      <div ref={ref} className="relative" style={{ height: `${count * 100}svh` }}>
        <div className="service-hscroll sticky top-0 h-svh overflow-hidden transform-gpu">
          {site.services.map((service, index) => (
            <ServiceSlide
              key={service.number}
              service={service}
              index={index}
              count={count}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
