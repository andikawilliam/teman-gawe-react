module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'coffee-splash': "url('../public/coffee-splash.jpg')",
      }),
      backgroundSize: {
        '200%': '200%',
        '250%': '250%',
        '300%': '300%',
        '350%': '350%',
        '400%': '400%',

        '1200': '1200px 1500px',
        '1600': '1600px 2000px',
        '2000': '2000px 2500px',
      },
      backgroundPosition: {
        'left-10%': '10% 5%',
        'left-20%': '20% 5%',
        'left-25%': '25% 5%',
        'left-30%': '30% 5%',
        'left-35%': '35% 5%',
        'left-40%': '40% 5%',
        'left-100': '-100px 0px',
        'left-200': '-200px 0px',
        'left-300': '-300px 0px',
        'left-400': '-400px 0px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      fontSize: {
        '2.5xl': '1.7rem',

        '2vw': '2vw',
        '3vw': '3vw',
        '3.8vw': '3.8vw',
        '4vw': '4vw',
        '4.5vw': '4.5vw',
        '5vw': '5vw',
        '6vw': '6vw',
        '7vw': '7vw',
        '8vw': '8vw',
        '9vw': '9vw',
        '10vw': '10vw',
        
        '2vh': '2vh',
        '3vh': '3vh',
        '4vh': '4vh',
        '4.5vh': '4.5vh',
        '5vh': '5vh',
        '6vh': '6vh',
        '7vh': '7vh',
        '8vh': '8vh',
        '8.5vh': '8.5vh',
        '9vh': '9vh',
        '10vh': '10vh',
      },
      colors: {
        'accent-1': '#333',
        'red-teman': '#a42828',
        'black-gawe': '#3E3131',
        'kopi-susu': '#d6bc95',
        'kopi-coconut': '#dfcbac',
        'kopi-americano': '#bca27b'
      },
      boxShadow: {
        'bottom-white': 'inset 0px -70px 50px -10px #f9fafb'
      },
      height: {
        '1500': '1500px',
        '1600': '1600px',
        '1800': '1800px',
      },
      margin: {
        '2vh': '2vh',
        '3vh': '3vh',
        '4vh': '4vh',
        '5vh': '5vh',
        '6vh': '6vh',
        '7vh': '7vh',
        '8vh': '8vh',

        '2vw': '2vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '6vw': '6vw',
        '7vw': '7vw',
        '8vw': '8vw'
      },
      padding: {
        '2vh': '2vh',
        '3vh': '3vh',
        '4vh': '4vh',
        '5vh': '5vh',
        '6vh': '6vh',
        '7vh': '7vh',
        '8vh': '8vh',
        '10vh': '10vh',
        '15vh': '15vh',
        '18vh': '18vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',

        '2vh': '2vh',
        '3vh': '3vh',
        '4vh': '4vh',
        '4.5vh': '4.5vh',
        '5vh': '5vh',
        '6vh': '6vh',
        '7vh': '7vh',
        '8vh': '8vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
