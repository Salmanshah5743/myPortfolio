import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { experience } from '../data/experience';

function TimelineEntry({ item, index }: { item: typeof experience[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, isRevealed } = useReveal(0.15);

  return (
    <div
      ref={ref}
      className={`relative pl-10 md:pl-16 pb-14 last:pb-0 reveal ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] md:left-[15px] top-3 bottom-0 w-[1px] bg-white/[0.06]" />

      {/* Timeline dot */}
      <div className={`absolute left-[6px] md:left-[10px] top-2 w-3 h-3 rounded-full border-2 transition-all duration-500 ${
        item.current
          ? 'border-accent bg-accent/30 shadow-[0_0_12px_rgba(72,199,181,0.3)]'
          : 'border-white/20 bg-dark-900'
      }`} />

      <div className="group">
        {/* Period */}
        <span className="text-xs font-mono text-muted/60 tracking-wider block mb-2">
          {item.period}
        </span>

        {/* Company & Role */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
          {item.company}
        </h3>
        <p className="text-accent text-sm font-medium mb-4">
          {item.role}
        </p>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-4 max-w-[600px]">
          {item.description}
        </p>

        {/* Expandable highlights */}
        {item.highlights.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs uppercase tracking-[0.15em] text-accent/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 mb-3"
            >
              {expanded ? 'Less detail' : 'Key responsibilities'}
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="space-y-2 pl-4">
                {item.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-muted/80 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, isRevealed } = useReveal();

  return (
    <section id="experience" className="relative py-28 md:py-36 bg-dark-800/30">
      <div className="section-padding-narrow max-w-[1400px] mx-auto">
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} mb-14`}>
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Experience
          </span>
          <h2 className="section-heading mb-4">
            Career <span className="text-accent">Timeline.</span>
          </h2>
          <p className="text-muted text-lg max-w-[500px]">
            A continuous path of growth across web development, from foundation to leadership.
          </p>
        </div>

        <div className="max-w-[700px]">
          {experience.map((item, i) => (
            <TimelineEntry key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
