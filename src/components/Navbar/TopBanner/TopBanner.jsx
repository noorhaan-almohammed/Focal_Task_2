import React from "react";
import styles from "./top_banner.module.css";

function TopBanner({content , img}) {
  return (
    <div className={styles.top_banner}>
      <img src="./assets/images/left.png" className={styles.left_png} alt="left png" />
      <img src="./assets/images/top.png" className={styles.top_png} alt="top png" />
      <div className={styles.content}>
        <span>{content}</span>
        <img className={styles.img} src={img} alt="vector"></img>
      </div>
      <img src="./assets/images/top.png" className={styles.buttom_png} alt="buttom png" />
      <img src="./assets/images/right.png" className={styles.right_png} alt="right png" />
    </div>
  );
}

export default TopBanner;
