/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'txt-btn-h': 'var(--txt-btn-h)',
        'btn-registrar': 'var(--btn-registrar)',
        'form': 'var(--form)',
        'label': 'var(--label)',
      },
      width: {
        1200: '1200px',
        400: '400px'
      },
      height: {
        450: '450px'
      }
    },
  },
  plugins: [],
}

