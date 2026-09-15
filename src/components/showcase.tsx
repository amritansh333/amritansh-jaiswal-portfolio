import Image from "next/image";
import { systemMetadata } from "@/data/site";
import { Button } from "@/components/ui";
import { RoleTypewriter } from "@/components/role-typewriter";

export function Showcase() {
  return (
    <section className="hero section-shell" id="system">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="mono-note">SOFTWARE ENGINEER <span>{"//"}</span> FULL-STACK DEVELOPER</p>
          <h1>BUILD<br /><em>WITH INTENT.</em></h1>
          <p className="hero-intro">An engineering portfolio for <strong>Amritansh Jaiswal</strong> — where thoughtful systems meet expressive digital craft.</p>
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
          <Button href="#about">Inspect profile</Button>
          <Button href="#skills" variant="secondary">View capabilities</Button>
          <Button href="#contact" variant="secondary">Start a conversation</Button>
        </div>
      </div>
      <div className="metadata-strip">{systemMetadata.map(([key, value, tone]) => <div className="meta-cell" key={key}><span>{key}</span><strong className={tone === "live" ? "status-live" : ""}>{tone === "live" && <i />} {value}</strong></div>)}</div>
    </section>
  );
}
