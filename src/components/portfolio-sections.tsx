import { ArrowUpRight, Binary, Braces, Database, GitBranch, Layers3, Radio, Server, Smartphone } from "lucide-react";
import { aboutProfile } from "@/data/about";
import { skillGroups } from "@/data/skills";
import { achievements } from "@/data/achievements";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Divider, Label, Panel } from "@/components/ui";

const skillIcons = [Braces, Layers3, Server, Database, Smartphone, GitBranch];

export function PortfolioSections() {
  return (
    <>
      <section className="section-shell profile-section" id="about" aria-labelledby="about-heading">
        <div className="section-heading">
          <Label tone="red">{aboutProfile.label}</Label>
          
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
          <Label tone="gold">Skills</Label>
          <p>Technologies I use across my projects, internships, and coursework.</p>
          <h2 id="skills-heading">WHAT I<br /><span className="accent">WORK WITH?</span></h2>
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

      <section className="section-shell journey-section" id="experience" aria-labelledby="experience-heading">
        <div className="section-heading">
          <Label tone="red">Journey</Label>
          <p>Internships and training programs that have helped me gain hands-on experience.</p>
          <h2 id="experience-heading">MY<br /><span className="accent">EXPERIENCE.</span></h2>
        </div>
        <Divider label="03 / EXPERIENCE" />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-entry" key={item.id}>
              <div className="experience-index mono-note">{item.id}</div>
              <div className="experience-copy">
                <p className="record-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="record-organization">{item.organization}</p>
                <p className="record-summary">{item.summary}</p>
                <p className="record-detail">{item.details}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="record-grid">
          <section className="record-column" id="education" aria-labelledby="education-heading">
            <div className="subsection-heading">
              <Label tone="gold">Foundation</Label>
              <h3 id="education-heading">EDUCATION<span className="accent">.</span></h3>
            </div>
            <div className="education-list">
              {education.map((item) => (
                <article className="education-entry" key={item.qualification}>
                  <div>
                    <h4>{item.qualification}</h4>
                    <p>{item.institution}</p>
                  </div>
                  <div className="education-meta">
                    <span>{item.period}</span>
                    {"result" in item && <strong>{item.result}</strong>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="record-column" id="certifications" aria-labelledby="certifications-heading">
            <div className="subsection-heading">
              <Label tone="gold">Training</Label>
              <h3 id="certifications-heading">CERTIFICATIONS<span className="accent">.</span></h3>
            </div>
            <div className="certification-list">
              {certifications.map((item) => (
                <article className="certification-entry" key={item.title}>
                  <div className="certification-top">
                    <h4>{item.title}</h4>
                    <span className="record-period">{item.date}</span>
                  </div>
                  <p className="record-organization">{item.issuer}</p>
                  <p className="record-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="achievement-section" id="achievements" aria-labelledby="achievements-heading">
          <div className="subsection-heading">
            <Label tone="red">Achievements</Label>
            <h3 id="achievements-heading">BEYOND<br /><span className="accent">CODE.</span></h3>
          </div>
          <div className="achievement-list">
            {achievements.map((item, index) => (
              <Panel className="achievement-entry" key={item.title}>
                <span className="mono-note">0{index + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </Panel>
            ))}
          </div>
        </section>
      </section>
      <Projects />
      <Contact />
    </>
  );
}
