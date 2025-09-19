import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        blackHan: ["Black Han Sans", "sans-serif"],
        gothicA1: ["Gothic A1", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
