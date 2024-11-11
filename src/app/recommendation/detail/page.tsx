"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

const RecommendationDetail = () => {
  const searchParams = useSearchParams();
  const str = searchParams.get("str");

  const router = useRouter();
  const [isGptUsed, setIsGptUsed] = useState(false);
  const [titleArr] = useState<string[]>([]);
  const [categoryInfoArr, setCategoryInfoArr] = useState<categoryCard[]>([]);
  const [categoryInfoArrForSave] = useState<categoryCard[]>([]);
  const [gptResult, setGptResult] = useState<number[]>([]);
  useEffect(() => {
    alert("비용 문제로 현재 비활성화 돼있습니다.");
    router.forward();
    // (async () => {
    //   await fetch("/api/program", {
    //     method: "GET",
    //     credentials: "include", // 자격 증명을 포함하여 요청
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error("Network response was not ok");
    //       }
    //       return response.json();
    //     })
    //     .then((data: categoryCard[]) => {
    //       const a = data.map((item) => item.programName);
    //       setCategoryInfoArrForSave(() => data);
    //       setTitleArr(() => a);
    //     })
    //     .catch((error) => {
    //       console.error("Fetch error:", error);
    //     });
    // })();
  }, []);

  useEffect(() => {
    if (
      categoryInfoArrForSave.length > 1 &&
      titleArr.length > 1 &&
      !isGptUsed
    ) {
      setIsGptUsed(true);
      // gpt
      (async () => {
        const prompt = `
      string 배열: ${JSON.stringify(titleArr)}
      주제: ${str}

      위의 title정보가 들어있는 string 배열과 주제를 보고 주제와 잘 맞는 title의 index를 5개 배열로 반환해줘. index는 맨 앞이 0부터 시작해.
      결과는 javascript에서 사용할 수 있는 배열 형태로 반환해줘.
      배열만 출력하고 다른 text는 붙히지 마.
      `;
        await fetch("/api/gpt", {
          method: "POST",
          credentials: "include", // 자격 증명을 포함하여 요청
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setGptResult(JSON.parse(data));
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          });
      })();
    }
  }, [categoryInfoArr, titleArr]);

  useEffect(() => {
    if (gptResult.length > 0) {
      setCategoryInfoArr(() =>
        categoryInfoArrForSave.filter((_, index) => gptResult.includes(index))
      );
    }
  }, [gptResult]);
  const dateConverter = (dateStr: string) => {
    const date = new Date(dateStr);

    // toISOString()을 사용하여 YYYY-MM-DD 형식으로 변환
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  };

  return (
    <>
      <Header />
      <div className="relative flex flex-col w-full h-full px-4 py-20 overflow-y-scroll no-scrollbar pb-32">
        <span className="text-2xl">{str}</span>

        {/* 프로그램 */}
        <div className="mt-10">
          <span>프로그램</span>
          <div className="flex flex-col ">
            {categoryInfoArr.length == 0 && (
              <div className="flex items-center justify-center mt-40">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            )}
            {categoryInfoArr.map((info, i) => (
              <button
                key={i}
                className="rounded-2xl shadow-custom2 mb-8 pb-4"
                onClick={() =>
                  router.push(`/program/detail?num=${info.programId}`)
                }
              >
                <div className="relative w-full h-[500px] rounded-2xl">
                  <Image
                    src={info.imageUrl}
                    alt="program"
                    fill
                    style={{
                      borderRadius: "1rem 1rem 0 0",
                    }}
                  />
                </div>
                <div className="flex flex-basis text-start justify-between items-center px-4 pt-4 mb-4">
                  <span className="mr-4">{info.programName}</span>
                  <span className="text-gray-400 text-xs whitespace-nowrap">
                    {info.libraryName}
                  </span>
                </div>
                <p className="text-xs px-4 w-full text-start my-2">
                  모집중 &nbsp;
                  {dateConverter(info.startProgram)} -
                  {dateConverter(info.endProgram)}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationDetail;
