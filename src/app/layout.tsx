import type { Metadata } from "next";
import { Archivo_Black, Geist, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";

const display = Archivo_Black({ subsets: ["latin"], variable: "--font-display", weight: "400", display: "swap" });
const body = Geist({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://amritanshjaiswal.vercel.app/"),
  title: {
    default: "Amritansh Jaiswal — Software Engineer / Full-Stack Developer",
    template: "%s | Amritansh Jaiswal",
  },
  description:
    "Portfolio of Amritansh Jaiswal, a Software Engineer and Full-Stack Developer building practical software with React.js, Node.js, Java, and modern web technologies.",
  keywords: [
    "Amritansh Jaiswal",
    "Software Engineer",
    "Full-Stack Developer",
    "React.js",
    "Node.js",
    "Java",
    "Next.js",
  ],
  authors: [{ name: "Amritansh Jaiswal" }],
  creator: "Amritansh Jaiswal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Amritansh Jaiswal — Software Engineer / Full-Stack Developer",
    description:
      "Portfolio of Amritansh Jaiswal, a Software Engineer and Full-Stack Developer building practical software with modern web technologies.",
    siteName: "Amritansh Jaiswal",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Amritansh Jaiswal — Software Engineer / Full-Stack Developer",
    description:
      "Portfolio of Amritansh Jaiswal, a Software Engineer and Full-Stack Developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(() => { const stored = localStorage.getItem("portfolio-theme"); const preference = stored === "light" || stored === "dark" || stored === "system" ? stored : "system"; const theme = preference === "system" ? (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark") : preference; document.documentElement.dataset.theme = theme; })();`;
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amritansh Jaiswal",
    url: "https://amritanshjaiswal.vercel.app/",
    jobTitle: "Software Engineer / Full-Stack Developer",
    email: "mailto:amrit333.jswl@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kanpur",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/amritansh333",
      "https://linkedin.com/in/amritansh-jaiswal",
    ],
  };
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
