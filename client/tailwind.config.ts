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
        "eb-50": "#F7F7F7",
      },
      backgroundImage: {
        sea2: 'url("https://images.unsplash.com/photo-1596450514659-4ff64fdde903?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        sea1: 'url("https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        sea3: 'url("https://images.unsplash.com/photo-1691890087137-f18d351caf6b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      },
    },
  },
  plugins: [],
});

export default config;
