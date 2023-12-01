/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "canada-type-gibson": ['"canada-type-gibson"', "sans-serif"],
        "canada-type-gibson-italic": [
          '"canada-type-gibson"',
          "sans-serif",
          { style: "italic" },
        ],
        "canada-type-gibson-medium": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "500" },
        ],
        "canada-type-gibson-medium-italic": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "500", style: "italic" },
        ],
        "canada-type-gibson-semibold": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "600" },
        ],
        "canada-type-gibson-semibold-italic": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "600", style: "italic" },
        ],
        "canada-type-gibson-bold": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "700" },
        ],
        "canada-type-gibson-bold-italic": [
          '"canada-type-gibson"',
          "sans-serif",
          { weight: "700", style: "italic" },
        ],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.5rem",
      },
      height: {
        340: "34rem",
      },
      backgroundImage: {
        image: "url('/src/images/Ebook_Newsletter.png')",
      },
    },
  },
  plugins: [],
};

