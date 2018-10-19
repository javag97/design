import React from "react"
import Button from './button.js'

import styles from "../styles/components/_card.module.scss"


function Card(props) {
  return(
    <div className = {styles.card}>
        <div className = {styles.card__anchor}>
          <h2 className = {styles.card__heading}>{props.heading}</h2>
          <p className = {styles.card__description}>{props.description}</p>
        </div>
        <Button label="Read more" to={props.heading} />
      </div>

  );
}

export default Card