import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#221D1A",
        paper: "#F8F2EA",
        "paper-deep": "#EFE6D8",
        fern: "#33402F",
        "fern-soft": "#5C6E52",
        petal: "#B4707C",
        gilt: "#A9834A",
        "gilt-soft": "#C9A56B",
        line: "rgba(34,29,26,0.12)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "draw-corner": {
          "0%": { strokeDashoffset: "160" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "draw-corner": "draw-corner 1.4s ease-out forwards",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
