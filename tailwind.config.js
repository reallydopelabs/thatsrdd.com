/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      text: ['neue-haas-grotesk-display', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        '8xl': '1440px',
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@headlessui/tailwindcss'),
  ],
}
