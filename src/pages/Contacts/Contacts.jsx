import React from "react";
import styles from "./Contacts.module.css";

const ContactsPage = () => {
  return (
    <div className={styles.contactsContainer}>
      <h1 className={styles.title}>Контакти</h1>
      <div className={styles.content}>
        <div className={styles.info}>
          <h3>Наша адреса:</h3>
          <p>📍 м. Ужгород, Приклад 4</p>

          <h3>Телефон:</h3>
          <p>📞 +3809999999</p>

          <h3>Email:</h3>
          <p>📧 info@example.com</p>

          <h3>Години роботи:</h3>
          <p>🕒 Пн-Пт: 9:00-18:00</p>
        </div>
        <div className={styles.mapPlaceholder}>
          {/* інтеграція Google Maps, але заглушка */}
          Карта
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
