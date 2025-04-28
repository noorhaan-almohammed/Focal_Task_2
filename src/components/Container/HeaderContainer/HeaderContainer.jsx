import React from "react";
import styles from './HeaderContainer.module.css'

function HeaderContainer({btnText, h2Text, pContent}) {
  return (
    <div className={styles.benefitsCards}>
      
      <div className={styles.Container}>
        <button className={styles.btn}>{btnText}</button>
        <h2 className={styles.h2}>{h2Text}</h2>
        <p className={styles.p}>{pContent}</p>
      </div>

    </div>
  );
}

export default HeaderContainer;
