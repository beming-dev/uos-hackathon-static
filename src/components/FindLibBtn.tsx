import Image from "next/image";

const FindLibBtn = () => {
  <div className="flex items-center align-center w-28 h-9">
    <div className="relative w-3.5 h-3.5">
      <Image src={"/icons/map.png"} alt="hell" fill />
    </div>
    <span className="font-white">도서관 찾기</span>
  </div>;
};

export default FindLibBtn;
