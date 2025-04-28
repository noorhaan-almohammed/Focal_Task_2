import React from 'react'
import HeaderContainer from '../HeaderContainer/HeaderContainer'
import styles from './Container.module.css'

function Container(props) {
   const content = props.content

  return (
    <div className={styles.Container}>
      <HeaderContainer btnText={content.btnText} h2Text={content.h2Text} pContent={content.pContent}/>
      {props.children}
    </div>
  )
}

export default Container
