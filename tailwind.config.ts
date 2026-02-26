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
          primary: "#396cff", // azul vibrante principal
          dark: "#2d3b93", // azul escuro
          light: "#7fa2ff", // azul claro
          pastel: "#c3d6fc", // azul pastel
          cta: "#ff9900", // laranja CTA
          surface: "#ffffff",
          border: "#e1e5ec",
          muted: "#4b5c6b"
        }
      }
    }
  },
  plugins: []
};

export default config;
