/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'txt-btn-h': 'var(--txt-btn-h)',
      },
      width: {
        450: '450px',
      }
    },
  },
  plugins: [],
}

