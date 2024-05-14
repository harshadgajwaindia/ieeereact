/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/assets/home-bg.jpg')",
      },
      keyframes: {
        'expand': {
          '0%': { height: '0px' },
          '100%': { height: 'max-content' },
        }
      },
      animation: {
        'expand': 'expand 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
}

