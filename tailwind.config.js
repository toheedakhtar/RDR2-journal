
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'rd' : ['rdr2']
      },
      backgroundImage : {
        'paper-pattern' : "url('https://img.freepik.com/free-vector/aged-paper-design-space_53876-86277.jpg?ga=GA1.1.946141209.1737097603&semt=ais_incoming')"
      }
    },
  },
  plugins: [],
}