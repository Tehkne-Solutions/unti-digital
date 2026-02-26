import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem"
      }
    },
    extend: {
      colors: {
        unti: {
          primary: "#6558f5",
          primarySoft: "#e0defd",
          accent: "#bd34d1",
          accentSoft: "#c79fe7",
          dark: "#293845",
          muted: "#4b5c6b",
          light: "#f0f4f7",
          surface: "#ffffff",
          border: "#e1e5ec",
          warning: "#fce7a8"
        }
      }
    }
  },
  plugins: []
};

export default config;
