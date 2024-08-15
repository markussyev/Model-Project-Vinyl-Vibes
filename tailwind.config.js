/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        Lektion: ['Lektion', 'monospace'],
      },
      colors: {
      yellowgreen: {
        default: '#D2FF28',
        dark: '#B9E904',
      },
      darkgray: {
        default: '#2C2C2C',
        light: '#3D3D3D',
        lighter: '#525252',
      },
      lightgray: {
        default: '#E0E0E0',
      },
      seasalt: {
        default: '#FAFAFA',
      },
      lightcoral: {
        default: '#E16F7C',
      },
    },},
  },
  plugins: [],
  darkMode: 'class',
}

