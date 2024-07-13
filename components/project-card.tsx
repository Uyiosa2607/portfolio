import Image from "next/image";

export default function ProjectCard() {
  return (
    <main>
      <div className="flex">
        <div className="flex-[1.2]">
          <Image
            className="w-full h-auto object-cover"
            src={"/card-template.jpeg"}
            width={600}
            height={600}
            alt="project image"
          />
        </div>
        <div className="flex-1 pl-[40px] flex flex-col  justify-center">
          <h2 className="text-[25px] mb-[20px] font-bold">Title</h2>
          <p className="text-[18px] mb-[20px] leading-[2]">
            Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally
          </p>
          <button className="uppercase py-[16px] text-[14px] rounded-md w-fit px-[80px] bg-green-600 border-none outline-none text-white font-[600]">
            case study
          </button>
        </div>
      </div>
    </main>
  );
}
