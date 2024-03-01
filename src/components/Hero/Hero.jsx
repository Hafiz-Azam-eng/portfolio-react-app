import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hafiz Azam</h1>
        <p className={styles.description}>
          Highly skilled and results-driven Software Engineer with professional experience designing, developing, and implementing cutting-edge software solutions. Adept at leveraging technical expertise to drive project success and enhance overall efficiency. Proven ability to collaborate with cross-functional teams and adapt to evolving industry trends. Committed to continuous learning and staying at the forefront of emerging technologies.
        </p>
        <a href="mailto:ranaazamdilawar@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile-pic (2).png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
