import React from "react"
import Button from './button.js'

function Card(props) {
  return(
    <div>
      <img src="https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a62d3af4982ddc5814fccaf356f66591&auto=format&fit=crop&w=1350&q=80"/ >
      <div>
        <h1>test</h1>
        <p>hello </p>
        <Button label="Boosted" to="/second-page" />
      </div>
    </div>
  );
}

export default Card