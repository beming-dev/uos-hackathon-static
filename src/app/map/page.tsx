"use client";

import KakaoMap from "@/components/KakaoMap";
import Image from "next/image";
import { useEffect } from "react";

const MapPage = () => {
  useEffect(() => {
    // 위치 정보 요청 함수
    const requestLocationPermission = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // 위치 정보를 성공적으로 가져온 경우
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log("위도:", latitude, "경도:", longitude);
            // KakaoMap 컴포넌트에 위치 정보 전달 또는 추가 로직 수행 가능
          },
          (error) => {
            // 위치 정보 요청이 거부되거나 오류가 발생한 경우
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.log("사용자가 위치 정보 제공을 거부했습니다.");
                break;
              case error.POSITION_UNAVAILABLE:
                console.log("위치 정보를 사용할 수 없습니다.");
                break;
              case error.TIMEOUT:
                console.log("요청 시간이 초과되었습니다.");
                break;
              default:
                console.log("알 수 없는 오류가 발생했습니다.");
                break;
            }
          }
        );
      } else {
        console.log("이 브라우저에서는 위치 정보를 지원하지 않습니다.");
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <>
      <div className="absolute top-4 w-full max-w-xs mx-auto bg-transparent z-10 px-8">
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
