import React, { useEffect } from "react";
import Hero from "../../sections/Hero/Hero";
import styles from "./HomePage.module.css";

const HomePage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.homePage}>
      <Hero />
    </div>
  );
};

export default HomePage;
