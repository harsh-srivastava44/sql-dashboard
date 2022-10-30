/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true, 
      
    },
    
    extend: {
      gridTemplateRows : {
        '9' : 'repeat(9, minmax(0,1fr))'
      },
      gridRowEnd: {
        '10' : '10'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
