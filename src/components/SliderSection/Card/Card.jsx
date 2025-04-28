import styles from "./Card.module.css";
import star from "/assets/images/icons/Star.svg";

export default function Card({ image, name, description, stars }) {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.avatarWrapper}>
          <img src={image} alt={name} className={styles.avatar} />
        </div>
        <h3 className={styles.name}>{name}</h3>
      </div>

      <div className={styles.stars}>
        {Array.from({ length: stars }).map((_, index) => (
          <img key={index} src={star} alt="star" className={styles.star} />
        ))}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
