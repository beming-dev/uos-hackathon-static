"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navIcon = (
  img: string,
  txt: string,
  onclickUrl: string,
  router: AppRouterInstance
) => {
  return (
    <button
      key={txt}
      className="flex flex-col items-center w-16"
      onClick={() => router.push(onclickUrl)}
    >
      <div className="relative w-nav-icon h-nav-icon">
        <Image src={img} alt="bell" fill />
      </div>
      <span className={`${txt == "홈" ? "text-black" : "text-gray-400"}`}>
        {txt}
      </span>
    </button>
  );
};
const Navigation = () => {
  const router = useRouter();
  const iconArr = [
    { img: "/icons/card.png", txt: "대출증", onclickUrl: "/" },
    { img: "/icons/bell-gray.png", txt: "알림", onclickUrl: "/" },
    { img: "/icons/home-black.png", txt: "홈", onclickUrl: "/" },
    { img: "/icons/person-gray.png", txt: "내 정보", onclickUrl: "/" },
  ];

  return (
    <nav className="absolute w-full h-16 bg-white bottom-0 left-0 z-10">
      <div className="w-full h-full flex justify-evenly items-center">
        {iconArr.map((icon) =>
          navIcon(icon.img, icon.txt, icon.onclickUrl, router)
        )}
      </div>
    </nav>
  );
};

export default Navigation;
