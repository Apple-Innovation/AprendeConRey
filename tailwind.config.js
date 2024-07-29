/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "tile-pattern-light": `url('/AprendeConRey/src/assets/backgroundTile.png?t=1722228234571')`,
        "tile-pattern-dark": `url('/AprendeConRey/src/assets/darkBackgroundTile.png?t=1722286324108')`,
      },
    },
  },
  plugins: [],
};
