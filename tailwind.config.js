/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1200px',
          xl: '1360px',
          '2xl': '1500px',
        }
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1300px',
        '2xl': '1500px',
        'xxl': '1700px',
        '3xl': '1900px',
        '4xl': '2200px',
        '5xl': '1199px',
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        poppins: ["var"]
      },
      colors: {
        "primary": { 100: "#f5090b" },
        "secondary": { 100: "#ff2d4b" },
      },
      boxShadow: {
        'sm': '0px 0px 6px 0px #00000082;',
        '3xl': '0px 0px 11px 1px #FF2D4B',
        'custom': '0px 0px 10px 1px #9e9e9e33;',
      },
    },
  },
  plugins: [],
}