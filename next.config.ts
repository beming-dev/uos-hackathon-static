import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lib.sen.go.kr",
        port: "",
        pathname: "/data/teach/**/img/**", // 이미지 경로 패턴 설정
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
