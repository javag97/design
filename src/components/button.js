import React from "react"
import Link from "gatsby-link"

import styles from "../styles/components/_button.module.scss"



function Button(props) {
  return(
  <div>
    <Link className={styles.button} to={props.to}>{props.label}</Link>
  </div>
  );
}



export default Button