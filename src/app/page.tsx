"use client";

import FindLibBtn from "@/components/FindLibBtn";
import Header from "@/components/Header";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home: NextPage = () => {
  const bookCategories = [
    "전체",
    "인문/역사",
    "예술",
    "종교",
    "경제/자기계발",
    "기술",
  ];
  const categories = ["전체", "강연/토크", "교육", "대회", "DIY", "계절 행사"];
  const books = ["/book2.png", "/book3.png", "/book4.png", "/book5.png"];

  const router = useRouter();

  return (
    <>
      <Header />
      <div className="relative flex flex-col items-center w-full h-full py-16 overflow-y-scroll no-scrollbar pb-40">
        <FindLibBtn />
        {/* <KakaoMap /> */}

        {/* carousel */}
        <div className="relative w-80 h-44 min-h-44">
          <Image src={"/carousel01.png"} alt="carousel" fill />
        </div>
        <div className="relative w-carousel h-carousel min-h-[5px]">
          <Image src={"/carousel.png"} alt="carousel" fill />
        </div>

        {/* My 정보 */}
        <div className="flex mt-8">
          <div className="left mr-3.5 ">
            <span className="text-sm">MY 정보</span>
            <div className="w-40 h-36 shadow-custom p-2 flex flex-col justify-between text-sm rounded-md">
              <div className="flex justify-between">
                <div className="w-16 h-16 relative bg-gray">
                  <Image src="/profile.png" alt="profile" fill />
                </div>
                <span className="mt-1">
                  김시립 님<br></br> 안녕하세요
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
              <div className="px-2 flex justify-between items-center w-star h-star shadow-custom2 rounded-md text-xs">
                <Image
                  src={"/icons/star-01.png"}
                  width={16}
                  height={16}
                  alt="icon"
                />
                <span className="ml-2 flex-1">자주 가는 도서관</span>
              </div>

              <div className="px-2 flex justify-between items-center w-star h-star shadow-custom2 rounded-md text-xs">
                <Image
                  src={"/icons/star-02.png"}
                  width={13}
                  height={15}
                  alt="icon"
                />
                <span className="ml-2 flex-1">독서토론게시판</span>
              </div>
              <div
                onClick={() =>
                  router.push(
                    "https://lib.seoul.go.kr/rwww/html/ko/hopeBook.jsp"
                  )
                }
                className="px-2 flex justify-between items-center w-star h-star shadow-custom2 rounded-md text-xs"
              >
                <Image
                  src={"/icons/star-03.png"}
                  width={14.5}
                  height={13}
                  alt="icon"
                />
                <span className="ml-2 flex-1">희망도서신청</span>
              </div>
            </div>
          </div>
        </div>

        {/* 이달의 프로그램*/}
        <div className="mt-10 w-80">
          <div className="flex justify-between">
            <span className="text-lg">이달의 프로그램</span>
            <button className="text-sm" onClick={() => router.push("/program")}>
              더보기 +
            </button>
          </div>
          <div className="mt-4">
            {categories.map((category, i) => (
              <span
                className={`text-sm mr-4 ${
                  category == "전체" ? "text-black" : "text-gray-300"
                } `}
                key={i}
              >
                {category}
              </span>
            ))}
          </div>
          <div className="flex overflow-x-scroll no-scrollbar">
            {books.map((bookUrl, i) => (
              <div
                className="relative min-w-[107px] w-[107px] h-[150px] shadow-custom2 mr-4"
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
          <div className="relative flex w-80 shadow-custom2 mt-6 p-4 rounded-lg">
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

        {/* 이달의 신간도서*/}
        <div className="mt-10 w-80">
          <div className="flex justify-between">
            <span className="text-lg">이달의 신간도서</span>
            <button className="text-sm" onClick={() => router.push("/program")}>
              더보기 +
            </button>
          </div>
          <div className="mt-4 overflow-x-scroll no-scrollbar whitespace-nowrap">
            {bookCategories.map((category, i) => (
              <span
                className={`text-sm mr-4 ${
                  category == "전체" ? "text-black" : "text-gray-300"
                } `}
                key={i}
              >
                {category}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-end mt-6 mb-4">
            <div className="w-[92px] h-[135px] relative">
              <Image src="/newBook01.png" alt="book" fill />
            </div>
            <div className="w-[147px] h-[187px] relative">
              <Image src="/newBook02.png" alt="book" fill />
            </div>
            <div className="w-[92px] h-[135px] relative">
              <Image src="/newBook03.png" alt="book" fill />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="tracking-widest">
              “ 불안한 십대를 위한 사회정서학습 ”{" "}
            </span>
            <span className="text-xs my-2">
              스트레스를 조절하고 집중력을 강화하는 마음챙김 배우기
            </span>
            <span className="text-xs text-gray-300">
              퍼트리샤 C.브로더릭 저자(글) · 김윤경 번역
            </span>
          </div>
        </div>
        {/* 신간입고장소 */}
        <div className="flex flex-col justify-center items-center mt-10 text-[#343434]">
          <span className="text-xs">신간입고장소</span>
          <div className="max-w-[320px] flex overflow-x-scroll no-scrollbar mt-2 mb-5 text-xs py-2">
            <span className="whitespace-nowrap shadow-custom3 px-2 mr-2">
              서울도서관
            </span>
            <span className="whitespace-nowrap shadow-custom3 px-2 mr-2">
              어울림도서관
            </span>
            <span className="whitespace-nowrap shadow-custom3 px-2 mr-2">
              강북구립도서관
            </span>
            <span className="whitespace-nowrap shadow-custom3 px-2 mr-2">
              노원중앙도서관
            </span>
          </div>
          <button
            className="text-xxs underline"
            onClick={() =>
              router.push("https://lib.seoul.go.kr/rwww/html/ko/hopeBook.jsp")
            }
            style={{
              textUnderlineOffset: "4px",
            }}
          >
            원하는 도서관에 신간도서 신청하기
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

/* 서울도서관 */
