export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Nanosoft',
    role: 'UI/UX Developer',
    period: 'September 2021 — Present',
    startDate: '2021-09',
    endDate: null,
    current: true,
    description: 'Leading UI/UX development, transforming design concepts into production-ready interfaces across web applications and marketing websites.',
    highlights: [
      'Transform UI/UX concepts into responsive production-ready interfaces',
      'Develop and maintain websites and web applications',
      'Build layouts using HTML, CSS, JavaScript, jQuery and modern UI frameworks',
      'Maintain consistent UI implementation across devices and browsers',
      'Collaborate with back-end developers on troubleshooting and functionality implementation',
      'Perform browser testing and debugging across platforms',
      'Optimize website performance using Google PageSpeed Insights and WebPageTest',
      'Translate functional requirements into dependable website experiences',
    ],
  },
  {
    company: 'Koderlabs',
    role: 'Web Developer',
    period: 'December 2017 — September 2021',
    startDate: '2017-12',
    endDate: '2021-09',
    current: false,
    description: 'An important phase of professional growth focused on full-cycle web development, building responsive interfaces and delivering production websites for diverse clients.',
    highlights: [
      'Full-cycle web development for multiple client projects',
      'Responsive interface development and cross-browser testing',
      'WordPress theme development and customization',
      'eCommerce implementation and WooCommerce development',
    ],
  },
  {
    company: '5starDesigners',
    role: 'Web Developer',
    period: 'December 2016 — December 2017',
    startDate: '2016-12',
    endDate: '2017-12',
    current: false,
    description: 'Focused web development role building client websites with an emphasis on responsive design and modern front-end practices.',
    highlights: [
      'Client website development and delivery',
      'Responsive design implementation',
      'Front-end development using modern standards',
    ],
  },
  {
    company: 'ITS Global',
    role: 'Web Developer',
    period: 'March 2015 — December 2016',
    startDate: '2015-03',
    endDate: '2016-12',
    current: false,
    description: 'The beginning of a professional web development career, building foundational skills in web technologies and client project delivery.',
    highlights: [
      'Professional web development career start',
      'WordPress and front-end development',
      'Building client relationships and delivering projects',
    ],
  },
];

export const expertise = [
  {
    number: '01',
    title: 'WordPress Development',
    description: 'Custom WordPress implementation, Elementor development, theme customization, integrations, custom functionality and maintainable CMS experiences.',
    skills: ['WordPress', 'Elementor', 'PHP', 'Custom Themes', 'Custom Shortcodes', 'Plugin Integration'],
  },
  {
    number: '02',
    title: 'WooCommerce',
    description: 'Product experiences, customized carts and checkouts, payment integrations, digital products and custom WooCommerce functionality.',
    skills: ['WooCommerce', 'Checkout', 'Payment Gateways', 'Digital Products', 'Custom PHP'],
  },
  {
    number: '03',
    title: 'Front-End Development',
    description: 'Responsive, pixel-accurate interfaces built using modern front-end standards with an emphasis on performance, accessibility and browser compatibility.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Responsive Design'],
  },
  {
    number: '04',
    title: 'No-Code / Modern Platforms',
    description: 'High-quality marketing and business websites using modern visual-development platforms when they are the right solution.',
    skills: ['Webflow', 'Framer', 'Elementor'],
  },
];

export const skills = [
  'WordPress', 'WooCommerce', 'Elementor', 'HTML5', 'CSS3', 'JavaScript',
  'jQuery', 'PHP', 'Bootstrap', 'Webflow', 'Framer', 'Git',
  'Responsive Design', 'Performance Optimization', 'SEO', 'UI/UX',
  'Custom Themes', 'Plugin Integration', 'Accessibility', 'Git/FTP/SFTP',
];
