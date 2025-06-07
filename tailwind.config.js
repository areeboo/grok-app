/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    darkMode: 'class', // Enable dark mode using a class
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  }