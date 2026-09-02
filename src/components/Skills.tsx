import { useReveal } from '../hooks/useReveal';
import { skills } from '../data/experience';

export default function Skills() {
  const { ref, isRevealed } = useReveal(0.1);

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-padding-narrow max-w-[1400px] mx-auto mb-12">
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''}`}>
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Technologies
          </span>
          <h2 className="section-heading">
            Tools & <span className="text-accent">Technologies.</span>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-dark-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-dark-900 to-transparent z-10" />

        <div className="flex">
          <div className="flex gap-4 skills-marquee">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={`${skill}-${i}`}
                className="flex-shrink-0 px-6 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm font-medium text-white/60 hover:text-accent hover:border-accent/30 transition-all duration-300 cursor-default whitespace-nowrap"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second row - reverse direction */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-dark-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-dark-900 to-transparent z-10" />

        <div className="flex">
          <div className="flex gap-4 skills-marquee" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
            {[...skills.reverse(), ...skills].map((skill, i) => (
              <div
                key={`rev-${skill}-${i}`}
                className="flex-shrink-0 px-6 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm font-medium text-white/60 hover:text-accent hover:border-accent/30 transition-all duration-300 cursor-default whitespace-nowrap"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
