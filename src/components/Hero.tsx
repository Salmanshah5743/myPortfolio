import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isRevealed } = useReveal(0.3);

  useEffect(() => {
    if (!isRevealed) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isRevealed, target]);

  return (
    <div ref={ref}>
      <span className="text-3xl md:text-4xl font-bold text-white">{count}</span>
      <span className="text-accent text-3xl md:text-4xl font-bold">{suffix}</span>
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Subtle radial gradient */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px]" />

      {/* Floating tech elements */}
      <div className="absolute top-[20%] right-[10%] hidden lg:block">
        <div className={`transition-all duration-[1.5s] delay-[0.8s] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-48 h-32 border border-white/[0.06] rounded-xl bg-dark-800/30 backdrop-blur-sm p-4 animate-float">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
              <div className="w-2 h-2 rounded-full bg-green-400/60" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 bg-white/[0.06] rounded-full w-full" />
              <div className="h-1.5 bg-white/[0.04] rounded-full w-3/4" />
              <div className="h-1.5 bg-accent/20 rounded-full w-1/2" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[25%] left-[8%] hidden lg:block">
        <div className={`transition-all duration-[1.5s] delay-[1.2s] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-40 h-40 border border-white/[0.06] rounded-xl bg-dark-800/30 backdrop-blur-sm p-4" style={{ animationDelay: '1s' }}>
            <div className="text-[10px] font-mono text-accent/40 mb-2">{'{ component }'}</div>
            <div className="space-y-1">
              <div className="flex gap-1">
                <div className="h-1 bg-white/[0.08] rounded-full w-6" />
                <div className="h-1 bg-accent/30 rounded-full w-10" />
              </div>
              <div className="flex gap-1">
                <div className="h-1 bg-white/[0.06] rounded-full w-8" />
                <div className="h-1 bg-white/[0.04] rounded-full w-14" />
              </div>
              <div className="flex gap-1">
                <div className="h-1 bg-white/[0.08] rounded-full w-4" />
                <div className="h-1 bg-accent/20 rounded-full w-12" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-32 pb-20">
        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8 transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
          <span className="text-xs font-medium uppercase tracking-widest text-muted">
            Available for opportunities
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`max-w-[900px] font-display font-bold text-display-xl tracking-tight mb-8 transition-all duration-700 delay-[0.3s] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Building Digital{' '}
          <br className="hidden sm:block" />
          Experiences{' '}
          <span className="text-accent">That Perform.</span>
        </h1>

        {/* Supporting text */}
        <p
          className={`max-w-[600px] text-lg md:text-xl text-muted leading-relaxed mb-12 transition-all duration-700 delay-[0.5s] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          11+ years turning designs, ideas and business requirements into fast, responsive and production-ready websites.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap items-center gap-4 mb-20 transition-all duration-700 delay-[0.6s] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-dark-900 font-semibold text-sm rounded-full hover:bg-accent-light transition-all duration-300 group"
          >
            View My Work
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/[0.12] text-white/80 font-semibold text-sm rounded-full hover:border-white/25 hover:text-white transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-white/[0.06] transition-all duration-700 delay-[0.8s] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <AnimatedCounter target={11} suffix="+" />
            <p className="text-sm text-muted mt-1">Years Experience</p>
          </div>
          <div>
            <AnimatedCounter target={100} suffix="+" />
            <p className="text-sm text-muted mt-1">Web Projects</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">Multi</p>
            <p className="text-3xl md:text-4xl font-bold text-accent -mt-1">Industry</p>
            <p className="text-sm text-muted mt-1">Client Portfolio</p>
          </div>
          <div>
            <p className="text-sm font-mono text-accent/80 leading-relaxed">
              WordPress<br />
              WooCommerce<br />
              Front-End
            </p>
            <p className="text-sm text-muted mt-1">Core Stack</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-[1s] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted/60">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-muted/40 to-transparent animate-scroll-hint" />
      </div>
    </section>
  );
}
