/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A192F",
        "navy-accent": "#112240",
        background: "#F5F9FF",
        text: "#1E1E1E"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "SF Pro Text", "sans-serif"]
      }
    }
  },
  plugins: []
};
