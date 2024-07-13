import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-full text-[#111] top-0 left-0 z-100 bg-[#fafafa]">
      <div className="container font-[600] text-[16px] flex items-center justify-between mx-auto py-[14px]">
        <div className="flex gap-2 items-center hover:text-green-500">
          <Image
            className="w-[40px] bg-green-500 h-[40px] object-cover rounded-full"
            width={100}
            height={100}
            alt="Profile image"
            src={"/avatar.jpg"}
          />
          <h1 className="font-[800] uppercase tracking-[1px]">aghahowa</h1>
        </div>
        <div className="uppercase font-semibold text-[#111] flex items-center gap-[60px]">
          <p>home</p>
          <p>about</p>
          <p>projects</p>
          <p>contact</p>
        </div>
      </div>
    </header>
  );
}
