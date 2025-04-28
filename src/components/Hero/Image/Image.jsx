import React from 'react'
import styles from './image.module.css';
function Image({image}) {
  return (
    <div className={styles.container}>
      <img src={image} alt="hero_image" />
    </div>
  )
}

export default Image
