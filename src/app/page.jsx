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
            <div className="flex-1">
              <h2>Hello 🖐️, I&apos;m a web Developer</h2>
              <p>
                Meet a passionate developer crafting seamless solutions that
                redefine user experiences. With a keen eye for detail and a
                commitment to innovation
              </p>
              <div>
                <Link className="link-com" href="/my-projects">
                  <button>see my works</button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <Image
                  className="w-full h-auto"
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
