/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dic: {
          blue: "#1e5f8a",
          "blue-dark": "#0f3d5c",
          cyan: "#0d9bbf",
          "cyan-light": "#4dd0e1",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
