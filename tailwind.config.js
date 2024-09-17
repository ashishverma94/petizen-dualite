/** @type {import('tailwindcss').Config} */
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abhaya: ['Abhaya Libre', 'serif'],
      },
    },
  },
  plugins: [
    containerQueries
  ],
}

