"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const router = useRouter();

  return (
    <>
      <header className="bg-white w-screen max-w-lg h-16 flex items-center justify-between absolute top-0 left-0 z-10 px-8">
        <button onClick={toggleSidebar} className="relative w-6 h-5">
          <Image src={"/icons/hamburger.png"} alt="hamburger" fill />
        </button>

        <div className="relative w-32 h-6" onClick={() => router.push("/")}>
          <Image src={"/logo.png"} alt="logo" fill />
        </div>

        <div className="relative w-4 h-4">
          <Image src={"/icons/search.png"} alt="search" fill />
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-md z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-500"
        >
          ✕
        </button>

        {/* Sidebar Content */}
        <div className="p-6">
          <Image src="/logo.png" alt="관심목록" width={100} height={24} />
          <p className="text-lg font-semibold mt-6 mb-6">
            김시립 님 <span className="font-thin">&gt;</span>
          </p>

          <div className="flex justify-around mt-10 mb-8">
            <div className="flex flex-col justify-between items-center w-[43px] h-[54px] flex flex-col items-center">
              <Image
                src="/icons/big-heart.png"
                alt="관심목록"
                width={28}
                height={28}
              />
              <p className="text-xxs mt-1">관심목록</p>
            </div>
            <div className="flex flex-col justify-between items-center w-[43px] h-[54px] flex flex-col items-center">
              <Image
                src="/icons/calendar.png"
                alt="예약관리"
                width={24}
                height={24}
              />
              <p className="text-xxs mt-1">예약관리</p>
            </div>
            <div className="flex flex-col justify-between items-center w-[43px] h-[54px] flex flex-col items-center">
              <Image
                src="/icons/bell.png"
                alt="공지사항"
                width={24}
                height={24}
              />
              <p className="text-xxs mt-1">공지사항</p>
            </div>
            <div className="flex flex-col justify-between items-center w-[43px] h-[54px] flex flex-col items-center">
              <Image src="/icons/chat.png" alt="챗봇" width={24} height={24} />
              <p className="text-xxs mt-1">챗봇</p>
            </div>
          </div>

          <div className="border-b border-gray-300 mb-6"></div>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center border-b border-gray-400 pb-2">
              <span className="mr-2">&gt;</span> 자료검색
            </li>
            <li className="flex items-center border-b border-gray-400 pb-2">
              <span className="mr-2">&gt;</span> 디지털컬렉션
            </li>
            <li className="flex items-center border-b border-gray-400 pb-2">
              <span className="mr-2">&gt;</span> 신청 참여
            </li>
            <li className="flex items-center border-b border-gray-400 pb-2">
              <span className="mr-2">&gt;</span> 도서관 이용
            </li>
            <li className="flex items-center border-b border-gray-400 pb-2">
              <span className="mr-2">&gt;</span> 도서관 소개
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Header;
