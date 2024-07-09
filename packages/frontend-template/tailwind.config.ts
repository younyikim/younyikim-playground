/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './*.html',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        blue: '#0059F5',
        pink: '#F6AFC6',
        yellow: '#FFF06C',
        black: '#1E1E1E',
        green: '#00A676',
        coral: '#FF6F61',
        purple: '#7B68EE',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
