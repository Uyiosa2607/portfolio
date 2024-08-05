import Image from "next/image";

const logos = [
  {
    img: "/img/github.svg",
    url: "#",
    name: "github",
    id: 1,
  },
  {
    img: "/img/instagram.svg",
    url: "#",
    name: "instagram",
    id: 2,
  },
  {
    img: "/img/twitter.svg",
    url: "#",
    name: "twitter",
    id: 3,
  },
  {
    img: "/img/linkedin.svg",
    url: "#",
    name: "linkedin",
    id: 4,
  },
];

export default function Footer() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="w-[50%] md:w-[25%] mx-auto flex items-center justify-between">
          {logos.map((logo) => (
            <div
              className="bg-black w-fit h-fit p-2 rounded-full"
              key={logo.id}
            >
              <Image
                className="w-[18px] h-[18px]"
                width={80}
                height={80}
                alt={logo.name}
                src={logo.img}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
