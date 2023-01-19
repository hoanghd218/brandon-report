// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { p3dcolor: '#2F84C4' },
    },
  },
  plugins: [
    // ...
  ],
  corePlugins: {
    preflight: true, // <== disable this!
  },
};
