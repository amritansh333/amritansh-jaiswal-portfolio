"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="site-header chamfered">
      <a className="brand" href="#top" aria-label="Amritansh Jaiswal home">
        <span className="brand-mark chamfered">
          <Image src="/logo.png" alt="" width={36} height={36} priority />
        </span>
        <span className="brand-name">AMRITANSH<br />JAISWAL</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close primary navigation" : "Open primary navigation"}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
        <span>{open ? "Close" : "Menu"}</span>
      </button>
      <nav id="primary-navigation" className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Primary navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
            <span>{item.index}</span>{item.label}
          </a>
        ))}
        <ThemeToggle />
        <a className="nav-contact chamfered" href="#contact" onClick={() => setOpen(false)}>Start a conversation <span>↗</span></a>
      </nav>
    </header>
  );
}
