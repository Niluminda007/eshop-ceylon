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
        "gray-light": "#eeeeee",
        "dark-black": "#060606",
        "lime-green": "#1fb622",
        "light-green": "#cff0c5",
        "gray-slate": "#aaaaaa",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "120": "120%",
        "16": "4rem",
      },
    },
  },
  plugins: [],
};
export default config;
