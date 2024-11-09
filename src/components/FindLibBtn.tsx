import Image from "next/image";
import { useRouter } from "next/navigation";

const FindLibBtn = () => {
  const router = useRouter();

  const onButtonCilck = () => {
    router.push("/map");
  };

  return (
    <button
      className="fixed bottom-20 flex items-center justify-center w-28 h-9 z-20 bg-customBlue rounded-full text-sm"
      onClick={onButtonCilck}
    >
      <div className="relative w-3.5 h-3.5 mr-1 mb-1">
        <Image src={"/icons/map.png"} alt="hell" fill />
      </div>
      <span className="text-white">도서관 찾기</span>
    </button>
  );
};

export default FindLibBtn;
