/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'txt-btn-h': 'var(--txt-btn-h)',
        'btn-registrar': 'var(--btn-registrar)',
      },
      width: {
        1200: '1200px',
      },
      height: {
        400: '400px'
      }
    },
  },
  plugins: [],
}

