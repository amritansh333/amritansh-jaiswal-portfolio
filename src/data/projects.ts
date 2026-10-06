export type Project = {
  id: string;
  title: string;
  date: string;
  category: string;
  description: readonly string[];
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
    title: "GitHub Repo Chatbot",
    date: "Jul 2026",
    category: "AI-powered GitHub repository assistant",
    description: [
      "Built an AI-powered code assistant for natural-language GitHub repository queries using Next.js, TypeScript, Google Gemini and PostgreSQL.",
      "Engineered a RAG pipeline using code chunking, Gemini embeddings and cosine-similarity retrieval, with real-time streaming responses.",
      "Implemented GitHub OAuth, repository indexing, persistent chat history and fallback retrieval for conversational code analysis.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Google Gemini",
      "PostgreSQL",
      "RAG",
    ],
    features: [
      "Natural-language repository queries",
      "RAG-based code understanding",
      "Code chunking",
      "Gemini embeddings",
      "Cosine-similarity retrieval",
      "Real-time streaming responses",
      "GitHub OAuth",
      "Repository indexing",
      "Persistent chat history",
      "Fallback retrieval",
    ],
    status: "AI-powered full-stack application",
    role: "Full-stack development",
    github: "https://github.com/amritansh333/github-repo-chatbot",
    featured: true,
  },

  {
    id: "Project-02",
    title: "Banking Excellence Hub",
    date: "Jul 2026",
    category: "Full-stack banking education platform",
    description: [
      "Built a full-stack banking education platform with a public website, using React, TypeScript, Express, PostgreSQL and Drizzle ORM.",
      "Developed admin-controlled content workflows for managing blogs and platform content, with role-based access control for multiple user roles.",
      "Structured the application as a pnpm monorepo with shared libraries, using Vite, Tailwind CSS and PostgreSQL.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    features: [
      "Public banking education website",
      "Admin-controlled content workflows",
      "Blog and content management",
      "Role-based access control",
      "PostgreSQL integration",
      "pnpm monorepo",
      "Shared libraries",
      "Vite",
      "Tailwind CSS",
    ],
    status: "Full-stack application",
    role: "Full-stack development",
    live: "https://www.thebankersacademy.org/",
    featured: false,
  },

  {
    id: "Project-03",
    title: "Culinary Operations Manager",
    date: "Jun 2026",
    category: "Restaurant management system",
    description: [
      "Built a full-stack restaurant management system with responsive UI, CRUD operations, JWT authentication, and RBAC for multiple user roles.",
      "Designed and shipped 10+ RESTful API endpoints with clear separation of concerns.",
      "Normalized MySQL relational schema for order and inventory management.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MySQL"],
    features: [
      "Responsive user interface",
      "CRUD operations",
      "JWT authentication",
      "Role-based access control",
      "10+ RESTful API endpoints",
      "Separation of concerns",
      "Normalized MySQL schema",
      "Order management",
      "Inventory management",
    ],
    status: "Full-stack application",
    role: "Full-stack development",
    github: "https://github.com/amritansh333/culinary-operations-manager",
    featured: false,
  },
] as const;
