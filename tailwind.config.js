/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        main: '#D39E39',
        darkAccent:'#B39855',
        lightAccent:'#9EA4A9',
        lightSahde: '#F2F2F2',
        darkShade: '#0F0F0D'
      },
      fontFamily: {
        'old-stan': 'Old Standard TT',
        'raleway': 'Raleway',
      }
      
    },
  },
  plugins: [],
}

