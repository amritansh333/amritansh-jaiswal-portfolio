import type { Metadata } from "next";
import { Archivo_Black, Geist, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";

const display = Archivo_Black({ subsets: ["latin"], variable: "--font-display", weight: "400", display: "swap" });
const body = Geist({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  title: "Amritansh Jaiswal — Engineering Command Center",
  description: "Software Engineer / Full-Stack Developer. A personal engineering command center.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(() => { const stored = localStorage.getItem("portfolio-theme"); const preference = stored === "light" || stored === "dark" || stored === "system" ? stored : "system"; const theme = preference === "system" ? (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark") : preference; document.documentElement.dataset.theme = theme; })();`;
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body><ThemeProvider><Navigation />{children}</ThemeProvider></body>
    </html>
  );
}
