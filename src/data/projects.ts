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
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    id: "Project-01",
    title: "Polyrib Industrial Products Platform",
    date: "Aug 2026",
    category: "Full-stack product catalog",
    description:
      "A full-stack industrial product catalog with a structured product hierarchy, dynamic filtering, search functionality, and reusable React components.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Category → Subcategory → Brand → Product hierarchy",
      "Dynamic filtering and search functionality",
      "REST API integration using Axios",
      "Reusable React components",
      "Component-based architecture",
      "Deployed and maintained on Vercel and Render",
    ],
    status: "Deployed and maintained",
    role: "Full-stack development",
    live: "https://khanna-polyrib-v2.vercel.app/",
    featured: false,
  },

  {
    id: "Project-02",
    title: "AgencySphere",
    date: "Jul 2026",
    category: "Enterprise B2B marketplace",
    description:
      "A B2B agency marketplace with role-based access, CMS-managed content, search, and REST APIs built with a modern Next.js architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Payload CMS",
      "MongoDB",
      "Node.js",
    ],
    features: [
      "Role-based access",
      "CMS-managed content",
      "Search functionality",
      "REST APIs",
      "SEO-first architecture",
      "Server-side rendering and dynamic listing pages",
      "Schema.org, XML sitemaps, and dynamic metadata",
      "Modular architecture and reusable components",
      "Secure authentication",
    ],
    status: "Full-stack application",
    role: "Full-stack development",
    github: "https://github.com/amritansh333/AgencySphere",
    featured: false,
  },

  {
    id: "Project-03",
    title: "Culinary Operations Manager",
    date: "Jun 2026",
    category: "Restaurant management system",
    description:
      "A full-stack restaurant management system focused on responsive interfaces, CRUD operations, authentication, role-based access, and operational data management.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    features: [
      "Responsive user interface",
      "CRUD operations",
      "JWT authentication",
      "Role-based access",
      "10+ RESTful API endpoints",
      "Separation of concerns",
      "Normalized MySQL schema",
      "Order and inventory management",
    ],
    status: "Full-stack application",
    role: "Full-stack development",
    github: "https://github.com/amritansh333/culinary-operations-manager",
    featured: false,
  },
] as const;