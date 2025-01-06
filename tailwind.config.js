/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      "pale-yellow": "#F5EECB",
      magenta: "#B62D5D",
      "light-pink": "#f0cfd4",
      "dark-brown": "#96422c",
      tan: "#DABD92",
      brown: "#B17B5E",
      "dark-green": "#3F5A3E",
      polaroid: "#F6F4F4",
      black: "#000000",
      "light-green": "#608A5F",
    },
  },
  plugins: [],
};
