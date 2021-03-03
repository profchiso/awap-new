module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        awesum: "url('../images/MainBackground.svg')",
        footer: "url('../images/MainFooter.svg')",
        bodyLightBlue: "url('../images/GradientWithDots.svg')",
        card: "url('../images/bgCard.svg')",
      }),
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Google Sans', 'Segoe UI','Open Sans'],
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
      card: '0px 8px 40px rgba(27, 67, 170, 0.05);',
      awesumOne: '0px 3px 8px rgba(13, 6, 95, 0.1);',
      login:'0px 5px 24px rgba(0, 0, 0, 0.129);',

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
      f8: "#F8F8FA",
    }),

    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'blueTwo': "#100B4A",
      'blueThree': "#090729",
      'blueFour': "#0F0957",
     }),
     height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      full150: "150%",
      screen: "100vh",
    }),
     maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      0: "0rem",
      ts2 : "14rem",
      ts1: "17rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      ...breakpoints(theme("screens")),
    }),
    minWidth: {
      '0': '0',
      'xs': "20rem",
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
    minHeight: {
      '0': '0',
      'ts1': "17rem",
      'xs': "20rem",
      'sm': "24rem",
      'md': "28rem",
      'lg': "32rem",
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '5/6': '83%',
      'full': '100%',
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
