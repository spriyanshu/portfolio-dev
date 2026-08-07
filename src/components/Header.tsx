import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PersonalInfo } from '@/types';
import { FivePointStar } from './Stickers';
import { confettiFromEvent } from '@/utils/confetti';

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const navItems = [
  { name: 'about', href: '#about' },
  { name: 'work', href: '#projects' },
  { name: 'lab', href: '#building' },
  { name: 'gigs', href: '#experience' },
  { name: 'life', href: '#life' },
];

export const Header = ({ personalInfo }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="fixed top-3 md:top-4 left-0 right-0 z-50 px-4"
      >
        <nav
          className="container-custom flex items-center justify-between paper transition-all duration-300"
          style={{
            borderRadius: 999,
            padding: '10px 18px',
            boxShadow: isScrolled
              ? '0 12px 30px rgba(40,34,80,0.28)'
              : '0 8px 22px rgba(40,34,80,0.18)',
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="sticker w-9 h-9 animate-wiggle text-candy-yellow">
              <FivePointStar className="w-5 h-5" style={{ color: 'var(--yellow)' }} />
            </span>
            <span className="font-script text-2xl md:text-3xl font-bold text-ink leading-none">
              {personalInfo.name.split(' ')[0]}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-marker text-lg text-ink-soft hover:text-ink transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={confettiFromEvent}
              className="btn-candy pink !py-2 !px-5 !text-base"
            >
              say hi!
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden sticker w-10 h-10 text-ink"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-7"
            style={{ background: 'var(--lav)' }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 16, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: i % 2 ? 3 : -3 }}
                transition={{ delay: i * 0.08 }}
                className="font-hand text-5xl text-ink"
              >
                {item.name}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                confettiFromEvent(e);
                setIsMobileMenuOpen(false);
              }}
              className="btn-candy pink mt-2"
            >
              say hi!
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
