/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      fira: ['Fira Code', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        bsod: '#000A5F',
        border: '#AAAAAA',
      },
      fontFamily: {
        firacode: ['Fira_Code', 'sans-serif'],
      },
      screen: {
        'custom-sm': { max: '828px' },
      },
    },
  },

  plugins: [],
};