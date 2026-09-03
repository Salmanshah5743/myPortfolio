import { useReveal } from '../hooks/useReveal';
import { MapPinIcon, BriefcaseIcon, CalendarIcon, TargetIcon } from './Icons';

export default function About() {
  const { ref: headingRef, isRevealed: headingRevealed } = useReveal();
  const { ref: textRef, isRevealed: textRevealed } = useReveal();
  const { ref: infoRef, isRevealed: infoRevealed } = useReveal(0.2);

  const infoItems = [
    { label: 'Role', value: 'UI/UX Developer at Nanosoft', icon: <BriefcaseIcon className="w-4 h-4" /> },
    { label: 'Based', value: 'Karachi, Pakistan', icon: <MapPinIcon className="w-4 h-4" /> },
    { label: 'Experience', value: '11+ Years', icon: <CalendarIcon className="w-4 h-4" /> },
    { label: 'Focus', value: 'WordPress • Front-End • WooCommerce', icon: <TargetIcon className="w-4 h-4" /> },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="section-padding-narrow max-w-[1400px] mx-auto">
        {/* Section label */}
        <div
          ref={headingRef}
          className={`reveal ${headingRevealed ? 'revealed' : ''}`}
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-6 block">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20">
          {/* Left: heading + copy + avatar */}
          <div>
            <h2
              ref={textRef}
              className={`section-heading mb-8 reveal ${textRevealed ? 'revealed' : ''}`}
            >
              Development With{' '}
              <span className="text-accent">Design Awareness.</span>
            </h2>

            <div className="space-y-5 text-muted text-base md:text-lg leading-relaxed">
              <p className={`reveal reveal-delay-1 ${textRevealed ? 'revealed' : ''}`}>
                For more than a decade, I've worked at the intersection of design and development, turning visual concepts and business requirements into functional digital experiences. My work ranges from corporate and industrial platforms to eCommerce stores, service businesses and highly customized WordPress websites.
              </p>
              <p className={`reveal reveal-delay-2 ${textRevealed ? 'revealed' : ''}`}>
                I focus on responsive implementation, clean front-end development, WordPress and WooCommerce customization, performance and usability — while working closely with designers and back-end developers to deliver reliable production-ready websites.
              </p>
            </div>

            {/* Profile Avatar */}
            <div className={`mt-10 reveal reveal-delay-3 ${textRevealed ? 'revealed' : ''}`}>
              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-bold font-display text-accent">SS</span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-green-400 border-2 border-dark-900" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Syed Salman Shah</p>
                  <p className="text-xs text-muted">UI/UX Developer</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
                    <span className="text-[10px] text-green-400/80 font-medium uppercase tracking-wider">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: info card */}
          <div
            ref={infoRef}
            className={`reveal-right ${infoRevealed ? 'revealed' : ''}`}
          >
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/60 mb-8">
                Currently
              </h3>
              <div className="space-y-6">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-accent/50 mt-0.5 flex-shrink-0">
                      {item.icon}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs uppercase tracking-[0.15em] text-accent/70 font-medium">
                        {item.label}
                      </span>
                      <span className="text-white text-base font-medium">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech stack mini icons */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-3 font-medium">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['WordPress', 'WooCommerce', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-white/40 hover:text-accent/70 hover:border-accent/20 transition-all duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/30" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
