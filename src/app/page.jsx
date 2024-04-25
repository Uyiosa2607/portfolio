/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {

  console.log(styles)
  return (
    <Layout>
      <main className={styles.main}>
        <div className={`${styles["flex-div"]} ${styles["left-div"]}`}>
          <h2>Full Stack web Developer</h2>
          <p>
            Meet a passionate developer crafting seamless solutions that
            redefine user experiences. With a keen eye for detail and a
            commitment to innovation
          </p>
          <div className={styles["hero-button"]}>
            <Link className="link-com" href="/about"><button className={styles["hero-btn"]}>about me</button></Link>
            <Link className="link-com" href="/my-projects"><button className={styles["project-btn"]}>projects</button></Link>
          </div>
        </div>
        <div className={`${styles["flex-div"]} ${styles["right-div"]}`} >
          <div className={styles["hero-image-container"]}>
            <img
              className={styles["hero-img"]}
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
