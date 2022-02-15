module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    fontFamily: {
      display: ['Poppins'],
      body: ['Poppins'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  }
}
