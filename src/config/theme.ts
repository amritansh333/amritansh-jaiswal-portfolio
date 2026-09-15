export const theme = {
  colors: {
    background: "#11110f",
    foreground: "#f2efe7",
    surface: "#1a1a17",
    surfaceElevated: "#24231e",
    surfaceMuted: "#151512",
    border: "#3d3b35",
    accentRed: "#e44735",
    accentGold: "#c6a15b",
    accentAmber: "#e7b65b",
    surfaceDark: "#1a1a17",
    surfaceLight: "#e9e4d8",
    borderDark: "#3d3b35",
    borderLight: "#d5cfc2",
    muted: "#9a978e",
  },
  typography: {
    display: '"Courier New", Courier, monospace',
    body: '"Courier New", Courier, monospace',
    mono: '"Courier New", Courier, monospace',
  },
  motion: {
    fast: "140ms",
    standard: "240ms",
    slow: "650ms",
    ease: "cubic-bezier(0.2, 0.8, 0.2, 1)",
  },
} as const;
