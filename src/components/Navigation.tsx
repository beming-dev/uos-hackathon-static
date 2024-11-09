"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Card from "./Card";

const navIcon = (img: string, txt: string, onClick: () => void) => {
  return (
    <button
      key={txt}
      className="flex flex-col items-center w-16"
      onClick={onClick}
    >
      <div className="relative w-nav-icon h-nav-icon">
        <Image src={img} alt={txt} fill />
      </div>
      <span className={`${txt === "홈" ? "text-black" : "text-gray-400"}`}>
        {txt}
      </span>
    </button>
  );
};

const Navigation = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const iconArr = [
    {
      img: "/icons/card.png",
      txt: "대출증",
      onClick: () => setIsModalOpen(true),
    },
    {
      img: "/icons/bell-gray.png",
      txt: "알림",
      onClick: () => router.push("/"),
    },
    {
      img: "/icons/home-black.png",
      txt: "홈",
      onClick: () => router.push("/"),
    },
    {
      img: "/icons/person-gray.png",
      txt: "내 정보",
      onClick: () => router.push("/"),
    },
  ];

  return (
    <>
      <nav className="absolute w-screen max-w-lg h-16 bg-white bottom-0 left-0 z-10">
        <div className="w-full h-full flex justify-evenly items-center">
          {iconArr.map((icon) => navIcon(icon.img, icon.txt, icon.onClick))}
        </div>
      </nav>

      {isModalOpen && <Card onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Navigation;
