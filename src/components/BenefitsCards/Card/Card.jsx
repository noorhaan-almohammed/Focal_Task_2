import styles from "./card.module.css";

import React from "react";

function Card({title, content, icon}) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={icon} className={styles.img} alt="card icon"></img>
      </div>
      <div className={styles.body}>
        <h2 className={styles.h2}>{title}</h2>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
}

export default Card;
