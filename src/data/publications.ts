export type Publication = {
  id: string;
  title: string;
  date: string;
  category: string;
  description: readonly string[];
  technologies: readonly string[];
  features: readonly string[];
  role: string;
  publication: string;
  link?: string;
};

export const publications: readonly Publication[] = [
  {
    id: "Publication",
    title:
      "Medi Care AI — Generative AI Clinical Text-to-Visual Explanation System",
    date: "Apr 2026",
    category: "Generative AI Research",

    description: [
      'Co-authored peer-reviewed research, "Medi Care AI: Clinical Text-to-Visual Explanation System Using Generative AI", published in the International Journal of General Engineering and Technology (IJGET), Vol. 15, 2026.',
      "Designed a four-stage Generative AI pipeline using Next.js, React, Tailwind CSS, Gemini API, and Web Speech API, achieving 97% interpretation accuracy across 500 clinical text samples.",
    ],

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Gemini API",
      "Web Speech API",
    ],

    features: [
      "Four-stage Generative AI pipeline",
      "Clinical text-to-visual explanation",
      "Gemini API integration",
      "Web Speech API",
      "97% interpretation accuracy",
      "500 clinical text samples",
    ],

    role: "Co-author",
    publication:
      "International Journal of General Engineering and Technology (IJGET), Vol. 15, 2026",
    link: "https://www.ijget.com/vol15/issue1/ijget-2026-01-001.pdf",
  },
] as const;
