module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        awesum: "url('assets/images/MainBackground.svg')",
        footer: "url('assets/images/MainFooter.svg')",
      }),
    },
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#0D065F',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
     textColor:(theme) => ({
      ...theme('colors'),
      'primary': '#0D065F',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      primary: '0px 3px 10px rgba(13, 6, 95, 0.12);',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: "#0D065F",
      primeGrey: "rgba(13, 6, 95, 0.03)",
      orangeLight: "",
      orangeDark: "",
      blueOne: "#0F0957",
      footerRowThree: "#090729",
      danger: "#e3342f",
    }),

    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'blueTwo': "#100B4A",
      'blueThree': "#090729",
      'blueFour': "#0F0957",
     }),

    //  maxWidth: {
    //    'tsx':"5rem",
    //    "ts":"12rem",

    //   '1/4': '25%',
    //   '1/2': '50%',
    //   '3/4': '75%',
    //  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
