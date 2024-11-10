"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Recommendation = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative  flex flex-col w-full h-full px-4 py-20 overflow-y-scroll no-scrollbar pb-32">
        <span className="text-2xl tracking-widest">
          AI추천 <br></br> 맞춤 프로그램 매칭
        </span>
        <span className="text-gray-300 text-xs mt-4 mb-8">
          공공도서관이 추천하는 맞춤 기워드로 프로그램 둘러보기
        </span>

        <div className="flex text-white">
          <div className="flex flex-col w-1/2 pr-2">
            <button
              onClick={() =>
                router.push(`/recommendation/detail?str=아이와 함께하는`)
              }
              className="relative rounded-2xl w-full h-[150px] bg-[#00C387] mb-4"
            >
              <span className="text-start absolute bottom-4 left-4 text-xl">
                아이와 <br></br> 함께하는
              </span>
              <Image
                src={"/next.png"}
                alt="next"
                width={24}
                height={24}
                style={{ position: "absolute", top: "10px", right: "10px" }}
              />
            </button>
            <button
              onClick={() =>
                router.push(`/recommendation/detail?str=내손으로 뚝딱`)
              }
              className="relative rounded-2xl w-full h-[104px] bg-[#FF3873] mb-4"
            >
              <span className="text-start absolute bottom-4 left-4 text-xl">
                내손으로 뚝딱!
              </span>
              <Image
                src={"/next.png"}
                alt="next"
                width={24}
                height={24}
                style={{ position: "absolute", top: "10px", right: "10px" }}
              />
            </button>
            <button
              onClick={() =>
                router.push(`/recommendation/detail?str=나를 찾아가는 독서여행`)
              }
              className="relative rounded-2xl w-full h-[198px] bg-[#FFEA00] mb-4"
            >
              <span className="text-start absolute bottom-4 left-4 text-xl">
                나를 찾아가는 <br></br> 독서여행
              </span>
              <Image
                src={"/next.png"}
                alt="next"
                width={24}
                height={24}
                style={{ position: "absolute", top: "10px", right: "10px" }}
              />
            </button>
          </div>
          <div className=" flex flex-col w-1/2 pl-2">
            <button
              onClick={() =>
                router.push(`/recommendation/detail?str=도서관 시네마`)
              }
              className="relative rounded-2xl w-full h-[110px] bg-[#0090FF] mb-4"
            >
              <span className="text-start absolute bottom-4 left-4 text-xl">
                도서관 시네마
              </span>
              <Image
                src={"/next.png"}
                alt="next"
                width={24}
                height={24}
                style={{ position: "absolute", top: "10px", right: "10px" }}
              />
            </button>
            <button
              onClick={() =>
                router.push(`/recommendation/detail?str=별이 빛나는 밤에`)
              }
              className="relative rounded-2xl w-full h-[183px] bg-[#FFB901] mb-4"
            >
              <span className="text-start absolute bottom-4 left-4 text-xl">
                별이 <br></br> 빛나는 <br></br> 밤에
              </span>
              <Image
                src={"/next.png"}
                alt="next"
                width={24}
                height={24}
                style={{ position: "absolute", top: "10px", right: "10px" }}
              />
            </button>

            <button
              onClick={() => router.push(`/recommendation/detail?str=숲과 책`)}
              className="relative rounded-2xl w-full h-[157px] bg-[#B700FF] mb-4"
            >
              <span className="absolute bottom-4 left-4 text-xl">숲과 책</span>
              <Image
                src={"/next.png"}
                alt="next"
                width={24}
                height={24}
                style={{ position: "absolute", top: "10px", right: "10px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendation;
