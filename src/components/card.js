import React from "react"
import Button from './button.js'

import styles from "../styles/components/_card.module.scss"


function Card(props) {
  return(
    <div className = {styles.card}>
        <div className = {styles.card__anchor}>
          <h2 className = {styles.card__text}>SLO DO CO TO GO</h2>
          <p className = {styles.card__text}>Connecting Aerospace to high quality suppliers</p>
        </div>
        <Button label="Read more" to="/second-page" />
      </div>

  );
}

export default Card