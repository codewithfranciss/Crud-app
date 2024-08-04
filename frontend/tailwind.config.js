module.exports = {
  content: [
    "./index.jtm",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '32rem': '32rem'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}