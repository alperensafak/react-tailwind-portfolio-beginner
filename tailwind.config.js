// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    animation: {
      float: "float 3s infinite",
    },
    keyframes: {
      float: {
        "0%": {
          transform: "translateY(0px)",
          animationTimingFunction: "ease-in-out",
        },
        "50%": {
          transform: "translateY(-20px)",
          animationTimingFunction: "ease-in-out",
        },
        "100%": {
          transform: "translateY(0px)",
          animationTimingFunction: "ease-in-out",
        },
      },
    },
    
    extend: {
      colors: {
        "button-pri": "#FF9637",
        "button-sec": "#FDCF84",
      },
     
      fontFamily: {
        dosis: ["Dosis"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
