/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-1': '#6a247d',
        'brand-2': '#eed24b',
      },
      fontFamily: {
        almarai: "'Almarai', sans-serif",
      },
    },
  },
  plugins: [],
};
