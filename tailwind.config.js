/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#010C2A',
        'secondary': '#f4c300',
        'tertiary': '#DCDFE0',
        'dark': '#000000',
        'light': '#FFFFFF',
      },
      boxShadow: {
        large: "0px 0px 30px 10px",
      },
    },
  },
  plugins: [],
}