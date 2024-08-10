import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle, rgba(56,33,101,1) 0%, rgba(30,12,61,1) 38%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
