/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'lg' : {'max' : '992px'},
      'md' : {'max' : '768px'},
      'sm' : {'max' : '480px'},
    },
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      colors: {
        'black' : '#000000',
        'white' : '#ffffff',
        'orange' : '#FA6C30',
        'lightgray': '#2222221c',
        'darked': '#222222',
      }
    },
  },
  plugins: [],
}
