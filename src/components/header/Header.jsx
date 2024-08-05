"use client";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <main className="sticky p-3 bg-gray-100 w-[100%] top-0 left-0 bg-transparent z-100 overflow-x-clip">
      <div className="container px-1 mx-auto">
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
          <div
            className={`absolute right-0 top-[5vh] flex flex-col gap-10 md:h-0 md:flex-row bg-gray-100 md:static z-30 text-black h-screen w-[55%] md:flex pl-5 pt-5 md:pl-0 md:pt-0 md:items-center font-medium md:justify-between md:flex-1 capitalize transform transition-transform duration-300 ease-in-out md:translate-x-0  ${
              navOpen ? "translate-x-0" : "translate-x-[100%]"
            }`}
          >
            <Link href="/">
              <p>home</p>
            </Link>
            <Link href="/about">
              <p>about</p>
            </Link>
            <Link href="/projects">
              <p>projects</p>
            </Link>
            <Link href="/contact">
              <p>contact</p>
            </Link>
          </div>
          <div
            onClick={toggleNav}
            font-bold
            className="cursor-pointer text-xl md:hidden"
          >
            {navOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </div>
        </div>
      </div>
    </main>
  );
}
