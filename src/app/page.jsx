import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[5rem] mb-[7rem]">
        <div className="container mx-auto">
          <div className="flex gap-15">
            <div className="flex-[1.4] flex justify-center  ml-20 flex-col">
              <h2 className="text-6xl font-bold mb-6">
                Hello 🖐️, I&apos;m a Web Developer
              </h2>
              <p className="mb-4 font-medium text-md leading-1 w-[85%]">
                Meet a passionate developer crafting seamless solutions that
                redefine user experiences. With a keen eye for detail and a
                commitment to innovation
              </p>
              <div>
                <Link className="link-com" href="/projects">
                  <button className="text-sm text-white bg-black outline-none border-none capitalize font-semibold py-[18px] px-[40px] rounded-md">
                    see my works
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center w-full justify-center">
                <Image
                  className="w-[400px] object-cover h-[410px]"
                  src="/img/avatar.png"
                  alt="avatar"
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
