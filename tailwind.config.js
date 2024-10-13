/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.{js,jsx,ts,tsx}",                 // Include files in the app directory
    "./components/**/*.{js,jsx,ts,tsx}",      // Include all files in the components directory recursively
    "./src/**/*.{js,jsx,ts,tsx}",             // Include all files in the src directory recursively
  ],
  presets: [require("nativewind/preset")], 
  theme: {
    extend: {},
  },
  plugins: [],
}

