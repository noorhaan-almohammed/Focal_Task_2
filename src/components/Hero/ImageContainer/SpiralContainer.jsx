import React from "react";
import styles from "./SpiralDots.module.css";

const SpiralDot = () => {
  return <div className={styles.dot}></div>;
};
const Spiral = () => {
  const dotCount = 24; 

  return (
    <div className={styles.spiral}>
      {Array.from({ length: dotCount }).map((_, i) => (
        <SpiralDot key={i} />
      ))}
    </div>
  );
};

const BorderLines = () => (
  <>
    <div className={`${styles.border_line} ${styles.horizontal} ${styles.top}`}></div>
    <div className={`${styles.border_line} ${styles.horizontal}  ${styles.bottom}`}></div>
    <div className={`${styles.border_line} ${styles.vertical} ${styles.left}`}></div>
    <div className={`${styles.border_line} ${styles.vertical} ${styles.right}`}></div>
  </>
);

const CornerDots = () => (
  <>
    <div className={`${styles.corner_dot} ${styles.top_left}`}></div>
    <div className={`${styles.corner_dot} ${styles.top_right}`}></div>
    <div className={`${styles.corner_dot} ${styles.bottom_left}`}></div>
    <div className={`${styles.corner_dot} ${styles.bottom_right}`}></div>
  </>
);
function SpiralContainer({image}) {
  return (
    <div className={styles.image}>
    <img src={image} className={styles.img_bg} />
      <BorderLines />
      <CornerDots />
      <div className={styles.overlay}>
      <Spiral />
      </div>
      </div>
  );
}

export default SpiralContainer;
