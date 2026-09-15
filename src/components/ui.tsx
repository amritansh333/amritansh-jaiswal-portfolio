import type { ReactNode } from "react";

type Tone = "neutral" | "red" | "gold" | "light";

export function Label({ children, tone = "neutral" }: { children: ReactNode; tone?: Tone }) {
  return <span className={`eyebrow eyebrow-${tone}`}>{children}</span>;
}

export function Divider({ label }: { label?: string }) {
  return (
    <div className="divider" aria-hidden={label ? undefined : true}>
      <span />
      {label && <span className="divider-label">{label}</span>}
      <span />
    </div>
  );
}

export function Panel({
  children,
  className = "",
  accent = false,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return <div className={`panel ${accent ? "panel-accent" : ""} ${className}`}>{children}</div>;
}

export function Button({
  children,
  href = "#",
  variant = "primary",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
