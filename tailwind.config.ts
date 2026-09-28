import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12233D",
        ledger: "#2F6F5E",
        "ledger-dark": "#234F42",
        "ledger-light": "#5FAE93",
        brass: "#B08D57",
        paper: "#F2F1EA",
        paperdim: "#E9E7DC",
        slate: "#5B6472",
        line: "#D8D4C8",
        // Dark-mode surfaces
        night: "#0B1220",
        "night-panel": "#141F35",
        "night-line": "#263049",
        "night-slate": "#9AA7BD",
      },
      fontFamily: {
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'IBM Plex Mono'", "'SFMono-Regular'", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,35,61,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
