const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // Opt-in to TailwindCSS future changes
  future: {
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],  
  // Purge unused TailwindCSS styles
  purge: {
    enabled: ["production", "staging"].includes(process.env.NODE_ENV),
    content: [
      './**/*.html.erb',
      './app/helpers/**/*.rb',
      './app/javascript/**/*.js',
    ],
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // override the default theme using the key directly
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
}
