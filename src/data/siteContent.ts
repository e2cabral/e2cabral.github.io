export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type FocusArea = {
  title: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  tech: string[];
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  badge: string;
};

export type Experience = {
  company: string;
  role: string;
  scope: string;
  highlights: string[];
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type NarrativePoint = {
  title: string;
  text: string;
};

export const headline =
  'Senior Full Stack Engineer building scalable systems with Node.js, Golang, TypeScript, and AWS.';

export const summary =
  'Senior Full Stack Engineer focused on distributed architecture, product ownership, and cloud-native systems. I build across backend, frontend, and infrastructure with strong emphasis on Node.js, TypeScript, AWS, Golang, event-driven design, observability, and production-grade SaaS platforms.';

export const overviewNarrative: NarrativePoint[] = [
  {
    title: 'Currently',
    text: 'Working as a Senior Full Stack Engineer at iblue Consulting, with a profile centered on scalable software delivery and architecture ownership.',
  },
  {
    title: 'Context',
    text: 'Experience spans finance, healthcare, telecom, and digital products, combining product delivery with backend and cloud decision-making.',
  },
  {
    title: 'Background',
    text: 'Based in Nova Iguacu, Rio de Janeiro, with academic experience at Pontificia Universidade Catolica do Parana and fluency across Portuguese, English, and French.',
  },
  {
    title: 'Beyond work',
    text: 'I also invest in side projects, technical learning, and community work, including volunteer music teaching and public product building.',
  },
];

export const supportingDetails: NarrativePoint[] = [
  {
    title: 'Current company',
    text: 'iblue Consulting',
  },
  {
    title: 'Certification track',
    text: 'DevOps, Docker, REST APIs, and PWA-focused training.',
  },
  {
    title: 'Working style',
    text: 'Planning, writing, and delivering software with strong product and operational ownership.',
  },
  {
    title: 'Languages',
    text: 'Portuguese, English, and French.',
  },
];

export const contactSummary =
  'Based in Nova Iguacu, Rio de Janeiro, and open to product, platform, and SaaS conversations where scalable architecture and engineering ownership matter.';

export const footerNote =
  'Built for teams looking for product-minded engineering, scalable systems, and pragmatic architecture.';

export const locationLine =
  'Nova Iguacu, Rio de Janeiro, Brazil';

export const learningLine =
  'Continuous learning through certifications in DevOps, Docker, REST APIs, and progressive web applications.';

export const experienceIntro =
  'From enterprise platforms to founder-led SaaS work, my path has been shaped by hands-on delivery, distributed systems thinking, and ownership that extends into production.';

export const stackIntro =
  'The stack I emphasize reflects the kind of systems I want to keep building in the market: scalable backends, cloud-native services, and product-grade web experiences.';

export const currentFocus =
  'At the center of my work today is the combination of cloud architecture, product direction, and full-cycle engineering execution.';

export const principlesIntro =
  'I prefer tools and patterns that reduce long-term friction, improve runtime confidence, and keep delivery understandable for the team.';

export const notesLabel = 'Background';
export const currentCompany = 'iblue Consulting';
export const educationLine =
  'Pontificia Universidade Catolica do Parana, 2022-2023';

export const condensedAbout =
  'Senior engineer, current consultant, founder-minded builder, and systems-oriented generalist with a strong backend and cloud center of gravity.';

export const sectionBridge =
  'That mix of consulting, product ownership, and self-directed building is what shapes the way I approach architecture today.';

export const personalThread =
  'My work sits at the intersection of scalable systems, practical product thinking, and infrastructure decisions that hold up in production.';

export const profileAnchor =
  'Current role: Senior Full Stack Engineer at iblue Consulting.';

export const profileAnchorDetail =
  'Focus: architecture, delivery, and operational ownership across modern web platforms.';

export const profileSummaryBullets = [
  'Scalable systems',
  'Distributed architecture',
  'Cloud ownership',
  'Product and platform thinking',
];

export const supportingNarrative =
  'I bring a mix of enterprise delivery, SaaS experimentation, and ongoing technical study, shaped by real product constraints rather than generic full-stack breadth.';

export const profileSummaryCompact =
  'Current consulting work, founder-led SaaS building, multilingual communication, and continuous technical training all reinforce a profile built around scale and ownership.';

export const profileSummaryTail =
  'That is the throughline I want this portfolio to communicate.';

export const aboutParagraph =
  'Currently at iblue Consulting, I focus on building and evolving software systems that need architectural clarity, reliable delivery, and strong product alignment. Across my experience in telecom, healthcare, finance, and digital products, I have worked from implementation details up to cloud and systems decisions, while continuing to build my own SaaS products and deepen my backend and platform expertise.';

export const shortMeta = [
  'Current company: iblue Consulting',
  'Location: Nova Iguacu, Rio de Janeiro, Brazil',
  'Languages: Portuguese, English, French',
];

export const principles = [
  'Choose modern tools that simplify maintenance rather than adding novelty overhead.',
  'Make architecture decisions visible in the product, the deployment model, and the operational experience.',
  'Treat performance, observability, and reliability as product features, not backend afterthoughts.',
];

export const metrics: Metric[] = [
  {
    value: 'Distributed',
    label: 'architecture mindset',
    detail: 'Event-driven systems, microservices, and serverless design.',
  },
  {
    value: 'Ownership',
    label: 'from product to production',
    detail: 'Architecture, delivery, infrastructure, and operational follow-through.',
  },
  {
    value: 'Multi-sector',
    label: 'business context',
    detail: 'Financial services, healthcare, telecom, and digital products.',
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: 'Scalable backend systems',
    description:
      'I design backend platforms that balance delivery speed with resilience, observability, and maintainable service boundaries.',
  },
  {
    title: 'Cloud and platform ownership',
    description:
      'I like owning the path from technical direction to production operations, especially across AWS, deployment workflows, and runtime reliability.',
  },
  {
    title: 'Product-aware engineering',
    description:
      'I build with product goals in mind, connecting architecture choices to user experience, business outcomes, and sustainable growth.',
  },
];

export const experiences: Experience[] = [
  {
    company: 'iblue Consulting',
    role: 'Senior Full Stack Engineer',
    scope: 'Current public LinkedIn company',
    highlights: [
      'Public profile presents a senior full-stack positioning centered on planning, writing, and delivering software experiences.',
      'Profile direction aligns with scalable systems, ownership, cloud architecture, and product-minded engineering.',
      'Acts as the current professional anchor for the portfolio narrative while other roles reinforce hands-on delivery breadth.',
    ],
  },
  {
    company: 'Fitoria',
    role: 'Founder & Lead Engineer',
    scope: 'Personal SaaS venture',
    highlights: [
      'Built a health and nutrition SaaS platform end to end using React, TypeScript, and AWS serverless services.',
      'Owned product direction, architecture, infrastructure, authentication, AI integrations, image processing, analytics, and monetization strategy.',
      'Shipped features around image-based nutrition, workout management, gamification, PWA capabilities, event-driven architecture, and cloud observability.',
    ],
  },
  {
    company: 'Perlink',
    role: 'Software Engineer',
    scope: 'Enterprise legal platform for a major telecom company',
    highlights: [
      'Contributed to the evolution of a corporate legal platform with business modules, analytical reporting, and performance-oriented features.',
      'Worked across distributed architecture, service integrations, data modeling, and continuous user experience improvements.',
      'Helped deliver software shaped for scale, operational consistency, and domain-heavy enterprise workflows.',
    ],
  },
  {
    company: 'Agencia Imma',
    role: 'Web Developer',
    scope: 'Digital applications and WordPress ecosystem',
    highlights: [
      'Developed and maintained web applications, landing pages, and digital solutions using PHP and the WordPress ecosystem.',
      'Customized themes and plugins while improving hosting setup, runtime performance, and implementation quality.',
      'Built a strong foundation in shipping client-facing digital products with practical delivery ownership.',
    ],
  },
];

export const featuredProjects: Project[] = [
  {
    name: 'Orchestrix',
    badge: 'Workflow orchestration',
    description:
      'A typed workflow orchestrator for Node.js and TypeScript focused on complex multi-step application flows.',
    highlights: [
      'Designed with retries, timeouts, compensation handlers, and lifecycle hooks.',
      'Supports idempotent execution with pluggable stores such as Redis and DynamoDB.',
      'Built to keep business workflows readable, testable, and safe to evolve.',
    ],
    tech: ['TypeScript', 'Node.js', 'Vitest', 'Tsup', 'VitePress'],
    href: 'https://www.npmjs.com/package/@eddiecbrl/orchestrix',
    secondaryHref: 'https://e2cabral.github.io/orchestrix/',
    secondaryLabel: 'Documentation',
  },
  {
    name: 'Tiposaurus Rex',
    badge: 'SQL type generation',
    description:
      'A CLI that generates TypeScript types from MySQL schemas and SQL queries to reduce manual typing and runtime drift.',
    highlights: [
      'Turns database structure into strongly typed application code.',
      'Helps teams eliminate repetitive boilerplate in data access layers.',
      'Emphasizes safer workflows around SQL-driven backends and code generation.',
    ],
    tech: ['TypeScript', 'Node.js', 'MySQL', 'Zod', 'ESBuild'],
    href: 'https://www.npmjs.com/package/tiposaurus-rex',
    secondaryHref: 'https://github.com/e2cabral/tiposaurus-rex',
    secondaryLabel: 'Repository',
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: 'Backend',
    items: ['Node.js', 'TypeScript', 'Golang', 'NestJS', 'Fastify', 'Express'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Lambda', 'API Gateway', 'S3', 'CloudFront', 'Cognito', 'SQS', 'EventBridge', 'DynamoDB'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'Vite', 'PWA'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'DynamoDB', 'Redis', 'Elasticsearch'],
  },
  {
    title: 'Architecture',
    items: ['Microservices', 'Event-Driven', 'Serverless', 'CI/CD', 'Observability'],
  },
];

export const links = {
  linkedin: 'https://www.linkedin.com/in/edsoncabraljunior/',
  orchestrix: 'https://www.npmjs.com/package/@eddiecbrl/orchestrix',
  tiposaurus: 'https://www.npmjs.com/package/tiposaurus-rex',
  email: 'mailto:e2cabraljunior@gmail.com',
};
