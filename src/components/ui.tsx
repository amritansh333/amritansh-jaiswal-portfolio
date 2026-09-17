import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Tone = "neutral" | "red" | "gold" | "light";

export function Label({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
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
  return (
    <div
      className={`panel chamfered ${accent ? "panel-accent" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  rel,
  ...buttonProps
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">) {
  const content = (
    <>
      {children}
      <span aria-hidden="true">↗</span>
    </>
  );

  return href ? (
    <a
      className={`button button-${variant} ${className}`}
      href={href}
      target={target}
      rel={rel}
    >
      {content}
    </a>
  ) : (
    <button
      className={`button button-${variant} ${className}`}
      type={buttonProps.type ?? "button"}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
