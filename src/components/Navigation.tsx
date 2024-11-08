import Image from "next/image";

const navIcon = (img: string, txt: string) => {
  return (
    <div className="flex flex-col items-center w-16">
      <div className="relative w-nav-icon h-nav-icon">
        <Image src={img} alt="bell" fill />
      </div>
      <span className="text-gray-400">{txt}</span>
    </div>
  );
};
const Navigation = () => {
  const iconArr = [
    { img: "/icons/bell-gray.png", txt: "알림" },
    { img: "/icons/home-gray.png", txt: "홈" },
    { img: "/icons/person-gray.png", txt: "내 정보" },
  ];

  return (
    <nav className="absolute w-full h-16 bg-white bottom-0 left-0 z-10">
      <div className="w-full h-full flex justify-evenly items-center">
        {iconArr.map((icon) => navIcon(icon.img, icon.txt))}
      </div>
    </nav>
  );
};

export default Navigation;
