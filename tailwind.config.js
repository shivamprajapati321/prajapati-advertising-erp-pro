/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#06b6d4',
          gold: '#fbbf24',
          navy: '#0f172a'
        }
      }
    },
  },
  plugins: [],
}
