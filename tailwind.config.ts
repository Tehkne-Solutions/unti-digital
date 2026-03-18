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
        brand: {
          dark: '#1A1A1A',
          muted: '#4B5563',
          primary: '#0047FF'
        },
        unti: {
          blue: "#396cff",
          dark: "#2563eb",
          light: "#7fa2ff",
          pastel: "#c3d6fc",
          orange: "#ff9900",
          muted: "#6B7280",
          border: "#E5E7EB",
          surface: "#F8FAFC",
          heading: "#4B5563",
          topbarBg: "#2563eb"
        }
      },
      fontFamily: {
        sans: ["var(--font-ubuntu)", "system-ui", "sans-serif"]
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
