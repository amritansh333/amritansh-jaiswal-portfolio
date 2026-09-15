import { Cpu } from "lucide-react";
import { systemMetadata } from "@/data/site";
import { Button, Label } from "@/components/ui";

export function Showcase() {
  return (
    <section className="hero section-shell" id="system">
      <div className="hero-kicker"><Label tone="red">Portfolio / Software Engineer</Label><span className="signal-line" /></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="mono-note">SOFTWARE ENGINEER <span>{"//"}</span> FULL-STACK DEVELOPER</p>
          <h1>BUILD<br /><em>WITH INTENT.</em></h1>
          <p className="hero-intro">An engineering portfolio for <strong>Amritansh Jaiswal</strong> — where thoughtful systems meet expressive digital craft.</p>
          <div className="hero-actions"><Button href="#about">Inspect profile</Button><Button href="#skills" variant="secondary">View capabilities</Button></div>
        </div>
        <div className="hero-aside">
          <div className="orbit-mark" aria-hidden="true"><div className="orbit-ring orbit-ring-one" /><div className="orbit-ring orbit-ring-two" /><div className="orbit-core"><Cpu size={28} /></div><span className="orbit-cross cross-x" /><span className="orbit-cross cross-y" /></div>
          <p className="annotation annotation-top">CORE / 01<br /><span>ENGINEERING PORTFOLIO</span></p>
          <p className="annotation annotation-bottom">B.TECH INFORMATION TECHNOLOGY<br /><span>CLASS OF 2026</span></p>
        </div>
      </div>
      <div className="metadata-strip">{systemMetadata.map(([key, value, tone]) => <div className="meta-cell" key={key}><span>{key}</span><strong className={tone === "live" ? "status-live" : ""}>{tone === "live" && <i />} {value}</strong></div>)}</div>
    </section>
  );
}
