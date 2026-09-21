'use client';

import { motion } from 'motion/react';
import Magnetic from '@/components/fx/Magnetic';
import { site } from '@/data/site';
import { riseEase } from '@/lib/motion';
import { btnPrimary, container } from '@/lib/ui';

function Hero() {
  return (
    <section
      id="home"
      className="relative z-1 flex min-h-svh items-center overflow-hidden pt-[max(6.5rem,env(safe-area-inset-top))] pb-20"
    >
      <div className={`${container} flex flex-col justify-center`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Hero Text Column */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <motion.h1
              className="hero-mark brand-mark font-display font-medium"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: riseEase }}
            >
              {site.brand}
            </motion.h1>
            <motion.p
              className="mt-7 max-w-[40ch] text-[16px] leading-7 tracking-normal text-muted sm:mt-9 sm:text-[18px] sm:leading-8"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.08, ease: riseEase }}
            >
              {site.hero.body}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-5 sm:mt-10 sm:gap-6"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.16, ease: riseEase }}
            >
              <p className="inline-flex items-center gap-2 text-[15px] tracking-normal text-fg">
                <span className="pulse-dot h-2 w-2 rounded-full bg-green" />
                {site.hero.eyebrow}
              </p>
              <Magnetic>
                <a className={`${btnPrimary} tracking-normal`} href={site.hero.primaryCta.href}>
                  {site.hero.primaryCta.label}
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Hero Image Column */}
          <motion.div
            className="flex justify-center lg:col-span-5"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: riseEase }}
          >
            <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl transform-gpu lg:max-w-none">
              <div className="relative aspect-[4/4] w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/robot-hero.jpg"
                  alt="ASHWINRAM - Software Developer"
                  className="h-full w-full object-cover object-center transform-gpu"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/70 px-4 py-2.5 backdrop-blur-md">
                  <div className="flex items-center gap-2.5">
                    <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-green" />
                    <span className="text-[12px] font-mono uppercase tracking-wider text-fg">{site.role}</span>
                  </div>
                  {/* <span className="text-[11px] font-mono text-muted">{site.timezone}</span> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <p className="absolute right-[max(1.75rem,env(safe-area-inset-right))] bottom-6 text-[13px] tracking-normal text-muted sm:right-9 sm:bottom-8">
        © 2026
      </p>
    </section>
  );
}

export default Hero;
