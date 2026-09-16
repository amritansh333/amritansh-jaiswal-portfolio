export type Project = {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  technologies: readonly string[];
  features: readonly string[];
  status: string;
  role?: string;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    id: "Project-01",
    title: "AgencySphere",
    date: "June 2026",
    category: "Enterprise B2B marketplace",
    description:
      "A production-ready agency marketplace built around structured content, role-aware access, and an SEO-first delivery model.",
    technologies: ["Next.js", "TypeScript", "Payload CMS", "MongoDB", "Node.js", "Elasticsearch"],
    features: [
      "Three user roles with RBAC",
      "100+ CMS-managed fields",
      "SSR, dynamic metadata, and canonical URLs",
      "Schema.org, XML sitemaps, and Core Web Vitals optimization",
      "Support for 1,000+ scalable dynamic listing pages",
    ],
    status: "Production-ready platform",
    role: "Architected and developed",
    featured: false,
  },
  {
    id: "Project-02",
    title: "PolyRib Industrial Products Platform",
    date: "March 2026",
    category: "Full-stack product catalog",
    description:
      "A responsive industrial product catalog that turns a multi-level inventory into a searchable, navigable buying experience.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Category → Subcategory → Brand → Product hierarchy",
      "Dynamic filtering and search",
      "REST API integration with Axios",
      "Reusable React components and component-based architecture",
      "Deployment and maintenance on Vercel",
    ],
    status: "Deployed and maintained",
  },
  {
    id: "Project-03",
    title: "Culinary Operations Manager",
    date: "January 2026",
    category: "Restaurant operations platform",
    description:
      "A full-stack restaurant management system focused on reliable CRUD workflows, access control, and normalized operational data.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
    features: [
      "Responsive UI with component-based architecture",
      "JWT authentication and role-based access",
      "Three user roles",
      "10+ RESTful API endpoints",
      "Normalized MySQL schema for order and inventory management",
      "Approximately 30% query-time reduction",
    ],
    status: "Full-stack application",
  },
] as const;
