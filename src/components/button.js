import React from "react"
import styles from "../styles/button.module.scss"
import Link from "gatsby-link"


function Button(props) {
  return(
  <div>
    <Link className={styles.button} to={props.to}>{props.label}</Link>
  </div>
  );
}



export default Button