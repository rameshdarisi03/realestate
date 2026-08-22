import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#e9c176',
          400: '#c5a059',
          500: '#775a19',
          600: '#5d4201',
        },
        surface: {
          DEFAULT: 'var(--bg-main)',
          dark: '#121212',
          light: '#fbf9f9',
          card: 'var(--bg-card)',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        'section-gap': '100px',
        'container-max': '1280px',
        'gutter': '32px',
      }
    },
  },
  plugins: [],
};
export default config;
