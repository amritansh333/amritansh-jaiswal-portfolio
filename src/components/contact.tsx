import {
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Globe2,
  Linkedin,
  Mail,
  BadgeCheck,
} from "lucide-react";
import { contactProfile } from "@/data/contact";
import { Button, Divider, Label, Panel } from "@/components/ui";

export function Contact() {
  return (
    <section
      className="section-shell contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="section-heading">
        <Label tone="red">Contact</Label>
        <p>
          One clear route to the next conversation, with the verified profile
          details and resume in reach.
        </p>
        <h2 id="contact-heading">
          LET&apos;S
          <br />
          <span className="accent">CONNECT.</span>
        </h2>
      </div>
      <Divider label="05 / RECRUITER ACCESS" />
      <div className="contact-grid">
        <div className="contact-primary">
          <p className="contact-lead">
            Build something useful
            <br />
            <span className="accent">together.</span>
          </p>
          <p className="contact-copy">{contactProfile.availability}</p>
          <div className="contact-actions">
            <Button href={`mailto:${contactProfile.email}`}>
              Email Amritansh
            </Button>
            <a
              className="button button-secondary"
              href={contactProfile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume <FileText size={15} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href={contactProfile.resume}
              download={contactProfile.resumeDownloadName}
            >
              Download Resume <Download size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <Panel className="contact-details">
          <p className="contact-detail-label">QUICK LINKS</p>
          <a className="contact-detail" href={`mailto:${contactProfile.email}`}>
            <Mail size={17} aria-hidden="true" />
            <span>
              <small>EMAIL</small>
              {contactProfile.email}
            </span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="contact-detail"
            href={contactProfile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} aria-hidden="true" />
            <span>
              <small>GITHUB</small>
              {contactProfile.githubLabel}
            </span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="contact-detail"
            href={contactProfile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={17} aria-hidden="true" />
            <span>
              <small>LINKEDIN</small>
              {contactProfile.linkedInLabel}
            </span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="contact-detail"
            href={contactProfile.googleForDevelopers}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe2 size={17} aria-hidden="true" />
            <span>
              <small>GOOGLE FOR DEVELOPERS</small>
              {contactProfile.googleForDevelopersLabel}
            </span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="contact-detail"
            href={contactProfile.certifications}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BadgeCheck size={17} aria-hidden="true" />
            <span>
              <small>CERTIFICATIONS</small>
              {contactProfile.certificationsLabel}
            </span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Panel>
      </div>
    </section>
  );
}
