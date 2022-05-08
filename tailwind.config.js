module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#1f5272',
          500: '#15425e'
        },
        secondary: {
          500: '#b5211a'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
