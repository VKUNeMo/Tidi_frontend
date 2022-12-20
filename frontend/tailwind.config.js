/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        '28': 'repeat(28, minmax(0, 1fr))',
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      minHeight: {
        '80px': '160px',
      },
      spacing: {
        '1/5': '20%',
        '1/6': '18%',
        '1/8': '12.5%',
        '1/10': '10%',
        '1/12': '8%'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
