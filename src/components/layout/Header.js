'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Moon, Sun } from '@/lib/icons';
import Clock from '@/components/fx/Clock';
import { SocialLink } from '@/components/ui/SocialLinks';
import { site } from '@/data/site';
import { riseEase } from '@/lib/motion';
import { iconBtn } from '@/lib/ui';

const SHOW_THEME_TOGGLE = false;

function Header() {
  const [theme, setTheme] = useState('dark');
  const [themeReady, setThemeReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!SHOW_THEME_TOGGLE) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      setThemeReady(true);
      return;
    }
    const saved = window.localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      if (typeof window !== 'undefined' && typeof window.lenis?.stop === 'function') {
        window.lenis.stop();
      }
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
    } else {
      if (typeof window !== 'undefined' && typeof window.lenis?.start === 'function') {
        window.lenis.start();
      }
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      if (typeof window !== 'undefined' && typeof window.lenis?.start === 'function') {
        window.lenis.start();
      }
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="pointer-events-none relative z-3 flex items-center justify-between gap-3 py-[max(0.7rem,env(safe-area-inset-top))] pr-[max(1.75rem,env(safe-area-inset-right))] pl-[max(1.75rem,env(safe-area-inset-left))] sm:gap-6 sm:px-9 sm:py-4">
        <div className="flex min-w-0 items-center gap-5 sm:gap-8 lg:gap-10">
          <a
            href="#home"
            onClick={closeMenu}
            className="pointer-events-auto relative z-4 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[0.85rem] font-bold tracking-tighter text-black sm:h-10 sm:w-10 sm:text-[0.95rem]"
            aria-label="Home"
          >
            AR
          </a>
          <nav className={`pointer-events-auto hidden items-center gap-5 lg:flex ${menuOpen ? 'lg:hidden' : ''}`} aria-label="Primary">
            {site.nav.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted transition-colors duration-300 hover:text-fg"
              >
                <span className="text-[10px] text-green">0{index + 1} /</span>
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="pointer-events-auto relative z-4 flex shrink-0 items-center gap-3 sm:gap-5">
          {!menuOpen ? (
            <>
              <a
                className="hidden text-[11px] font-medium lowercase tracking-[0.12em] text-muted transition-colors duration-300 hover:text-fg xl:inline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              <Clock />
            </>
          ) : null}
          {SHOW_THEME_TOGGLE ? (
            <button
              type="button"
              className={iconBtn}
              onClick={() => {
                const next = theme === 'dark' ? 'light' : 'dark';
                setTheme(next);
                document.documentElement.setAttribute('data-theme', next);
                window.localStorage.setItem('theme', next);
              }}
              aria-label={!themeReady || theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {!themeReady || theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          ) : null}
          <button
            type="button"
            className={`inline-flex h-10 min-w-[4.4rem] items-center justify-center rounded-[50px] px-3 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 sm:h-10.5 sm:min-w-[5.6rem] sm:px-4 sm:text-[12px] ${
              menuOpen
                ? 'bg-accent text-ink'
                : 'border border-line bg-glass text-fg backdrop-blur-md hover:border-fg'
            }`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-gradient pointer-events-auto fixed inset-0 z-1 flex flex-col overflow-hidden px-[max(1.75rem,env(safe-area-inset-left))] pt-25 pr-[max(1.75rem,env(safe-area-inset-right))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: riseEase }}
          >
            <p className="menu-watermark" aria-hidden="true">
              {site.brand.toUpperCase()}_
            </p>
            <nav className="menu-nav relative z-2 flex min-h-0 flex-1 flex-col items-end justify-center gap-0 text-right" aria-label="Menu">
              {site.nav.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="menu-link text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.92] font-medium tracking-[-0.055em] text-fg transition-opacity duration-300"
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.07 * index, ease: riseEase }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            <div className="relative z-2 flex flex-wrap justify-center gap-x-5 gap-y-3 pt-6 text-[11px] uppercase tracking-[0.14em] text-muted sm:gap-x-7">
              {site.socials.map((link) => (
                <SocialLink
                  key={link.name}
                  name={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="hover:text-fg"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
