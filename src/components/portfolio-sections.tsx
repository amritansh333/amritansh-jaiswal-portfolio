import { ArrowUpRight, Binary, Braces, Database, GitBranch, Layers3, Radio, Server, Smartphone } from "lucide-react";
import { aboutProfile } from "@/data/about";
import { skillGroups } from "@/data/skills";
import { Divider, Label, Panel } from "@/components/ui";

const skillIcons = [Braces, Layers3, Server, Database, Smartphone, GitBranch];

export function PortfolioSections() {
  return (
    <>
      <section className="section-shell profile-section" id="about" aria-labelledby="about-heading">
        <div className="section-heading">
          <Label tone="red">{aboutProfile.label}</Label>
          <p>Identity, direction, and the working context behind the system.</p>
          <h2 id="about-heading">BUILD<br /><span className="accent">USEFUL.</span></h2>
        </div>
        <Divider label="01 / IDENTITY" />
        <div className="profile-grid">
          <div className="profile-statement">
            <p className="profile-lead">{aboutProfile.statement}</p>
            <p className="profile-description">{aboutProfile.description}</p>
          </div>
          <dl className="profile-modules">
            {aboutProfile.modules.map((module) => (
              <div className="profile-module" key={module.label}>
                <dt>{module.label}</dt>
                <dd>{module.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-shell skills-section" id="skills" aria-labelledby="skills-heading">
        <div className="section-heading">
          <Label tone="gold">Capabilities / Technical matrix</Label>
          <p>Grouped by the kind of engineering work each tool enables.</p>
          <h2 id="skills-heading">KNOW<br /><span className="accent">THE STACK.</span></h2>
        </div>
        <Divider label="02 / CAPABILITY MATRIX" />
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[index] ?? Radio;
            return (
              <Panel className="skill-group" key={group.id}>
                <div className="skill-group-top">
                  <span className="mono-note">{group.id}</span>
                  <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{group.title}</h3>
                <p className="skill-summary">{group.summary}</p>
                <ul className="skill-list" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => <li key={skill}><Binary size={12} aria-hidden="true" />{skill}</li>)}
                </ul>
                <ArrowUpRight className="skill-arrow" size={17} aria-hidden="true" />
              </Panel>
            );
          })}
        </div>
      </section>
    </>
  );
}
