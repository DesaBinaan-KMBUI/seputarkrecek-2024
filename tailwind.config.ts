import type { Config } from "tailwindcss";

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
        body: ['DM Sans','sans-serif'],
        poppins: ['Poppins','sans-serif'],
      },
      colors: {
        'white': '#ffffff',
        'tall-poppy-100': '#fde3e4',
        'tall-poppy-200': '#fdcbcd',
        'tall-poppy-300': '#faa7aa',
        'tall-poppy-400': '#f57479',
        'tall-poppy-500': '#ec474d',
        'tall-poppy-600': '#d82a31',
        'tall-poppy-700': '#bb2026',
        'tall-poppy-800': '#961e23',
        'tall-poppy-900': '#7d1f23',
        'tall-poppy-950': '#440b0d',
        'deep-cove-100': '#dde9ff',
        'deep-cove-200': '#c1d5ff',
        'deep-cove-300': '#9bb9ff',
        'deep-cove-400': '#7490ff',
        'deep-cove-500': '#5369ff',
        'deep-cove-600': '#343ef7',
        'deep-cove-700': '#282eda',
        'deep-cove-800': '#2329b0',
        'deep-cove-900': '#252d8a',
        'deep-cove-950': '#11133f',
        'conifer-100': '#ebf5d2',
        'conifer-200': '#d7ecaa',
        'conifer-300': '#b2d963',
        'conifer-400': '#a2cd4e',
        'conifer-500': '#84b230',
        'conifer-600': '#658e22',
        'conifer-700': '#4e6d1e',
        'conifer-800': '#40571d',
        'conifer-900': '#374a1d',
        'conifer-950': '#1b280b',
      },
    },
  },
  plugins: [],
};
export default config;
