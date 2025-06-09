/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc8fb",
          400: "#36aef5",
          500: "#0d99e5",
          600: "#0074c2",
          700: "#005b9d",
          800: "#064c81",
          900: "#0a4169",
        },
        teal: {
          50: "#effcf9",
          100: "#d7f6ef",
          200: "#b0ece0",
          300: "#7ddccd",
          400: "#43c2b2",
          500: "#25a495",
          600: "#1a837d",
          700: "#196866",
          800: "#185352",
          900: "#154444",
        },
      },
      boxShadow: {
        solid: "6px 6px 0 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
