`use client`;

import Header from "@/components/Header";
import KakaoMap from "@/components/KakaoMap";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-full h-full py-16">
        {/* <KakaoMap /> */}

        {/* carousel */}
        <div className="relative w-80 h-44">
          <Image src={"/carousel01.png"} alt="carousel" fill />
        </div>
        <div className="relative w-carousel h-carousel">
          <Image src={"/carousel.png"} alt="carousel" fill />
        </div>

        {/* My 정보 */}
        <div className="flex mt-8">
          <div className="left mr-3.5 ">
            <span className="text-sm">My정보</span>
            <div className="w-40 h-36 shadow-custom"></div>
          </div>
          <div className="right">
            <span className="text-sm">즐겨찾는 메뉴</span>
            <div className="h-36 flex flex-col justify-between">
              <div className="w-star h-star shadow-custom2"></div>
              <div className="w-star h-star shadow-custom2"></div>
              <div className="w-star h-star shadow-custom2"></div>
            </div>
          </div>
        </div>

        {/* 이달의 책 추천 */}
      </div>
    </>
  );
};

export default Home;
