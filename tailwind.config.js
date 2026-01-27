/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",   
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Professional blue
        secondary: '#f8fafc', // Light gray
        accent: '#1e293b', // Dark slate
        highlight: '#06b6d4', // Cyan for highlights
      },
    },
  },
  plugins: [],
}

