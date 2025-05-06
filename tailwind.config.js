/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FACF2D',
        'primary-dark': '#E5B91A',
        yellow: {
          400: '#FACF2D',
          500: '#FACF2D',
        },
      },
    },
  },
  // Remove 'important' directive if you're using it
  // important: false,
  plugins: [],
}