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
    title: "Banking Excellence Hub",
    date: "Jul 2026",
    category: "Full-stack banking education platform",
    description:
      "A full-stack banking education platform with a public website, admin-controlled content workflows, and role-based access control.",
    technologies: [
      "React.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    features: [
      "Public banking education website",
      "Admin-controlled blog and content management",
      "Role-based access control",
      "PostgreSQL database integration",
      "pnpm monorepo architecture",
      "Shared libraries and integrations",
      "Vite and Tailwind CSS",
    ],
    status: "Full-stack application",
    role: "Full-stack development",
    live: "https://www.thebankersacademy.org/",
    featured: false,
  },

  {
    id: "Project-02",
    title: "GitHub Repo Chatbot",
    date: "Jul 2026",
    category: "AI-powered GitHub repository assistant",
    description:
      "An AI-powered code assistant for natural-language interaction with GitHub repositories using RAG and semantic code retrieval.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Google Gemini",
      "PostgreSQL",
      "RAG",
    ],
    features: [
      "Natural-language GitHub repository queries",
      "RAG-based code understanding",
      "Source-code chunking",
      "Gemini embeddings",
      "Cosine-similarity retrieval",
      "Real-time streaming responses",
      "GitHub OAuth authentication",
      "Repository indexing",
      "Persistent chat history",
      "Fallback file-based retrieval",
    ],
    status: "AI-powered full-stack application",
    role: "Full-stack development",
    github: "https://github.com/amritansh333/github-repo-chatbot",
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
      "Role-based access control",
      "10+ RESTful API endpoints",
      "Separation of concerns",
      "Normalized MySQL schema",
      "Order and inventory management",
    ],
    status: "Full-stack application",
    role: "Full-stack development",
    github:
      "https://github.com/amritansh333/culinary-operations-manager",
    featured: false,
  },
] as const;