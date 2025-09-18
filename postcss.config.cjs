// This file configures PostCSS, which is a tool for transforming CSS
// Tailwind CSS uses PostCSS under the hood to generate utility classes

module.exports = {
  plugins: {
    // This is the Tailwind CSS plugin for PostCSS
    // "@tailwindcss/postcss7-compat" is used for compatibility with Tailwind v2 + PostCSS v7
    "@tailwindcss/postcss7-compat": {},

    // autoprefixer automatically adds vendor prefixes to CSS rules
    // Example: -webkit-, -moz-, etc., for better browser support
    autoprefixer: {},
  },
};
