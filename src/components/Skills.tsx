import { useReveal } from '../hooks/useReveal';
import { skills } from '../data/experience';

const skillIcons: Record<string, string> = {
  WordPress: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.3 12h3.5l1.96 5.44L10.46 12h3.48L9.88 21.08 5.8 12H3.3z',
  WooCommerce: 'M4 4h16l-1.5 10H5.5L4 4zm1.2 2l1 7h11.6l1-7H5.2z',
  Elementor: 'M12 2L2 7v10l10 5 10-5V7L12 2z',
  HTML5: 'M3 2l1.5 17L12 22l7.5-3L21 2H3z',
  CSS3: 'M3 2l1.5 17L12 22l7.5-3L21 2H3z',
  JavaScript: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z',
  PHP: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z',
  Bootstrap: 'M4 2h16v20H4V2z',
  Webflow: 'M4 2h16v20H4V2z',
  Framer: 'M4 2h16v20H4V2z',
  Git: 'M23.5 11.1L12.9.5c-.7-.7-1.7-.7-2.3 0L8.4 2.7l2.9 2.9c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.7 2.7c.6-.2 1.3-.1 1.8.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.6-1.2-.4-1.8L12.3 9.9v6.2c.2.1.3.2.5.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.2-.2.3-.3.5-.4V9.8z',
  jQuery: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z',
  'Responsive Design': 'M4 4h16v12H4V4zm2 14h12',
  'Performance Optimization': 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  SEO: 'M11 2a9 9 0 100 18 9 9 0 000-18zm0 14v-4m0-4h.01',
  'UI/UX': 'M12 2L2 7v10l10 5 10-5V7L12 2z',
  'Custom Themes': 'M3 3h18v18H3V3zm6 12l3-6 3 6',
  'Plugin Integration': 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
  Accessibility: 'M12 2a3 3 0 100 6 3 3 0 000-6zM4 10h16M8 10v12M16 10v12M6 22h4M14 22h4',
  'Git/FTP/SFTP': 'M23.5 11.1L12.9.5c-.7-.7-1.7-.7-2.3 0L8.4 2.7l2.9 2.9c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.7 2.7c.6-.2 1.3-.1 1.8.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.6-1.2-.4-1.8L12.3 9.9v6.2c.2.1.3.2.5.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.2-.2.3-.3.5-.4V9.8z',
};

function SkillPill({ skill }: { skill: string }) {
  const iconPath = skillIcons[skill];
  return (
    <div
      className="flex-shrink-0 flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm font-medium text-white/60 hover:text-accent hover:border-accent/30 hover:bg-accent/[0.04] transition-all duration-300 cursor-default whitespace-nowrap group"
    >
      {iconPath && (
        <svg className="w-3.5 h-3.5 text-white/20 group-hover:text-accent/50 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d={iconPath} />
        </svg>
      )}
      {skill}
    </div>
  );
}

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
              <SkillPill key={`${skill}-${i}`} skill={skill} />
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
              <SkillPill key={`rev-${skill}-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
