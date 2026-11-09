/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F3EF",
        sand: "#ECE8E1",
        stone: "#E6E1D8",
        ink: "#1C1C1C",
        coal: "#24221F",
        muted: "#5A5650",
        line: "#DDD7CC",
        // Brand accent: gold. Alternatives: olive #7A8B6F, navy #2F3E5C, rust #8C5A4A
        accent: "#B89B6A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1280px",
      },
    },
  },
  plugins: [],
};
