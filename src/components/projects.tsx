import { ArrowUpRight, Binary } from "lucide-react";
import { projects } from "@/data/projects";
import { Divider, Label } from "@/components/ui";

export function Projects() {
  return (
    <section className="section-shell projects-section" id="projects" aria-labelledby="projects-heading">
      <div className="section-heading">
        <Label tone="red">Projects</Label>
        <p>Verified builds that show how I approach products, APIs, data, and delivery.</p>
        <h2 id="projects-heading">SHIPPED<br /><span className="accent">SYSTEMS.</span></h2>
      </div>
      <Divider label="04 / SELECTED WORK" />
      <div className="projects-list">
        {projects.map((project) => (
          <article className={`project-entry${project.featured ? " project-entry-featured" : ""}`} key={project.id}>
            <div className="project-index">
              <span className="mono-note">{project.id}</span>
              {project.featured && <Label tone="gold">Featured build</Label>}
            </div>
            <div className="project-content">
              <div className="project-heading">
                <div>
                  <p className="record-period">{project.date}</p>
                  <h3>{project.title}</h3>
                  <p className="record-organization">{project.category}</p>
                </div>
                <span className="project-status">{project.status}</span>
              </div>
              <p className="project-description">{project.description}</p>
              {project.role && <p className="project-role"><span>ROLE</span>{project.role}</p>}
              <div className="project-details">
                <div>
                  <p className="project-detail-label">STACK</p>
                  <ul className="project-stack" aria-label={`${project.title} technology stack`}>
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="project-detail-label">CAPABILITIES</p>
                  <ul className="project-features">
                    {project.features.map((feature) => <li key={feature}><Binary size={12} aria-hidden="true" />{feature}</li>)}
                  </ul>
                </div>
              </div>
              <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
