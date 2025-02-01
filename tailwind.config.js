/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./main.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        designColour: '#1d4ed8'
      }
    },
  },
  plugins: [],
}

