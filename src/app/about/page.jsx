import Image from "next/image";

export default function About() {
  return (
    <main className="container text-base px-4 mx-auto mt-10">
      <div className="flex flex-col md:flex-row gap-10 h-fit w-fit">
        <div className="flex-1">
          <div className="p-2 flex items-center justify-center">
            <Image
              className="w-full h-auto md:w-[380px] md:h-[360px] rounded-full md:bg-gray-200 object-cover"
              src="/img/steve.png"
              width="1000"
              height="1000"
              alt="avatar of steve jobs"
            />
          </div>
        </div>
        <div className="flex-[1.8]">
          <div>
            <div>
              <h3 className="text-4xl mb-4 font-semibold">About me</h3>
              <p className="text-md font-normal leading-[1.5] mb-2">
                I&apos;m <span>Uyiosa</span>, a MERN Stack Developer passionate
                about crafting dynamic Web Applications. With expertise in
                MongoDB, Express.js, React.js, and Node.js, I specialize in
                building robust and scalable solutions that elevate user
                experiences. Let&apos;s turn your ideas into reality together.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Skills and Tecnologies</h3>
              <span className="text-base font-normal">
                In my journey as a full-stack web developer, I&apos;ve embraced
                a wide array of technologies to bring ideas to life and solve
                complex problems. Here are some of the key technologies I
                leverage:
              </span>
            </div>
            <div className="ml-3 mt-2 mb-2">
              <h4 className="font-medium mb-[2px] text-lg">
                Frontend Development
              </h4>
              <ul className="ml-2">
                <li>React.js</li>
                <li>Next.js</li>
                <li>HTML5, CSS3, SCSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Boostrap</li>
              </ul>
            </div>
            <div className="ml-3 mb-2">
              <h4 className="font-medium mb-1 text-lg">Backend Development</h4>
              <ul className="ml-2">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Prisma</li>
                <li>MongoDB, MySQL, PostgreSQL, Supabase, SqLite</li>
              </ul>
            </div>
            <div className="ml-3">
              <h4 className="font-medium mb-1 text-lg">
                Version Control & Deployment
              </h4>
              <ul className="ml-2">
                <li>Git / GitHub / GitLab</li>
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
