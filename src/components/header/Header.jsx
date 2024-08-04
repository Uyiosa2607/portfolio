import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="sticky p-3 w-[100%] top-0 left-0 bg-transparent z-100">
      <div className="container mx-auto">
        <div className="flex items-center w-full justify-between">
          <div className="flex-[1.5] flex items-center gap-2">
            <Image
              className="w-[30px] rounded-full h-[30px] object-cover"
              alt="admin_image"
              src="/img/steve.png"
              width={80}
              height={80}
            />
            <h3 className="uppercase font-semibold">aghahowa</h3>
          </div>
          <ul className="flex items-center font-medium justify-between flex-1 capitalize">
            <li className="link-item">
              <Link href="/">home</Link>
            </li>
            <li className="link-item">
              <Link href="/about">about</Link>
            </li>
            <li className="link-item">
              <Link href="/projects">projects</Link>
            </li>
            <li className="link-item">
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
