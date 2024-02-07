import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      fontFamily: {
        blogbody: ["OverPass"],
        author: ["OverPass"],
      },
      typography: ({ theme }: { theme: any }) => ({
        dark: {
          css: {
            "--tw-prose-body": theme("colors.purple[800]"),
            "--tw-prose-headings": theme("colors.gray[300]"),
            "--tw-prose-lead": theme("colors.purple[700]"),
            "--tw-prose-links": theme("colors.cyan[500]"),
            "--tw-prose-bold": theme("colors.purple[500]"),
            "--tw-prose-counters": theme("colors.purple[600]"),
            "--tw-prose-bullets": theme("colors.purple[400]"),
            "--tw-prose-hr": theme("colors.purple[300]"),
            "--tw-prose-quotes": theme("colors.gray[300]"),
            "--tw-prose-quote-borders": theme("colors.purple[400]"),
            "--tw-prose-captions": theme("colors.purple[700]"),
            "--tw-prose-code": theme("colors.gray[500]"),
            "--tw-prose-pre-code": theme("colors.gray[100]"),
            "--tw-prose-pre-bg": theme("colors.gray[600]"),
            "--tw-prose-th-borders": theme("colors.purple[300]"),
            "--tw-prose-td-borders": theme("colors.purple[200]"),
            "--tw-prose-invert-body": theme("colors.purple[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.purple[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.purple[400]"),
            "--tw-prose-invert-bullets": theme("colors.purple[600]"),
            "--tw-prose-invert-hr": theme("colors.purple[700]"),
            "--tw-prose-invert-quotes": theme("colors.purple[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.purple[700]"),
            "--tw-prose-invert-captions": theme("colors.purple[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.purple[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.purple[600]"),
            "--tw-prose-invert-td-borders": theme("colors.purple[700]"),
          },
        },
        light: {
          css: {
            "--tw-prose-links": theme("colors.blue[500]"),
            "--tw-prose-bold": theme("colors.gray[700]"),
            "--tw-prose-counters": theme("colors.gray[700]"),
            "--tw-prose-bullets": theme("colors.gray[800]"),
            "--tw-prose-quotes": theme("colors.gray[600]"),
            "--tw-prose-quote-borders": theme("colors.gray[400]"),
          },
        },
      }),
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};

export default config;
