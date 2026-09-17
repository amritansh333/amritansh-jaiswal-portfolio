import Image from "next/image";
import { Button } from "@/components/ui";
import { RoleTypewriter } from "@/components/role-typewriter";

export function Showcase() {
  return (
    <section className="hero section-shell" id="system">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="mono-note">SOFTWARE DEVELOPER <span>{"//"}</span> FULL-STACK DEVELOPER</p>
          <h1>LEARNING<br /><em>TO BUILD BETTER.</em></h1>
          <p className="hero-intro">I&apos;m <strong>Amritansh Jaiswal</strong>, a B.Tech graduate and
    Software Developer. I enjoy building full-stack applications and
    learning through hands-on projects.</p>
        </div>
        <div className="hero-aside">
          <div className="photo-frame">
            <span className="photo-tape photo-tape-left" aria-hidden="true" />
            <span className="photo-tape photo-tape-right" aria-hidden="true" />
            <Image
              src="/profile.jpeg"
              alt="Amritansh Jaiswal"
              width={640}
              height={830}
              className="profile-photo"
              priority
            />
          </div>
          <RoleTypewriter />
        </div>
        <div className="hero-actions">
          <Button href="#about">About me</Button>
          <Button
  href="/resume/Amritansh_Jaiswal_Resume.pdf"
  variant="secondary"
  target="_blank"
  rel="noopener noreferrer"
>
  View Resume
</Button>
          <Button href="#contact" variant="secondary">Start a conversation</Button>
        </div>
      </div>
      {/* <div className="metadata-strip">{systemMetadata.map(([key, value, tone]) => <div className="meta-cell" key={key}><span>{key}</span><strong className={tone === "live" ? "status-live" : ""}>{tone === "live" && <i />} {value}</strong></div>)}</div> */}
    </section>
  );
}
