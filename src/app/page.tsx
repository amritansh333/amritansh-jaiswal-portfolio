import { Showcase } from "@/components/showcase";
import { PortfolioSections } from "@/components/portfolio-sections";
import { contactProfile } from "@/data/contact";

export default function Home() {
  return (
    <>
      <main id="top">
        <Showcase />
        <PortfolioSections />
      </main>
      <footer className="site-footer section-shell">
        <div className="terminal-footer chamfered">
          <div className="terminal-footer-bar">
            <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
            <span>amritansh@portfolio:~</span>
            <span>SESSION / 2026.09</span>
          </div>
          <div className="terminal-footer-body">
            <div>
              <p className="terminal-prompt">$ whoami</p>
              <p className="terminal-identity">amritansh jaiswal</p>
              <p className="terminal-muted">software engineer // full-stack developer</p>
              <p className="terminal-prompt" style={{ marginTop: "1.5rem" }}>$ echo &quot;BUILD WITH INTENT.&quot;</p>
            </div>
            <div>
              <p className="terminal-prompt">$ ls ./links</p>
              <div className="terminal-links">
                <a className="terminal-link" href={contactProfile.github} target="_blank" rel="noopener noreferrer">open github</a>
                <a className="terminal-link" href={contactProfile.linkedIn} target="_blank" rel="noopener noreferrer">open linkedin</a>
                <a className="terminal-link" href={`mailto:${contactProfile.email}`}>send email</a>
                <a className="terminal-link" href="#projects">view projects</a>
                <a className="terminal-link" href="#top">scroll to top</a>
              </div>
            </div>
          </div>
          <div className="terminal-footer-bottom">
            <span>© 2026 Amritansh Jaiswal</span>
            <span><span className="text-red">●</span> ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </footer>
    </>
  );
}
