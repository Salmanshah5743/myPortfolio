import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { projects, categories, Project } from '../data/projects';
import {
  ECommerceIcon,
  IndustrialIcon,
  CorporateIcon,
  ServicesIcon,
  AutomotiveIcon,
  TechnologyIcon,
  ExternalLinkIcon,
} from './Icons';

const categoryIconMap: Record<string, React.ReactNode> = {
  eCommerce: <ECommerceIcon className="w-4 h-4" />,
  Industrial: <IndustrialIcon className="w-4 h-4" />,
  Corporate: <CorporateIcon className="w-4 h-4" />,
  Services: <ServicesIcon className="w-4 h-4" />,
  Automotive: <AutomotiveIcon className="w-4 h-4" />,
  Technology: <TechnologyIcon className="w-4 h-4" />,
};

function ProjectImage({ project, className = '' }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        className={`w-full h-full object-cover object-top ${className}`}
        loading="lazy"
      />
    );
  }

  // Fallback gradient mockup for projects without screenshots
  const gradients: Record<string, string> = {
    'tapco': 'from-indigo-900/40 via-dark-800 to-dark-800',
    'nanomax-lab': 'from-purple-900/40 via-dark-800 to-dark-800',
    'naas': 'from-slate-800/60 via-dark-800 to-dark-800',
    'majan': 'from-rose-900/40 via-dark-800 to-dark-800',
  };
  const gradient = gradients[project.id] || 'from-dark-700/50 to-dark-800/50';

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center p-8`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div className="relative z-10 text-center">
        <div className="text-3xl md:text-4xl font-bold text-white/[0.08] font-display mb-2">
          {project.name}
        </div>
        <div className="text-[10px] font-mono text-muted/40 uppercase tracking-widest">
          {project.category}
        </div>
      </div>
      <div className="absolute top-4 left-4 w-20 h-16 border border-white/[0.04] rounded-lg" />
      <div className="absolute bottom-4 right-4 w-32 h-8 border border-white/[0.04] rounded" />
      <div className="absolute top-1/3 right-8 w-16 h-16 rounded-full border border-white/[0.03]" />
    </div>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const { ref, isRevealed } = useReveal(0.1);
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`reveal ${isRevealed ? 'revealed' : ''}`}
    >
      <div className={`group grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center ${isReversed ? 'lg:grid-cols-[1fr_1.4fr]' : ''}`}>
        {/* Browser Frame with Real Screenshot */}
        <div className={`${isReversed ? 'lg:order-2' : ''}`}>
          <div className="project-image-wrapper rounded-xl overflow-hidden border border-white/[0.08] bg-dark-800 shadow-2xl shadow-black/20">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-700/80 border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-md bg-white/[0.04] flex items-center justify-center px-3 border border-white/[0.04]">
                  <svg className="w-3 h-3 text-white/20 mr-1.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  <span className="text-[11px] font-mono text-muted/50 truncate">
                    {project.url.replace('https://', '')}
                  </span>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="w-5 h-5 rounded flex items-center justify-center hover:bg-white/[0.06] transition-colors">
                  <svg className="w-3 h-3 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </div>
              </div>
            </div>
            {/* Screenshot content */}
            <div className="aspect-[16/10] relative overflow-hidden">
              <ProjectImage project={project} />
              {/* View site overlay */}
              <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-dark-900 font-semibold text-sm rounded-full hover:bg-accent-light transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  View Live Site
                </a>
              </div>
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
          <p className="text-sm text-accent/70 font-medium mb-4 flex items-center gap-2">
            {categoryIconMap[project.categories[0]]}
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
            <ExternalLinkIcon className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function SmallProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass-card overflow-hidden hover:border-accent/20 transition-all duration-400 block"
    >
      {/* Screenshot preview */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-dark-800">
        <ProjectImage project={project} />
        <div className="absolute inset-0 bg-dark-900/50 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
          <ExternalLinkIcon className="w-5 h-5 text-accent" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
              {project.name}
            </h4>
            <p className="text-xs text-accent/60 font-medium mt-1 flex items-center gap-1.5">
              {categoryIconMap[project.categories[0]]}
              {project.category}
            </p>
          </div>
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
