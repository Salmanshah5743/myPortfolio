import { useReveal } from '../hooks/useReveal';
import { expertise } from '../data/experience';

function ExpertiseCard({ item, index }: { item: typeof expertise[0]; index: number }) {
  const { ref, isRevealed } = useReveal(0.15);

  return (
    <div
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="group glass-card p-8 md:p-10 h-full hover:border-accent/20 transition-all duration-500 relative overflow-hidden">
        {/* Number watermark */}
        <span className="absolute top-6 right-8 text-[80px] font-bold text-white/[0.03] font-display leading-none select-none group-hover:text-accent/[0.06] transition-colors duration-500">
          {item.number}
        </span>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono text-accent/60">{item.number}</span>
            <div className="w-8 h-[1px] bg-accent/30 group-hover:w-12 transition-all duration-500" />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
            {item.title}
          </h3>

          <p className="text-muted text-sm leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/[0.04] text-white/50 border border-white/[0.06] group-hover:border-accent/20 group-hover:text-accent/70 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

export default function Expertise() {
  const { ref, isRevealed } = useReveal();

  return (
    <section id="expertise" className="relative py-28 md:py-36 bg-dark-800/30">
      <div className="section-padding-narrow max-w-[1400px] mx-auto">
        <div
          ref={ref}
          className={`reveal ${isRevealed ? 'revealed' : ''}`}
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Expertise
          </span>
          <h2 className="section-heading mb-4">
            What I <span className="text-accent">Do Best.</span>
          </h2>
          <p className="text-muted text-lg max-w-[500px] mb-14">
            Deep technical capability across the platforms and tools that matter most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, i) => (
            <ExpertiseCard key={item.number} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
