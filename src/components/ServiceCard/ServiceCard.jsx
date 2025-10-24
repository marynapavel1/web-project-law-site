import React from "react";
import Button from "../ui/Button/Button";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonWrapper}>
        <Button onClick={() => alert(`Запис на ${title}`)} size="small">
          Записатися
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
