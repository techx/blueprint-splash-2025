/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geminis: ["bd-geminis", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      "dark-lavender": "#585ca2",
      "darker-lavender": "#4e5397",
      white: "#cbd8db",
      purple: "#3E1A47",
      "dark-purple": "#241a42",
      grass: "#A0B683",
      magenta: "#993388",
      "neon-green": "#A7D68D",
      "light-neon-green": "#70AA9A",
    },
  },
  plugins: [],
};
