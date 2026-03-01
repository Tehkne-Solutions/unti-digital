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
          blue: "#396cff",
          dark: "#2d3b93",
          light: "#7fa2ff",
          pastel: "#c3d6fc",
          orange: "#ff9900"
        }
      },
      fontFamily: {
        sans: ["var(--font-ubuntu)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
