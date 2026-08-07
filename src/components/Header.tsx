import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { NAV_ITEMS, scrollToSection } from '@/lib/nav';
import { useActiveSection } from '@/hooks/useActiveSection';
import { PersonalInfo } from '@/types';

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

interface HeaderProps {
  personalInfo: PersonalInfo;
  onOpenPalette: () => void;
}

export const Header = ({ personalInfo, onOpenPalette }: HeaderProps) => {
  const { scrollY, scrollYProgress } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useMotionValueEvent(scrollY, 'change', (value) => setCondensed(value > 24));

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const go = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          className="h-px origin-left bg-signal/70"
          style={{ scaleX: scrollYProgress }}
        />

        <div
          className={`transition-all duration-500 ease-out ${
            condensed ? 'glass border-b border-line' : 'border-b border-transparent'
          }`}
        >
          <div className="shell flex h-14 items-center justify-between gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2.5"
              aria-label="Back to top"
            >
              <span className="grid h-7 w-7 place-items-center rounded-md border border-line-strong bg-white/[0.04] font-mono text-[10px] font-medium tracking-tight text-ink transition-colors duration-300 group-hover:border-signal/50 group-hover:text-signal">
                PS
              </span>
              <span className="hidden text-sm font-medium tracking-tight text-ink sm:block">
                {personalInfo.name}
              </span>
            </button>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={`relative rounded-md px-3 py-1.5 text-sm transition-colors duration-300 ${
                    active === item.id ? 'text-ink' : 'text-ink-faint hover:text-ink-muted'
                  }`}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md border border-line bg-white/[0.04]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenPalette}
                className="hidden items-center gap-2 rounded-md border border-line bg-white/[0.02] py-1.5 pl-2.5 pr-2 text-ink-faint transition-colors duration-300 hover:border-line-strong hover:text-ink-muted sm:flex"
                aria-label="Open command menu"
              >
                <span className="font-mono text-2xs">Jump to</span>
                <kbd className="rounded border border-line bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-ink-faint">
                  ⌘K
                </kbd>
              </button>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-md bg-ink px-3 py-1.5 text-sm font-medium text-base transition-colors duration-300 hover:bg-white sm:block"
              >
                Résumé
              </a>

              <button
                onClick={() => setMenuOpen((open) => !open)}
                className="grid h-8 w-8 place-items-center rounded-md border border-line text-ink-muted md:hidden"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <span className="relative block h-3 w-4">
                  <span
                    className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ${
                      menuOpen ? 'top-1.5 rotate-45' : 'top-0.5'
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ${
                      menuOpen ? 'top-1.5 -rotate-45' : 'top-2.5'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-base/95 backdrop-blur-xl md:hidden"
          >
            <nav className="shell flex h-full flex-col justify-center gap-1 pb-16">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => go(item.id)}
                  className="flex items-baseline gap-4 border-b border-line py-4 text-left"
                >
                  <span className="font-mono text-2xs text-signal">{item.index}</span>
                  <span className="display text-3xl text-ink">{item.label}</span>
                </motion.button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-8 w-full"
              >
                Download résumé
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
