/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          primary: '#F5F3EE', // Cream color for light mode
          secondary: '#E8E4DD',
          text: '#2D3748',
          accent: '#4A5568'
        },
        // Dark mode colors
        dark: {
          primary: '#1A1A1A',   // Soft black for dark mode
          secondary: '#242424',
          text: '#E2E8F0',
          accent: '#A0AEC0'
        }
      }
    },
  },
  plugins: [],
}