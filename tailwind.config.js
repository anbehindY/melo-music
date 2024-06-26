/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundClip: {
        text: "text",
      },
      backgroundImage: {
        "right-upper-gradient": "url(/background/rightUpperGradient.png)",
        "left-upper-gradient": "url(/background/leftUpperGradient.png)",
        "right-lower-gradient": "url(/background/rightLowerGradient.png)",
        "left-lower-gradient": "url(/background/leftLowerGradient.png)",
        "right-upper-lg": "url(/background/top-rt-bg.png)",
        "left-upper-lg": "url(/background/top-lt-bg.png)",
        "right-lower-lg": "url(/background/bot-rt-bg.png)",
        "left-lower-lg": "url(/background/bot-lt-bg.png)",
        "lay-phyu": "url(/layphyu.svg)",
        "big-bag": "url(/bigbag.svg)",
        "eternal-gosh": "url(/eternalgosh.svg)",
        "r-zarni": "url(/RZarni.svg)",
        "gradient-rect": "url(/background/gradient-rect.png)",
      },
      boxShadow: {
        "listen-btn": "0 0 38px 2px rgba(190, 12, 12, 0.82)",
        "down-arrow": "0 0 34px 0 rgba(255, 33, 80, 0.7)",
        "artist-img": "0 0.2px 7px 0 rgba(238, 64, 64, 0.66)",
        "artist-shadow": "0 1px 20px 1px rgba(238, 64, 64, 0.66)",
        "right-arrow": "0 5px 16px 0 #080F340F",
      },
      listStyleImage: {
        tick: "url(/tickSquare.svg)",
        cross: "url(/crossSquare.svg)",
      },
      listStylePosition: {
        inside: "inside",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundClip: ["responsive"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".list-style-tick": {
          "background-image": "url('/tickSquare.svg')",
          "background-repeat": "no-repeat",
          "background-position": "left center",
          padding: "3px 0px 3px 10px",
          "list-style": "none",
          margin: "0",
        },
        ".list-style-cross": {
          "background-image": "url('/crossSquare.svg')",
          "background-repeat": "no-repeat",
          "background-position": "left center",
          padding: "3px 0px 3px 10px",
          "list-style": "none",
          margin: "0",
        },
      };
      addUtilities(newUtilities);
    },
    require("tailwindcss-animated"),
  ],
};
