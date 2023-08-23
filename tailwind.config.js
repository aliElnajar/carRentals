/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        blueBlack: "#39395f",
        mainGreen: "#416a59",
        lightGreen: "#a9c25d",
        midGreen: "#73a24e",
      },
    },
  },
  plugins: [require("daisyui")],
};
