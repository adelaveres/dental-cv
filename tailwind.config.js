/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: { brand: '#0ea5a4' },
        fontFamily: {
          dancing: ["'Dancing Script'", "ui-sans-serif", "system-ui", "sans-serif"],
        },
      },
    },
    plugins: [],
  }
  