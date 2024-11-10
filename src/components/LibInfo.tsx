"use client";
import Image from "next/image";
import { libData } from "./KakaoMap";
import { useRouter } from "next/navigation";

interface Props {
  libData: libData;
  setLibInfoPop: React.Dispatch<React.SetStateAction<boolean>>;
}

const LibInfo = ({ libData, setLibInfoPop }: Props) => {
  function getRandomImg() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    return "/lib0" + randomNum + ".jpg";
  }

  const router = useRouter();

  const onCloseClick = () => {
    setLibInfoPop(false);
  };
  return (
    <div className="absolute left-0 flex justify-center bottom-20 w-full bg-transparent overflow-hidden border border-gray-200 z-30">
      <button
        onClick={() => router.push(libData.homepageUrl)}
        className="w-[90%] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 z-30"
      >
        {/* 이미지 섹션 */}
        <div className="relative w-full h-48">
          {/* button box */}
          <div className="absolute z-40 right-2 top-3">
            <button className="w-6 h-6 relative mr-2">
              <Image src="/icons/heart.png" alt="heart" fill />
            </button>
            <button className="w-6 h-6 relative" onClick={onCloseClick}>
              <Image src="/icons/close.png" alt="close" fill />
            </button>
          </div>
          <Image
            src={getRandomImg()} // 이미지 파일 경로를 지정하세요.
            alt="Library"
            fill
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          </div>
        </div>

        {/* 텍스트 섹션 */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {libData.libraryName}
          </h3>
          <p className="text-sm text-gray-600">영업 중 09:00 - 18:00</p>
        </div>
      </button>
    </div>
  );
};

export default LibInfo;
