"use client";

import { useEffect, useState } from "react";

const roles = [
  "Aspiring Software Engineer",
  "Full-Stack Developer",
  "AI/ML Enthusiast",
  "Web Developer",
  "Problem Solver",
];

export function RoleTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisibleText(roles[0]);
      setDeleting(false);
      return;
    }

    const currentRole = roles[roleIndex];
    const isTypingComplete = visibleText.length === currentRole.length;
    const isDeletingComplete = deleting && visibleText.length === 0;
    const delay = isTypingComplete ? 1600 : deleting ? 48 : 82;

    const timer = window.setTimeout(() => {
      if (!deleting && !isTypingComplete) {
        setVisibleText(currentRole.slice(0, visibleText.length + 1));
      } else if (!deleting) {
        setDeleting(true);
      } else if (!isDeletingComplete) {
        setVisibleText(currentRole.slice(0, visibleText.length - 1));
      } else {
        setDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, roleIndex, visibleText]);

  return (
    <p className="role-typewriter" aria-label={`Role: ${roles[roleIndex]}`}>
      <span>{visibleText}</span><span className="typewriter-cursor" aria-hidden="true">|</span>
    </p>
  );
}
