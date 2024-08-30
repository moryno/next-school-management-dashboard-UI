import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sky: "#c3ebfa",
        skyLight: "#edf9fd",
        purple: "#cfceff",
        purpleLight: "#f1f0ff",
        yellow: "#FBC11E",
        yellowLight: "#fefce8",
        delayed: "#C5A070",
        active: "#2CC8BA",
        completed: "#4ED3E5",
        inProgress: "#08AEEA",
        onTrack: "#74CB80",
        inTesting: "#F6A96D",
        onHold: "#FBC11E",
        approved: "#A593FF",
        cancelled: "#DC3545",
        planning: "#08AEEA",
        invoiced: "#B99897",
        spikeGreen: "#12CC1B",
        gray25: "#FCFCFD",
        gray50: "#F9FAFB",
        gray100: "#F2F4F7",
        gray200: "#EAECF0",
        gray300: "#D0D5DD",
        gray400: "#98A2B3",
        gray500: "#667085",
        gray600: "#475467",
        gray900: "#111827",
      },
    },
  },
  plugins: [],
};
export default config;
