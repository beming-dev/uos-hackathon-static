"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { categoryCard } from "../page";
import Image from "next/image";
import Header from "@/components/Header";

const ProgramDetail = () => {
  const searchParams = useSearchParams();
  const programNum = searchParams.get("num");
  const router = useRouter();

  const [programInfo, setProgramInfo] = useState<categoryCard>();

  useEffect(() => {
    if (programNum) {
      (async () => {
        await fetch(`/api/program?num=${programNum}`, {
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
          .then((data) => {
            setProgramInfo(data);
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          });
      })();
    }
  }, [programNum]);

  const dateConverter = (dateStr: string) => {
    const date = new Date(dateStr);

    // toISOString()을 사용하여 YYYY-MM-DD 형식으로 변환
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1 필요
    const day = date.getDate();

    return `${month.toString().padStart(2, "0")}월${day
      .toString()
      .padStart(2, "0")}일`;
  }

  return (
    programInfo && (
      <>
        <div className="relative flex flex-col w-full h-full px-4 pt-20 overflow-y-scroll no-scrollbar pb-20 top-0 left-0">
          <Header />
          <div className="relative w-full h-auto min-h-[500px] mb-8">
            <Image
              src={programInfo.imageUrl}
              alt="program"
              fill
              style={{
                borderRadius: "1rem 1rem 0 0",
              }}
            />
          </div>

          <span className="text-2xl mb-4">{programInfo?.programName}</span>

          <div className="mb-6">
            <span>{programInfo?.libraryName}</span>
          </div>

          <div className="border-t-2 border-b-2 border-gray-200 py-8 px-4">
            <div className="mb-4 flex justify-between items-center">
              <span className="text-gray-300">접수기간</span>
              <span>
                {dateConverter(programInfo.acceptStart)} ~{" "}
                {dateConverter(programInfo.acceptEnd)}
              </span>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <span className="text-gray-300">강의기간</span>
              <span>
                {dateConverter(programInfo.startProgram)} ~{" "}
                {dateConverter(programInfo.endProgram)}
              </span>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <span className="text-gray-300">시간</span>
              <span></span>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <span className="text-gray-300">대상</span>
              <span>{programInfo.clientType}</span>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <span className="text-gray-300">장소</span>
              <span>{programInfo.programPlace}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex flex-col align-center">
              <span className="text-xl text-start">
                {programInfo.libraryName}
              </span>
              <span className="text-xs">
                {formatDate(programInfo.acceptStart)} ~{" "}
                {formatDate(programInfo.acceptEnd)}{" "}
              </span>
            </div>
            <button
              onClick={() => router.push(programInfo.programUrl)}
              className="text-white h-10 px-10 rounded-full bg-[#007A9F]"
            >
              예약하기
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default ProgramDetail;
