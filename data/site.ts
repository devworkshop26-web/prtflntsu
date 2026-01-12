export const site = {
  name: "Alex D.",
  role: "Développeur Web & Automatisation",
  tagline: "J’automatise vos process avec n8n + je construis des apps modernes.",
  location: "Paris · Remote",
  email: "hello@alexd.dev",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Email", href: "mailto:hello@alexd.dev" }
  ],
  stats: [
    { label: "Années d’expérience", value: "8+" },
    { label: "Projets livrés", value: "45" },
    { label: "Automatisations", value: "120+" }
  ]
};

export const differentiators = [
  {
    title: "Vision business",
    description: "Des expériences orientées conversion, alignées sur vos KPIs et votre marque."
  },
  {
    title: "Automatisation stratégique",
    description: "Workflows n8n robustes pour réduire le temps opérationnel et sécuriser vos données."
  },
  {
    title: "Exécution premium",
    description: "UI/UX et performances calibrées pour un rendu haut de gamme et rapide."
  }
];

export const skillGroups = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"]
  },
  {
    category: "Backend / APIs",
    skills: ["Node.js", "REST", "Auth", "PostgreSQL", "Prisma"]
  },
  {
    category: "Automatisation",
    skills: ["n8n", "Webhooks", "Notion", "Slack", "CRM intégrations"]
  },
  {
    category: "DevOps léger",
    skills: ["Vercel", "CI/CD", "Observabilité", "Edge Functions"]
  }
];

export const projects = [
  {
    slug: "obsidian-ops",
    title: "Obsidian Ops",
    description: "Portail SaaS pour orchestrer les opérations d’une scale-up fintech.",
    category: "Full-stack",
    image: "/images/project-obsidian.svg",
    tags: ["Next.js", "n8n", "PostgreSQL"],
    metrics: [
      { label: "Temps gagné", value: "-38%" },
      { label: "Latence", value: "120ms" }
    ],
    results: "Automatisation de 18 workflows internes et réduction des erreurs manuelles.",
    links: {
      live: "#",
      case: "/projects/obsidian-ops"
    },
    story: {
      challenge: "Centraliser les opérations et la donnée dans un cockpit unique.",
      solution: "Architecture modulaire avec dashboard temps réel + automatisations n8n.",
      stack: ["Next.js", "Edge API", "n8n", "PostgreSQL"]
    }
  },
  {
    slug: "lumen-atelier",
    title: "Lumen Atelier",
    description: "Site premium pour un studio créatif avec génération de leads automatisée.",
    category: "Web",
    image: "/images/project-lumen.svg",
    tags: ["Next.js", "Framer Motion", "Vercel"],
    metrics: [
      { label: "Taux conversion", value: "+22%" },
      { label: "Score perf", value: "98" }
    ],
    results: "Un parcours immersif et une capture de leads multi-étapes.",
    links: {
      live: "#",
      case: "/projects/lumen-atelier"
    },
    story: {
      challenge: "Positionner le studio comme référence haut de gamme.",
      solution: "Narration visuelle, micro-interactions et design system sobre.",
      stack: ["Next.js", "Tailwind", "Framer Motion"]
    }
  },
  {
    slug: "flux-automation",
    title: "Flux Automation",
    description: "Suite d’automatisations pour accélérer les cycles de vente B2B.",
    category: "Automatisation",
    image: "/images/project-flux.svg",
    tags: ["n8n", "HubSpot", "Webhook"],
    metrics: [
      { label: "Lead time", value: "-45%" },
      { label: "Workflows", value: "26" }
    ],
    results: "Pipeline commercial synchronisé, notifications temps réel et scoring avancé.",
    links: {
      live: "#",
      case: "/projects/flux-automation"
    },
    story: {
      challenge: "Automatiser la qualification des leads sans perdre la personnalisation.",
      solution: "Moteur de scoring + routage intelligent vers les équipes. ",
      stack: ["n8n", "APIs", "CRM"]
    }
  }
];

export const services = [
  {
    title: "Automatisation rapide",
    description: "Workflow n8n complet avec connecteurs et monitoring.",
    deliverables: ["Audit process", "Workflows n8n", "Documentation"],
    timeline: "2-4 semaines",
    cta: "Planifier un audit"
  },
  {
    title: "Site/app Next premium",
    description: "Expérience ultra-rapide, design premium et animations maîtrisées.",
    deliverables: ["UI/UX", "Développement Next", "SEO & performance"],
    timeline: "4-6 semaines",
    cta: "Voir un prototype"
  },
  {
    title: "Pack optimisation process",
    description: "Aligner vos équipes avec des outils connectés et automatisés.",
    deliverables: ["Roadmap", "Intégrations", "Formation équipe"],
    timeline: "6-8 semaines",
    cta: "Discuter du pack"
  }
];

export const testimonials = [
  {
    name: "Camille B.",
    role: "COO, Nova Labs",
    quote: "Un partenaire fiable, rapide et ultra précis. Nos opérations ont changé d’échelle."
  },
  {
    name: "Yannis L.",
    role: "CEO, Lumen Atelier",
    quote: "Design premium, delivery carré et une vraie sensibilité produit."
  }
];

export const filters = ["Tous", "Web", "Automatisation", "Full-stack"];
