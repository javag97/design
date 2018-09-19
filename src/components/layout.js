import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'normalize.css'
import '../styles/index.scss'

import Card from '../components/card'
import Nav from './nav'

const Header = () => (
  <div className="grid">
    <Nav />
    <Card heading="datum" description="Connecting Aerospace to high quality suppliers."/>
    <Card heading="slo do co to go" description="Perfecting the donut indulgence."/>
    <Card heading="camp poly hacks" description="Helping the community solve real problems."/>
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
        {children}
      </div>
    </div>
  )


  
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}


export default TemplateWrapper