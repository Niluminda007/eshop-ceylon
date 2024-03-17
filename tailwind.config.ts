import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px", // Extra small screens (below 520px)
        sm: "520px", // Small screens (between 520px and 767px)
        md: "768px", // Medium screens (between 768px and 1023px)
        lg: "1024px", // Large screens (1024px and above)
      },
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
