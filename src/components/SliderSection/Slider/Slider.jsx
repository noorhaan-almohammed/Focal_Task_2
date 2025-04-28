import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import Card from '../Card/Card';
import Left from '/assets/images/icons/LiftButton.svg';
import Right from '/assets/images/icons/RightButton.svg';

export default function Slider({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); 

  const updateCardsPerView = () => {
    if (window.innerWidth <= 850) {
      setCardsPerView(1);
    } else {
      setCardsPerView(3);
    }
  };

  useEffect(() => {
    updateCardsPerView(); 
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [cards.length]); 

  const visibleCards = Array.from({ length: cardsPerView }).map((_, i) => {
    const index = (currentIndex + i) % cards.length;
    return cards[index];
  });

  return (
    <>
      <button className={styles.navButton} onClick={prevSlide}>
        <img src={Left} alt="left" />
      </button>

      <div className={`${styles.slider} ${styles.slideIn}`}>
        {visibleCards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            description={card.description}
            stars={card.stars}
          />
        ))}
      </div>

      <button className={styles.navButton} onClick={nextSlide}>
        <img src={Right} alt="Right" />
      </button>
    </>
  );
}
