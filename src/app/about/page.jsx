import Layout from "@/components/layout/Layout";
import Image from "next/image";
import "./about.scss";

export default function About() {
  return (
    <Layout>
      <main className="about">
        <div className="about-left-div">
          <div className="image-container">
            <Image
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                aut velit sequi expedita, incidunt nesciunt Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Corporis obcaecati
                voluptatem soluta! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nulla voluptatibus voluptates nesciunt..
              </p>
            </div>
            <div className="skill">
              <h3>Skills</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                soluta voluptatem consequuntur earum, sapiente ratione natus
                facilis iusto ipsa doloremque, iure, accusantium eaque
                obcaecati. Suscipit nemo exercitationem totam amet quas Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
                voluptatem natus. Molestias. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Obcaecati et facere a, dolores
                distinctio nam debitis, hic, repudiandae iure sunt repellendus
                cumque assumenda dignissimos impedit vero ullam. Officia, fugit
                corporis?
              </p>
            </div>
            <div className="tools">
              <h3>Technologies</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                soluta voluptatem consequuntur earum, sapiente ratione natus
                facilis iusto ipsa doloremque, iure, accusantium eaque
                obcaecati. Suscipit nemo exercitationem totam amet quas Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
                voluptatem natus. Molestias. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Obcaecati et facere a, dolores
                distinctio nam debitis, hic, repudiandae iure sunt repellendus
                cumque assumenda dignissimos impedit vero ullam. Officia, fugit
                corporis?
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
