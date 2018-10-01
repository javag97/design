import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'normalize.css'
import '../styles/index.scss'
import Nav from '../components/nav'



import Footer from './footer'



const TemplateWrapper = ({children}) => (
    <div>
      <Helmet
        title="Javier Garcia's Portfolio"
        meta={[
          { name: 'description', content: 'UX Design Portfolio of Javier Garcia' },
          { name: 'keywords', content: 'UX, Web Development, Front End, Engineer, Design, Typography' },
        ]}
        link={[
          {rel: 'stylesheet', href: 'https://use.typekit.net/ucd8mku.css'},
          
        ]}
      />
       <Nav />
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  )


  
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}


export default TemplateWrapper