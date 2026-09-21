'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { site } from '@/data/site';
import { ArrowUpRight, ExternalLink } from '@/lib/icons';
import { displayHeading, btnPrimary } from '@/lib/ui';
import TechIcon from '@/components/ui/TechIcon';
import Magnetic from '@/components/fx/Magnetic';

function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const filteredProjects = site.projects.filter((project) => {
    if (activeFilter === 'live') return project.status === 'live';
    if (activeFilter === 'in-progress') return project.status === 'in-progress';
    return true;
  });

  const liveCount = site.projects.filter((p) => p.status === 'live').length;
  const inProgressCount = site.projects.filter((p) => p.status === 'in-progress').length;

  return (
    <section id="work" className="relative z-1 py-14 sm:py-20">
      {/* Marquee Header Banner */}
      <div className="marquee border-y border-line py-5 sm:py-6">
        <div className="marquee-track font-medium text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-tighter opacity-85">
          <span className="px-8">{site.workMarquee}</span>
          <span className="px-8">{site.workMarquee}</span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        {/* Section Header - Clean styling matching About Me */}
        <div className="mb-6 sm:mb-10">
          <h2 className={`${displayHeading} mb-0`}>Works</h2>
        </div>

        {/* Category Filter Tabs Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 no-scrollbar sm:flex-wrap sm:gap-3 sm:pb-5">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`shrink-0 rounded-full px-4 py-2 text-[12.5px] font-medium tracking-wide transition-all duration-300 sm:px-5 sm:text-[14px] ${
              activeFilter === 'all'
                ? 'bg-fg text-bg shadow-md'
                : 'border border-line text-muted hover:border-fg/40 hover:text-fg'
            }`}
          >
            All Works ({site.projects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('live')}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-medium tracking-wide transition-all duration-300 sm:px-5 sm:text-[14px] ${
              activeFilter === 'live'
                ? 'bg-fg text-bg shadow-md'
                : 'border border-line text-muted hover:border-fg/40 hover:text-fg'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-green pulse-dot"></span>
            Live Products ({liveCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('in-progress')}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-medium tracking-wide transition-all duration-300 sm:px-5 sm:text-[14px] ${
              activeFilter === 'in-progress'
                ? 'bg-fg text-bg shadow-md'
                : 'border border-line text-muted hover:border-fg/40 hover:text-fg'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-amber-400"></span>
            In Progress ({inProgressCount})
          </button>
        </div>

        {/* Project Cards Section (Responsive List on Mobile, Sticky Stack on Desktop) */}
        <div className="relative mt-6 sm:mt-8 pb-12 sm:pb-20">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const formattedIndex = String(index + 1).padStart(2, '0');
              const totalCount = String(filteredProjects.length).padStart(2, '0');
              const isLive = project.status === 'live';

              // Sticky offset for desktop stack
              const topOffset = 72 + index * 14;

              return (
                <motion.article
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  key={project.id || project.title}
                  style={
                    isDesktop
                      ? { top: `${topOffset}px`, zIndex: index + 1 }
                      : { zIndex: index + 1 }
                  }
                  className={`mb-6 sm:mb-8 group overflow-hidden rounded-[20px] sm:rounded-[28px] border border-line/90 bg-[#0e0e0e] p-4.5 sm:p-7 lg:p-8 transition-colors duration-300 hover:border-fg/40 transform-gpu ${
                    isDesktop
                      ? 'sticky shadow-[0_-12px_40px_rgba(0,0,0,0.88)] will-change-[transform,top]'
                      : 'relative shadow-lg'
                  }`}
                >
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
                    {/* Left Info Column (5 Cols) */}
                    <div className="flex flex-col justify-between lg:col-span-5">
                      <div>
                        {/* Meta Header Row */}
                        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-line/60 pb-3">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[14px] font-semibold text-green sm:text-[15px]">
                              {formattedIndex} <span className="text-muted/60">/ {totalCount}</span>
                            </span>
                            {isLive ? (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-green/30 bg-green/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-green uppercase sm:text-[11px]">
                                <span className="h-1.5 w-1.5 rounded-full bg-green pulse-dot"></span>
                                Live Product
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-amber-400 uppercase sm:text-[11px]">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                                In Development
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="brand-mark text-[26px] font-medium tracking-tight text-fg transition-colors group-hover:text-white sm:text-[32px] lg:text-[36px] leading-[1.1]">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 text-[15px] font-medium text-fg/90 sm:text-[17px]">
                          {project.tagline}
                        </p>

                        <p className="mt-3 text-[13.5px] leading-relaxed text-muted sm:text-[14.5px]">
                          {project.overview}
                        </p>

                        {/* Feature Highlights */}
                        {project.features && project.features.length > 0 && (
                          <div className="mt-4 space-y-1.5 border-t border-line/60 pt-3">
                            {project.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-[13px] text-muted sm:text-[14px]">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green shrink-0"></span>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Tech Badges & Live Link Button */}
                      <div className="mt-5 border-t border-line/60 pt-4">
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-fg/5 px-3 py-1 text-[11.5px] font-mono text-fg/90 sm:text-[12.5px]"
                            >
                              <TechIcon name={tech} className="h-3.5 w-3.5 text-green" />
                              <span>{tech}</span>
                            </span>
                          ))}
                        </div>

                        <Magnetic>
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`${btnPrimary} group/btn tracking-normal`}
                          >
                            <span>Visit Live Site</span>
                            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </a>
                        </Magnetic>
                      </div>
                    </div>

                    {/* Right Image Showcase Column (7 Cols) */}
                    <div className="lg:col-span-7">
                      <div className="relative overflow-hidden rounded-2xl border border-line/80 bg-neutral-900 shadow-xl transition-colors duration-300 group-hover:border-fg/40 transform-gpu">
                        {/* Browser Top Bar */}
                        <div className="flex items-center justify-between border-b border-line/60 bg-neutral-950/90 px-4 py-2.5 backdrop-blur-sm">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-green/80"></span>
                          </div>
                          <span className="font-mono text-[11px] text-muted/70 truncate max-w-[200px] sm:max-w-[300px] sm:text-[12px]">
                            {project.href}
                          </span>
                          <span className="text-[11px] font-mono text-muted/50 sm:text-[12px]">{project.year}</span>
                        </div>

                        {/* Compact Interactive Image Frame */}
                        <div className="group/img relative aspect-[16/10] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105 transform-gpu"
                          />
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/img:opacity-100 transform-gpu"
                          >
                            <span className="group/launch flex items-center gap-2 rounded-full border border-white/30 bg-black/80 px-6 py-3 text-[14px] font-semibold text-white shadow-2xl backdrop-blur-md transition-[border-color,background-color] duration-300 hover:border-white hover:bg-black sm:text-[15px]">
                              <span className="h-2 w-2 rounded-full bg-green pulse-dot"></span>
                              <span>Visit Live Site</span>
                              <ExternalLink size={17} className="transition-transform duration-300 group-hover/launch:translate-x-0.5 group-hover/launch:-translate-y-0.5" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Work;
