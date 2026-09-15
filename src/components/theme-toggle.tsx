"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { preference, resolvedTheme, setPreference } = useTheme();
  const nextPreference = resolvedTheme === "dark" ? "light" : "dark";
  const Icon = preference === "system" ? Monitor : resolvedTheme === "dark" ? Moon : Sun;
  const label = preference === "system" ? "System theme" : resolvedTheme === "dark" ? "Dark theme" : "Light theme";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${nextPreference} theme`}
      title={`${label}. Switch to ${nextPreference} theme`}
      onClick={() => setPreference(nextPreference)}
    >
      <Icon size={14} aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
