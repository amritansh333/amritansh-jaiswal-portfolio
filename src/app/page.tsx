import { Showcase } from "@/components/showcase";
import { PortfolioSections } from "@/components/portfolio-sections";

export default function Home() {
  return (
    <>
      <main id="top">
        <Showcase />
        <PortfolioSections />
      </main>
      <footer className="site-footer section-shell">
        <span>AJ / SOFTWARE ENGINEER</span>
        <span>ENGINEERED IN INDIA <span className="text-red">●</span></span>
        <a href="#top">SCROLL TO EXPLORE ↑</a>
      </footer>
    </>
  );
}
