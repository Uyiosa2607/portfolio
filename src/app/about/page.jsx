/* eslint-disable react/no-unescaped-entities */
import AppLayout from "@/components/layout/Layout";
import Image from "next/image";
import "./about.scss";

export default function About() {
  return (
    <AppLayout>
      <main className="about">
        <div className="about-left-div">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              justifyContent: "center",
            }}
            className="about-image-container"
          >
            <Image
              priority={true}
              className="about-img"
              src="/steve.png"
              width="800"
              height="800"
              alt="avatar of steve jobs"
            />
          </div>
        </div>
        <div className="about-right-div">
          <div className="about-details">
            <div className="about-me">
              <h3>About me</h3>
              <p>
              I'm <span className="dev-name">Uyiosa</span>, a MERN stack developer passionate about crafting dynamic web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in building robust and scalable solutions that elevate user experiences. Let's turn your ideas into reality together.
              </p>
            </div>
            <div className="skill">
              <h3>Skills and Tecnologies</h3>
                <span className="skills-heading">In my journey as a full-stack web developer, I've embraced a wide array of technologies to bring ideas to life and solve complex problems. Here are some of the key technologies I leverage:</span>
            </div>
            <div className="skill-container">
              <h4>Frontend Development:</h4>
              <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>HTML5, CSS3, SCSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Boostrap</li>
              </ul>
            </div>
            <div className="skill-container">
              <h4>Backend Development:</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Prisma</li>
                <li>MongoDB, MySQL, PostgreSQL, Supabase, SqLite</li>
              </ul>
            </div>
            <div className="skill-container">
              <h4>Version Control & Deployment:</h4>
              <ul>
                <li>Git / GitHub / GitLab</li>
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
