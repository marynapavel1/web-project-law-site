import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import logoImage from "../../../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img
            src={logoImage}
            alt="Better Call Saul Logo"
            className={styles.logoIcon}
          />
          <span>BETTER CALL SAUL</span>
        </Link>
        <nav className={styles.nav}>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Контакти
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Послуги
          </NavLink>
          <NavLink to="/consultation" className={styles.navLink}>
            Замовити консультацію
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Вхід/Реєстрація
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
