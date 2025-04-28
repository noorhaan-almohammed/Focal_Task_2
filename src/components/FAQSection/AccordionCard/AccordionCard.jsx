import React from "react";
import styles from "./AccordionCard.module.css";
import Plus from "/assets/images/icons/Plus.svg";
import Minus from "/assets/images/icons/Minus.svg";

export default function AccordionCard({ question, answer, isOpen, onToggle }) {
  return (
    <div className={styles.accordion}>
      <div
        className={`${styles.accordion__header} ${
          isOpen ? styles.open_header : ""
        }`}
        onClick={onToggle}
      >
        <span>{question}</span>
        <button className={styles.btn}>
          <img src={isOpen ? Minus : Plus} alt="button" />
        </button>
      </div>
      <div className={isOpen ? styles.LineContainer : ""}>
        <div className={isOpen ? styles.Line : ""}></div>
      </div>

      <div
        className={`${styles.accordion__wrapper} ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.accordion__content}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
