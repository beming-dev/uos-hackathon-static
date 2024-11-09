"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface GuType {
  name: string;
}

export interface categoryCard {
  acceptEnd: string;
  acceptStart: string;
  category: string;
  clientType: string;
  endProgram: string;
  imageUrl: string;
  libraryName: string;
  programId: number;
  programInstructor: string;
  programName: string;
  programPlace: string;
  programUrl: string;
  startProgram: string;
}

const Program = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>();
  const [categoryInfoArr, setCategoryInfoArr] = useState<categoryCard[]>([]);
  const [categoryInfoArrForSave, setCategoryInfoArrForSave] = useState<
    categoryCard[]
  >([]);

  const gu: GuType[] = [
    { name: "도봉구" },
    { name: "노원구" },
    { name: "강북구" },
    { name: "은평구" },
  ];

  const handleCategoryClick = (item: string) => {
    setSelectedCategory(item === selectedCategory ? null : item);
  };

  useEffect(() => {
    (async () => {
      await fetch("/api/program", {
        method: "GET",
        credentials: "include", // 자격 증명을 포함하여 요청
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data: categoryCard[]) => {
          const uniqueCategories = Array.from(
            new Set(data.map((item) => item.category))
          );
          setCategory(uniqueCategories);

          setCategoryInfoArr(() => data);
          setCategoryInfoArrForSave(() => data);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    })();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setCategoryInfoArr(
        categoryInfoArrForSave.filter(
          (item) => item.category == selectedCategory
        )
      );
    } else {
      setCategoryInfoArr(categoryInfoArrForSave);
    }
  }, [selectedCategory]);

  const dateConverter = (dateStr: string) => {
    const date = new Date(dateStr);

    // toISOString()을 사용하여 YYYY-MM-DD 형식으로 변환
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  };
  const router = useRouter();

  return (
    <>
      <Header />
      <div className="relative flex flex-col w-full h-full px-4 py-20 overflow-y-scroll no-scrollbar pb-32">
        <span className="text-2xl">프로그램 찾기</span>
        <div className="mt-10 w-20 border-b border-black">
          <select id="gu-select" className="w-full">
            {gu.map((data) => (
              <option key={data.name} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
        </div>

        {/* 카테고리 */}
        <div className="flex flex-col mt-8">
          <span className="mb-2">카테고리</span>
          <div className="flex flex-wrap">
            {category.slice(0, 12).map((item) => (
              <span
                key={item}
                className={`text-xs p-2 rounded-full my-1 mx-2 cursor-pointer ${
                  item === selectedCategory
                    ? "bg-[#007A9F] text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 프로그램 */}
        <div className="mt-10">
          <span>프로그램</span>
          <div className="flex flex-col">
            {categoryInfoArr.map((info, i) => (
              <button
                key={i}
                className="rounded-md shadow-custom2 mb-8 pb-4"
                onClick={() =>
                  router.push(`/program/detail?num=${info.programId}`)
                }
              >
                <div className="relative w-full h-96">
                  <Image src={info.imageUrl} alt="program" fill />
                </div>
                <div className="flex flex-basis text-start justify-between items-center px-4 pt-4 mb-2">
                  <span className="mr-4">{info.programName}</span>
                  <span className="text-gray-400 text-xs whitespace-nowrap">
                    {info.libraryName}
                  </span>
                </div>
                <span className="text-xs px-4 self-start">
                  모집중 &nbsp;
                  {dateConverter(info.startProgram)} -
                  {dateConverter(info.endProgram)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
