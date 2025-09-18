/** @type {import('tailwindcss').Config} */
// This tells your editor and Vite the shape of Tailwind config
module.exports = {
  // 'content' defines which files Tailwind will scan for class names
  // This is important to remove unused CSS in production
  content: [
    "./index.html",            // Scan index.html for Tailwind classes
    "./src/**/*.{js,jsx}"      // Scan all JS/JSX files in src/ recursively
  ],
  theme: {
    // 'extend' allows adding custom colors, spacing, fonts, etc.
    extend: {},
  },
  plugins: [], // Add Tailwind plugins here if needed
};
