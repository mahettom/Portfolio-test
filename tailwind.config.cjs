/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: 'black',
        secondary: 'white',
        tertiary: '#ff5300',
      },
      fontWeight: {
        bold: '900'
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        oldXs: '370px',
        xs: '410px',
        sm: '570px',
        md: '900px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        'ledger': ['"DM Mono"']
      }
    },
  },
  plugins: [],
};