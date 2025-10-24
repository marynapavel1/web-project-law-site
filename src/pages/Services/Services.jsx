import React, { useEffect, useRef } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import styles from "./Services.module.css";

const ServicesPage = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const el = sliderRef.current;

    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;

      e.preventDefault();

      el.scrollBy({
        left: e.deltaY * 2,
        behavior: "auto",
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel, { passive: false });
    };
  }, []);

  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.title}>Послуги</h1>

      <div className={styles.servicesSlider} ref={sliderRef}>
        <ServiceCard
          title="Сімейне право"
          description="Повний супровід у справах розлучення, поділу майна, аліментів та спадщини."
        />
        <ServiceCard
          title="Кримінальне право"
          description="Професійний захист у суді на всіх стадіях кримінального провадження."
        />
        <ServiceCard
          title="Онлайн-консультація"
          description="Індивідуальні консультації та швидка юридична допомога у будь-який час."
        />
        <ServiceCard
          title="Господарське право"
          description="Супровід бізнесу, реєстрація та ліквідація ФОП/ТОВ, вирішення спорів."
        />
        <ServiceCard
          title="Спадкове право"
          description="Допомога з оформленням спадщини, визнанням заповіту та вирішенням спорів."
        />
        <ServiceCard
          title="Нерухомість"
          description="Повний юридичний супровід угод купівлі-продажу та оренди нерухомості."
        />
      </div>
    </div>
  );
};

export default ServicesPage;
