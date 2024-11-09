import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white w-screen max-w-lg h-16 flex items-center justify-between absolute top-0 left-0 z-10 px-8">
      <div className="relative w-6 h-6">
        <Image src={"/icons/hamburger.png"} alt="hamburger" fill />
      </div>

      <div className="relative w-32 h-6">
        <Image src={"/logo.png"} alt="hamburger" fill />
      </div>

      <div className="relative w-4 h-4">
        <Image src={"/icons/search.png"} alt="hamburger" fill />
      </div>
    </header>
  );
};

export default Header;
