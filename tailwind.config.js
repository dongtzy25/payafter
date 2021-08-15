module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Nunito Sans'],
     }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [],
}
