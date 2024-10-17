/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['"Fraunces", serif'],
        'noto': [' "Noto Sans", sans-serif']
      },
      colors: {
        'custom-green': '#6D8453'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["garden", "dim", "emerald"],
  },
}

