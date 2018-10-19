import React from 'react'
import Link from 'gatsby-link'



import Button from './button.js'
import styles from "../styles/components/_nav.module.scss"

function Nav(props){
  return(
    <div className = {styles.grid}>
      <h2><Link to="/">Javier Garcia</Link></h2>
      <p>Designer & Developer from San Diego.</p>
      <Button label="Contact Me" />
    </div>
  );
}

export default Nav