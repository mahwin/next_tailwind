/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx }",
    "./skeletons/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmers: {
          "0%": { transform: "translateX(-150%)" },
          "50%": { transform: "translateX(-60%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        shimmers: "shimmers 2.5s infinite",
      },
    },
  },
  plugins: [],
};
