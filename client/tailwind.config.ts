import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "eb-10": "#3B976D",
        "eb-20": "#76B57A",
        "eb-30": "#AA16CE",
        "eb-40": "#052E1B",
      },
    },
  },
  plugins: [],
});

export default config;
