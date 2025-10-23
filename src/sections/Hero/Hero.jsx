// src/sections/Hero/Hero.jsx

import React from "react";
import Button from "../../components/ui/Button/Button";
import styles from "./Hero.module.css";
import saulImage from "../../assets/Hero.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>Юридична допомога для вас</h1>
          <p className={styles.subtitle}>
            Ми допомагаємо у вирішенні юридичних
            <br />
            питань будь-якої складності
          </p>
          <div className={styles.buttonWrapper}>
            <Button onClick={() => alert("Натиснули Записатися")} size="large">
              Записатися
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={saulImage} alt="Юрист" className={styles.image} />
      </div>
    </section>
  );
};

export default Hero;
