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

const floatingTechBadges = [
  { label: 'WordPress', top: '18%', left: '72%', delay: '0.8s', animDelay: '0s' },
  { label: 'React', top: '28%', left: '78%', delay: '1s', animDelay: '0.5s' },
  { label: 'WooCommerce', top: '15%', left: '85%', delay: '1.2s', animDelay: '1s' },
  { label: 'JavaScript', top: '72%', left: '68%', delay: '1.4s', animDelay: '1.5s' },
  { label: 'PHP', top: '65%', left: '82%', delay: '1.6s', animDelay: '2s' },
  { label: 'HTML5', top: '80%', left: '75%', delay: '1.8s', animDelay: '0.8s' },
];

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

      {/* Floating tech element — code window */}
      <div className="absolute top-[16%] right-[8%] hidden lg:block">
        <div className={`transition-all duration-[1.5s] delay-[0.8s] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-52 h-36 border border-white/[0.06] rounded-xl bg-dark-800/40 backdrop-blur-sm p-4 animate-float shadow-lg shadow-black/10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            </div>
            <div className="space-y-1.5 font-mono text-[10px]">
              <div className="flex gap-1">
                <span className="text-purple-400/50">const</span>
                <span className="text-white/30">app</span>
                <span className="text-white/20">=</span>
                <span className="text-accent/40">() =&gt;</span>
              </div>
              <div className="flex gap-1">
                <span className="text-white/20 ml-2">{'{'}</span>
              </div>
              <div className="flex gap-1">
                <span className="text-white/30 ml-4">return</span>
                <span className="text-accent/30">production</span>
              </div>
              <div className="flex gap-1">
                <span className="text-white/20 ml-2">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tech element — component card */}
      <div className="absolute bottom-[22%] left-[6%] hidden lg:block">
        <div className={`transition-all duration-[1.5s] delay-[1.2s] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-44 h-44 border border-white/[0.06] rounded-xl bg-dark-800/40 backdrop-blur-sm p-4 shadow-lg shadow-black/10" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-3.5 h-3.5 text-accent/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 3v18"/>
              </svg>
              <span className="text-[10px] font-mono text-accent/40">{'<Component />'}</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                <div className="h-1.5 bg-white/[0.08] rounded-full w-14" />
                <div className="h-1.5 bg-accent/20 rounded-full w-8" />
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/30" />
                <div className="h-1.5 bg-white/[0.06] rounded-full w-10" />
                <div className="h-1.5 bg-white/[0.04] rounded-full w-6" />
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/30" />
                <div className="h-1.5 bg-white/[0.07] rounded-full w-16" />
                <div className="h-1.5 bg-accent/15 rounded-full w-4" />
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/30" />
                <div className="h-1.5 bg-white/[0.05] rounded-full w-12" />
              </div>
            </div>
            {/* Small decorative bar */}
            <div className="mt-3 h-6 rounded-md bg-accent/[0.06] border border-accent/[0.1] flex items-center justify-center">
              <span className="text-[8px] font-mono text-accent/30">responsive: true</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tech badges */}
      <div className="hidden xl:block">
        {floatingTechBadges.map((badge) => (
          <div
            key={badge.label}
            className={`absolute transition-all duration-[1.5s] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ top: badge.top, left: badge.left, transitionDelay: badge.delay }}
          >
            <div
              className="px-3 py-1.5 rounded-full border border-white/[0.06] bg-dark-800/50 backdrop-blur-sm text-[10px] font-mono text-white/30 hover:text-accent/60 hover:border-accent/20 transition-all duration-500 cursor-default"
              style={{ animation: `float 6s ease-in-out infinite`, animationDelay: badge.animDelay }}
            >
              {badge.label}
            </div>
          </div>
        ))}
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
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                <span className="text-sm font-mono text-white/70">WordPress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                <span className="text-sm font-mono text-white/70">WooCommerce</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                <span className="text-sm font-mono text-white/70">Front-End</span>
              </div>
            </div>
            <p className="text-sm text-muted mt-2">Core Stack</p>
          </div>
        </div>
      </div>

    </section>
  );
}
