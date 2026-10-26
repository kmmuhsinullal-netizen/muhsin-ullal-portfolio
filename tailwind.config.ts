import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#090a0c', panel: '#111317', muted: '#a2a4aa', violet: '#b5a8ff', amber: '#e8b779' }, fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'] } } },
  plugins: [],
};
export default config;
