import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

defaultTheme.width;

const percentages = {
  "1/6": "16.666667%",
  "1/5": "20%",
  "1/4": "25%",
  "1/3": "33.333333%",
  "1/2": "50%",
  "2/3": "66.666667%",
  "3/4": "60%",
};

const sizes = {
  100: "25rem",
};

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nico2433/custom-inputs/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // *-------------- SIZES --------------* //
      translate: {
        "1/6": percentages["1/6"],
        "1/5": percentages["1/5"],
      },
      inset: {
        "1/6": percentages["1/6"],
        "1/5": percentages["1/5"],
        "1/4": percentages["1/4"],
        "1/3": percentages["1/3"],
        "1/2": percentages["1/2"],
      },
      // *-------------- HEIGHT
      maxHeight: {
        "1/6": percentages["1/6"],
        "1/5": percentages["1/5"],
        "1/4": percentages["1/4"],
        "1/3": percentages["1/3"],
        "1/2": percentages["1/2"],
        "2/3": percentages["2/3"],
        "3/4": percentages["3/4"],
      },
      height: {
        semiScreen: "70vh",
      },
      // *-------------- WIDTH
      minWidth: {
        "1/2": percentages["1/2"],
      },
      width: {
        100: sizes[100],
      },
      maxWidth: {
        "1/4": percentages["1/4"],
        "1/2": percentages["1/2"],
      },
      // *-------------- FONTS --------------* //
      fontSize: {
        mainTitle: defaultTheme.fontSize["7xl"],
        secondaryTitle: defaultTheme.fontSize["5xl"],
        tertiaryTitle: defaultTheme.fontSize["3xl"],
        fourthTitle: defaultTheme.fontSize.xl,
      },
      // *-------------- COLORS --------------* //
      colors: {
        primary: {
          active: "#73AABF",
          accent: "#0487D9",
          bgD: "#011C26",
          bgL: "#D9D9D9",
          focus: "#363434",
          fromGradient: "#214DE9DE",
          toGradient: "#23AEB9E3",
          black: "#0d0d0d",
          grayL: defaultColors.gray[700],
          pink: defaultColors.pink[500],
        },
        secondary: {
          toGradient: "#15FFE3",
        },
      },
      gradientColorStopPositions: {
        "87%": "87%",
        "89%": "89%",
      },
      // *-------------- ANIMATIONS --------------* //
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInDown: "fadeInDown 0.3s ease-in-out",
      },
      // *-------------- BACKGROUND --------------* //
      backgroundImage: {
        artists: "url(/images/ArtistsBackground.jpeg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
