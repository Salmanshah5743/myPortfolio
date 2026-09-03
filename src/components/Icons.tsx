import React from 'react';

interface IconProps {
  className?: string;
}

// ===== Expertise Icons =====
export function WordPressIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 12h3.5l2.5-5 4 10 2.5-5h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function WooCommerceIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7h18l-2 11H5L3 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 7l1.5-4h15L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8.5" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16.5" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function FrontEndIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 6l-4 6 4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 6l4 6-4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 4l-4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function NoCodeIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

// ===== Process Icons =====
export function UnderstandIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function BuildIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M5 21V7l7-4 7 4v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 10h.01M15 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function RefineIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function DeliverIcon({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12l-10 7L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 12V6l-10 6L2 6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12v6l10 7 10-7v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    </svg>
  );
}

// ===== WhyMe Icons =====
export function ExperienceIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function DepthIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function BridgeIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20V8a4 4 0 014-4h8a4 4 0 014 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9.5 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IndustryIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12v10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 7l10 5 10-5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function PerformanceIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ReliableIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CollaborativeIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M17 15a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

export function ProblemSolvingIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a5 5 0 015 5c0 2-1 3-2 4s-1 3-1 5h-4c0-2 0-4-1-5s-2-2-2-4a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 19h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ===== Social Icons =====
export function LinkedInIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function EmailIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3"/>
      <path d="M22 7l-10 7L2 7"/>
    </svg>
  );
}

// ===== Hero Icons =====
export function CodeBracketsIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6l-4 6 4 6"/>
      <path d="M16 6l4 6-4 6"/>
      <path d="M14 4l-4 16"/>
    </svg>
  );
}

export function LayoutIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 3v18"/>
    </svg>
  );
}

export function PaletteIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="8" cy="10" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="14" cy="8" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="16" cy="13" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="8" cy="15" r="1.5" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

// ===== Misc Icons =====
export function ArrowUpRightIcon({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7"/>
      <path d="M7 7h10v10"/>
    </svg>
  );
}

export function ExternalLinkIcon({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
    </svg>
  );
}

export function ArrowRightIcon({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
    </svg>
  );
}

