import Image from "next/image";

const Card = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 pt-10 w-72 h-96 relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록
      >
        <button
          className="absolute top-4 right-4 text-gray-400 text-lg"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-lg font-bold text-center mb-2 text-blue-500">
          서울도서관
        </h2>
        <p className="text-sm text-center mb-4">서울시 도서관 통합 대출증</p>
        <Image src="/qr-code.png" alt="QR Code" width={120} height={120} />
        <div className="mt-6 text-center">
          <p>이름: 김시립</p>
          <p className="my-2">생년월일: 2000-01-01</p>
          <p>회원번호: 1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
