import Image from "next/image";

const Card = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 pt-10 w-80 h-[440px] relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록
      >
        <button
          className="absolute top-4 right-4 text-gray-400 text-lg"
          onClick={onClose}
        >
          ✕
        </button>
        <Image src={"/logo.png"} width={80} height={50} alt="logo" />
        <p className="text-lg text-center mt-4">서울시 도서관 통합 대출증</p>
        <Image
          src="/qr-code.png"
          alt="QR Code"
          width={120}
          height={120}
          style={{ margin: "50px 0" }}
        />
        <div className="text-center">
          <div className="flex w-full items-center ">
            <p>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;김시립</p>
          </div>
          <div className="flex w-full justify-between justify-center items-center">
            <p className="my-2">생년월일 &nbsp;&nbsp;</p>
            <p>2000-01-01</p>
          </div>
          <div className="flex w-full justify-between justify-center items-center">
            <p>회원번호 &nbsp; &nbsp;</p>
            <p>1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
