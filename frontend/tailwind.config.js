/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "light-red": "hsl(var(--color-red) / <alpha-value>)",
      "orangey-yellow": "hsl(var(--color-yellow) / <alpha-value>)",
      "green-teal": "hsl(var(--color-teal) / <alpha-value>)",
      "cobal-blue": "hsl(var(--color-blue) / <alpha-value>)",
      "lslate-blue": "hsl(var(--color-lsblue) / <alpha-value>)",
      "lroyal-blue": "hsl(var(--color-lrblue) / <alpha-value>)",
      "violet-blue": "hsl(var(--color-vblue) / <alpha-value>)",
      "persian-blue": "hsl(var(--color-pblue) / <alpha-value>)",
      white: "hsl(var(--color-white) / <alpha-value>)",
      "pale-blue": "hsl(var(--color-plblue) / <alpha-value>)",
      "light-lavender": "hsl(var(--color-lavender) / <alpha-value>)",
      "dgray-blue": "hsl(var(--color-dgblue) / <alpha-value>)",
    },
    fontFamily: {
      main: ["Hanken Grotesk"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
