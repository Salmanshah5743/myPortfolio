import { useReveal } from '../hooks/useReveal';

export default function About() {
  const { ref: headingRef, isRevealed: headingRevealed } = useReveal();
  const { ref: textRef, isRevealed: textRevealed } = useReveal();
  const { ref: infoRef, isRevealed: infoRevealed } = useReveal(0.2);

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
          {/* Left: heading + copy */}
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
                {[
                  { label: 'Role', value: 'UI/UX Developer at Nanosoft' },
                  { label: 'Based', value: 'Karachi, Pakistan' },
                  { label: 'Experience', value: '11+ Years' },
                  { label: 'Focus', value: 'WordPress • Front-End • WooCommerce' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-[0.15em] text-accent/70 font-medium">
                      {item.label}
                    </span>
                    <span className="text-white text-base font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
