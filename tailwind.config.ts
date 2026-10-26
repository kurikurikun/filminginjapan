import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          warm: "#e95228",
          "warm-dark": "#c43d10",
        },
        cream: "#fdf8f3",
        sand: "#f5ede2",
        ink: "#1c1208",
        night: "#0d0a07",
        rust: "#e95228",
        "rust-dark": "#c43d10",
        muted: "#6b5a48",
        body: "#4a3a2a",
        rule: "#e8d9c8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "var(--font-jp)", "system-ui", "sans-serif"],
        jp: ["var(--font-jp)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
