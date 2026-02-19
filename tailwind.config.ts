import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#0B63F6",
          700: "#0A45AA"
        }
      }
    }
  },
  plugins: []
};

export default config;
