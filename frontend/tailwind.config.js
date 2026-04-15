/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0D47A1',
          secondary: '#1976D2',
          accent: '#FFC107',
          neutral: '#212121',
          background: '#FEFEFE',
        },
      },
      backdropBlur: {
        'glass': '12px',
      },
      backgroundImage: {
        'liquid-gradient': 'linear-gradient(135deg, rgba(13, 71, 161, 0.4) 0%, rgba(25, 118, 210, 0.4) 100%)',
      },
    },
  },
  plugins: [],
}
