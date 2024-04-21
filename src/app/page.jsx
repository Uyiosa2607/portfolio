/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout/Layout";
import "./home.scss";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="left-div flex-div">
          <h2 className="heading">Lorem ipsum dolor sit. 👋</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae, sapiente! Quidem, vero hic accusantium consectetur nemo
            laboriosam asperiores, molestias, nostrum est sunt ex error amet!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ullam ab. Dignissimos!
          </p>
        </div>
        <div className="right-div flex-div">
          <div className="wrapper">
            <div className="section-container">
              <div className="top wrapper-container">
                <div className="icon-div">
                  <img src="/folder.png" alt="folder icon" className="icon-img" />
                  <span>My Projects</span>
                </div>
                <div className="icon-div">
                  <img src="/user.png" alt="user icon" className="icon-img" />
                  <span>About me</span>
                </div>
              </div>
              <div className="bottom wrapper-container">
                <div className="icon-div">
                  <img src="/blog.png" alt="blog icon" className="icon-img" />
                  <span>My Blog</span>
                </div>
                <div className="icon-div">
                  <img src="/mail.png" alt="contact icon" className="icon-img" />
                  <span>Contact me</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
