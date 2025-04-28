import React from 'react'
import SpiralContainer from '../ImageContainer/SpiralContainer'
import styles from './hero.module.css';
import Container from '../Container/Container';
import Image from '../Image/Image';

function Hero() {
  return (
    <div className={styles.hero}>
      {/* <SpiralContainer image="./assets/images/Hero_Image.png"/> */}
      <Image image="./assets/images/Image_Container.png"/>
      <Container/>
    </div>
  )
}

export default Hero
