import React from 'react'
import Button from '../components/button'

const NotFoundPage = () => (
  <div>
    <h1>On darn..</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Button label="Return to safety" to="/" />
  </div>
)

export default NotFoundPage
