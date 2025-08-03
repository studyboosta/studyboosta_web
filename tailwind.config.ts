import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(90deg, #3b82f6, #e8bb6a, #f6339a, #e8bb6a, #3b82f6, #e8bb6a, #f6339a)",
      },
      backgroundSize: {
        triple: "300% 300%",
      },
      animation: {
        "text-gradient-move": "gradientShift 5s ease infinite",
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 0%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
