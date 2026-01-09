module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeSlideIn: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeSlideIn: "fadeSlideIn 0.5s ease-out forwards",
      },
    },
  },
}
