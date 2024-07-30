/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "tile-pattern-light": `url('/src/assets/backgroundTile.png')`,
        "tile-pattern-dark": `url('/src/assets/darkBackgroundTile.png')`,
      },
    },
  },
  plugins: [],
};
