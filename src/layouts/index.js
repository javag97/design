import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../styles/index.scss'

const Header = () => (
  <div>
    <div>
      <h1>
        <Link to="/">
         Hello World  
        </Link>
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