/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        4: '20px',
      },
      margin: {
        4: '20px',
      },
      colors: {
        vitejs: '#123799',
      },
    },
  },
  plugins: [],
};
