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
        'disable': '#A5A5A5'
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
