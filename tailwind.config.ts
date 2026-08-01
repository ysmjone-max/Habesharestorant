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
        'habesha-green': '#1E4D2B',
        'habesha-gold': '#C9A227',
        'habesha-red': '#9B2C2C',
        'habesha-cream': '#F7F3EB',
        'habesha-espresso': '#3B2B22',
        'habesha-beige': '#D8C3A5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
