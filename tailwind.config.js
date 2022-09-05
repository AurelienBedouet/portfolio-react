/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": "375px",
      ...defaultTheme.screens,
    },
    container: {
      center: true
    },
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        navbar: 'var(--color-bg-navbar)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        white: 'var(--color-text-white)',
      },
      borderColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        accent: 'var(--color-text-accent)',
      },
      backgroundImage: {
        'primaryGradient': "var(--background-primary)",
      }
    },
  },
  plugins: [],
};
