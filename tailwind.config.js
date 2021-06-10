// tailwind.config.js
module.exports = {
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
        repink: "#ffd8dd",
        redarkpink: "#ff9ca8",
        redarkgrey: "#535353",
        regrey: "#F5F5F5",
        rebeige: "#FFE4DD",
        reorange: "#FF9A00"
      }
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderColor: ["hover", "focus", "group-hover"],
    textDecoration: ["responsive", "hover", "focus", "group-hover"],
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  }
};
