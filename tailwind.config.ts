import type { Config } from "tailwindcss";
import { DM_Sans } from 'next/font/google'


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heading: ['Clash Display','sans-serif'],
        body: ['DM Sans','sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
