import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', ...defaultTheme.fontFamily.sans],
        luckiest: ['Luckiest Guy'],
      },
      length: {
        circleRotation: 'var(--rotation)',
      },
      keyframes: {
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        rotate: 'rotate 9s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
