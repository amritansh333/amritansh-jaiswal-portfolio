"use client";

import { useEffect, useRef } from "react";
import { Showcase } from "@/components/showcase";
import { PortfolioSections } from "@/components/portfolio-sections";
import { contactProfile } from "@/data/contact";

export default function Home() {
  const terminalFooterRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const terminalFooter = terminalFooterRef.current;
    const signature = signatureRef.current;

    if (!terminalFooter || !signature) return;

    const syncSignatureSize = () => {
      if (window.matchMedia("(max-width: 720px)").matches) {
        signature.style.removeProperty("width");
        signature.style.removeProperty("height");
        return;
      }

      const height = terminalFooter.getBoundingClientRect().height;
      signature.style.width = `${height}px`;
      signature.style.height = `${height}px`;
    };

    const resizeObserver = new ResizeObserver(syncSignatureSize);
    resizeObserver.observe(terminalFooter);
    window.addEventListener("resize", syncSignatureSize);
    syncSignatureSize();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncSignatureSize);
    };
  }, []);

  return (
    <>
      <main id="top">
        <Showcase />
        <PortfolioSections />
      </main>
      <footer className="site-footer section-shell">
        <div className="footer-workspace">
          <div ref={terminalFooterRef} className="terminal-footer chamfered">
            <div className="terminal-footer-bar">
              <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
              <span>~:portfolio:~</span>
            </div>
            <div className="terminal-footer-body">
              <div>
                <p className="terminal-prompt">$ whoami</p>
                <a href="#top" className="terminal-identity">amritansh jaiswal</a>
                <p className="terminal-muted">software developer // full-stack developer</p>
                <p className="terminal-prompt terminal-build-prompt">$ echo &quot;LEARNING TO BUILD BETTER :)&quot;</p>
              </div>
              <div>
                <div className="terminal-links-heading">
                  <p className="terminal-prompt">$ ls ./links</p>
                  <div className="terminal-scroll-action">
                    <span className="terminal-link">$ scroll to top</span>
                    <button
                      className="scroll-top-button"
                      type="button"
                      aria-label="Scroll to top"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      ↑
                    </button>
                  </div>
                </div>
                <div className="terminal-links">
                  <a className="terminal-link" href={contactProfile.github} target="_blank" rel="noopener noreferrer">open github</a>
                  <a className="terminal-link" href={contactProfile.linkedIn} target="_blank" rel="noopener noreferrer">open linkedin</a>
                  <a className="terminal-link" href={`mailto:${contactProfile.email}`}>send email</a>
                  <a className="terminal-link" href="#projects">view projects</a>
                  <a className="terminal-link" href={contactProfile.googleForDevelopers} target="_blank" rel="noopener noreferrer">view badges</a>
                  <a className="terminal-link" href={contactProfile.certifications} target="_blank" rel="noopener noreferrer">
  view certifications
</a>
<a
  className="terminal-link"
  href="/resume/Amritansh_Jaiswal_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  view resume
</a>
                </div>
              </div>
            </div>
            <div className="terminal-footer-bottom">
              <span>© 2026 Amritansh Jaiswal</span>
              <span><span aria-hidden="true">🇮🇳</span> Kanpur, Uttar Pradesh, India</span>
            </div>
          </div>
          <div ref={signatureRef} className="footer-signature chamfered">
  <a href="#top" aria-label="Scroll to top">
    <video
      src="/logo-signature.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label="Animated Amritansh Jaiswal logo signature"
    />
  </a>
</div>
        </div>
      </footer>
    </>
  );
}
