`use client`;

import KakaoMap from "@/components/KakaoMap";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <main className="absolute w-screen h-screen left-0 top-0">
        <KakaoMap />
      </main>
    </div>
  );
};

export default Home;
