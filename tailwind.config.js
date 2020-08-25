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
        rered: "#eb364b",
        repink: "#ffd8dd",
        redarkpink: "#ff9ca8",
        redarkgrey: "#535353",
        regrey: "#F5F5F5",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderColor: ["hover", "focus", "group-hover"],
    textDecoration: ["responsive", "hover", "focus", "group-hover"],
  },
};
