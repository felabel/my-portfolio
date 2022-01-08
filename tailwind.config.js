const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/components/**/*.html',
    './src/components/**/*.js',
    './src/components/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      backgroundImage: {
      'guitar': "url('./images/guitar.jpg')",
      'booklist': "url('./images/booklist1.jpg')",
      'breaking': "url('./images/breaking.jpg')",
      'olive': "url('./images/olive-res.jpg')",
      'gradient': 'linear-gradient(90deg,#2371ae 0,#bb47d4)',
      'purplebg': 'rgb(221, 54,183)',
      'gradient-purple': 'linear-gradient(90deg,rgba(221, 54,183, 1) 1%, rgba(199, 54, 191, 1) 68%, rgba(178, 11, 165) 100%)'
      },
      colors: {
        purple: 'rgb(221, 54,183)',
        'nav-gray': '#434343',
        'body': 'rgba',
        'github': '#171515',
        'nav-tp': 'rgba(0,0,0,0.7)',
        
        'teal': '#3ed678',
        'about-bg': '#262626',
        'nav-bg': '#222222',
        transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      // purple: colors.violet,
      pink: colors.pink,

      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
