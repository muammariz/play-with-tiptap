/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Karla", "sans"],
      serif: ["IBM Plex Serif", "serif"],
    },
    colors: {
      rock: {
        50: "#FFFFFF",
        100: "#EDEFF0",
        200: "#C9D0D2",
        300: "#B7C0C3",
        400: "#95A3A7",
        500: "#6F8085",
        600: "#424C4F",
        700: "#333B3D",
        800: "#24292B",
        900: "#141718",
      },
      sky: {
        darker: "#0731AD",
        dark: "#093CD4",
        primary: "#2157F6",
        light: "#6287F8",
        lighter: "#C0CFFC",
      },
      candy: {
        darker: "#DB0A81",
        dark: "#F63CA5",
        primary: "#F86BBB",
        light: "#FA97CF",
        lighter: "#FCB6DD",
      },
      kiwi: {
        darker: "#14783F",
        dark: "#1BA557",
        primary: "#22D570",
        light: "#6CE7A2",
        lighter: "#9DEFC1",
      },
      pumpkin: {
        darker: "#B23B0C",
        dark: "#D9480F",
        primary: "#F16C37",
        light: "#F59670",
        lighter: "#F9C0A9",
      },
      violet: {
        darker: "#460792",
        dark: "#630AD1",
        primary: "#903CF6",
        light: "#B074F8",
        lighter: "#CFACFB",
      },
      chili: {
        darker: "#860928",
        dark: "#C00C39",
        primary: "#F22C5D",
        light: "#F5688C",
        lighter: "#F9A5BA",
      },
    },
    fontSize: {
      "regular-xs": [
        "10px",
        {
          lineHeight: "16px",
          letterSpacing: "0.4px",
          fontWeight: "400",
          fontFamily: "Karla",
          fontFamily: "sans",
        },
      ],
      "regular-s": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "400",
          fontFamily: "sans",
        },
      ],
      "regular-m": [
        "14px",
        {
          lineHeight: "24px",
          fontWeight: "400",
          fontFamily: "sans",
        },
      ],
      "regular-l": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
          fontFamily: "sans",
        },
      ],
      "regular-xl": [
        "20px",
        {
          lineHeight: "28px",
          fontWeight: "400",
          fontFamily: "sans",
        },
      ],
      "regular-2xl": [
        "24px",
        {
          lineHeight: "32px",
          fontWeight: "400",
          fontFamily: "sans",
        },
      ],
      "regular-3xl": [
        "28px",
        {
          lineHeight: "36px",
          fontWeight: "400",
          fontFamily: "sans",
        },
      ],
      "regular-4xl": [
        "40px",
        {
          lineHeight: "48px",
          fontWeight: "400",
          fontFamily: "sans",
        },
      ],
      "regular-5xl": [
        "48px",
        {
          lineHeight: "56px",
          fontWeight: "400",
          fontFamily: "sans",
        },
      ],
      "regular-p": [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0.2px",
          fontWeight: "500",
          fontFamily: "serif",
        },
      ],

      "heavy-xs": [
        "10px",
        {
          lineHeight: "16px",
          fontWeight: "600",
          fontFamily: "sans",
        },
      ],
      "heavy-s": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "600",
          fontFamily: "sans",
        },
      ],
      "heavy-m": [
        "14px",
        {
          lineHeight: "24px",
          fontWeight: "600",
          fontFamily: "sans",
        },
      ],
      "heavy-l": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "600",
          fontFamily: "sans",
        },
      ],
      "heavy-xl": [
        "20px",
        {
          lineHeight: "28px",
          fontWeight: "600",
          fontFamily: "sans",
        },
      ],
      "heavy-2xl": [
        "24px",
        {
          lineHeight: "32px",
          fontWeight: "600",
          fontFamily: "sans",
        },
      ],
      "heavy-3xl": [
        "28px",
        {
          lineHeight: "36px",
          fontWeight: "600",
          fontFamily: "sans",
        },
      ],
      "heavy-4xl": [
        "40px",
        {
          lineHeight: "48px",
          fontWeight: "600",
          fontFamily: "sans",
        },
      ],
      "heavy-5xl": [
        "48px",
        {
          lineHeight: "56px",
          letterSpacing: "0.2px",
          fontWeight: "600",
          fontFamily: "sans",
        },
      ],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              "@apply text-heavy-3xl": {},
            },
            h2: {
              "@apply text-heavy-xl": {},
            },
            blockquote: {
              "@apply border-rock-200": {},
              p: {
                "@apply text-regular-2xl text-rock-500": {},
                "font-style": "italic",
                "font-family": "Inter",
              },
            },
            p: {
              "@apply text-regular-p": {},
              "font-family": "IBM Plex Serif",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
