import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'normalize.css';
import '../styles/index.scss'

import Card from '../components/card'

const Header = () => (
  <div>
    <div>
    <Card />
      <h1>
      </h1>
    </div>
  </div>

)


const TemplateWrapper = ({children}) => (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
        link={[
          {rel: 'stylesheet', href: 'https://use.typekit.net/ucd8mku.css'},
          
        ]}
      />
      <Header />
      <div>
        {children()}
      </div>
    </div>
  )


  
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}


export default TemplateWrapper