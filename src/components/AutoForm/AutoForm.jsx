import React from "react";
import Button from "../ui/Button/Button";
import styles from "./AutoForm.module.css";

const AuthForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Вхід/Реєстрація</h2>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input type="email" id="email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Пароль
          </label>
          <input type="password" id="password" className={styles.input} />
        </div>
        <Button type="submit">Увійти</Button>
      </form>
    </div>
  );
};

export default AuthForm;
