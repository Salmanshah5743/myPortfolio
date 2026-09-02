import { useReveal } from '../hooks/useReveal';

const reasons = [
  {
    title: '11+ Years of Experience',
    description: 'Over a decade of practical web development work across corporate, eCommerce, industrial and service industries.',
  },
  {
    title: 'WordPress & Front-End Depth',
    description: 'Deep working knowledge of WordPress, WooCommerce, custom themes, plugin development, PHP and modern front-end technologies.',
  },
  {
    title: 'Design & Development Bridge',
    description: 'Ability to understand both visual design intent and technical implementation, reducing friction between teams.',
  },
  {
    title: 'Multi-Industry Perspective',
    description: 'Experience building for automotive, logistics, manufacturing, technology, eCommerce and professional services.',
  },
  {
    title: 'Performance-Focused',
    description: 'Websites built with attention to loading speed, PageScore optimization, SEO-friendly structure and accessibility.',
  },
  {
    title: 'Reliable Execution',
    description: 'Consistent delivery of production-ready websites that work across browsers, devices and real-world conditions.',
  },
  {
    title: 'Collaborative Approach',
    description: 'Comfortable working with designers, back-end developers, project managers and stakeholders to achieve shared goals.',
  },
  {
    title: 'Problem-Solving Orientation',
    description: 'Hands-on troubleshooting, debugging and implementation across both front-end and WordPress back-end environments.',
  },
];

export default function WhyMe() {
  const { ref, isRevealed } = useReveal();

  return (
    <section className="relative py-28 md:py-36">
      <div className="section-padding-narrow max-w-[1400px] mx-auto">
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} mb-14`}>
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Why Work With Me
          </span>
          <h2 className="section-heading max-w-[500px]">
            Built for <span className="text-accent">Production.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] border border-white/[0.06] rounded-2xl overflow-hidden">
          {reasons.map((reason, i) => {
            const { ref: cardRef, isRevealed: cardRevealed } = useReveal(0.1);
            return (
              <div
                key={reason.title}
                ref={cardRef}
                className={`bg-dark-900 p-8 md:p-10 hover:bg-dark-800/50 transition-colors duration-300 reveal ${cardRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-accent/30 font-mono text-xs mt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