// ===== Tech Logo Icons (simplified brand marks) =====
export function TechIcon({ name, className = 'w-4 h-4' }: IconProps & { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    WordPress: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.3 12h3.5l1.96 5.44L10.46 12h3.48L9.88 21.08 5.8 12H3.3zm8.7-4.42l-1.22 3.42h3.48l1.22-3.42H12zm1.48-.58h3.48L20.7 12h-3.5l-1.52-5z"/>
      </svg>
    ),
    WooCommerce: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16l-1.5 10H5.5L4 4zm1.2 2l1 7h11.6l1-7H5.2zM9 20a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
      </svg>
    ),
    HTML5: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 2l1.5 17L12 22l7.5-3L21 2H3zm14.3 5H7.8l.2 2.4h8.9l-.6 6.6L12 18.2l-4.3-2.2-.3-3.2h2.2l.1 1.4L12 16l2.4-1.8.2-2.4H7.6L6.8 6h10.4l-.2 1z"/>
      </svg>
    ),
    CSS3: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 2l1.5 17L12 22l7.5-3L21 2H3zm13.6 6H7.8l.2 2.4h8.3l-.5 5.4L12 18.2l-3.8-2-.3-3.4h2l.1 1.6L12 16l2-1.3.1-1.7H8l-.4-4.6h8.8l-.2 1.6z"/>
      </svg>
    ),
    JavaScript: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 2h20v20H2V2zm12.5 11.2c.3.6.4 1.1.4 1.6 0 .8-.3 1.5-.8 2-.5.6-1.3.9-2.1.9-.9 0-1.6-.3-2.1-.8v3.6h-2V6.8h2v1.3c.5-.6 1.3-.9 2.2-.9.8 0 1.5.3 2 .8.5.6.8 1.3.8 2.2 0 .7-.2 1.3-.6 1.8zm5.1 1.8c0-1.5-.9-2.7-2.5-2.7-1.3 0-2.2.7-2.4 1.8h2c.1-.3.3-.5.7-.5.5 0 .8.3.8.7 0 .5-.3.7-.8.7h-.6v1.5h.6c.6 0 .9.3.9.8 0 .5-.3.8-.9.8-.5 0-.8-.3-.8-.7h-2c0 1.3.9 2.2 2.8 2.2 1.6 0 2.6-.8 2.6-2.2v-.7z"/>
      </svg>
    ),
    jQuery: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11.5c-.3.8-.9 1.5-1.8 2-.9.5-1.8.5-2.3.5V8h2v5.5zm-5.5-3.5h2v-2h-2v2zm0 4h2v-3h-2v3z"/>
      </svg>
    ),
    PHP: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="12" rx="10" ry="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <text x="12" y="14.5" textAnchor="middle" fontSize="7" fontWeight="bold" fontFamily="monospace" fill="currentColor">PHP</text>
      </svg>
    ),
    Bootstrap: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 2h16v20H4V2zm9.5 12.5c-.5.5-1.2.8-2 .8-1.5 0-2.5-1.2-2.5-3s1-3 2.5-3c.8 0 1.5.3 2 .8l-1 1.2c-.3-.3-.6-.4-1-.4-.7 0-1.1.6-1.1 1.4s.4 1.4 1.1 1.4c.4 0 .7-.2 1-.4l1 1.6zm3 0V9.2h-1.8V12H14v1.5h2.5V17h2v-5.5H18v-1h-1.5z"/>
      </svg>
    ),
    Webflow: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.8 6.6L14.7 17h-2.1l-1.5-5.4L9.6 17H7.5L4.4 6.6h2.3l1.7 6.6L10 6.6h1.7l1.6 6.6 1.6-6.6h2.9zM17 6.6l3 10.4h-2.2l-.6-2.3h-3.1l-.6 2.3H14L17 6.6zm-.8 6.6h1.8l-.9-3.3-.9 3.3z"/>
      </svg>
    ),
    Framer: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 2h16v8H4V2zm0 8h8v8H4V10zm8 8h8v-8h-8v8z"/>
      </svg>
    ),
    Git: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 11.1L12.9.5c-.7-.7-1.7-.7-2.3 0L8.4 2.7l2.9 2.9c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.7 2.7c.6-.2 1.3-.1 1.8.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.6-1.2-.4-1.8L12.3 9.9v6.2c.2.1.3.2.5.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.2-.2.3-.3.5-.4V9.8c-.2-.1-.3-.2-.5-.4-.5-.5-.6-1.2-.4-1.8L8.8 4.7 1.5 12c-.7.7-.7 1.8 0 2.5.7.7 1.8.7 2.5 0 .5-.5.6-1.2.4-1.8L7.5 10v5.7c-.2.1-.3.2-.5.4-.7.7-.7 1.8 0 2.5.7.7 1.8.7 2.5 0 .7-.7.7-1.8 0-2.5-.2-.2-.3-.3-.5-.4V9.8c.2-.1.4-.2.5-.4.5-.5.6-1.2.4-1.8L10.2 4.7 22.5 12c.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.6-1.2-.4-1.8l-2.2-2.2V18c.2.1.3.2.5.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.2-.2.3-.3.5-.4v-5.8c.2.1.4.2.5.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.6-1.2-.4-1.8L10 9.1v6.5c-.2.1-.3.2-.5.4-.7.7-.7 1.8 0 2.5.7.7 1.8.7 2.5 0 .7-.7.7-1.8 0-2.5-.2-.2-.3-.3-.5-.4V9.8c.2-.1.4-.3.5-.4.5-.5.6-1.2.4-1.8L10 4.7"/>
      </svg>
    ),
    SEO: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="7"/>
        <path d="M16.5 16.5L21 21"/>
        <path d="M11 8v6M8 11h6" strokeWidth="1.5"/>
      </svg>
    ),
  };

  return <>{icons[name] || null}</>;
}

// ===== Project Category Icons =====
export function ECommerceIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z"/>
      <path d="M3 6h18"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  );
}

export function IndustrialIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20"/>
      <path d="M5 20V8l5-4v16"/>
      <path d="M13 20V12l4-3v11"/>
      <path d="M7 12h2M15 9h2"/>
    </svg>
  );
}

export function CorporateIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <path d="M9 22V12h6v10"/>
      <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01"/>
    </svg>
  );
}

export function ServicesIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}

export function AutomotiveIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h14M5 17a2 2 0 01-2-2v-3a1 1 0 011-1h1l2-5h10l2 5h1a1 1 0 011 1v3a2 2 0 01-2 2"/>
      <circle cx="7.5" cy="17" r="2"/>
      <circle cx="16.5" cy="17" r="2"/>
    </svg>
  );
}

export function TechnologyIcon({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="M6 10l4 3-4 3"/>
      <path d="M14 10h4"/>
    </svg>
  );
}

// ===== About / Profile Icons =====
export function MapPinIcon({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

export function BriefcaseIcon({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      <path d="M12 12v.01"/>
    </svg>
  );
}

export function CalendarIcon({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18"/>
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
    </svg>
  );
}

export function TargetIcon({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="12" cy="12" r="1"/>
    </svg>
  );
}
