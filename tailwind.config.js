/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e27d60",    
        dark: "#2c2c2c",        
        grayish: "#f7f7f7",       
      }
    },
  },
  plugins: [],
}

