import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { projects, categories } from '../data/projects';

function FeaturedProject({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isRevealed } = useReveal(0.1);
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''}`}
    >
      <div className={`group grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center ${isReversed ? 'lg:grid-cols-[1fr_1.4fr]' : ''}`}>
        {/* Browser Frame */}
        <div className={`${isReversed ? 'lg:order-2' : ''}`}>
          <div className="project-image-wrapper rounded-xl overflow-hidden border border-white/[0.06] bg-dark-800">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-700/80 border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-md bg-white/[0.04] flex items-center justify-center px-3">
                  <span className="text-[11px] font-mono text-muted/50 truncate">
                    {project.url.replace('https://', '')}
                  </span>
                </div>
              </div>
            </div>
            {/* Placeholder content */}
            <div className="aspect-[16/10] flex flex-col items-center justify-center bg-gradient-to-br from-dark-700/50 to-dark-800/50 p-8 relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              <div className="relative z-10 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white/[0.08] font-display mb-3">
                  {project.name}
                </div>
                <div className="text-xs font-mono text-muted/40 uppercase tracking-widest">
                  {project.category}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-20 h-16 border border-white/[0.04] rounded-lg" />
              <div className="absolute bottom-4 right-4 w-32 h-8 border border-white/[0.04] rounded" />
              <div className="absolute top-1/3 right-8 w-16 h-16 rounded-full border border-white/[0.03]" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className={`${isReversed ? 'lg:order-1' : ''}`}>
          <span className="text-xs font-mono text-accent/60 tracking-wider block mb-3">
            Featured Project
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-sm text-accent/70 font-medium mb-4">
            {project.category}
          </p>
          <p className="text-muted text-sm leading-relaxed mb-6 max-w-[440px]">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/[0.04] text-white/50 border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors duration-300 group/link"
          >
            View Live Site
            <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function SmallProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass-card p-6 hover:border-accent/20 transition-all duration-400 block"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h4>
          <p className="text-xs text-accent/60 font-medium mt-1">{project.category}</p>
        </div>
        <svg className="w-4 h-4 text-muted/40 group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </div>
      <p className="text-sm text-muted/70 leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded bg-white/[0.03] text-white/40"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, isRevealed } = useReveal();

  const featuredProjects = projects.filter((p) => p.featured);
  const moreProjects = projects.filter((p) => !p.featured);

  const filteredMore = activeFilter === 'All'
    ? moreProjects
    : moreProjects.filter((p) => p.categories.includes(activeFilter));

  const filteredFeatured = activeFilter === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="section-padding-narrow max-w-[1400px] mx-auto">
        {/* Header */}
        <div ref={ref} className={`reveal ${isRevealed ? 'revealed' : ''} mb-8`}>
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Selected Work
          </span>
          <h2 className="section-heading mb-4">
            Selected <span className="text-accent">Work.</span>
          </h2>
          <p className="text-muted text-lg max-w-[600px]">
            A selection of digital experiences developed across eCommerce, automotive, industrial, logistics, technology and service industries.
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap gap-2 mb-16 reveal ${isRevealed ? 'revealed' : ''} reveal-delay-1`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs font-semibold uppercase tracking-[0.12em] px-4 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === cat
                  ? 'border-accent/50 text-accent bg-accent/10'
                  : 'border-white/[0.08] text-muted hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 md:space-y-32 mb-24">
          {filteredFeatured.map((project, i) => (
            <FeaturedProject key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More Projects Grid */}
        {filteredMore.length > 0 && (
          <>
            <div className="border-t border-white/[0.06] pt-16 mb-10">
              <h3 className="text-xl font-bold text-white/80">More Selected Work</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredMore.map((project) => (
                <SmallProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
