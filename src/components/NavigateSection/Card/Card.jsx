import styles from "./Card.module.css";
import Container from "/assets/images/Container.png";
import Vector from "/assets/images/Vector.svg";

function Card({ Item }) {
  return (
    <div className={styles.Card}>
      <div>
      <h2>{Item.title}</h2>

      <div className={styles.LineContainer}>
        <img src={Container} alt="line" />
      </div>

      <p>{Item.content}</p>
      </div>
      <button className={styles.btn}>
        <span> Learn More </span> 
        <img src={Vector} alt="Vector" />
      </button>
    </div>
  );
}

export default Card;
