import React from 'react'
import Card from '../components/card'
import Layout from "../components/layout"


const IndexPage = () => (
  <div>
    <Layout>
      <div className="grid">
        <Card heading="datum" description="Connecting Aerospace to high quality suppliers."/>
        <Card heading="slo do co to go" description="Perfecting the donut indulgence."/>
        <Card heading="camp poly hacks" description="Helping the community solve real problems."/>
      </div>
    </Layout>

  </div>
)

export default IndexPage
