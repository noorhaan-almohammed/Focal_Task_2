import React from 'react'
import TopBanner from './TopBanner/TopBanner'
import Header from './Header/Header'
import styles from './Nav.module.css'

const list_items = [
  'Home', 'About Us' , 'Academics' , 'Admissions' , 'Student Life' , 'Contact'
]

function Navbar() {
  return (
    <nav className={styles.nav}>
      <TopBanner content="Admission is Open, Grab your seat now" img="./assets/images/Vector.svg" />
      <Header logo="./assets/images/logo.svg"
       title="./assets/images/title.svg"
        list_items={list_items}
         activeItem="Home" 
         menu_icon="./assets/images/Icon.svg" 
         close_icon="./assets/images/icon-close.svg"/>
    </nav>
  )
}

export default Navbar
