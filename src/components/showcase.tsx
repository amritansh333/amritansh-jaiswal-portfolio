import { Activity, ArrowUpRight, Binary, Code2, Cpu, Database, GitBranch, Globe2, Layers3, Radio, ScanLine, Terminal, Workflow, Zap } from "lucide-react";
import { capabilities, systemMetadata } from "@/data/site";
import { Button, Divider, Label, Panel } from "@/components/ui";

const iconMap = { radio: Radio, layers: Layers3, zap: Zap };

export function Showcase() {
  return (
    <main id="top">
      <section className="hero section-shell" id="system">
        <div className="hero-kicker"><Label tone="red">Portfolio / Design System 001</Label><span className="signal-line" /></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="mono-note">SOFTWARE ENGINEER <span>{"//"}</span> FULL-STACK DEVELOPER</p>
            <h1>BUILD<br /><em>WITH INTENT.</em></h1>
            <p className="hero-intro">An engineering command center for <strong>Amritansh Jaiswal</strong> — where thoughtful systems meet expressive digital craft.</p>
            <div className="hero-actions"><Button href="#about">Inspect profile</Button><Button href="#skills" variant="secondary">View capabilities</Button></div>
          </div>
          <div className="hero-aside">
            <div className="orbit-mark" aria-hidden="true"><div className="orbit-ring orbit-ring-one" /><div className="orbit-ring orbit-ring-two" /><div className="orbit-core"><Cpu size={28} /></div><span className="orbit-cross cross-x" /><span className="orbit-cross cross-y" /></div>
            <p className="annotation annotation-top">CORE / 01<br /><span>DESIGN SYSTEM</span></p>
            <p className="annotation annotation-bottom">B.TECH INFORMATION TECHNOLOGY<br /><span>CLASS OF 2026</span></p>
          </div>
        </div>
        <div className="metadata-strip">{systemMetadata.map(([key, value, tone]) => <div className="meta-cell" key={key}><span>{key}</span><strong className={tone === "live" ? "status-live" : ""}>{tone === "live" && <i />} {value}</strong></div>)}</div>
      </section>

      <section className="section-shell showcase-section" id="interface">
        <div className="section-heading"><Label>Interface / Primitives</Label><h2>THE KIT<span className="accent">.</span></h2><p>Small, opinionated building blocks for a larger engineering language.</p></div>
        <Divider label="01 / VISUAL VOCABULARY" />
        <div className="primitive-grid">
          <Panel className="primitive-panel type-panel"><Label tone="gold">Typography scale</Label><p className="type-display">Aa</p><p className="type-title">DISPLAY / COMMAND</p><p className="type-body">Readable body copy with an editorial rhythm. The system keeps utility labels and expressive headlines in distinct lanes.</p><p className="type-mono">MONO / TECHNICAL ANNOTATION / 16:42:08</p></Panel>
          <Panel className="primitive-panel palette-panel"><Label tone="gold">Signal palette</Label><div className="swatches"><div className="swatch swatch-void"><span>#11110F</span><small>VOID</small></div><div className="swatch swatch-paper"><span>#F2EFE7</span><small>PAPER</small></div><div className="swatch swatch-red"><span>#E44735</span><small>SIGNAL</small></div><div className="swatch swatch-gold"><span>#C6A15B</span><small>METAL</small></div></div></Panel>
          <Panel className="primitive-panel controls-panel"><Label tone="gold">Controls / states</Label><div className="control-row"><Button>Primary action</Button><Button variant="secondary">Secondary</Button></div><div className="badge-row"><span className="tag">SYSTEM</span><span className="tag tag-red">LIVE SIGNAL</span><span className="tag tag-gold">BUILD 001</span></div><div className="focus-demo"><span>FOCUS STATE</span><ArrowUpRight size={16} /></div></Panel>
        </div>
        <Divider label="02 / ENGINEERING MODULES" />
        <div className="capability-grid">{capabilities.map((item) => { const Icon = iconMap[item.icon as keyof typeof iconMap]; return <Panel key={item.id} className="capability"><div className="capability-top"><span className="mono-note">{item.id}</span><Icon size={20} strokeWidth={1.5} /></div><h3>{item.title}</h3><p>{item.body}</p><span className="capability-arrow">→</span></Panel>; })}</div>
      </section>

      <section className="section-shell output-section" id="output">
        <div className="section-heading"><Label tone="red">Output / System preview</Label><h2>MAKE IT<br /><span>USEFUL.</span></h2></div>
        <div className="terminal-window"><div className="terminal-bar"><span className="terminal-dots"><i /><i /><i /></span><span>AJ_COMMAND_CENTER / PREVIEW</span><span>STATUS: <b>READY</b></span></div><div className="terminal-body"><div className="terminal-line"><span className="line-number">01</span><Terminal size={17} /><span>initialise --identity amritansh-jaiswal</span></div><div className="terminal-line terminal-output"><span className="line-number">02</span><span className="output-mark">↳</span><span>Building clear interfaces for complex ideas.</span></div><div className="terminal-line"><span className="line-number">03</span><GitBranch size={17} /><span>git status --short</span></div><div className="terminal-line terminal-output"><span className="line-number">04</span><span className="output-mark">↳</span><span className="text-red">ready to ship / no loose ends</span></div><div className="terminal-cursor"><span className="line-number">05</span><span>_</span></div></div></div>
        <div className="icon-index" aria-label="Technology index">{[Code2, Database, Globe2, Workflow, Binary, ScanLine, Activity].map((Icon, index) => <div key={index}><Icon size={19} /><span>0{index + 1}</span></div>)}</div>
      </section>
    </main>
  );
}
