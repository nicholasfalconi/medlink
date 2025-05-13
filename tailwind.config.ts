import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx,html}",
    "./src/components/**/*.{ts,tsx,html}",
    "./src/**/*.{ts,tsx,html}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: {
      colors: {
        border: 'hsl(210, 16%, 82%)',
        background: '#ffffff',
        foreground: '#000000',
      },
    },
  },
} satisfies Config;