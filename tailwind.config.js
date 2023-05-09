// tailwind.config.js
module.exports = {
  content: ["./site/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: [
        "Work Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      colors: {
        rered: "#e9364b",
        repink: "#F08FBA",
        redarkpink: "#ff9ca8",
        redarkgrey: "#535353",
        regrey: "#F5F5F5",
        rebeige: "#FFE4DD",
        reorange: "#FF9A00",
        repurpletribune: "#841BCE",
        repurple: "#643F92",
        rebeigera: "#FCE0D2"
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1280px) { ... }
    }
  }
};
