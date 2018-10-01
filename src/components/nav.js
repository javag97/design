import React from 'react'


import Button from './button.js'
import styles from "../styles/components/_nav.module.scss"

function Nav(props){
  return(
    <div className = {styles.grid}>
      <h2>Javier Garcia</h2>
      <div>
        <p>Designer & Developer from National City.</p>
        <Button label="Contact Me" />
      </div>
    </div>
  );
}

export default Nav