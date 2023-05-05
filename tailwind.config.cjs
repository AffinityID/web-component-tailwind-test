const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["src/**/*.{ts,html,css,scss}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
