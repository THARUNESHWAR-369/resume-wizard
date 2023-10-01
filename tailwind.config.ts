import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "foreground-accent-color-1": "#f43721",
        "foreground-accent-color-2": "#f45b19",
        "foreground-accent-color-3": "#fc9d04",
        "foreground-accent-color-4": "#fdbb02",
      },
      screens: {
        xl550: "550px",
        xl370: "370px",
      },
    },
  },
  plugins: [],
};
export default config;
