// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fondo: "#1B1B25",
        rojoMaster: "#E4372E",
      },
    },
  },
  plugins: [],
};
export default config;
