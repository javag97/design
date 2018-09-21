import React from 'react'


import Button from './button.js'
import styles from "../styles/components/_footer.module.scss"


function Footer(props){
  return (
    <div className = {styles.footer} >
      <h2>Javier Garcia</h2>
      <p>© 2018 Javier Garcia</p>
      <ul>
        <li>HOME </li>
        <li>DATUM </li>
        <li>SLO DO CO TO GO </li>
        <li>CAMP POLYHACKS</li>
      </ul>
      <i class="fab fa-linkedin-in"></i>
      <i class="fab fa-facebook-f"></i>
      <Button label="Contact Me" />
    </div>
  );
}

export default Footer