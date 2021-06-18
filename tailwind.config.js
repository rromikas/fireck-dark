const defaultTheme = require("tailwindcss/defaultTheme");

const sizes = {
  "6px": "6px",
  "9px": "9px",
  "10px": "10px",
  "22px": "22px",
  "26px": "26px",
  "28px": "28px",
  "29px": "29px",
  "34px": "34px",
  "36px": "36px",
  "39px": "39px",
  "42px": "42px",
  "45px": "45px",
  "48px": "48px",
  "54px": "54px",
  "64px": "64px",
  "68px": "68px",
  "90px": "90px",
  "160px": "160px",
  "182px": "182px",
  "192px": "192px",
  "208px": "208px",
  "284px": "284px",
  "290px": "290px",
  "385px": "385px",
  "430px": "430px",
  "457px": "457px",
  "544px": "544px",
  "552px": "552px",
  "600px": "600px",
  "644px": "644px",
  "846px": "846px",
  "1200px": "1200px",
  "1556px": "1556px",
};

module.exports = {
  important: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "420px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: {
          300: "#33A1FD",
          400: "#2176FF",
        },
        gray: {
          100: "#FAFAFB",
          200: "#f3f4f4",
          300: "#F3F6FA",
          301: "#E8EDF3",
          400: "#DDDDDD",
          600: "#6F6F6F",
        },
        orange: {
          300: "#FDCA40",
          301: "#FFBA00",
          400: "#F79824",
        },
        green: {
          400: "#2DBE4D",
          netlify: "#1B9F97",
        },
      },
      fontSize: sizes,
      spacing: sizes,
      minWidth: sizes,
      minHeight: sizes,
      maxWidth: sizes,
      lineHeight: sizes,
      borderWidth: sizes,
      boxShadow: {
        standard: "0px 4px 11px rgba(0, 0, 0, 0.1)",
        snack: "0px 0px 8px rgba(0, 0, 0, 0.14)",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      borderWidth: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
