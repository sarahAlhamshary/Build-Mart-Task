/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   // safelist: ["lg:grid-cols-[1fr_4fr]", "lg:grid-cols-[1fr_3fr_1fr]"],

  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',

}
