import { ArrowUpRight, Binary } from "lucide-react";
import { publications } from "@/data/publications";
import { Divider, Label } from "@/components/ui";

export function Publications() {
  return (
    <section
      className="section-shell projects-section publications-section"
      id="publications"
      aria-labelledby="publications-heading"
    >
      <div className="section-heading">
        <Label tone="gold">Publication</Label>
        <p>
          Research work exploring the use of Generative AI for clinical
          text-to-visual explanations.
        </p>
        <h2 id="publications-heading">
          RESEARCH
          <br />
          <span className="accent">PUBLISHED.</span>
        </h2>
      </div>

      <Divider label="05 / RESEARCH & PUBLICATION" />

      <div className="projects-list">
        {publications.map((publication) => (
          <article
            className="project-entry publication-entry"
            key={publication.id}
          >
            <div className="project-index">
              <span className="mono-note">{publication.id}</span>
            </div>

            <div className="project-content">
              <div className="project-heading">
                <div>
                  <p className="record-period">{publication.date}</p>

                  <h3>{publication.title}</h3>

                  <p className="record-organization">{publication.category}</p>
                </div>

                <span className="project-status">{publication.role}</span>
              </div>

              <ul
                className="project-description-list"
                aria-label={`${publication.title} publication details`}
              >
                {publication.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="project-details">
                <div>
                  <p className="project-detail-label">TECHNOLOGIES</p>

                  <ul
                    className="project-stack"
                    aria-label={`${publication.title} technologies`}
                  >
                    {publication.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="project-detail-label">HIGHLIGHTS</p>

                  <ul className="project-features">
                    {publication.features.map((feature) => (
                      <li key={feature}>
                        <Binary size={12} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {publication.publication && (
                <div className="publication-journal">
                  <p className="project-detail-label">PUBLISHED IN</p>

                  <p>{publication.publication}</p>
                </div>
              )}

              {publication.link && (
                <div className="project-links">
                  <a
                    className="project-link"
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Publication
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
