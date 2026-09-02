import { useState, useEffect } from 'react';
import { useActiveSection } from '../hooks/useReveal';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = ['hero', 'about', 'expertise', 'skills', 'experience', 'work', 'contact'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[72px] px-6 md:px-12 lg:px-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2 group"
          >
            <span className="text-accent font-bold text-lg tracking-tight font-mono">
              SS
            </span>
            <span className="hidden sm:inline text-sm font-medium text-white/80 group-hover:text-white transition-colors">
              Salman Shah
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`nav-link text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white active'
                    : 'text-white/50 hover:text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="ml-4 text-[13px] font-semibold uppercase tracking-wide px-5 py-2.5 rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-dark-900 transition-all duration-300"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay fixed inset-0 z-40 md:hidden ${mobileOpen ? 'open' : ''}`}
      >
        <div className="absolute inset-0 bg-dark-900/95 backdrop-blur-lg" onClick={() => setMobileOpen(false)} />
        <div className="mobile-menu-content absolute right-0 top-0 bottom-0 w-full bg-dark-800/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-2xl font-semibold text-white/80 hover:text-accent transition-colors"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="mt-4 text-lg font-semibold uppercase tracking-wide px-8 py-3 rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-dark-900 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}
