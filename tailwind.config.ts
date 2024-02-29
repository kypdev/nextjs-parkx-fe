import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1C355E',
        'primary-green': '#7FBC00',
        'secondary-blue': '#343434',
        'secondary-gray': '#E9E9E9',
        'disable': '#A5A5A5',
        'danger': '#FF0000',
         "seconday-white-ffffff": "#fff",
        black: "#000",
        "primary-blue-1c355e": "#1c355e",
        "seconday-grey-e9e9e9": "#e9e9e9",
        "primary-green-7fbc00": "#7fbc00",
        yellowgreen: "#a8d550",
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "rgba(233, 233, 233, 0.4)",
        },
        "seconday-black-343434": "#343434",
        red: "#ff0000",
        gray: "#0e1c34",
        darkgray: "#999",
        gold: "rgba(255, 208, 32, 0.9)",
        "secondary-black-1e1e1e": "#1e1e1e",
        firebrick: "#da3832",
      },
      fontFamily: {
        kanit: "Kanit",
        inherit: "inherit",
        "p6-prompt-reg-12": "Prompt",
      },
      borderRadius: {
        "11xl": "30px",
        "8xs": "5px",
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      base: "1rem",
      lg: "1.13rem",
      "11xl": "1.88rem",
      "5xl": "1.5rem",
      smi: "0.81rem",
      "3xs": "0.63rem",
      inherit: "inherit",

    },
  },
  plugins: [],
};
export default config;
