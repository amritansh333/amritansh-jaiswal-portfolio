import { Showcase } from "@/components/showcase";
import { PortfolioSections } from "@/components/portfolio-sections";

export default function Home() {
  return (
    <>
      <Showcase />
      <PortfolioSections />
      <footer className="site-footer section-shell">
        <span>AJ / DESIGN SYSTEM 001</span>
        <span>ENGINEERED IN INDIA <span className="text-red">●</span></span>
        <a href="#top">SCROLL TO EXPLORE ↑</a>
      </footer>
    </>
  );
}
