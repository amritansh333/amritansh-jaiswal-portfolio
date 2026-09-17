import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://amritanshjaiswal.vercel.app/"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "Amritansh Jaiswal — Software Developer / Full-Stack Developer",
    template: "%s | Amritansh Jaiswal",
  },
  description:
    "Portfolio of Amritansh Jaiswal, a Software Developer and Full-Stack Developer building practical software with React.js, Node.js, Java, and modern web technologies.",
  keywords: [
    "Amritansh Jaiswal",
    "Software Developer",
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
  title: "Amritansh Jaiswal — Software Developer / Full-Stack Developer",
  description:
    "Portfolio of Amritansh Jaiswal, a Software Developer and Full-Stack Developer building practical software with modern web technologies.",
  siteName: "Amritansh Jaiswal",
  locale: "en_IN",
  images: [
    {
      url: "/profile.jpeg",
      width: 987,
      height: 1280,
      alt: "Amritansh Jaiswal — Software Developer / Full-Stack Developer",
    },
  ],
},
  twitter: {
    card: "summary_large_image",
    images: ["/profile.jpeg"],
    title: "Amritansh Jaiswal — Software Developer / Full-Stack Developer",
    description:
      "Portfolio of Amritansh Jaiswal, a Software Developer and Full-Stack Developer.",
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
    jobTitle: "Software Developer / Full-Stack Developer",
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
    <html lang="en" suppressHydrationWarning>
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
