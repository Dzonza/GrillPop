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
        shadow: {
          '0%': {
            boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px',
          },
          '25%': {
            boxShadow:
              'rgba(240, 46, 170, 0.4) 5px 5px,rgba(240, 46, 170, 0.3) 10px 10px',
          },
          '50%': {
            boxShadow:
              'rgba(240, 46, 170, 0.4) 5px 5px,rgba(240, 46, 170, 0.3) 10px 10px,rgba(240, 46, 170, 0.2) 15px 15px',
          },
          '75%': {
            boxShadow:
              'rgba(240, 46, 170, 0.4) 5px 5px,rgba(240, 46, 170, 0.3) 10px 10px,rgba(240, 46, 170, 0.2) 15px 15px,rgba(240, 46, 170, 0.1) 20px 20px',
          },
          '100%': {
            boxShadow:
              'rgba(240, 46, 170, 0.4) 5px 5px,rgba(240, 46, 170, 0.3) 10px 10px,rgba(240, 46, 170, 0.2) 15px 15px,rgba(240, 46, 170, 0.1) 20px 20px,rgba(240, 46, 170, 0.05) 25px 25px',
          },
        },
      },
      animation: {
        rotate: 'rotate 9s linear infinite',
        shadow: 'shadow 0.5s ease forwards 0.8s',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
