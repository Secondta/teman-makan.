/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          // tema: "#E5E5E5",
        },
      },
    ],
  },
}
