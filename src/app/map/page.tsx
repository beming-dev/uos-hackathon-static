"use client";

import KakaoMap from "@/components/KakaoMap";
import Image from "next/image";

const MapPage = () => {
  return (
    <>
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
      <KakaoMap />
    </>
  );
};

export default MapPage;
