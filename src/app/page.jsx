/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout/Layout";
import "./home.scss";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="left-div flex-div">
          <h2>Full-Stack web Developer</h2>
          <p>
            Meet a passionate developer crafting seamless solutions that
            redefine user experiences. With a keen eye for detail and a
            commitment to innovation
          </p>
          <div className="hero-button">
            <button className="hero-btn">about me</button>
            <button className="hero-btn">projects</button>
          </div>
        </div>
        <div className="right-div flex-div">
          <div className="hero-image-container">
            <img
              className="hero-img"
              style={{
                marginTop: "18px",
                height: "320px",
                width: "320px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src="/avatar.png"
              alt="hero"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
