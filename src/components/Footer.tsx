export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <p className="text-xs text-muted/60">
          &copy; {currentYear} Syed Salman Shah
        </p>

        {/* Center: Specialties */}
        <p className="text-xs text-muted/40 hidden md:block">
          UI/UX &bull; WordPress &bull; Front-End
        </p>

        {/* Right: Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/salmanshah5743/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted/50 hover:text-accent transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:salmanshah5743@gmail.com"
            className="text-xs text-muted/50 hover:text-accent transition-colors duration-300"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="text-xs text-muted/50 hover:text-accent transition-colors duration-300 flex items-center gap-1"
          >
            Back to Top
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
