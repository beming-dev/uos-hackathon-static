import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "nav-icon": "26px", // 커스텀 너비
        carousel: "27.5px", // 커스텀 너비
        star: "138px",
      },
      height: {
        "nav-icon": "26px", // 커스텀 높이
        carousel: "5px", // 커스텀 높이
        star: "40px",
      },
      maxWidth: {
        xs: "375px", // 기존 xs를 커스텀 사이즈로 지정
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        custom2: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
