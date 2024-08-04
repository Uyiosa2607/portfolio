import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[8rem] mb-[7rem]">
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex-1 flex justify-center  ml-8 flex-col">
              <h2 className="text-4xl font-bold mb-6">
                Hello 🖐️, I&apos;m a web Developer
              </h2>
              <p className="mb-4 leading-1 w-[70%]">
                Meet a passionate developer crafting seamless solutions that
                redefine user experiences. With a keen eye for detail and a
                commitment to innovation
              </p>
              <div>
                <Link className="link-com" href="/my-projects">
                  <button className="text-sm text-white bg-black outline-none border-none capitalize font-semibold py-[18px] px-[40px] rounded-md">
                    see my works
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <Image
                  className="w-[100%] h-auto"
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
