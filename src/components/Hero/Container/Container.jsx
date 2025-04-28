import React from 'react';
import styles from './Container.module.css';

function TopContainer({ title, mainTitle, spanTitle, paragraph }) {
  return (
    <div className={styles.TopContainer}>
      <span className={styles.title}>{title}</span>
      <h1 className={styles.h1}>
        {mainTitle}
        <span>{spanTitle}</span>
      </h1>
      <p>{paragraph}</p>
    </div>
  );
}

const items = [
  { count: '+7000', text: 'Students Passed Out' },
  { count: '+37', text: 'Awards & Recognitions' },
  { count: '+15', text: 'Experienced Educators' },
];

function BottomContainer({ items }) {
  return (
    <section className={styles.BottomContainer}>
      {items.map((item, index) => (
        <div className={styles.item} key={index}>
          <span className={styles.count}>{item.count}</span>
          <span className={styles.text}>{item.text}</span>
          {index !== items.length - 1 && <div className={styles.hr} />}
        </div>
      ))}
    </section>
  );
}

function Container() {
  return (
    <div className={styles.Container}>
      <TopContainer
        title="Welcome to Little Learners Academy"
        mainTitle="Where Young Minds Blossom and "
        spanTitle="Dreams Take Flight."
        paragraph="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
      />
      <BottomContainer items={items} />
    </div>
  );
}

export default Container;
