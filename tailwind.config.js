/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        sideBarColor: '#0d1287',
        btnColor: '#213c8b',
        paragraphColor: '#5f5f5f',
      },
    },
  },
  plugins: [],
}
