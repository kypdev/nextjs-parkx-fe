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
    },
  },
  plugins: [],
};
export default config;
