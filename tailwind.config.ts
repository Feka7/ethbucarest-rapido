import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-purple': '0 -5px 15px -0px rgba(128, 90, 213, 1), 0 10px 15px -5px rgba(128, 90, 213, 1)',
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;

