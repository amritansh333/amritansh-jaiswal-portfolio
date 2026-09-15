"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type ThemePreference = "system" | "light" | "dark";

type ThemeContextValue = {
  preference: ThemePreference;
  resolvedTheme: "light" | "dark";
  setPreference: (preference: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function resolveTheme(preference: ThemePreference) {
  if (preference !== "system") return preference;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    const nextPreference: ThemePreference = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
    setPreferenceState(nextPreference);
  }, []);

  useEffect(() => {
    setResolvedTheme(resolveTheme(preference));
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const handleSystemChange = () => {
      if (preference === "system") setResolvedTheme(resolveTheme("system"));
    };
    media.addEventListener("change", handleSystemChange);
    return () => media.removeEventListener("change", handleSystemChange);
  }, [preference]);

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme;
  }, [resolvedTheme]);

  const value = useMemo(() => ({
    preference,
    resolvedTheme,
    setPreference: (nextPreference: ThemePreference) => {
      window.localStorage.setItem("portfolio-theme", nextPreference);
      setPreferenceState(nextPreference);
      setResolvedTheme(resolveTheme(nextPreference));
    },
  }), [preference, resolvedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
