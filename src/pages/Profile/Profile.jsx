import React from "react";
import styles from "./Profile.module.css";

const ProfilePage = () => {
  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.title}>Профіль користувача</h1>
      <p>Email: user@example.com</p>

      <h2 className={styles.subTitle}>Ваші замовлення</h2>
      <div className={styles.orderGrid}>
        <div className={styles.orderCard}>
          <h3>Кримінальне право</h3>
          <p>Статус: В роботі</p>
        </div>
        <div className={styles.orderCard}>
          <h3>Сімейне право</h3>
          <p>Статус: Завершено</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
