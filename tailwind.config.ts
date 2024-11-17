import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: '#FFCC3A',
        gray: '#F4F4F4'
      },
      fontFamily: {
        nico: ["var(--font-nico)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
