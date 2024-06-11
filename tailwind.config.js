/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor1: '#22223B', // Example custom color
        customColor2: '#2563EB', // Another example custom color
        customColor3: '#D97706', // And another one
      },
    },
  },
  plugins: [],
}

