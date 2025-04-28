import React, { useState } from 'react';
import AccordionCard from '../AccordionCard/AccordionCard';
import styles from './AccordionGroup.module.css'

export default function AccordionGroup({ items }) {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleItem = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    const half = Math.ceil(items.length / 2);
    const leftItems = items.slice(0, half);
    const rightItems = items.slice(half);
  
    return (
      <div className={styles.AccordionGroup}>
        <div className={styles.column}>
          {leftItems.map((item, index) => (
            <AccordionCard
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
        <div className={styles.column}>
          {rightItems.map((item, index) => (
            <AccordionCard
              key={index + half}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index + half}
              onToggle={() => toggleItem(index + half)}
            />
          ))}
        </div>
      </div>
    );
  }
  