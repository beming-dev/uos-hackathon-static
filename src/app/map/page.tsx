"use client";

import KakaoMap from "@/components/KakaoMap";
import LibInfo from "@/components/LibInfo";
import Image from "next/image";
import { useState } from "react";

const MapPage = () => {
  const [libInfoPop, setLibInfoPop] = useState(false);
  return (
    <>
      {/* <div className="flex justify-center w-full relative">
        <input
          type="text"
          className="w-4/5 h-10 text bg-gray-200 z-10 absolute rounded-full"
        ></input>
        <div className="relative w-4 h-4 z-10">
          <Image src="/icons/search.png" alt="search" fill />
        </div>
      </div> */}
      <div className="absolute top-4 w-full max-w-md mx-auto bg-transparent z-10 px-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-10 pl-12 pr-4 bg-gray-300 text-gray-900 rounded-full focus:outline-none focus:ring-2"
        />
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
          <Image
            src="/icons/search.png"
            alt="Search Icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      <button className="w-[40px] h-[38px] absolute z-20 right-4 top-20">
        <Image src="/icons/connect-gray.png" alt="connect" fill></Image>
      </button>
      <KakaoMap setLibInfoPop={setLibInfoPop} />
      {libInfoPop && <LibInfo />}
    </>
  );
};

export default MapPage;
