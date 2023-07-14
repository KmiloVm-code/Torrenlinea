/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#21D5D4",
      secondary: "#FEE600",
      accent: "#FFC107",
      danger: "#E3342F",
      success: "#38C172",
      warning: "#F6993F",
      info: "#3490DC",
      light: "#F7F7F7",
      dark: "#0D0D0D",
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#F7F7F7",
        200: "#E5E5E5",
        300: "#D6D6D6",
        400: "#C4C4C4",
        500: "#A3A3A3",
        600: "#7E7E7E",
        700: "#5E5E5E",
        800: "#4D4D4D",
        900: "#333333",
      },
      primary: {
        100: "#E6F9F9",
        200: "#C0F0F0",
        300: "#99E6E6",
        400: "#4DD9D9",
        500: "#21D5D4",
        600: "#00B3B3",
        700: "#007A7A",
        800: "#005A5A",
        900: "#003D3D",
      },
    },
  },
  plugins: [],
}

