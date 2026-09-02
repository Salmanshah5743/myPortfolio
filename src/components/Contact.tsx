import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const { ref, isRevealed } = useReveal();
  const { ref: ctaRef, isRevealed: ctaRevealed } = useReveal(0.15);

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-dark-800/30">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.03] rounded-full blur-[120px]" />

      <div className="section-padding-narrow max-w-[1400px] mx-auto relative z-10">
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} text-center`}>
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-6 block">
            Get In Touch
          </span>

          <h2 className="section-heading text-display-lg mb-6 max-w-[700px] mx-auto">
            Have a project or{' '}
            <span className="text-accent">opportunity</span>{' '}
            in mind?
          </h2>

          <p className="text-muted text-lg max-w-[500px] mx-auto mb-12 leading-relaxed">
            I'm always interested in discussing challenging web projects and the next opportunity to build something meaningful.
          </p>
        </div>

        <div
          ref={ctaRef}
          className={`flex flex-col items-center gap-6 reveal ${ctaRevealed ? 'revealed' : ''}`}
        >
          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:salmanshah5743@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-dark-900 font-semibold text-sm rounded-full hover:bg-accent-light transition-all duration-300 group"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Send Me an Email
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/salmanshah5743/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/[0.12] text-white/80 font-semibold text-sm rounded-full hover:border-white/25 hover:text-white transition-all duration-300 group"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          {/* Location & Status */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm text-muted">
              <svg className="w-4 h-4 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Karachi, Pakistan
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
              Available for opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
