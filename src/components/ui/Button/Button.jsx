import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick, type = "button", size = "large" }) => {
  const buttonClasses = `
    ${styles.btn}
    ${size === "small" ? styles.small : styles.large}
  `;

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
