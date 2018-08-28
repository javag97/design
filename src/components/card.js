import React from "react"
import Button from './button.js'

import styles from "../styles/card.module.scss"


function Card(props) {
  return(
    <div className = {styles.card}>
      <div className = {styles.card__anchor}>
        <div className = {styles.card__text}>
          <h2>SLO DO CO TO GO</h2>
          <p>Connecting Aerospace to high quality suppliers</p>
        </div>
        <Button label="Read more" to="/second-page" />
      </div>
    </div>
  );
}

export default Card