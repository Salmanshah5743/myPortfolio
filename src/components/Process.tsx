import { useReveal } from '../hooks/useReveal';
import { UnderstandIcon, BuildIcon, RefineIcon, DeliverIcon } from './Icons';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Business requirements, audience, content and functionality.',
    icon: <UnderstandIcon className="w-6 h-6" />,
  },
  {
    number: '02',
    title: 'Build',
    description: 'Convert approved designs and requirements into responsive production-ready experiences.',
    icon: <BuildIcon className="w-6 h-6" />,
  },
  {
    number: '03',
    title: 'Refine',
    description: 'Testing, responsive adjustments, browser compatibility and performance optimization.',
    icon: <RefineIcon className="w-6 h-6" />,
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Reliable final implementation with maintainable content and functionality.',
    icon: <DeliverIcon className="w-6 h-6" />,
  },
];

export default function Process() {
  const { ref, isRevealed } = useReveal();

  return (
    <section className="relative py-24 md:py-32 bg-dark-800/30">
      <div className="section-padding-narrow max-w-[1400px] mx-auto">
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} mb-14`}>
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Process
          </span>
          <h2 className="section-heading">
            How I <span className="text-accent">Work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const { ref: cardRef, isRevealed: cardRevealed } = useReveal(0.15);
            return (
              <div
                key={step.number}
                ref={cardRef}
                className={`reveal ${cardRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative group">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-accent/[0.08] border border-accent/[0.15] flex items-center justify-center text-accent/70 mb-5 group-hover:bg-accent/[0.12] group-hover:text-accent group-hover:border-accent/25 transition-all duration-500">
                    {step.icon}
                  </div>

                  <span className="text-[56px] font-bold text-white/[0.03] font-display leading-none block mb-2 select-none">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 -mt-5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-[1px] bg-white/[0.06]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
