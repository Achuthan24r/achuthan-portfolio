/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981', // emerald-500
          dark: '#059669', // emerald-600
        },
        dark: {
          bg: '#0f172a', // slate-900
          card: '#1e293b', // slate-800
        }
      }
    },
  },
  plugins: [],
}
