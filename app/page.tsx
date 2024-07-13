import "./home.css";
import Header from "@/components/header";
import { PiMouseScrollLight } from "react-icons/pi";
import Form from "@/components/form";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <section className="" id="home">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center pt-[1rem]  min-h-[95vh]">
            <h1 className="uppercase text-[4.3rem] leaing-[1] text-[#111] mb-[10px] font-bold text-center">
              hey, i&apos;m uyiosa &nbsp; aghahowa
            </h1>
            <p className="text-[22px] font-[400] mb-[10px] text-[#333] text-center w-[60%] mx-auto">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
            <button className="mx-auto mt-[30px] rounded-md w-fit uppercase text-[20px] my-[15px] text-white font-[600] bg-green-600 hover:bg-green-700 py-[18px] px-[80px] outline-none border-none">
              projects
            </button>
          </div>
          <div className="text-[3rem] relative bottom-5  w-full flex items-center justify-center">
            <PiMouseScrollLight />
          </div>
        </div>
      </section>
      <section id="about" className="py-[4rem] text-[16px] bg-[#fafafa]">
        <div className="container mx-auto">
          <div className="mb-[40px]">
            <h1 className="uppercase mb-[10px] text-[#111] text-[34px] font-bold text-center">
              about me
            </h1>
            <div className="bg-green-500 h-[5px] w-[40px] my-[10px] mx-auto rounded-md"></div>
            <p className="text-[20px] text-center my-[10px]">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <div className="flex gap-[50px] w-[85%] mx-auto">
            <div className="flex-1">
              <h2 className="text-[25px] text-[#111] font-bold mb-[30px]">
                Get to know me!
              </h2>
              <p className="leading-[2] font-medium">
                I&apos;m a Frontend Focused Web Developer building and managing
                the Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                Projects section. I also like sharing content related to the
                stuff that I have learned over the years in Web Development so
                it can help other people of the Dev Community. Feel free to
                Connect or Follow me on my Linkedin and Instagram where I post
                useful content related to Web Development and Programming
                I&apos;m open to Job opportunities where I can contribute, learn
                and grow. If you have a good opportunity that matches my skills
                and experience then don&apos;t hesitate to contact me.
              </p>
            </div>
            <div className="flex-1">
              <div>
                <h2 className="text-[25px] text-[#111] font-semibold mb-[30px]">
                  My Skills
                </h2>
                <div className="capitalize flex flex-wrap items-center gap-4">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>javascript</p>
                  <p>React</p>
                  <p>Node js</p>
                  <p>Express Js</p>
                  <p>Next.js</p>
                  <p>git</p>
                  <p>github</p>
                  <p>Prisma ORM</p>
                  <p>Postgress DB</p>
                  <p>MONGO DB</p>
                  <p>SQLITE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-[4rem]" id="projects">
        <div className="container mx-auto">
          <div className="mb-[40px]">
            <h3 className="uppercase mb-[10px] text-[34px] text-[#111] font-bold text-center">
              projects
            </h3>
            <div className="bg-green-500 h-[5px] w-[40px] my-[10px] mx-auto rounded-md"></div>
            <p className="text-[20px] my-[15px] w-[60%] mx-auto text-[#111] text-center">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </p>
          </div>
          <div className="flex flex-col mt-[4rem] gap-[4rem]">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
      <section className="py-[4rem]" id="contact">
        <div>
          <div className="mb-[40px]">
            <h2 className="uppercase mb-[10px]  text-[#111] text-[36px] font-bold text-center">
              contact
            </h2>
            <div className="bg-green-500 h-[5px] w-[40px] my-[10px] mx-auto rounded-md"></div>
            <p className="text-center text-[20px] w-[60%] mx-auto my-[15px]">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible Name
            </p>
          </div>
          <div className="w-[65%] mx-auto p-[3rem] bg-[#fafafa]">
            <Form />
          </div>
        </div>
      </section>
    </main>
  );
}
