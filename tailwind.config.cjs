/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "youtube-main-bg-color": "#0F0F0F",
        "youtube-dark-button-color": "#202024",
        "youtube-light-button-color": "#f8f8f8",
        "youtube-light-border-color": "#e5e5ea",
        "youtube-dark-border-color": "#3c3f43",
      },
      backgroundImage: {
        "home-wallpaper-image": "url('/images/clouds-wallpaper.jpg')",
      },
      minWidth: {
        "1/5": "20%",
      },
      minHeight: {
        "min-h-header": "6rem",
      },
      fontSize: {
        "home-title": "clamp(1.50rem, calc(1.12rem + 2.20vw), 3.75rem)",
        "home-subtitle": "clamp(1.25rem, calc(1.08rem + 0.98vw), 2.25rem)",
        "home-button": "clamp(1.25rem, calc(1.19rem + 0.37vw), 1.63rem)",
        "home-icons": "clamp(1.50rem, calc(1.44rem + 0.37vw), 1.88rem)",
        "search-bar-icon-size": "",
      },
      screens: {
        "home-buttons-breakpoint": { max: "385px" },
      },
      width: {
        "home-button-calc": "50%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("flowbite/plugin"),
  ],
};
