/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import AppLayout from "@/components/layout/Layout";
import Link from "next/link";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";

export default function Home() {

  return (
    <AppLayout>
      <main className={styles.main}>
        <div className={`${styles["flex-div"]} ${styles["left-div"]}`}>
          <h2 className={styles.heading}>Hello 🖐️, I'm a web Developer</h2>
          <p className={styles.paragraph}>
            Meet a passionate developer crafting seamless solutions that
            redefine user experiences. With a keen eye for detail and a
            commitment to innovation
          </p>
          <div className={styles["hero-button"]}>
            <Link className="link-com" href="/my-projects"><button className={styles["hero-btn"]}>see my works</button></Link>
          </div>
        </div>
        <div className={`${styles["flex-div"]} ${styles["right-div"]}`} >
          <div className={styles["hero-image-container"]}>
            <img
              className={styles["hero-img"]}
              style={{
                marginTop: "18px",
                background: "#dddddd",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src="/avatar.png"
              alt="hero"
            />
          </div>
        </div>
      </main>
      <Footer/>
    </AppLayout>
  );
}
