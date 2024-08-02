module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"]
      },
      colors: {
        primary: "#ffffff",
        secondary: "#ffd700",
        background: "#ffecb3",
        surface: "#fffae5",
        text: "#5c3d00",
        border: "#f0e68c",
        gridBorder: "#e0d896",
        light: {
          background: "#ffffff",
          surface: "#f2f2f2",
          text: "#333333",
          mutedText: "#666666",
          border: "#e0e0e0",
          gridBorder: "#d1d7dc"
        },
        dark: {
          background: "#121212",
          surface: "#1e1e1e",
          text: "#ffffff",
          mutedText: "#bbbbbb",
          border: "#333333",
          gridBorder: "#333333"
        },
        accent: {
          selectedBackground: "#e6e6ff",
          focus: "#be32f5",
          hover: "#d170f7",
          footerHeader: {
            dark: "#1e1e1e",
            light: "#f2f2f2"
          }
        }
      }
    }
  },
  plugins: []
};
