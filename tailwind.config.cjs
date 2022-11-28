/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "youtube-main-bg-color": "#0F0F0F",
      },
      backgroundImage: {
        "home-wallpaper-image": "url('/images/clouds-wallpaper.jpg')",
      },
      minWidth: {
        "1/5": "20%",
      },
      fontSize: {
        "home-title": "clamp(1.50rem, calc(1.12rem + 2.20vw), 3.75rem)",
        "home-subtitle": "clamp(1.25rem, calc(1.08rem + 0.98vw), 2.25rem)",
        "home-button": "clamp(1.25rem, calc(1.19rem + 0.37vw), 1.63rem)",
        "home-icons": "clamp(1.88rem, calc(1.81rem + 0.37vw), 2.25rem)",
      },
      screens: {
        "home-buttons-breakpoint": { max: "385px" },
      },
      width: {
        "home-button-calc": "50%",
      },
    },
  },
  plugins: [],
};
