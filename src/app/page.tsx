"use client";

import FindLibBtn from "@/components/FindLibBtn";
import Header from "@/components/Header";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";

const Home: NextPage = () => {
  const categories = ["전체", "강연/토크", "교육", "대회", "DIY", "계절 행사"];
  const books = ["/book2.png", "/book3.png", "/book4.png", "/book5.png"];

  return (
    <>
      <Header />
      <div className="relative flex flex-col items-center w-full h-full py-16 overflow-y-scroll no-scrollbar pb-32">
        <FindLibBtn />
        {/* <KakaoMap /> */}

        {/* carousel */}
        <div className="relative w-80 h-44 min-h-44">
          <Image src={"/carousel01.png"} alt="carousel" fill />
        </div>
        <div className="relative w-carousel h-carousel min-h-carousel">
          <Image src={"/carousel.png"} alt="carousel" fill />
        </div>

        {/* My 정보 */}
        <div className="flex mt-8">
          <div className="left mr-3.5 ">
            <span className="text-sm">My정보</span>
            <div className="w-40 h-36 shadow-custom p-2 flex flex-col justify-between text-sm rounded-md">
              <div className="flex justify-between">
                <div className="w-16 h-16 relative bg-gray">
                  <Image src="/profile.png" alt="profile" fill />
                </div>
                <span className="mt-1">
                  김시림 님<br></br> 안녕하세요
                </span>
              </div>
              <div className="flex flex-wrap text-xs rounded-md">
                <span className="flex-auto basis-1/2">
                  예약 &nbsp; &nbsp; 1권
                </span>
                <span className="flex-auto basis-1/2">
                  대출 &nbsp; &nbsp; 1권
                </span>
                <span className="flex-auto basis-1/2">
                  반납 &nbsp; &nbsp; 0권
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="text-sm">즐겨찾는 메뉴</span>
            <div className="h-36 flex flex-col justify-between text-sm">
              <span className=" flex justify-center items-center w-star h-star shadow-custom2 rounded-md">
                MY 도서관
              </span>
              <span className="flex justify-center items-center w-star h-star shadow-custom2 rounded-md">
                독서토론게시판
              </span>
              <span className="flex justify-center items-center w-star h-star shadow-custom2 rounded-md">
                희망도서신청
              </span>
            </div>
          </div>
        </div>

        {/* 이달의 프로그램*/}
        <div className="mt-10 w-full">
          <div className="flex justify-between">
            <span>이달의 프로그램</span>
            <button>더보기 +</button>
          </div>
          <div>
            {categories.map((category, i) => (
              <span key={i}>{category}</span>
            ))}
          </div>
          <div className="flex overflow-x-scroll no-scrollbar">
            {books.map((bookUrl, i) => (
              <div
                className="relative min-w-[107px] w-[107px] h-[150px]"
                key={i}
              >
                <Image src={bookUrl} alt="book" fill />
              </div>
            ))}
          </div>
          <div></div>
        </div>

        {/* 이달의 책 추천 */}
        <div className="mt-10">
          <span>이달의 책 추천</span>
          <div className="relative flex w-80 shadow-custom2 mt-6 p-4">
            <div className="flex flex-col">
              <span>노벨문학상 ‘한강 열풍’</span>
              <span className="text-xxs font-light mb-2">
                말라파르테 문학상, 만해문학상 수상작
              </span>
              <span className="text-xxs font-light w-2/3">
                상처의 구조에 대한 투시와 천착의 서사를 통해 한강만이 풀어낼 수
                있는 방식으로 1980년 5월을 새롭게 조명하고 있다.
              </span>
            </div>
            <div className="absolute w-[78px] h-[113px] right-4 bottom-6">
              <Image src="/book.png" alt="book" fill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

/* Rectangle 2 */
