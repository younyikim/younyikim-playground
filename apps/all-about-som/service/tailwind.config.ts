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
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        reveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        heartbeat: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '25%': {
            transform: 'scale(1.1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '75%': {
            transform: 'scale(1.1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        textScroll: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
        slideInFromLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInFromRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        scrollSlideInFromLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
            filter: 'blur(5px)',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
            filter: 'blur(0)',
          },
        },
        overlaySlide: {
          from: { transform: 'scale(1,1)' },
          to: {
            transform: 'scale(0,1)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 6s linear infinite',
        heartbeat: 'heartbeat 2s infinite',
        reveal: 'reveal 0.2s ease forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'text-scroll': 'textScroll 15s linear infinite',
        'slide-in-left': 'slideInFromLeft 0.2s ease-out forwards',
        'slide-in-right': 'slideInFromRight 0.2s ease-out forwards',
        'scroll-in-left': 'scrollSlideInFromLeft  1s forwards',
        'overlay-fade-in': 'overlaySlide 2s forwards',
      },
      colors: {
        blue: '#0059F5',
        pink: '#F6AFC6',
        yellow: '#FFF06C',
        black: '#1E1E1E',
        green: '#00A676',
        coral: '#FF6F61',
        purple: '#7B68EE',
        gray: '#D3D3D3',
        'light-blue': '#ADD8E6',
      },
      fontFamily: {
        gulf: ['Gulf Display', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
      lineHeight: {
        3: '1.2rem',
        4: '1.6rem',
        5: '2.0rem',
        6: '2.4rem',
        7: '2.8rem',
        8: '3.2rem',
        9: '3.6rem',
        10: '4.0rem',
      },
      fontSize: {
        xs: ['1.2rem', { lineHeight: '1.6rem' }],
        sm: ['1.4rem', { lineHeight: '2.0rem' }],
        base: ['1.6rem', { lineHeight: '2.4rem' }],
        lg: ['1.8rem', { lineHeight: '2.8rem' }],
        xl: ['2.0rem', { lineHeight: '2.8rem' }],
        '2xl': ['2.4rem', { lineHeight: '3.2rem' }],
        '3xl': ['3.0rem', { lineHeight: '3.6rem' }],
        '4xl': ['3.6rem', { lineHeight: '4.0rem' }],
        '5xl': ['4.8rem', { lineHeight: '1' }],
        '6xl': ['6.0rem', { lineHeight: '1' }],
        '7xl': ['7.2rem', { lineHeight: '1' }],
        '8xl': ['9.6rem', { lineHeight: '1' }],
        '9xl': ['12.8rem', { lineHeight: '1' }],
      },
      spacing: {
        px: '.1rem',
        0.5: '.2rem',
        1: '.4rem',
        1.5: '.6rem',
        2: '.8rem',
        2.5: '1.0rem',
        3: '1.2rem',
        3.5: '1.4rem',
        4: '1.6rem',
        5: '2.0rem',
        6: '2.4rem',
        7: '2.8rem',
        8: '3.2rem',
        9: '3.6rem',
        10: '4.0rem',
        11: '4.4rem',
        12: '4.8rem',
        13.5: '5.4rem',
        14: '5.6rem',
        16: '6.4rem',
        20: '8.0rem',
        24: '9.6rem',
        28: '11.2rem',
        32: '12.8rem',
        36: '14.4rem',
        40: '16.0rem',
        44: '17.6rem',
        48: '19.2rem',
        52: '20.8rem',
        56: '22.4rem',
        60: '24.0rem',
        64: '25.6rem',
        72: '28.8rem',
        80: '32.0rem',
        96: '38.4rem',
        34: '8.5rem',
        68: '27.2rem',
        82.5: '33.0rem',
        90: '36.0rem',
        100: '40.0rem',
        106: '42.4rem',
        200: '80.0rem',
      },
      borderRadius: {
        sm: '.2rem',
        DEFAULT: '.4rem',
        md: '.6rem',
        lg: '.8rem',
        xl: '1.2rem',
        '2xl': '1.6rem',
        '3xl': '2.4rem',
      },
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
        0: '0rem',
        xs: '32.0rem',
        sm: '38.4rem',
        md: '44.8rem',
        lg: '51.2rem',
        xl: '57.6rem',
        '2xl': '67.2rem',
        '3xl': '76.8rem',
        '4xl': '89.6rem',
        '5xl': '102.4rem',
        '6xl': '115.2rem',
        '7xl': '128.0rem',
      }),
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar-hide'),
    ({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );
    },
  ],
};
