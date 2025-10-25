/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#fffcf4',
        orange: '#ffbd40',
        purple: '#9a8533',
        blue: '#81c5f5',
        ink: '#3b2a10',
      },
      boxShadow: {
        card: '0 14px 32px rgba(0,0,0,.10)',
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [],
};
