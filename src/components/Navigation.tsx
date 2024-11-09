"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"; // 현재 경로 가져오기
import { useState } from "react";
import Card from "./Card";

const navIcon = (
  img: string,
  txt: string,
  onClick: () => void,
  isActive: boolean
) => {
  return (
    <button
      key={txt}
      className="flex flex-col items-center w-16"
      onClick={onClick}
    >
      <div className="relative w-nav-icon h-nav-icon">
        <Image src={img} alt={txt} fill />
      </div>
      <span className={isActive ? "text-black" : "text-gray-400"}>{txt}</span>
    </button>
  );
};

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname(); // 현재 경로 확인
  const [isModalOpen, setIsModalOpen] = useState(false);

  const iconArr = [
    {
      img: "/icons/card-gray.png",
      img2: "/icons/card-gray.png",
      txt: "대출증",
      onClick: () => setIsModalOpen(true),
    },
    {
      img: "/icons/bell-gray.png",
      img2: "/icons/bell-black.png",
      txt: "프로그램",
      onClick: () => router.push("/program"),
    },
    {
      img: "/icons/home-gray.png",
      img2: "/icons/home-black.png",
      txt: "홈",
      onClick: () => router.push("/"),
    },
    {
      img: "/icons/person-gray.png",
      img2: "/icons/person-black.png",
      txt: "내 정보",
      onClick: () => router.push("/"),
    },
  ];

  return (
    <>
      <nav className="absolute w-screen max-w-lg h-16 bg-white bottom-0 left-0 z-10">
        <div className="w-full h-full flex justify-evenly items-center">
          {iconArr.map((icon) =>
            navIcon(
              // 현재 경로와 아이콘 텍스트에 따라 img2 또는 img 사용
              (pathname === "/" && icon.txt === "홈") ||
                ((pathname === "/program" || pathname === "/program/detail") &&
                  icon.txt === "프로그램")
                ? icon.img2
                : icon.img,
              icon.txt,
              icon.onClick,
              // 현재 경로와 아이콘 텍스트에 따라 텍스트 색상 변경
              (pathname === "/" && icon.txt === "홈") ||
                ((pathname === "/program" || pathname === "/program/detail") &&
                  icon.txt === "프로그램")
            )
          )}
        </div>
      </nav>

      {isModalOpen && <Card onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Navigation;
