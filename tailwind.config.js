
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // rdr2 font 
      fontFamily : {
        'rd' : ['rdr2']
      },
      // rdr2 bg image
      backgroundImage : {
        'paper-pattern' : "url('https://img.freepik.com/free-vector/aged-paper-design-space_53876-86277.jpg?ga=GA1.1.946141209.1737097603&semt=ais_incoming')"
      },

      // pan in animation
      keyframes : {
        pan : {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(100%)' },
        }
      },
      animation : {
        pan : 'pan 1s ease-in-out'
      }
    },
  },
  plugins: [],
}