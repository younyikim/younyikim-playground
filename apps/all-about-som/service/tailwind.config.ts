/** @type {import('tailwindcss').Config} */
const baseFontSize = 10;

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
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 6s linear infinite',
      },
      colors: {
        blue: '#0059F5',
        pink: '#F6AFC6',
        yellow: '#FFF06C',
        black: '#1E1E1E',
      },
      fontFamily: {
        gulf: ['Gulf Display', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        xs: [
          `${(16 * 0.75) / baseFontSize}rem` /* 12px */,
          {
            lineHeight: `${(16 * 1) / baseFontSize}rem` /* 16px */,
          },
        ],
        sm: [
          `${(16 * 0.875) / baseFontSize}rem` /* 14px */,
          {
            lineHeight: `${(16 * 1.25) / baseFontSize}rem` /* 20px */,
          },
        ],
        base: [
          `${(16 * 1) / baseFontSize}rem` /* 16px */,
          {
            lineHeight: `${(16 * 1.5) / baseFontSize}rem` /* 24px */,
          },
        ],
        lg: [
          `${(16 * 1.125) / baseFontSize}rem` /* 18px */,
          {
            lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
          },
        ],
        xl: [
          `${(16 * 1.25) / baseFontSize}rem` /* 20px */,
          {
            lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
          },
        ],
        '2xl': [
          `${(16 * 1.5) / baseFontSize}rem` /* 24px */,
          {
            ineHeight: `${(16 * 2) / baseFontSize}rem` /* 32px */,
          },
        ],
        '3xl': [
          `${(16 * 1.875) / baseFontSize}rem` /* 30px */,
          {
            lineHeight: `${(16 * 2.25) / baseFontSize}rem` /* 36px */,
          },
        ],
        '4xl': [
          `${(16 * 2.25) / baseFontSize}rem` /* 36px */,
          {
            lineHeight: `${(16 * 2.5) / baseFontSize}rem` /* 40px */,
          },
        ],
        '5xl': [
          `${(16 * 3) / baseFontSize}rem` /* 48px */,
          {
            lineHeight: (16 * 1) / baseFontSize,
          },
        ],
      },
      spacing: {
        px: '1px',
        0: '0px',
        0.5: '0.05rem',
        1: '0.1rem',
        1.5: '0.15rem',
        2: '0.2rem',
        2.5: '0.25rem',
        3: '0.3rem',
        3.5: '0.35rem',
        4: '0.4rem',
        5: '0.5rem',
        6: '0.6rem',
        7: '0.7rem',
        8: '0.8rem',
        9: '0.9rem',
        10: '1rem',
        11: '1.1rem',
        12: '1.2rem',
        14: '1.4rem',
        16: '1.6rem',
        20: '2rem',
        24: '2.4rem',
        28: '2.8rem',
        32: '3.2rem',
        36: '3.6rem',
        40: '4rem',
        44: '4.4rem',
        48: '4.8rem',
        52: '5.2rem',
        56: '5.6rem',
        60: '6rem',
        64: '6.4rem',
        72: '7.2rem',
        80: '8rem',
        96: '9.6rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
